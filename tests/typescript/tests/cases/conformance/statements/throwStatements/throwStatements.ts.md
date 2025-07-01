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
        "start": 212,
        "end": 213
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
                "start": 233,
                "end": 234
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
                      "start": 245,
                      "end": 249
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 251,
                        "end": 257
                      },
                      "start": 249,
                      "end": 257
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
                    "start": 245,
                    "end": 258
                  }
                ],
                "start": 235,
                "end": 264
              },
              "abstract": false,
              "declare": false,
              "start": 227,
              "end": 264
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 220,
            "end": 264
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
                "start": 286,
                "end": 288
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
                      "start": 292,
                      "end": 298
                    },
                    "start": 290,
                    "end": 298
                  },
                  "start": 289,
                  "end": 298
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 301,
                  "end": 307
                },
                "start": 299,
                "end": 307
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
                          "start": 317,
                          "end": 318
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 319,
                          "end": 327
                        },
                        "optional": false,
                        "computed": false,
                        "start": 317,
                        "end": 327
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 317,
                      "end": 329
                    },
                    "start": 310,
                    "end": 330
                  }
                ],
                "start": 308,
                "end": 332
              },
              "expression": false,
              "start": 277,
              "end": 332
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 270,
            "end": 332
          }
        ],
        "start": 214,
        "end": 334
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 205,
      "end": 334
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
            "start": 340,
            "end": 347
          },
          "init": {
            "type": "Literal",
            "value": 9.9,
            "raw": "9.9",
            "start": 350,
            "end": 353
          },
          "definite": false,
          "start": 340,
          "end": 353
        }
      ],
      "declare": false,
      "start": 336,
      "end": 354
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "aNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 361,
        "end": 368
      },
      "start": 355,
      "end": 369
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
            "start": 374,
            "end": 381
          },
          "init": {
            "type": "Literal",
            "value": "this is a string",
            "raw": "'this is a string'",
            "start": 384,
            "end": 402
          },
          "definite": false,
          "start": 374,
          "end": 402
        }
      ],
      "declare": false,
      "start": 370,
      "end": 403
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "aString",
        "optional": false,
        "typeAnnotation": null,
        "start": 410,
        "end": 417
      },
      "start": 404,
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
            "name": "aDate",
            "optional": false,
            "typeAnnotation": null,
            "start": 423,
            "end": 428
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null,
              "start": 435,
              "end": 439
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 12,
                "raw": "12",
                "start": 440,
                "end": 442
              }
            ],
            "start": 431,
            "end": 443
          },
          "definite": false,
          "start": 423,
          "end": 443
        }
      ],
      "declare": false,
      "start": 419,
      "end": 444
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "aDate",
        "optional": false,
        "typeAnnotation": null,
        "start": 451,
        "end": 456
      },
      "start": 445,
      "end": 457
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
            "start": 462,
            "end": 470
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Object",
              "optional": false,
              "typeAnnotation": null,
              "start": 477,
              "end": 483
            },
            "typeArguments": null,
            "arguments": [],
            "start": 473,
            "end": 485
          },
          "definite": false,
          "start": 462,
          "end": 485
        }
      ],
      "declare": false,
      "start": 458,
      "end": 486
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "anObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 493,
        "end": 501
      },
      "start": 487,
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
            "name": "anAny",
            "optional": false,
            "typeAnnotation": null,
            "start": 508,
            "end": 513
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 516,
            "end": 520
          },
          "definite": false,
          "start": 508,
          "end": 520
        }
      ],
      "declare": false,
      "start": 504,
      "end": 521
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "anAny",
        "optional": false,
        "typeAnnotation": null,
        "start": 528,
        "end": 533
      },
      "start": 522,
      "end": 534
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
            "start": 539,
            "end": 549
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 553,
              "end": 556
            },
            "expression": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 562,
                "end": 563
              },
              "typeArguments": null,
              "arguments": [],
              "start": 558,
              "end": 565
            },
            "start": 552,
            "end": 565
          },
          "definite": false,
          "start": 539,
          "end": 565
        }
      ],
      "declare": false,
      "start": 535,
      "end": 566
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "anOtherAny",
        "optional": false,
        "typeAnnotation": null,
        "start": 573,
        "end": 583
      },
      "start": 567,
      "end": 584
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
            "start": 589,
            "end": 600
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 603,
            "end": 612
          },
          "definite": false,
          "start": 589,
          "end": 612
        }
      ],
      "declare": false,
      "start": 585,
      "end": 613
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "anUndefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 620,
        "end": 631
      },
      "start": 614,
      "end": 632
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
            "start": 638,
            "end": 644
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 651,
              "end": 652
            },
            "typeArguments": null,
            "arguments": [],
            "start": 647,
            "end": 654
          },
          "definite": false,
          "start": 638,
          "end": 654
        }
      ],
      "declare": false,
      "start": 634,
      "end": 655
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "aClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 662,
        "end": 668
      },
      "start": 656,
      "end": 669
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
            "start": 674,
            "end": 687
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 694,
              "end": 695
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 696,
                  "end": 702
                }
              ],
              "start": 695,
              "end": 703
            },
            "arguments": [],
            "start": 690,
            "end": 705
          },
          "definite": false,
          "start": 674,
          "end": 705
        }
      ],
      "declare": false,
      "start": 670,
      "end": 706
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "aGenericClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 713,
        "end": 726
      },
      "start": 707,
      "end": 727
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
            "start": 732,
            "end": 747
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
                  "start": 752,
                  "end": 754
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 756,
                  "end": 758
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 752,
                "end": 758
              }
            ],
            "start": 750,
            "end": 760
          },
          "definite": false,
          "start": 732,
          "end": 760
        }
      ],
      "declare": false,
      "start": 728,
      "end": 761
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "anObjectLiteral",
        "optional": false,
        "typeAnnotation": null,
        "start": 768,
        "end": 783
      },
      "start": 762,
      "end": 784
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
            "start": 790,
            "end": 799
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null,
            "start": 802,
            "end": 803
          },
          "definite": false,
          "start": 790,
          "end": 803
        }
      ],
      "declare": false,
      "start": 786,
      "end": 804
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "aFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 811,
        "end": 820
      },
      "start": 805,
      "end": 821
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
          "start": 828,
          "end": 837
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 838,
            "end": 840
          }
        ],
        "optional": false,
        "start": 828,
        "end": 841
      },
      "start": 822,
      "end": 842
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
            "start": 847,
            "end": 854
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
                "start": 858,
                "end": 859
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 864,
              "end": 865
            },
            "id": null,
            "generator": false,
            "start": 857,
            "end": 865
          },
          "definite": false,
          "start": 847,
          "end": 865
        }
      ],
      "declare": false,
      "start": 843,
      "end": 866
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "aLambda",
        "optional": false,
        "typeAnnotation": null,
        "start": 873,
        "end": 880
      },
      "start": 867,
      "end": 881
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
          "start": 888,
          "end": 895
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 896,
            "end": 897
          }
        ],
        "optional": false,
        "start": 888,
        "end": 898
      },
      "start": 882,
      "end": 899
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
            "start": 905,
            "end": 912
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 915,
            "end": 916
          },
          "definite": false,
          "start": 905,
          "end": 916
        }
      ],
      "declare": false,
      "start": 901,
      "end": 917
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "aModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 924,
        "end": 931
      },
      "start": 918,
      "end": 932
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
          "start": 946,
          "end": 947
        },
        "prefix": true,
        "start": 939,
        "end": 947
      },
      "start": 933,
      "end": 948
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
            "start": 953,
            "end": 967
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
                "start": 974,
                "end": 975
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 976,
                "end": 977
              },
              "optional": false,
              "computed": false,
              "start": 974,
              "end": 977
            },
            "typeArguments": null,
            "arguments": [],
            "start": 970,
            "end": 979
          },
          "definite": false,
          "start": 953,
          "end": 979
        }
      ],
      "declare": false,
      "start": 949,
      "end": 980
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "aClassInModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 987,
        "end": 1001
      },
      "start": 981,
      "end": 1002
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
            "start": 1007,
            "end": 1024
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 1027,
              "end": 1028
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "F2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1029,
              "end": 1031
            },
            "optional": false,
            "computed": false,
            "start": 1027,
            "end": 1031
          },
          "definite": false,
          "start": 1007,
          "end": 1031
        }
      ],
      "declare": false,
      "start": 1003,
      "end": 1032
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "aFunctionInModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 1039,
        "end": 1056
      },
      "start": 1033,
      "end": 1057
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
            "start": 1116,
            "end": 1117
          },
          "init": null,
          "definite": false,
          "start": 1116,
          "end": 1117
        }
      ],
      "declare": false,
      "start": 1112,
      "end": 1118
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 1125,
        "end": 1126
      },
      "start": 1119,
      "end": 1127
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Literal",
        "value": 0,
        "raw": "0.0",
        "start": 1147,
        "end": 1150
      },
      "start": 1141,
      "end": 1151
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 1158,
        "end": 1163
      },
      "start": 1152,
      "end": 1164
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Literal",
        "value": null,
        "raw": "null",
        "start": 1171,
        "end": 1175
      },
      "start": 1165,
      "end": 1176
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Identifier",
        "decorators": [],
        "name": "undefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 1183,
        "end": 1192
      },
      "start": 1177,
      "end": 1193
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "Literal",
        "value": "a string",
        "raw": "'a string'",
        "start": 1200,
        "end": 1210
      },
      "start": 1194,
      "end": 1211
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
                "start": 1239,
                "end": 1249
              },
              "start": 1232,
              "end": 1249
            }
          ],
          "start": 1230,
          "end": 1251
        },
        "expression": false,
        "start": 1218,
        "end": 1251
      },
      "start": 1212,
      "end": 1252
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
                "start": 1260,
                "end": 1261
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1260,
              "end": 1261
            }
          ],
          "start": 1259,
          "end": 1262
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
                  "start": 1265,
                  "end": 1266
                },
                "typeArguments": null,
                "start": 1265,
                "end": 1266
              },
              "start": 1264,
              "end": 1266
            },
            "start": 1263,
            "end": 1266
          }
        ],
        "returnType": null,
        "body": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 1271,
          "end": 1273
        },
        "id": null,
        "generator": false,
        "start": 1259,
        "end": 1273
      },
      "start": 1253,
      "end": 1274
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
              "start": 1283,
              "end": 1284
            },
            "value": {
              "type": "Literal",
              "value": 12,
              "raw": "12",
              "start": 1286,
              "end": 1288
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1283,
            "end": 1288
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
              "start": 1290,
              "end": 1291
            },
            "value": {
              "type": "Literal",
              "value": 13,
              "raw": "13",
              "start": 1293,
              "end": 1295
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1290,
            "end": 1295
          }
        ],
        "start": 1281,
        "end": 1297
      },
      "start": 1275,
      "end": 1298
    },
    {
      "type": "ThrowStatement",
      "argument": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 1305,
        "end": 1307
      },
      "start": 1299,
      "end": 1308
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
            "start": 1316,
            "end": 1319
          },
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 1322,
                "end": 1325
              }
            ],
            "start": 1321,
            "end": 1326
          }
        ],
        "start": 1315,
        "end": 1327
      },
      "start": 1309,
      "end": 1328
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
        "start": 1335,
        "end": 1342
      },
      "start": 1329,
      "end": 1343
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
          "start": 1354,
          "end": 1358
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1350,
        "end": 1360
      },
      "start": 1344,
      "end": 1361
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
          "start": 1372,
          "end": 1373
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1368,
        "end": 1375
      },
      "start": 1362,
      "end": 1376
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
          "start": 1387,
          "end": 1393
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1383,
        "end": 1395
      },
      "start": 1377,
      "end": 1396
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
          "start": 1407,
          "end": 1408
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 1409,
              "end": 1415
            }
          ],
          "start": 1408,
          "end": 1416
        },
        "arguments": [],
        "start": 1403,
        "end": 1418
      },
      "start": 1397,
      "end": 1419
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 14,
  "end": 1419
}
```
