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
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 45,
                "end": 51
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 52,
                "end": 63
              },
              "optional": false,
              "computed": false,
              "start": 45,
              "end": 63
            },
            "computed": true,
            "optional": false,
            "kind": "method",
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
                    "type": "TSUnknownKeyword",
                    "start": 72,
                    "end": 79
                  },
                  "start": 70,
                  "end": 79
                },
                "start": 65,
                "end": 79
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 82,
                  "end": 87
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 91,
                      "end": 92
                    },
                    "typeArguments": null,
                    "start": 91,
                    "end": 92
                  },
                  "start": 91,
                  "end": 92
                },
                "start": 82,
                "end": 92
              },
              "start": 80,
              "end": 92
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 44,
            "end": 93
          }
        ],
        "start": 23,
        "end": 95
      },
      "declare": false,
      "start": 0,
      "end": 95
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
        "end": 107
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
              "start": 114,
              "end": 117
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 119,
                "end": 125
              },
              "start": 117,
              "end": 125
            },
            "accessibility": null,
            "static": false,
            "start": 114,
            "end": 126
          }
        ],
        "start": 108,
        "end": 128
      },
      "declare": false,
      "start": 96,
      "end": 128
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
                  "start": 144,
                  "end": 156
                },
                "typeArguments": null,
                "start": 144,
                "end": 156
              },
              "start": 142,
              "end": 156
            },
            "start": 141,
            "end": 156
          },
          "init": null,
          "definite": false,
          "start": 141,
          "end": 156
        }
      ],
      "declare": true,
      "start": 129,
      "end": 157
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
                      "start": 169,
                      "end": 170
                    },
                    "typeArguments": null,
                    "start": 169,
                    "end": 170
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 173,
                    "end": 179
                  }
                ],
                "start": 169,
                "end": 179
              },
              "start": 167,
              "end": 179
            },
            "start": 163,
            "end": 179
          },
          "init": null,
          "definite": false,
          "start": 163,
          "end": 179
        }
      ],
      "declare": false,
      "start": 159,
      "end": 180
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
          "start": 185,
          "end": 189
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 201,
          "end": 202
        },
        "start": 185,
        "end": 202
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
                "start": 228,
                "end": 232
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 233,
                "end": 236
              },
              "optional": false,
              "computed": false,
              "start": 228,
              "end": 236
            },
            "directive": null,
            "start": 228,
            "end": 237
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
                "start": 242,
                "end": 246
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 247,
                "end": 250
              },
              "optional": false,
              "computed": false,
              "start": 242,
              "end": 250
            },
            "directive": null,
            "start": 242,
            "end": 251
          }
        ],
        "start": 204,
        "end": 253
      },
      "alternate": null,
      "start": 181,
      "end": 253
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
                "start": 265,
                "end": 268
              },
              "start": 263,
              "end": 268
            },
            "start": 259,
            "end": 268
          },
          "init": null,
          "definite": false,
          "start": 259,
          "end": 268
        }
      ],
      "declare": false,
      "start": 255,
      "end": 269
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
          "start": 274,
          "end": 278
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 290,
          "end": 291
        },
        "start": 274,
        "end": 291
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
                "start": 299,
                "end": 303
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 304,
                "end": 307
              },
              "optional": false,
              "computed": false,
              "start": 299,
              "end": 307
            },
            "directive": null,
            "start": 299,
            "end": 308
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
                "start": 313,
                "end": 317
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 318,
                "end": 321
              },
              "optional": false,
              "computed": false,
              "start": 313,
              "end": 321
            },
            "directive": null,
            "start": 313,
            "end": 322
          }
        ],
        "start": 293,
        "end": 324
      },
      "alternate": null,
      "start": 270,
      "end": 324
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 375,
        "end": 387
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
                    "start": 399,
                    "end": 400
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 399,
                  "end": 400
                }
              ],
              "start": 398,
              "end": 401
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
                  "start": 405,
                  "end": 406
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
                        "start": 407,
                        "end": 408
                      },
                      "typeArguments": null,
                      "start": 407,
                      "end": 408
                    }
                  ],
                  "start": 406,
                  "end": 409
                },
                "start": 405,
                "end": 409
              },
              "start": 403,
              "end": 409
            },
            "start": 394,
            "end": 410
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 416,
                "end": 422
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 423,
                "end": 434
              },
              "optional": false,
              "computed": false,
              "start": 416,
              "end": 434
            },
            "computed": true,
            "optional": false,
            "kind": "method",
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
                    "type": "TSUnknownKeyword",
                    "start": 443,
                    "end": 450
                  },
                  "start": 441,
                  "end": 450
                },
                "start": 436,
                "end": 450
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 453,
                  "end": 458
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 462,
                      "end": 463
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 464,
                          "end": 467
                        }
                      ],
                      "start": 463,
                      "end": 468
                    },
                    "start": 462,
                    "end": 468
                  },
                  "start": 462,
                  "end": 468
                },
                "start": 453,
                "end": 468
              },
              "start": 451,
              "end": 468
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 415,
            "end": 469
          }
        ],
        "start": 388,
        "end": 471
      },
      "declare": false,
      "start": 365,
      "end": 471
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 482,
        "end": 483
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
              "start": 484,
              "end": 485
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 484,
            "end": 485
          }
        ],
        "start": 483,
        "end": 486
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
              "start": 493,
              "end": 496
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
                  "start": 498,
                  "end": 499
                },
                "typeArguments": null,
                "start": 498,
                "end": 499
              },
              "start": 496,
              "end": 499
            },
            "accessibility": null,
            "static": false,
            "start": 493,
            "end": 500
          }
        ],
        "start": 487,
        "end": 502
      },
      "declare": false,
      "start": 472,
      "end": 502
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
                  "start": 518,
                  "end": 530
                },
                "typeArguments": null,
                "start": 518,
                "end": 530
              },
              "start": 516,
              "end": 530
            },
            "start": 515,
            "end": 530
          },
          "init": null,
          "definite": false,
          "start": 515,
          "end": 530
        }
      ],
      "declare": true,
      "start": 503,
      "end": 531
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
                      "start": 543,
                      "end": 544
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 545,
                          "end": 551
                        }
                      ],
                      "start": 544,
                      "end": 552
                    },
                    "start": 543,
                    "end": 552
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 555,
                    "end": 561
                  }
                ],
                "start": 543,
                "end": 561
              },
              "start": 541,
              "end": 561
            },
            "start": 537,
            "end": 561
          },
          "init": null,
          "definite": false,
          "start": 537,
          "end": 561
        }
      ],
      "declare": false,
      "start": 533,
      "end": 562
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
          "start": 567,
          "end": 571
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 583,
          "end": 584
        },
        "start": 567,
        "end": 584
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
                  "start": 618,
                  "end": 622
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 623,
                  "end": 626
                },
                "optional": false,
                "computed": false,
                "start": 618,
                "end": 626
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 629,
                "end": 630
              },
              "start": 618,
              "end": 630
            },
            "directive": null,
            "start": 618,
            "end": 631
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
                  "start": 636,
                  "end": 640
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 641,
                  "end": 644
                },
                "optional": false,
                "computed": false,
                "start": 636,
                "end": 644
              },
              "right": {
                "type": "Literal",
                "value": "str",
                "raw": "\"str\"",
                "start": 647,
                "end": 652
              },
              "start": 636,
              "end": 652
            },
            "directive": null,
            "start": 636,
            "end": 653
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
                  "start": 658,
                  "end": 662
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 663,
                  "end": 666
                },
                "optional": false,
                "computed": false,
                "start": 658,
                "end": 666
              },
              "right": {
                "type": "Literal",
                "value": "str",
                "raw": "\"str\"",
                "start": 669,
                "end": 674
              },
              "start": 658,
              "end": 674
            },
            "directive": null,
            "start": 658,
            "end": 675
          }
        ],
        "start": 586,
        "end": 677
      },
      "alternate": null,
      "start": 563,
      "end": 677
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
                "start": 689,
                "end": 692
              },
              "start": 687,
              "end": 692
            },
            "start": 683,
            "end": 692
          },
          "init": null,
          "definite": false,
          "start": 683,
          "end": 692
        }
      ],
      "declare": false,
      "start": 679,
      "end": 693
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
          "start": 698,
          "end": 702
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 714,
          "end": 715
        },
        "start": 698,
        "end": 715
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
                  "start": 723,
                  "end": 727
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 728,
                  "end": 731
                },
                "optional": false,
                "computed": false,
                "start": 723,
                "end": 731
              },
              "right": {
                "type": "Literal",
                "value": "str",
                "raw": "\"str\"",
                "start": 734,
                "end": 739
              },
              "start": 723,
              "end": 739
            },
            "directive": null,
            "start": 723,
            "end": 740
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
                  "start": 745,
                  "end": 749
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 750,
                  "end": 753
                },
                "optional": false,
                "computed": false,
                "start": 745,
                "end": 753
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 756,
                "end": 757
              },
              "start": 745,
              "end": 757
            },
            "directive": null,
            "start": 745,
            "end": 758
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
                  "start": 763,
                  "end": 767
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 768,
                  "end": 771
                },
                "optional": false,
                "computed": false,
                "start": 763,
                "end": 771
              },
              "right": {
                "type": "Literal",
                "value": "str",
                "raw": "\"str\"",
                "start": 774,
                "end": 779
              },
              "start": 763,
              "end": 779
            },
            "directive": null,
            "start": 763,
            "end": 780
          }
        ],
        "start": 717,
        "end": 782
      },
      "alternate": null,
      "start": 694,
      "end": 782
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 830,
        "end": 842
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
                    "start": 861,
                    "end": 867
                  },
                  "start": 859,
                  "end": 867
                },
                "start": 854,
                "end": 867
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
                  "start": 870,
                  "end": 872
                },
                "typeArguments": null,
                "start": 870,
                "end": 872
              },
              "start": 868,
              "end": 872
            },
            "start": 849,
            "end": 873
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
                    "start": 890,
                    "end": 896
                  },
                  "start": 888,
                  "end": 896
                },
                "start": 883,
                "end": 896
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
                  "start": 899,
                  "end": 901
                },
                "typeArguments": null,
                "start": 899,
                "end": 901
              },
              "start": 897,
              "end": 901
            },
            "start": 878,
            "end": 902
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 908,
                "end": 914
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 915,
                "end": 926
              },
              "optional": false,
              "computed": false,
              "start": 908,
              "end": 926
            },
            "computed": true,
            "optional": false,
            "kind": "method",
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
                    "type": "TSUnknownKeyword",
                    "start": 935,
                    "end": 942
                  },
                  "start": 933,
                  "end": 942
                },
                "start": 928,
                "end": 942
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 945,
                  "end": 950
                },
                "asserts": false,
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
                          "start": 954,
                          "end": 956
                        },
                        "typeArguments": null,
                        "start": 954,
                        "end": 956
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 959,
                          "end": 961
                        },
                        "typeArguments": null,
                        "start": 959,
                        "end": 961
                      }
                    ],
                    "start": 954,
                    "end": 961
                  },
                  "start": 954,
                  "end": 961
                },
                "start": 945,
                "end": 961
              },
              "start": 943,
              "end": 961
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 907,
            "end": 962
          }
        ],
        "start": 843,
        "end": 964
      },
      "declare": false,
      "start": 820,
      "end": 964
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 975,
        "end": 977
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
              "start": 984,
              "end": 987
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 989,
                "end": 995
              },
              "start": 987,
              "end": 995
            },
            "accessibility": null,
            "static": false,
            "start": 984,
            "end": 996
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
              "start": 1001,
              "end": 1002
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1004,
                "end": 1010
              },
              "start": 1002,
              "end": 1010
            },
            "accessibility": null,
            "static": false,
            "start": 1001,
            "end": 1011
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
              "start": 1016,
              "end": 1020
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1022,
                "end": 1028
              },
              "start": 1020,
              "end": 1028
            },
            "accessibility": null,
            "static": false,
            "start": 1016,
            "end": 1029
          }
        ],
        "start": 978,
        "end": 1031
      },
      "declare": false,
      "start": 965,
      "end": 1031
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1042,
        "end": 1044
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
              "start": 1051,
              "end": 1054
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1056,
                "end": 1062
              },
              "start": 1054,
              "end": 1062
            },
            "accessibility": null,
            "static": false,
            "start": 1051,
            "end": 1063
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
              "start": 1068,
              "end": 1069
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1071,
                "end": 1077
              },
              "start": 1069,
              "end": 1077
            },
            "accessibility": null,
            "static": false,
            "start": 1068,
            "end": 1078
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
              "start": 1083,
              "end": 1087
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1089,
                "end": 1095
              },
              "start": 1087,
              "end": 1095
            },
            "accessibility": null,
            "static": false,
            "start": 1083,
            "end": 1096
          }
        ],
        "start": 1045,
        "end": 1098
      },
      "declare": false,
      "start": 1032,
      "end": 1098
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
                  "start": 1114,
                  "end": 1126
                },
                "typeArguments": null,
                "start": 1114,
                "end": 1126
              },
              "start": 1112,
              "end": 1126
            },
            "start": 1111,
            "end": 1126
          },
          "init": null,
          "definite": false,
          "start": 1111,
          "end": 1126
        }
      ],
      "declare": true,
      "start": 1099,
      "end": 1127
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
                      "start": 1139,
                      "end": 1141
                    },
                    "typeArguments": null,
                    "start": 1139,
                    "end": 1141
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1144,
                      "end": 1145
                    },
                    "typeArguments": null,
                    "start": 1144,
                    "end": 1145
                  }
                ],
                "start": 1139,
                "end": 1145
              },
              "start": 1137,
              "end": 1145
            },
            "start": 1133,
            "end": 1145
          },
          "init": null,
          "definite": false,
          "start": 1133,
          "end": 1145
        }
      ],
      "declare": false,
      "start": 1129,
      "end": 1146
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
          "start": 1151,
          "end": 1155
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 1167,
          "end": 1168
        },
        "start": 1151,
        "end": 1168
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
                "start": 1195,
                "end": 1199
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1200,
                "end": 1203
              },
              "optional": false,
              "computed": false,
              "start": 1195,
              "end": 1203
            },
            "directive": null,
            "start": 1195,
            "end": 1204
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
                "start": 1209,
                "end": 1213
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1214,
                "end": 1215
              },
              "optional": false,
              "computed": false,
              "start": 1209,
              "end": 1215
            },
            "directive": null,
            "start": 1209,
            "end": 1216
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
                "start": 1221,
                "end": 1225
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1226,
                "end": 1230
              },
              "optional": false,
              "computed": false,
              "start": 1221,
              "end": 1230
            },
            "directive": null,
            "start": 1221,
            "end": 1231
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
                "start": 1236,
                "end": 1240
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1241,
                "end": 1245
              },
              "optional": false,
              "computed": false,
              "start": 1236,
              "end": 1245
            },
            "directive": null,
            "start": 1236,
            "end": 1246
          }
        ],
        "start": 1170,
        "end": 1248
      },
      "alternate": null,
      "start": 1147,
      "end": 1248
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
                "start": 1260,
                "end": 1263
              },
              "start": 1258,
              "end": 1263
            },
            "start": 1254,
            "end": 1263
          },
          "init": null,
          "definite": false,
          "start": 1254,
          "end": 1263
        }
      ],
      "declare": false,
      "start": 1250,
      "end": 1264
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
          "start": 1269,
          "end": 1273
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 1285,
          "end": 1286
        },
        "start": 1269,
        "end": 1286
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
                "start": 1294,
                "end": 1298
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1299,
                "end": 1302
              },
              "optional": false,
              "computed": false,
              "start": 1294,
              "end": 1302
            },
            "directive": null,
            "start": 1294,
            "end": 1303
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
                "start": 1308,
                "end": 1312
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1313,
                "end": 1317
              },
              "optional": false,
              "computed": false,
              "start": 1308,
              "end": 1317
            },
            "directive": null,
            "start": 1308,
            "end": 1318
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
                "start": 1323,
                "end": 1327
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1328,
                "end": 1332
              },
              "optional": false,
              "computed": false,
              "start": 1323,
              "end": 1332
            },
            "directive": null,
            "start": 1323,
            "end": 1333
          }
        ],
        "start": 1288,
        "end": 1335
      },
      "alternate": null,
      "start": 1265,
      "end": 1335
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 1375,
        "end": 1376
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
              "start": 1383,
              "end": 1386
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1388,
                "end": 1394
              },
              "start": 1386,
              "end": 1394
            },
            "accessibility": null,
            "static": false,
            "start": 1383,
            "end": 1395
          }
        ],
        "start": 1377,
        "end": 1397
      },
      "declare": false,
      "start": 1365,
      "end": 1397
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
                          "start": 1427,
                          "end": 1428
                        },
                        "typeArguments": null,
                        "start": 1427,
                        "end": 1428
                      },
                      "start": 1425,
                      "end": 1428
                    },
                    "start": 1419,
                    "end": 1429
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1435,
                        "end": 1441
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "hasInstance",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1442,
                        "end": 1453
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1435,
                      "end": 1453
                    },
                    "computed": true,
                    "optional": false,
                    "kind": "method",
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
                            "type": "TSUnknownKeyword",
                            "start": 1462,
                            "end": 1469
                          },
                          "start": 1460,
                          "end": 1469
                        },
                        "start": 1455,
                        "end": 1469
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "parameterName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1472,
                          "end": 1477
                        },
                        "asserts": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "D",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1481,
                              "end": 1482
                            },
                            "typeArguments": null,
                            "start": 1481,
                            "end": 1482
                          },
                          "start": 1481,
                          "end": 1482
                        },
                        "start": 1472,
                        "end": 1482
                      },
                      "start": 1470,
                      "end": 1482
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1434,
                    "end": 1483
                  }
                ],
                "start": 1413,
                "end": 1485
              },
              "start": 1411,
              "end": 1485
            },
            "start": 1410,
            "end": 1485
          },
          "init": null,
          "definite": false,
          "start": 1410,
          "end": 1485
        }
      ],
      "declare": true,
      "start": 1398,
      "end": 1486
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
                      "start": 1498,
                      "end": 1499
                    },
                    "typeArguments": null,
                    "start": 1498,
                    "end": 1499
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 1502,
                    "end": 1508
                  }
                ],
                "start": 1498,
                "end": 1508
              },
              "start": 1496,
              "end": 1508
            },
            "start": 1492,
            "end": 1508
          },
          "init": null,
          "definite": false,
          "start": 1492,
          "end": 1508
        }
      ],
      "declare": false,
      "start": 1488,
      "end": 1509
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
          "start": 1514,
          "end": 1518
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 1530,
          "end": 1531
        },
        "start": 1514,
        "end": 1531
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
                "start": 1557,
                "end": 1561
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1562,
                "end": 1565
              },
              "optional": false,
              "computed": false,
              "start": 1557,
              "end": 1565
            },
            "directive": null,
            "start": 1557,
            "end": 1566
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
                "start": 1571,
                "end": 1575
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 1576,
                "end": 1579
              },
              "optional": false,
              "computed": false,
              "start": 1571,
              "end": 1579
            },
            "directive": null,
            "start": 1571,
            "end": 1580
          }
        ],
        "start": 1533,
        "end": 1582
      },
      "alternate": null,
      "start": 1510,
      "end": 1582
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
                "start": 1594,
                "end": 1597
              },
              "start": 1592,
              "end": 1597
            },
            "start": 1588,
            "end": 1597
          },
          "init": null,
          "definite": false,
          "start": 1588,
          "end": 1597
        }
      ],
      "declare": false,
      "start": 1584,
      "end": 1598
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
          "start": 1603,
          "end": 1607
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 1619,
          "end": 1620
        },
        "start": 1603,
        "end": 1620
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
                "start": 1628,
                "end": 1632
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1633,
                "end": 1636
              },
              "optional": false,
              "computed": false,
              "start": 1628,
              "end": 1636
            },
            "directive": null,
            "start": 1628,
            "end": 1637
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
                "start": 1642,
                "end": 1646
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 1647,
                "end": 1650
              },
              "optional": false,
              "computed": false,
              "start": 1642,
              "end": 1650
            },
            "directive": null,
            "start": 1642,
            "end": 1651
          }
        ],
        "start": 1622,
        "end": 1653
      },
      "alternate": null,
      "start": 1599,
      "end": 1653
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 1716,
        "end": 1728
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
                      "start": 1743,
                      "end": 1745
                    },
                    "typeArguments": null,
                    "start": 1743,
                    "end": 1745
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1748,
                      "end": 1750
                    },
                    "typeArguments": null,
                    "start": 1748,
                    "end": 1750
                  }
                ],
                "start": 1743,
                "end": 1750
              },
              "start": 1741,
              "end": 1750
            },
            "start": 1735,
            "end": 1751
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 1757,
                "end": 1763
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 1764,
                "end": 1775
              },
              "optional": false,
              "computed": false,
              "start": 1757,
              "end": 1775
            },
            "computed": true,
            "optional": false,
            "kind": "method",
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
                    "type": "TSUnknownKeyword",
                    "start": 1784,
                    "end": 1791
                  },
                  "start": 1782,
                  "end": 1791
                },
                "start": 1777,
                "end": 1791
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1794,
                  "end": 1799
                },
                "asserts": false,
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
                          "start": 1803,
                          "end": 1805
                        },
                        "typeArguments": null,
                        "start": 1803,
                        "end": 1805
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1808,
                          "end": 1810
                        },
                        "typeArguments": null,
                        "start": 1808,
                        "end": 1810
                      }
                    ],
                    "start": 1803,
                    "end": 1810
                  },
                  "start": 1803,
                  "end": 1810
                },
                "start": 1794,
                "end": 1810
              },
              "start": 1792,
              "end": 1810
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1756,
            "end": 1811
          }
        ],
        "start": 1729,
        "end": 1813
      },
      "declare": false,
      "start": 1706,
      "end": 1813
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1824,
        "end": 1826
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
              "start": 1833,
              "end": 1836
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1838,
                "end": 1844
              },
              "start": 1836,
              "end": 1844
            },
            "accessibility": null,
            "static": false,
            "start": 1833,
            "end": 1845
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
              "start": 1850,
              "end": 1854
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1856,
                "end": 1862
              },
              "start": 1854,
              "end": 1862
            },
            "accessibility": null,
            "static": false,
            "start": 1850,
            "end": 1863
          }
        ],
        "start": 1827,
        "end": 1865
      },
      "declare": false,
      "start": 1814,
      "end": 1865
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1876,
        "end": 1878
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
              "start": 1885,
              "end": 1888
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1890,
                "end": 1896
              },
              "start": 1888,
              "end": 1896
            },
            "accessibility": null,
            "static": false,
            "start": 1885,
            "end": 1897
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
              "start": 1902,
              "end": 1906
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1908,
                "end": 1914
              },
              "start": 1906,
              "end": 1914
            },
            "accessibility": null,
            "static": false,
            "start": 1902,
            "end": 1915
          }
        ],
        "start": 1879,
        "end": 1917
      },
      "declare": false,
      "start": 1866,
      "end": 1917
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
                  "start": 1933,
                  "end": 1945
                },
                "typeArguments": null,
                "start": 1933,
                "end": 1945
              },
              "start": 1931,
              "end": 1945
            },
            "start": 1930,
            "end": 1945
          },
          "init": null,
          "definite": false,
          "start": 1930,
          "end": 1945
        }
      ],
      "declare": true,
      "start": 1918,
      "end": 1946
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
                      "start": 1958,
                      "end": 1960
                    },
                    "typeArguments": null,
                    "start": 1958,
                    "end": 1960
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1963,
                      "end": 1964
                    },
                    "typeArguments": null,
                    "start": 1963,
                    "end": 1964
                  }
                ],
                "start": 1958,
                "end": 1964
              },
              "start": 1956,
              "end": 1964
            },
            "start": 1952,
            "end": 1964
          },
          "init": null,
          "definite": false,
          "start": 1952,
          "end": 1964
        }
      ],
      "declare": false,
      "start": 1948,
      "end": 1965
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
          "start": 1970,
          "end": 1974
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "E",
          "optional": false,
          "typeAnnotation": null,
          "start": 1986,
          "end": 1987
        },
        "start": 1970,
        "end": 1987
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
                "start": 2013,
                "end": 2017
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 2018,
                "end": 2021
              },
              "optional": false,
              "computed": false,
              "start": 2013,
              "end": 2021
            },
            "directive": null,
            "start": 2013,
            "end": 2022
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
                "start": 2027,
                "end": 2031
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2032,
                "end": 2036
              },
              "optional": false,
              "computed": false,
              "start": 2027,
              "end": 2036
            },
            "directive": null,
            "start": 2027,
            "end": 2037
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
                "start": 2042,
                "end": 2046
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2047,
                "end": 2051
              },
              "optional": false,
              "computed": false,
              "start": 2042,
              "end": 2051
            },
            "directive": null,
            "start": 2042,
            "end": 2052
          }
        ],
        "start": 1989,
        "end": 2054
      },
      "alternate": null,
      "start": 1966,
      "end": 2054
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
                "start": 2067,
                "end": 2070
              },
              "start": 2065,
              "end": 2070
            },
            "start": 2060,
            "end": 2070
          },
          "init": null,
          "definite": false,
          "start": 2060,
          "end": 2070
        }
      ],
      "declare": false,
      "start": 2056,
      "end": 2071
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
          "start": 2076,
          "end": 2081
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "E",
          "optional": false,
          "typeAnnotation": null,
          "start": 2093,
          "end": 2094
        },
        "start": 2076,
        "end": 2094
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
                "start": 2102,
                "end": 2107
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 2108,
                "end": 2111
              },
              "optional": false,
              "computed": false,
              "start": 2102,
              "end": 2111
            },
            "directive": null,
            "start": 2102,
            "end": 2112
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
                "start": 2117,
                "end": 2122
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2123,
                "end": 2127
              },
              "optional": false,
              "computed": false,
              "start": 2117,
              "end": 2127
            },
            "directive": null,
            "start": 2117,
            "end": 2128
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
                "start": 2133,
                "end": 2138
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2139,
                "end": 2143
              },
              "optional": false,
              "computed": false,
              "start": 2133,
              "end": 2143
            },
            "directive": null,
            "start": 2133,
            "end": 2144
          }
        ],
        "start": 2096,
        "end": 2146
      },
      "alternate": null,
      "start": 2072,
      "end": 2146
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 2200,
        "end": 2212
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
                "start": 2227,
                "end": 2230
              },
              "start": 2225,
              "end": 2230
            },
            "start": 2219,
            "end": 2231
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 2237,
                "end": 2243
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 2244,
                "end": 2255
              },
              "optional": false,
              "computed": false,
              "start": 2237,
              "end": 2255
            },
            "computed": true,
            "optional": false,
            "kind": "method",
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
                    "type": "TSUnknownKeyword",
                    "start": 2264,
                    "end": 2271
                  },
                  "start": 2262,
                  "end": 2271
                },
                "start": 2257,
                "end": 2271
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2274,
                  "end": 2279
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2283,
                    "end": 2286
                  },
                  "start": 2283,
                  "end": 2286
                },
                "start": 2274,
                "end": 2286
              },
              "start": 2272,
              "end": 2286
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2236,
            "end": 2287
          }
        ],
        "start": 2213,
        "end": 2289
      },
      "declare": false,
      "start": 2190,
      "end": 2289
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 2300,
        "end": 2301
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
              "start": 2308,
              "end": 2311
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2313,
                "end": 2319
              },
              "start": 2311,
              "end": 2319
            },
            "accessibility": null,
            "static": false,
            "start": 2308,
            "end": 2320
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
              "start": 2325,
              "end": 2328
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2330,
                "end": 2336
              },
              "start": 2328,
              "end": 2336
            },
            "accessibility": null,
            "static": false,
            "start": 2325,
            "end": 2337
          }
        ],
        "start": 2302,
        "end": 2339
      },
      "declare": false,
      "start": 2290,
      "end": 2339
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
                  "start": 2355,
                  "end": 2367
                },
                "typeArguments": null,
                "start": 2355,
                "end": 2367
              },
              "start": 2353,
              "end": 2367
            },
            "start": 2352,
            "end": 2367
          },
          "init": null,
          "definite": false,
          "start": 2352,
          "end": 2367
        }
      ],
      "declare": true,
      "start": 2340,
      "end": 2368
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
                      "start": 2381,
                      "end": 2382
                    },
                    "typeArguments": null,
                    "start": 2381,
                    "end": 2382
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 2385,
                    "end": 2391
                  }
                ],
                "start": 2381,
                "end": 2391
              },
              "start": 2379,
              "end": 2391
            },
            "start": 2374,
            "end": 2391
          },
          "init": null,
          "definite": false,
          "start": 2374,
          "end": 2391
        }
      ],
      "declare": false,
      "start": 2370,
      "end": 2392
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
          "start": 2397,
          "end": 2402
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "F",
          "optional": false,
          "typeAnnotation": null,
          "start": 2414,
          "end": 2415
        },
        "start": 2397,
        "end": 2415
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
                "start": 2481,
                "end": 2486
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 2487,
                "end": 2490
              },
              "optional": false,
              "computed": false,
              "start": 2481,
              "end": 2490
            },
            "directive": null,
            "start": 2481,
            "end": 2491
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
                "start": 2496,
                "end": 2501
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 2502,
                "end": 2505
              },
              "optional": false,
              "computed": false,
              "start": 2496,
              "end": 2505
            },
            "directive": null,
            "start": 2496,
            "end": 2506
          }
        ],
        "start": 2417,
        "end": 2508
      },
      "alternate": null,
      "start": 2393,
      "end": 2508
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
                "start": 2521,
                "end": 2524
              },
              "start": 2519,
              "end": 2524
            },
            "start": 2514,
            "end": 2524
          },
          "init": null,
          "definite": false,
          "start": 2514,
          "end": 2524
        }
      ],
      "declare": false,
      "start": 2510,
      "end": 2525
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
          "start": 2530,
          "end": 2535
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "F",
          "optional": false,
          "typeAnnotation": null,
          "start": 2547,
          "end": 2548
        },
        "start": 2530,
        "end": 2548
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
                "start": 2556,
                "end": 2561
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 2562,
                "end": 2565
              },
              "optional": false,
              "computed": false,
              "start": 2556,
              "end": 2565
            },
            "directive": null,
            "start": 2556,
            "end": 2566
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
                "start": 2571,
                "end": 2576
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 2577,
                "end": 2580
              },
              "optional": false,
              "computed": false,
              "start": 2571,
              "end": 2580
            },
            "directive": null,
            "start": 2571,
            "end": 2581
          }
        ],
        "start": 2550,
        "end": 2583
      },
      "alternate": null,
      "start": 2526,
      "end": 2583
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 2660,
        "end": 2672
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
              "start": 2679,
              "end": 2688
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
                  "start": 2690,
                  "end": 2692
                },
                "typeArguments": null,
                "start": 2690,
                "end": 2692
              },
              "start": 2688,
              "end": 2692
            },
            "accessibility": null,
            "static": false,
            "start": 2679,
            "end": 2693
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
                  "start": 2723,
                  "end": 2725
                },
                "typeArguments": null,
                "start": 2723,
                "end": 2725
              },
              "start": 2721,
              "end": 2725
            },
            "start": 2715,
            "end": 2726
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 2751,
                "end": 2757
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 2758,
                "end": 2769
              },
              "optional": false,
              "computed": false,
              "start": 2751,
              "end": 2769
            },
            "computed": true,
            "optional": false,
            "kind": "method",
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
                    "type": "TSUnknownKeyword",
                    "start": 2778,
                    "end": 2785
                  },
                  "start": 2776,
                  "end": 2785
                },
                "start": 2771,
                "end": 2785
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2788,
                  "end": 2793
                },
                "asserts": false,
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
                      "start": 2797,
                      "end": 2799
                    },
                    "typeArguments": null,
                    "start": 2797,
                    "end": 2799
                  },
                  "start": 2797,
                  "end": 2799
                },
                "start": 2788,
                "end": 2799
              },
              "start": 2786,
              "end": 2799
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2750,
            "end": 2800
          }
        ],
        "start": 2673,
        "end": 2824
      },
      "declare": false,
      "start": 2650,
      "end": 2824
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2835,
        "end": 2837
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
              "start": 2844,
              "end": 2848
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2850,
                "end": 2856
              },
              "start": 2848,
              "end": 2856
            },
            "accessibility": null,
            "static": false,
            "start": 2844,
            "end": 2857
          }
        ],
        "start": 2838,
        "end": 2859
      },
      "declare": false,
      "start": 2825,
      "end": 2859
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2870,
        "end": 2872
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
              "start": 2879,
              "end": 2883
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2885,
                "end": 2892
              },
              "start": 2883,
              "end": 2892
            },
            "accessibility": null,
            "static": false,
            "start": 2879,
            "end": 2893
          }
        ],
        "start": 2873,
        "end": 2895
      },
      "declare": false,
      "start": 2860,
      "end": 2895
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
                  "start": 2911,
                  "end": 2923
                },
                "typeArguments": null,
                "start": 2911,
                "end": 2923
              },
              "start": 2909,
              "end": 2923
            },
            "start": 2908,
            "end": 2923
          },
          "init": null,
          "definite": false,
          "start": 2908,
          "end": 2923
        }
      ],
      "declare": true,
      "start": 2896,
      "end": 2924
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
                      "start": 2937,
                      "end": 2939
                    },
                    "typeArguments": null,
                    "start": 2937,
                    "end": 2939
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "G2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2942,
                      "end": 2944
                    },
                    "typeArguments": null,
                    "start": 2942,
                    "end": 2944
                  }
                ],
                "start": 2937,
                "end": 2944
              },
              "start": 2935,
              "end": 2944
            },
            "start": 2930,
            "end": 2944
          },
          "init": null,
          "definite": false,
          "start": 2930,
          "end": 2944
        }
      ],
      "declare": false,
      "start": 2926,
      "end": 2945
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
          "start": 2950,
          "end": 2955
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "G",
          "optional": false,
          "typeAnnotation": null,
          "start": 2967,
          "end": 2968
        },
        "start": 2950,
        "end": 2968
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
                "start": 3036,
                "end": 3041
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3042,
                "end": 3046
              },
              "optional": false,
              "computed": false,
              "start": 3036,
              "end": 3046
            },
            "directive": null,
            "start": 3036,
            "end": 3047
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
                "start": 3052,
                "end": 3057
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3058,
                "end": 3062
              },
              "optional": false,
              "computed": false,
              "start": 3052,
              "end": 3062
            },
            "directive": null,
            "start": 3052,
            "end": 3063
          }
        ],
        "start": 2970,
        "end": 3065
      },
      "alternate": null,
      "start": 2946,
      "end": 3065
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
                "start": 3078,
                "end": 3081
              },
              "start": 3076,
              "end": 3081
            },
            "start": 3071,
            "end": 3081
          },
          "init": null,
          "definite": false,
          "start": 3071,
          "end": 3081
        }
      ],
      "declare": false,
      "start": 3067,
      "end": 3082
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
          "start": 3087,
          "end": 3092
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "G",
          "optional": false,
          "typeAnnotation": null,
          "start": 3104,
          "end": 3105
        },
        "start": 3087,
        "end": 3105
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
                "start": 3113,
                "end": 3118
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3119,
                "end": 3123
              },
              "optional": false,
              "computed": false,
              "start": 3113,
              "end": 3123
            },
            "directive": null,
            "start": 3113,
            "end": 3124
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
                "start": 3129,
                "end": 3134
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3135,
                "end": 3139
              },
              "optional": false,
              "computed": false,
              "start": 3129,
              "end": 3139
            },
            "directive": null,
            "start": 3129,
            "end": 3140
          }
        ],
        "start": 3107,
        "end": 3142
      },
      "alternate": null,
      "start": 3083,
      "end": 3142
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 3199,
        "end": 3211
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
              "start": 3218,
              "end": 3227
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3229,
                "end": 3232
              },
              "start": 3227,
              "end": 3232
            },
            "accessibility": null,
            "static": false,
            "start": 3218,
            "end": 3233
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
                  "start": 3330,
                  "end": 3331
                },
                "typeArguments": null,
                "start": 3330,
                "end": 3331
              },
              "start": 3328,
              "end": 3331
            },
            "start": 3322,
            "end": 3332
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 3359,
                "end": 3365
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 3366,
                "end": 3377
              },
              "optional": false,
              "computed": false,
              "start": 3359,
              "end": 3377
            },
            "computed": true,
            "optional": false,
            "kind": "method",
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
                    "type": "TSUnknownKeyword",
                    "start": 3386,
                    "end": 3393
                  },
                  "start": 3384,
                  "end": 3393
                },
                "start": 3379,
                "end": 3393
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3396,
                  "end": 3401
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "H",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3405,
                      "end": 3406
                    },
                    "typeArguments": null,
                    "start": 3405,
                    "end": 3406
                  },
                  "start": 3405,
                  "end": 3406
                },
                "start": 3396,
                "end": 3406
              },
              "start": 3394,
              "end": 3406
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 3358,
            "end": 3407
          }
        ],
        "start": 3212,
        "end": 3431
      },
      "declare": false,
      "start": 3189,
      "end": 3431
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "H",
        "optional": false,
        "typeAnnotation": null,
        "start": 3442,
        "end": 3443
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
              "start": 3450,
              "end": 3453
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3455,
                "end": 3461
              },
              "start": 3453,
              "end": 3461
            },
            "accessibility": null,
            "static": false,
            "start": 3450,
            "end": 3462
          }
        ],
        "start": 3444,
        "end": 3464
      },
      "declare": false,
      "start": 3432,
      "end": 3464
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
                  "start": 3480,
                  "end": 3492
                },
                "typeArguments": null,
                "start": 3480,
                "end": 3492
              },
              "start": 3478,
              "end": 3492
            },
            "start": 3477,
            "end": 3492
          },
          "init": null,
          "definite": false,
          "start": 3477,
          "end": 3492
        }
      ],
      "declare": true,
      "start": 3465,
      "end": 3493
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
                      "start": 3506,
                      "end": 3507
                    },
                    "typeArguments": null,
                    "start": 3506,
                    "end": 3507
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 3510,
                    "end": 3516
                  }
                ],
                "start": 3506,
                "end": 3516
              },
              "start": 3504,
              "end": 3516
            },
            "start": 3499,
            "end": 3516
          },
          "init": null,
          "definite": false,
          "start": 3499,
          "end": 3516
        }
      ],
      "declare": false,
      "start": 3495,
      "end": 3517
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
          "start": 3522,
          "end": 3527
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "H",
          "optional": false,
          "typeAnnotation": null,
          "start": 3539,
          "end": 3540
        },
        "start": 3522,
        "end": 3540
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
                "start": 3566,
                "end": 3571
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 3572,
                "end": 3575
              },
              "optional": false,
              "computed": false,
              "start": 3566,
              "end": 3575
            },
            "directive": null,
            "start": 3566,
            "end": 3576
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
                "start": 3581,
                "end": 3586
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 3587,
                "end": 3590
              },
              "optional": false,
              "computed": false,
              "start": 3581,
              "end": 3590
            },
            "directive": null,
            "start": 3581,
            "end": 3591
          }
        ],
        "start": 3542,
        "end": 3593
      },
      "alternate": null,
      "start": 3518,
      "end": 3593
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
                "start": 3606,
                "end": 3609
              },
              "start": 3604,
              "end": 3609
            },
            "start": 3599,
            "end": 3609
          },
          "init": null,
          "definite": false,
          "start": 3599,
          "end": 3609
        }
      ],
      "declare": false,
      "start": 3595,
      "end": 3610
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
          "start": 3615,
          "end": 3620
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "H",
          "optional": false,
          "typeAnnotation": null,
          "start": 3632,
          "end": 3633
        },
        "start": 3615,
        "end": 3633
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
                "start": 3641,
                "end": 3646
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3647,
                "end": 3651
              },
              "optional": false,
              "computed": false,
              "start": 3641,
              "end": 3651
            },
            "directive": null,
            "start": 3641,
            "end": 3652
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
                "start": 3657,
                "end": 3662
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3663,
                "end": 3667
              },
              "optional": false,
              "computed": false,
              "start": 3657,
              "end": 3667
            },
            "directive": null,
            "start": 3657,
            "end": 3668
          }
        ],
        "start": 3635,
        "end": 3670
      },
      "alternate": null,
      "start": 3611,
      "end": 3670
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
                "start": 3683,
                "end": 3686
              },
              "start": 3681,
              "end": 3686
            },
            "start": 3676,
            "end": 3686
          },
          "init": null,
          "definite": false,
          "start": 3676,
          "end": 3686
        }
      ],
      "declare": false,
      "start": 3672,
      "end": 3687
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
          "start": 3692,
          "end": 3697
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Object",
          "optional": false,
          "typeAnnotation": null,
          "start": 3709,
          "end": 3715
        },
        "start": 3692,
        "end": 3715
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
                "start": 3767,
                "end": 3772
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3773,
                "end": 3777
              },
              "optional": false,
              "computed": false,
              "start": 3767,
              "end": 3777
            },
            "directive": null,
            "start": 3767,
            "end": 3778
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
                "start": 3783,
                "end": 3788
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3789,
                "end": 3793
              },
              "optional": false,
              "computed": false,
              "start": 3783,
              "end": 3793
            },
            "directive": null,
            "start": 3783,
            "end": 3794
          }
        ],
        "start": 3717,
        "end": 3796
      },
      "alternate": null,
      "start": 3688,
      "end": 3796
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
                "start": 3809,
                "end": 3812
              },
              "start": 3807,
              "end": 3812
            },
            "start": 3802,
            "end": 3812
          },
          "init": null,
          "definite": false,
          "start": 3802,
          "end": 3812
        }
      ],
      "declare": false,
      "start": 3798,
      "end": 3813
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
          "start": 3818,
          "end": 3823
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Function",
          "optional": false,
          "typeAnnotation": null,
          "start": 3835,
          "end": 3843
        },
        "start": 3818,
        "end": 3843
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
                "start": 3897,
                "end": 3902
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3903,
                "end": 3907
              },
              "optional": false,
              "computed": false,
              "start": 3897,
              "end": 3907
            },
            "directive": null,
            "start": 3897,
            "end": 3908
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
                "start": 3913,
                "end": 3918
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3919,
                "end": 3923
              },
              "optional": false,
              "computed": false,
              "start": 3913,
              "end": 3923
            },
            "directive": null,
            "start": 3913,
            "end": 3924
          }
        ],
        "start": 3845,
        "end": 3926
      },
      "alternate": null,
      "start": 3814,
      "end": 3926
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3926
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
    "value": "[",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 45,
    "end": 51,
    "range": [
      45,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 52,
    "end": 63,
    "range": [
      52,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 65,
    "end": 70,
    "range": [
      65,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 72,
    "end": 79,
    "range": [
      72,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 82,
    "end": 87,
    "range": [
      82,
      87
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 88,
    "end": 90,
    "range": [
      88,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 96,
    "end": 105,
    "range": [
      96,
      105
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 114,
    "end": 117,
    "range": [
      114,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Punctuator",
    "value": "}",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 129,
    "end": 136,
    "range": [
      129,
      136
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 137,
    "end": 140,
    "range": [
      137,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "AConstructor",
    "start": 144,
    "end": 156,
    "range": [
      144,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 159,
    "end": 162,
    "range": [
      159,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 163,
    "end": 167,
    "range": [
      163,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 173,
    "end": 179,
    "range": [
      173,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 181,
    "end": 183,
    "range": [
      181,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 185,
    "end": 189,
    "range": [
      185,
      189
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 190,
    "end": 200,
    "range": [
      190,
      200
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 228,
    "end": 232,
    "range": [
      228,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 233,
    "end": 236,
    "range": [
      233,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 242,
    "end": 246,
    "range": [
      242,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 247,
    "end": 250,
    "range": [
      247,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 255,
    "end": 258,
    "range": [
      255,
      258
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
    "value": ":",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 265,
    "end": 268,
    "range": [
      265,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 270,
    "end": 272,
    "range": [
      270,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 274,
    "end": 278,
    "range": [
      274,
      278
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 279,
    "end": 289,
    "range": [
      279,
      289
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 299,
    "end": 303,
    "range": [
      299,
      303
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 304,
    "end": 307,
    "range": [
      304,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 313,
    "end": 317,
    "range": [
      313,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 318,
    "end": 321,
    "range": [
      318,
      321
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 365,
    "end": 374,
    "range": [
      365,
      374
    ]
  },
  {
    "type": "Identifier",
    "value": "BConstructor",
    "start": 375,
    "end": 387,
    "range": [
      375,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 394,
    "end": 397,
    "range": [
      394,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "B",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 416,
    "end": 422,
    "range": [
      416,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 423,
    "end": 434,
    "range": [
      423,
      434
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 436,
    "end": 441,
    "range": [
      436,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 443,
    "end": 450,
    "range": [
      443,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 453,
    "end": 458,
    "range": [
      453,
      458
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 459,
    "end": 461,
    "range": [
      459,
      461
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 464,
    "end": 467,
    "range": [
      464,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 472,
    "end": 481,
    "range": [
      472,
      481
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 485,
    "end": 486,
    "range": [
      485,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 493,
    "end": 496,
    "range": [
      493,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 503,
    "end": 510,
    "range": [
      503,
      510
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 511,
    "end": 514,
    "range": [
      511,
      514
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Identifier",
    "value": "BConstructor",
    "start": 518,
    "end": 530,
    "range": [
      518,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 533,
    "end": 536,
    "range": [
      533,
      536
    ]
  },
  {
    "type": "Identifier",
    "value": "obj3",
    "start": 537,
    "end": 541,
    "range": [
      537,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 543,
    "end": 544,
    "range": [
      543,
      544
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 545,
    "end": 551,
    "range": [
      545,
      551
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 555,
    "end": 561,
    "range": [
      555,
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
    "type": "Keyword",
    "value": "if",
    "start": 563,
    "end": 565,
    "range": [
      563,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Identifier",
    "value": "obj3",
    "start": 567,
    "end": 571,
    "range": [
      567,
      571
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 572,
    "end": 582,
    "range": [
      572,
      582
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Identifier",
    "value": "obj3",
    "start": 618,
    "end": 622,
    "range": [
      618,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 623,
    "end": 626,
    "range": [
      623,
      626
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 629,
    "end": 630,
    "range": [
      629,
      630
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Identifier",
    "value": "obj3",
    "start": 636,
    "end": 640,
    "range": [
      636,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 641,
    "end": 644,
    "range": [
      641,
      644
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 645,
    "end": 646,
    "range": [
      645,
      646
    ]
  },
  {
    "type": "String",
    "value": "\"str\"",
    "start": 647,
    "end": 652,
    "range": [
      647,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Identifier",
    "value": "obj3",
    "start": 658,
    "end": 662,
    "range": [
      658,
      662
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 663,
    "end": 666,
    "range": [
      663,
      666
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "String",
    "value": "\"str\"",
    "start": 669,
    "end": 674,
    "range": [
      669,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 679,
    "end": 682,
    "range": [
      679,
      682
    ]
  },
  {
    "type": "Identifier",
    "value": "obj4",
    "start": 683,
    "end": 687,
    "range": [
      683,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 689,
    "end": 692,
    "range": [
      689,
      692
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 694,
    "end": 696,
    "range": [
      694,
      696
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 697,
    "end": 698,
    "range": [
      697,
      698
    ]
  },
  {
    "type": "Identifier",
    "value": "obj4",
    "start": 698,
    "end": 702,
    "range": [
      698,
      702
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 703,
    "end": 713,
    "range": [
      703,
      713
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 715,
    "end": 716,
    "range": [
      715,
      716
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 717,
    "end": 718,
    "range": [
      717,
      718
    ]
  },
  {
    "type": "Identifier",
    "value": "obj4",
    "start": 723,
    "end": 727,
    "range": [
      723,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 727,
    "end": 728,
    "range": [
      727,
      728
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 728,
    "end": 731,
    "range": [
      728,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "String",
    "value": "\"str\"",
    "start": 734,
    "end": 739,
    "range": [
      734,
      739
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 739,
    "end": 740,
    "range": [
      739,
      740
    ]
  },
  {
    "type": "Identifier",
    "value": "obj4",
    "start": 745,
    "end": 749,
    "range": [
      745,
      749
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 750,
    "end": 753,
    "range": [
      750,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 757,
    "end": 758,
    "range": [
      757,
      758
    ]
  },
  {
    "type": "Identifier",
    "value": "obj4",
    "start": 763,
    "end": 767,
    "range": [
      763,
      767
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 767,
    "end": 768,
    "range": [
      767,
      768
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 768,
    "end": 771,
    "range": [
      768,
      771
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 772,
    "end": 773,
    "range": [
      772,
      773
    ]
  },
  {
    "type": "String",
    "value": "\"str\"",
    "start": 774,
    "end": 779,
    "range": [
      774,
      779
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 779,
    "end": 780,
    "range": [
      779,
      780
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 781,
    "end": 782,
    "range": [
      781,
      782
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 820,
    "end": 829,
    "range": [
      820,
      829
    ]
  },
  {
    "type": "Identifier",
    "value": "CConstructor",
    "start": 830,
    "end": 842,
    "range": [
      830,
      842
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 849,
    "end": 852,
    "range": [
      849,
      852
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 853,
    "end": 854,
    "range": [
      853,
      854
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 854,
    "end": 859,
    "range": [
      854,
      859
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 859,
    "end": 860,
    "range": [
      859,
      860
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 861,
    "end": 867,
    "range": [
      861,
      867
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 867,
    "end": 868,
    "range": [
      867,
      868
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 868,
    "end": 869,
    "range": [
      868,
      869
    ]
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 870,
    "end": 872,
    "range": [
      870,
      872
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 872,
    "end": 873,
    "range": [
      872,
      873
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 878,
    "end": 881,
    "range": [
      878,
      881
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 882,
    "end": 883,
    "range": [
      882,
      883
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 883,
    "end": 888,
    "range": [
      883,
      888
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 888,
    "end": 889,
    "range": [
      888,
      889
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 890,
    "end": 896,
    "range": [
      890,
      896
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 896,
    "end": 897,
    "range": [
      896,
      897
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 897,
    "end": 898,
    "range": [
      897,
      898
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 899,
    "end": 901,
    "range": [
      899,
      901
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 901,
    "end": 902,
    "range": [
      901,
      902
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 908,
    "end": 914,
    "range": [
      908,
      914
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 914,
    "end": 915,
    "range": [
      914,
      915
    ]
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 915,
    "end": 926,
    "range": [
      915,
      926
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 926,
    "end": 927,
    "range": [
      926,
      927
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 927,
    "end": 928,
    "range": [
      927,
      928
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 928,
    "end": 933,
    "range": [
      928,
      933
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 935,
    "end": 942,
    "range": [
      935,
      942
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 943,
    "end": 944,
    "range": [
      943,
      944
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 945,
    "end": 950,
    "range": [
      945,
      950
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 951,
    "end": 953,
    "range": [
      951,
      953
    ]
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 954,
    "end": 956,
    "range": [
      954,
      956
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 957,
    "end": 958,
    "range": [
      957,
      958
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 959,
    "end": 961,
    "range": [
      959,
      961
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 961,
    "end": 962,
    "range": [
      961,
      962
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 963,
    "end": 964,
    "range": [
      963,
      964
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 965,
    "end": 974,
    "range": [
      965,
      974
    ]
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 975,
    "end": 977,
    "range": [
      975,
      977
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 978,
    "end": 979,
    "range": [
      978,
      979
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 984,
    "end": 987,
    "range": [
      984,
      987
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 987,
    "end": 988,
    "range": [
      987,
      988
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 989,
    "end": 995,
    "range": [
      989,
      995
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 995,
    "end": 996,
    "range": [
      995,
      996
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1001,
    "end": 1002,
    "range": [
      1001,
      1002
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1002,
    "end": 1003,
    "range": [
      1002,
      1003
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1004,
    "end": 1010,
    "range": [
      1004,
      1010
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 1016,
    "end": 1020,
    "range": [
      1016,
      1020
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1020,
    "end": 1021,
    "range": [
      1020,
      1021
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1022,
    "end": 1028,
    "range": [
      1022,
      1028
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1028,
    "end": 1029,
    "range": [
      1028,
      1029
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1030,
    "end": 1031,
    "range": [
      1030,
      1031
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1032,
    "end": 1041,
    "range": [
      1032,
      1041
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 1042,
    "end": 1044,
    "range": [
      1042,
      1044
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
      1046
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1051,
    "end": 1054,
    "range": [
      1051,
      1054
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1054,
    "end": 1055,
    "range": [
      1054,
      1055
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1056,
    "end": 1062,
    "range": [
      1056,
      1062
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1062,
    "end": 1063,
    "range": [
      1062,
      1063
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1068,
    "end": 1069,
    "range": [
      1068,
      1069
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1069,
    "end": 1070,
    "range": [
      1069,
      1070
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1071,
    "end": 1077,
    "range": [
      1071,
      1077
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1077,
    "end": 1078,
    "range": [
      1077,
      1078
    ]
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 1083,
    "end": 1087,
    "range": [
      1083,
      1087
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1087,
    "end": 1088,
    "range": [
      1087,
      1088
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1089,
    "end": 1095,
    "range": [
      1089,
      1095
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1095,
    "end": 1096,
    "range": [
      1095,
      1096
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1097,
    "end": 1098,
    "range": [
      1097,
      1098
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1099,
    "end": 1106,
    "range": [
      1099,
      1106
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1107,
    "end": 1110,
    "range": [
      1107,
      1110
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1111,
    "end": 1112,
    "range": [
      1111,
      1112
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1112,
    "end": 1113,
    "range": [
      1112,
      1113
    ]
  },
  {
    "type": "Identifier",
    "value": "CConstructor",
    "start": 1114,
    "end": 1126,
    "range": [
      1114,
      1126
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1126,
    "end": 1127,
    "range": [
      1126,
      1127
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1129,
    "end": 1132,
    "range": [
      1129,
      1132
    ]
  },
  {
    "type": "Identifier",
    "value": "obj5",
    "start": 1133,
    "end": 1137,
    "range": [
      1133,
      1137
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1137,
    "end": 1138,
    "range": [
      1137,
      1138
    ]
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 1139,
    "end": 1141,
    "range": [
      1139,
      1141
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1142,
    "end": 1143,
    "range": [
      1142,
      1143
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1144,
    "end": 1145,
    "range": [
      1144,
      1145
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1145,
    "end": 1146,
    "range": [
      1145,
      1146
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1147,
    "end": 1149,
    "range": [
      1147,
      1149
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1150,
    "end": 1151,
    "range": [
      1150,
      1151
    ]
  },
  {
    "type": "Identifier",
    "value": "obj5",
    "start": 1151,
    "end": 1155,
    "range": [
      1151,
      1155
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1156,
    "end": 1166,
    "range": [
      1156,
      1166
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1167,
    "end": 1168,
    "range": [
      1167,
      1168
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1168,
    "end": 1169,
    "range": [
      1168,
      1169
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1170,
    "end": 1171,
    "range": [
      1170,
      1171
    ]
  },
  {
    "type": "Identifier",
    "value": "obj5",
    "start": 1195,
    "end": 1199,
    "range": [
      1195,
      1199
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1199,
    "end": 1200,
    "range": [
      1199,
      1200
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1200,
    "end": 1203,
    "range": [
      1200,
      1203
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1203,
    "end": 1204,
    "range": [
      1203,
      1204
    ]
  },
  {
    "type": "Identifier",
    "value": "obj5",
    "start": 1209,
    "end": 1213,
    "range": [
      1209,
      1213
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1213,
    "end": 1214,
    "range": [
      1213,
      1214
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1214,
    "end": 1215,
    "range": [
      1214,
      1215
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1215,
    "end": 1216,
    "range": [
      1215,
      1216
    ]
  },
  {
    "type": "Identifier",
    "value": "obj5",
    "start": 1221,
    "end": 1225,
    "range": [
      1221,
      1225
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1225,
    "end": 1226,
    "range": [
      1225,
      1226
    ]
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 1226,
    "end": 1230,
    "range": [
      1226,
      1230
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1230,
    "end": 1231,
    "range": [
      1230,
      1231
    ]
  },
  {
    "type": "Identifier",
    "value": "obj5",
    "start": 1236,
    "end": 1240,
    "range": [
      1236,
      1240
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1240,
    "end": 1241,
    "range": [
      1240,
      1241
    ]
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 1241,
    "end": 1245,
    "range": [
      1241,
      1245
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1245,
    "end": 1246,
    "range": [
      1245,
      1246
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1247,
    "end": 1248,
    "range": [
      1247,
      1248
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1250,
    "end": 1253,
    "range": [
      1250,
      1253
    ]
  },
  {
    "type": "Identifier",
    "value": "obj6",
    "start": 1254,
    "end": 1258,
    "range": [
      1254,
      1258
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1258,
    "end": 1259,
    "range": [
      1258,
      1259
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1260,
    "end": 1263,
    "range": [
      1260,
      1263
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1263,
    "end": 1264,
    "range": [
      1263,
      1264
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1265,
    "end": 1267,
    "range": [
      1265,
      1267
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1268,
    "end": 1269,
    "range": [
      1268,
      1269
    ]
  },
  {
    "type": "Identifier",
    "value": "obj6",
    "start": 1269,
    "end": 1273,
    "range": [
      1269,
      1273
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1274,
    "end": 1284,
    "range": [
      1274,
      1284
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1285,
    "end": 1286,
    "range": [
      1285,
      1286
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1286,
    "end": 1287,
    "range": [
      1286,
      1287
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1288,
    "end": 1289,
    "range": [
      1288,
      1289
    ]
  },
  {
    "type": "Identifier",
    "value": "obj6",
    "start": 1294,
    "end": 1298,
    "range": [
      1294,
      1298
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1298,
    "end": 1299,
    "range": [
      1298,
      1299
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1299,
    "end": 1302,
    "range": [
      1299,
      1302
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1302,
    "end": 1303,
    "range": [
      1302,
      1303
    ]
  },
  {
    "type": "Identifier",
    "value": "obj6",
    "start": 1308,
    "end": 1312,
    "range": [
      1308,
      1312
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1312,
    "end": 1313,
    "range": [
      1312,
      1313
    ]
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 1313,
    "end": 1317,
    "range": [
      1313,
      1317
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1317,
    "end": 1318,
    "range": [
      1317,
      1318
    ]
  },
  {
    "type": "Identifier",
    "value": "obj6",
    "start": 1323,
    "end": 1327,
    "range": [
      1323,
      1327
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1327,
    "end": 1328,
    "range": [
      1327,
      1328
    ]
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 1328,
    "end": 1332,
    "range": [
      1328,
      1332
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1332,
    "end": 1333,
    "range": [
      1332,
      1333
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1334,
    "end": 1335,
    "range": [
      1334,
      1335
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1365,
    "end": 1374,
    "range": [
      1365,
      1374
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1375,
    "end": 1376,
    "range": [
      1375,
      1376
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1377,
    "end": 1378,
    "range": [
      1377,
      1378
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1383,
    "end": 1386,
    "range": [
      1383,
      1386
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1386,
    "end": 1387,
    "range": [
      1386,
      1387
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1388,
    "end": 1394,
    "range": [
      1388,
      1394
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1394,
    "end": 1395,
    "range": [
      1394,
      1395
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1396,
    "end": 1397,
    "range": [
      1396,
      1397
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1398,
    "end": 1405,
    "range": [
      1398,
      1405
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1406,
    "end": 1409,
    "range": [
      1406,
      1409
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1410,
    "end": 1411,
    "range": [
      1410,
      1411
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1411,
    "end": 1412,
    "range": [
      1411,
      1412
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1413,
    "end": 1414,
    "range": [
      1413,
      1414
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1419,
    "end": 1422,
    "range": [
      1419,
      1422
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1423,
    "end": 1424,
    "range": [
      1423,
      1424
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1424,
    "end": 1425,
    "range": [
      1424,
      1425
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1425,
    "end": 1426,
    "range": [
      1425,
      1426
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1427,
    "end": 1428,
    "range": [
      1427,
      1428
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1428,
    "end": 1429,
    "range": [
      1428,
      1429
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1434,
    "end": 1435,
    "range": [
      1434,
      1435
    ]
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 1435,
    "end": 1441,
    "range": [
      1435,
      1441
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1441,
    "end": 1442,
    "range": [
      1441,
      1442
    ]
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 1442,
    "end": 1453,
    "range": [
      1442,
      1453
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1453,
    "end": 1454,
    "range": [
      1453,
      1454
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1454,
    "end": 1455,
    "range": [
      1454,
      1455
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1455,
    "end": 1460,
    "range": [
      1455,
      1460
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1460,
    "end": 1461,
    "range": [
      1460,
      1461
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1462,
    "end": 1469,
    "range": [
      1462,
      1469
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1469,
    "end": 1470,
    "range": [
      1469,
      1470
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1470,
    "end": 1471,
    "range": [
      1470,
      1471
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1472,
    "end": 1477,
    "range": [
      1472,
      1477
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1478,
    "end": 1480,
    "range": [
      1478,
      1480
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1481,
    "end": 1482,
    "range": [
      1481,
      1482
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1482,
    "end": 1483,
    "range": [
      1482,
      1483
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1484,
    "end": 1485,
    "range": [
      1484,
      1485
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1485,
    "end": 1486,
    "range": [
      1485,
      1486
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1488,
    "end": 1491,
    "range": [
      1488,
      1491
    ]
  },
  {
    "type": "Identifier",
    "value": "obj7",
    "start": 1492,
    "end": 1496,
    "range": [
      1492,
      1496
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1496,
    "end": 1497,
    "range": [
      1496,
      1497
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1498,
    "end": 1499,
    "range": [
      1498,
      1499
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1500,
    "end": 1501,
    "range": [
      1500,
      1501
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1502,
    "end": 1508,
    "range": [
      1502,
      1508
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1508,
    "end": 1509,
    "range": [
      1508,
      1509
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1510,
    "end": 1512,
    "range": [
      1510,
      1512
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1513,
    "end": 1514,
    "range": [
      1513,
      1514
    ]
  },
  {
    "type": "Identifier",
    "value": "obj7",
    "start": 1514,
    "end": 1518,
    "range": [
      1514,
      1518
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1519,
    "end": 1529,
    "range": [
      1519,
      1529
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1530,
    "end": 1531,
    "range": [
      1530,
      1531
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1531,
    "end": 1532,
    "range": [
      1531,
      1532
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1533,
    "end": 1534,
    "range": [
      1533,
      1534
    ]
  },
  {
    "type": "Identifier",
    "value": "obj7",
    "start": 1557,
    "end": 1561,
    "range": [
      1557,
      1561
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1561,
    "end": 1562,
    "range": [
      1561,
      1562
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1562,
    "end": 1565,
    "range": [
      1562,
      1565
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1565,
    "end": 1566,
    "range": [
      1565,
      1566
    ]
  },
  {
    "type": "Identifier",
    "value": "obj7",
    "start": 1571,
    "end": 1575,
    "range": [
      1571,
      1575
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1575,
    "end": 1576,
    "range": [
      1575,
      1576
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1576,
    "end": 1579,
    "range": [
      1576,
      1579
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1579,
    "end": 1580,
    "range": [
      1579,
      1580
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1581,
    "end": 1582,
    "range": [
      1581,
      1582
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1584,
    "end": 1587,
    "range": [
      1584,
      1587
    ]
  },
  {
    "type": "Identifier",
    "value": "obj8",
    "start": 1588,
    "end": 1592,
    "range": [
      1588,
      1592
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1592,
    "end": 1593,
    "range": [
      1592,
      1593
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1594,
    "end": 1597,
    "range": [
      1594,
      1597
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1597,
    "end": 1598,
    "range": [
      1597,
      1598
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1599,
    "end": 1601,
    "range": [
      1599,
      1601
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1602,
    "end": 1603,
    "range": [
      1602,
      1603
    ]
  },
  {
    "type": "Identifier",
    "value": "obj8",
    "start": 1603,
    "end": 1607,
    "range": [
      1603,
      1607
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1608,
    "end": 1618,
    "range": [
      1608,
      1618
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1619,
    "end": 1620,
    "range": [
      1619,
      1620
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1620,
    "end": 1621,
    "range": [
      1620,
      1621
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1622,
    "end": 1623,
    "range": [
      1622,
      1623
    ]
  },
  {
    "type": "Identifier",
    "value": "obj8",
    "start": 1628,
    "end": 1632,
    "range": [
      1628,
      1632
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1632,
    "end": 1633,
    "range": [
      1632,
      1633
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1633,
    "end": 1636,
    "range": [
      1633,
      1636
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1636,
    "end": 1637,
    "range": [
      1636,
      1637
    ]
  },
  {
    "type": "Identifier",
    "value": "obj8",
    "start": 1642,
    "end": 1646,
    "range": [
      1642,
      1646
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1646,
    "end": 1647,
    "range": [
      1646,
      1647
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1647,
    "end": 1650,
    "range": [
      1647,
      1650
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1650,
    "end": 1651,
    "range": [
      1650,
      1651
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1652,
    "end": 1653,
    "range": [
      1652,
      1653
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1706,
    "end": 1715,
    "range": [
      1706,
      1715
    ]
  },
  {
    "type": "Identifier",
    "value": "EConstructor",
    "start": 1716,
    "end": 1728,
    "range": [
      1716,
      1728
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1729,
    "end": 1730,
    "range": [
      1729,
      1730
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1735,
    "end": 1738,
    "range": [
      1735,
      1738
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1739,
    "end": 1740,
    "range": [
      1739,
      1740
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1740,
    "end": 1741,
    "range": [
      1740,
      1741
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1741,
    "end": 1742,
    "range": [
      1741,
      1742
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 1743,
    "end": 1745,
    "range": [
      1743,
      1745
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1746,
    "end": 1747,
    "range": [
      1746,
      1747
    ]
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 1748,
    "end": 1750,
    "range": [
      1748,
      1750
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1750,
    "end": 1751,
    "range": [
      1750,
      1751
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1756,
    "end": 1757,
    "range": [
      1756,
      1757
    ]
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 1757,
    "end": 1763,
    "range": [
      1757,
      1763
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1763,
    "end": 1764,
    "range": [
      1763,
      1764
    ]
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 1764,
    "end": 1775,
    "range": [
      1764,
      1775
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1775,
    "end": 1776,
    "range": [
      1775,
      1776
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1776,
    "end": 1777,
    "range": [
      1776,
      1777
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1777,
    "end": 1782,
    "range": [
      1777,
      1782
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1782,
    "end": 1783,
    "range": [
      1782,
      1783
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1784,
    "end": 1791,
    "range": [
      1784,
      1791
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1791,
    "end": 1792,
    "range": [
      1791,
      1792
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1792,
    "end": 1793,
    "range": [
      1792,
      1793
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1794,
    "end": 1799,
    "range": [
      1794,
      1799
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1800,
    "end": 1802,
    "range": [
      1800,
      1802
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 1803,
    "end": 1805,
    "range": [
      1803,
      1805
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1806,
    "end": 1807,
    "range": [
      1806,
      1807
    ]
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 1808,
    "end": 1810,
    "range": [
      1808,
      1810
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1810,
    "end": 1811,
    "range": [
      1810,
      1811
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1812,
    "end": 1813,
    "range": [
      1812,
      1813
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1814,
    "end": 1823,
    "range": [
      1814,
      1823
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 1824,
    "end": 1826,
    "range": [
      1824,
      1826
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1827,
    "end": 1828,
    "range": [
      1827,
      1828
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1833,
    "end": 1836,
    "range": [
      1833,
      1836
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1836,
    "end": 1837,
    "range": [
      1836,
      1837
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1838,
    "end": 1844,
    "range": [
      1838,
      1844
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1844,
    "end": 1845,
    "range": [
      1844,
      1845
    ]
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 1850,
    "end": 1854,
    "range": [
      1850,
      1854
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1854,
    "end": 1855,
    "range": [
      1854,
      1855
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1856,
    "end": 1862,
    "range": [
      1856,
      1862
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1862,
    "end": 1863,
    "range": [
      1862,
      1863
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1864,
    "end": 1865,
    "range": [
      1864,
      1865
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1866,
    "end": 1875,
    "range": [
      1866,
      1875
    ]
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 1876,
    "end": 1878,
    "range": [
      1876,
      1878
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1879,
    "end": 1880,
    "range": [
      1879,
      1880
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1885,
    "end": 1888,
    "range": [
      1885,
      1888
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1888,
    "end": 1889,
    "range": [
      1888,
      1889
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1890,
    "end": 1896,
    "range": [
      1890,
      1896
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1896,
    "end": 1897,
    "range": [
      1896,
      1897
    ]
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 1902,
    "end": 1906,
    "range": [
      1902,
      1906
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1906,
    "end": 1907,
    "range": [
      1906,
      1907
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1908,
    "end": 1914,
    "range": [
      1908,
      1914
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1914,
    "end": 1915,
    "range": [
      1914,
      1915
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1916,
    "end": 1917,
    "range": [
      1916,
      1917
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1918,
    "end": 1925,
    "range": [
      1918,
      1925
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1926,
    "end": 1929,
    "range": [
      1926,
      1929
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1930,
    "end": 1931,
    "range": [
      1930,
      1931
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1931,
    "end": 1932,
    "range": [
      1931,
      1932
    ]
  },
  {
    "type": "Identifier",
    "value": "EConstructor",
    "start": 1933,
    "end": 1945,
    "range": [
      1933,
      1945
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1945,
    "end": 1946,
    "range": [
      1945,
      1946
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1948,
    "end": 1951,
    "range": [
      1948,
      1951
    ]
  },
  {
    "type": "Identifier",
    "value": "obj9",
    "start": 1952,
    "end": 1956,
    "range": [
      1952,
      1956
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1956,
    "end": 1957,
    "range": [
      1956,
      1957
    ]
  },
  {
    "type": "Identifier",
    "value": "E1",
    "start": 1958,
    "end": 1960,
    "range": [
      1958,
      1960
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1961,
    "end": 1962,
    "range": [
      1961,
      1962
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1963,
    "end": 1964,
    "range": [
      1963,
      1964
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1964,
    "end": 1965,
    "range": [
      1964,
      1965
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1966,
    "end": 1968,
    "range": [
      1966,
      1968
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1969,
    "end": 1970,
    "range": [
      1969,
      1970
    ]
  },
  {
    "type": "Identifier",
    "value": "obj9",
    "start": 1970,
    "end": 1974,
    "range": [
      1970,
      1974
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 1975,
    "end": 1985,
    "range": [
      1975,
      1985
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1986,
    "end": 1987,
    "range": [
      1986,
      1987
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1987,
    "end": 1988,
    "range": [
      1987,
      1988
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1989,
    "end": 1990,
    "range": [
      1989,
      1990
    ]
  },
  {
    "type": "Identifier",
    "value": "obj9",
    "start": 2013,
    "end": 2017,
    "range": [
      2013,
      2017
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2017,
    "end": 2018,
    "range": [
      2017,
      2018
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2018,
    "end": 2021,
    "range": [
      2018,
      2021
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2021,
    "end": 2022,
    "range": [
      2021,
      2022
    ]
  },
  {
    "type": "Identifier",
    "value": "obj9",
    "start": 2027,
    "end": 2031,
    "range": [
      2027,
      2031
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2031,
    "end": 2032,
    "range": [
      2031,
      2032
    ]
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 2032,
    "end": 2036,
    "range": [
      2032,
      2036
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2036,
    "end": 2037,
    "range": [
      2036,
      2037
    ]
  },
  {
    "type": "Identifier",
    "value": "obj9",
    "start": 2042,
    "end": 2046,
    "range": [
      2042,
      2046
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2046,
    "end": 2047,
    "range": [
      2046,
      2047
    ]
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 2047,
    "end": 2051,
    "range": [
      2047,
      2051
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2051,
    "end": 2052,
    "range": [
      2051,
      2052
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2053,
    "end": 2054,
    "range": [
      2053,
      2054
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2056,
    "end": 2059,
    "range": [
      2056,
      2059
    ]
  },
  {
    "type": "Identifier",
    "value": "obj10",
    "start": 2060,
    "end": 2065,
    "range": [
      2060,
      2065
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2065,
    "end": 2066,
    "range": [
      2065,
      2066
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2067,
    "end": 2070,
    "range": [
      2067,
      2070
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2070,
    "end": 2071,
    "range": [
      2070,
      2071
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2072,
    "end": 2074,
    "range": [
      2072,
      2074
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2075,
    "end": 2076,
    "range": [
      2075,
      2076
    ]
  },
  {
    "type": "Identifier",
    "value": "obj10",
    "start": 2076,
    "end": 2081,
    "range": [
      2076,
      2081
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2082,
    "end": 2092,
    "range": [
      2082,
      2092
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2093,
    "end": 2094,
    "range": [
      2093,
      2094
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2094,
    "end": 2095,
    "range": [
      2094,
      2095
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2096,
    "end": 2097,
    "range": [
      2096,
      2097
    ]
  },
  {
    "type": "Identifier",
    "value": "obj10",
    "start": 2102,
    "end": 2107,
    "range": [
      2102,
      2107
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2107,
    "end": 2108,
    "range": [
      2107,
      2108
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2108,
    "end": 2111,
    "range": [
      2108,
      2111
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2111,
    "end": 2112,
    "range": [
      2111,
      2112
    ]
  },
  {
    "type": "Identifier",
    "value": "obj10",
    "start": 2117,
    "end": 2122,
    "range": [
      2117,
      2122
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2122,
    "end": 2123,
    "range": [
      2122,
      2123
    ]
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 2123,
    "end": 2127,
    "range": [
      2123,
      2127
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2127,
    "end": 2128,
    "range": [
      2127,
      2128
    ]
  },
  {
    "type": "Identifier",
    "value": "obj10",
    "start": 2133,
    "end": 2138,
    "range": [
      2133,
      2138
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2138,
    "end": 2139,
    "range": [
      2138,
      2139
    ]
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 2139,
    "end": 2143,
    "range": [
      2139,
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
    "type": "Punctuator",
    "value": "}",
    "start": 2145,
    "end": 2146,
    "range": [
      2145,
      2146
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2190,
    "end": 2199,
    "range": [
      2190,
      2199
    ]
  },
  {
    "type": "Identifier",
    "value": "FConstructor",
    "start": 2200,
    "end": 2212,
    "range": [
      2200,
      2212
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2213,
    "end": 2214,
    "range": [
      2213,
      2214
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2219,
    "end": 2222,
    "range": [
      2219,
      2222
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2223,
    "end": 2224,
    "range": [
      2223,
      2224
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2224,
    "end": 2225,
    "range": [
      2224,
      2225
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2225,
    "end": 2226,
    "range": [
      2225,
      2226
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2227,
    "end": 2230,
    "range": [
      2227,
      2230
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2230,
    "end": 2231,
    "range": [
      2230,
      2231
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2236,
    "end": 2237,
    "range": [
      2236,
      2237
    ]
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 2237,
    "end": 2243,
    "range": [
      2237,
      2243
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2243,
    "end": 2244,
    "range": [
      2243,
      2244
    ]
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 2244,
    "end": 2255,
    "range": [
      2244,
      2255
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2255,
    "end": 2256,
    "range": [
      2255,
      2256
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2256,
    "end": 2257,
    "range": [
      2256,
      2257
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2257,
    "end": 2262,
    "range": [
      2257,
      2262
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2262,
    "end": 2263,
    "range": [
      2262,
      2263
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2264,
    "end": 2271,
    "range": [
      2264,
      2271
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2271,
    "end": 2272,
    "range": [
      2271,
      2272
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2272,
    "end": 2273,
    "range": [
      2272,
      2273
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2274,
    "end": 2279,
    "range": [
      2274,
      2279
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 2280,
    "end": 2282,
    "range": [
      2280,
      2282
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2283,
    "end": 2286,
    "range": [
      2283,
      2286
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2286,
    "end": 2287,
    "range": [
      2286,
      2287
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2288,
    "end": 2289,
    "range": [
      2288,
      2289
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2290,
    "end": 2299,
    "range": [
      2290,
      2299
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2300,
    "end": 2301,
    "range": [
      2300,
      2301
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2302,
    "end": 2303,
    "range": [
      2302,
      2303
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2308,
    "end": 2311,
    "range": [
      2308,
      2311
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2311,
    "end": 2312,
    "range": [
      2311,
      2312
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2313,
    "end": 2319,
    "range": [
      2313,
      2319
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2319,
    "end": 2320,
    "range": [
      2319,
      2320
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2325,
    "end": 2328,
    "range": [
      2325,
      2328
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2328,
    "end": 2329,
    "range": [
      2328,
      2329
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2330,
    "end": 2336,
    "range": [
      2330,
      2336
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2336,
    "end": 2337,
    "range": [
      2336,
      2337
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2338,
    "end": 2339,
    "range": [
      2338,
      2339
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2340,
    "end": 2347,
    "range": [
      2340,
      2347
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2348,
    "end": 2351,
    "range": [
      2348,
      2351
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2352,
    "end": 2353,
    "range": [
      2352,
      2353
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2353,
    "end": 2354,
    "range": [
      2353,
      2354
    ]
  },
  {
    "type": "Identifier",
    "value": "FConstructor",
    "start": 2355,
    "end": 2367,
    "range": [
      2355,
      2367
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2367,
    "end": 2368,
    "range": [
      2367,
      2368
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2370,
    "end": 2373,
    "range": [
      2370,
      2373
    ]
  },
  {
    "type": "Identifier",
    "value": "obj11",
    "start": 2374,
    "end": 2379,
    "range": [
      2374,
      2379
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2379,
    "end": 2380,
    "range": [
      2379,
      2380
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2381,
    "end": 2382,
    "range": [
      2381,
      2382
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2383,
    "end": 2384,
    "range": [
      2383,
      2384
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2385,
    "end": 2391,
    "range": [
      2385,
      2391
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2391,
    "end": 2392,
    "range": [
      2391,
      2392
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2393,
    "end": 2395,
    "range": [
      2393,
      2395
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2396,
    "end": 2397,
    "range": [
      2396,
      2397
    ]
  },
  {
    "type": "Identifier",
    "value": "obj11",
    "start": 2397,
    "end": 2402,
    "range": [
      2397,
      2402
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2403,
    "end": 2413,
    "range": [
      2403,
      2413
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2414,
    "end": 2415,
    "range": [
      2414,
      2415
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2415,
    "end": 2416,
    "range": [
      2415,
      2416
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2417,
    "end": 2418,
    "range": [
      2417,
      2418
    ]
  },
  {
    "type": "Identifier",
    "value": "obj11",
    "start": 2481,
    "end": 2486,
    "range": [
      2481,
      2486
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2486,
    "end": 2487,
    "range": [
      2486,
      2487
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2487,
    "end": 2490,
    "range": [
      2487,
      2490
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2490,
    "end": 2491,
    "range": [
      2490,
      2491
    ]
  },
  {
    "type": "Identifier",
    "value": "obj11",
    "start": 2496,
    "end": 2501,
    "range": [
      2496,
      2501
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2501,
    "end": 2502,
    "range": [
      2501,
      2502
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2502,
    "end": 2505,
    "range": [
      2502,
      2505
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2505,
    "end": 2506,
    "range": [
      2505,
      2506
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2507,
    "end": 2508,
    "range": [
      2507,
      2508
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2510,
    "end": 2513,
    "range": [
      2510,
      2513
    ]
  },
  {
    "type": "Identifier",
    "value": "obj12",
    "start": 2514,
    "end": 2519,
    "range": [
      2514,
      2519
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2519,
    "end": 2520,
    "range": [
      2519,
      2520
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2521,
    "end": 2524,
    "range": [
      2521,
      2524
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2524,
    "end": 2525,
    "range": [
      2524,
      2525
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2526,
    "end": 2528,
    "range": [
      2526,
      2528
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2529,
    "end": 2530,
    "range": [
      2529,
      2530
    ]
  },
  {
    "type": "Identifier",
    "value": "obj12",
    "start": 2530,
    "end": 2535,
    "range": [
      2530,
      2535
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2536,
    "end": 2546,
    "range": [
      2536,
      2546
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2547,
    "end": 2548,
    "range": [
      2547,
      2548
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2548,
    "end": 2549,
    "range": [
      2548,
      2549
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2550,
    "end": 2551,
    "range": [
      2550,
      2551
    ]
  },
  {
    "type": "Identifier",
    "value": "obj12",
    "start": 2556,
    "end": 2561,
    "range": [
      2556,
      2561
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2561,
    "end": 2562,
    "range": [
      2561,
      2562
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2562,
    "end": 2565,
    "range": [
      2562,
      2565
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2565,
    "end": 2566,
    "range": [
      2565,
      2566
    ]
  },
  {
    "type": "Identifier",
    "value": "obj12",
    "start": 2571,
    "end": 2576,
    "range": [
      2571,
      2576
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2576,
    "end": 2577,
    "range": [
      2576,
      2577
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2577,
    "end": 2580,
    "range": [
      2577,
      2580
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2580,
    "end": 2581,
    "range": [
      2580,
      2581
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2582,
    "end": 2583,
    "range": [
      2582,
      2583
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2650,
    "end": 2659,
    "range": [
      2650,
      2659
    ]
  },
  {
    "type": "Identifier",
    "value": "GConstructor",
    "start": 2660,
    "end": 2672,
    "range": [
      2660,
      2672
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2673,
    "end": 2674,
    "range": [
      2673,
      2674
    ]
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 2679,
    "end": 2688,
    "range": [
      2679,
      2688
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2688,
    "end": 2689,
    "range": [
      2688,
      2689
    ]
  },
  {
    "type": "Identifier",
    "value": "G1",
    "start": 2690,
    "end": 2692,
    "range": [
      2690,
      2692
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2692,
    "end": 2693,
    "range": [
      2692,
      2693
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2715,
    "end": 2718,
    "range": [
      2715,
      2718
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2719,
    "end": 2720,
    "range": [
      2719,
      2720
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2720,
    "end": 2721,
    "range": [
      2720,
      2721
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2721,
    "end": 2722,
    "range": [
      2721,
      2722
    ]
  },
  {
    "type": "Identifier",
    "value": "G2",
    "start": 2723,
    "end": 2725,
    "range": [
      2723,
      2725
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2725,
    "end": 2726,
    "range": [
      2725,
      2726
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2750,
    "end": 2751,
    "range": [
      2750,
      2751
    ]
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 2751,
    "end": 2757,
    "range": [
      2751,
      2757
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2757,
    "end": 2758,
    "range": [
      2757,
      2758
    ]
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 2758,
    "end": 2769,
    "range": [
      2758,
      2769
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2769,
    "end": 2770,
    "range": [
      2769,
      2770
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2770,
    "end": 2771,
    "range": [
      2770,
      2771
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2771,
    "end": 2776,
    "range": [
      2771,
      2776
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2776,
    "end": 2777,
    "range": [
      2776,
      2777
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2778,
    "end": 2785,
    "range": [
      2778,
      2785
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2785,
    "end": 2786,
    "range": [
      2785,
      2786
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2786,
    "end": 2787,
    "range": [
      2786,
      2787
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2788,
    "end": 2793,
    "range": [
      2788,
      2793
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 2794,
    "end": 2796,
    "range": [
      2794,
      2796
    ]
  },
  {
    "type": "Identifier",
    "value": "G1",
    "start": 2797,
    "end": 2799,
    "range": [
      2797,
      2799
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2799,
    "end": 2800,
    "range": [
      2799,
      2800
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2823,
    "end": 2824,
    "range": [
      2823,
      2824
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2825,
    "end": 2834,
    "range": [
      2825,
      2834
    ]
  },
  {
    "type": "Identifier",
    "value": "G1",
    "start": 2835,
    "end": 2837,
    "range": [
      2835,
      2837
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2838,
    "end": 2839,
    "range": [
      2838,
      2839
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 2844,
    "end": 2848,
    "range": [
      2844,
      2848
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2848,
    "end": 2849,
    "range": [
      2848,
      2849
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2850,
    "end": 2856,
    "range": [
      2850,
      2856
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2856,
    "end": 2857,
    "range": [
      2856,
      2857
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2858,
    "end": 2859,
    "range": [
      2858,
      2859
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2860,
    "end": 2869,
    "range": [
      2860,
      2869
    ]
  },
  {
    "type": "Identifier",
    "value": "G2",
    "start": 2870,
    "end": 2872,
    "range": [
      2870,
      2872
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2873,
    "end": 2874,
    "range": [
      2873,
      2874
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 2879,
    "end": 2883,
    "range": [
      2879,
      2883
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2883,
    "end": 2884,
    "range": [
      2883,
      2884
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2885,
    "end": 2892,
    "range": [
      2885,
      2892
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2892,
    "end": 2893,
    "range": [
      2892,
      2893
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2894,
    "end": 2895,
    "range": [
      2894,
      2895
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2896,
    "end": 2903,
    "range": [
      2896,
      2903
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2904,
    "end": 2907,
    "range": [
      2904,
      2907
    ]
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 2908,
    "end": 2909,
    "range": [
      2908,
      2909
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2909,
    "end": 2910,
    "range": [
      2909,
      2910
    ]
  },
  {
    "type": "Identifier",
    "value": "GConstructor",
    "start": 2911,
    "end": 2923,
    "range": [
      2911,
      2923
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2923,
    "end": 2924,
    "range": [
      2923,
      2924
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2926,
    "end": 2929,
    "range": [
      2926,
      2929
    ]
  },
  {
    "type": "Identifier",
    "value": "obj13",
    "start": 2930,
    "end": 2935,
    "range": [
      2930,
      2935
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2935,
    "end": 2936,
    "range": [
      2935,
      2936
    ]
  },
  {
    "type": "Identifier",
    "value": "G1",
    "start": 2937,
    "end": 2939,
    "range": [
      2937,
      2939
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2940,
    "end": 2941,
    "range": [
      2940,
      2941
    ]
  },
  {
    "type": "Identifier",
    "value": "G2",
    "start": 2942,
    "end": 2944,
    "range": [
      2942,
      2944
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2944,
    "end": 2945,
    "range": [
      2944,
      2945
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2946,
    "end": 2948,
    "range": [
      2946,
      2948
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2949,
    "end": 2950,
    "range": [
      2949,
      2950
    ]
  },
  {
    "type": "Identifier",
    "value": "obj13",
    "start": 2950,
    "end": 2955,
    "range": [
      2950,
      2955
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 2956,
    "end": 2966,
    "range": [
      2956,
      2966
    ]
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 2967,
    "end": 2968,
    "range": [
      2967,
      2968
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2968,
    "end": 2969,
    "range": [
      2968,
      2969
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2970,
    "end": 2971,
    "range": [
      2970,
      2971
    ]
  },
  {
    "type": "Identifier",
    "value": "obj13",
    "start": 3036,
    "end": 3041,
    "range": [
      3036,
      3041
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3041,
    "end": 3042,
    "range": [
      3041,
      3042
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 3042,
    "end": 3046,
    "range": [
      3042,
      3046
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3046,
    "end": 3047,
    "range": [
      3046,
      3047
    ]
  },
  {
    "type": "Identifier",
    "value": "obj13",
    "start": 3052,
    "end": 3057,
    "range": [
      3052,
      3057
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3057,
    "end": 3058,
    "range": [
      3057,
      3058
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 3058,
    "end": 3062,
    "range": [
      3058,
      3062
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3062,
    "end": 3063,
    "range": [
      3062,
      3063
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3064,
    "end": 3065,
    "range": [
      3064,
      3065
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3067,
    "end": 3070,
    "range": [
      3067,
      3070
    ]
  },
  {
    "type": "Identifier",
    "value": "obj14",
    "start": 3071,
    "end": 3076,
    "range": [
      3071,
      3076
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3076,
    "end": 3077,
    "range": [
      3076,
      3077
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3078,
    "end": 3081,
    "range": [
      3078,
      3081
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3081,
    "end": 3082,
    "range": [
      3081,
      3082
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3083,
    "end": 3085,
    "range": [
      3083,
      3085
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3086,
    "end": 3087,
    "range": [
      3086,
      3087
    ]
  },
  {
    "type": "Identifier",
    "value": "obj14",
    "start": 3087,
    "end": 3092,
    "range": [
      3087,
      3092
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 3093,
    "end": 3103,
    "range": [
      3093,
      3103
    ]
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 3104,
    "end": 3105,
    "range": [
      3104,
      3105
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3105,
    "end": 3106,
    "range": [
      3105,
      3106
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3107,
    "end": 3108,
    "range": [
      3107,
      3108
    ]
  },
  {
    "type": "Identifier",
    "value": "obj14",
    "start": 3113,
    "end": 3118,
    "range": [
      3113,
      3118
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3118,
    "end": 3119,
    "range": [
      3118,
      3119
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 3119,
    "end": 3123,
    "range": [
      3119,
      3123
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3123,
    "end": 3124,
    "range": [
      3123,
      3124
    ]
  },
  {
    "type": "Identifier",
    "value": "obj14",
    "start": 3129,
    "end": 3134,
    "range": [
      3129,
      3134
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3134,
    "end": 3135,
    "range": [
      3134,
      3135
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 3135,
    "end": 3139,
    "range": [
      3135,
      3139
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3139,
    "end": 3140,
    "range": [
      3139,
      3140
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3141,
    "end": 3142,
    "range": [
      3141,
      3142
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3189,
    "end": 3198,
    "range": [
      3189,
      3198
    ]
  },
  {
    "type": "Identifier",
    "value": "HConstructor",
    "start": 3199,
    "end": 3211,
    "range": [
      3199,
      3211
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3212,
    "end": 3213,
    "range": [
      3212,
      3213
    ]
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 3218,
    "end": 3227,
    "range": [
      3218,
      3227
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3227,
    "end": 3228,
    "range": [
      3227,
      3228
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3229,
    "end": 3232,
    "range": [
      3229,
      3232
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3232,
    "end": 3233,
    "range": [
      3232,
      3233
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3322,
    "end": 3325,
    "range": [
      3322,
      3325
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3326,
    "end": 3327,
    "range": [
      3326,
      3327
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3327,
    "end": 3328,
    "range": [
      3327,
      3328
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3328,
    "end": 3329,
    "range": [
      3328,
      3329
    ]
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 3330,
    "end": 3331,
    "range": [
      3330,
      3331
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3331,
    "end": 3332,
    "range": [
      3331,
      3332
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3358,
    "end": 3359,
    "range": [
      3358,
      3359
    ]
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 3359,
    "end": 3365,
    "range": [
      3359,
      3365
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3365,
    "end": 3366,
    "range": [
      3365,
      3366
    ]
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 3366,
    "end": 3377,
    "range": [
      3366,
      3377
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3377,
    "end": 3378,
    "range": [
      3377,
      3378
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3378,
    "end": 3379,
    "range": [
      3378,
      3379
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3379,
    "end": 3384,
    "range": [
      3379,
      3384
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3384,
    "end": 3385,
    "range": [
      3384,
      3385
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 3386,
    "end": 3393,
    "range": [
      3386,
      3393
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3393,
    "end": 3394,
    "range": [
      3393,
      3394
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3394,
    "end": 3395,
    "range": [
      3394,
      3395
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3396,
    "end": 3401,
    "range": [
      3396,
      3401
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 3402,
    "end": 3404,
    "range": [
      3402,
      3404
    ]
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 3405,
    "end": 3406,
    "range": [
      3405,
      3406
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3406,
    "end": 3407,
    "range": [
      3406,
      3407
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3430,
    "end": 3431,
    "range": [
      3430,
      3431
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3432,
    "end": 3441,
    "range": [
      3432,
      3441
    ]
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 3442,
    "end": 3443,
    "range": [
      3442,
      3443
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3444,
    "end": 3445,
    "range": [
      3444,
      3445
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3450,
    "end": 3453,
    "range": [
      3450,
      3453
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3453,
    "end": 3454,
    "range": [
      3453,
      3454
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3455,
    "end": 3461,
    "range": [
      3455,
      3461
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3461,
    "end": 3462,
    "range": [
      3461,
      3462
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3463,
    "end": 3464,
    "range": [
      3463,
      3464
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3465,
    "end": 3472,
    "range": [
      3465,
      3472
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3473,
    "end": 3476,
    "range": [
      3473,
      3476
    ]
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 3477,
    "end": 3478,
    "range": [
      3477,
      3478
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3478,
    "end": 3479,
    "range": [
      3478,
      3479
    ]
  },
  {
    "type": "Identifier",
    "value": "HConstructor",
    "start": 3480,
    "end": 3492,
    "range": [
      3480,
      3492
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3492,
    "end": 3493,
    "range": [
      3492,
      3493
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3495,
    "end": 3498,
    "range": [
      3495,
      3498
    ]
  },
  {
    "type": "Identifier",
    "value": "obj15",
    "start": 3499,
    "end": 3504,
    "range": [
      3499,
      3504
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3504,
    "end": 3505,
    "range": [
      3504,
      3505
    ]
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 3506,
    "end": 3507,
    "range": [
      3506,
      3507
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3508,
    "end": 3509,
    "range": [
      3508,
      3509
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3510,
    "end": 3516,
    "range": [
      3510,
      3516
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3516,
    "end": 3517,
    "range": [
      3516,
      3517
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3518,
    "end": 3520,
    "range": [
      3518,
      3520
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3521,
    "end": 3522,
    "range": [
      3521,
      3522
    ]
  },
  {
    "type": "Identifier",
    "value": "obj15",
    "start": 3522,
    "end": 3527,
    "range": [
      3522,
      3527
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 3528,
    "end": 3538,
    "range": [
      3528,
      3538
    ]
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 3539,
    "end": 3540,
    "range": [
      3539,
      3540
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3540,
    "end": 3541,
    "range": [
      3540,
      3541
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3542,
    "end": 3543,
    "range": [
      3542,
      3543
    ]
  },
  {
    "type": "Identifier",
    "value": "obj15",
    "start": 3566,
    "end": 3571,
    "range": [
      3566,
      3571
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3571,
    "end": 3572,
    "range": [
      3571,
      3572
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3572,
    "end": 3575,
    "range": [
      3572,
      3575
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3575,
    "end": 3576,
    "range": [
      3575,
      3576
    ]
  },
  {
    "type": "Identifier",
    "value": "obj15",
    "start": 3581,
    "end": 3586,
    "range": [
      3581,
      3586
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3586,
    "end": 3587,
    "range": [
      3586,
      3587
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3587,
    "end": 3590,
    "range": [
      3587,
      3590
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3590,
    "end": 3591,
    "range": [
      3590,
      3591
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3592,
    "end": 3593,
    "range": [
      3592,
      3593
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3595,
    "end": 3598,
    "range": [
      3595,
      3598
    ]
  },
  {
    "type": "Identifier",
    "value": "obj16",
    "start": 3599,
    "end": 3604,
    "range": [
      3599,
      3604
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3604,
    "end": 3605,
    "range": [
      3604,
      3605
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3606,
    "end": 3609,
    "range": [
      3606,
      3609
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3609,
    "end": 3610,
    "range": [
      3609,
      3610
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3611,
    "end": 3613,
    "range": [
      3611,
      3613
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3614,
    "end": 3615,
    "range": [
      3614,
      3615
    ]
  },
  {
    "type": "Identifier",
    "value": "obj16",
    "start": 3615,
    "end": 3620,
    "range": [
      3615,
      3620
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 3621,
    "end": 3631,
    "range": [
      3621,
      3631
    ]
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 3632,
    "end": 3633,
    "range": [
      3632,
      3633
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3633,
    "end": 3634,
    "range": [
      3633,
      3634
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3635,
    "end": 3636,
    "range": [
      3635,
      3636
    ]
  },
  {
    "type": "Identifier",
    "value": "obj16",
    "start": 3641,
    "end": 3646,
    "range": [
      3641,
      3646
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3646,
    "end": 3647,
    "range": [
      3646,
      3647
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 3647,
    "end": 3651,
    "range": [
      3647,
      3651
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3651,
    "end": 3652,
    "range": [
      3651,
      3652
    ]
  },
  {
    "type": "Identifier",
    "value": "obj16",
    "start": 3657,
    "end": 3662,
    "range": [
      3657,
      3662
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3662,
    "end": 3663,
    "range": [
      3662,
      3663
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 3663,
    "end": 3667,
    "range": [
      3663,
      3667
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3667,
    "end": 3668,
    "range": [
      3667,
      3668
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3669,
    "end": 3670,
    "range": [
      3669,
      3670
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3672,
    "end": 3675,
    "range": [
      3672,
      3675
    ]
  },
  {
    "type": "Identifier",
    "value": "obj17",
    "start": 3676,
    "end": 3681,
    "range": [
      3676,
      3681
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3681,
    "end": 3682,
    "range": [
      3681,
      3682
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3683,
    "end": 3686,
    "range": [
      3683,
      3686
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3686,
    "end": 3687,
    "range": [
      3686,
      3687
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3688,
    "end": 3690,
    "range": [
      3688,
      3690
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3691,
    "end": 3692,
    "range": [
      3691,
      3692
    ]
  },
  {
    "type": "Identifier",
    "value": "obj17",
    "start": 3692,
    "end": 3697,
    "range": [
      3692,
      3697
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 3698,
    "end": 3708,
    "range": [
      3698,
      3708
    ]
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 3709,
    "end": 3715,
    "range": [
      3709,
      3715
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3715,
    "end": 3716,
    "range": [
      3715,
      3716
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3717,
    "end": 3718,
    "range": [
      3717,
      3718
    ]
  },
  {
    "type": "Identifier",
    "value": "obj17",
    "start": 3767,
    "end": 3772,
    "range": [
      3767,
      3772
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3772,
    "end": 3773,
    "range": [
      3772,
      3773
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 3773,
    "end": 3777,
    "range": [
      3773,
      3777
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3777,
    "end": 3778,
    "range": [
      3777,
      3778
    ]
  },
  {
    "type": "Identifier",
    "value": "obj17",
    "start": 3783,
    "end": 3788,
    "range": [
      3783,
      3788
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3788,
    "end": 3789,
    "range": [
      3788,
      3789
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 3789,
    "end": 3793,
    "range": [
      3789,
      3793
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3793,
    "end": 3794,
    "range": [
      3793,
      3794
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3795,
    "end": 3796,
    "range": [
      3795,
      3796
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3798,
    "end": 3801,
    "range": [
      3798,
      3801
    ]
  },
  {
    "type": "Identifier",
    "value": "obj18",
    "start": 3802,
    "end": 3807,
    "range": [
      3802,
      3807
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3807,
    "end": 3808,
    "range": [
      3807,
      3808
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3809,
    "end": 3812,
    "range": [
      3809,
      3812
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3812,
    "end": 3813,
    "range": [
      3812,
      3813
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3814,
    "end": 3816,
    "range": [
      3814,
      3816
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3817,
    "end": 3818,
    "range": [
      3817,
      3818
    ]
  },
  {
    "type": "Identifier",
    "value": "obj18",
    "start": 3818,
    "end": 3823,
    "range": [
      3818,
      3823
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 3824,
    "end": 3834,
    "range": [
      3824,
      3834
    ]
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 3835,
    "end": 3843,
    "range": [
      3835,
      3843
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3843,
    "end": 3844,
    "range": [
      3843,
      3844
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3845,
    "end": 3846,
    "range": [
      3845,
      3846
    ]
  },
  {
    "type": "Identifier",
    "value": "obj18",
    "start": 3897,
    "end": 3902,
    "range": [
      3897,
      3902
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3902,
    "end": 3903,
    "range": [
      3902,
      3903
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 3903,
    "end": 3907,
    "range": [
      3903,
      3907
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3907,
    "end": 3908,
    "range": [
      3907,
      3908
    ]
  },
  {
    "type": "Identifier",
    "value": "obj18",
    "start": 3913,
    "end": 3918,
    "range": [
      3913,
      3918
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3918,
    "end": 3919,
    "range": [
      3918,
      3919
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 3919,
    "end": 3923,
    "range": [
      3919,
      3923
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3923,
    "end": 3924,
    "range": [
      3923,
      3924
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3925,
    "end": 3926,
    "range": [
      3925,
      3926
    ]
  }
]
```
