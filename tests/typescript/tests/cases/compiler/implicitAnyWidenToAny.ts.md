__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
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
            "typeAnnotation": null,
            "start": 30,
            "end": 31
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 34,
            "end": 38
          },
          "definite": false,
          "start": 30,
          "end": 38
        }
      ],
      "declare": false,
      "start": 26,
      "end": 39
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 85
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 97
          },
          "definite": false,
          "start": 83,
          "end": 97
        }
      ],
      "declare": false,
      "start": 79,
      "end": 98
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
            "name": "widenArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 134,
            "end": 144
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 148,
                "end": 152
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 154,
                "end": 163
              }
            ],
            "start": 147,
            "end": 164
          },
          "definite": false,
          "start": 134,
          "end": 164
        }
      ],
      "declare": false,
      "start": 130,
      "end": 165
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
            "name": "emptyArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 196,
            "end": 206
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 209,
            "end": 211
          },
          "definite": false,
          "start": 196,
          "end": 211
        }
      ],
      "declare": false,
      "start": 192,
      "end": 212
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnimalObj",
        "optional": false,
        "typeAnnotation": null,
        "start": 249,
        "end": 258
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 267,
              "end": 268
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 269,
                "end": 272
              },
              "start": 268,
              "end": 272
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 267,
            "end": 273
          }
        ],
        "start": 259,
        "end": 275
      },
      "abstract": false,
      "declare": false,
      "start": 243,
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 280,
            "end": 283
          },
          "init": {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "start": 286,
            "end": 287
          },
          "definite": false,
          "start": 280,
          "end": 287
        }
      ],
      "declare": false,
      "start": 276,
      "end": 288
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
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 293,
            "end": 296
          },
          "init": {
            "type": "Literal",
            "value": "Hello World",
            "raw": "\"Hello World\"",
            "start": 299,
            "end": 312
          },
          "definite": false,
          "start": 293,
          "end": 312
        }
      ],
      "declare": false,
      "start": 289,
      "end": 313
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
            "name": "foo1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 324,
                "end": 327
              },
              "start": 322,
              "end": 327
            },
            "start": 318,
            "end": 327
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 330,
            "end": 334
          },
          "definite": false,
          "start": 318,
          "end": 334
        }
      ],
      "declare": false,
      "start": 314,
      "end": 335
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
            "name": "foo2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 346,
                "end": 349
              },
              "start": 344,
              "end": 349
            },
            "start": 340,
            "end": 349
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 352,
            "end": 361
          },
          "definite": false,
          "start": 340,
          "end": 361
        }
      ],
      "declare": false,
      "start": 336,
      "end": 362
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
            "name": "temp",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 373,
                "end": 379
              },
              "start": 371,
              "end": 379
            },
            "start": 367,
            "end": 379
          },
          "init": {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "start": 382,
            "end": 383
          },
          "definite": false,
          "start": 367,
          "end": 383
        }
      ],
      "declare": false,
      "start": 363,
      "end": 384
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AnimalObj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 392,
                  "end": 401
                },
                "typeArguments": null,
                "start": 392,
                "end": 401
              },
              "start": 390,
              "end": 401
            },
            "start": 389,
            "end": 401
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 406,
                  "end": 407
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 409,
                  "end": 413
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 406,
                "end": 413
              }
            ],
            "start": 404,
            "end": 415
          },
          "definite": false,
          "start": 389,
          "end": 415
        }
      ],
      "declare": false,
      "start": 385,
      "end": 416
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
            "name": "array1",
            "optional": false,
            "typeAnnotation": null,
            "start": 422,
            "end": 428
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "Bob",
                "raw": "\"Bob\"",
                "start": 432,
                "end": 437
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 438,
                "end": 439
              }
            ],
            "start": 431,
            "end": 440
          },
          "definite": false,
          "start": 422,
          "end": 440
        }
      ],
      "declare": false,
      "start": 418,
      "end": 441
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
            "name": "array2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 454,
                  "end": 457
                },
                "start": 454,
                "end": 459
              },
              "start": 452,
              "end": 459
            },
            "start": 446,
            "end": 459
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 462,
            "end": 464
          },
          "definite": false,
          "start": 446,
          "end": 464
        }
      ],
      "declare": false,
      "start": 442,
      "end": 465
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
            "name": "array3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 478,
                  "end": 481
                },
                "start": 478,
                "end": 483
              },
              "start": 476,
              "end": 483
            },
            "start": 470,
            "end": 483
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 487,
                "end": 491
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 493,
                "end": 502
              }
            ],
            "start": 486,
            "end": 503
          },
          "definite": false,
          "start": 470,
          "end": 503
        }
      ],
      "declare": false,
      "start": 466,
      "end": 504
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
            "name": "array4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 517,
                  "end": 523
                },
                "start": 517,
                "end": 525
              },
              "start": 515,
              "end": 525
            },
            "start": 509,
            "end": 525
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 529,
                "end": 533
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 535,
                "end": 544
              }
            ],
            "start": 528,
            "end": 545
          },
          "definite": false,
          "start": 509,
          "end": 545
        }
      ],
      "declare": false,
      "start": 505,
      "end": 546
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
            "name": "array5",
            "optional": false,
            "typeAnnotation": null,
            "start": 551,
            "end": 557
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 561,
                "end": 564
              },
              "start": 561,
              "end": 566
            },
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 568,
                  "end": 572
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 574,
                  "end": 583
                }
              ],
              "start": 567,
              "end": 584
            },
            "start": 560,
            "end": 584
          },
          "definite": false,
          "start": 551,
          "end": 584
        }
      ],
      "declare": false,
      "start": 547,
      "end": 585
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
            "name": "objLit",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 609,
                            "end": 615
                          },
                          "start": 607,
                          "end": 615
                        },
                        "start": 606,
                        "end": 615
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 618,
                        "end": 621
                      },
                      "start": 616,
                      "end": 621
                    },
                    "start": 601,
                    "end": 622
                  }
                ],
                "start": 599,
                "end": 624
              },
              "start": 597,
              "end": 624
            },
            "start": 591,
            "end": 624
          },
          "init": null,
          "definite": false,
          "start": 591,
          "end": 624
        }
      ],
      "declare": false,
      "start": 587,
      "end": 625
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "anyReturnFunc",
        "optional": false,
        "typeAnnotation": null,
        "start": 635,
        "end": 648
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 652,
          "end": 655
        },
        "start": 650,
        "end": 655
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 656,
        "end": 659
      },
      "expression": false,
      "start": 626,
      "end": 659
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
            "name": "obj0",
            "optional": false,
            "typeAnnotation": null,
            "start": 664,
            "end": 668
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "objLit",
              "optional": false,
              "typeAnnotation": null,
              "start": 675,
              "end": 681
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 682,
                "end": 683
              }
            ],
            "start": 671,
            "end": 684
          },
          "definite": false,
          "start": 664,
          "end": 684
        }
      ],
      "declare": false,
      "start": 660,
      "end": 685
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
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null,
            "start": 690,
            "end": 694
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "anyReturnFunc",
              "optional": false,
              "typeAnnotation": null,
              "start": 697,
              "end": 710
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 697,
            "end": 712
          },
          "definite": false,
          "start": 690,
          "end": 712
        }
      ],
      "declare": false,
      "start": 686,
      "end": 713
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 26,
  "end": 713
}
```
