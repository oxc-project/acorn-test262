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
        "name": "AConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 22
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 37,
                  "end": 38
                },
                "typeArguments": null,
                "start": 37,
                "end": 38
              },
              "start": 35,
              "end": 38
            },
            "start": 29,
            "end": 39
          }
        ],
        "start": 23,
        "end": 41
      },
      "declare": false,
      "start": 0,
      "end": 41
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 53
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 63
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 65,
                "end": 71
              },
              "start": 63,
              "end": 71
            },
            "accessibility": null,
            "static": false,
            "start": 60,
            "end": 72
          }
        ],
        "start": 54,
        "end": 74
      },
      "declare": false,
      "start": 42,
      "end": 74
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
            "name": "A",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AConstructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 90,
                  "end": 102
                },
                "typeArguments": null,
                "start": 90,
                "end": 102
              },
              "start": 88,
              "end": 102
            },
            "start": 87,
            "end": 102
          },
          "init": null,
          "definite": false,
          "start": 87,
          "end": 102
        }
      ],
      "declare": true,
      "start": 75,
      "end": 103
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
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 115,
                      "end": 116
                    },
                    "typeArguments": null,
                    "start": 115,
                    "end": 116
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 119,
                    "end": 125
                  }
                ],
                "start": 115,
                "end": 125
              },
              "start": 113,
              "end": 125
            },
            "start": 109,
            "end": 125
          },
          "init": null,
          "definite": false,
          "start": 109,
          "end": 125
        }
      ],
      "declare": false,
      "start": 105,
      "end": 126
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj1",
          "optional": false,
          "typeAnnotation": null,
          "start": 131,
          "end": 135
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 147,
          "end": 148
        },
        "start": 131,
        "end": 148
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null,
                "start": 174,
                "end": 178
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 179,
                "end": 182
              },
              "optional": false,
              "computed": false,
              "start": 174,
              "end": 182
            },
            "directive": null,
            "start": 174,
            "end": 183
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null,
                "start": 188,
                "end": 192
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 193,
                "end": 196
              },
              "optional": false,
              "computed": false,
              "start": 188,
              "end": 196
            },
            "directive": null,
            "start": 188,
            "end": 197
          }
        ],
        "start": 150,
        "end": 199
      },
      "alternate": null,
      "start": 127,
      "end": 199
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
            "name": "obj2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 211,
                "end": 214
              },
              "start": 209,
              "end": 214
            },
            "start": 205,
            "end": 214
          },
          "init": null,
          "definite": false,
          "start": 205,
          "end": 214
        }
      ],
      "declare": false,
      "start": 201,
      "end": 215
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj2",
          "optional": false,
          "typeAnnotation": null,
          "start": 220,
          "end": 224
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 236,
          "end": 237
        },
        "start": 220,
        "end": 237
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj2",
                "optional": false,
                "typeAnnotation": null,
                "start": 245,
                "end": 249
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 250,
                "end": 253
              },
              "optional": false,
              "computed": false,
              "start": 245,
              "end": 253
            },
            "directive": null,
            "start": 245,
            "end": 254
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj2",
                "optional": false,
                "typeAnnotation": null,
                "start": 259,
                "end": 263
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 264,
                "end": 267
              },
              "optional": false,
              "computed": false,
              "start": 259,
              "end": 267
            },
            "directive": null,
            "start": 259,
            "end": 268
          }
        ],
        "start": 239,
        "end": 270
      },
      "alternate": null,
      "start": 216,
      "end": 270
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 321,
        "end": 333
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 345,
                    "end": 346
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 345,
                  "end": 346
                }
              ],
              "start": 344,
              "end": 347
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 351,
                  "end": 352
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
                        "start": 353,
                        "end": 354
                      },
                      "typeArguments": null,
                      "start": 353,
                      "end": 354
                    }
                  ],
                  "start": 352,
                  "end": 355
                },
                "start": 351,
                "end": 355
              },
              "start": 349,
              "end": 355
            },
            "start": 340,
            "end": 356
          }
        ],
        "start": 334,
        "end": 358
      },
      "declare": false,
      "start": 311,
      "end": 358
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 369,
        "end": 370
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
              "start": 371,
              "end": 372
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 371,
            "end": 372
          }
        ],
        "start": 370,
        "end": 373
      },
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 380,
              "end": 383
            },
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
                  "start": 385,
                  "end": 386
                },
                "typeArguments": null,
                "start": 385,
                "end": 386
              },
              "start": 383,
              "end": 386
            },
            "accessibility": null,
            "static": false,
            "start": 380,
            "end": 387
          }
        ],
        "start": 374,
        "end": 389
      },
      "declare": false,
      "start": 359,
      "end": 389
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
            "name": "B",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BConstructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 405,
                  "end": 417
                },
                "typeArguments": null,
                "start": 405,
                "end": 417
              },
              "start": 403,
              "end": 417
            },
            "start": 402,
            "end": 417
          },
          "init": null,
          "definite": false,
          "start": 402,
          "end": 417
        }
      ],
      "declare": true,
      "start": 390,
      "end": 418
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
            "name": "obj3",
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
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 430,
                      "end": 431
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 432,
                          "end": 438
                        }
                      ],
                      "start": 431,
                      "end": 439
                    },
                    "start": 430,
                    "end": 439
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 442,
                    "end": 448
                  }
                ],
                "start": 430,
                "end": 448
              },
              "start": 428,
              "end": 448
            },
            "start": 424,
            "end": 448
          },
          "init": null,
          "definite": false,
          "start": 424,
          "end": 448
        }
      ],
      "declare": false,
      "start": 420,
      "end": 449
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj3",
          "optional": false,
          "typeAnnotation": null,
          "start": 454,
          "end": 458
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 470,
          "end": 471
        },
        "start": 454,
        "end": 471
      },
      "consequent": {
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 505,
                  "end": 509
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 510,
                  "end": 513
                },
                "optional": false,
                "computed": false,
                "start": 505,
                "end": 513
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 516,
                "end": 517
              },
              "start": 505,
              "end": 517
            },
            "directive": null,
            "start": 505,
            "end": 518
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 523,
                  "end": 527
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 528,
                  "end": 531
                },
                "optional": false,
                "computed": false,
                "start": 523,
                "end": 531
              },
              "right": {
                "type": "Literal",
                "value": "str",
                "raw": "\"str\"",
                "start": 534,
                "end": 539
              },
              "start": 523,
              "end": 539
            },
            "directive": null,
            "start": 523,
            "end": 540
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 545,
                  "end": 549
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 550,
                  "end": 553
                },
                "optional": false,
                "computed": false,
                "start": 545,
                "end": 553
              },
              "right": {
                "type": "Literal",
                "value": "str",
                "raw": "\"str\"",
                "start": 556,
                "end": 561
              },
              "start": 545,
              "end": 561
            },
            "directive": null,
            "start": 545,
            "end": 562
          }
        ],
        "start": 473,
        "end": 564
      },
      "alternate": null,
      "start": 450,
      "end": 564
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
            "name": "obj4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 576,
                "end": 579
              },
              "start": 574,
              "end": 579
            },
            "start": 570,
            "end": 579
          },
          "init": null,
          "definite": false,
          "start": 570,
          "end": 579
        }
      ],
      "declare": false,
      "start": 566,
      "end": 580
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj4",
          "optional": false,
          "typeAnnotation": null,
          "start": 585,
          "end": 589
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 601,
          "end": 602
        },
        "start": 585,
        "end": 602
      },
      "consequent": {
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 610,
                  "end": 614
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 615,
                  "end": 618
                },
                "optional": false,
                "computed": false,
                "start": 610,
                "end": 618
              },
              "right": {
                "type": "Literal",
                "value": "str",
                "raw": "\"str\"",
                "start": 621,
                "end": 626
              },
              "start": 610,
              "end": 626
            },
            "directive": null,
            "start": 610,
            "end": 627
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 632,
                  "end": 636
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 637,
                  "end": 640
                },
                "optional": false,
                "computed": false,
                "start": 632,
                "end": 640
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 643,
                "end": 644
              },
              "start": 632,
              "end": 644
            },
            "directive": null,
            "start": 632,
            "end": 645
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 650,
                  "end": 654
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 655,
                  "end": 658
                },
                "optional": false,
                "computed": false,
                "start": 650,
                "end": 658
              },
              "right": {
                "type": "Literal",
                "value": "str",
                "raw": "\"str\"",
                "start": 661,
                "end": 666
              },
              "start": 650,
              "end": 666
            },
            "directive": null,
            "start": 650,
            "end": 667
          }
        ],
        "start": 604,
        "end": 669
      },
      "alternate": null,
      "start": 581,
      "end": 669
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 717,
        "end": 729
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 748,
                    "end": 754
                  },
                  "start": 746,
                  "end": 754
                },
                "start": 741,
                "end": 754
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 757,
                  "end": 759
                },
                "typeArguments": null,
                "start": 757,
                "end": 759
              },
              "start": 755,
              "end": 759
            },
            "start": 736,
            "end": 760
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 777,
                    "end": 783
                  },
                  "start": 775,
                  "end": 783
                },
                "start": 770,
                "end": 783
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 786,
                  "end": 788
                },
                "typeArguments": null,
                "start": 786,
                "end": 788
              },
              "start": 784,
              "end": 788
            },
            "start": 765,
            "end": 789
          }
        ],
        "start": 730,
        "end": 791
      },
      "declare": false,
      "start": 707,
      "end": 791
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 802,
        "end": 804
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 811,
              "end": 814
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 816,
                "end": 822
              },
              "start": 814,
              "end": 822
            },
            "accessibility": null,
            "static": false,
            "start": 811,
            "end": 823
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 828,
              "end": 829
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 831,
                "end": 837
              },
              "start": 829,
              "end": 837
            },
            "accessibility": null,
            "static": false,
            "start": 828,
            "end": 838
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar1",
              "optional": false,
              "typeAnnotation": null,
              "start": 843,
              "end": 847
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 849,
                "end": 855
              },
              "start": 847,
              "end": 855
            },
            "accessibility": null,
            "static": false,
            "start": 843,
            "end": 856
          }
        ],
        "start": 805,
        "end": 858
      },
      "declare": false,
      "start": 792,
      "end": 858
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 869,
        "end": 871
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 878,
              "end": 881
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 883,
                "end": 889
              },
              "start": 881,
              "end": 889
            },
            "accessibility": null,
            "static": false,
            "start": 878,
            "end": 890
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 895,
              "end": 896
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 898,
                "end": 904
              },
              "start": 896,
              "end": 904
            },
            "accessibility": null,
            "static": false,
            "start": 895,
            "end": 905
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar2",
              "optional": false,
              "typeAnnotation": null,
              "start": 910,
              "end": 914
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 916,
                "end": 922
              },
              "start": 914,
              "end": 922
            },
            "accessibility": null,
            "static": false,
            "start": 910,
            "end": 923
          }
        ],
        "start": 872,
        "end": 925
      },
      "declare": false,
      "start": 859,
      "end": 925
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
            "name": "C",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CConstructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 941,
                  "end": 953
                },
                "typeArguments": null,
                "start": 941,
                "end": 953
              },
              "start": 939,
              "end": 953
            },
            "start": 938,
            "end": 953
          },
          "init": null,
          "definite": false,
          "start": 938,
          "end": 953
        }
      ],
      "declare": true,
      "start": 926,
      "end": 954
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
            "name": "obj5",
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
                      "name": "C1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 966,
                      "end": 968
                    },
                    "typeArguments": null,
                    "start": 966,
                    "end": 968
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 971,
                      "end": 972
                    },
                    "typeArguments": null,
                    "start": 971,
                    "end": 972
                  }
                ],
                "start": 966,
                "end": 972
              },
              "start": 964,
              "end": 972
            },
            "start": 960,
            "end": 972
          },
          "init": null,
          "definite": false,
          "start": 960,
          "end": 972
        }
      ],
      "declare": false,
      "start": 956,
      "end": 973
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj5",
          "optional": false,
          "typeAnnotation": null,
          "start": 978,
          "end": 982
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 994,
          "end": 995
        },
        "start": 978,
        "end": 995
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj5",
                "optional": false,
                "typeAnnotation": null,
                "start": 1022,
                "end": 1026
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1027,
                "end": 1030
              },
              "optional": false,
              "computed": false,
              "start": 1022,
              "end": 1030
            },
            "directive": null,
            "start": 1022,
            "end": 1031
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj5",
                "optional": false,
                "typeAnnotation": null,
                "start": 1036,
                "end": 1040
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1041,
                "end": 1042
              },
              "optional": false,
              "computed": false,
              "start": 1036,
              "end": 1042
            },
            "directive": null,
            "start": 1036,
            "end": 1043
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj5",
                "optional": false,
                "typeAnnotation": null,
                "start": 1048,
                "end": 1052
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1053,
                "end": 1057
              },
              "optional": false,
              "computed": false,
              "start": 1048,
              "end": 1057
            },
            "directive": null,
            "start": 1048,
            "end": 1058
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj5",
                "optional": false,
                "typeAnnotation": null,
                "start": 1063,
                "end": 1067
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1068,
                "end": 1072
              },
              "optional": false,
              "computed": false,
              "start": 1063,
              "end": 1072
            },
            "directive": null,
            "start": 1063,
            "end": 1073
          }
        ],
        "start": 997,
        "end": 1075
      },
      "alternate": null,
      "start": 974,
      "end": 1075
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
            "name": "obj6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1087,
                "end": 1090
              },
              "start": 1085,
              "end": 1090
            },
            "start": 1081,
            "end": 1090
          },
          "init": null,
          "definite": false,
          "start": 1081,
          "end": 1090
        }
      ],
      "declare": false,
      "start": 1077,
      "end": 1091
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj6",
          "optional": false,
          "typeAnnotation": null,
          "start": 1096,
          "end": 1100
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 1112,
          "end": 1113
        },
        "start": 1096,
        "end": 1113
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj6",
                "optional": false,
                "typeAnnotation": null,
                "start": 1121,
                "end": 1125
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1126,
                "end": 1129
              },
              "optional": false,
              "computed": false,
              "start": 1121,
              "end": 1129
            },
            "directive": null,
            "start": 1121,
            "end": 1130
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj6",
                "optional": false,
                "typeAnnotation": null,
                "start": 1135,
                "end": 1139
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1140,
                "end": 1144
              },
              "optional": false,
              "computed": false,
              "start": 1135,
              "end": 1144
            },
            "directive": null,
            "start": 1135,
            "end": 1145
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj6",
                "optional": false,
                "typeAnnotation": null,
                "start": 1150,
                "end": 1154
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1155,
                "end": 1159
              },
              "optional": false,
              "computed": false,
              "start": 1150,
              "end": 1159
            },
            "directive": null,
            "start": 1150,
            "end": 1160
          }
        ],
        "start": 1115,
        "end": 1162
      },
      "alternate": null,
      "start": 1092,
      "end": 1162
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 1202,
        "end": 1203
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1210,
              "end": 1213
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1215,
                "end": 1221
              },
              "start": 1213,
              "end": 1221
            },
            "accessibility": null,
            "static": false,
            "start": 1210,
            "end": 1222
          }
        ],
        "start": 1204,
        "end": 1224
      },
      "declare": false,
      "start": 1192,
      "end": 1224
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
            "name": "D",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1250,
                          "end": 1251
                        },
                        "typeArguments": null,
                        "start": 1250,
                        "end": 1251
                      },
                      "start": 1248,
                      "end": 1251
                    },
                    "start": 1242,
                    "end": 1252
                  }
                ],
                "start": 1240,
                "end": 1254
              },
              "start": 1238,
              "end": 1254
            },
            "start": 1237,
            "end": 1254
          },
          "init": null,
          "definite": false,
          "start": 1237,
          "end": 1254
        }
      ],
      "declare": true,
      "start": 1225,
      "end": 1255
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
            "name": "obj7",
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
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1267,
                      "end": 1268
                    },
                    "typeArguments": null,
                    "start": 1267,
                    "end": 1268
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 1271,
                    "end": 1277
                  }
                ],
                "start": 1267,
                "end": 1277
              },
              "start": 1265,
              "end": 1277
            },
            "start": 1261,
            "end": 1277
          },
          "init": null,
          "definite": false,
          "start": 1261,
          "end": 1277
        }
      ],
      "declare": false,
      "start": 1257,
      "end": 1278
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj7",
          "optional": false,
          "typeAnnotation": null,
          "start": 1283,
          "end": 1287
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 1299,
          "end": 1300
        },
        "start": 1283,
        "end": 1300
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj7",
                "optional": false,
                "typeAnnotation": null,
                "start": 1326,
                "end": 1330
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1331,
                "end": 1334
              },
              "optional": false,
              "computed": false,
              "start": 1326,
              "end": 1334
            },
            "directive": null,
            "start": 1326,
            "end": 1335
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj7",
                "optional": false,
                "typeAnnotation": null,
                "start": 1340,
                "end": 1344
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 1345,
                "end": 1348
              },
              "optional": false,
              "computed": false,
              "start": 1340,
              "end": 1348
            },
            "directive": null,
            "start": 1340,
            "end": 1349
          }
        ],
        "start": 1302,
        "end": 1351
      },
      "alternate": null,
      "start": 1279,
      "end": 1351
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
            "name": "obj8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1363,
                "end": 1366
              },
              "start": 1361,
              "end": 1366
            },
            "start": 1357,
            "end": 1366
          },
          "init": null,
          "definite": false,
          "start": 1357,
          "end": 1366
        }
      ],
      "declare": false,
      "start": 1353,
      "end": 1367
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj8",
          "optional": false,
          "typeAnnotation": null,
          "start": 1372,
          "end": 1376
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 1388,
          "end": 1389
        },
        "start": 1372,
        "end": 1389
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj8",
                "optional": false,
                "typeAnnotation": null,
                "start": 1397,
                "end": 1401
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1402,
                "end": 1405
              },
              "optional": false,
              "computed": false,
              "start": 1397,
              "end": 1405
            },
            "directive": null,
            "start": 1397,
            "end": 1406
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj8",
                "optional": false,
                "typeAnnotation": null,
                "start": 1411,
                "end": 1415
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 1416,
                "end": 1419
              },
              "optional": false,
              "computed": false,
              "start": 1411,
              "end": 1419
            },
            "directive": null,
            "start": 1411,
            "end": 1420
          }
        ],
        "start": 1391,
        "end": 1422
      },
      "alternate": null,
      "start": 1368,
      "end": 1422
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 1485,
        "end": 1497
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1512,
                      "end": 1514
                    },
                    "typeArguments": null,
                    "start": 1512,
                    "end": 1514
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1517,
                      "end": 1519
                    },
                    "typeArguments": null,
                    "start": 1517,
                    "end": 1519
                  }
                ],
                "start": 1512,
                "end": 1519
              },
              "start": 1510,
              "end": 1519
            },
            "start": 1504,
            "end": 1520
          }
        ],
        "start": 1498,
        "end": 1522
      },
      "declare": false,
      "start": 1475,
      "end": 1522
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1533,
        "end": 1535
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1542,
              "end": 1545
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1547,
                "end": 1553
              },
              "start": 1545,
              "end": 1553
            },
            "accessibility": null,
            "static": false,
            "start": 1542,
            "end": 1554
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1559,
              "end": 1563
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1565,
                "end": 1571
              },
              "start": 1563,
              "end": 1571
            },
            "accessibility": null,
            "static": false,
            "start": 1559,
            "end": 1572
          }
        ],
        "start": 1536,
        "end": 1574
      },
      "declare": false,
      "start": 1523,
      "end": 1574
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1585,
        "end": 1587
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1594,
              "end": 1597
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1599,
                "end": 1605
              },
              "start": 1597,
              "end": 1605
            },
            "accessibility": null,
            "static": false,
            "start": 1594,
            "end": 1606
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1611,
              "end": 1615
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1617,
                "end": 1623
              },
              "start": 1615,
              "end": 1623
            },
            "accessibility": null,
            "static": false,
            "start": 1611,
            "end": 1624
          }
        ],
        "start": 1588,
        "end": 1626
      },
      "declare": false,
      "start": 1575,
      "end": 1626
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
            "name": "E",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "EConstructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1642,
                  "end": 1654
                },
                "typeArguments": null,
                "start": 1642,
                "end": 1654
              },
              "start": 1640,
              "end": 1654
            },
            "start": 1639,
            "end": 1654
          },
          "init": null,
          "definite": false,
          "start": 1639,
          "end": 1654
        }
      ],
      "declare": true,
      "start": 1627,
      "end": 1655
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
            "name": "obj9",
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
                      "name": "E1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1667,
                      "end": 1669
                    },
                    "typeArguments": null,
                    "start": 1667,
                    "end": 1669
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1672,
                      "end": 1673
                    },
                    "typeArguments": null,
                    "start": 1672,
                    "end": 1673
                  }
                ],
                "start": 1667,
                "end": 1673
              },
              "start": 1665,
              "end": 1673
            },
            "start": 1661,
            "end": 1673
          },
          "init": null,
          "definite": false,
          "start": 1661,
          "end": 1673
        }
      ],
      "declare": false,
      "start": 1657,
      "end": 1674
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj9",
          "optional": false,
          "typeAnnotation": null,
          "start": 1679,
          "end": 1683
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "E",
          "optional": false,
          "typeAnnotation": null,
          "start": 1695,
          "end": 1696
        },
        "start": 1679,
        "end": 1696
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj9",
                "optional": false,
                "typeAnnotation": null,
                "start": 1722,
                "end": 1726
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1727,
                "end": 1730
              },
              "optional": false,
              "computed": false,
              "start": 1722,
              "end": 1730
            },
            "directive": null,
            "start": 1722,
            "end": 1731
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj9",
                "optional": false,
                "typeAnnotation": null,
                "start": 1736,
                "end": 1740
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1741,
                "end": 1745
              },
              "optional": false,
              "computed": false,
              "start": 1736,
              "end": 1745
            },
            "directive": null,
            "start": 1736,
            "end": 1746
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj9",
                "optional": false,
                "typeAnnotation": null,
                "start": 1751,
                "end": 1755
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1756,
                "end": 1760
              },
              "optional": false,
              "computed": false,
              "start": 1751,
              "end": 1760
            },
            "directive": null,
            "start": 1751,
            "end": 1761
          }
        ],
        "start": 1698,
        "end": 1763
      },
      "alternate": null,
      "start": 1675,
      "end": 1763
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
            "name": "obj10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1776,
                "end": 1779
              },
              "start": 1774,
              "end": 1779
            },
            "start": 1769,
            "end": 1779
          },
          "init": null,
          "definite": false,
          "start": 1769,
          "end": 1779
        }
      ],
      "declare": false,
      "start": 1765,
      "end": 1780
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj10",
          "optional": false,
          "typeAnnotation": null,
          "start": 1785,
          "end": 1790
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "E",
          "optional": false,
          "typeAnnotation": null,
          "start": 1802,
          "end": 1803
        },
        "start": 1785,
        "end": 1803
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj10",
                "optional": false,
                "typeAnnotation": null,
                "start": 1811,
                "end": 1816
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1817,
                "end": 1820
              },
              "optional": false,
              "computed": false,
              "start": 1811,
              "end": 1820
            },
            "directive": null,
            "start": 1811,
            "end": 1821
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj10",
                "optional": false,
                "typeAnnotation": null,
                "start": 1826,
                "end": 1831
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1832,
                "end": 1836
              },
              "optional": false,
              "computed": false,
              "start": 1826,
              "end": 1836
            },
            "directive": null,
            "start": 1826,
            "end": 1837
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj10",
                "optional": false,
                "typeAnnotation": null,
                "start": 1842,
                "end": 1847
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1848,
                "end": 1852
              },
              "optional": false,
              "computed": false,
              "start": 1842,
              "end": 1852
            },
            "directive": null,
            "start": 1842,
            "end": 1853
          }
        ],
        "start": 1805,
        "end": 1855
      },
      "alternate": null,
      "start": 1781,
      "end": 1855
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 1909,
        "end": 1921
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1936,
                "end": 1939
              },
              "start": 1934,
              "end": 1939
            },
            "start": 1928,
            "end": 1940
          }
        ],
        "start": 1922,
        "end": 1942
      },
      "declare": false,
      "start": 1899,
      "end": 1942
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 1953,
        "end": 1954
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1961,
              "end": 1964
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1966,
                "end": 1972
              },
              "start": 1964,
              "end": 1972
            },
            "accessibility": null,
            "static": false,
            "start": 1961,
            "end": 1973
          },
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
              "start": 1978,
              "end": 1981
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1983,
                "end": 1989
              },
              "start": 1981,
              "end": 1989
            },
            "accessibility": null,
            "static": false,
            "start": 1978,
            "end": 1990
          }
        ],
        "start": 1955,
        "end": 1992
      },
      "declare": false,
      "start": 1943,
      "end": 1992
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
            "name": "F",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FConstructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2008,
                  "end": 2020
                },
                "typeArguments": null,
                "start": 2008,
                "end": 2020
              },
              "start": 2006,
              "end": 2020
            },
            "start": 2005,
            "end": 2020
          },
          "init": null,
          "definite": false,
          "start": 2005,
          "end": 2020
        }
      ],
      "declare": true,
      "start": 1993,
      "end": 2021
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
            "name": "obj11",
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
                      "name": "F",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2034,
                      "end": 2035
                    },
                    "typeArguments": null,
                    "start": 2034,
                    "end": 2035
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 2038,
                    "end": 2044
                  }
                ],
                "start": 2034,
                "end": 2044
              },
              "start": 2032,
              "end": 2044
            },
            "start": 2027,
            "end": 2044
          },
          "init": null,
          "definite": false,
          "start": 2027,
          "end": 2044
        }
      ],
      "declare": false,
      "start": 2023,
      "end": 2045
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj11",
          "optional": false,
          "typeAnnotation": null,
          "start": 2050,
          "end": 2055
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "F",
          "optional": false,
          "typeAnnotation": null,
          "start": 2067,
          "end": 2068
        },
        "start": 2050,
        "end": 2068
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj11",
                "optional": false,
                "typeAnnotation": null,
                "start": 2134,
                "end": 2139
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 2140,
                "end": 2143
              },
              "optional": false,
              "computed": false,
              "start": 2134,
              "end": 2143
            },
            "directive": null,
            "start": 2134,
            "end": 2144
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj11",
                "optional": false,
                "typeAnnotation": null,
                "start": 2149,
                "end": 2154
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 2155,
                "end": 2158
              },
              "optional": false,
              "computed": false,
              "start": 2149,
              "end": 2158
            },
            "directive": null,
            "start": 2149,
            "end": 2159
          }
        ],
        "start": 2070,
        "end": 2161
      },
      "alternate": null,
      "start": 2046,
      "end": 2161
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
            "name": "obj12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2174,
                "end": 2177
              },
              "start": 2172,
              "end": 2177
            },
            "start": 2167,
            "end": 2177
          },
          "init": null,
          "definite": false,
          "start": 2167,
          "end": 2177
        }
      ],
      "declare": false,
      "start": 2163,
      "end": 2178
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj12",
          "optional": false,
          "typeAnnotation": null,
          "start": 2183,
          "end": 2188
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "F",
          "optional": false,
          "typeAnnotation": null,
          "start": 2200,
          "end": 2201
        },
        "start": 2183,
        "end": 2201
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj12",
                "optional": false,
                "typeAnnotation": null,
                "start": 2209,
                "end": 2214
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 2215,
                "end": 2218
              },
              "optional": false,
              "computed": false,
              "start": 2209,
              "end": 2218
            },
            "directive": null,
            "start": 2209,
            "end": 2219
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj12",
                "optional": false,
                "typeAnnotation": null,
                "start": 2224,
                "end": 2229
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 2230,
                "end": 2233
              },
              "optional": false,
              "computed": false,
              "start": 2224,
              "end": 2233
            },
            "directive": null,
            "start": 2224,
            "end": 2234
          }
        ],
        "start": 2203,
        "end": 2236
      },
      "alternate": null,
      "start": 2179,
      "end": 2236
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 2313,
        "end": 2325
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
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 2332,
              "end": 2341
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "G1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2343,
                  "end": 2345
                },
                "typeArguments": null,
                "start": 2343,
                "end": 2345
              },
              "start": 2341,
              "end": 2345
            },
            "accessibility": null,
            "static": false,
            "start": 2332,
            "end": 2346
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "G2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2376,
                  "end": 2378
                },
                "typeArguments": null,
                "start": 2376,
                "end": 2378
              },
              "start": 2374,
              "end": 2378
            },
            "start": 2368,
            "end": 2379
          }
        ],
        "start": 2326,
        "end": 2400
      },
      "declare": false,
      "start": 2303,
      "end": 2400
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2411,
        "end": 2413
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
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2420,
              "end": 2424
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2426,
                "end": 2432
              },
              "start": 2424,
              "end": 2432
            },
            "accessibility": null,
            "static": false,
            "start": 2420,
            "end": 2433
          }
        ],
        "start": 2414,
        "end": 2435
      },
      "declare": false,
      "start": 2401,
      "end": 2435
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2446,
        "end": 2448
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
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2455,
              "end": 2459
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2461,
                "end": 2468
              },
              "start": 2459,
              "end": 2468
            },
            "accessibility": null,
            "static": false,
            "start": 2455,
            "end": 2469
          }
        ],
        "start": 2449,
        "end": 2471
      },
      "declare": false,
      "start": 2436,
      "end": 2471
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
            "name": "G",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "GConstructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2487,
                  "end": 2499
                },
                "typeArguments": null,
                "start": 2487,
                "end": 2499
              },
              "start": 2485,
              "end": 2499
            },
            "start": 2484,
            "end": 2499
          },
          "init": null,
          "definite": false,
          "start": 2484,
          "end": 2499
        }
      ],
      "declare": true,
      "start": 2472,
      "end": 2500
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
            "name": "obj13",
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
                      "name": "G1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2513,
                      "end": 2515
                    },
                    "typeArguments": null,
                    "start": 2513,
                    "end": 2515
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "G2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2518,
                      "end": 2520
                    },
                    "typeArguments": null,
                    "start": 2518,
                    "end": 2520
                  }
                ],
                "start": 2513,
                "end": 2520
              },
              "start": 2511,
              "end": 2520
            },
            "start": 2506,
            "end": 2520
          },
          "init": null,
          "definite": false,
          "start": 2506,
          "end": 2520
        }
      ],
      "declare": false,
      "start": 2502,
      "end": 2521
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj13",
          "optional": false,
          "typeAnnotation": null,
          "start": 2526,
          "end": 2531
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "G",
          "optional": false,
          "typeAnnotation": null,
          "start": 2543,
          "end": 2544
        },
        "start": 2526,
        "end": 2544
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj13",
                "optional": false,
                "typeAnnotation": null,
                "start": 2612,
                "end": 2617
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2618,
                "end": 2622
              },
              "optional": false,
              "computed": false,
              "start": 2612,
              "end": 2622
            },
            "directive": null,
            "start": 2612,
            "end": 2623
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj13",
                "optional": false,
                "typeAnnotation": null,
                "start": 2628,
                "end": 2633
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2634,
                "end": 2638
              },
              "optional": false,
              "computed": false,
              "start": 2628,
              "end": 2638
            },
            "directive": null,
            "start": 2628,
            "end": 2639
          }
        ],
        "start": 2546,
        "end": 2641
      },
      "alternate": null,
      "start": 2522,
      "end": 2641
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
            "name": "obj14",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2654,
                "end": 2657
              },
              "start": 2652,
              "end": 2657
            },
            "start": 2647,
            "end": 2657
          },
          "init": null,
          "definite": false,
          "start": 2647,
          "end": 2657
        }
      ],
      "declare": false,
      "start": 2643,
      "end": 2658
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj14",
          "optional": false,
          "typeAnnotation": null,
          "start": 2663,
          "end": 2668
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "G",
          "optional": false,
          "typeAnnotation": null,
          "start": 2680,
          "end": 2681
        },
        "start": 2663,
        "end": 2681
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj14",
                "optional": false,
                "typeAnnotation": null,
                "start": 2689,
                "end": 2694
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2695,
                "end": 2699
              },
              "optional": false,
              "computed": false,
              "start": 2689,
              "end": 2699
            },
            "directive": null,
            "start": 2689,
            "end": 2700
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj14",
                "optional": false,
                "typeAnnotation": null,
                "start": 2705,
                "end": 2710
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2711,
                "end": 2715
              },
              "optional": false,
              "computed": false,
              "start": 2705,
              "end": 2715
            },
            "directive": null,
            "start": 2705,
            "end": 2716
          }
        ],
        "start": 2683,
        "end": 2718
      },
      "alternate": null,
      "start": 2659,
      "end": 2718
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 2775,
        "end": 2787
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
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 2794,
              "end": 2803
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2805,
                "end": 2808
              },
              "start": 2803,
              "end": 2808
            },
            "accessibility": null,
            "static": false,
            "start": 2794,
            "end": 2809
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "H",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2906,
                  "end": 2907
                },
                "typeArguments": null,
                "start": 2906,
                "end": 2907
              },
              "start": 2904,
              "end": 2907
            },
            "start": 2898,
            "end": 2908
          }
        ],
        "start": 2788,
        "end": 2931
      },
      "declare": false,
      "start": 2765,
      "end": 2931
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "H",
        "optional": false,
        "typeAnnotation": null,
        "start": 2942,
        "end": 2943
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2950,
              "end": 2953
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2955,
                "end": 2961
              },
              "start": 2953,
              "end": 2961
            },
            "accessibility": null,
            "static": false,
            "start": 2950,
            "end": 2962
          }
        ],
        "start": 2944,
        "end": 2964
      },
      "declare": false,
      "start": 2932,
      "end": 2964
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
            "name": "H",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HConstructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2980,
                  "end": 2992
                },
                "typeArguments": null,
                "start": 2980,
                "end": 2992
              },
              "start": 2978,
              "end": 2992
            },
            "start": 2977,
            "end": 2992
          },
          "init": null,
          "definite": false,
          "start": 2977,
          "end": 2992
        }
      ],
      "declare": true,
      "start": 2965,
      "end": 2993
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
            "name": "obj15",
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
                      "name": "H",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3006,
                      "end": 3007
                    },
                    "typeArguments": null,
                    "start": 3006,
                    "end": 3007
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 3010,
                    "end": 3016
                  }
                ],
                "start": 3006,
                "end": 3016
              },
              "start": 3004,
              "end": 3016
            },
            "start": 2999,
            "end": 3016
          },
          "init": null,
          "definite": false,
          "start": 2999,
          "end": 3016
        }
      ],
      "declare": false,
      "start": 2995,
      "end": 3017
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj15",
          "optional": false,
          "typeAnnotation": null,
          "start": 3022,
          "end": 3027
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "H",
          "optional": false,
          "typeAnnotation": null,
          "start": 3039,
          "end": 3040
        },
        "start": 3022,
        "end": 3040
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj15",
                "optional": false,
                "typeAnnotation": null,
                "start": 3066,
                "end": 3071
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 3072,
                "end": 3075
              },
              "optional": false,
              "computed": false,
              "start": 3066,
              "end": 3075
            },
            "directive": null,
            "start": 3066,
            "end": 3076
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj15",
                "optional": false,
                "typeAnnotation": null,
                "start": 3081,
                "end": 3086
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 3087,
                "end": 3090
              },
              "optional": false,
              "computed": false,
              "start": 3081,
              "end": 3090
            },
            "directive": null,
            "start": 3081,
            "end": 3091
          }
        ],
        "start": 3042,
        "end": 3093
      },
      "alternate": null,
      "start": 3018,
      "end": 3093
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
            "name": "obj16",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3106,
                "end": 3109
              },
              "start": 3104,
              "end": 3109
            },
            "start": 3099,
            "end": 3109
          },
          "init": null,
          "definite": false,
          "start": 3099,
          "end": 3109
        }
      ],
      "declare": false,
      "start": 3095,
      "end": 3110
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj16",
          "optional": false,
          "typeAnnotation": null,
          "start": 3115,
          "end": 3120
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "H",
          "optional": false,
          "typeAnnotation": null,
          "start": 3132,
          "end": 3133
        },
        "start": 3115,
        "end": 3133
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj16",
                "optional": false,
                "typeAnnotation": null,
                "start": 3141,
                "end": 3146
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3147,
                "end": 3151
              },
              "optional": false,
              "computed": false,
              "start": 3141,
              "end": 3151
            },
            "directive": null,
            "start": 3141,
            "end": 3152
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj16",
                "optional": false,
                "typeAnnotation": null,
                "start": 3157,
                "end": 3162
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3163,
                "end": 3167
              },
              "optional": false,
              "computed": false,
              "start": 3157,
              "end": 3167
            },
            "directive": null,
            "start": 3157,
            "end": 3168
          }
        ],
        "start": 3135,
        "end": 3170
      },
      "alternate": null,
      "start": 3111,
      "end": 3170
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
            "name": "obj17",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3183,
                "end": 3186
              },
              "start": 3181,
              "end": 3186
            },
            "start": 3176,
            "end": 3186
          },
          "init": null,
          "definite": false,
          "start": 3176,
          "end": 3186
        }
      ],
      "declare": false,
      "start": 3172,
      "end": 3187
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj17",
          "optional": false,
          "typeAnnotation": null,
          "start": 3192,
          "end": 3197
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Object",
          "optional": false,
          "typeAnnotation": null,
          "start": 3209,
          "end": 3215
        },
        "start": 3192,
        "end": 3215
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj17",
                "optional": false,
                "typeAnnotation": null,
                "start": 3267,
                "end": 3272
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3273,
                "end": 3277
              },
              "optional": false,
              "computed": false,
              "start": 3267,
              "end": 3277
            },
            "directive": null,
            "start": 3267,
            "end": 3278
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj17",
                "optional": false,
                "typeAnnotation": null,
                "start": 3283,
                "end": 3288
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3289,
                "end": 3293
              },
              "optional": false,
              "computed": false,
              "start": 3283,
              "end": 3293
            },
            "directive": null,
            "start": 3283,
            "end": 3294
          }
        ],
        "start": 3217,
        "end": 3296
      },
      "alternate": null,
      "start": 3188,
      "end": 3296
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
            "name": "obj18",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3309,
                "end": 3312
              },
              "start": 3307,
              "end": 3312
            },
            "start": 3302,
            "end": 3312
          },
          "init": null,
          "definite": false,
          "start": 3302,
          "end": 3312
        }
      ],
      "declare": false,
      "start": 3298,
      "end": 3313
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj18",
          "optional": false,
          "typeAnnotation": null,
          "start": 3318,
          "end": 3323
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Function",
          "optional": false,
          "typeAnnotation": null,
          "start": 3335,
          "end": 3343
        },
        "start": 3318,
        "end": 3343
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj18",
                "optional": false,
                "typeAnnotation": null,
                "start": 3397,
                "end": 3402
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3403,
                "end": 3407
              },
              "optional": false,
              "computed": false,
              "start": 3397,
              "end": 3407
            },
            "directive": null,
            "start": 3397,
            "end": 3408
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj18",
                "optional": false,
                "typeAnnotation": null,
                "start": 3413,
                "end": 3418
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3419,
                "end": 3423
              },
              "optional": false,
              "computed": false,
              "start": 3413,
              "end": 3423
            },
            "directive": null,
            "start": 3413,
            "end": 3424
          }
        ],
        "start": 3345,
        "end": 3426
      },
      "alternate": null,
      "start": 3314,
      "end": 3426
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3426
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "AConstructor",
    "start": 10,
    "end": 22,
    "range": [
      10,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 29,
    "end": 32,
    "range": [
      29,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 42,
    "end": 51,
    "range": [
      42,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 60,
    "end": 63,
    "range": [
      60,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 65,
    "end": 71,
    "range": [
      65,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 75,
    "end": 82,
    "range": [
      75,
      82
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 83,
    "end": 86,
    "range": [
      83,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Identifier",
    "value": "AConstructor",
    "start": 90,
    "end": 102,
    "range": [
      90,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 105,
    "end": 108,
    "range": [
      105,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 109,
    "end": 113,
    "range": [
      109,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 119,
    "end": 125,
    "range": [
      119,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 127,
    "end": 129,
    "range": [
      127,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 131,
    "end": 135,
    "range": [
      131,
      135
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 136,
    "end": 146,
    "range": [
      136,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 174,
    "end": 178,
    "range": [
      174,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 179,
    "end": 182,
    "range": [
      179,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 188,
    "end": 192,
    "range": [
      188,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 193,
    "end": 196,
    "range": [
      193,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 201,
    "end": 204,
    "range": [
      201,
      204
    ]
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 205,
    "end": 209,
    "range": [
      205,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 211,
    "end": 214,
    "range": [
      211,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 216,
    "end": 218,
    "range": [
      216,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 220,
    "end": 224,
    "range": [
      220,
      224
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 225,
    "end": 235,
    "range": [
      225,
      235
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 245,
    "end": 249,
    "range": [
      245,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 250,
    "end": 253,
    "range": [
      250,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 259,
    "end": 263,
    "range": [
      259,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 264,
    "end": 267,
    "range": [
      264,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 311,
    "end": 320,
    "range": [
      311,
      320
    ]
  },
  {
    "type": "Identifier",
    "value": "BConstructor",
    "start": 321,
    "end": 333,
    "range": [
      321,
      333
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 340,
    "end": 343,
    "range": [
      340,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 353,
    "end": 354,
    "range": [
      353,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 359,
    "end": 368,
    "range": [
      359,
      368
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 380,
    "end": 383,
    "range": [
      380,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 390,
    "end": 397,
    "range": [
      390,
      397
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 398,
    "end": 401,
    "range": [
      398,
      401
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Identifier",
    "value": "BConstructor",
    "start": 405,
    "end": 417,
    "range": [
      405,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 420,
    "end": 423,
    "range": [
      420,
      423
    ]
  },
  {
    "type": "Identifier",
    "value": "obj3",
    "start": 424,
    "end": 428,
    "range": [
      424,
      428
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 432,
    "end": 438,
    "range": [
      432,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 442,
    "end": 448,
    "range": [
      442,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 450,
    "end": 452,
    "range": [
      450,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Identifier",
    "value": "obj3",
    "start": 454,
    "end": 458,
    "range": [
      454,
      458
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 459,
    "end": 469,
    "range": [
      459,
      469
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Identifier",
    "value": "obj3",
    "start": 505,
    "end": 509,
    "range": [
      505,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 509,
    "end": 510,
    "range": [
      509,
      510
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 510,
    "end": 513,
    "range": [
      510,
      513
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Identifier",
    "value": "obj3",
    "start": 523,
    "end": 527,
    "range": [
      523,
      527
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 528,
    "end": 531,
    "range": [
      528,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "String",
    "value": "\"str\"",
    "start": 534,
    "end": 539,
    "range": [
      534,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Identifier",
    "value": "obj3",
    "start": 545,
    "end": 549,
    "range": [
      545,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 550,
    "end": 553,
    "range": [
      550,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "String",
    "value": "\"str\"",
    "start": 556,
    "end": 561,
    "range": [
      556,
      561
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 566,
    "end": 569,
    "range": [
      566,
      569
    ]
  },
  {
    "type": "Identifier",
    "value": "obj4",
    "start": 570,
    "end": 574,
    "range": [
      570,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 576,
    "end": 579,
    "range": [
      576,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 581,
    "end": 583,
    "range": [
      581,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Identifier",
    "value": "obj4",
    "start": 585,
    "end": 589,
    "range": [
      585,
      589
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 590,
    "end": 600,
    "range": [
      590,
      600
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 601,
    "end": 602,
    "range": [
      601,
      602
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "Identifier",
    "value": "obj4",
    "start": 610,
    "end": 614,
    "range": [
      610,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 615,
    "end": 618,
    "range": [
      615,
      618
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "String",
    "value": "\"str\"",
    "start": 621,
    "end": 626,
    "range": [
      621,
      626
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "Identifier",
    "value": "obj4",
    "start": 632,
    "end": 636,
    "range": [
      632,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 637,
    "end": 640,
    "range": [
      637,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 644,
    "end": 645,
    "range": [
      644,
      645
    ]
  },
  {
    "type": "Identifier",
    "value": "obj4",
    "start": 650,
    "end": 654,
    "range": [
      650,
      654
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 655,
    "end": 658,
    "range": [
      655,
      658
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "String",
    "value": "\"str\"",
    "start": 661,
    "end": 666,
    "range": [
      661,
      666
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 666,
    "end": 667,
    "range": [
      666,
      667
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 707,
    "end": 716,
    "range": [
      707,
      716
    ]
  },
  {
    "type": "Identifier",
    "value": "CConstructor",
    "start": 717,
    "end": 729,
    "range": [
      717,
      729
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 736,
    "end": 739,
    "range": [
      736,
      739
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 740,
    "end": 741,
    "range": [
      740,
      741
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 741,
    "end": 746,
    "range": [
      741,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 748,
    "end": 754,
    "range": [
      748,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 755,
    "end": 756,
    "range": [
      755,
      756
    ]
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 757,
    "end": 759,
    "range": [
      757,
      759
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 759,
    "end": 760,
    "range": [
      759,
      760
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 765,
    "end": 768,
    "range": [
      765,
      768
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 769,
    "end": 770,
    "range": [
      769,
      770
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 770,
    "end": 775,
    "range": [
      770,
      775
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 775,
    "end": 776,
    "range": [
      775,
      776
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 777,
    "end": 783,
    "range": [
      777,
      783
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 783,
    "end": 784,
    "range": [
      783,
      784
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 784,
    "end": 785,
    "range": [
      784,
      785
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 786,
    "end": 788,
    "range": [
      786,
      788
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 792,
    "end": 801,
    "range": [
      792,
      801
    ]
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 802,
    "end": 804,
    "range": [
      802,
      804
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 805,
    "end": 806,
    "range": [
      805,
      806
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 811,
    "end": 814,
    "range": [
      811,
      814
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 814,
    "end": 815,
    "range": [
      814,
      815
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 816,
    "end": 822,
    "range": [
      816,
      822
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 829,
    "end": 830,
    "range": [
      829,
      830
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 831,
    "end": 837,
    "range": [
      831,
      837
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 837,
    "end": 838,
    "range": [
      837,
      838
    ]
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 843,
    "end": 847,
    "range": [
      843,
      847
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 847,
    "end": 848,
    "range": [
      847,
      848
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 849,
    "end": 855,
    "range": [
      849,
      855
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 859,
    "end": 868,
    "range": [
      859,
      868
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 869,
    "end": 871,
    "range": [
      869,
      871
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 872,
    "end": 873,
    "range": [
      872,
      873
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 878,
    "end": 881,
    "range": [
      878,
      881
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 881,
    "end": 882,
    "range": [
      881,
      882
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 883,
    "end": 889,
    "range": [
      883,
      889
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 889,
    "end": 890,
    "range": [
      889,
      890
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 896,
    "end": 897,
    "range": [
      896,
      897
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 898,
    "end": 904,
    "range": [
      898,
      904
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 904,
    "end": 905,
    "range": [
      904,
      905
    ]
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 910,
    "end": 914,
    "range": [
      910,
      914
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 914,
    "end": 915,
    "range": [
      914,
      915
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 916,
    "end": 922,
    "range": [
      916,
      922
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 922,
    "end": 923,
    "range": [
      922,
      923
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 924,
    "end": 925,
    "range": [
      924,
      925
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 926,
    "end": 933,
    "range": [
      926,
      933
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 934,
    "end": 937,
    "range": [
      934,
      937
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 938,
    "end": 939,
    "range": [
      938,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Identifier",
    "value": "CConstructor",
    "start": 941,
    "end": 953,
    "range": [
      941,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 956,
    "end": 959,
    "range": [
      956,
      959
    ]
  },
  {
    "type": "Identifier",
    "value": "obj5",
    "start": 960,
    "end": 964,
    "range": [
      960,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 964,
    "end": 965,
    "range": [
      964,
      965
    ]
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 966,
    "end": 968,
    "range": [
      966,
      968
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 971,
    "end": 972,
    "range": [
      971,
      972
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 972,
    "end": 973,
    "range": [
      972,
      973
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 974,
    "end": 976,
    "range": [
      974,
      976
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 977,
    "end": 978,
    "range": [
      977,
      978
    ]
  },
  {
    "type": "Identifier",
    "value": "obj5",
    "start": 978,
    "end": 982,
    "range": [
      978,
      982
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 983,
    "end": 993,
    "range": [
      983,
      993
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 994,
    "end": 995,
    "range": [
      994,
      995
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 995,
    "end": 996,
    "range": [
      995,
      996
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 997,
    "end": 998,
    "range": [
      997,
      998
    ]
  },
  {
    "type": "Identifier",
    "value": "obj5",
    "start": 1022,
    "end": 1026,
    "range": [
      1022,
      1026
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1026,
    "end": 1027,
    "range": [
      1026,
      1027
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1027,
    "end": 1030,
    "range": [
      1027,
      1030
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1030,
    "end": 1031,
    "range": [
      1030,
      1031
    ]
  },
  {
    "type": "Identifier",
    "value": "obj5",
    "start": 1036,
    "end": 1040,
    "range": [
      1036,
      1040
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1040,
    "end": 1041,
    "range": [
      1040,
      1041
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1041,
    "end": 1042,
    "range": [
      1041,
      1042
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1042,
    "end": 1043,
    "range": [
      1042,
      1043
    ]
  },
  {
    "type": "Identifier",
    "value": "obj5",
    "start": 1048,
    "end": 1052,
    "range": [
      1048,
      1052
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1052,
    "end": 1053,
    "range": [
      1052,
      1053
    ]
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 1053,
    "end": 1057,
    "range": [
      1053,
      1057
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1057,
    "end": 1058,
    "range": [
      1057,
      1058
    ]
  },
  {
    "type": "Identifier",
    "value": "obj5",
    "start": 1063,
    "end": 1067,
    "range": [
      1063,
      1067
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1067,
    "end": 1068,
    "range": [
      1067,
      1068
    ]
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 1068,
    "end": 1072,
    "range": [
      1068,
      1072
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1072,
    "end": 1073,
    "range": [
      1072,
      1073
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1074,
    "end": 1075,
    "range": [
      1074,
      1075
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1077,
    "end": 1080,
    "range": [
      1077,
      1080
    ]
  },
  {
    "type": "Identifier",
    "value": "obj6",
    "start": 1081,
    "end": 1085,
    "range": [
      1081,
      1085
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1085,
    "end": 1086,
    "range": [
      1085,
      1086
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1087,
    "end": 1090,
    "range": [
      1087,
      1090
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1090,
    "end": 1091,
    "range": [
      1090,
      1091
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1092,
    "end": 1094,
    "range": [
      1092,
      1094
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1095,
    "end": 1096,
    "range": [
      1095,
      1096
    ]
  },
  {
    "type": "Identifier",
    "value": "obj6",
    "start": 1096,
    "end": 1100,
    "range": [
      1096,
      1100
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1101,
    "end": 1111,
    "range": [
      1101,
      1111
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1112,
    "end": 1113,
    "range": [
      1112,
      1113
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1113,
    "end": 1114,
    "range": [
      1113,
      1114
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1115,
    "end": 1116,
    "range": [
      1115,
      1116
    ]
  },
  {
    "type": "Identifier",
    "value": "obj6",
    "start": 1121,
    "end": 1125,
    "range": [
      1121,
      1125
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1125,
    "end": 1126,
    "range": [
      1125,
      1126
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1126,
    "end": 1129,
    "range": [
      1126,
      1129
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1129,
    "end": 1130,
    "range": [
      1129,
      1130
    ]
  },
  {
    "type": "Identifier",
    "value": "obj6",
    "start": 1135,
    "end": 1139,
    "range": [
      1135,
      1139
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1139,
    "end": 1140,
    "range": [
      1139,
      1140
    ]
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 1140,
    "end": 1144,
    "range": [
      1140,
      1144
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1144,
    "end": 1145,
    "range": [
      1144,
      1145
    ]
  },
  {
    "type": "Identifier",
    "value": "obj6",
    "start": 1150,
    "end": 1154,
    "range": [
      1150,
      1154
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1154,
    "end": 1155,
    "range": [
      1154,
      1155
    ]
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 1155,
    "end": 1159,
    "range": [
      1155,
      1159
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1159,
    "end": 1160,
    "range": [
      1159,
      1160
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1161,
    "end": 1162,
    "range": [
      1161,
      1162
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1192,
    "end": 1201,
    "range": [
      1192,
      1201
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1202,
    "end": 1203,
    "range": [
      1202,
      1203
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1204,
    "end": 1205,
    "range": [
      1204,
      1205
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1210,
    "end": 1213,
    "range": [
      1210,
      1213
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1213,
    "end": 1214,
    "range": [
      1213,
      1214
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1215,
    "end": 1221,
    "range": [
      1215,
      1221
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1221,
    "end": 1222,
    "range": [
      1221,
      1222
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1223,
    "end": 1224,
    "range": [
      1223,
      1224
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1225,
    "end": 1232,
    "range": [
      1225,
      1232
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1233,
    "end": 1236,
    "range": [
      1233,
      1236
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1237,
    "end": 1238,
    "range": [
      1237,
      1238
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1238,
    "end": 1239,
    "range": [
      1238,
      1239
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1240,
    "end": 1241,
    "range": [
      1240,
      1241
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1242,
    "end": 1245,
    "range": [
      1242,
      1245
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1246,
    "end": 1247,
    "range": [
      1246,
      1247
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1247,
    "end": 1248,
    "range": [
      1247,
      1248
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1248,
    "end": 1249,
    "range": [
      1248,
      1249
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1250,
    "end": 1251,
    "range": [
      1250,
      1251
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1251,
    "end": 1252,
    "range": [
      1251,
      1252
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1253,
    "end": 1254,
    "range": [
      1253,
      1254
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1254,
    "end": 1255,
    "range": [
      1254,
      1255
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1257,
    "end": 1260,
    "range": [
      1257,
      1260
    ]
  },
  {
    "type": "Identifier",
    "value": "obj7",
    "start": 1261,
    "end": 1265,
    "range": [
      1261,
      1265
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1265,
    "end": 1266,
    "range": [
      1265,
      1266
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1267,
    "end": 1268,
    "range": [
      1267,
      1268
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1269,
    "end": 1270,
    "range": [
      1269,
      1270
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1271,
    "end": 1277,
    "range": [
      1271,
      1277
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1277,
    "end": 1278,
    "range": [
      1277,
      1278
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1279,
    "end": 1281,
    "range": [
      1279,
      1281
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1282,
    "end": 1283,
    "range": [
      1282,
      1283
    ]
  },
  {
    "type": "Identifier",
    "value": "obj7",
    "start": 1283,
    "end": 1287,
    "range": [
      1283,
      1287
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1288,
    "end": 1298,
    "range": [
      1288,
      1298
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1299,
    "end": 1300,
    "range": [
      1299,
      1300
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1300,
    "end": 1301,
    "range": [
      1300,
      1301
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1302,
    "end": 1303,
    "range": [
      1302,
      1303
    ]
  },
  {
    "type": "Identifier",
    "value": "obj7",
    "start": 1326,
    "end": 1330,
    "range": [
      1326,
      1330
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1330,
    "end": 1331,
    "range": [
      1330,
      1331
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1331,
    "end": 1334,
    "range": [
      1331,
      1334
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1334,
    "end": 1335,
    "range": [
      1334,
      1335
    ]
  },
  {
    "type": "Identifier",
    "value": "obj7",
    "start": 1340,
    "end": 1344,
    "range": [
      1340,
      1344
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1344,
    "end": 1345,
    "range": [
      1344,
      1345
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1345,
    "end": 1348,
    "range": [
      1345,
      1348
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1348,
    "end": 1349,
    "range": [
      1348,
      1349
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1350,
    "end": 1351,
    "range": [
      1350,
      1351
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1353,
    "end": 1356,
    "range": [
      1353,
      1356
    ]
  },
  {
    "type": "Identifier",
    "value": "obj8",
    "start": 1357,
    "end": 1361,
    "range": [
      1357,
      1361
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1361,
    "end": 1362,
    "range": [
      1361,
      1362
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1363,
    "end": 1366,
    "range": [
      1363,
      1366
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1366,
    "end": 1367,
    "range": [
      1366,
      1367
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1368,
    "end": 1370,
    "range": [
      1368,
      1370
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1371,
    "end": 1372,
    "range": [
      1371,
      1372
    ]
  },
  {
    "type": "Identifier",
    "value": "obj8",
    "start": 1372,
    "end": 1376,
    "range": [
      1372,
      1376
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1377,
    "end": 1387,
    "range": [
      1377,
      1387
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1388,
    "end": 1389,
    "range": [
      1388,
      1389
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1389,
    "end": 1390,
    "range": [
      1389,
      1390
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1391,
    "end": 1392,
    "range": [
      1391,
      1392
    ]
  },
  {
    "type": "Identifier",
    "value": "obj8",
    "start": 1397,
    "end": 1401,
    "range": [
      1397,
      1401
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1401,
    "end": 1402,
    "range": [
      1401,
      1402
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1402,
    "end": 1405,
    "range": [
      1402,
      1405
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1405,
    "end": 1406,
    "range": [
      1405,
      1406
    ]
  },
  {
    "type": "Identifier",
    "value": "obj8",
    "start": 1411,
    "end": 1415,
    "range": [
      1411,
      1415
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1415,
    "end": 1416,
    "range": [
      1415,
      1416
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1416,
    "end": 1419,
    "range": [
      1416,
      1419
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1419,
    "end": 1420,
    "range": [
      1419,
      1420
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1421,
    "end": 1422,
    "range": [
      1421,
      1422
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1475,
    "end": 1484,
    "range": [
      1475,
      1484
    ]
  },
  {
    "type": "Identifier",
    "value": "EConstructor",
    "start": 1485,
    "end": 1497,
    "range": [
      1485,
      1497
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1498,
    "end": 1499,
    "range": [
      1498,
      1499
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1504,
    "end": 1507,
    "range": [
      1504,
      1507
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1508,
    "end": 1509,
    "range": [
      1508,
      1509
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1509,
    "end": 1510,
    "range": [
      1509,
      1510
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1510,
    "end": 1511,
    "range": [
      1510,
      1511
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 1512,
    "end": 1514,
    "range": [
      1512,
      1514
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1515,
    "end": 1516,
    "range": [
      1515,
      1516
    ]
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 1517,
    "end": 1519,
    "range": [
      1517,
      1519
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1519,
    "end": 1520,
    "range": [
      1519,
      1520
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1521,
    "end": 1522,
    "range": [
      1521,
      1522
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1523,
    "end": 1532,
    "range": [
      1523,
      1532
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 1533,
    "end": 1535,
    "range": [
      1533,
      1535
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1536,
    "end": 1537,
    "range": [
      1536,
      1537
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1542,
    "end": 1545,
    "range": [
      1542,
      1545
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1545,
    "end": 1546,
    "range": [
      1545,
      1546
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1547,
    "end": 1553,
    "range": [
      1547,
      1553
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1553,
    "end": 1554,
    "range": [
      1553,
      1554
    ]
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 1559,
    "end": 1563,
    "range": [
      1559,
      1563
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1563,
    "end": 1564,
    "range": [
      1563,
      1564
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1565,
    "end": 1571,
    "range": [
      1565,
      1571
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1571,
    "end": 1572,
    "range": [
      1571,
      1572
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1573,
    "end": 1574,
    "range": [
      1573,
      1574
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1575,
    "end": 1584,
    "range": [
      1575,
      1584
    ]
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 1585,
    "end": 1587,
    "range": [
      1585,
      1587
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1588,
    "end": 1589,
    "range": [
      1588,
      1589
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1594,
    "end": 1597,
    "range": [
      1594,
      1597
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1597,
    "end": 1598,
    "range": [
      1597,
      1598
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1599,
    "end": 1605,
    "range": [
      1599,
      1605
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1605,
    "end": 1606,
    "range": [
      1605,
      1606
    ]
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 1611,
    "end": 1615,
    "range": [
      1611,
      1615
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1615,
    "end": 1616,
    "range": [
      1615,
      1616
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1617,
    "end": 1623,
    "range": [
      1617,
      1623
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1623,
    "end": 1624,
    "range": [
      1623,
      1624
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1625,
    "end": 1626,
    "range": [
      1625,
      1626
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1627,
    "end": 1634,
    "range": [
      1627,
      1634
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1635,
    "end": 1638,
    "range": [
      1635,
      1638
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1639,
    "end": 1640,
    "range": [
      1639,
      1640
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1640,
    "end": 1641,
    "range": [
      1640,
      1641
    ]
  },
  {
    "type": "Identifier",
    "value": "EConstructor",
    "start": 1642,
    "end": 1654,
    "range": [
      1642,
      1654
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1654,
    "end": 1655,
    "range": [
      1654,
      1655
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1657,
    "end": 1660,
    "range": [
      1657,
      1660
    ]
  },
  {
    "type": "Identifier",
    "value": "obj9",
    "start": 1661,
    "end": 1665,
    "range": [
      1661,
      1665
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1665,
    "end": 1666,
    "range": [
      1665,
      1666
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 1667,
    "end": 1669,
    "range": [
      1667,
      1669
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1670,
    "end": 1671,
    "range": [
      1670,
      1671
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1672,
    "end": 1673,
    "range": [
      1672,
      1673
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1673,
    "end": 1674,
    "range": [
      1673,
      1674
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1675,
    "end": 1677,
    "range": [
      1675,
      1677
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1678,
    "end": 1679,
    "range": [
      1678,
      1679
    ]
  },
  {
    "type": "Identifier",
    "value": "obj9",
    "start": 1679,
    "end": 1683,
    "range": [
      1679,
      1683
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1684,
    "end": 1694,
    "range": [
      1684,
      1694
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1695,
    "end": 1696,
    "range": [
      1695,
      1696
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1696,
    "end": 1697,
    "range": [
      1696,
      1697
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1698,
    "end": 1699,
    "range": [
      1698,
      1699
    ]
  },
  {
    "type": "Identifier",
    "value": "obj9",
    "start": 1722,
    "end": 1726,
    "range": [
      1722,
      1726
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1726,
    "end": 1727,
    "range": [
      1726,
      1727
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1727,
    "end": 1730,
    "range": [
      1727,
      1730
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1730,
    "end": 1731,
    "range": [
      1730,
      1731
    ]
  },
  {
    "type": "Identifier",
    "value": "obj9",
    "start": 1736,
    "end": 1740,
    "range": [
      1736,
      1740
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1740,
    "end": 1741,
    "range": [
      1740,
      1741
    ]
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 1741,
    "end": 1745,
    "range": [
      1741,
      1745
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1745,
    "end": 1746,
    "range": [
      1745,
      1746
    ]
  },
  {
    "type": "Identifier",
    "value": "obj9",
    "start": 1751,
    "end": 1755,
    "range": [
      1751,
      1755
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1755,
    "end": 1756,
    "range": [
      1755,
      1756
    ]
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 1756,
    "end": 1760,
    "range": [
      1756,
      1760
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1760,
    "end": 1761,
    "range": [
      1760,
      1761
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1762,
    "end": 1763,
    "range": [
      1762,
      1763
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1765,
    "end": 1768,
    "range": [
      1765,
      1768
    ]
  },
  {
    "type": "Identifier",
    "value": "obj10",
    "start": 1769,
    "end": 1774,
    "range": [
      1769,
      1774
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1774,
    "end": 1775,
    "range": [
      1774,
      1775
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1776,
    "end": 1779,
    "range": [
      1776,
      1779
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1779,
    "end": 1780,
    "range": [
      1779,
      1780
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1781,
    "end": 1783,
    "range": [
      1781,
      1783
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1784,
    "end": 1785,
    "range": [
      1784,
      1785
    ]
  },
  {
    "type": "Identifier",
    "value": "obj10",
    "start": 1785,
    "end": 1790,
    "range": [
      1785,
      1790
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1791,
    "end": 1801,
    "range": [
      1791,
      1801
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1802,
    "end": 1803,
    "range": [
      1802,
      1803
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1803,
    "end": 1804,
    "range": [
      1803,
      1804
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1805,
    "end": 1806,
    "range": [
      1805,
      1806
    ]
  },
  {
    "type": "Identifier",
    "value": "obj10",
    "start": 1811,
    "end": 1816,
    "range": [
      1811,
      1816
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1816,
    "end": 1817,
    "range": [
      1816,
      1817
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1817,
    "end": 1820,
    "range": [
      1817,
      1820
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1820,
    "end": 1821,
    "range": [
      1820,
      1821
    ]
  },
  {
    "type": "Identifier",
    "value": "obj10",
    "start": 1826,
    "end": 1831,
    "range": [
      1826,
      1831
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1831,
    "end": 1832,
    "range": [
      1831,
      1832
    ]
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 1832,
    "end": 1836,
    "range": [
      1832,
      1836
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1836,
    "end": 1837,
    "range": [
      1836,
      1837
    ]
  },
  {
    "type": "Identifier",
    "value": "obj10",
    "start": 1842,
    "end": 1847,
    "range": [
      1842,
      1847
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1847,
    "end": 1848,
    "range": [
      1847,
      1848
    ]
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 1848,
    "end": 1852,
    "range": [
      1848,
      1852
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1852,
    "end": 1853,
    "range": [
      1852,
      1853
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1854,
    "end": 1855,
    "range": [
      1854,
      1855
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1899,
    "end": 1908,
    "range": [
      1899,
      1908
    ]
  },
  {
    "type": "Identifier",
    "value": "FConstructor",
    "start": 1909,
    "end": 1921,
    "range": [
      1909,
      1921
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1922,
    "end": 1923,
    "range": [
      1922,
      1923
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1928,
    "end": 1931,
    "range": [
      1928,
      1931
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1932,
    "end": 1933,
    "range": [
      1932,
      1933
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1933,
    "end": 1934,
    "range": [
      1933,
      1934
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1934,
    "end": 1935,
    "range": [
      1934,
      1935
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1936,
    "end": 1939,
    "range": [
      1936,
      1939
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1939,
    "end": 1940,
    "range": [
      1939,
      1940
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1941,
    "end": 1942,
    "range": [
      1941,
      1942
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1943,
    "end": 1952,
    "range": [
      1943,
      1952
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1953,
    "end": 1954,
    "range": [
      1953,
      1954
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1955,
    "end": 1956,
    "range": [
      1955,
      1956
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1961,
    "end": 1964,
    "range": [
      1961,
      1964
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1964,
    "end": 1965,
    "range": [
      1964,
      1965
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1966,
    "end": 1972,
    "range": [
      1966,
      1972
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1972,
    "end": 1973,
    "range": [
      1972,
      1973
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1978,
    "end": 1981,
    "range": [
      1978,
      1981
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1981,
    "end": 1982,
    "range": [
      1981,
      1982
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1983,
    "end": 1989,
    "range": [
      1983,
      1989
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1989,
    "end": 1990,
    "range": [
      1989,
      1990
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1991,
    "end": 1992,
    "range": [
      1991,
      1992
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1993,
    "end": 2000,
    "range": [
      1993,
      2000
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2001,
    "end": 2004,
    "range": [
      2001,
      2004
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2005,
    "end": 2006,
    "range": [
      2005,
      2006
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2006,
    "end": 2007,
    "range": [
      2006,
      2007
    ]
  },
  {
    "type": "Identifier",
    "value": "FConstructor",
    "start": 2008,
    "end": 2020,
    "range": [
      2008,
      2020
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2020,
    "end": 2021,
    "range": [
      2020,
      2021
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2023,
    "end": 2026,
    "range": [
      2023,
      2026
    ]
  },
  {
    "type": "Identifier",
    "value": "obj11",
    "start": 2027,
    "end": 2032,
    "range": [
      2027,
      2032
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2032,
    "end": 2033,
    "range": [
      2032,
      2033
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2034,
    "end": 2035,
    "range": [
      2034,
      2035
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2036,
    "end": 2037,
    "range": [
      2036,
      2037
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2038,
    "end": 2044,
    "range": [
      2038,
      2044
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2044,
    "end": 2045,
    "range": [
      2044,
      2045
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2046,
    "end": 2048,
    "range": [
      2046,
      2048
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2049,
    "end": 2050,
    "range": [
      2049,
      2050
    ]
  },
  {
    "type": "Identifier",
    "value": "obj11",
    "start": 2050,
    "end": 2055,
    "range": [
      2050,
      2055
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2056,
    "end": 2066,
    "range": [
      2056,
      2066
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2067,
    "end": 2068,
    "range": [
      2067,
      2068
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2068,
    "end": 2069,
    "range": [
      2068,
      2069
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2070,
    "end": 2071,
    "range": [
      2070,
      2071
    ]
  },
  {
    "type": "Identifier",
    "value": "obj11",
    "start": 2134,
    "end": 2139,
    "range": [
      2134,
      2139
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2139,
    "end": 2140,
    "range": [
      2139,
      2140
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2140,
    "end": 2143,
    "range": [
      2140,
      2143
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2143,
    "end": 2144,
    "range": [
      2143,
      2144
    ]
  },
  {
    "type": "Identifier",
    "value": "obj11",
    "start": 2149,
    "end": 2154,
    "range": [
      2149,
      2154
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2154,
    "end": 2155,
    "range": [
      2154,
      2155
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2155,
    "end": 2158,
    "range": [
      2155,
      2158
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2158,
    "end": 2159,
    "range": [
      2158,
      2159
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2160,
    "end": 2161,
    "range": [
      2160,
      2161
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2163,
    "end": 2166,
    "range": [
      2163,
      2166
    ]
  },
  {
    "type": "Identifier",
    "value": "obj12",
    "start": 2167,
    "end": 2172,
    "range": [
      2167,
      2172
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2172,
    "end": 2173,
    "range": [
      2172,
      2173
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2174,
    "end": 2177,
    "range": [
      2174,
      2177
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2177,
    "end": 2178,
    "range": [
      2177,
      2178
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2179,
    "end": 2181,
    "range": [
      2179,
      2181
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2182,
    "end": 2183,
    "range": [
      2182,
      2183
    ]
  },
  {
    "type": "Identifier",
    "value": "obj12",
    "start": 2183,
    "end": 2188,
    "range": [
      2183,
      2188
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2189,
    "end": 2199,
    "range": [
      2189,
      2199
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2200,
    "end": 2201,
    "range": [
      2200,
      2201
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2201,
    "end": 2202,
    "range": [
      2201,
      2202
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2203,
    "end": 2204,
    "range": [
      2203,
      2204
    ]
  },
  {
    "type": "Identifier",
    "value": "obj12",
    "start": 2209,
    "end": 2214,
    "range": [
      2209,
      2214
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2214,
    "end": 2215,
    "range": [
      2214,
      2215
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2215,
    "end": 2218,
    "range": [
      2215,
      2218
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2218,
    "end": 2219,
    "range": [
      2218,
      2219
    ]
  },
  {
    "type": "Identifier",
    "value": "obj12",
    "start": 2224,
    "end": 2229,
    "range": [
      2224,
      2229
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2229,
    "end": 2230,
    "range": [
      2229,
      2230
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2230,
    "end": 2233,
    "range": [
      2230,
      2233
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2233,
    "end": 2234,
    "range": [
      2233,
      2234
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2235,
    "end": 2236,
    "range": [
      2235,
      2236
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2303,
    "end": 2312,
    "range": [
      2303,
      2312
    ]
  },
  {
    "type": "Identifier",
    "value": "GConstructor",
    "start": 2313,
    "end": 2325,
    "range": [
      2313,
      2325
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2326,
    "end": 2327,
    "range": [
      2326,
      2327
    ]
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 2332,
    "end": 2341,
    "range": [
      2332,
      2341
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2341,
    "end": 2342,
    "range": [
      2341,
      2342
    ]
  },
  {
    "type": "Identifier",
    "value": "G1",
    "start": 2343,
    "end": 2345,
    "range": [
      2343,
      2345
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2345,
    "end": 2346,
    "range": [
      2345,
      2346
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2368,
    "end": 2371,
    "range": [
      2368,
      2371
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2372,
    "end": 2373,
    "range": [
      2372,
      2373
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2373,
    "end": 2374,
    "range": [
      2373,
      2374
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2374,
    "end": 2375,
    "range": [
      2374,
      2375
    ]
  },
  {
    "type": "Identifier",
    "value": "G2",
    "start": 2376,
    "end": 2378,
    "range": [
      2376,
      2378
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2378,
    "end": 2379,
    "range": [
      2378,
      2379
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2399,
    "end": 2400,
    "range": [
      2399,
      2400
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2401,
    "end": 2410,
    "range": [
      2401,
      2410
    ]
  },
  {
    "type": "Identifier",
    "value": "G1",
    "start": 2411,
    "end": 2413,
    "range": [
      2411,
      2413
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2414,
    "end": 2415,
    "range": [
      2414,
      2415
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 2420,
    "end": 2424,
    "range": [
      2420,
      2424
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2424,
    "end": 2425,
    "range": [
      2424,
      2425
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2426,
    "end": 2432,
    "range": [
      2426,
      2432
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2432,
    "end": 2433,
    "range": [
      2432,
      2433
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2434,
    "end": 2435,
    "range": [
      2434,
      2435
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2436,
    "end": 2445,
    "range": [
      2436,
      2445
    ]
  },
  {
    "type": "Identifier",
    "value": "G2",
    "start": 2446,
    "end": 2448,
    "range": [
      2446,
      2448
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2449,
    "end": 2450,
    "range": [
      2449,
      2450
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 2455,
    "end": 2459,
    "range": [
      2455,
      2459
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2459,
    "end": 2460,
    "range": [
      2459,
      2460
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2461,
    "end": 2468,
    "range": [
      2461,
      2468
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2468,
    "end": 2469,
    "range": [
      2468,
      2469
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2470,
    "end": 2471,
    "range": [
      2470,
      2471
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2472,
    "end": 2479,
    "range": [
      2472,
      2479
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2480,
    "end": 2483,
    "range": [
      2480,
      2483
    ]
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 2484,
    "end": 2485,
    "range": [
      2484,
      2485
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2485,
    "end": 2486,
    "range": [
      2485,
      2486
    ]
  },
  {
    "type": "Identifier",
    "value": "GConstructor",
    "start": 2487,
    "end": 2499,
    "range": [
      2487,
      2499
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2499,
    "end": 2500,
    "range": [
      2499,
      2500
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2502,
    "end": 2505,
    "range": [
      2502,
      2505
    ]
  },
  {
    "type": "Identifier",
    "value": "obj13",
    "start": 2506,
    "end": 2511,
    "range": [
      2506,
      2511
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2511,
    "end": 2512,
    "range": [
      2511,
      2512
    ]
  },
  {
    "type": "Identifier",
    "value": "G1",
    "start": 2513,
    "end": 2515,
    "range": [
      2513,
      2515
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2516,
    "end": 2517,
    "range": [
      2516,
      2517
    ]
  },
  {
    "type": "Identifier",
    "value": "G2",
    "start": 2518,
    "end": 2520,
    "range": [
      2518,
      2520
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2520,
    "end": 2521,
    "range": [
      2520,
      2521
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2522,
    "end": 2524,
    "range": [
      2522,
      2524
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2525,
    "end": 2526,
    "range": [
      2525,
      2526
    ]
  },
  {
    "type": "Identifier",
    "value": "obj13",
    "start": 2526,
    "end": 2531,
    "range": [
      2526,
      2531
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2532,
    "end": 2542,
    "range": [
      2532,
      2542
    ]
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 2543,
    "end": 2544,
    "range": [
      2543,
      2544
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2544,
    "end": 2545,
    "range": [
      2544,
      2545
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2546,
    "end": 2547,
    "range": [
      2546,
      2547
    ]
  },
  {
    "type": "Identifier",
    "value": "obj13",
    "start": 2612,
    "end": 2617,
    "range": [
      2612,
      2617
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2617,
    "end": 2618,
    "range": [
      2617,
      2618
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 2618,
    "end": 2622,
    "range": [
      2618,
      2622
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2622,
    "end": 2623,
    "range": [
      2622,
      2623
    ]
  },
  {
    "type": "Identifier",
    "value": "obj13",
    "start": 2628,
    "end": 2633,
    "range": [
      2628,
      2633
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2633,
    "end": 2634,
    "range": [
      2633,
      2634
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 2634,
    "end": 2638,
    "range": [
      2634,
      2638
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2638,
    "end": 2639,
    "range": [
      2638,
      2639
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2640,
    "end": 2641,
    "range": [
      2640,
      2641
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2643,
    "end": 2646,
    "range": [
      2643,
      2646
    ]
  },
  {
    "type": "Identifier",
    "value": "obj14",
    "start": 2647,
    "end": 2652,
    "range": [
      2647,
      2652
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2652,
    "end": 2653,
    "range": [
      2652,
      2653
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2654,
    "end": 2657,
    "range": [
      2654,
      2657
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2657,
    "end": 2658,
    "range": [
      2657,
      2658
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2659,
    "end": 2661,
    "range": [
      2659,
      2661
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2662,
    "end": 2663,
    "range": [
      2662,
      2663
    ]
  },
  {
    "type": "Identifier",
    "value": "obj14",
    "start": 2663,
    "end": 2668,
    "range": [
      2663,
      2668
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2669,
    "end": 2679,
    "range": [
      2669,
      2679
    ]
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 2680,
    "end": 2681,
    "range": [
      2680,
      2681
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2681,
    "end": 2682,
    "range": [
      2681,
      2682
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2683,
    "end": 2684,
    "range": [
      2683,
      2684
    ]
  },
  {
    "type": "Identifier",
    "value": "obj14",
    "start": 2689,
    "end": 2694,
    "range": [
      2689,
      2694
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2694,
    "end": 2695,
    "range": [
      2694,
      2695
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 2695,
    "end": 2699,
    "range": [
      2695,
      2699
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2699,
    "end": 2700,
    "range": [
      2699,
      2700
    ]
  },
  {
    "type": "Identifier",
    "value": "obj14",
    "start": 2705,
    "end": 2710,
    "range": [
      2705,
      2710
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2710,
    "end": 2711,
    "range": [
      2710,
      2711
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 2711,
    "end": 2715,
    "range": [
      2711,
      2715
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2715,
    "end": 2716,
    "range": [
      2715,
      2716
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2717,
    "end": 2718,
    "range": [
      2717,
      2718
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2765,
    "end": 2774,
    "range": [
      2765,
      2774
    ]
  },
  {
    "type": "Identifier",
    "value": "HConstructor",
    "start": 2775,
    "end": 2787,
    "range": [
      2775,
      2787
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2788,
    "end": 2789,
    "range": [
      2788,
      2789
    ]
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 2794,
    "end": 2803,
    "range": [
      2794,
      2803
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2803,
    "end": 2804,
    "range": [
      2803,
      2804
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2805,
    "end": 2808,
    "range": [
      2805,
      2808
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2808,
    "end": 2809,
    "range": [
      2808,
      2809
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2898,
    "end": 2901,
    "range": [
      2898,
      2901
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2902,
    "end": 2903,
    "range": [
      2902,
      2903
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2903,
    "end": 2904,
    "range": [
      2903,
      2904
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2904,
    "end": 2905,
    "range": [
      2904,
      2905
    ]
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 2906,
    "end": 2907,
    "range": [
      2906,
      2907
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2907,
    "end": 2908,
    "range": [
      2907,
      2908
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2930,
    "end": 2931,
    "range": [
      2930,
      2931
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2932,
    "end": 2941,
    "range": [
      2932,
      2941
    ]
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 2942,
    "end": 2943,
    "range": [
      2942,
      2943
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2944,
    "end": 2945,
    "range": [
      2944,
      2945
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2950,
    "end": 2953,
    "range": [
      2950,
      2953
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2953,
    "end": 2954,
    "range": [
      2953,
      2954
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2955,
    "end": 2961,
    "range": [
      2955,
      2961
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2961,
    "end": 2962,
    "range": [
      2961,
      2962
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2963,
    "end": 2964,
    "range": [
      2963,
      2964
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2965,
    "end": 2972,
    "range": [
      2965,
      2972
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2973,
    "end": 2976,
    "range": [
      2973,
      2976
    ]
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 2977,
    "end": 2978,
    "range": [
      2977,
      2978
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2978,
    "end": 2979,
    "range": [
      2978,
      2979
    ]
  },
  {
    "type": "Identifier",
    "value": "HConstructor",
    "start": 2980,
    "end": 2992,
    "range": [
      2980,
      2992
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2992,
    "end": 2993,
    "range": [
      2992,
      2993
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2995,
    "end": 2998,
    "range": [
      2995,
      2998
    ]
  },
  {
    "type": "Identifier",
    "value": "obj15",
    "start": 2999,
    "end": 3004,
    "range": [
      2999,
      3004
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3004,
    "end": 3005,
    "range": [
      3004,
      3005
    ]
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 3006,
    "end": 3007,
    "range": [
      3006,
      3007
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3008,
    "end": 3009,
    "range": [
      3008,
      3009
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3010,
    "end": 3016,
    "range": [
      3010,
      3016
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3016,
    "end": 3017,
    "range": [
      3016,
      3017
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3018,
    "end": 3020,
    "range": [
      3018,
      3020
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3021,
    "end": 3022,
    "range": [
      3021,
      3022
    ]
  },
  {
    "type": "Identifier",
    "value": "obj15",
    "start": 3022,
    "end": 3027,
    "range": [
      3022,
      3027
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 3028,
    "end": 3038,
    "range": [
      3028,
      3038
    ]
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 3039,
    "end": 3040,
    "range": [
      3039,
      3040
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3040,
    "end": 3041,
    "range": [
      3040,
      3041
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3042,
    "end": 3043,
    "range": [
      3042,
      3043
    ]
  },
  {
    "type": "Identifier",
    "value": "obj15",
    "start": 3066,
    "end": 3071,
    "range": [
      3066,
      3071
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3071,
    "end": 3072,
    "range": [
      3071,
      3072
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3072,
    "end": 3075,
    "range": [
      3072,
      3075
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3075,
    "end": 3076,
    "range": [
      3075,
      3076
    ]
  },
  {
    "type": "Identifier",
    "value": "obj15",
    "start": 3081,
    "end": 3086,
    "range": [
      3081,
      3086
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3086,
    "end": 3087,
    "range": [
      3086,
      3087
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3087,
    "end": 3090,
    "range": [
      3087,
      3090
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3090,
    "end": 3091,
    "range": [
      3090,
      3091
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3092,
    "end": 3093,
    "range": [
      3092,
      3093
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3095,
    "end": 3098,
    "range": [
      3095,
      3098
    ]
  },
  {
    "type": "Identifier",
    "value": "obj16",
    "start": 3099,
    "end": 3104,
    "range": [
      3099,
      3104
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3104,
    "end": 3105,
    "range": [
      3104,
      3105
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3106,
    "end": 3109,
    "range": [
      3106,
      3109
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3109,
    "end": 3110,
    "range": [
      3109,
      3110
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3111,
    "end": 3113,
    "range": [
      3111,
      3113
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3114,
    "end": 3115,
    "range": [
      3114,
      3115
    ]
  },
  {
    "type": "Identifier",
    "value": "obj16",
    "start": 3115,
    "end": 3120,
    "range": [
      3115,
      3120
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 3121,
    "end": 3131,
    "range": [
      3121,
      3131
    ]
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 3132,
    "end": 3133,
    "range": [
      3132,
      3133
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3133,
    "end": 3134,
    "range": [
      3133,
      3134
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3135,
    "end": 3136,
    "range": [
      3135,
      3136
    ]
  },
  {
    "type": "Identifier",
    "value": "obj16",
    "start": 3141,
    "end": 3146,
    "range": [
      3141,
      3146
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3146,
    "end": 3147,
    "range": [
      3146,
      3147
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 3147,
    "end": 3151,
    "range": [
      3147,
      3151
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3151,
    "end": 3152,
    "range": [
      3151,
      3152
    ]
  },
  {
    "type": "Identifier",
    "value": "obj16",
    "start": 3157,
    "end": 3162,
    "range": [
      3157,
      3162
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3162,
    "end": 3163,
    "range": [
      3162,
      3163
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 3163,
    "end": 3167,
    "range": [
      3163,
      3167
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3167,
    "end": 3168,
    "range": [
      3167,
      3168
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3169,
    "end": 3170,
    "range": [
      3169,
      3170
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3172,
    "end": 3175,
    "range": [
      3172,
      3175
    ]
  },
  {
    "type": "Identifier",
    "value": "obj17",
    "start": 3176,
    "end": 3181,
    "range": [
      3176,
      3181
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3181,
    "end": 3182,
    "range": [
      3181,
      3182
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3183,
    "end": 3186,
    "range": [
      3183,
      3186
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3186,
    "end": 3187,
    "range": [
      3186,
      3187
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3188,
    "end": 3190,
    "range": [
      3188,
      3190
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3191,
    "end": 3192,
    "range": [
      3191,
      3192
    ]
  },
  {
    "type": "Identifier",
    "value": "obj17",
    "start": 3192,
    "end": 3197,
    "range": [
      3192,
      3197
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 3198,
    "end": 3208,
    "range": [
      3198,
      3208
    ]
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 3209,
    "end": 3215,
    "range": [
      3209,
      3215
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3215,
    "end": 3216,
    "range": [
      3215,
      3216
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3217,
    "end": 3218,
    "range": [
      3217,
      3218
    ]
  },
  {
    "type": "Identifier",
    "value": "obj17",
    "start": 3267,
    "end": 3272,
    "range": [
      3267,
      3272
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3272,
    "end": 3273,
    "range": [
      3272,
      3273
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 3273,
    "end": 3277,
    "range": [
      3273,
      3277
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3277,
    "end": 3278,
    "range": [
      3277,
      3278
    ]
  },
  {
    "type": "Identifier",
    "value": "obj17",
    "start": 3283,
    "end": 3288,
    "range": [
      3283,
      3288
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3288,
    "end": 3289,
    "range": [
      3288,
      3289
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 3289,
    "end": 3293,
    "range": [
      3289,
      3293
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3293,
    "end": 3294,
    "range": [
      3293,
      3294
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3295,
    "end": 3296,
    "range": [
      3295,
      3296
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3298,
    "end": 3301,
    "range": [
      3298,
      3301
    ]
  },
  {
    "type": "Identifier",
    "value": "obj18",
    "start": 3302,
    "end": 3307,
    "range": [
      3302,
      3307
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3307,
    "end": 3308,
    "range": [
      3307,
      3308
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3309,
    "end": 3312,
    "range": [
      3309,
      3312
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3312,
    "end": 3313,
    "range": [
      3312,
      3313
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3314,
    "end": 3316,
    "range": [
      3314,
      3316
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3317,
    "end": 3318,
    "range": [
      3317,
      3318
    ]
  },
  {
    "type": "Identifier",
    "value": "obj18",
    "start": 3318,
    "end": 3323,
    "range": [
      3318,
      3323
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 3324,
    "end": 3334,
    "range": [
      3324,
      3334
    ]
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 3335,
    "end": 3343,
    "range": [
      3335,
      3343
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3343,
    "end": 3344,
    "range": [
      3343,
      3344
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3345,
    "end": 3346,
    "range": [
      3345,
      3346
    ]
  },
  {
    "type": "Identifier",
    "value": "obj18",
    "start": 3397,
    "end": 3402,
    "range": [
      3397,
      3402
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3402,
    "end": 3403,
    "range": [
      3402,
      3403
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 3403,
    "end": 3407,
    "range": [
      3403,
      3407
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3407,
    "end": 3408,
    "range": [
      3407,
      3408
    ]
  },
  {
    "type": "Identifier",
    "value": "obj18",
    "start": 3413,
    "end": 3418,
    "range": [
      3413,
      3418
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3418,
    "end": 3419,
    "range": [
      3418,
      3419
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 3419,
    "end": 3423,
    "range": [
      3419,
      3423
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3423,
    "end": 3424,
    "range": [
      3423,
      3424
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3425,
    "end": 3426,
    "range": [
      3425,
      3426
    ]
  }
]
```
