__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 36
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
                      "start": 40,
                      "end": 46
                    },
                    "start": 38,
                    "end": 46
                  },
                  "start": 37,
                  "end": 46
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 65,
                      "end": 67
                    },
                    "start": 58,
                    "end": 68
                  }
                ],
                "start": 48,
                "end": 74
              },
              "expression": false,
              "start": 25,
              "end": 74
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 74
          }
        ],
        "start": 12,
        "end": 76
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 76
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 85,
                "end": 88
              },
              "start": 83,
              "end": 88
            },
            "start": 82,
            "end": 88
          },
          "init": null,
          "definite": false,
          "start": 82,
          "end": 88
        }
      ],
      "declare": false,
      "start": 78,
      "end": 89
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 99
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 112,
            "end": 114
          },
          "consequent": [],
          "start": 107,
          "end": 115
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 125,
            "end": 127
          },
          "consequent": [],
          "start": 120,
          "end": 128
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 138,
            "end": 142
          },
          "consequent": [],
          "start": 133,
          "end": 143
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 153,
            "end": 157
          },
          "consequent": [],
          "start": 148,
          "end": 158
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 168,
            "end": 177
          },
          "consequent": [],
          "start": 163,
          "end": 178
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 196
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 12,
                "raw": "12",
                "start": 197,
                "end": 199
              }
            ],
            "start": 188,
            "end": 200
          },
          "consequent": [],
          "start": 183,
          "end": 201
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Object",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 221
            },
            "typeArguments": null,
            "arguments": [],
            "start": 211,
            "end": 223
          },
          "consequent": [],
          "start": 206,
          "end": 224
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": null,
            "raw": "/[a-z]/",
            "regex": {
              "pattern": "[a-z]",
              "flags": ""
            },
            "start": 234,
            "end": 241
          },
          "consequent": [],
          "start": 229,
          "end": 242
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 251,
            "end": 253
          },
          "consequent": [],
          "start": 247,
          "end": 254
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 264,
            "end": 266
          },
          "consequent": [],
          "start": 259,
          "end": 267
        },
        {
          "type": "SwitchCase",
          "test": {
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
                  "start": 279,
                  "end": 281
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 283,
                  "end": 285
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 279,
                "end": 285
              }
            ],
            "start": 277,
            "end": 287
          },
          "consequent": [],
          "start": 272,
          "end": 288
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 298,
                "end": 301
              }
            ],
            "start": 297,
            "end": 302
          },
          "consequent": [],
          "start": 293,
          "end": 303
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 320,
              "end": 321
            },
            "prefix": true,
            "start": 313,
            "end": 321
          },
          "consequent": [],
          "start": 308,
          "end": 322
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 339,
              "end": 340
            },
            "prefix": true,
            "start": 332,
            "end": 340
          },
          "consequent": [],
          "start": 327,
          "end": 341
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 351,
                "end": 352
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null,
                "start": 353,
                "end": 355
              },
              "optional": false,
              "computed": false,
              "start": 351,
              "end": 355
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 356,
                "end": 357
              }
            ],
            "optional": false,
            "start": 351,
            "end": 358
          },
          "consequent": [],
          "start": 346,
          "end": 359
        },
        {
          "type": "SwitchCase",
          "test": {
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
                    "start": 370,
                    "end": 371
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 370,
                  "end": 371
                }
              ],
              "start": 369,
              "end": 372
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
                    "type": "TSNumberKeyword",
                    "start": 376,
                    "end": 382
                  },
                  "start": 374,
                  "end": 382
                },
                "start": 373,
                "end": 382
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 387,
              "end": 389
            },
            "id": null,
            "generator": false,
            "start": 369,
            "end": 389
          },
          "consequent": [],
          "start": 364,
          "end": 390
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "CallExpression",
            "callee": {
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
                      "start": 402,
                      "end": 403
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 402,
                    "end": 403
                  }
                ],
                "start": 401,
                "end": 404
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
                      "type": "TSNumberKeyword",
                      "start": 408,
                      "end": 414
                    },
                    "start": 406,
                    "end": 414
                  },
                  "start": 405,
                  "end": 414
                }
              ],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 419,
                "end": 421
              },
              "id": null,
              "generator": false,
              "start": 401,
              "end": 421
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 423,
                "end": 424
              }
            ],
            "optional": false,
            "start": 400,
            "end": 425
          },
          "consequent": [],
          "start": 395,
          "end": 426
        },
        {
          "type": "SwitchCase",
          "test": null,
          "consequent": [],
          "start": 431,
          "end": 439
        }
      ],
      "start": 90,
      "end": 441
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
        "start": 529,
        "end": 530
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 533,
              "end": 535
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 537,
                "end": 543
              },
              "start": 535,
              "end": 543
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
            "start": 533,
            "end": 544
          }
        ],
        "start": 531,
        "end": 546
      },
      "abstract": false,
      "declare": false,
      "start": 523,
      "end": 546
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
        "start": 553,
        "end": 554
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 563,
        "end": 564
      },
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
              "start": 567,
              "end": 571
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 573,
                "end": 579
              },
              "start": 571,
              "end": 579
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
            "start": 567,
            "end": 579
          }
        ],
        "start": 565,
        "end": 581
      },
      "abstract": false,
      "declare": false,
      "start": 547,
      "end": 581
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 595,
          "end": 596
        },
        "typeArguments": null,
        "arguments": [],
        "start": 591,
        "end": 598
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 615,
              "end": 616
            },
            "typeArguments": null,
            "arguments": [],
            "start": 611,
            "end": 618
          },
          "consequent": [],
          "start": 606,
          "end": 619
        },
        {
          "type": "SwitchCase",
          "test": {
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
                  "start": 631,
                  "end": 633
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 635,
                  "end": 637
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 631,
                "end": 637
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 639,
                  "end": 643
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 645,
                  "end": 647
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 639,
                "end": 647
              }
            ],
            "start": 629,
            "end": 649
          },
          "consequent": [],
          "start": 624,
          "end": 650
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 664,
              "end": 665
            },
            "typeArguments": null,
            "arguments": [],
            "start": 660,
            "end": 667
          },
          "consequent": [],
          "start": 655,
          "end": 668
        }
      ],
      "start": 583,
      "end": 670
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": "",
        "raw": "''",
        "start": 680,
        "end": 682
      },
      "cases": [],
      "start": 672,
      "end": 687
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": 12,
        "raw": "12",
        "start": 696,
        "end": 698
      },
      "cases": [],
      "start": 688,
      "end": 703
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 712,
        "end": 716
      },
      "cases": [],
      "start": 704,
      "end": 721
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": null,
        "raw": "null",
        "start": 730,
        "end": 734
      },
      "cases": [],
      "start": 722,
      "end": 739
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Identifier",
        "decorators": [],
        "name": "undefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 748,
        "end": 757
      },
      "cases": [],
      "start": 740,
      "end": 762
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Date",
          "optional": false,
          "typeAnnotation": null,
          "start": 775,
          "end": 779
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 780,
            "end": 782
          }
        ],
        "start": 771,
        "end": 783
      },
      "cases": [],
      "start": 763,
      "end": 788
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Object",
          "optional": false,
          "typeAnnotation": null,
          "start": 801,
          "end": 807
        },
        "typeArguments": null,
        "arguments": [],
        "start": 797,
        "end": 809
      },
      "cases": [],
      "start": 789,
      "end": 814
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": null,
        "raw": "/[a-z]/",
        "regex": {
          "pattern": "[a-z]",
          "flags": ""
        },
        "start": 823,
        "end": 830
      },
      "cases": [],
      "start": 815,
      "end": 835
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 844,
        "end": 846
      },
      "cases": [],
      "start": 836,
      "end": 851
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 860,
        "end": 862
      },
      "cases": [],
      "start": 852,
      "end": 867
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
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
              "start": 878,
              "end": 880
            },
            "value": {
              "type": "Literal",
              "value": 12,
              "raw": "12",
              "start": 882,
              "end": 884
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 878,
            "end": 884
          }
        ],
        "start": 876,
        "end": 886
      },
      "cases": [],
      "start": 868,
      "end": 891
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 901,
            "end": 904
          }
        ],
        "start": 900,
        "end": 905
      },
      "cases": [],
      "start": 892,
      "end": 910
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
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
                "start": 920,
                "end": 921
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 920,
              "end": 921
            }
          ],
          "start": 919,
          "end": 922
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
                "type": "TSNumberKeyword",
                "start": 926,
                "end": 932
              },
              "start": 924,
              "end": 932
            },
            "start": 923,
            "end": 932
          }
        ],
        "returnType": null,
        "body": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 937,
          "end": 939
        },
        "id": null,
        "generator": false,
        "start": 919,
        "end": 939
      },
      "cases": [],
      "start": 911,
      "end": 944
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "CallExpression",
        "callee": {
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
                  "start": 955,
                  "end": 956
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 955,
                "end": 956
              }
            ],
            "start": 954,
            "end": 957
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
                    "start": 961,
                    "end": 962
                  },
                  "typeArguments": null,
                  "start": 961,
                  "end": 962
                },
                "start": 959,
                "end": 962
              },
              "start": 958,
              "end": 962
            }
          ],
          "returnType": null,
          "body": {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 967,
            "end": 969
          },
          "id": null,
          "generator": false,
          "start": 954,
          "end": 969
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 971,
            "end": 972
          }
        ],
        "optional": false,
        "start": 953,
        "end": 973
      },
      "cases": [],
      "start": 945,
      "end": 978
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 980
}
```
