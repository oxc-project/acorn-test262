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
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 24,
        "end": 25
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 34
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 36,
                "end": 42
              },
              "start": 34,
              "end": 42
            },
            "accessibility": null,
            "static": false,
            "start": 32,
            "end": 43
          }
        ],
        "start": 26,
        "end": 45
      },
      "declare": false,
      "start": 14,
      "end": 45
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 54
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 66,
            "end": 67
          },
          "typeArguments": null,
          "start": 66,
          "end": 67
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 76
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 78,
                "end": 84
              },
              "start": 76,
              "end": 84
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
            "start": 74,
            "end": 85
          }
        ],
        "start": 68,
        "end": 87
      },
      "abstract": false,
      "declare": false,
      "start": 47,
      "end": 87
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 96
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
              "start": 97,
              "end": 98
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 97,
            "end": 98
          }
        ],
        "start": 96,
        "end": 99
      },
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
              "name": "source",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 111
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
                  "start": 113,
                  "end": 114
                },
                "typeArguments": null,
                "start": 113,
                "end": 114
              },
              "start": 111,
              "end": 114
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
            "start": 105,
            "end": 115
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "recurse",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 127
            },
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
                  "start": 129,
                  "end": 130
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
                        "start": 131,
                        "end": 132
                      },
                      "typeArguments": null,
                      "start": 131,
                      "end": 132
                    }
                  ],
                  "start": 130,
                  "end": 133
                },
                "start": 129,
                "end": 133
              },
              "start": 127,
              "end": 133
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
            "start": 120,
            "end": 134
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "wrapped",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 146
            },
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
                  "start": 148,
                  "end": 149
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 150,
                        "end": 151
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
                              "start": 152,
                              "end": 153
                            },
                            "typeArguments": null,
                            "start": 152,
                            "end": 153
                          }
                        ],
                        "start": 151,
                        "end": 154
                      },
                      "start": 150,
                      "end": 154
                    }
                  ],
                  "start": 149,
                  "end": 155
                },
                "start": 148,
                "end": 155
              },
              "start": 146,
              "end": 155
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
            "start": 139,
            "end": 155
          }
        ],
        "start": 99,
        "end": 157
      },
      "abstract": false,
      "declare": false,
      "start": 89,
      "end": 157
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 168,
        "end": 169
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 173,
              "end": 179
            },
            "start": 171,
            "end": 179
          },
          "start": 170,
          "end": 179
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 182,
          "end": 188
        },
        "start": 180,
        "end": 188
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 198,
              "end": 200
            },
            "start": 191,
            "end": 201
          }
        ],
        "start": 189,
        "end": 203
      },
      "expression": false,
      "start": 159,
      "end": 203
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 215,
        "end": 216
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 236,
                "end": 237
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 248,
                      "end": 252
                    },
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
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 248,
                    "end": 261
                  }
                ],
                "start": 238,
                "end": 267
              },
              "abstract": false,
              "declare": false,
              "start": 230,
              "end": 267
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 223,
            "end": 267
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "F2",
                "optional": false,
                "typeAnnotation": null,
                "start": 289,
                "end": 291
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 295,
                      "end": 301
                    },
                    "start": 293,
                    "end": 301
                  },
                  "start": 292,
                  "end": 301
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 304,
                  "end": 310
                },
                "start": 302,
                "end": 310
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 320,
                          "end": 321
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 322,
                          "end": 330
                        },
                        "optional": false,
                        "computed": false,
                        "start": 320,
                        "end": 330
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 320,
                      "end": 332
                    },
                    "start": 313,
                    "end": 333
                  }
                ],
                "start": 311,
                "end": 335
              },
              "expression": false,
              "start": 280,
              "end": 335
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 273,
            "end": 335
          }
        ],
        "start": 217,
        "end": 337
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 205,
      "end": 337
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
            "name": "aNumber",
            "optional": false,
            "typeAnnotation": null,
            "start": 343,
            "end": 350
          },
          "init": {
            "type": "Literal",
            "value": 9.9,
            "raw": "9.9",
            "start": 353,
            "end": 356
          },
          "definite": false,
          "start": 343,
          "end": 356
        }
      ],
      "declare": false,
      "start": 339,
      "end": 357
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "aNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 364,
        "end": 371
      },
      "start": 358,
      "end": 372
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
            "name": "aString",
            "optional": false,
            "typeAnnotation": null,
            "start": 377,
            "end": 384
          },
          "init": {
            "type": "Literal",
            "value": "this is a string",
            "raw": "'this is a string'",
            "start": 387,
            "end": 405
          },
          "definite": false,
          "start": 377,
          "end": 405
        }
      ],
      "declare": false,
      "start": 373,
      "end": 406
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "aString",
        "optional": false,
        "typeAnnotation": null,
        "start": 413,
        "end": 420
      },
      "start": 407,
      "end": 421
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
            "name": "aDate",
            "optional": false,
            "typeAnnotation": null,
            "start": 426,
            "end": 431
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null,
              "start": 438,
              "end": 442
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 12,
                "raw": "12",
                "start": 443,
                "end": 445
              }
            ],
            "start": 434,
            "end": 446
          },
          "definite": false,
          "start": 426,
          "end": 446
        }
      ],
      "declare": false,
      "start": 422,
      "end": 447
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "aDate",
        "optional": false,
        "typeAnnotation": null,
        "start": 454,
        "end": 459
      },
      "start": 448,
      "end": 460
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
            "name": "anObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 465,
            "end": 473
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Object",
              "optional": false,
              "typeAnnotation": null,
              "start": 480,
              "end": 486
            },
            "typeArguments": null,
            "arguments": [],
            "start": 476,
            "end": 488
          },
          "definite": false,
          "start": 465,
          "end": 488
        }
      ],
      "declare": false,
      "start": 461,
      "end": 489
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "anObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 496,
        "end": 504
      },
      "start": 490,
      "end": 505
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
            "name": "anAny",
            "optional": false,
            "typeAnnotation": null,
            "start": 511,
            "end": 516
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 519,
            "end": 523
          },
          "definite": false,
          "start": 511,
          "end": 523
        }
      ],
      "declare": false,
      "start": 507,
      "end": 524
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "anAny",
        "optional": false,
        "typeAnnotation": null,
        "start": 531,
        "end": 536
      },
      "start": 525,
      "end": 537
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
            "name": "anOtherAny",
            "optional": false,
            "typeAnnotation": null,
            "start": 542,
            "end": 552
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 556,
              "end": 559
            },
            "expression": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 565,
                "end": 566
              },
              "typeArguments": null,
              "arguments": [],
              "start": 561,
              "end": 568
            },
            "start": 555,
            "end": 568
          },
          "definite": false,
          "start": 542,
          "end": 568
        }
      ],
      "declare": false,
      "start": 538,
      "end": 569
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "anOtherAny",
        "optional": false,
        "typeAnnotation": null,
        "start": 576,
        "end": 586
      },
      "start": 570,
      "end": 587
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
            "name": "anUndefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 592,
            "end": 603
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 606,
            "end": 615
          },
          "definite": false,
          "start": 592,
          "end": 615
        }
      ],
      "declare": false,
      "start": 588,
      "end": 616
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "anUndefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 623,
        "end": 634
      },
      "start": 617,
      "end": 635
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
            "name": "aClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 641,
            "end": 647
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 654,
              "end": 655
            },
            "typeArguments": null,
            "arguments": [],
            "start": 650,
            "end": 657
          },
          "definite": false,
          "start": 641,
          "end": 657
        }
      ],
      "declare": false,
      "start": 637,
      "end": 658
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "aClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 665,
        "end": 671
      },
      "start": 659,
      "end": 672
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
            "name": "aGenericClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 677,
            "end": 690
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 697,
              "end": 698
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 699,
                  "end": 705
                }
              ],
              "start": 698,
              "end": 706
            },
            "arguments": [],
            "start": 693,
            "end": 708
          },
          "definite": false,
          "start": 677,
          "end": 708
        }
      ],
      "declare": false,
      "start": 673,
      "end": 709
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "aGenericClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 716,
        "end": 729
      },
      "start": 710,
      "end": 730
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
            "name": "anObjectLiteral",
            "optional": false,
            "typeAnnotation": null,
            "start": 735,
            "end": 750
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
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 755,
                  "end": 757
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 759,
                  "end": 761
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 755,
                "end": 761
              }
            ],
            "start": 753,
            "end": 763
          },
          "definite": false,
          "start": 735,
          "end": 763
        }
      ],
      "declare": false,
      "start": 731,
      "end": 764
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "anObjectLiteral",
        "optional": false,
        "typeAnnotation": null,
        "start": 771,
        "end": 786
      },
      "start": 765,
      "end": 787
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
            "name": "aFunction",
            "optional": false,
            "typeAnnotation": null,
            "start": 793,
            "end": 802
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null,
            "start": 805,
            "end": 806
          },
          "definite": false,
          "start": 793,
          "end": 806
        }
      ],
      "declare": false,
      "start": 789,
      "end": 807
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "aFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 814,
        "end": 823
      },
      "start": 808,
      "end": 824
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "aFunction",
          "optional": false,
          "typeAnnotation": null,
          "start": 831,
          "end": 840
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 841,
            "end": 843
          }
        ],
        "optional": false,
        "start": 831,
        "end": 844
      },
      "start": 825,
      "end": 845
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
            "name": "aLambda",
            "optional": false,
            "typeAnnotation": null,
            "start": 850,
            "end": 857
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 861,
                "end": 862
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 867,
              "end": 868
            },
            "id": null,
            "generator": false,
            "start": 860,
            "end": 868
          },
          "definite": false,
          "start": 850,
          "end": 868
        }
      ],
      "declare": false,
      "start": 846,
      "end": 869
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "aLambda",
        "optional": false,
        "typeAnnotation": null,
        "start": 876,
        "end": 883
      },
      "start": 870,
      "end": 884
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "aLambda",
          "optional": false,
          "typeAnnotation": null,
          "start": 891,
          "end": 898
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 899,
            "end": 900
          }
        ],
        "optional": false,
        "start": 891,
        "end": 901
      },
      "start": 885,
      "end": 902
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
            "name": "aModule",
            "optional": false,
            "typeAnnotation": null,
            "start": 908,
            "end": 915
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 918,
            "end": 919
          },
          "definite": false,
          "start": 908,
          "end": 919
        }
      ],
      "declare": false,
      "start": 904,
      "end": 920
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "aModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 927,
        "end": 934
      },
      "start": 921,
      "end": 935
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 949,
          "end": 950
        },
        "prefix": true,
        "start": 942,
        "end": 950
      },
      "start": 936,
      "end": 951
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
            "name": "aClassInModule",
            "optional": false,
            "typeAnnotation": null,
            "start": 956,
            "end": 970
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 977,
                "end": 978
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 979,
                "end": 980
              },
              "optional": false,
              "computed": false,
              "start": 977,
              "end": 980
            },
            "typeArguments": null,
            "arguments": [],
            "start": 973,
            "end": 982
          },
          "definite": false,
          "start": 956,
          "end": 982
        }
      ],
      "declare": false,
      "start": 952,
      "end": 983
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "aClassInModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 990,
        "end": 1004
      },
      "start": 984,
      "end": 1005
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
            "name": "aFunctionInModule",
            "optional": false,
            "typeAnnotation": null,
            "start": 1010,
            "end": 1027
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 1030,
              "end": 1031
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "F2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1032,
              "end": 1034
            },
            "optional": false,
            "computed": false,
            "start": 1030,
            "end": 1034
          },
          "definite": false,
          "start": 1010,
          "end": 1034
        }
      ],
      "declare": false,
      "start": 1006,
      "end": 1035
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "aFunctionInModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 1042,
        "end": 1059
      },
      "start": 1036,
      "end": 1060
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
            "typeAnnotation": null,
            "start": 1119,
            "end": 1120
          },
          "init": null,
          "definite": false,
          "start": 1119,
          "end": 1120
        }
      ],
      "declare": false,
      "start": 1115,
      "end": 1121
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 1128,
        "end": 1129
      },
      "start": 1122,
      "end": 1130
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Literal",
        "value": 0,
        "raw": "0.0",
        "start": 1150,
        "end": 1153
      },
      "start": 1144,
      "end": 1154
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 1161,
        "end": 1166
      },
      "start": 1155,
      "end": 1167
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Literal",
        "value": null,
        "raw": "null",
        "start": 1174,
        "end": 1178
      },
      "start": 1168,
      "end": 1179
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "undefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 1186,
        "end": 1195
      },
      "start": 1180,
      "end": 1196
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Literal",
        "value": "a string",
        "raw": "'a string'",
        "start": 1203,
        "end": 1213
      },
      "start": 1197,
      "end": 1214
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "FunctionExpression",
        "id": null,
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": "a string",
                "raw": "'a string'",
                "start": 1242,
                "end": 1252
              },
              "start": 1235,
              "end": 1252
            }
          ],
          "start": 1233,
          "end": 1254
        },
        "expression": false,
        "start": 1221,
        "end": 1254
      },
      "start": 1215,
      "end": 1255
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "ArrowFunctionExpression",
        "expression": true,
        "async": false,
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
                "start": 1263,
                "end": 1264
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1263,
              "end": 1264
            }
          ],
          "start": 1262,
          "end": 1265
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
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
                  "start": 1268,
                  "end": 1269
                },
                "typeArguments": null,
                "start": 1268,
                "end": 1269
              },
              "start": 1267,
              "end": 1269
            },
            "start": 1266,
            "end": 1269
          }
        ],
        "returnType": null,
        "body": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 1274,
          "end": 1276
        },
        "id": null,
        "generator": false,
        "start": 1262,
        "end": 1276
      },
      "start": 1256,
      "end": 1277
    },
    {
      "type": "ThrowStatement",
      "argument": {
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
              "start": 1286,
              "end": 1287
            },
            "value": {
              "type": "Literal",
              "value": 12,
              "raw": "12",
              "start": 1289,
              "end": 1291
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1286,
            "end": 1291
          },
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1293,
              "end": 1294
            },
            "value": {
              "type": "Literal",
              "value": 13,
              "raw": "13",
              "start": 1296,
              "end": 1298
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1293,
            "end": 1298
          }
        ],
        "start": 1284,
        "end": 1300
      },
      "start": 1278,
      "end": 1301
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 1308,
        "end": 1310
      },
      "start": 1302,
      "end": 1311
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 1319,
            "end": 1322
          },
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 1325,
                "end": 1328
              }
            ],
            "start": 1324,
            "end": 1329
          }
        ],
        "start": 1318,
        "end": 1330
      },
      "start": 1312,
      "end": 1331
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Literal",
        "value": null,
        "raw": "/[a-z]/",
        "regex": {
          "pattern": "[a-z]",
          "flags": ""
        },
        "start": 1338,
        "end": 1345
      },
      "start": 1332,
      "end": 1346
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Date",
          "optional": false,
          "typeAnnotation": null,
          "start": 1357,
          "end": 1361
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1353,
        "end": 1363
      },
      "start": 1347,
      "end": 1364
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 1375,
          "end": 1376
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1371,
        "end": 1378
      },
      "start": 1365,
      "end": 1379
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Object",
          "optional": false,
          "typeAnnotation": null,
          "start": 1390,
          "end": 1396
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1386,
        "end": 1398
      },
      "start": 1380,
      "end": 1399
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 1410,
          "end": 1411
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 1412,
              "end": 1418
            }
          ],
          "start": 1411,
          "end": 1419
        },
        "arguments": [],
        "start": 1406,
        "end": 1421
      },
      "start": 1400,
      "end": 1422
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 14,
  "end": 1422
}
```
