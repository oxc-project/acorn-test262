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
        "start": 18,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 53
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
                    "type": "Literal",
                    "value": "ns:element",
                    "raw": "\"ns:element\"",
                    "start": 60,
                    "end": 72
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Literal",
                            "value": "ns:attribute",
                            "raw": "\"ns:attribute\"",
                            "start": 82,
                            "end": 96
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 98,
                              "end": 104
                            },
                            "start": 96,
                            "end": 104
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 82,
                          "end": 105
                        }
                      ],
                      "start": 74,
                      "end": 111
                    },
                    "start": 72,
                    "end": 111
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 60,
                  "end": 112
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": "ns:NamespacedUpcaseAlsoIntrinsic",
                    "raw": "\"ns:NamespacedUpcaseAlsoIntrinsic\"",
                    "start": 117,
                    "end": 151
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 153,
                      "end": 156
                    },
                    "start": 151,
                    "end": 156
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 117,
                  "end": 157
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": "NS:NamespacedUpcaseAlsoIntrinsic",
                    "raw": "\"NS:NamespacedUpcaseAlsoIntrinsic\"",
                    "start": 162,
                    "end": 196
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 198,
                      "end": 201
                    },
                    "start": 196,
                    "end": 201
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 162,
                  "end": 201
                }
              ],
              "start": 54,
              "end": 205
            },
            "declare": false,
            "start": 26,
            "end": 205
          }
        ],
        "start": 22,
        "end": 207
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 207
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
            "name": "valid",
            "optional": false,
            "typeAnnotation": null,
            "start": 215,
            "end": 220
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXNamespacedName",
                "namespace": {
                  "type": "JSXIdentifier",
                  "name": "ns",
                  "start": 224,
                  "end": 226
                },
                "name": {
                  "type": "JSXIdentifier",
                  "name": "element",
                  "start": 227,
                  "end": 234
                },
                "start": 224,
                "end": 234
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXNamespacedName",
                    "namespace": {
                      "type": "JSXIdentifier",
                      "name": "ns",
                      "start": 235,
                      "end": 237
                    },
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "attribute",
                      "start": 238,
                      "end": 247
                    },
                    "start": 235,
                    "end": 247
                  },
                  "value": {
                    "type": "Literal",
                    "value": "yep",
                    "raw": "\"yep\"",
                    "start": 248,
                    "end": 253
                  },
                  "start": 235,
                  "end": 253
                }
              ],
              "selfClosing": true,
              "start": 223,
              "end": 256
            },
            "children": [],
            "closingElement": null,
            "start": 223,
            "end": 256
          },
          "definite": false,
          "start": 215,
          "end": 256
        }
      ],
      "declare": false,
      "start": 209,
      "end": 257
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
            "name": "validUpcase1",
            "optional": false,
            "typeAnnotation": null,
            "start": 264,
            "end": 276
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXNamespacedName",
                "namespace": {
                  "type": "JSXIdentifier",
                  "name": "ns",
                  "start": 280,
                  "end": 282
                },
                "name": {
                  "type": "JSXIdentifier",
                  "name": "NamespacedUpcaseAlsoIntrinsic",
                  "start": 283,
                  "end": 312
                },
                "start": 280,
                "end": 312
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 279,
              "end": 315
            },
            "children": [],
            "closingElement": null,
            "start": 279,
            "end": 315
          },
          "definite": false,
          "start": 264,
          "end": 315
        }
      ],
      "declare": false,
      "start": 258,
      "end": 316
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
            "name": "validUpcase2",
            "optional": false,
            "typeAnnotation": null,
            "start": 323,
            "end": 335
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXNamespacedName",
                "namespace": {
                  "type": "JSXIdentifier",
                  "name": "NS",
                  "start": 339,
                  "end": 341
                },
                "name": {
                  "type": "JSXIdentifier",
                  "name": "NamespacedUpcaseAlsoIntrinsic",
                  "start": 342,
                  "end": 371
                },
                "start": 339,
                "end": 371
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 338,
              "end": 374
            },
            "children": [],
            "closingElement": null,
            "start": 338,
            "end": 374
          },
          "definite": false,
          "start": 323,
          "end": 374
        }
      ],
      "declare": false,
      "start": 317,
      "end": 375
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
            "name": "invalid1",
            "optional": false,
            "typeAnnotation": null,
            "start": 383,
            "end": 391
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "element",
                "start": 395,
                "end": 402
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 394,
              "end": 405
            },
            "children": [],
            "closingElement": null,
            "start": 394,
            "end": 405
          },
          "definite": false,
          "start": 383,
          "end": 405
        }
      ],
      "declare": false,
      "start": 377,
      "end": 406
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
            "name": "invalid2",
            "optional": false,
            "typeAnnotation": null,
            "start": 413,
            "end": 421
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXNamespacedName",
                "namespace": {
                  "type": "JSXIdentifier",
                  "name": "ns",
                  "start": 425,
                  "end": 427
                },
                "name": {
                  "type": "JSXIdentifier",
                  "name": "element",
                  "start": 428,
                  "end": 435
                },
                "start": 425,
                "end": 435
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "attribute",
                    "start": 436,
                    "end": 445
                  },
                  "value": {
                    "type": "Literal",
                    "value": "nope",
                    "raw": "\"nope\"",
                    "start": 446,
                    "end": 452
                  },
                  "start": 436,
                  "end": 452
                }
              ],
              "selfClosing": true,
              "start": 424,
              "end": 455
            },
            "children": [],
            "closingElement": null,
            "start": 424,
            "end": 455
          },
          "definite": false,
          "start": 413,
          "end": 455
        }
      ],
      "declare": false,
      "start": 407,
      "end": 456
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
            "name": "invalid3",
            "optional": false,
            "typeAnnotation": null,
            "start": 463,
            "end": 471
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXNamespacedName",
                "namespace": {
                  "type": "JSXIdentifier",
                  "name": "ns",
                  "start": 475,
                  "end": 477
                },
                "name": {
                  "type": "JSXIdentifier",
                  "name": "element",
                  "start": 478,
                  "end": 485
                },
                "start": 475,
                "end": 485
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXNamespacedName",
                    "namespace": {
                      "type": "JSXIdentifier",
                      "name": "ns",
                      "start": 486,
                      "end": 488
                    },
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "invalid",
                      "start": 489,
                      "end": 496
                    },
                    "start": 486,
                    "end": 496
                  },
                  "value": {
                    "type": "Literal",
                    "value": "nope",
                    "raw": "\"nope\"",
                    "start": 497,
                    "end": 503
                  },
                  "start": 486,
                  "end": 503
                }
              ],
              "selfClosing": true,
              "start": 474,
              "end": 506
            },
            "children": [],
            "closingElement": null,
            "start": 474,
            "end": 506
          },
          "definite": false,
          "start": 463,
          "end": 506
        }
      ],
      "declare": false,
      "start": 457,
      "end": 507
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 507
}
```
