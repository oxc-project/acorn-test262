__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 20
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "details",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 30,
                "end": 36
              },
              "start": 28,
              "end": 36
            },
            "start": 21,
            "end": 36
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "message",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 47,
                "end": 53
              },
              "start": 45,
              "end": 53
            },
            "start": 38,
            "end": 53
          },
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 62
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 64,
                  "end": 67
                },
                "start": 64,
                "end": 69
              },
              "start": 62,
              "end": 69
            },
            "value": null,
            "start": 55,
            "end": 69
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 72,
            "end": 76
          },
          "start": 70,
          "end": 76
        },
        "body": null,
        "expression": false,
        "start": 7,
        "end": 77
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 77
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": null,
          "start": 94,
          "end": 98
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "details",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 108,
                "end": 114
              },
              "start": 106,
              "end": 114
            },
            "start": 99,
            "end": 114
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "message",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 125,
                "end": 131
              },
              "start": 123,
              "end": 131
            },
            "start": 116,
            "end": 131
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 134,
            "end": 137
          },
          "start": 132,
          "end": 137
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "details",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 151,
                  "end": 158
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 161,
                  "end": 168
                },
                "start": 151,
                "end": 168
              },
              "start": 144,
              "end": 169
            }
          ],
          "start": 138,
          "end": 171
        },
        "expression": false,
        "start": 85,
        "end": 171
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 78,
      "end": 171
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 186,
          "end": 187
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 194,
                "end": 205
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "details",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 215,
                        "end": 221
                      },
                      "start": 213,
                      "end": 221
                    },
                    "start": 206,
                    "end": 221
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "message",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 232,
                        "end": 238
                      },
                      "start": 230,
                      "end": 238
                    },
                    "start": 223,
                    "end": 238
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 243,
                      "end": 247
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 249,
                          "end": 252
                        },
                        "start": 249,
                        "end": 254
                      },
                      "start": 247,
                      "end": 254
                    },
                    "value": null,
                    "start": 240,
                    "end": 254
                  }
                ],
                "returnType": null,
                "body": null,
                "expression": false,
                "start": 205,
                "end": 256
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 194,
              "end": 256
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 261,
                "end": 272
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "details",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 282,
                        "end": 288
                      },
                      "start": 280,
                      "end": 288
                    },
                    "start": 273,
                    "end": 288
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "message",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 299,
                        "end": 305
                      },
                      "start": 297,
                      "end": 305
                    },
                    "start": 290,
                    "end": 305
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "details",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 317,
                          "end": 324
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "message",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 327,
                          "end": 334
                        },
                        "start": 317,
                        "end": 334
                      },
                      "directive": null,
                      "start": 317,
                      "end": 335
                    }
                  ],
                  "start": 307,
                  "end": 341
                },
                "expression": false,
                "start": 272,
                "end": 341
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 261,
              "end": 341
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 347,
                "end": 353
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "details",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 363,
                        "end": 369
                      },
                      "start": 361,
                      "end": 369
                    },
                    "start": 354,
                    "end": 369
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "message",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 380,
                        "end": 386
                      },
                      "start": 378,
                      "end": 386
                    },
                    "start": 371,
                    "end": 386
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 391,
                      "end": 395
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 397,
                          "end": 400
                        },
                        "start": 397,
                        "end": 402
                      },
                      "start": 395,
                      "end": 402
                    },
                    "value": null,
                    "start": 388,
                    "end": 402
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 405,
                    "end": 409
                  },
                  "start": 403,
                  "end": 409
                },
                "body": null,
                "expression": false,
                "start": 353,
                "end": 410
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 347,
              "end": 410
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 415,
                "end": 421
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "details",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 431,
                        "end": 437
                      },
                      "start": 429,
                      "end": 437
                    },
                    "start": 422,
                    "end": 437
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "message",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 448,
                        "end": 454
                      },
                      "start": 446,
                      "end": 454
                    },
                    "start": 439,
                    "end": 454
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 457,
                    "end": 460
                  },
                  "start": 455,
                  "end": 460
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "details",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 478,
                          "end": 485
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "message",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 488,
                          "end": 495
                        },
                        "start": 478,
                        "end": 495
                      },
                      "start": 471,
                      "end": 496
                    }
                  ],
                  "start": 461,
                  "end": 502
                },
                "expression": false,
                "start": 421,
                "end": 502
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 415,
              "end": 502
            }
          ],
          "start": 188,
          "end": 504
        },
        "abstract": false,
        "declare": false,
        "start": 180,
        "end": 504
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 173,
      "end": 504
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "genericFunc",
          "optional": false,
          "typeAnnotation": null,
          "start": 523,
          "end": 534
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 535,
                "end": 536
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 535,
              "end": 536
            }
          ],
          "start": 534,
          "end": 537
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "details",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 547,
                "end": 553
              },
              "start": 545,
              "end": 553
            },
            "start": 538,
            "end": 553
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "message",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 564,
                  "end": 565
                },
                "typeArguments": null,
                "start": 564,
                "end": 565
              },
              "start": 562,
              "end": 565
            },
            "start": 555,
            "end": 565
          },
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null,
              "start": 570,
              "end": 574
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 576,
                  "end": 579
                },
                "start": 576,
                "end": 581
              },
              "start": 574,
              "end": 581
            },
            "value": null,
            "start": 567,
            "end": 581
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 584,
            "end": 588
          },
          "start": 582,
          "end": 588
        },
        "body": null,
        "expression": false,
        "start": 514,
        "end": 589
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 507,
      "end": 589
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "genericFunc",
          "optional": false,
          "typeAnnotation": null,
          "start": 606,
          "end": 617
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "details",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 627,
                "end": 633
              },
              "start": 625,
              "end": 633
            },
            "start": 618,
            "end": 633
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "message",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 644,
                "end": 647
              },
              "start": 642,
              "end": 647
            },
            "start": 635,
            "end": 647
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 650,
            "end": 653
          },
          "start": 648,
          "end": 653
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "details",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 667,
                  "end": 674
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 677,
                  "end": 684
                },
                "start": 667,
                "end": 684
              },
              "start": 660,
              "end": 685
            }
          ],
          "start": 654,
          "end": 687
        },
        "expression": false,
        "start": 597,
        "end": 687
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 590,
      "end": 687
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 687
}
```
