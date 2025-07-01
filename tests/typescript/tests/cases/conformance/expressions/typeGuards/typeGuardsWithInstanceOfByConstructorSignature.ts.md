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
