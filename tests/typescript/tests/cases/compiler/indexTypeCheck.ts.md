__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Red",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 20,
                    "end": 26
                  },
                  "start": 19,
                  "end": 26
                },
                "start": 18,
                "end": 26
              }
            ],
            "typeAnnotation": null,
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 17,
            "end": 28
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 39,
                    "end": 45
                  },
                  "start": 38,
                  "end": 45
                },
                "start": 37,
                "end": 45
              }
            ],
            "typeAnnotation": null,
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 36,
            "end": 47
          }
        ],
        "start": 14,
        "end": 55
      },
      "declare": false,
      "start": 0,
      "end": 55
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Blue",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 71
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 78,
                    "end": 84
                  },
                  "start": 77,
                  "end": 84
                },
                "start": 76,
                "end": 84
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 87,
                "end": 90
              },
              "start": 85,
              "end": 90
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 75,
            "end": 91
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 102,
                    "end": 108
                  },
                  "start": 101,
                  "end": 108
                },
                "start": 100,
                "end": 108
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 111,
                "end": 114
              },
              "start": 109,
              "end": 114
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 99,
            "end": 115
          }
        ],
        "start": 72,
        "end": 123
      },
      "declare": false,
      "start": 57,
      "end": 123
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Yellow",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
        "end": 141
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 148,
                    "end": 154
                  },
                  "start": 147,
                  "end": 154
                },
                "start": 146,
                "end": 154
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Red",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 157,
                  "end": 160
                },
                "typeArguments": null,
                "start": 157,
                "end": 160
              },
              "start": 155,
              "end": 160
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 145,
            "end": 161
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 172,
                    "end": 178
                  },
                  "start": 171,
                  "end": 178
                },
                "start": 170,
                "end": 178
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Red",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 181,
                  "end": 184
                },
                "typeArguments": null,
                "start": 181,
                "end": 184
              },
              "start": 179,
              "end": 184
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 169,
            "end": 185
          }
        ],
        "start": 142,
        "end": 193
      },
      "declare": false,
      "start": 125,
      "end": 193
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Orange",
        "optional": false,
        "typeAnnotation": null,
        "start": 205,
        "end": 211
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 218,
                    "end": 224
                  },
                  "start": 217,
                  "end": 224
                },
                "start": 216,
                "end": 224
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 227,
                "end": 233
              },
              "start": 225,
              "end": 233
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 215,
            "end": 234
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 245,
                    "end": 251
                  },
                  "start": 244,
                  "end": 251
                },
                "start": 243,
                "end": 251
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 254,
                "end": 260
              },
              "start": 252,
              "end": 260
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 242,
            "end": 261
          }
        ],
        "start": 212,
        "end": 272
      },
      "declare": false,
      "start": 195,
      "end": 272
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Green",
        "optional": false,
        "typeAnnotation": null,
        "start": 284,
        "end": 289
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 296,
                    "end": 302
                  },
                  "start": 295,
                  "end": 302
                },
                "start": 294,
                "end": 302
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Orange",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 305,
                  "end": 311
                },
                "typeArguments": null,
                "start": 305,
                "end": 311
              },
              "start": 303,
              "end": 311
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 293,
            "end": 312
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 326,
                    "end": 332
                  },
                  "start": 325,
                  "end": 332
                },
                "start": 324,
                "end": 332
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yellow",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 335,
                  "end": 341
                },
                "typeArguments": null,
                "start": 335,
                "end": 341
              },
              "start": 333,
              "end": 341
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 323,
            "end": 342
          }
        ],
        "start": 290,
        "end": 350
      },
      "declare": false,
      "start": 274,
      "end": 350
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cyan",
        "optional": false,
        "typeAnnotation": null,
        "start": 362,
        "end": 366
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 373,
                    "end": 379
                  },
                  "start": 372,
                  "end": 379
                },
                "start": 371,
                "end": 379
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 382,
                "end": 388
              },
              "start": 380,
              "end": 388
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 370,
            "end": 389
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 403,
                    "end": 409
                  },
                  "start": 402,
                  "end": 409
                },
                "start": 401,
                "end": 409
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 412,
                "end": 418
              },
              "start": 410,
              "end": 418
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 400,
            "end": 419
          }
        ],
        "start": 367,
        "end": 427
      },
      "declare": false,
      "start": 352,
      "end": 427
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Purple",
        "optional": false,
        "typeAnnotation": null,
        "start": 439,
        "end": 445
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 452,
                    "end": 458
                  },
                  "start": 451,
                  "end": 458
                },
                "start": 450,
                "end": 458
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 462,
                    "end": 468
                  },
                  "start": 461,
                  "end": 468
                },
                "start": 460,
                "end": 468
              }
            ],
            "typeAnnotation": null,
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 449,
            "end": 470
          }
        ],
        "start": 446,
        "end": 481
      },
      "declare": false,
      "start": 429,
      "end": 481
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Magenta",
        "optional": false,
        "typeAnnotation": null,
        "start": 493,
        "end": 500
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Purple",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 507,
                      "end": 513
                    },
                    "typeArguments": null,
                    "start": 507,
                    "end": 513
                  },
                  "start": 506,
                  "end": 513
                },
                "start": 505,
                "end": 513
              }
            ],
            "typeAnnotation": null,
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 504,
            "end": 515
          }
        ],
        "start": 501,
        "end": 526
      },
      "declare": false,
      "start": 483,
      "end": 526
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
            "name": "yellow",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Yellow",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 540,
                  "end": 546
                },
                "typeArguments": null,
                "start": 540,
                "end": 546
              },
              "start": 538,
              "end": 546
            },
            "start": 532,
            "end": 546
          },
          "init": null,
          "definite": false,
          "start": 532,
          "end": 546
        }
      ],
      "declare": false,
      "start": 528,
      "end": 547
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
            "name": "blue",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Blue",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 558,
                  "end": 562
                },
                "typeArguments": null,
                "start": 558,
                "end": 562
              },
              "start": 556,
              "end": 562
            },
            "start": 552,
            "end": 562
          },
          "init": null,
          "definite": false,
          "start": 552,
          "end": 562
        }
      ],
      "declare": false,
      "start": 548,
      "end": 563
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 568,
            "end": 569
          },
          "init": {
            "type": "Literal",
            "value": "some string",
            "raw": "\"some string\"",
            "start": 572,
            "end": 585
          },
          "definite": false,
          "start": 568,
          "end": 585
        }
      ],
      "declare": false,
      "start": 564,
      "end": 586
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "yellow",
          "optional": false,
          "typeAnnotation": null,
          "start": 588,
          "end": 594
        },
        "property": {
          "type": "Literal",
          "value": 5,
          "raw": "5",
          "start": 595,
          "end": 596
        },
        "optional": false,
        "computed": true,
        "start": 588,
        "end": 597
      },
      "directive": null,
      "start": 588,
      "end": 598
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "yellow",
          "optional": false,
          "typeAnnotation": null,
          "start": 605,
          "end": 611
        },
        "property": {
          "type": "Literal",
          "value": "hue",
          "raw": "\"hue\"",
          "start": 612,
          "end": 617
        },
        "optional": false,
        "computed": true,
        "start": 605,
        "end": 618
      },
      "directive": null,
      "start": 605,
      "end": 619
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "yellow",
          "optional": false,
          "typeAnnotation": null,
          "start": 626,
          "end": 632
        },
        "property": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 634,
            "end": 637
          },
          "expression": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 638,
            "end": 640
          },
          "start": 633,
          "end": 640
        },
        "optional": false,
        "computed": true,
        "start": 626,
        "end": 641
      },
      "directive": null,
      "start": 626,
      "end": 642
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 650,
          "end": 651
        },
        "property": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 652,
          "end": 653
        },
        "optional": false,
        "computed": true,
        "start": 650,
        "end": 654
      },
      "directive": null,
      "start": 650,
      "end": 655
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 665,
          "end": 666
        },
        "property": {
          "type": "Literal",
          "value": "s",
          "raw": "\"s\"",
          "start": 667,
          "end": 670
        },
        "optional": false,
        "computed": true,
        "start": 665,
        "end": 671
      },
      "directive": null,
      "start": 665,
      "end": 672
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 679,
          "end": 680
        },
        "property": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 682,
            "end": 685
          },
          "expression": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 686,
            "end": 688
          },
          "start": 681,
          "end": 688
        },
        "optional": false,
        "computed": true,
        "start": 679,
        "end": 689
      },
      "directive": null,
      "start": 679,
      "end": 690
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "yellow",
          "optional": false,
          "typeAnnotation": null,
          "start": 698,
          "end": 704
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "blue",
          "optional": false,
          "typeAnnotation": null,
          "start": 705,
          "end": 709
        },
        "optional": false,
        "computed": true,
        "start": 698,
        "end": 710
      },
      "directive": null,
      "start": 698,
      "end": 711
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
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 728,
                  "end": 734
                },
                "start": 728,
                "end": 736
              },
              "start": 727,
              "end": 736
            },
            "start": 726,
            "end": 736
          },
          "init": null,
          "definite": false,
          "start": 726,
          "end": 736
        }
      ],
      "declare": false,
      "start": 722,
      "end": 737
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 738,
          "end": 739
        },
        "property": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 740,
          "end": 741
        },
        "optional": false,
        "computed": true,
        "start": 738,
        "end": 742
      },
      "directive": null,
      "start": 738,
      "end": 743
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Benchmark",
        "optional": false,
        "typeAnnotation": null,
        "start": 751,
        "end": 760
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "results",
              "optional": false,
              "typeAnnotation": null,
              "start": 775,
              "end": 782
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 789,
                            "end": 795
                          },
                          "start": 788,
                          "end": 795
                        },
                        "start": 787,
                        "end": 795
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 798,
                        "end": 801
                      },
                      "start": 796,
                      "end": 801
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 786,
                    "end": 802
                  }
                ],
                "start": 784,
                "end": 804
              },
              "start": 782,
              "end": 804
            },
            "value": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 813,
                            "end": 819
                          },
                          "start": 812,
                          "end": 819
                        },
                        "start": 811,
                        "end": 819
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 822,
                        "end": 825
                      },
                      "start": 820,
                      "end": 825
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 810,
                    "end": 826
                  }
                ],
                "start": 808,
                "end": 828
              },
              "expression": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 829,
                "end": 831
              },
              "start": 807,
              "end": 831
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 768,
            "end": 832
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "addTimingFor",
              "optional": false,
              "typeAnnotation": null,
              "start": 845,
              "end": 857
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 864,
                      "end": 870
                    },
                    "start": 862,
                    "end": 870
                  },
                  "start": 858,
                  "end": 870
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "timing",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 880,
                      "end": 886
                    },
                    "start": 878,
                    "end": 886
                  },
                  "start": 872,
                  "end": 886
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 898,
                            "end": 902
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "results",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 903,
                            "end": 910
                          },
                          "optional": false,
                          "computed": false,
                          "start": 898,
                          "end": 910
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 911,
                          "end": 915
                        },
                        "optional": false,
                        "computed": true,
                        "start": 898,
                        "end": 916
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 919,
                            "end": 923
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "results",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 924,
                            "end": 931
                          },
                          "optional": false,
                          "computed": false,
                          "start": 919,
                          "end": 931
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 932,
                          "end": 936
                        },
                        "optional": false,
                        "computed": true,
                        "start": 919,
                        "end": 937
                      },
                      "start": 898,
                      "end": 937
                    },
                    "directive": null,
                    "start": 898,
                    "end": 938
                  }
                ],
                "start": 888,
                "end": 944
              },
              "expression": false,
              "start": 857,
              "end": 944
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 838,
            "end": 944
          }
        ],
        "start": 761,
        "end": 946
      },
      "abstract": false,
      "declare": false,
      "start": 745,
      "end": 946
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 946
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Red",
    "start": 10,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 20,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 39,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 54,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 57,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Blue",
    "start": 67,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 78,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 87,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 102,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 111,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 125,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "Yellow",
    "start": 135,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 148,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "Red",
    "start": 157,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 172,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "Red",
    "start": 181,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 192,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 195,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "Orange",
    "start": 205,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 218,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 227,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 245,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 254,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 271,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 274,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "Green",
    "start": 284,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 296,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "Orange",
    "start": 305,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 326,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "Yellow",
    "start": 335,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 349,
    "end": 350
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 352,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "Cyan",
    "start": 362,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 373,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 382,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 403,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 412,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 426,
    "end": 427
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 429,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "Purple",
    "start": 439,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 452,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 462,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 480,
    "end": 481
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 483,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "Magenta",
    "start": 493,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "Purple",
    "start": 507,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 525,
    "end": 526
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 528,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "yellow",
    "start": 532,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "Yellow",
    "start": 540,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 546,
    "end": 547
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 548,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "blue",
    "start": 552,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "Blue",
    "start": 558,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 562,
    "end": 563
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 564,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 570,
    "end": 571
  },
  {
    "type": "String",
    "value": "\"some string\"",
    "start": 572,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "yellow",
    "start": 588,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 594,
    "end": 595
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "yellow",
    "start": 605,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 611,
    "end": 612
  },
  {
    "type": "String",
    "value": "\"hue\"",
    "start": 612,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "yellow",
    "start": 626,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 634,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 651,
    "end": 652
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 666,
    "end": 667
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 667,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 682,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "yellow",
    "start": 698,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "blue",
    "start": 705,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 710,
    "end": 711
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 722,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 728,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 739,
    "end": 740
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 742,
    "end": 743
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 745,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "Benchmark",
    "start": 751,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 761,
    "end": 762
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 768,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 775,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 789,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 798,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 813,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 822,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 831,
    "end": 832
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 838,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "addTimingFor",
    "start": 845,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 858,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 864,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "timing",
    "start": 872,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 880,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 888,
    "end": 889
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 898,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 902,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 903,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 911,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 917,
    "end": 918
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 919,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 923,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 924,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 931,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 932,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 945,
    "end": 946
  }
]
```
