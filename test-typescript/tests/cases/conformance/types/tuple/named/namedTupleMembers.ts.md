__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1899,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 54,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 54,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 19,
          "decorators": [],
          "name": "Segment",
          "optional": false,
          "typeAnnotation": null
        },
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
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "count",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 56,
      "end": 250,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 63,
        "end": 250,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 68,
          "end": 84,
          "decorators": [],
          "name": "SegmentAnnotated",
          "optional": false,
          "typeAnnotation": null
        },
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
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "count",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 264,
            "end": 274,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 265,
              "end": 274,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 267,
                "end": 274,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 267,
                  "end": 274,
                  "decorators": [],
                  "name": "Segment",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 288,
            "end": 307,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 289,
              "end": 307,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 291,
                "end": 307,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 291,
                  "end": 307,
                  "decorators": [],
                  "name": "SegmentAnnotated",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 321,
            "end": 340,
            "decorators": [],
            "name": "c",
            "optional": false,
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
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 354,
            "end": 379,
            "decorators": [],
            "name": "d",
            "optional": false,
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
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 382,
      "end": 388,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 382,
        "end": 387,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 382,
          "end": 383,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 386,
          "end": 387,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 389,
      "end": 395,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 389,
        "end": 394,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 389,
          "end": 390,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 393,
          "end": 394,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 396,
      "end": 402,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 396,
        "end": 401,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 396,
          "end": 397,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 400,
          "end": 401,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 404,
      "end": 410,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 404,
        "end": 409,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 404,
          "end": 405,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 408,
          "end": 409,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 411,
      "end": 417,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 411,
        "end": 416,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 411,
          "end": 412,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 415,
          "end": 416,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 418,
      "end": 424,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 418,
        "end": 423,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 418,
          "end": 419,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 422,
          "end": 423,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 426,
      "end": 432,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 426,
        "end": 431,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 426,
          "end": 427,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 430,
          "end": 431,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 433,
      "end": 439,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 433,
        "end": 438,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 433,
          "end": 434,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 437,
          "end": 438,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 440,
      "end": 446,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 440,
        "end": 445,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 440,
          "end": 441,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 444,
          "end": 445,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 448,
      "end": 454,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 448,
        "end": 453,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 448,
          "end": 449,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 452,
          "end": 453,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 455,
      "end": 461,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 455,
        "end": 460,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 455,
          "end": 456,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 459,
          "end": 460,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 462,
      "end": 468,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 462,
        "end": 467,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 462,
          "end": 463,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 466,
          "end": 467,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 470,
      "end": 551,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 477,
        "end": 551,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 482,
          "end": 496,
          "decorators": [],
          "name": "WithOptAndRest",
          "optional": false,
          "typeAnnotation": null
        },
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
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "second",
                "optional": false,
                "typeAnnotation": null
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
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false
              }
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 553,
      "end": 607,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 560,
        "end": 607,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 565,
          "end": 569,
          "decorators": [],
          "name": "Func",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 589,
          "end": 606,
          "params": [
            {
              "type": "RestElement",
              "start": 590,
              "end": 597,
              "argument": {
                "type": "Identifier",
                "start": 593,
                "end": 594,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 596,
                    "end": 597,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
          },
          "typeParameters": null
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
              "const": false,
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
              "name": {
                "type": "Identifier",
                "start": 570,
                "end": 571,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 609,
      "end": 667,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 616,
        "end": 667,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 622,
            "end": 666,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 622,
              "end": 626,
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null
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
                  "raw": "null",
                  "value": null
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
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 648,
                  "end": 666,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 649,
                      "end": 665,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 649,
                        "end": 665,
                        "decorators": [],
                        "name": "SegmentAnnotated",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 644,
                  "end": 648,
                  "decorators": [],
                  "name": "Func",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 669,
      "end": 769,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 676,
        "end": 769,
        "async": false,
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
                  "raw": "null",
                  "value": null
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
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 685,
          "end": 693,
          "decorators": [],
          "name": "useState",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 697,
            "end": 707,
            "decorators": [],
            "name": "initial",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 704,
              "end": 707,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 706,
                "end": 707,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 706,
                  "end": 707,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 718,
                    "end": 719,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "label": {
                  "type": "Identifier",
                  "start": 711,
                  "end": 716,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
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
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 730,
                      "end": 731,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
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
                  },
                  "typeParameters": null
                },
                "label": {
                  "type": "Identifier",
                  "start": 721,
                  "end": 727,
                  "decorators": [],
                  "name": "setter",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false
              }
            ]
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 693,
          "end": 696,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 694,
              "end": 695,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 694,
                "end": 695,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 772,
      "end": 832,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 779,
        "end": 832,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 784,
          "end": 788,
          "decorators": [],
          "name": "Iter",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 791,
          "end": 831,
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
                      "decorators": [],
                      "name": "step",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "iterations",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false
                  }
                ]
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 791,
            "end": 795,
            "decorators": [],
            "name": "Func",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 834,
      "end": 899,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 841,
        "end": 899,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 897,
          "end": 899,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 850,
          "end": 861,
          "decorators": [],
          "name": "readSegment",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "ArrayPattern",
            "start": 862,
            "end": 895,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 863,
                "end": 869,
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 871,
                "end": 876,
                "decorators": [],
                "name": "count",
                "optional": false,
                "typeAnnotation": null
              }
            ],
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
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 985,
      "end": 1053,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 992,
        "end": 1053,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 998,
            "end": 1052,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 998,
              "end": 1001,
              "decorators": [],
              "name": "val",
              "optional": false,
              "typeAnnotation": null
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
                  "raw": "null",
                  "value": null
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
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 1050,
                  "end": 1051,
                  "literal": {
                    "type": "Literal",
                    "start": 1050,
                    "end": 1051,
                    "raw": "0",
                    "value": 0
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 1019,
                  "end": 1049,
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
                          "decorators": [],
                          "name": "readSegment",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 1019,
                    "end": 1029,
                    "decorators": [],
                    "name": "Parameters",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1055,
      "end": 1126,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1062,
        "end": 1126,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 1067,
          "end": 1082,
          "decorators": [],
          "name": "RecursiveTupleA",
          "optional": false,
          "typeAnnotation": null
        },
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
                "decorators": [],
                "name": "initial",
                "optional": false,
                "typeAnnotation": null
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1109,
                  "end": 1124,
                  "decorators": [],
                  "name": "RecursiveTupleA",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "label": {
                "type": "Identifier",
                "start": 1103,
                "end": 1107,
                "decorators": [],
                "name": "next",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1128,
      "end": 1196,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1135,
        "end": 1196,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 1140,
          "end": 1155,
          "decorators": [],
          "name": "RecursiveTupleB",
          "optional": false,
          "typeAnnotation": null
        },
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
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1179,
                  "end": 1194,
                  "decorators": [],
                  "name": "RecursiveTupleB",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "label": {
                "type": "Identifier",
                "start": 1174,
                "end": 1177,
                "decorators": [],
                "name": "ptr",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1210,
            "end": 1228,
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1211,
              "end": 1228,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1213,
                "end": 1228,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1213,
                  "end": 1228,
                  "decorators": [],
                  "name": "RecursiveTupleA",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1242,
            "end": 1260,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1243,
              "end": 1260,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1245,
                "end": 1260,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1245,
                  "end": 1260,
                  "decorators": [],
                  "name": "RecursiveTupleB",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1263,
      "end": 1269,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1263,
        "end": 1268,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1263,
          "end": 1264,
          "decorators": [],
          "name": "q",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1267,
          "end": 1268,
          "decorators": [],
          "name": "r",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1270,
      "end": 1276,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1270,
        "end": 1275,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1270,
          "end": 1271,
          "decorators": [],
          "name": "r",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1274,
          "end": 1275,
          "decorators": [],
          "name": "q",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1278,
      "end": 1346,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1285,
        "end": 1346,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 1290,
          "end": 1302,
          "decorators": [],
          "name": "RecusiveRest",
          "optional": false,
          "typeAnnotation": null
        },
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
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1330,
                      "end": 1342,
                      "decorators": [],
                      "name": "RecusiveRest",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "label": {
                  "type": "Identifier",
                  "start": 1324,
                  "end": 1328,
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false
              }
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1347,
      "end": 1404,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1354,
        "end": 1404,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 1359,
          "end": 1372,
          "decorators": [],
          "name": "RecusiveRest2",
          "optional": false,
          "typeAnnotation": null
        },
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1387,
                    "end": 1400,
                    "decorators": [],
                    "name": "RecusiveRest2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1418,
            "end": 1433,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1419,
              "end": 1433,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1421,
                "end": 1433,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1421,
                  "end": 1433,
                  "decorators": [],
                  "name": "RecusiveRest",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1447,
            "end": 1463,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1448,
              "end": 1463,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1450,
                "end": 1463,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1450,
                  "end": 1463,
                  "decorators": [],
                  "name": "RecusiveRest2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1466,
      "end": 1472,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1466,
        "end": 1471,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1466,
          "end": 1467,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1470,
          "end": 1471,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1473,
      "end": 1479,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1473,
        "end": 1478,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1473,
          "end": 1474,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1477,
          "end": 1478,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1481,
      "end": 1529,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1498,
        "end": 1499,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 1517,
          "end": 1524,
          "argument": {
            "type": "Identifier",
            "start": 1520,
            "end": 1521,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1523,
                "end": 1524,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1525,
        "end": 1528,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1527,
          "end": 1528,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1527,
            "end": 1528,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1499,
        "end": 1516,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1500,
            "end": 1515,
            "const": false,
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
            "name": {
              "type": "Identifier",
              "start": 1500,
              "end": 1501,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1530,
      "end": 1586,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1547,
        "end": 1548,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1549,
          "end": 1561,
          "decorators": [],
          "name": "elem",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1553,
            "end": 1561,
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 1555,
              "end": 1561
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1563,
          "end": 1576,
          "decorators": [],
          "name": "index",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1568,
            "end": 1576,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1570,
              "end": 1576
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1577,
        "end": 1585,
        "typeAnnotation": {
          "type": "TSObjectKeyword",
          "start": 1579,
          "end": 1585
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1587,
      "end": 1680,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1604,
        "end": 1623,
        "decorators": [],
        "name": "getArgsForInjection",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1659,
          "end": 1663,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1660,
            "end": 1663,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1662,
              "end": 1663,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1662,
                "end": 1663,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1664,
        "end": 1679,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1666,
          "end": 1679,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1676,
            "end": 1679,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1677,
                "end": 1678,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1677,
                  "end": 1678,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1666,
            "end": 1676,
            "decorators": [],
            "name": "Parameters",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1623,
        "end": 1658,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1624,
            "end": 1657,
            "const": false,
            "constraint": {
              "type": "TSFunctionType",
              "start": 1634,
              "end": 1657,
              "params": [
                {
                  "type": "RestElement",
                  "start": 1635,
                  "end": 1649,
                  "argument": {
                    "type": "Identifier",
                    "start": 1638,
                    "end": 1642,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
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
              },
              "typeParameters": null
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1624,
              "end": 1625,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1682,
      "end": 1751,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1689,
        "end": 1751,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1695,
            "end": 1750,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 1695,
              "end": 1722,
              "decorators": [],
              "name": "argumentsOfGAsFirstArgument",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 1725,
              "end": 1750,
              "arguments": [
                {
                  "type": "CallExpression",
                  "start": 1727,
                  "end": 1749,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1747,
                      "end": 1748,
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1727,
                    "end": 1746,
                    "decorators": [],
                    "name": "getArgsForInjection",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1725,
                "end": 1726,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1805,
      "end": 1862,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1812,
        "end": 1862,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1818,
            "end": 1861,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 1818,
              "end": 1830,
              "decorators": [],
              "name": "argumentsOfG",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 1833,
              "end": 1861,
              "arguments": [
                {
                  "type": "SpreadElement",
                  "start": 1835,
                  "end": 1860,
                  "argument": {
                    "type": "CallExpression",
                    "start": 1838,
                    "end": 1860,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 1858,
                        "end": 1859,
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 1838,
                      "end": 1857,
                      "decorators": [],
                      "name": "getArgsForInjection",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1833,
                "end": 1834,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
