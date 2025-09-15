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
            "name": "ANY",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 36,
                "end": 39
              },
              "start": 34,
              "end": 39
            },
            "start": 31,
            "end": 39
          },
          "init": null,
          "definite": false,
          "start": 31,
          "end": 39
        }
      ],
      "declare": false,
      "start": 27,
      "end": 40
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
            "name": "ANY1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 51,
                "end": 54
              },
              "start": 49,
              "end": 54
            },
            "start": 45,
            "end": 54
          },
          "init": null,
          "definite": false,
          "start": 45,
          "end": 54
        }
      ],
      "declare": false,
      "start": 41,
      "end": 55
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
            "name": "ANY2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 66,
                  "end": 69
                },
                "start": 66,
                "end": 71
              },
              "start": 64,
              "end": 71
            },
            "start": 60,
            "end": 71
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 75,
                "end": 77
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 79,
                "end": 81
              }
            ],
            "start": 74,
            "end": 82
          },
          "definite": false,
          "start": 60,
          "end": 82
        }
      ],
      "declare": false,
      "start": 56,
      "end": 83
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 99,
                    "end": 101
                  },
                  "start": 96,
                  "end": 101
                },
                "start": 93,
                "end": 101
              },
              "start": 91,
              "end": 101
            },
            "start": 88,
            "end": 101
          },
          "init": null,
          "definite": false,
          "start": 88,
          "end": 101
        }
      ],
      "declare": false,
      "start": 84,
      "end": 101
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
            "start": 106,
            "end": 110
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
                  "start": 115,
                  "end": 116
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 118,
                  "end": 120
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 115,
                "end": 120
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
                  "start": 122,
                  "end": 123
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 131,
                    "end": 134
                  },
                  "id": null,
                  "generator": false,
                  "start": 125,
                  "end": 134
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 122,
                "end": 134
              }
            ],
            "start": 113,
            "end": 135
          },
          "definite": false,
          "start": 106,
          "end": 135
        }
      ],
      "declare": false,
      "start": 102,
      "end": 136
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 150
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
          "start": 154,
          "end": 157
        },
        "start": 152,
        "end": 157
      },
      "body": {
        "type": "BlockStatement",
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 168,
                  "end": 169
                },
                "init": null,
                "definite": false,
                "start": 168,
                "end": 169
              }
            ],
            "declare": false,
            "start": 164,
            "end": 170
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 182,
              "end": 183
            },
            "start": 175,
            "end": 184
          }
        ],
        "start": 158,
        "end": 186
      },
      "expression": false,
      "start": 138,
      "end": 186
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 193,
        "end": 194
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 208,
              "end": 209
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 201,
            "end": 215
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 227,
              "end": 230
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 234,
                  "end": 237
                },
                "start": 232,
                "end": 237
              },
              "body": {
                "type": "BlockStatement",
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 252,
                          "end": 253
                        },
                        "init": null,
                        "definite": false,
                        "start": 252,
                        "end": 253
                      }
                    ],
                    "declare": false,
                    "start": 248,
                    "end": 254
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 270,
                      "end": 271
                    },
                    "start": 263,
                    "end": 272
                  }
                ],
                "start": 238,
                "end": 278
              },
              "expression": false,
              "start": 230,
              "end": 278
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 220,
            "end": 278
          }
        ],
        "start": 195,
        "end": 280
      },
      "abstract": false,
      "declare": false,
      "start": 187,
      "end": 280
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 291,
        "end": 292
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 313,
                        "end": 316
                      },
                      "start": 311,
                      "end": 316
                    },
                    "start": 310,
                    "end": 316
                  },
                  "init": null,
                  "definite": false,
                  "start": 310,
                  "end": 316
                }
              ],
              "declare": false,
              "start": 306,
              "end": 317
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 299,
            "end": 317
          }
        ],
        "start": 293,
        "end": 319
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 281,
      "end": 319
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
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 324,
            "end": 328
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 335,
              "end": 336
            },
            "typeArguments": null,
            "arguments": [],
            "start": 331,
            "end": 338
          },
          "definite": false,
          "start": 324,
          "end": 338
        }
      ],
      "declare": false,
      "start": 320,
      "end": 339
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
            "name": "ResultIsNumber1",
            "optional": false,
            "typeAnnotation": null,
            "start": 361,
            "end": 376
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY1",
              "optional": false,
              "typeAnnotation": null,
              "start": 380,
              "end": 384
            },
            "prefix": true,
            "start": 379,
            "end": 384
          },
          "definite": false,
          "start": 361,
          "end": 384
        }
      ],
      "declare": false,
      "start": 357,
      "end": 385
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
            "name": "ResultIsNumber2",
            "optional": false,
            "typeAnnotation": null,
            "start": 390,
            "end": 405
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY2",
              "optional": false,
              "typeAnnotation": null,
              "start": 409,
              "end": 413
            },
            "prefix": true,
            "start": 408,
            "end": 413
          },
          "definite": false,
          "start": 390,
          "end": 413
        }
      ],
      "declare": false,
      "start": 386,
      "end": 414
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
            "name": "ResultIsNumber3",
            "optional": false,
            "typeAnnotation": null,
            "start": 419,
            "end": 434
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 438,
              "end": 439
            },
            "prefix": true,
            "start": 437,
            "end": 439
          },
          "definite": false,
          "start": 419,
          "end": 439
        }
      ],
      "declare": false,
      "start": 415,
      "end": 440
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
            "name": "ResultIsNumber4",
            "optional": false,
            "typeAnnotation": null,
            "start": 445,
            "end": 460
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 464,
              "end": 465
            },
            "prefix": true,
            "start": 463,
            "end": 465
          },
          "definite": false,
          "start": 445,
          "end": 465
        }
      ],
      "declare": false,
      "start": 441,
      "end": 466
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
            "name": "ResultIsNumber5",
            "optional": false,
            "typeAnnotation": null,
            "start": 471,
            "end": 486
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 490,
              "end": 493
            },
            "prefix": true,
            "start": 489,
            "end": 493
          },
          "definite": false,
          "start": 471,
          "end": 493
        }
      ],
      "declare": false,
      "start": 467,
      "end": 494
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
            "name": "ResultIsNumber6",
            "optional": false,
            "typeAnnotation": null,
            "start": 499,
            "end": 514
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null,
              "start": 518,
              "end": 522
            },
            "prefix": true,
            "start": 517,
            "end": 522
          },
          "definite": false,
          "start": 499,
          "end": 522
        }
      ],
      "declare": false,
      "start": 495,
      "end": 523
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
            "name": "ResultIsNumber7",
            "optional": false,
            "typeAnnotation": null,
            "start": 549,
            "end": 564
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 568,
              "end": 577
            },
            "prefix": true,
            "start": 567,
            "end": 577
          },
          "definite": false,
          "start": 549,
          "end": 577
        }
      ],
      "declare": false,
      "start": 545,
      "end": 578
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
            "name": "ResultIsNumber",
            "optional": false,
            "typeAnnotation": null,
            "start": 583,
            "end": 597
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 601,
              "end": 605
            },
            "prefix": true,
            "start": 600,
            "end": 605
          },
          "definite": false,
          "start": 583,
          "end": 605
        }
      ],
      "declare": false,
      "start": 579,
      "end": 606
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
            "name": "ResultIsNumber8",
            "optional": false,
            "typeAnnotation": null,
            "start": 636,
            "end": 651
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY2",
                "optional": false,
                "typeAnnotation": null,
                "start": 655,
                "end": 659
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 660,
                "end": 661
              },
              "optional": false,
              "computed": true,
              "start": 655,
              "end": 662
            },
            "prefix": true,
            "start": 654,
            "end": 662
          },
          "definite": false,
          "start": 636,
          "end": 662
        }
      ],
      "declare": false,
      "start": 632,
      "end": 663
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
            "name": "ResultIsNumber9",
            "optional": false,
            "typeAnnotation": null,
            "start": 668,
            "end": 683
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null,
                "start": 687,
                "end": 691
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 692,
                "end": 693
              },
              "optional": false,
              "computed": false,
              "start": 687,
              "end": 693
            },
            "prefix": true,
            "start": 686,
            "end": 693
          },
          "definite": false,
          "start": 668,
          "end": 693
        }
      ],
      "declare": false,
      "start": 664,
      "end": 694
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
            "name": "ResultIsNumber10",
            "optional": false,
            "typeAnnotation": null,
            "start": 699,
            "end": 715
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null,
                "start": 719,
                "end": 723
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 724,
                "end": 725
              },
              "optional": false,
              "computed": false,
              "start": 719,
              "end": 725
            },
            "prefix": true,
            "start": 718,
            "end": 725
          },
          "definite": false,
          "start": 699,
          "end": 725
        }
      ],
      "declare": false,
      "start": 695,
      "end": 726
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
            "name": "ResultIsNumber11",
            "optional": false,
            "typeAnnotation": null,
            "start": 731,
            "end": 747
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 751,
                "end": 755
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 756,
                "end": 757
              },
              "optional": false,
              "computed": false,
              "start": 751,
              "end": 757
            },
            "prefix": true,
            "start": 750,
            "end": 757
          },
          "definite": false,
          "start": 731,
          "end": 757
        }
      ],
      "declare": false,
      "start": 727,
      "end": 758
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
            "name": "ResultIsNumber12",
            "optional": false,
            "typeAnnotation": null,
            "start": 763,
            "end": 779
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 783,
                "end": 784
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 785,
                "end": 786
              },
              "optional": false,
              "computed": false,
              "start": 783,
              "end": 786
            },
            "prefix": true,
            "start": 782,
            "end": 786
          },
          "definite": false,
          "start": 763,
          "end": 786
        }
      ],
      "declare": false,
      "start": 759,
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
            "name": "ResultIsNumber13",
            "optional": false,
            "typeAnnotation": null,
            "start": 792,
            "end": 808
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 812,
                "end": 815
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 812,
              "end": 817
            },
            "prefix": true,
            "start": 811,
            "end": 817
          },
          "definite": false,
          "start": 792,
          "end": 817
        }
      ],
      "declare": false,
      "start": 788,
      "end": 818
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
            "name": "ResultIsNumber14",
            "optional": false,
            "typeAnnotation": null,
            "start": 823,
            "end": 839
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 843,
                  "end": 844
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 845,
                  "end": 848
                },
                "optional": false,
                "computed": false,
                "start": 843,
                "end": 848
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 843,
              "end": 850
            },
            "prefix": true,
            "start": 842,
            "end": 850
          },
          "definite": false,
          "start": 823,
          "end": 850
        }
      ],
      "declare": false,
      "start": 819,
      "end": 851
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
            "name": "ResultIsNumber15",
            "optional": false,
            "typeAnnotation": null,
            "start": 856,
            "end": 872
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null,
                "start": 877,
                "end": 880
              },
              "operator": "-",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY1",
                "optional": false,
                "typeAnnotation": null,
                "start": 883,
                "end": 887
              },
              "start": 877,
              "end": 887
            },
            "prefix": true,
            "start": 875,
            "end": 888
          },
          "definite": false,
          "start": 856,
          "end": 888
        }
      ],
      "declare": false,
      "start": 852,
      "end": 889
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "-",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ANY",
          "optional": false,
          "typeAnnotation": null,
          "start": 921,
          "end": 924
        },
        "prefix": true,
        "start": 920,
        "end": 924
      },
      "directive": null,
      "start": 920,
      "end": 925
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "-",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ANY1",
          "optional": false,
          "typeAnnotation": null,
          "start": 927,
          "end": 931
        },
        "prefix": true,
        "start": 926,
        "end": 931
      },
      "directive": null,
      "start": 926,
      "end": 932
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "-",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY2",
            "optional": false,
            "typeAnnotation": null,
            "start": 934,
            "end": 938
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 939,
            "end": 940
          },
          "optional": false,
          "computed": true,
          "start": 934,
          "end": 941
        },
        "prefix": true,
        "start": 933,
        "end": 941
      },
      "directive": null,
      "start": 933,
      "end": 942
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY",
              "optional": false,
              "typeAnnotation": null,
              "start": 944,
              "end": 947
            },
            "prefix": true,
            "start": 943,
            "end": 947
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY1",
            "optional": false,
            "typeAnnotation": null,
            "start": 949,
            "end": 953
          }
        ],
        "start": 943,
        "end": 953
      },
      "directive": null,
      "start": 943,
      "end": 954
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "-",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 956,
            "end": 960
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 961,
            "end": 962
          },
          "optional": false,
          "computed": false,
          "start": 956,
          "end": 962
        },
        "prefix": true,
        "start": 955,
        "end": 962
      },
      "directive": null,
      "start": 955,
      "end": 963
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "-",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 965,
            "end": 966
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 967,
            "end": 968
          },
          "optional": false,
          "computed": false,
          "start": 965,
          "end": 968
        },
        "prefix": true,
        "start": 964,
        "end": 968
      },
      "directive": null,
      "start": 964,
      "end": 969
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 27,
  "end": 969
}
```
