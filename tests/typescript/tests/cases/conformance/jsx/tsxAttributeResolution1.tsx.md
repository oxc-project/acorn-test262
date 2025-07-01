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
        "start": 15,
        "end": 18
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
              "start": 32,
              "end": 39
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 40,
              "end": 43
            },
            "declare": false,
            "start": 22,
            "end": 43
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 72
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
                    "start": 77,
                    "end": 82
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
                        "start": 84,
                        "end": 92
                      },
                      "typeArguments": null,
                      "start": 84,
                      "end": 92
                    },
                    "start": 82,
                    "end": 92
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 77,
                  "end": 93
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
                    "start": 96,
                    "end": 101
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
                            "start": 105,
                            "end": 109
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 111,
                              "end": 117
                            },
                            "start": 109,
                            "end": 117
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 105,
                          "end": 117
                        }
                      ],
                      "start": 103,
                      "end": 119
                    },
                    "start": 101,
                    "end": 119
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 96,
                  "end": 120
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
                    "start": 123,
                    "end": 126
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
                            "start": 130,
                            "end": 133
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 135,
                              "end": 141
                            },
                            "start": 133,
                            "end": 141
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 130,
                          "end": 141
                        }
                      ],
                      "start": 128,
                      "end": 143
                    },
                    "start": 126,
                    "end": 143
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 123,
                  "end": 144
                }
              ],
              "start": 73,
              "end": 147
            },
            "declare": false,
            "start": 45,
            "end": 147
          }
        ],
        "start": 19,
        "end": 149
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 149
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Attribs1",
        "optional": false,
        "typeAnnotation": null,
        "start": 160,
        "end": 168
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
              "start": 172,
              "end": 173
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 176,
                "end": 182
              },
              "start": 174,
              "end": 182
            },
            "accessibility": null,
            "static": false,
            "start": 172,
            "end": 183
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
              "start": 185,
              "end": 186
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 189,
                "end": 195
              },
              "start": 187,
              "end": 195
            },
            "accessibility": null,
            "static": false,
            "start": 185,
            "end": 196
          }
        ],
        "start": 169,
        "end": 198
      },
      "declare": false,
      "start": 150,
      "end": 198
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
            "start": 207,
            "end": 212
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 213,
                "end": 214
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 216,
                  "end": 217
                },
                "start": 215,
                "end": 218
              },
              "start": 213,
              "end": 218
            }
          ],
          "selfClosing": true,
          "start": 206,
          "end": 221
        },
        "children": [],
        "closingElement": null,
        "start": 206,
        "end": 221
      },
      "directive": null,
      "start": 206,
      "end": 222
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
            "start": 230,
            "end": 235
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 229,
          "end": 238
        },
        "children": [],
        "closingElement": null,
        "start": 229,
        "end": 238
      },
      "directive": null,
      "start": 229,
      "end": 239
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
            "start": 247,
            "end": 252
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "data-x",
                "start": 253,
                "end": 259
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 261,
                  "end": 265
                },
                "start": 260,
                "end": 266
              },
              "start": 253,
              "end": 266
            }
          ],
          "selfClosing": true,
          "start": 246,
          "end": 269
        },
        "children": [],
        "closingElement": null,
        "start": 246,
        "end": 269
      },
      "directive": null,
      "start": 246,
      "end": 270
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
            "start": 279,
            "end": 284
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "reqd",
                "start": 285,
                "end": 289
              },
              "value": {
                "type": "Literal",
                "value": "true",
                "raw": "'true'",
                "start": 290,
                "end": 296
              },
              "start": 285,
              "end": 296
            }
          ],
          "selfClosing": true,
          "start": 278,
          "end": 299
        },
        "children": [],
        "closingElement": null,
        "start": 278,
        "end": 299
      },
      "directive": null,
      "start": 278,
      "end": 300
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
            "start": 308,
            "end": 313
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "reqd",
                "start": 314,
                "end": 318
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": "true",
                  "raw": "'true'",
                  "start": 320,
                  "end": 326
                },
                "start": 319,
                "end": 327
              },
              "start": 314,
              "end": 327
            }
          ],
          "selfClosing": true,
          "start": 307,
          "end": 330
        },
        "children": [],
        "closingElement": null,
        "start": 307,
        "end": 330
      },
      "directive": null,
      "start": 307,
      "end": 331
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
            "start": 350,
            "end": 355
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 356,
                "end": 357
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": "0",
                  "raw": "'0'",
                  "start": 359,
                  "end": 362
                },
                "start": 358,
                "end": 363
              },
              "start": 356,
              "end": 363
            }
          ],
          "selfClosing": true,
          "start": 349,
          "end": 366
        },
        "children": [],
        "closingElement": null,
        "start": 349,
        "end": 366
      },
      "directive": null,
      "start": 349,
      "end": 367
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
            "start": 397,
            "end": 402
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "y",
                "start": 403,
                "end": 404
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 406,
                  "end": 407
                },
                "start": 405,
                "end": 408
              },
              "start": 403,
              "end": 408
            }
          ],
          "selfClosing": true,
          "start": 396,
          "end": 411
        },
        "children": [],
        "closingElement": null,
        "start": 396,
        "end": 411
      },
      "directive": null,
      "start": 396,
      "end": 412
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
            "start": 440,
            "end": 445
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "y",
                "start": 446,
                "end": 447
              },
              "value": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 448,
                "end": 453
              },
              "start": 446,
              "end": 453
            }
          ],
          "selfClosing": true,
          "start": 439,
          "end": 456
        },
        "children": [],
        "closingElement": null,
        "start": 439,
        "end": 456
      },
      "directive": null,
      "start": 439,
      "end": 457
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
            "start": 485,
            "end": 490
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 491,
                "end": 492
              },
              "value": {
                "type": "Literal",
                "value": "32",
                "raw": "\"32\"",
                "start": 493,
                "end": 497
              },
              "start": 491,
              "end": 497
            }
          ],
          "selfClosing": true,
          "start": 484,
          "end": 500
        },
        "children": [],
        "closingElement": null,
        "start": 484,
        "end": 500
      },
      "directive": null,
      "start": 484,
      "end": 501
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
            "start": 532,
            "end": 537
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "var",
                "start": 538,
                "end": 541
              },
              "value": {
                "type": "Literal",
                "value": "10",
                "raw": "\"10\"",
                "start": 542,
                "end": 546
              },
              "start": 538,
              "end": 546
            }
          ],
          "selfClosing": true,
          "start": 531,
          "end": 549
        },
        "children": [],
        "closingElement": null,
        "start": 531,
        "end": 549
      },
      "directive": null,
      "start": 531,
      "end": 550
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
            "start": 581,
            "end": 586
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 580,
          "end": 589
        },
        "children": [],
        "closingElement": null,
        "start": 580,
        "end": 589
      },
      "directive": null,
      "start": 580,
      "end": 590
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
            "start": 615,
            "end": 620
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "reqd",
                "start": 621,
                "end": 625
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 627,
                  "end": 629
                },
                "start": 626,
                "end": 630
              },
              "start": 621,
              "end": 630
            }
          ],
          "selfClosing": true,
          "start": 614,
          "end": 633
        },
        "children": [],
        "closingElement": null,
        "start": 614,
        "end": 633
      },
      "directive": null,
      "start": 614,
      "end": 634
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
            "start": 682,
            "end": 685
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "var",
                "start": 686,
                "end": 689
              },
              "value": {
                "type": "Literal",
                "value": "var",
                "raw": "'var'",
                "start": 690,
                "end": 695
              },
              "start": 686,
              "end": 695
            }
          ],
          "selfClosing": true,
          "start": 681,
          "end": 698
        },
        "children": [],
        "closingElement": null,
        "start": 681,
        "end": 698
      },
      "directive": null,
      "start": 681,
      "end": 699
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 699
}
```
