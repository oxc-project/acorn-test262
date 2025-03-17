__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 508,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 207,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 21,
        "name": "JSX",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 22,
        "end": 207,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 26,
            "end": 205,
            "id": {
              "type": "Identifier",
              "start": 36,
              "end": 53,
              "name": "IntrinsicElements",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 54,
              "end": 205,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 60,
                  "end": 112,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 60,
                    "end": 72,
                    "value": "ns:element",
                    "raw": "\"ns:element\""
                  },
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
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Literal",
                            "start": 82,
                            "end": 96,
                            "value": "ns:attribute",
                            "raw": "\"ns:attribute\""
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 96,
                            "end": 104,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 98,
                              "end": 104
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
                },
                {
                  "type": "TSPropertySignature",
                  "start": 117,
                  "end": 157,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 117,
                    "end": 151,
                    "value": "ns:NamespacedUpcaseAlsoIntrinsic",
                    "raw": "\"ns:NamespacedUpcaseAlsoIntrinsic\""
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 151,
                    "end": 156,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 153,
                      "end": 156
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 162,
                  "end": 201,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "start": 162,
                    "end": 196,
                    "value": "NS:NamespacedUpcaseAlsoIntrinsic",
                    "raw": "\"NS:NamespacedUpcaseAlsoIntrinsic\""
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 196,
                    "end": 201,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 198,
                      "end": 201
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
      "declare": true,
      "global": false
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
          "id": {
            "type": "Identifier",
            "start": 215,
            "end": 220,
            "name": "valid",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 223,
            "end": 256,
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
                    "namespace": {
                      "type": "JSXIdentifier",
                      "start": 235,
                      "end": 237,
                      "name": "ns"
                    },
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 238,
                      "end": 247,
                      "name": "attribute"
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "start": 248,
                    "end": 253,
                    "value": "yep",
                    "raw": "\"yep\""
                  }
                }
              ],
              "name": {
                "type": "JSXNamespacedName",
                "start": 224,
                "end": 234,
                "namespace": {
                  "type": "JSXIdentifier",
                  "start": 224,
                  "end": 226,
                  "name": "ns"
                },
                "name": {
                  "type": "JSXIdentifier",
                  "start": 227,
                  "end": 234,
                  "name": "element"
                }
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
          "id": {
            "type": "Identifier",
            "start": 264,
            "end": 276,
            "name": "validUpcase1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 279,
            "end": 315,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 279,
              "end": 315,
              "attributes": [],
              "name": {
                "type": "JSXNamespacedName",
                "start": 280,
                "end": 312,
                "namespace": {
                  "type": "JSXIdentifier",
                  "start": 280,
                  "end": 282,
                  "name": "ns"
                },
                "name": {
                  "type": "JSXIdentifier",
                  "start": 283,
                  "end": 312,
                  "name": "NamespacedUpcaseAlsoIntrinsic"
                }
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
          "id": {
            "type": "Identifier",
            "start": 323,
            "end": 335,
            "name": "validUpcase2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 338,
            "end": 374,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 338,
              "end": 374,
              "attributes": [],
              "name": {
                "type": "JSXNamespacedName",
                "start": 339,
                "end": 371,
                "namespace": {
                  "type": "JSXIdentifier",
                  "start": 339,
                  "end": 341,
                  "name": "NS"
                },
                "name": {
                  "type": "JSXIdentifier",
                  "start": 342,
                  "end": 371,
                  "name": "NamespacedUpcaseAlsoIntrinsic"
                }
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
          "id": {
            "type": "Identifier",
            "start": 383,
            "end": 391,
            "name": "invalid1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 394,
            "end": 405,
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
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 413,
            "end": 421,
            "name": "invalid2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 424,
            "end": 455,
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
                    "value": "nope",
                    "raw": "\"nope\""
                  }
                }
              ],
              "name": {
                "type": "JSXNamespacedName",
                "start": 425,
                "end": 435,
                "namespace": {
                  "type": "JSXIdentifier",
                  "start": 425,
                  "end": 427,
                  "name": "ns"
                },
                "name": {
                  "type": "JSXIdentifier",
                  "start": 428,
                  "end": 435,
                  "name": "element"
                }
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
          "id": {
            "type": "Identifier",
            "start": 463,
            "end": 471,
            "name": "invalid3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 474,
            "end": 506,
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
                    "namespace": {
                      "type": "JSXIdentifier",
                      "start": 486,
                      "end": 488,
                      "name": "ns"
                    },
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 489,
                      "end": 496,
                      "name": "invalid"
                    }
                  },
                  "value": {
                    "type": "Literal",
                    "start": 497,
                    "end": 503,
                    "value": "nope",
                    "raw": "\"nope\""
                  }
                }
              ],
              "name": {
                "type": "JSXNamespacedName",
                "start": 475,
                "end": 485,
                "namespace": {
                  "type": "JSXIdentifier",
                  "start": 475,
                  "end": 477,
                  "name": "ns"
                },
                "name": {
                  "type": "JSXIdentifier",
                  "start": 478,
                  "end": 485,
                  "name": "element"
                }
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
