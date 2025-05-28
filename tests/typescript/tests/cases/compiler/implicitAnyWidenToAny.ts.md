__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 26,
  "end": 713,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 26,
      "end": 39,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 30,
          "end": 38,
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 79,
      "end": 98,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 97,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 85,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 88,
            "end": 97,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 130,
      "end": 165,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 134,
          "end": 164,
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 144,
            "decorators": [],
            "name": "widenArray",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 192,
      "end": 212,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 196,
          "end": 211,
          "id": {
            "type": "Identifier",
            "start": 196,
            "end": 206,
            "decorators": [],
            "name": "emptyArray",
            "optional": false,
            "typeAnnotation": null
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
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 243,
      "end": 275,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 249,
        "end": 258,
        "decorators": [],
        "name": "AnimalObj",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 259,
        "end": 275,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 267,
            "end": 273,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 267,
              "end": 268,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 276,
      "end": 288,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 280,
          "end": 287,
          "id": {
            "type": "Identifier",
            "start": 280,
            "end": 283,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 289,
      "end": 313,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 293,
          "end": 312,
          "id": {
            "type": "Identifier",
            "start": 293,
            "end": 296,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 314,
      "end": 335,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 318,
          "end": 334,
          "id": {
            "type": "Identifier",
            "start": 318,
            "end": 327,
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 322,
              "end": 327,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 324,
                "end": 327
              }
            }
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 336,
      "end": 362,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 340,
          "end": 361,
          "id": {
            "type": "Identifier",
            "start": 340,
            "end": 349,
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 344,
              "end": 349,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 346,
                "end": 349
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 352,
            "end": 361,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 363,
      "end": 384,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 367,
          "end": 383,
          "id": {
            "type": "Identifier",
            "start": 367,
            "end": 379,
            "decorators": [],
            "name": "temp",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 371,
              "end": 379,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 373,
                "end": 379
              }
            }
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 385,
      "end": 416,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 389,
          "end": 415,
          "id": {
            "type": "Identifier",
            "start": 389,
            "end": 401,
            "decorators": [],
            "name": "c",
            "optional": false,
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
                  "decorators": [],
                  "name": "AnimalObj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 406,
                  "end": 407,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 409,
                  "end": 413,
                  "value": null,
                  "raw": "null"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 418,
      "end": 441,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 422,
          "end": 440,
          "id": {
            "type": "Identifier",
            "start": 422,
            "end": 428,
            "decorators": [],
            "name": "array1",
            "optional": false,
            "typeAnnotation": null
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 442,
      "end": 465,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 446,
          "end": 464,
          "id": {
            "type": "Identifier",
            "start": 446,
            "end": 459,
            "decorators": [],
            "name": "array2",
            "optional": false,
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
            }
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 466,
      "end": 504,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 470,
          "end": 503,
          "id": {
            "type": "Identifier",
            "start": 470,
            "end": 483,
            "decorators": [],
            "name": "array3",
            "optional": false,
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
            }
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
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 505,
      "end": 546,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 509,
          "end": 545,
          "id": {
            "type": "Identifier",
            "start": 509,
            "end": 525,
            "decorators": [],
            "name": "array4",
            "optional": false,
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
            }
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
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 547,
      "end": 585,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 551,
          "end": 584,
          "id": {
            "type": "Identifier",
            "start": 551,
            "end": 557,
            "decorators": [],
            "name": "array5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 560,
            "end": 584,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 561,
              "end": 566,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 561,
                "end": 564
              }
            },
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
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 587,
      "end": 625,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 591,
          "end": 624,
          "id": {
            "type": "Identifier",
            "start": 591,
            "end": 624,
            "decorators": [],
            "name": "objLit",
            "optional": false,
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
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 607,
                          "end": 615,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 609,
                            "end": 615
                          }
                        }
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "anyReturnFunc",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 650,
        "end": 655,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 652,
          "end": 655
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 656,
        "end": 659,
        "body": []
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 660,
      "end": 685,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 664,
          "end": 684,
          "id": {
            "type": "Identifier",
            "start": 664,
            "end": 668,
            "decorators": [],
            "name": "obj0",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 671,
            "end": 684,
            "callee": {
              "type": "Identifier",
              "start": 675,
              "end": 681,
              "decorators": [],
              "name": "objLit",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 682,
                "end": 683,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 686,
      "end": 713,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 690,
          "end": 712,
          "id": {
            "type": "Identifier",
            "start": 690,
            "end": 694,
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 697,
            "end": 712,
            "callee": {
              "type": "Identifier",
              "start": 697,
              "end": 710,
              "decorators": [],
              "name": "anyReturnFunc",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
