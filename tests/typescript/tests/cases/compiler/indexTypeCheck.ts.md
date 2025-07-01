__ESTREE_TEST__:PASS:
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
