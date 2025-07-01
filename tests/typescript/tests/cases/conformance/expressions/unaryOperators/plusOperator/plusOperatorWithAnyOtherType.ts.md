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
            "typeAnnotation": null,
            "start": 45,
            "end": 49
          },
          "init": null,
          "definite": false,
          "start": 45,
          "end": 49
        }
      ],
      "declare": false,
      "start": 41,
      "end": 50
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
                  "start": 61,
                  "end": 64
                },
                "start": 61,
                "end": 66
              },
              "start": 59,
              "end": 66
            },
            "start": 55,
            "end": 66
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 70,
                "end": 72
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 74,
                "end": 76
              }
            ],
            "start": 69,
            "end": 77
          },
          "definite": false,
          "start": 55,
          "end": 77
        }
      ],
      "declare": false,
      "start": 51,
      "end": 78
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
                    "start": 94,
                    "end": 96
                  },
                  "start": 91,
                  "end": 96
                },
                "start": 88,
                "end": 96
              },
              "start": 86,
              "end": 96
            },
            "start": 83,
            "end": 96
          },
          "init": null,
          "definite": false,
          "start": 83,
          "end": 96
        }
      ],
      "declare": false,
      "start": 79,
      "end": 96
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
            "start": 101,
            "end": 105
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
                  "start": 110,
                  "end": 111
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 117,
                          "end": 123
                        },
                        "start": 115,
                        "end": 123
                      },
                      "start": 114,
                      "end": 123
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 128,
                    "end": 131
                  },
                  "id": null,
                  "generator": false,
                  "start": 113,
                  "end": 131
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 110,
                "end": 131
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
                  "start": 133,
                  "end": 134
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 137,
                      "end": 139
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 144,
                    "end": 147
                  },
                  "id": null,
                  "generator": false,
                  "start": 136,
                  "end": 147
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 133,
                "end": 147
              }
            ],
            "start": 108,
            "end": 148
          },
          "definite": false,
          "start": 101,
          "end": 148
        }
      ],
      "declare": false,
      "start": 97,
      "end": 149
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 160,
        "end": 163
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
          "start": 167,
          "end": 170
        },
        "start": 165,
        "end": 170
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
                  "start": 181,
                  "end": 182
                },
                "init": null,
                "definite": false,
                "start": 181,
                "end": 182
              }
            ],
            "declare": false,
            "start": 177,
            "end": 183
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 195,
              "end": 196
            },
            "start": 188,
            "end": 197
          }
        ],
        "start": 171,
        "end": 199
      },
      "expression": false,
      "start": 151,
      "end": 199
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
        "start": 206,
        "end": 207
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
              "start": 221,
              "end": 222
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 224,
                "end": 227
              },
              "start": 222,
              "end": 227
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
            "start": 214,
            "end": 228
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
              "start": 240,
              "end": 243
            },
            "value": {
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
                          "start": 260,
                          "end": 261
                        },
                        "init": null,
                        "definite": false,
                        "start": 260,
                        "end": 261
                      }
                    ],
                    "declare": false,
                    "start": 256,
                    "end": 262
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 278,
                      "end": 279
                    },
                    "start": 271,
                    "end": 280
                  }
                ],
                "start": 246,
                "end": 286
              },
              "expression": false,
              "start": 243,
              "end": 286
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 233,
            "end": 286
          }
        ],
        "start": 208,
        "end": 288
      },
      "abstract": false,
      "declare": false,
      "start": 200,
      "end": 288
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 296,
        "end": 297
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
                        "start": 318,
                        "end": 321
                      },
                      "start": 316,
                      "end": 321
                    },
                    "start": 315,
                    "end": 321
                  },
                  "init": null,
                  "definite": false,
                  "start": 315,
                  "end": 321
                }
              ],
              "declare": false,
              "start": 311,
              "end": 322
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 304,
            "end": 322
          }
        ],
        "start": 298,
        "end": 324
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 289,
      "end": 324
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
            "start": 329,
            "end": 333
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 340,
              "end": 341
            },
            "typeArguments": null,
            "arguments": [],
            "start": 336,
            "end": 343
          },
          "definite": false,
          "start": 329,
          "end": 343
        }
      ],
      "declare": false,
      "start": 325,
      "end": 344
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
            "start": 372,
            "end": 387
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY1",
              "optional": false,
              "typeAnnotation": null,
              "start": 391,
              "end": 395
            },
            "prefix": true,
            "start": 390,
            "end": 395
          },
          "definite": false,
          "start": 372,
          "end": 395
        }
      ],
      "declare": false,
      "start": 368,
      "end": 396
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
            "start": 401,
            "end": 416
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY2",
              "optional": false,
              "typeAnnotation": null,
              "start": 420,
              "end": 424
            },
            "prefix": true,
            "start": 419,
            "end": 424
          },
          "definite": false,
          "start": 401,
          "end": 424
        }
      ],
      "declare": false,
      "start": 397,
      "end": 425
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
            "start": 430,
            "end": 445
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 449,
              "end": 450
            },
            "prefix": true,
            "start": 448,
            "end": 450
          },
          "definite": false,
          "start": 430,
          "end": 450
        }
      ],
      "declare": false,
      "start": 426,
      "end": 451
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
            "start": 456,
            "end": 471
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 475,
              "end": 476
            },
            "prefix": true,
            "start": 474,
            "end": 476
          },
          "definite": false,
          "start": 456,
          "end": 476
        }
      ],
      "declare": false,
      "start": 452,
      "end": 477
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
            "start": 482,
            "end": 497
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 501,
              "end": 504
            },
            "prefix": true,
            "start": 500,
            "end": 504
          },
          "definite": false,
          "start": 482,
          "end": 504
        }
      ],
      "declare": false,
      "start": 478,
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
            "name": "ResultIsNumber6",
            "optional": false,
            "typeAnnotation": null,
            "start": 510,
            "end": 525
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null,
              "start": 529,
              "end": 533
            },
            "prefix": true,
            "start": 528,
            "end": 533
          },
          "definite": false,
          "start": 510,
          "end": 533
        }
      ],
      "declare": false,
      "start": 506,
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
            "name": "ResultIsNumber7",
            "optional": false,
            "typeAnnotation": null,
            "start": 560,
            "end": 575
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 579,
              "end": 588
            },
            "prefix": true,
            "start": 578,
            "end": 588
          },
          "definite": false,
          "start": 560,
          "end": 588
        }
      ],
      "declare": false,
      "start": 556,
      "end": 589
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
            "start": 594,
            "end": 609
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 613,
              "end": 617
            },
            "prefix": true,
            "start": 612,
            "end": 617
          },
          "definite": false,
          "start": 594,
          "end": 617
        }
      ],
      "declare": false,
      "start": 590,
      "end": 618
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
            "start": 648,
            "end": 663
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY2",
                "optional": false,
                "typeAnnotation": null,
                "start": 667,
                "end": 671
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 672,
                "end": 673
              },
              "optional": false,
              "computed": true,
              "start": 667,
              "end": 674
            },
            "prefix": true,
            "start": 666,
            "end": 674
          },
          "definite": false,
          "start": 648,
          "end": 674
        }
      ],
      "declare": false,
      "start": 644,
      "end": 675
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
            "start": 680,
            "end": 696
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null,
                "start": 700,
                "end": 704
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 705,
                "end": 706
              },
              "optional": false,
              "computed": false,
              "start": 700,
              "end": 706
            },
            "prefix": true,
            "start": 699,
            "end": 706
          },
          "definite": false,
          "start": 680,
          "end": 706
        }
      ],
      "declare": false,
      "start": 676,
      "end": 707
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
            "start": 712,
            "end": 728
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null,
                "start": 732,
                "end": 736
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 737,
                "end": 738
              },
              "optional": false,
              "computed": false,
              "start": 732,
              "end": 738
            },
            "prefix": true,
            "start": 731,
            "end": 738
          },
          "definite": false,
          "start": 712,
          "end": 738
        }
      ],
      "declare": false,
      "start": 708,
      "end": 739
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
            "start": 744,
            "end": 760
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 764,
                "end": 768
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 769,
                "end": 770
              },
              "optional": false,
              "computed": false,
              "start": 764,
              "end": 770
            },
            "prefix": true,
            "start": 763,
            "end": 770
          },
          "definite": false,
          "start": 744,
          "end": 770
        }
      ],
      "declare": false,
      "start": 740,
      "end": 771
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
            "start": 776,
            "end": 792
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 796,
                "end": 797
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 798,
                "end": 799
              },
              "optional": false,
              "computed": false,
              "start": 796,
              "end": 799
            },
            "prefix": true,
            "start": 795,
            "end": 799
          },
          "definite": false,
          "start": 776,
          "end": 799
        }
      ],
      "declare": false,
      "start": 772,
      "end": 800
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
            "start": 805,
            "end": 821
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 825,
                "end": 828
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 825,
              "end": 830
            },
            "prefix": true,
            "start": 824,
            "end": 830
          },
          "definite": false,
          "start": 805,
          "end": 830
        }
      ],
      "declare": false,
      "start": 801,
      "end": 831
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
            "start": 836,
            "end": 852
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
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
                  "start": 856,
                  "end": 857
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 858,
                  "end": 861
                },
                "optional": false,
                "computed": false,
                "start": 856,
                "end": 861
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 856,
              "end": 863
            },
            "prefix": true,
            "start": 855,
            "end": 863
          },
          "definite": false,
          "start": 836,
          "end": 863
        }
      ],
      "declare": false,
      "start": 832,
      "end": 864
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
            "name": "ResultIsNumber16",
            "optional": false,
            "typeAnnotation": null,
            "start": 869,
            "end": 885
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null,
                "start": 890,
                "end": 893
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY1",
                "optional": false,
                "typeAnnotation": null,
                "start": 896,
                "end": 900
              },
              "start": 890,
              "end": 900
            },
            "prefix": true,
            "start": 888,
            "end": 901
          },
          "definite": false,
          "start": 869,
          "end": 901
        }
      ],
      "declare": false,
      "start": 865,
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
            "name": "ResultIsNumber17",
            "optional": false,
            "typeAnnotation": null,
            "start": 907,
            "end": 923
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 928,
                "end": 932
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 935,
                "end": 944
              },
              "start": 928,
              "end": 944
            },
            "prefix": true,
            "start": 926,
            "end": 945
          },
          "definite": false,
          "start": 907,
          "end": 945
        }
      ],
      "declare": false,
      "start": 903,
      "end": 946
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
            "name": "ResultIsNumber18",
            "optional": false,
            "typeAnnotation": null,
            "start": 951,
            "end": 967
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 972,
                "end": 976
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 979,
                "end": 983
              },
              "start": 972,
              "end": 983
            },
            "prefix": true,
            "start": 970,
            "end": 984
          },
          "definite": false,
          "start": 951,
          "end": 984
        }
      ],
      "declare": false,
      "start": 947,
      "end": 985
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
            "name": "ResultIsNumber19",
            "optional": false,
            "typeAnnotation": null,
            "start": 990,
            "end": 1006
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1011,
                "end": 1020
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1023,
                "end": 1032
              },
              "start": 1011,
              "end": 1032
            },
            "prefix": true,
            "start": 1009,
            "end": 1033
          },
          "definite": false,
          "start": 990,
          "end": 1033
        }
      ],
      "declare": false,
      "start": 986,
      "end": 1034
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "+",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ANY",
          "optional": false,
          "typeAnnotation": null,
          "start": 1066,
          "end": 1069
        },
        "prefix": true,
        "start": 1065,
        "end": 1069
      },
      "directive": null,
      "start": 1065,
      "end": 1070
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "+",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ANY1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1072,
          "end": 1076
        },
        "prefix": true,
        "start": 1071,
        "end": 1076
      },
      "directive": null,
      "start": 1071,
      "end": 1077
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "+",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1079,
            "end": 1083
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1084,
            "end": 1085
          },
          "optional": false,
          "computed": true,
          "start": 1079,
          "end": 1086
        },
        "prefix": true,
        "start": 1078,
        "end": 1086
      },
      "directive": null,
      "start": 1078,
      "end": 1087
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY",
              "optional": false,
              "typeAnnotation": null,
              "start": 1089,
              "end": 1092
            },
            "prefix": true,
            "start": 1088,
            "end": 1092
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1094,
            "end": 1098
          }
        ],
        "start": 1088,
        "end": 1098
      },
      "directive": null,
      "start": 1088,
      "end": 1099
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "+",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 1101,
            "end": 1105
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1106,
            "end": 1107
          },
          "optional": false,
          "computed": false,
          "start": 1101,
          "end": 1107
        },
        "prefix": true,
        "start": 1100,
        "end": 1107
      },
      "directive": null,
      "start": 1100,
      "end": 1108
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "+",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 1110,
            "end": 1111
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 1112,
            "end": 1113
          },
          "optional": false,
          "computed": false,
          "start": 1110,
          "end": 1113
        },
        "prefix": true,
        "start": 1109,
        "end": 1113
      },
      "directive": null,
      "start": 1109,
      "end": 1114
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 27,
  "end": 1114
}
```
