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
