__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 26,
  "end": 714,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 26,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 30,
          "end": 38,
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 34,
            "end": 38,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 79,
      "end": 98,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 97,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 85,
            "name": "x1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 88,
            "end": 97,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 130,
      "end": 165,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 134,
          "end": 164,
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 144,
            "name": "widenArray",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 147,
            "end": 164,
            "elements": [
              {
                "type": "Literal",
                "start": 148,
                "end": 152,
                "value": null,
                "raw": "null"
              },
              {
                "type": "Identifier",
                "start": 154,
                "end": 163,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 192,
      "end": 212,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 196,
          "end": 211,
          "id": {
            "type": "Identifier",
            "start": 196,
            "end": 206,
            "name": "emptyArray",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 209,
            "end": 211,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 243,
      "end": 275,
      "id": {
        "type": "Identifier",
        "start": 249,
        "end": 258,
        "name": "AnimalObj",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 259,
        "end": 275,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 267,
            "end": 273,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 267,
              "end": 268,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 268,
              "end": 272,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 269,
                "end": 272
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 276,
      "end": 288,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 280,
          "end": 287,
          "id": {
            "type": "Identifier",
            "start": 280,
            "end": 283,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 286,
            "end": 287,
            "value": 5,
            "raw": "5"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 289,
      "end": 313,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 293,
          "end": 312,
          "id": {
            "type": "Identifier",
            "start": 293,
            "end": 296,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 299,
            "end": 312,
            "value": "Hello World",
            "raw": "\"Hello World\""
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 314,
      "end": 335,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 318,
          "end": 334,
          "id": {
            "type": "Identifier",
            "start": 318,
            "end": 327,
            "name": "foo1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 322,
              "end": 327,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 324,
                "end": 327
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 330,
            "end": 334,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 336,
      "end": 362,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 340,
          "end": 361,
          "id": {
            "type": "Identifier",
            "start": 340,
            "end": 349,
            "name": "foo2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 344,
              "end": 349,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 346,
                "end": 349
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 352,
            "end": 361,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 363,
      "end": 384,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 367,
          "end": 383,
          "id": {
            "type": "Identifier",
            "start": 367,
            "end": 379,
            "name": "temp",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 371,
              "end": 379,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 373,
                "end": 379
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 382,
            "end": 383,
            "value": 5,
            "raw": "5"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 385,
      "end": 416,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 389,
          "end": 415,
          "id": {
            "type": "Identifier",
            "start": 389,
            "end": 401,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 390,
              "end": 401,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 392,
                "end": 401,
                "typeName": {
                  "type": "Identifier",
                  "start": 392,
                  "end": 401,
                  "name": "AnimalObj",
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
          "init": {
            "type": "ObjectExpression",
            "start": 404,
            "end": 415,
            "properties": [
              {
                "type": "Property",
                "start": 406,
                "end": 413,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 406,
                  "end": 407,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 409,
                  "end": 413,
                  "value": null,
                  "raw": "null"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 418,
      "end": 441,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 422,
          "end": 440,
          "id": {
            "type": "Identifier",
            "start": 422,
            "end": 428,
            "name": "array1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 431,
            "end": 440,
            "elements": [
              {
                "type": "Literal",
                "start": 432,
                "end": 437,
                "value": "Bob",
                "raw": "\"Bob\""
              },
              {
                "type": "Literal",
                "start": 438,
                "end": 439,
                "value": 2,
                "raw": "2"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 442,
      "end": 465,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 446,
          "end": 464,
          "id": {
            "type": "Identifier",
            "start": 446,
            "end": 459,
            "name": "array2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 452,
              "end": 459,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 454,
                "end": 459,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 454,
                  "end": 457
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 462,
            "end": 464,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 466,
      "end": 504,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 470,
          "end": 503,
          "id": {
            "type": "Identifier",
            "start": 470,
            "end": 483,
            "name": "array3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 476,
              "end": 483,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 478,
                "end": 483,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 478,
                  "end": 481
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 486,
            "end": 503,
            "elements": [
              {
                "type": "Literal",
                "start": 487,
                "end": 491,
                "value": null,
                "raw": "null"
              },
              {
                "type": "Identifier",
                "start": 493,
                "end": 502,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 505,
      "end": 546,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 509,
          "end": 545,
          "id": {
            "type": "Identifier",
            "start": 509,
            "end": 525,
            "name": "array4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 515,
              "end": 525,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 517,
                "end": 525,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 517,
                  "end": 523
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 528,
            "end": 545,
            "elements": [
              {
                "type": "Literal",
                "start": 529,
                "end": 533,
                "value": null,
                "raw": "null"
              },
              {
                "type": "Identifier",
                "start": 535,
                "end": 544,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 547,
      "end": 585,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 551,
          "end": 584,
          "id": {
            "type": "Identifier",
            "start": 551,
            "end": 557,
            "name": "array5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 560,
            "end": 584,
            "expression": {
              "type": "ArrayExpression",
              "start": 567,
              "end": 584,
              "elements": [
                {
                  "type": "Literal",
                  "start": 568,
                  "end": 572,
                  "value": null,
                  "raw": "null"
                },
                {
                  "type": "Identifier",
                  "start": 574,
                  "end": 583,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 561,
              "end": 566,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 561,
                "end": 564
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 587,
      "end": 625,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 591,
          "end": 624,
          "id": {
            "type": "Identifier",
            "start": 591,
            "end": 624,
            "name": "objLit",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 597,
              "end": 624,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 599,
                "end": 624,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 601,
                    "end": 622,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 606,
                        "end": 615,
                        "name": "n",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 607,
                          "end": 615,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 609,
                            "end": 615
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 616,
                      "end": 621,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 618,
                        "end": 621
                      }
                    }
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
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 626,
      "end": 659,
      "id": {
        "type": "Identifier",
        "start": 635,
        "end": 648,
        "name": "anyReturnFunc",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 656,
        "end": 659,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 650,
        "end": 655,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 652,
          "end": 655
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 660,
      "end": 685,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 664,
          "end": 684,
          "id": {
            "type": "Identifier",
            "start": 664,
            "end": 668,
            "name": "obj0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 671,
            "end": 684,
            "callee": {
              "type": "Identifier",
              "start": 675,
              "end": 681,
              "name": "objLit",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 682,
                "end": 683,
                "value": 1,
                "raw": "1"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 686,
      "end": 713,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 690,
          "end": 712,
          "id": {
            "type": "Identifier",
            "start": 690,
            "end": 694,
            "name": "obj1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 697,
            "end": 712,
            "callee": {
              "type": "Identifier",
              "start": 697,
              "end": 710,
              "name": "anyReturnFunc",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
