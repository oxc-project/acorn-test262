__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1900,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 54,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 54,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 19,
          "name": "Segment",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 22,
          "end": 53,
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "start": 23,
              "end": 37,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 31,
                "end": 37
              },
              "label": {
                "type": "Identifier",
                "start": 23,
                "end": 29,
                "name": "length",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "optional": false
            },
            {
              "type": "TSNamedTupleMember",
              "start": 39,
              "end": 52,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 46,
                "end": 52
              },
              "label": {
                "type": "Identifier",
                "start": 39,
                "end": 44,
                "name": "count",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "optional": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 56,
      "end": 250,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 63,
        "end": 250,
        "id": {
          "type": "Identifier",
          "start": 68,
          "end": 84,
          "name": "SegmentAnnotated",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 87,
          "end": 249,
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "start": 156,
              "end": 170,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 164,
                "end": 170
              },
              "label": {
                "type": "Identifier",
                "start": 156,
                "end": 162,
                "name": "length",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "optional": false
            },
            {
              "type": "TSNamedTupleMember",
              "start": 234,
              "end": 247,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 241,
                "end": 247
              },
              "label": {
                "type": "Identifier",
                "start": 234,
                "end": 239,
                "name": "count",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "optional": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "VariableDeclaration",
      "start": 252,
      "end": 275,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 264,
          "end": 274,
          "id": {
            "type": "Identifier",
            "start": 264,
            "end": 274,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 265,
              "end": 274,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 267,
                "end": 274,
                "typeName": {
                  "type": "Identifier",
                  "start": 267,
                  "end": 274,
                  "name": "Segment",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 276,
      "end": 308,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 288,
          "end": 307,
          "id": {
            "type": "Identifier",
            "start": 288,
            "end": 307,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 289,
              "end": 307,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 291,
                "end": 307,
                "typeName": {
                  "type": "Identifier",
                  "start": 291,
                  "end": 307,
                  "name": "SegmentAnnotated",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 309,
      "end": 341,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 321,
          "end": 340,
          "id": {
            "type": "Identifier",
            "start": 321,
            "end": 340,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 322,
              "end": 340,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 324,
                "end": 340,
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
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 342,
      "end": 380,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 354,
          "end": 379,
          "id": {
            "type": "Identifier",
            "start": 354,
            "end": 379,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 355,
              "end": 379,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 357,
                "end": 379,
                "elementTypes": [
                  {
                    "type": "TSNamedTupleMember",
                    "start": 358,
                    "end": 367,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 361,
                      "end": 367
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 358,
                      "end": 359,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "optional": false
                  },
                  {
                    "type": "TSNamedTupleMember",
                    "start": 369,
                    "end": 378,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 372,
                      "end": 378
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 369,
                      "end": 370,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "optional": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 382,
      "end": 388,
      "expression": {
        "type": "AssignmentExpression",
        "start": 382,
        "end": 387,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 382,
          "end": 383,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 386,
          "end": 387,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 389,
      "end": 395,
      "expression": {
        "type": "AssignmentExpression",
        "start": 389,
        "end": 394,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 389,
          "end": 390,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 393,
          "end": 394,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 396,
      "end": 402,
      "expression": {
        "type": "AssignmentExpression",
        "start": 396,
        "end": 401,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 396,
          "end": 397,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 400,
          "end": 401,
          "name": "d",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 404,
      "end": 410,
      "expression": {
        "type": "AssignmentExpression",
        "start": 404,
        "end": 409,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 404,
          "end": 405,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 408,
          "end": 409,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 411,
      "end": 417,
      "expression": {
        "type": "AssignmentExpression",
        "start": 411,
        "end": 416,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 411,
          "end": 412,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 415,
          "end": 416,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 418,
      "end": 424,
      "expression": {
        "type": "AssignmentExpression",
        "start": 418,
        "end": 423,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 418,
          "end": 419,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 422,
          "end": 423,
          "name": "d",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 426,
      "end": 432,
      "expression": {
        "type": "AssignmentExpression",
        "start": 426,
        "end": 431,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 426,
          "end": 427,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 430,
          "end": 431,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 433,
      "end": 439,
      "expression": {
        "type": "AssignmentExpression",
        "start": 433,
        "end": 438,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 433,
          "end": 434,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 437,
          "end": 438,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 440,
      "end": 446,
      "expression": {
        "type": "AssignmentExpression",
        "start": 440,
        "end": 445,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 440,
          "end": 441,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 444,
          "end": 445,
          "name": "d",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 448,
      "end": 454,
      "expression": {
        "type": "AssignmentExpression",
        "start": 448,
        "end": 453,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 448,
          "end": 449,
          "name": "d",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 452,
          "end": 453,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 455,
      "end": 461,
      "expression": {
        "type": "AssignmentExpression",
        "start": 455,
        "end": 460,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 455,
          "end": 456,
          "name": "d",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 459,
          "end": 460,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 462,
      "end": 468,
      "expression": {
        "type": "AssignmentExpression",
        "start": 462,
        "end": 467,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 462,
          "end": 463,
          "name": "d",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 466,
          "end": 467,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 470,
      "end": 551,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 477,
        "end": 551,
        "id": {
          "type": "Identifier",
          "start": 482,
          "end": 496,
          "name": "WithOptAndRest",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 499,
          "end": 550,
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "start": 500,
              "end": 513,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 507,
                "end": 513
              },
              "label": {
                "type": "Identifier",
                "start": 500,
                "end": 505,
                "name": "first",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "optional": false
            },
            {
              "type": "TSNamedTupleMember",
              "start": 515,
              "end": 530,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 524,
                "end": 530
              },
              "label": {
                "type": "Identifier",
                "start": 515,
                "end": 521,
                "name": "second",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "optional": true
            },
            {
              "type": "TSRestType",
              "start": 532,
              "end": 549,
              "typeAnnotation": {
                "type": "TSNamedTupleMember",
                "start": 535,
                "end": 549,
                "elementType": {
                  "type": "TSArrayType",
                  "start": 541,
                  "end": 549,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 541,
                    "end": 547
                  }
                },
                "label": {
                  "type": "Identifier",
                  "start": 535,
                  "end": 539,
                  "name": "rest",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "optional": false
              }
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 553,
      "end": 607,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 560,
        "end": 607,
        "id": {
          "type": "Identifier",
          "start": 565,
          "end": 569,
          "name": "Func",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 569,
          "end": 586,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 570,
              "end": 585,
              "name": {
                "type": "Identifier",
                "start": 570,
                "end": 571,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSArrayType",
                "start": 580,
                "end": 585,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 580,
                  "end": 583
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 589,
          "end": 606,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "start": 590,
              "end": 597,
              "argument": {
                "type": "Identifier",
                "start": 593,
                "end": 594,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 594,
                "end": 597,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 596,
                  "end": 597,
                  "typeName": {
                    "type": "Identifier",
                    "start": 596,
                    "end": 597,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "value": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 599,
            "end": 606,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 602,
              "end": 606
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 609,
      "end": 667,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 616,
        "end": 667,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 622,
            "end": 666,
            "id": {
              "type": "Identifier",
              "start": 622,
              "end": 626,
              "name": "func",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "TSAsExpression",
              "start": 629,
              "end": 666,
              "expression": {
                "type": "TSAsExpression",
                "start": 629,
                "end": 640,
                "expression": {
                  "type": "Literal",
                  "start": 629,
                  "end": 633,
                  "value": null,
                  "raw": "null"
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 637,
                  "end": 640
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 644,
                "end": 666,
                "typeName": {
                  "type": "Identifier",
                  "start": 644,
                  "end": 648,
                  "name": "Func",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 648,
                  "end": 666,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 649,
                      "end": 665,
                      "typeName": {
                        "type": "Identifier",
                        "start": 649,
                        "end": 665,
                        "name": "SegmentAnnotated",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
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
      "start": 669,
      "end": 769,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 676,
        "end": 769,
        "id": {
          "type": "Identifier",
          "start": 685,
          "end": 693,
          "name": "useState",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 697,
            "end": 707,
            "name": "initial",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 704,
              "end": 707,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 706,
                "end": 707,
                "typeName": {
                  "type": "Identifier",
                  "start": 706,
                  "end": 707,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 742,
          "end": 769,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 748,
              "end": 767,
              "argument": {
                "type": "TSAsExpression",
                "start": 755,
                "end": 766,
                "expression": {
                  "type": "Literal",
                  "start": 755,
                  "end": 759,
                  "value": null,
                  "raw": "null"
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 763,
                  "end": 766
                }
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 693,
          "end": 696,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 694,
              "end": 695,
              "name": {
                "type": "Identifier",
                "start": 694,
                "end": 695,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 708,
          "end": 741,
          "typeAnnotation": {
            "type": "TSTupleType",
            "start": 710,
            "end": 741,
            "elementTypes": [
              {
                "type": "TSNamedTupleMember",
                "start": 711,
                "end": 719,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 718,
                  "end": 719,
                  "typeName": {
                    "type": "Identifier",
                    "start": 718,
                    "end": 719,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "label": {
                  "type": "Identifier",
                  "start": 711,
                  "end": 716,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "optional": false
              },
              {
                "type": "TSNamedTupleMember",
                "start": 721,
                "end": 740,
                "elementType": {
                  "type": "TSFunctionType",
                  "start": 729,
                  "end": 740,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 730,
                      "end": 731,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 733,
                    "end": 740,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 736,
                      "end": 740
                    }
                  }
                },
                "label": {
                  "type": "Identifier",
                  "start": 721,
                  "end": 727,
                  "name": "setter",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "optional": false
              }
            ]
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 772,
      "end": 832,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 779,
        "end": 832,
        "id": {
          "type": "Identifier",
          "start": 784,
          "end": 788,
          "name": "Iter",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 791,
          "end": 831,
          "typeName": {
            "type": "Identifier",
            "start": 791,
            "end": 795,
            "name": "Func",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 795,
            "end": 831,
            "params": [
              {
                "type": "TSTupleType",
                "start": 796,
                "end": 830,
                "elementTypes": [
                  {
                    "type": "TSNamedTupleMember",
                    "start": 797,
                    "end": 809,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 803,
                      "end": 809
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 797,
                      "end": 801,
                      "name": "step",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "optional": false
                  },
                  {
                    "type": "TSNamedTupleMember",
                    "start": 811,
                    "end": 829,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 823,
                      "end": 829
                    },
                    "label": {
                      "type": "Identifier",
                      "start": 811,
                      "end": 821,
                      "name": "iterations",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "optional": false
                  }
                ]
              }
            ]
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 834,
      "end": 899,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 841,
        "end": 899,
        "id": {
          "type": "Identifier",
          "start": 850,
          "end": 861,
          "name": "readSegment",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "ArrayPattern",
            "start": 862,
            "end": 895,
            "elements": [
              {
                "type": "Identifier",
                "start": 863,
                "end": 869,
                "name": "length",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 871,
                "end": 876,
                "name": "count",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 877,
              "end": 895,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 879,
                "end": 895,
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
                ]
              }
            }
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 897,
          "end": 899,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 985,
      "end": 1053,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 992,
        "end": 1053,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 998,
            "end": 1052,
            "id": {
              "type": "Identifier",
              "start": 998,
              "end": 1001,
              "name": "val",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "TSAsExpression",
              "start": 1004,
              "end": 1052,
              "expression": {
                "type": "TSAsExpression",
                "start": 1004,
                "end": 1015,
                "expression": {
                  "type": "Literal",
                  "start": 1004,
                  "end": 1008,
                  "value": null,
                  "raw": "null"
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1012,
                  "end": 1015
                }
              },
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 1019,
                "end": 1052,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 1019,
                  "end": 1049,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1019,
                    "end": 1029,
                    "name": "Parameters",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1029,
                    "end": 1049,
                    "params": [
                      {
                        "type": "TSTypeQuery",
                        "start": 1030,
                        "end": 1048,
                        "exprName": {
                          "type": "Identifier",
                          "start": 1037,
                          "end": 1048,
                          "name": "readSegment",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 1050,
                  "end": 1051,
                  "literal": {
                    "type": "Literal",
                    "start": 1050,
                    "end": 1051,
                    "value": 0,
                    "raw": "0"
                  }
                }
              }
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
      "start": 1055,
      "end": 1126,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1062,
        "end": 1126,
        "id": {
          "type": "Identifier",
          "start": 1067,
          "end": 1082,
          "name": "RecursiveTupleA",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 1085,
          "end": 1125,
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "start": 1086,
              "end": 1101,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 1095,
                "end": 1101
              },
              "label": {
                "type": "Identifier",
                "start": 1086,
                "end": 1093,
                "name": "initial",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "optional": false
            },
            {
              "type": "TSNamedTupleMember",
              "start": 1103,
              "end": 1124,
              "elementType": {
                "type": "TSTypeReference",
                "start": 1109,
                "end": 1124,
                "typeName": {
                  "type": "Identifier",
                  "start": 1109,
                  "end": 1124,
                  "name": "RecursiveTupleA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "label": {
                "type": "Identifier",
                "start": 1103,
                "end": 1107,
                "name": "next",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "optional": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1128,
      "end": 1196,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1135,
        "end": 1196,
        "id": {
          "type": "Identifier",
          "start": 1140,
          "end": 1155,
          "name": "RecursiveTupleB",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 1158,
          "end": 1195,
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "start": 1159,
              "end": 1172,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 1166,
                "end": 1172
              },
              "label": {
                "type": "Identifier",
                "start": 1159,
                "end": 1164,
                "name": "first",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "optional": false
            },
            {
              "type": "TSNamedTupleMember",
              "start": 1174,
              "end": 1194,
              "elementType": {
                "type": "TSTypeReference",
                "start": 1179,
                "end": 1194,
                "typeName": {
                  "type": "Identifier",
                  "start": 1179,
                  "end": 1194,
                  "name": "RecursiveTupleB",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "label": {
                "type": "Identifier",
                "start": 1174,
                "end": 1177,
                "name": "ptr",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "optional": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "VariableDeclaration",
      "start": 1198,
      "end": 1229,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1210,
          "end": 1228,
          "id": {
            "type": "Identifier",
            "start": 1210,
            "end": 1228,
            "name": "q",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1211,
              "end": 1228,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1213,
                "end": 1228,
                "typeName": {
                  "type": "Identifier",
                  "start": 1213,
                  "end": 1228,
                  "name": "RecursiveTupleA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 1230,
      "end": 1261,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1242,
          "end": 1260,
          "id": {
            "type": "Identifier",
            "start": 1242,
            "end": 1260,
            "name": "r",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1243,
              "end": 1260,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1245,
                "end": 1260,
                "typeName": {
                  "type": "Identifier",
                  "start": 1245,
                  "end": 1260,
                  "name": "RecursiveTupleB",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 1263,
      "end": 1269,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1263,
        "end": 1268,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1263,
          "end": 1264,
          "name": "q",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1267,
          "end": 1268,
          "name": "r",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1270,
      "end": 1276,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1270,
        "end": 1275,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1270,
          "end": 1271,
          "name": "r",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1274,
          "end": 1275,
          "name": "q",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1278,
      "end": 1346,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1285,
        "end": 1346,
        "id": {
          "type": "Identifier",
          "start": 1290,
          "end": 1302,
          "name": "RecusiveRest",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 1305,
          "end": 1345,
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "start": 1306,
              "end": 1319,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 1313,
                "end": 1319
              },
              "label": {
                "type": "Identifier",
                "start": 1306,
                "end": 1311,
                "name": "first",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "optional": false
            },
            {
              "type": "TSRestType",
              "start": 1321,
              "end": 1344,
              "typeAnnotation": {
                "type": "TSNamedTupleMember",
                "start": 1324,
                "end": 1344,
                "elementType": {
                  "type": "TSArrayType",
                  "start": 1330,
                  "end": 1344,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 1330,
                    "end": 1342,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1330,
                      "end": 1342,
                      "name": "RecusiveRest",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "label": {
                  "type": "Identifier",
                  "start": 1324,
                  "end": 1328,
                  "name": "rest",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "optional": false
              }
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1347,
      "end": 1404,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1354,
        "end": 1404,
        "id": {
          "type": "Identifier",
          "start": 1359,
          "end": 1372,
          "name": "RecusiveRest2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 1375,
          "end": 1403,
          "elementTypes": [
            {
              "type": "TSStringKeyword",
              "start": 1376,
              "end": 1382
            },
            {
              "type": "TSRestType",
              "start": 1384,
              "end": 1402,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1387,
                "end": 1402,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 1387,
                  "end": 1400,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1387,
                    "end": 1400,
                    "name": "RecusiveRest2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "VariableDeclaration",
      "start": 1406,
      "end": 1434,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1418,
          "end": 1433,
          "id": {
            "type": "Identifier",
            "start": 1418,
            "end": 1433,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1419,
              "end": 1433,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1421,
                "end": 1433,
                "typeName": {
                  "type": "Identifier",
                  "start": 1421,
                  "end": 1433,
                  "name": "RecusiveRest",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 1435,
      "end": 1464,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1447,
          "end": 1463,
          "id": {
            "type": "Identifier",
            "start": 1447,
            "end": 1463,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1448,
              "end": 1463,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1450,
                "end": 1463,
                "typeName": {
                  "type": "Identifier",
                  "start": 1450,
                  "end": 1463,
                  "name": "RecusiveRest2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 1466,
      "end": 1472,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1466,
        "end": 1471,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1466,
          "end": 1467,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1470,
          "end": 1471,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1473,
      "end": 1479,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1473,
        "end": 1478,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1473,
          "end": 1474,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1477,
          "end": 1478,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1481,
      "end": 1529,
      "id": {
        "type": "Identifier",
        "start": 1498,
        "end": 1499,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 1517,
          "end": 1524,
          "argument": {
            "type": "Identifier",
            "start": 1520,
            "end": 1521,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1521,
            "end": 1524,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1523,
              "end": 1524,
              "typeName": {
                "type": "Identifier",
                "start": 1523,
                "end": 1524,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1499,
        "end": 1516,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1500,
            "end": 1515,
            "name": {
              "type": "Identifier",
              "start": 1500,
              "end": 1501,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 1510,
              "end": 1515,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 1510,
                "end": 1513
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1525,
        "end": 1528,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1527,
          "end": 1528,
          "typeName": {
            "type": "Identifier",
            "start": 1527,
            "end": 1528,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1530,
      "end": 1586,
      "id": {
        "type": "Identifier",
        "start": 1547,
        "end": 1548,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1549,
          "end": 1561,
          "name": "elem",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1553,
            "end": 1561,
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 1555,
              "end": 1561
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1563,
          "end": 1576,
          "name": "index",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1568,
            "end": 1576,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1570,
              "end": 1576
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1577,
        "end": 1585,
        "typeAnnotation": {
          "type": "TSObjectKeyword",
          "start": 1579,
          "end": 1585
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1587,
      "end": 1680,
      "id": {
        "type": "Identifier",
        "start": 1604,
        "end": 1623,
        "name": "getArgsForInjection",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1659,
          "end": 1663,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1660,
            "end": 1663,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1662,
              "end": 1663,
              "typeName": {
                "type": "Identifier",
                "start": 1662,
                "end": 1663,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1623,
        "end": 1658,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1624,
            "end": 1657,
            "name": {
              "type": "Identifier",
              "start": 1624,
              "end": 1625,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSFunctionType",
              "start": 1634,
              "end": 1657,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 1635,
                  "end": 1649,
                  "argument": {
                    "type": "Identifier",
                    "start": 1638,
                    "end": 1642,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1642,
                    "end": 1649,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1644,
                      "end": 1649,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 1644,
                        "end": 1647
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1651,
                "end": 1657,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1654,
                  "end": 1657
                }
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1664,
        "end": 1679,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1666,
          "end": 1679,
          "typeName": {
            "type": "Identifier",
            "start": 1666,
            "end": 1676,
            "name": "Parameters",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1676,
            "end": 1679,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1677,
                "end": 1678,
                "typeName": {
                  "type": "Identifier",
                  "start": 1677,
                  "end": 1678,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1682,
      "end": 1751,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1689,
        "end": 1751,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1695,
            "end": 1750,
            "id": {
              "type": "Identifier",
              "start": 1695,
              "end": 1722,
              "name": "argumentsOfGAsFirstArgument",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 1725,
              "end": 1750,
              "callee": {
                "type": "Identifier",
                "start": 1725,
                "end": 1726,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "CallExpression",
                  "start": 1727,
                  "end": 1749,
                  "callee": {
                    "type": "Identifier",
                    "start": 1727,
                    "end": 1746,
                    "name": "getArgsForInjection",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1747,
                      "end": 1748,
                      "name": "g",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              ],
              "optional": false,
              "typeArguments": null
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
      "start": 1805,
      "end": 1862,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1812,
        "end": 1862,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1818,
            "end": 1861,
            "id": {
              "type": "Identifier",
              "start": 1818,
              "end": 1830,
              "name": "argumentsOfG",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 1833,
              "end": 1861,
              "callee": {
                "type": "Identifier",
                "start": 1833,
                "end": 1834,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "SpreadElement",
                  "start": 1835,
                  "end": 1860,
                  "argument": {
                    "type": "CallExpression",
                    "start": 1838,
                    "end": 1860,
                    "callee": {
                      "type": "Identifier",
                      "start": 1838,
                      "end": 1857,
                      "name": "getArgsForInjection",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 1858,
                        "end": 1859,
                        "name": "g",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ],
              "optional": false,
              "typeArguments": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
