__ESTREE_TEST__:AST:
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
                "start": 40,
                "end": 43
              },
              "start": 38,
              "end": 43
            },
            "start": 35,
            "end": 43
          },
          "init": null,
          "definite": false,
          "start": 35,
          "end": 43
        }
      ],
      "declare": false,
      "start": 31,
      "end": 44
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
            "start": 49,
            "end": 53
          },
          "init": null,
          "definite": false,
          "start": 49,
          "end": 53
        }
      ],
      "declare": false,
      "start": 45,
      "end": 54
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
                  "start": 65,
                  "end": 68
                },
                "start": 65,
                "end": 70
              },
              "start": 63,
              "end": 70
            },
            "start": 59,
            "end": 70
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 74,
                "end": 76
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 78,
                "end": 80
              }
            ],
            "start": 73,
            "end": 81
          },
          "definite": false,
          "start": 59,
          "end": 81
        }
      ],
      "declare": false,
      "start": 55,
      "end": 82
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
                    "start": 98,
                    "end": 100
                  },
                  "start": 95,
                  "end": 100
                },
                "start": 92,
                "end": 100
              },
              "start": 90,
              "end": 100
            },
            "start": 87,
            "end": 100
          },
          "init": null,
          "definite": false,
          "start": 87,
          "end": 100
        }
      ],
      "declare": false,
      "start": 83,
      "end": 100
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
            "start": 105,
            "end": 109
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
                  "start": 113,
                  "end": 114
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 115,
                  "end": 117
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 113,
                "end": 117
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
                  "start": 118,
                  "end": 119
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 120,
                  "end": 121
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 118,
                "end": 121
              }
            ],
            "start": 112,
            "end": 122
          },
          "definite": false,
          "start": 105,
          "end": 122
        }
      ],
      "declare": false,
      "start": 101,
      "end": 123
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 137
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
          "start": 141,
          "end": 144
        },
        "start": 139,
        "end": 144
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
                  "start": 155,
                  "end": 156
                },
                "init": null,
                "definite": false,
                "start": 155,
                "end": 156
              }
            ],
            "declare": false,
            "start": 151,
            "end": 157
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 170
            },
            "start": 162,
            "end": 171
          }
        ],
        "start": 145,
        "end": 173
      },
      "expression": false,
      "start": 125,
      "end": 173
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
        "start": 180,
        "end": 181
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
              "start": 195,
              "end": 196
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 198,
                "end": 201
              },
              "start": 196,
              "end": 201
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
            "start": 188,
            "end": 202
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
              "start": 214,
              "end": 217
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
                          "start": 234,
                          "end": 235
                        },
                        "init": null,
                        "definite": false,
                        "start": 234,
                        "end": 235
                      }
                    ],
                    "declare": false,
                    "start": 230,
                    "end": 236
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 252,
                      "end": 253
                    },
                    "start": 245,
                    "end": 254
                  }
                ],
                "start": 220,
                "end": 260
              },
              "expression": false,
              "start": 217,
              "end": 260
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 207,
            "end": 260
          }
        ],
        "start": 182,
        "end": 262
      },
      "abstract": false,
      "declare": false,
      "start": 174,
      "end": 262
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 273,
        "end": 274
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
                        "start": 295,
                        "end": 298
                      },
                      "start": 293,
                      "end": 298
                    },
                    "start": 292,
                    "end": 298
                  },
                  "init": null,
                  "definite": false,
                  "start": 292,
                  "end": 298
                }
              ],
              "declare": false,
              "start": 288,
              "end": 299
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 281,
            "end": 299
          }
        ],
        "start": 275,
        "end": 301
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 263,
      "end": 301
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
            "start": 306,
            "end": 310
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 317,
              "end": 318
            },
            "typeArguments": null,
            "arguments": [],
            "start": 313,
            "end": 320
          },
          "definite": false,
          "start": 306,
          "end": 320
        }
      ],
      "declare": false,
      "start": 302,
      "end": 321
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
            "name": "ResultIsAny1",
            "optional": false,
            "typeAnnotation": null,
            "start": 343,
            "end": 355
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY1",
              "optional": false,
              "typeAnnotation": null,
              "start": 363,
              "end": 367
            },
            "prefix": true,
            "start": 358,
            "end": 367
          },
          "definite": false,
          "start": 343,
          "end": 367
        }
      ],
      "declare": false,
      "start": 339,
      "end": 368
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
            "name": "ResultIsAny2",
            "optional": false,
            "typeAnnotation": null,
            "start": 373,
            "end": 385
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY2",
              "optional": false,
              "typeAnnotation": null,
              "start": 393,
              "end": 397
            },
            "prefix": true,
            "start": 388,
            "end": 397
          },
          "definite": false,
          "start": 373,
          "end": 397
        }
      ],
      "declare": false,
      "start": 369,
      "end": 398
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
            "name": "ResultIsAny3",
            "optional": false,
            "typeAnnotation": null,
            "start": 403,
            "end": 415
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 423,
              "end": 424
            },
            "prefix": true,
            "start": 418,
            "end": 424
          },
          "definite": false,
          "start": 403,
          "end": 424
        }
      ],
      "declare": false,
      "start": 399,
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
            "name": "ResultIsAny4",
            "optional": false,
            "typeAnnotation": null,
            "start": 430,
            "end": 442
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 450,
              "end": 451
            },
            "prefix": true,
            "start": 445,
            "end": 451
          },
          "definite": false,
          "start": 430,
          "end": 451
        }
      ],
      "declare": false,
      "start": 426,
      "end": 452
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
            "name": "ResultIsAny5",
            "optional": false,
            "typeAnnotation": null,
            "start": 457,
            "end": 469
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 477,
              "end": 480
            },
            "prefix": true,
            "start": 472,
            "end": 480
          },
          "definite": false,
          "start": 457,
          "end": 480
        }
      ],
      "declare": false,
      "start": 453,
      "end": 481
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
            "name": "ResultIsAny6",
            "optional": false,
            "typeAnnotation": null,
            "start": 486,
            "end": 498
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null,
              "start": 506,
              "end": 510
            },
            "prefix": true,
            "start": 501,
            "end": 510
          },
          "definite": false,
          "start": 486,
          "end": 510
        }
      ],
      "declare": false,
      "start": 482,
      "end": 511
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
            "name": "ResultIsAny7",
            "optional": false,
            "typeAnnotation": null,
            "start": 537,
            "end": 549
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 557,
              "end": 566
            },
            "prefix": true,
            "start": 552,
            "end": 566
          },
          "definite": false,
          "start": 537,
          "end": 566
        }
      ],
      "declare": false,
      "start": 533,
      "end": 567
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
            "name": "ResultIsAny8",
            "optional": false,
            "typeAnnotation": null,
            "start": 572,
            "end": 584
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 592,
              "end": 596
            },
            "prefix": true,
            "start": 587,
            "end": 596
          },
          "definite": false,
          "start": 572,
          "end": 596
        }
      ],
      "declare": false,
      "start": 568,
      "end": 597
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
            "name": "ResultIsAny9",
            "optional": false,
            "typeAnnotation": null,
            "start": 627,
            "end": 639
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY2",
                "optional": false,
                "typeAnnotation": null,
                "start": 647,
                "end": 651
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 652,
                "end": 653
              },
              "optional": false,
              "computed": true,
              "start": 647,
              "end": 654
            },
            "prefix": true,
            "start": 642,
            "end": 654
          },
          "definite": false,
          "start": 627,
          "end": 654
        }
      ],
      "declare": false,
      "start": 623,
      "end": 654
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
            "name": "ResultIsAny10",
            "optional": false,
            "typeAnnotation": null,
            "start": 659,
            "end": 672
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null,
                "start": 680,
                "end": 684
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 685,
                "end": 686
              },
              "optional": false,
              "computed": false,
              "start": 680,
              "end": 686
            },
            "prefix": true,
            "start": 675,
            "end": 686
          },
          "definite": false,
          "start": 659,
          "end": 686
        }
      ],
      "declare": false,
      "start": 655,
      "end": 687
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
            "name": "ResultIsAny11",
            "optional": false,
            "typeAnnotation": null,
            "start": 692,
            "end": 705
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null,
                "start": 713,
                "end": 717
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 718,
                "end": 719
              },
              "optional": false,
              "computed": false,
              "start": 713,
              "end": 719
            },
            "prefix": true,
            "start": 708,
            "end": 719
          },
          "definite": false,
          "start": 692,
          "end": 719
        }
      ],
      "declare": false,
      "start": 688,
      "end": 720
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
            "name": "ResultIsAny12",
            "optional": false,
            "typeAnnotation": null,
            "start": 725,
            "end": 738
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 746,
                "end": 750
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 751,
                "end": 752
              },
              "optional": false,
              "computed": false,
              "start": 746,
              "end": 752
            },
            "prefix": true,
            "start": 741,
            "end": 752
          },
          "definite": false,
          "start": 725,
          "end": 752
        }
      ],
      "declare": false,
      "start": 721,
      "end": 753
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
            "name": "ResultIsAny13",
            "optional": false,
            "typeAnnotation": null,
            "start": 758,
            "end": 771
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 779,
                "end": 780
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 781,
                "end": 782
              },
              "optional": false,
              "computed": false,
              "start": 779,
              "end": 782
            },
            "prefix": true,
            "start": 774,
            "end": 782
          },
          "definite": false,
          "start": 758,
          "end": 782
        }
      ],
      "declare": false,
      "start": 754,
      "end": 783
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
            "name": "ResultIsAny14",
            "optional": false,
            "typeAnnotation": null,
            "start": 788,
            "end": 801
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 809,
                "end": 812
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 809,
              "end": 814
            },
            "prefix": true,
            "start": 804,
            "end": 814
          },
          "definite": false,
          "start": 788,
          "end": 814
        }
      ],
      "declare": false,
      "start": 784,
      "end": 815
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
            "name": "ResultIsAny15",
            "optional": false,
            "typeAnnotation": null,
            "start": 820,
            "end": 833
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
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
                  "start": 841,
                  "end": 842
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 843,
                  "end": 846
                },
                "optional": false,
                "computed": false,
                "start": 841,
                "end": 846
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 841,
              "end": 848
            },
            "prefix": true,
            "start": 836,
            "end": 848
          },
          "definite": false,
          "start": 820,
          "end": 848
        }
      ],
      "declare": false,
      "start": 816,
      "end": 849
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
            "name": "ResultIsAny16",
            "optional": false,
            "typeAnnotation": null,
            "start": 854,
            "end": 867
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null,
                "start": 876,
                "end": 879
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY1",
                "optional": false,
                "typeAnnotation": null,
                "start": 882,
                "end": 886
              },
              "start": 876,
              "end": 886
            },
            "prefix": true,
            "start": 870,
            "end": 887
          },
          "definite": false,
          "start": 854,
          "end": 887
        }
      ],
      "declare": false,
      "start": 850,
      "end": 888
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
            "name": "ResultIsAny17",
            "optional": false,
            "typeAnnotation": null,
            "start": 893,
            "end": 906
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 915,
                "end": 919
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 922,
                "end": 931
              },
              "start": 915,
              "end": 931
            },
            "prefix": true,
            "start": 909,
            "end": 932
          },
          "definite": false,
          "start": 893,
          "end": 932
        }
      ],
      "declare": false,
      "start": 889,
      "end": 933
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
            "name": "ResultIsAny18",
            "optional": false,
            "typeAnnotation": null,
            "start": 938,
            "end": 951
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 960,
                "end": 964
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 967,
                "end": 971
              },
              "start": 960,
              "end": 971
            },
            "prefix": true,
            "start": 954,
            "end": 972
          },
          "definite": false,
          "start": 938,
          "end": 972
        }
      ],
      "declare": false,
      "start": 934,
      "end": 973
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
            "name": "ResultIsAny19",
            "optional": false,
            "typeAnnotation": null,
            "start": 978,
            "end": 991
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1000,
                "end": 1009
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1012,
                "end": 1021
              },
              "start": 1000,
              "end": 1021
            },
            "prefix": true,
            "start": 994,
            "end": 1022
          },
          "definite": false,
          "start": 978,
          "end": 1022
        }
      ],
      "declare": false,
      "start": 974,
      "end": 1023
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
            "name": "ResultIsAny20",
            "optional": false,
            "typeAnnotation": null,
            "start": 1057,
            "end": 1070
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "UnaryExpression",
              "operator": "void",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null,
                "start": 1083,
                "end": 1086
              },
              "prefix": true,
              "start": 1078,
              "end": 1086
            },
            "prefix": true,
            "start": 1073,
            "end": 1086
          },
          "definite": false,
          "start": 1057,
          "end": 1086
        }
      ],
      "declare": false,
      "start": 1053,
      "end": 1087
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
            "name": "ResultIsAny21",
            "optional": false,
            "typeAnnotation": null,
            "start": 1092,
            "end": 1105
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "UnaryExpression",
              "operator": "void",
              "argument": {
                "type": "UnaryExpression",
                "operator": "void",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANY",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1124,
                    "end": 1127
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANY1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1130,
                    "end": 1134
                  },
                  "start": 1124,
                  "end": 1134
                },
                "prefix": true,
                "start": 1118,
                "end": 1135
              },
              "prefix": true,
              "start": 1113,
              "end": 1135
            },
            "prefix": true,
            "start": 1108,
            "end": 1135
          },
          "definite": false,
          "start": 1092,
          "end": 1135
        }
      ],
      "declare": false,
      "start": 1088,
      "end": 1136
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ANY",
          "optional": false,
          "typeAnnotation": null,
          "start": 1172,
          "end": 1175
        },
        "prefix": true,
        "start": 1167,
        "end": 1175
      },
      "directive": null,
      "start": 1167,
      "end": 1176
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ANY1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1182,
          "end": 1186
        },
        "prefix": true,
        "start": 1177,
        "end": 1186
      },
      "directive": null,
      "start": 1177,
      "end": 1187
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1193,
            "end": 1197
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1198,
            "end": 1199
          },
          "optional": false,
          "computed": true,
          "start": 1193,
          "end": 1200
        },
        "prefix": true,
        "start": 1188,
        "end": 1200
      },
      "directive": null,
      "start": 1188,
      "end": 1201
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY",
              "optional": false,
              "typeAnnotation": null,
              "start": 1207,
              "end": 1210
            },
            "prefix": true,
            "start": 1202,
            "end": 1210
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1212,
            "end": 1216
          }
        ],
        "start": 1202,
        "end": 1216
      },
      "directive": null,
      "start": 1202,
      "end": 1217
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 1223,
            "end": 1227
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1228,
            "end": 1229
          },
          "optional": false,
          "computed": false,
          "start": 1223,
          "end": 1229
        },
        "prefix": true,
        "start": 1218,
        "end": 1229
      },
      "directive": null,
      "start": 1218,
      "end": 1230
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 1236,
            "end": 1237
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 1238,
            "end": 1239
          },
          "optional": false,
          "computed": false,
          "start": 1236,
          "end": 1239
        },
        "prefix": true,
        "start": 1231,
        "end": 1239
      },
      "directive": null,
      "start": 1231,
      "end": 1240
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 31,
  "end": 1240
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 31,
    "end": 34,
    "range": [
      31,
      34
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 35,
    "end": 38,
    "range": [
      35,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 40,
    "end": 43,
    "range": [
      40,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 45,
    "end": 48,
    "range": [
      45,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 49,
    "end": 53,
    "range": [
      49,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 55,
    "end": 58,
    "range": [
      55,
      58
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 59,
    "end": 63,
    "range": [
      59,
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
    "value": "any",
    "start": 65,
    "end": 68,
    "range": [
      65,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 74,
    "end": 76,
    "range": [
      74,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 78,
    "end": 80,
    "range": [
      78,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 81,
    "end": 82,
    "range": [
      81,
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
    "value": "obj",
    "start": 87,
    "end": 90,
    "range": [
      87,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 95,
    "end": 97,
    "range": [
      95,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 101,
    "end": 104,
    "range": [
      101,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 105,
    "end": 109,
    "range": [
      105,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 115,
    "end": 117,
    "range": [
      115,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 125,
    "end": 133,
    "range": [
      125,
      133
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 134,
    "end": 137,
    "range": [
      134,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 141,
    "end": 144,
    "range": [
      141,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 151,
    "end": 154,
    "range": [
      151,
      154
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 155,
    "end": 156,
    "range": [
      155,
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
    "value": "return",
    "start": 162,
    "end": 168,
    "range": [
      162,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 174,
    "end": 179,
    "range": [
      174,
      179
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 188,
    "end": 194,
    "range": [
      188,
      194
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 198,
    "end": 201,
    "range": [
      198,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 207,
    "end": 213,
    "range": [
      207,
      213
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 214,
    "end": 217,
    "range": [
      214,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 230,
    "end": 233,
    "range": [
      230,
      233
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 245,
    "end": 251,
    "range": [
      245,
      251
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 252,
    "end": 253,
    "range": [
      252,
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
    "type": "Punctuator",
    "value": "}",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 263,
    "end": 272,
    "range": [
      263,
      272
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 281,
    "end": 287,
    "range": [
      281,
      287
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 288,
    "end": 291,
    "range": [
      288,
      291
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 295,
    "end": 298,
    "range": [
      295,
      298
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 302,
    "end": 305,
    "range": [
      302,
      305
    ]
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 306,
    "end": 310,
    "range": [
      306,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 313,
    "end": 316,
    "range": [
      313,
      316
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 320,
    "end": 321,
    "range": [
      320,
      321
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 339,
    "end": 342,
    "range": [
      339,
      342
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny1",
    "start": 343,
    "end": 355,
    "range": [
      343,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 358,
    "end": 362,
    "range": [
      358,
      362
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 363,
    "end": 367,
    "range": [
      363,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 369,
    "end": 372,
    "range": [
      369,
      372
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny2",
    "start": 373,
    "end": 385,
    "range": [
      373,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 388,
    "end": 392,
    "range": [
      388,
      392
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 393,
    "end": 397,
    "range": [
      393,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 399,
    "end": 402,
    "range": [
      399,
      402
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny3",
    "start": 403,
    "end": 415,
    "range": [
      403,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 418,
    "end": 422,
    "range": [
      418,
      422
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 426,
    "end": 429,
    "range": [
      426,
      429
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny4",
    "start": 430,
    "end": 442,
    "range": [
      430,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 445,
    "end": 449,
    "range": [
      445,
      449
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 453,
    "end": 456,
    "range": [
      453,
      456
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny5",
    "start": 457,
    "end": 469,
    "range": [
      457,
      469
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 472,
    "end": 476,
    "range": [
      472,
      476
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 477,
    "end": 480,
    "range": [
      477,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 482,
    "end": 485,
    "range": [
      482,
      485
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny6",
    "start": 486,
    "end": 498,
    "range": [
      486,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 501,
    "end": 505,
    "range": [
      501,
      505
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 506,
    "end": 510,
    "range": [
      506,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
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
    "value": "ResultIsAny7",
    "start": 537,
    "end": 549,
    "range": [
      537,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 552,
    "end": 556,
    "range": [
      552,
      556
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 557,
    "end": 566,
    "range": [
      557,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 568,
    "end": 571,
    "range": [
      568,
      571
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny8",
    "start": 572,
    "end": 584,
    "range": [
      572,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 587,
    "end": 591,
    "range": [
      587,
      591
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 592,
    "end": 596,
    "range": [
      592,
      596
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 623,
    "end": 626,
    "range": [
      623,
      626
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny9",
    "start": 627,
    "end": 639,
    "range": [
      627,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 642,
    "end": 646,
    "range": [
      642,
      646
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 647,
    "end": 651,
    "range": [
      647,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 655,
    "end": 658,
    "range": [
      655,
      658
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny10",
    "start": 659,
    "end": 672,
    "range": [
      659,
      672
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 675,
    "end": 679,
    "range": [
      675,
      679
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 680,
    "end": 684,
    "range": [
      680,
      684
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 684,
    "end": 685,
    "range": [
      684,
      685
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 685,
    "end": 686,
    "range": [
      685,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 688,
    "end": 691,
    "range": [
      688,
      691
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny11",
    "start": 692,
    "end": 705,
    "range": [
      692,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 708,
    "end": 712,
    "range": [
      708,
      712
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 713,
    "end": 717,
    "range": [
      713,
      717
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 717,
    "end": 718,
    "range": [
      717,
      718
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 718,
    "end": 719,
    "range": [
      718,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 721,
    "end": 724,
    "range": [
      721,
      724
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny12",
    "start": 725,
    "end": 738,
    "range": [
      725,
      738
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 739,
    "end": 740,
    "range": [
      739,
      740
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 741,
    "end": 745,
    "range": [
      741,
      745
    ]
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 746,
    "end": 750,
    "range": [
      746,
      750
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 754,
    "end": 757,
    "range": [
      754,
      757
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny13",
    "start": 758,
    "end": 771,
    "range": [
      758,
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
    "type": "Keyword",
    "value": "void",
    "start": 774,
    "end": 778,
    "range": [
      774,
      778
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 779,
    "end": 780,
    "range": [
      779,
      780
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 780,
    "end": 781,
    "range": [
      780,
      781
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 781,
    "end": 782,
    "range": [
      781,
      782
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 782,
    "end": 783,
    "range": [
      782,
      783
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 784,
    "end": 787,
    "range": [
      784,
      787
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny14",
    "start": 788,
    "end": 801,
    "range": [
      788,
      801
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 802,
    "end": 803,
    "range": [
      802,
      803
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 804,
    "end": 808,
    "range": [
      804,
      808
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 809,
    "end": 812,
    "range": [
      809,
      812
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 812,
    "end": 813,
    "range": [
      812,
      813
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 813,
    "end": 814,
    "range": [
      813,
      814
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 814,
    "end": 815,
    "range": [
      814,
      815
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 816,
    "end": 819,
    "range": [
      816,
      819
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny15",
    "start": 820,
    "end": 833,
    "range": [
      820,
      833
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 834,
    "end": 835,
    "range": [
      834,
      835
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 836,
    "end": 840,
    "range": [
      836,
      840
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 841,
    "end": 842,
    "range": [
      841,
      842
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 842,
    "end": 843,
    "range": [
      842,
      843
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 843,
    "end": 846,
    "range": [
      843,
      846
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 846,
    "end": 847,
    "range": [
      846,
      847
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 847,
    "end": 848,
    "range": [
      847,
      848
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 848,
    "end": 849,
    "range": [
      848,
      849
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 850,
    "end": 853,
    "range": [
      850,
      853
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny16",
    "start": 854,
    "end": 867,
    "range": [
      854,
      867
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 868,
    "end": 869,
    "range": [
      868,
      869
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 870,
    "end": 874,
    "range": [
      870,
      874
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 875,
    "end": 876,
    "range": [
      875,
      876
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 876,
    "end": 879,
    "range": [
      876,
      879
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 880,
    "end": 881,
    "range": [
      880,
      881
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 882,
    "end": 886,
    "range": [
      882,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 887,
    "end": 888,
    "range": [
      887,
      888
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 889,
    "end": 892,
    "range": [
      889,
      892
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny17",
    "start": 893,
    "end": 906,
    "range": [
      893,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 909,
    "end": 913,
    "range": [
      909,
      913
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 914,
    "end": 915,
    "range": [
      914,
      915
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 915,
    "end": 919,
    "range": [
      915,
      919
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 920,
    "end": 921,
    "range": [
      920,
      921
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 922,
    "end": 931,
    "range": [
      922,
      931
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 931,
    "end": 932,
    "range": [
      931,
      932
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 932,
    "end": 933,
    "range": [
      932,
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
    "value": "ResultIsAny18",
    "start": 938,
    "end": 951,
    "range": [
      938,
      951
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 954,
    "end": 958,
    "range": [
      954,
      958
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 959,
    "end": 960,
    "range": [
      959,
      960
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 960,
    "end": 964,
    "range": [
      960,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 965,
    "end": 966,
    "range": [
      965,
      966
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 967,
    "end": 971,
    "range": [
      967,
      971
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "var",
    "start": 974,
    "end": 977,
    "range": [
      974,
      977
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny19",
    "start": 978,
    "end": 991,
    "range": [
      978,
      991
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 992,
    "end": 993,
    "range": [
      992,
      993
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 994,
    "end": 998,
    "range": [
      994,
      998
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 999,
    "end": 1000,
    "range": [
      999,
      1000
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1000,
    "end": 1009,
    "range": [
      1000,
      1009
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1012,
    "end": 1021,
    "range": [
      1012,
      1021
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1021,
    "end": 1022,
    "range": [
      1021,
      1022
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1022,
    "end": 1023,
    "range": [
      1022,
      1023
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1053,
    "end": 1056,
    "range": [
      1053,
      1056
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny20",
    "start": 1057,
    "end": 1070,
    "range": [
      1057,
      1070
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1071,
    "end": 1072,
    "range": [
      1071,
      1072
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1073,
    "end": 1077,
    "range": [
      1073,
      1077
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1078,
    "end": 1082,
    "range": [
      1078,
      1082
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1083,
    "end": 1086,
    "range": [
      1083,
      1086
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1086,
    "end": 1087,
    "range": [
      1086,
      1087
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1088,
    "end": 1091,
    "range": [
      1088,
      1091
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsAny21",
    "start": 1092,
    "end": 1105,
    "range": [
      1092,
      1105
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1106,
    "end": 1107,
    "range": [
      1106,
      1107
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1108,
    "end": 1112,
    "range": [
      1108,
      1112
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1113,
    "end": 1117,
    "range": [
      1113,
      1117
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1118,
    "end": 1122,
    "range": [
      1118,
      1122
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1123,
    "end": 1124,
    "range": [
      1123,
      1124
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1124,
    "end": 1127,
    "range": [
      1124,
      1127
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1128,
    "end": 1129,
    "range": [
      1128,
      1129
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 1130,
    "end": 1134,
    "range": [
      1130,
      1134
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1134,
    "end": 1135,
    "range": [
      1134,
      1135
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1135,
    "end": 1136,
    "range": [
      1135,
      1136
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1167,
    "end": 1171,
    "range": [
      1167,
      1171
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1172,
    "end": 1175,
    "range": [
      1172,
      1175
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1175,
    "end": 1176,
    "range": [
      1175,
      1176
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1177,
    "end": 1181,
    "range": [
      1177,
      1181
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 1182,
    "end": 1186,
    "range": [
      1182,
      1186
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1186,
    "end": 1187,
    "range": [
      1186,
      1187
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1188,
    "end": 1192,
    "range": [
      1188,
      1192
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 1193,
    "end": 1197,
    "range": [
      1193,
      1197
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1197,
    "end": 1198,
    "range": [
      1197,
      1198
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1198,
    "end": 1199,
    "range": [
      1198,
      1199
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1199,
    "end": 1200,
    "range": [
      1199,
      1200
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1200,
    "end": 1201,
    "range": [
      1200,
      1201
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1202,
    "end": 1206,
    "range": [
      1202,
      1206
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1207,
    "end": 1210,
    "range": [
      1207,
      1210
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1210,
    "end": 1211,
    "range": [
      1210,
      1211
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 1212,
    "end": 1216,
    "range": [
      1212,
      1216
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1216,
    "end": 1217,
    "range": [
      1216,
      1217
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1218,
    "end": 1222,
    "range": [
      1218,
      1222
    ]
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 1223,
    "end": 1227,
    "range": [
      1223,
      1227
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1228,
    "end": 1229,
    "range": [
      1228,
      1229
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1229,
    "end": 1230,
    "range": [
      1229,
      1230
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1231,
    "end": 1235,
    "range": [
      1231,
      1235
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1236,
    "end": 1237,
    "range": [
      1236,
      1237
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1237,
    "end": 1238,
    "range": [
      1237,
      1238
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1238,
    "end": 1239,
    "range": [
      1238,
      1239
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1239,
    "end": 1240,
    "range": [
      1239,
      1240
    ]
  }
]
```
