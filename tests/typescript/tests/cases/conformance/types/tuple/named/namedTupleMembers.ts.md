__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Segment",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 19
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 23,
                "end": 29
              },
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 31,
                "end": 37
              },
              "optional": false,
              "start": 23,
              "end": 37
            },
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "count",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 44
              },
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 46,
                "end": 52
              },
              "optional": false,
              "start": 39,
              "end": 52
            }
          ],
          "start": 22,
          "end": 53
        },
        "declare": false,
        "start": 7,
        "end": 54
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 54
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SegmentAnnotated",
          "optional": false,
          "typeAnnotation": null,
          "start": 68,
          "end": 84
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 156,
                "end": 162
              },
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 164,
                "end": 170
              },
              "optional": false,
              "start": 156,
              "end": 170
            },
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "count",
                "optional": false,
                "typeAnnotation": null,
                "start": 234,
                "end": 239
              },
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 241,
                "end": 247
              },
              "optional": false,
              "start": 234,
              "end": 247
            }
          ],
          "start": 87,
          "end": 249
        },
        "declare": false,
        "start": 63,
        "end": 250
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 56,
      "end": 250
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Segment",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 267,
                  "end": 274
                },
                "typeArguments": null,
                "start": 267,
                "end": 274
              },
              "start": 265,
              "end": 274
            },
            "start": 264,
            "end": 274
          },
          "init": null,
          "definite": false,
          "start": 264,
          "end": 274
        }
      ],
      "declare": true,
      "start": 252,
      "end": 275
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SegmentAnnotated",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 291,
                  "end": 307
                },
                "typeArguments": null,
                "start": 291,
                "end": 307
              },
              "start": 289,
              "end": 307
            },
            "start": 288,
            "end": 307
          },
          "init": null,
          "definite": false,
          "start": 288,
          "end": 307
        }
      ],
      "declare": true,
      "start": 276,
      "end": 308
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 325,
                    "end": 331
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 333,
                    "end": 339
                  }
                ],
                "start": 324,
                "end": 340
              },
              "start": 322,
              "end": 340
            },
            "start": 321,
            "end": 340
          },
          "init": null,
          "definite": false,
          "start": 321,
          "end": 340
        }
      ],
      "declare": true,
      "start": 309,
      "end": 341
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 358,
                      "end": 359
                    },
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 361,
                      "end": 367
                    },
                    "optional": false,
                    "start": 358,
                    "end": 367
                  },
                  {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 369,
                      "end": 370
                    },
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 372,
                      "end": 378
                    },
                    "optional": false,
                    "start": 369,
                    "end": 378
                  }
                ],
                "start": 357,
                "end": 379
              },
              "start": 355,
              "end": 379
            },
            "start": 354,
            "end": 379
          },
          "init": null,
          "definite": false,
          "start": 354,
          "end": 379
        }
      ],
      "declare": true,
      "start": 342,
      "end": 380
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 382,
          "end": 383
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 386,
          "end": 387
        },
        "start": 382,
        "end": 387
      },
      "directive": null,
      "start": 382,
      "end": 388
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 389,
          "end": 390
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 393,
          "end": 394
        },
        "start": 389,
        "end": 394
      },
      "directive": null,
      "start": 389,
      "end": 395
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 396,
          "end": 397
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 400,
          "end": 401
        },
        "start": 396,
        "end": 401
      },
      "directive": null,
      "start": 396,
      "end": 402
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 404,
          "end": 405
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 408,
          "end": 409
        },
        "start": 404,
        "end": 409
      },
      "directive": null,
      "start": 404,
      "end": 410
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 411,
          "end": 412
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 415,
          "end": 416
        },
        "start": 411,
        "end": 416
      },
      "directive": null,
      "start": 411,
      "end": 417
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 418,
          "end": 419
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 422,
          "end": 423
        },
        "start": 418,
        "end": 423
      },
      "directive": null,
      "start": 418,
      "end": 424
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 426,
          "end": 427
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 430,
          "end": 431
        },
        "start": 426,
        "end": 431
      },
      "directive": null,
      "start": 426,
      "end": 432
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 433,
          "end": 434
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 437,
          "end": 438
        },
        "start": 433,
        "end": 438
      },
      "directive": null,
      "start": 433,
      "end": 439
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 440,
          "end": 441
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 444,
          "end": 445
        },
        "start": 440,
        "end": 445
      },
      "directive": null,
      "start": 440,
      "end": 446
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 448,
          "end": 449
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 452,
          "end": 453
        },
        "start": 448,
        "end": 453
      },
      "directive": null,
      "start": 448,
      "end": 454
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 455,
          "end": 456
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 459,
          "end": 460
        },
        "start": 455,
        "end": 460
      },
      "directive": null,
      "start": 455,
      "end": 461
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 462,
          "end": 463
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 466,
          "end": 467
        },
        "start": 462,
        "end": 467
      },
      "directive": null,
      "start": 462,
      "end": 468
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "WithOptAndRest",
          "optional": false,
          "typeAnnotation": null,
          "start": 482,
          "end": 496
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null,
                "start": 500,
                "end": 505
              },
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 507,
                "end": 513
              },
              "optional": false,
              "start": 500,
              "end": 513
            },
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "second",
                "optional": false,
                "typeAnnotation": null,
                "start": 515,
                "end": 521
              },
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 524,
                "end": 530
              },
              "optional": true,
              "start": 515,
              "end": 530
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSNamedTupleMember",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 535,
                  "end": 539
                },
                "elementType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 541,
                    "end": 547
                  },
                  "start": 541,
                  "end": 549
                },
                "optional": false,
                "start": 535,
                "end": 549
              },
              "start": 532,
              "end": 549
            }
          ],
          "start": 499,
          "end": 550
        },
        "declare": false,
        "start": 477,
        "end": 551
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 470,
      "end": 551
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Func",
          "optional": false,
          "typeAnnotation": null,
          "start": 565,
          "end": 569
        },
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
                "start": 570,
                "end": 571
              },
              "constraint": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 580,
                  "end": 583
                },
                "start": 580,
                "end": 585
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 570,
              "end": 585
            }
          ],
          "start": 569,
          "end": 586
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 593,
                "end": 594
              },
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
                    "start": 596,
                    "end": 597
                  },
                  "typeArguments": null,
                  "start": 596,
                  "end": 597
                },
                "start": 594,
                "end": 597
              },
              "value": null,
              "start": 590,
              "end": 597
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 602,
              "end": 606
            },
            "start": 599,
            "end": 606
          },
          "start": 589,
          "end": 606
        },
        "declare": false,
        "start": 560,
        "end": 607
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 553,
      "end": 607
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null,
              "start": 622,
              "end": 626
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 629,
                  "end": 633
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 637,
                  "end": 640
                },
                "start": 629,
                "end": 640
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Func",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 644,
                  "end": 648
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SegmentAnnotated",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 649,
                        "end": 665
                      },
                      "typeArguments": null,
                      "start": 649,
                      "end": 665
                    }
                  ],
                  "start": 648,
                  "end": 666
                },
                "start": 644,
                "end": 666
              },
              "start": 629,
              "end": 666
            },
            "definite": false,
            "start": 622,
            "end": 666
          }
        ],
        "declare": false,
        "start": 616,
        "end": 667
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 609,
      "end": 667
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "useState",
          "optional": false,
          "typeAnnotation": null,
          "start": 685,
          "end": 693
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
                "start": 694,
                "end": 695
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 694,
              "end": 695
            }
          ],
          "start": 693,
          "end": 696
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "initial",
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
                  "start": 706,
                  "end": 707
                },
                "typeArguments": null,
                "start": 706,
                "end": 707
              },
              "start": 704,
              "end": 707
            },
            "start": 697,
            "end": 707
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSNamedTupleMember",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 711,
                  "end": 716
                },
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 718,
                    "end": 719
                  },
                  "typeArguments": null,
                  "start": 718,
                  "end": 719
                },
                "optional": false,
                "start": 711,
                "end": 719
              },
              {
                "type": "TSNamedTupleMember",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "setter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 721,
                  "end": 727
                },
                "elementType": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 730,
                      "end": 731
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 736,
                      "end": 740
                    },
                    "start": 733,
                    "end": 740
                  },
                  "start": 729,
                  "end": 740
                },
                "optional": false,
                "start": 721,
                "end": 740
              }
            ],
            "start": 710,
            "end": 741
          },
          "start": 708,
          "end": 741
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 755,
                  "end": 759
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 763,
                  "end": 766
                },
                "start": 755,
                "end": 766
              },
              "start": 748,
              "end": 767
            }
          ],
          "start": 742,
          "end": 769
        },
        "expression": false,
        "start": 676,
        "end": 769
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 669,
      "end": 769
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Iter",
          "optional": false,
          "typeAnnotation": null,
          "start": 784,
          "end": 788
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Func",
            "optional": false,
            "typeAnnotation": null,
            "start": 791,
            "end": 795
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "step",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 797,
                      "end": 801
                    },
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 803,
                      "end": 809
                    },
                    "optional": false,
                    "start": 797,
                    "end": 809
                  },
                  {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "iterations",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 811,
                      "end": 821
                    },
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 823,
                      "end": 829
                    },
                    "optional": false,
                    "start": 811,
                    "end": 829
                  }
                ],
                "start": 796,
                "end": 830
              }
            ],
            "start": 795,
            "end": 831
          },
          "start": 791,
          "end": 831
        },
        "declare": false,
        "start": 779,
        "end": 832
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 772,
      "end": 832
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "readSegment",
          "optional": false,
          "typeAnnotation": null,
          "start": 850,
          "end": 861
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 863,
                "end": 869
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "count",
                "optional": false,
                "typeAnnotation": null,
                "start": 871,
                "end": 876
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 880,
                    "end": 886
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 888,
                    "end": 894
                  }
                ],
                "start": 879,
                "end": 895
              },
              "start": 877,
              "end": 895
            },
            "start": 862,
            "end": 895
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 897,
          "end": 899
        },
        "expression": false,
        "start": 841,
        "end": 899
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 834,
      "end": 899
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "val",
              "optional": false,
              "typeAnnotation": null,
              "start": 998,
              "end": 1001
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 1004,
                  "end": 1008
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1012,
                  "end": 1015
                },
                "start": 1004,
                "end": 1015
              },
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Parameters",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1019,
                    "end": 1029
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "readSegment",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1037,
                          "end": 1048
                        },
                        "typeArguments": null,
                        "start": 1030,
                        "end": 1048
                      }
                    ],
                    "start": 1029,
                    "end": 1049
                  },
                  "start": 1019,
                  "end": 1049
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1050,
                    "end": 1051
                  },
                  "start": 1050,
                  "end": 1051
                },
                "start": 1019,
                "end": 1052
              },
              "start": 1004,
              "end": 1052
            },
            "definite": false,
            "start": 998,
            "end": 1052
          }
        ],
        "declare": false,
        "start": 992,
        "end": 1053
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 985,
      "end": 1053
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "RecursiveTupleA",
          "optional": false,
          "typeAnnotation": null,
          "start": 1067,
          "end": 1082
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "initial",
                "optional": false,
                "typeAnnotation": null,
                "start": 1086,
                "end": 1093
              },
              "elementType": {
                "type": "TSStringKeyword",
                "start": 1095,
                "end": 1101
              },
              "optional": false,
              "start": 1086,
              "end": 1101
            },
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "next",
                "optional": false,
                "typeAnnotation": null,
                "start": 1103,
                "end": 1107
              },
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RecursiveTupleA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1109,
                  "end": 1124
                },
                "typeArguments": null,
                "start": 1109,
                "end": 1124
              },
              "optional": false,
              "start": 1103,
              "end": 1124
            }
          ],
          "start": 1085,
          "end": 1125
        },
        "declare": false,
        "start": 1062,
        "end": 1126
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1055,
      "end": 1126
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "RecursiveTupleB",
          "optional": false,
          "typeAnnotation": null,
          "start": 1140,
          "end": 1155
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null,
                "start": 1159,
                "end": 1164
              },
              "elementType": {
                "type": "TSStringKeyword",
                "start": 1166,
                "end": 1172
              },
              "optional": false,
              "start": 1159,
              "end": 1172
            },
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "ptr",
                "optional": false,
                "typeAnnotation": null,
                "start": 1174,
                "end": 1177
              },
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RecursiveTupleB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1179,
                  "end": 1194
                },
                "typeArguments": null,
                "start": 1179,
                "end": 1194
              },
              "optional": false,
              "start": 1174,
              "end": 1194
            }
          ],
          "start": 1158,
          "end": 1195
        },
        "declare": false,
        "start": 1135,
        "end": 1196
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1128,
      "end": 1196
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RecursiveTupleA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1213,
                  "end": 1228
                },
                "typeArguments": null,
                "start": 1213,
                "end": 1228
              },
              "start": 1211,
              "end": 1228
            },
            "start": 1210,
            "end": 1228
          },
          "init": null,
          "definite": false,
          "start": 1210,
          "end": 1228
        }
      ],
      "declare": true,
      "start": 1198,
      "end": 1229
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RecursiveTupleB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1245,
                  "end": 1260
                },
                "typeArguments": null,
                "start": 1245,
                "end": 1260
              },
              "start": 1243,
              "end": 1260
            },
            "start": 1242,
            "end": 1260
          },
          "init": null,
          "definite": false,
          "start": 1242,
          "end": 1260
        }
      ],
      "declare": true,
      "start": 1230,
      "end": 1261
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "q",
          "optional": false,
          "typeAnnotation": null,
          "start": 1263,
          "end": 1264
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "r",
          "optional": false,
          "typeAnnotation": null,
          "start": 1267,
          "end": 1268
        },
        "start": 1263,
        "end": 1268
      },
      "directive": null,
      "start": 1263,
      "end": 1269
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "r",
          "optional": false,
          "typeAnnotation": null,
          "start": 1270,
          "end": 1271
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "q",
          "optional": false,
          "typeAnnotation": null,
          "start": 1274,
          "end": 1275
        },
        "start": 1270,
        "end": 1275
      },
      "directive": null,
      "start": 1270,
      "end": 1276
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "RecusiveRest",
          "optional": false,
          "typeAnnotation": null,
          "start": 1290,
          "end": 1302
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null,
                "start": 1306,
                "end": 1311
              },
              "elementType": {
                "type": "TSStringKeyword",
                "start": 1313,
                "end": 1319
              },
              "optional": false,
              "start": 1306,
              "end": 1319
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSNamedTupleMember",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1324,
                  "end": 1328
                },
                "elementType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RecusiveRest",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1330,
                      "end": 1342
                    },
                    "typeArguments": null,
                    "start": 1330,
                    "end": 1342
                  },
                  "start": 1330,
                  "end": 1344
                },
                "optional": false,
                "start": 1324,
                "end": 1344
              },
              "start": 1321,
              "end": 1344
            }
          ],
          "start": 1305,
          "end": 1345
        },
        "declare": false,
        "start": 1285,
        "end": 1346
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1278,
      "end": 1346
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "RecusiveRest2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1359,
          "end": 1372
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSStringKeyword",
              "start": 1376,
              "end": 1382
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RecusiveRest2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1387,
                    "end": 1400
                  },
                  "typeArguments": null,
                  "start": 1387,
                  "end": 1400
                },
                "start": 1387,
                "end": 1402
              },
              "start": 1384,
              "end": 1402
            }
          ],
          "start": 1375,
          "end": 1403
        },
        "declare": false,
        "start": 1354,
        "end": 1404
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1347,
      "end": 1404
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RecusiveRest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1421,
                  "end": 1433
                },
                "typeArguments": null,
                "start": 1421,
                "end": 1433
              },
              "start": 1419,
              "end": 1433
            },
            "start": 1418,
            "end": 1433
          },
          "init": null,
          "definite": false,
          "start": 1418,
          "end": 1433
        }
      ],
      "declare": true,
      "start": 1406,
      "end": 1434
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RecusiveRest2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1450,
                  "end": 1463
                },
                "typeArguments": null,
                "start": 1450,
                "end": 1463
              },
              "start": 1448,
              "end": 1463
            },
            "start": 1447,
            "end": 1463
          },
          "init": null,
          "definite": false,
          "start": 1447,
          "end": 1463
        }
      ],
      "declare": true,
      "start": 1435,
      "end": 1464
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1466,
          "end": 1467
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 1470,
          "end": 1471
        },
        "start": 1466,
        "end": 1471
      },
      "directive": null,
      "start": 1466,
      "end": 1472
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 1473,
          "end": 1474
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1477,
          "end": 1478
        },
        "start": 1473,
        "end": 1478
      },
      "directive": null,
      "start": 1473,
      "end": 1479
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 1498,
        "end": 1499
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1500,
              "end": 1501
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 1510,
                "end": 1513
              },
              "start": 1510,
              "end": 1515
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1500,
            "end": 1515
          }
        ],
        "start": 1499,
        "end": 1516
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1520,
            "end": 1521
          },
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
                "start": 1523,
                "end": 1524
              },
              "typeArguments": null,
              "start": 1523,
              "end": 1524
            },
            "start": 1521,
            "end": 1524
          },
          "value": null,
          "start": 1517,
          "end": 1524
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1527,
            "end": 1528
          },
          "typeArguments": null,
          "start": 1527,
          "end": 1528
        },
        "start": 1525,
        "end": 1528
      },
      "body": null,
      "expression": false,
      "start": 1481,
      "end": 1529
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 1547,
        "end": 1548
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "elem",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 1555,
              "end": 1561
            },
            "start": 1553,
            "end": 1561
          },
          "start": 1549,
          "end": 1561
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "index",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1570,
              "end": 1576
            },
            "start": 1568,
            "end": 1576
          },
          "start": 1563,
          "end": 1576
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSObjectKeyword",
          "start": 1579,
          "end": 1585
        },
        "start": 1577,
        "end": 1585
      },
      "body": null,
      "expression": false,
      "start": 1530,
      "end": 1586
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getArgsForInjection",
        "optional": false,
        "typeAnnotation": null,
        "start": 1604,
        "end": 1623
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1624,
              "end": 1625
            },
            "constraint": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1638,
                    "end": 1642
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 1644,
                        "end": 1647
                      },
                      "start": 1644,
                      "end": 1649
                    },
                    "start": 1642,
                    "end": 1649
                  },
                  "value": null,
                  "start": 1635,
                  "end": 1649
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1654,
                  "end": 1657
                },
                "start": 1651,
                "end": 1657
              },
              "start": 1634,
              "end": 1657
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1624,
            "end": 1657
          }
        ],
        "start": 1623,
        "end": 1658
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                "start": 1662,
                "end": 1663
              },
              "typeArguments": null,
              "start": 1662,
              "end": 1663
            },
            "start": 1660,
            "end": 1663
          },
          "start": 1659,
          "end": 1663
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Parameters",
            "optional": false,
            "typeAnnotation": null,
            "start": 1666,
            "end": 1676
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1677,
                  "end": 1678
                },
                "typeArguments": null,
                "start": 1677,
                "end": 1678
              }
            ],
            "start": 1676,
            "end": 1679
          },
          "start": 1666,
          "end": 1679
        },
        "start": 1664,
        "end": 1679
      },
      "body": null,
      "expression": false,
      "start": 1587,
      "end": 1680
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "argumentsOfGAsFirstArgument",
              "optional": false,
              "typeAnnotation": null,
              "start": 1695,
              "end": 1722
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 1725,
                "end": 1726
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getArgsForInjection",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1727,
                    "end": 1746
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1747,
                      "end": 1748
                    }
                  ],
                  "optional": false,
                  "start": 1727,
                  "end": 1749
                }
              ],
              "optional": false,
              "start": 1725,
              "end": 1750
            },
            "definite": false,
            "start": 1695,
            "end": 1750
          }
        ],
        "declare": false,
        "start": 1689,
        "end": 1751
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1682,
      "end": 1751
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "argumentsOfG",
              "optional": false,
              "typeAnnotation": null,
              "start": 1818,
              "end": 1830
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 1833,
                "end": 1834
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getArgsForInjection",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1838,
                      "end": 1857
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1858,
                        "end": 1859
                      }
                    ],
                    "optional": false,
                    "start": 1838,
                    "end": 1860
                  },
                  "start": 1835,
                  "end": 1860
                }
              ],
              "optional": false,
              "start": 1833,
              "end": 1861
            },
            "definite": false,
            "start": 1818,
            "end": 1861
          }
        ],
        "declare": false,
        "start": 1812,
        "end": 1862
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1805,
      "end": 1862
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1899
}
```
