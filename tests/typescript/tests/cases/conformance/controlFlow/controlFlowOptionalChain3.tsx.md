__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 109,
            "end": 114
          },
          "start": 109,
          "end": 114
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 120,
        "end": 127
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 102,
      "end": 128
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 140,
        "end": 143
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 148,
              "end": 151
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 153,
                "end": 160
              },
              "start": 151,
              "end": 160
            },
            "accessibility": null,
            "static": false,
            "start": 148,
            "end": 161
          }
        ],
        "start": 144,
        "end": 163
      },
      "declare": false,
      "start": 130,
      "end": 163
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 174,
        "end": 179
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 185,
                    "end": 188
                  },
                  "typeArguments": null,
                  "start": 185,
                  "end": 188
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 191,
                  "end": 200
                }
              ],
              "start": 185,
              "end": 200
            },
            "start": 183,
            "end": 200
          },
          "start": 180,
          "end": 200
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 210,
                    "end": 213
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 215,
                    "end": 218
                  },
                  "optional": true,
                  "computed": false,
                  "start": 210,
                  "end": 218
                },
                "start": 210,
                "end": 218
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 223,
                "end": 228
              },
              "start": 210,
              "end": 228
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 236,
                    "end": 239
                  },
                  "directive": null,
                  "start": 236,
                  "end": 240
                }
              ],
              "start": 230,
              "end": 244
            },
            "alternate": null,
            "start": 206,
            "end": 244
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 247,
              "end": 250
            },
            "directive": null,
            "start": 247,
            "end": 251
          }
        ],
        "start": 202,
        "end": 253
      },
      "expression": false,
      "start": 165,
      "end": 253
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 264,
        "end": 269
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 275,
                    "end": 278
                  },
                  "typeArguments": null,
                  "start": 275,
                  "end": 278
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 281,
                  "end": 290
                }
              ],
              "start": 275,
              "end": 290
            },
            "start": 273,
            "end": 290
          },
          "start": 270,
          "end": 290
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 300,
                    "end": 303
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 305,
                    "end": 308
                  },
                  "optional": true,
                  "computed": false,
                  "start": 300,
                  "end": 308
                },
                "start": 300,
                "end": 308
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 313,
                "end": 318
              },
              "start": 300,
              "end": 318
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 326,
                    "end": 329
                  },
                  "directive": null,
                  "start": 326,
                  "end": 330
                }
              ],
              "start": 320,
              "end": 334
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 346,
                    "end": 349
                  },
                  "directive": null,
                  "start": 346,
                  "end": 350
                }
              ],
              "start": 340,
              "end": 354
            },
            "start": 296,
            "end": 354
          }
        ],
        "start": 292,
        "end": 356
      },
      "expression": false,
      "start": 255,
      "end": 356
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test3",
        "optional": false,
        "typeAnnotation": null,
        "start": 367,
        "end": 372
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 375,
                "end": 378
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 375,
                "end": 378
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 375,
              "end": 378
            }
          ],
          "optional": false,
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 384,
                    "end": 387
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 389,
                            "end": 392
                          },
                          "typeArguments": null,
                          "start": 389,
                          "end": 392
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 395,
                          "end": 404
                        }
                      ],
                      "start": 389,
                      "end": 404
                    },
                    "start": 387,
                    "end": 404
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 384,
                  "end": 404
                }
              ],
              "start": 382,
              "end": 406
            },
            "start": 380,
            "end": 406
          },
          "start": 373,
          "end": 406
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 426,
                  "end": 429
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 425,
                "end": 430
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "\n      ",
                  "raw": "\n      ",
                  "start": 430,
                  "end": 437
                },
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "ChainExpression",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 438,
                            "end": 441
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 443,
                            "end": 446
                          },
                          "optional": true,
                          "computed": false,
                          "start": 438,
                          "end": 446
                        },
                        "start": 438,
                        "end": 446
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 451,
                        "end": 456
                      },
                      "start": 438,
                      "end": 456
                    },
                    "operator": "&&",
                    "right": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 460,
                      "end": 465
                    },
                    "start": 438,
                    "end": 465
                  },
                  "start": 437,
                  "end": 466
                },
                {
                  "type": "JSXText",
                  "value": "\n      ",
                  "raw": "\n      ",
                  "start": 466,
                  "end": 473
                },
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 474,
                        "end": 477
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 478,
                        "end": 481
                      },
                      "optional": false,
                      "computed": false,
                      "start": 474,
                      "end": 481
                    },
                    "consequent": {
                      "type": "Literal",
                      "value": "true",
                      "raw": "\"true\"",
                      "start": 484,
                      "end": 490
                    },
                    "alternate": {
                      "type": "Literal",
                      "value": "false",
                      "raw": "\"false\"",
                      "start": 493,
                      "end": 500
                    },
                    "start": 474,
                    "end": 500
                  },
                  "start": 473,
                  "end": 501
                },
                {
                  "type": "JSXText",
                  "value": "\n    ",
                  "raw": "\n    ",
                  "start": 501,
                  "end": 506
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 508,
                  "end": 511
                },
                "start": 506,
                "end": 512
              },
              "start": 425,
              "end": 512
            },
            "start": 412,
            "end": 517
          }
        ],
        "start": 408,
        "end": 519
      },
      "expression": false,
      "start": 358,
      "end": 519
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test4",
        "optional": false,
        "typeAnnotation": null,
        "start": 530,
        "end": 535
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 548,
                    "end": 549
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 552,
                      "end": 559
                    },
                    "start": 550,
                    "end": 559
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 548,
                  "end": 560
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 561,
                    "end": 562
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 565,
                      "end": 572
                    },
                    "start": 563,
                    "end": 572
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 561,
                  "end": 572
                }
              ],
              "start": 546,
              "end": 574
            },
            "start": 544,
            "end": 574
          },
          "start": 536,
          "end": 574
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "ChainExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 584,
                      "end": 591
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 593,
                      "end": 594
                    },
                    "optional": true,
                    "computed": false,
                    "start": 584,
                    "end": 594
                  },
                  "start": 584,
                  "end": 594
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 599,
                  "end": 604
                },
                "start": 584,
                "end": 604
              },
              "operator": "||",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "options",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 608,
                  "end": 615
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 616,
                  "end": 617
                },
                "optional": false,
                "computed": false,
                "start": 608,
                "end": 617
              },
              "start": 584,
              "end": 617
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 625,
                    "end": 632
                  },
                  "directive": null,
                  "start": 625,
                  "end": 633
                }
              ],
              "start": 619,
              "end": 637
            },
            "alternate": null,
            "start": 580,
            "end": 637
          }
        ],
        "start": 576,
        "end": 639
      },
      "expression": false,
      "start": 521,
      "end": 639
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 102,
  "end": 639
}
```
