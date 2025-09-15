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
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 42
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 43,
              "end": 46
            },
            "declare": false,
            "start": 25,
            "end": 46
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 75
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
                    "name": "test1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 80,
                    "end": 85
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Attribs1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 87,
                        "end": 95
                      },
                      "typeArguments": null,
                      "start": 87,
                      "end": 95
                    },
                    "start": 85,
                    "end": 95
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 80,
                  "end": 96
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 99,
                    "end": 104
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "reqd",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 108,
                            "end": 112
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 114,
                              "end": 120
                            },
                            "start": 112,
                            "end": 120
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 108,
                          "end": 120
                        }
                      ],
                      "start": 106,
                      "end": 122
                    },
                    "start": 104,
                    "end": 122
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 99,
                  "end": 123
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "var",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 126,
                    "end": 129
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 133,
                            "end": 136
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 138,
                              "end": 144
                            },
                            "start": 136,
                            "end": 144
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 133,
                          "end": 144
                        }
                      ],
                      "start": 131,
                      "end": 146
                    },
                    "start": 129,
                    "end": 146
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 126,
                  "end": 147
                }
              ],
              "start": 76,
              "end": 150
            },
            "declare": false,
            "start": 48,
            "end": 150
          }
        ],
        "start": 22,
        "end": 152
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 152
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Attribs1",
        "optional": false,
        "typeAnnotation": null,
        "start": 163,
        "end": 171
      },
      "typeParameters": null,
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 176
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 179,
                "end": 185
              },
              "start": 177,
              "end": 185
            },
            "accessibility": null,
            "static": false,
            "start": 175,
            "end": 186
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 188,
              "end": 189
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 192,
                "end": 198
              },
              "start": 190,
              "end": 198
            },
            "accessibility": null,
            "static": false,
            "start": 188,
            "end": 199
          }
        ],
        "start": 172,
        "end": 201
      },
      "declare": false,
      "start": 153,
      "end": 201
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 210,
            "end": 215
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 216,
                "end": 217
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 219,
                  "end": 220
                },
                "start": 218,
                "end": 221
              },
              "start": 216,
              "end": 221
            }
          ],
          "selfClosing": true,
          "start": 209,
          "end": 224
        },
        "children": [],
        "closingElement": null,
        "start": 209,
        "end": 224
      },
      "directive": null,
      "start": 209,
      "end": 225
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 233,
            "end": 238
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 232,
          "end": 241
        },
        "children": [],
        "closingElement": null,
        "start": 232,
        "end": 241
      },
      "directive": null,
      "start": 232,
      "end": 242
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 250,
            "end": 255
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "data-x",
                "start": 256,
                "end": 262
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 264,
                  "end": 268
                },
                "start": 263,
                "end": 269
              },
              "start": 256,
              "end": 269
            }
          ],
          "selfClosing": true,
          "start": 249,
          "end": 272
        },
        "children": [],
        "closingElement": null,
        "start": 249,
        "end": 272
      },
      "directive": null,
      "start": 249,
      "end": 273
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test2",
            "start": 282,
            "end": 287
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "reqd",
                "start": 288,
                "end": 292
              },
              "value": {
                "type": "Literal",
                "value": "true",
                "raw": "'true'",
                "start": 293,
                "end": 299
              },
              "start": 288,
              "end": 299
            }
          ],
          "selfClosing": true,
          "start": 281,
          "end": 302
        },
        "children": [],
        "closingElement": null,
        "start": 281,
        "end": 302
      },
      "directive": null,
      "start": 281,
      "end": 303
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test2",
            "start": 311,
            "end": 316
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "reqd",
                "start": 317,
                "end": 321
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": "true",
                  "raw": "'true'",
                  "start": 323,
                  "end": 329
                },
                "start": 322,
                "end": 330
              },
              "start": 317,
              "end": 330
            }
          ],
          "selfClosing": true,
          "start": 310,
          "end": 333
        },
        "children": [],
        "closingElement": null,
        "start": 310,
        "end": 333
      },
      "directive": null,
      "start": 310,
      "end": 334
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 353,
            "end": 358
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 359,
                "end": 360
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": "0",
                  "raw": "'0'",
                  "start": 362,
                  "end": 365
                },
                "start": 361,
                "end": 366
              },
              "start": 359,
              "end": 366
            }
          ],
          "selfClosing": true,
          "start": 352,
          "end": 369
        },
        "children": [],
        "closingElement": null,
        "start": 352,
        "end": 369
      },
      "directive": null,
      "start": 352,
      "end": 370
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 400,
            "end": 405
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "y",
                "start": 406,
                "end": 407
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 409,
                  "end": 410
                },
                "start": 408,
                "end": 411
              },
              "start": 406,
              "end": 411
            }
          ],
          "selfClosing": true,
          "start": 399,
          "end": 414
        },
        "children": [],
        "closingElement": null,
        "start": 399,
        "end": 414
      },
      "directive": null,
      "start": 399,
      "end": 415
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 443,
            "end": 448
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "y",
                "start": 449,
                "end": 450
              },
              "value": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 451,
                "end": 456
              },
              "start": 449,
              "end": 456
            }
          ],
          "selfClosing": true,
          "start": 442,
          "end": 459
        },
        "children": [],
        "closingElement": null,
        "start": 442,
        "end": 459
      },
      "directive": null,
      "start": 442,
      "end": 460
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 488,
            "end": 493
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 494,
                "end": 495
              },
              "value": {
                "type": "Literal",
                "value": "32",
                "raw": "\"32\"",
                "start": 496,
                "end": 500
              },
              "start": 494,
              "end": 500
            }
          ],
          "selfClosing": true,
          "start": 487,
          "end": 503
        },
        "children": [],
        "closingElement": null,
        "start": 487,
        "end": 503
      },
      "directive": null,
      "start": 487,
      "end": 504
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 535,
            "end": 540
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "var",
                "start": 541,
                "end": 544
              },
              "value": {
                "type": "Literal",
                "value": "10",
                "raw": "\"10\"",
                "start": 545,
                "end": 549
              },
              "start": 541,
              "end": 549
            }
          ],
          "selfClosing": true,
          "start": 534,
          "end": 552
        },
        "children": [],
        "closingElement": null,
        "start": 534,
        "end": 552
      },
      "directive": null,
      "start": 534,
      "end": 553
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test2",
            "start": 584,
            "end": 589
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 583,
          "end": 592
        },
        "children": [],
        "closingElement": null,
        "start": 583,
        "end": 592
      },
      "directive": null,
      "start": 583,
      "end": 593
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test2",
            "start": 618,
            "end": 623
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "reqd",
                "start": 624,
                "end": 628
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 630,
                  "end": 632
                },
                "start": 629,
                "end": 633
              },
              "start": 624,
              "end": 633
            }
          ],
          "selfClosing": true,
          "start": 617,
          "end": 636
        },
        "children": [],
        "closingElement": null,
        "start": 617,
        "end": 636
      },
      "directive": null,
      "start": 617,
      "end": 637
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "var",
            "start": 685,
            "end": 688
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "var",
                "start": 689,
                "end": 692
              },
              "value": {
                "type": "Literal",
                "value": "var",
                "raw": "'var'",
                "start": 693,
                "end": 698
              },
              "start": 689,
              "end": 698
            }
          ],
          "selfClosing": true,
          "start": 684,
          "end": 701
        },
        "children": [],
        "closingElement": null,
        "start": 684,
        "end": 701
      },
      "directive": null,
      "start": 684,
      "end": 702
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 702
}
```
