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
