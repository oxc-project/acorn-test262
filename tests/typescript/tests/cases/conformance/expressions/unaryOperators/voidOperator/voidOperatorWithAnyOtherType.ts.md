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
        "start": 270,
        "end": 271
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
                        "start": 292,
                        "end": 295
                      },
                      "start": 290,
                      "end": 295
                    },
                    "start": 289,
                    "end": 295
                  },
                  "init": null,
                  "definite": false,
                  "start": 289,
                  "end": 295
                }
              ],
              "declare": false,
              "start": 285,
              "end": 296
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 278,
            "end": 296
          }
        ],
        "start": 272,
        "end": 298
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 263,
      "end": 298
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
            "start": 303,
            "end": 307
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 314,
              "end": 315
            },
            "typeArguments": null,
            "arguments": [],
            "start": 310,
            "end": 317
          },
          "definite": false,
          "start": 303,
          "end": 317
        }
      ],
      "declare": false,
      "start": 299,
      "end": 318
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
            "start": 340,
            "end": 352
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
              "start": 360,
              "end": 364
            },
            "prefix": true,
            "start": 355,
            "end": 364
          },
          "definite": false,
          "start": 340,
          "end": 364
        }
      ],
      "declare": false,
      "start": 336,
      "end": 365
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
            "start": 370,
            "end": 382
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
              "start": 390,
              "end": 394
            },
            "prefix": true,
            "start": 385,
            "end": 394
          },
          "definite": false,
          "start": 370,
          "end": 394
        }
      ],
      "declare": false,
      "start": 366,
      "end": 395
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
            "start": 400,
            "end": 412
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
              "start": 420,
              "end": 421
            },
            "prefix": true,
            "start": 415,
            "end": 421
          },
          "definite": false,
          "start": 400,
          "end": 421
        }
      ],
      "declare": false,
      "start": 396,
      "end": 422
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
            "start": 427,
            "end": 439
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
              "start": 447,
              "end": 448
            },
            "prefix": true,
            "start": 442,
            "end": 448
          },
          "definite": false,
          "start": 427,
          "end": 448
        }
      ],
      "declare": false,
      "start": 423,
      "end": 449
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
            "start": 454,
            "end": 466
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
              "start": 474,
              "end": 477
            },
            "prefix": true,
            "start": 469,
            "end": 477
          },
          "definite": false,
          "start": 454,
          "end": 477
        }
      ],
      "declare": false,
      "start": 450,
      "end": 478
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
            "start": 483,
            "end": 495
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
              "start": 503,
              "end": 507
            },
            "prefix": true,
            "start": 498,
            "end": 507
          },
          "definite": false,
          "start": 483,
          "end": 507
        }
      ],
      "declare": false,
      "start": 479,
      "end": 508
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
            "start": 534,
            "end": 546
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
              "start": 554,
              "end": 563
            },
            "prefix": true,
            "start": 549,
            "end": 563
          },
          "definite": false,
          "start": 534,
          "end": 563
        }
      ],
      "declare": false,
      "start": 530,
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
            "name": "ResultIsAny8",
            "optional": false,
            "typeAnnotation": null,
            "start": 569,
            "end": 581
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 589,
              "end": 593
            },
            "prefix": true,
            "start": 584,
            "end": 593
          },
          "definite": false,
          "start": 569,
          "end": 593
        }
      ],
      "declare": false,
      "start": 565,
      "end": 594
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
            "start": 624,
            "end": 636
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
                "start": 644,
                "end": 648
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 649,
                "end": 650
              },
              "optional": false,
              "computed": true,
              "start": 644,
              "end": 651
            },
            "prefix": true,
            "start": 639,
            "end": 651
          },
          "definite": false,
          "start": 624,
          "end": 651
        }
      ],
      "declare": false,
      "start": 620,
      "end": 651
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
            "start": 656,
            "end": 669
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
                "start": 677,
                "end": 681
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 682,
                "end": 683
              },
              "optional": false,
              "computed": false,
              "start": 677,
              "end": 683
            },
            "prefix": true,
            "start": 672,
            "end": 683
          },
          "definite": false,
          "start": 656,
          "end": 683
        }
      ],
      "declare": false,
      "start": 652,
      "end": 684
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
            "start": 689,
            "end": 702
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
                "start": 710,
                "end": 714
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 715,
                "end": 716
              },
              "optional": false,
              "computed": false,
              "start": 710,
              "end": 716
            },
            "prefix": true,
            "start": 705,
            "end": 716
          },
          "definite": false,
          "start": 689,
          "end": 716
        }
      ],
      "declare": false,
      "start": 685,
      "end": 717
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
            "start": 722,
            "end": 735
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
                "start": 743,
                "end": 747
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 748,
                "end": 749
              },
              "optional": false,
              "computed": false,
              "start": 743,
              "end": 749
            },
            "prefix": true,
            "start": 738,
            "end": 749
          },
          "definite": false,
          "start": 722,
          "end": 749
        }
      ],
      "declare": false,
      "start": 718,
      "end": 750
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
            "start": 755,
            "end": 768
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
                "start": 776,
                "end": 777
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 778,
                "end": 779
              },
              "optional": false,
              "computed": false,
              "start": 776,
              "end": 779
            },
            "prefix": true,
            "start": 771,
            "end": 779
          },
          "definite": false,
          "start": 755,
          "end": 779
        }
      ],
      "declare": false,
      "start": 751,
      "end": 780
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
            "start": 785,
            "end": 798
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
                "start": 806,
                "end": 809
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 806,
              "end": 811
            },
            "prefix": true,
            "start": 801,
            "end": 811
          },
          "definite": false,
          "start": 785,
          "end": 811
        }
      ],
      "declare": false,
      "start": 781,
      "end": 812
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
            "start": 817,
            "end": 830
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
                  "start": 838,
                  "end": 839
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 840,
                  "end": 843
                },
                "optional": false,
                "computed": false,
                "start": 838,
                "end": 843
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 838,
              "end": 845
            },
            "prefix": true,
            "start": 833,
            "end": 845
          },
          "definite": false,
          "start": 817,
          "end": 845
        }
      ],
      "declare": false,
      "start": 813,
      "end": 846
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
            "start": 851,
            "end": 864
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
                "start": 873,
                "end": 876
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY1",
                "optional": false,
                "typeAnnotation": null,
                "start": 879,
                "end": 883
              },
              "start": 873,
              "end": 883
            },
            "prefix": true,
            "start": 867,
            "end": 884
          },
          "definite": false,
          "start": 851,
          "end": 884
        }
      ],
      "declare": false,
      "start": 847,
      "end": 885
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
            "start": 890,
            "end": 903
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
                "start": 912,
                "end": 916
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 919,
                "end": 928
              },
              "start": 912,
              "end": 928
            },
            "prefix": true,
            "start": 906,
            "end": 929
          },
          "definite": false,
          "start": 890,
          "end": 929
        }
      ],
      "declare": false,
      "start": 886,
      "end": 930
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
            "start": 935,
            "end": 948
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
                "start": 957,
                "end": 961
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 964,
                "end": 968
              },
              "start": 957,
              "end": 968
            },
            "prefix": true,
            "start": 951,
            "end": 969
          },
          "definite": false,
          "start": 935,
          "end": 969
        }
      ],
      "declare": false,
      "start": 931,
      "end": 970
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
            "start": 975,
            "end": 988
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
                "start": 997,
                "end": 1006
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1009,
                "end": 1018
              },
              "start": 997,
              "end": 1018
            },
            "prefix": true,
            "start": 991,
            "end": 1019
          },
          "definite": false,
          "start": 975,
          "end": 1019
        }
      ],
      "declare": false,
      "start": 971,
      "end": 1020
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
            "start": 1054,
            "end": 1067
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
                "start": 1080,
                "end": 1083
              },
              "prefix": true,
              "start": 1075,
              "end": 1083
            },
            "prefix": true,
            "start": 1070,
            "end": 1083
          },
          "definite": false,
          "start": 1054,
          "end": 1083
        }
      ],
      "declare": false,
      "start": 1050,
      "end": 1084
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
            "start": 1089,
            "end": 1102
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
                    "start": 1121,
                    "end": 1124
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANY1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1127,
                    "end": 1131
                  },
                  "start": 1121,
                  "end": 1131
                },
                "prefix": true,
                "start": 1115,
                "end": 1132
              },
              "prefix": true,
              "start": 1110,
              "end": 1132
            },
            "prefix": true,
            "start": 1105,
            "end": 1132
          },
          "definite": false,
          "start": 1089,
          "end": 1132
        }
      ],
      "declare": false,
      "start": 1085,
      "end": 1133
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
          "start": 1169,
          "end": 1172
        },
        "prefix": true,
        "start": 1164,
        "end": 1172
      },
      "directive": null,
      "start": 1164,
      "end": 1173
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
          "start": 1179,
          "end": 1183
        },
        "prefix": true,
        "start": 1174,
        "end": 1183
      },
      "directive": null,
      "start": 1174,
      "end": 1184
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
            "start": 1190,
            "end": 1194
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1195,
            "end": 1196
          },
          "optional": false,
          "computed": true,
          "start": 1190,
          "end": 1197
        },
        "prefix": true,
        "start": 1185,
        "end": 1197
      },
      "directive": null,
      "start": 1185,
      "end": 1198
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
              "start": 1204,
              "end": 1207
            },
            "prefix": true,
            "start": 1199,
            "end": 1207
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1209,
            "end": 1213
          }
        ],
        "start": 1199,
        "end": 1213
      },
      "directive": null,
      "start": 1199,
      "end": 1214
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
            "start": 1220,
            "end": 1224
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1225,
            "end": 1226
          },
          "optional": false,
          "computed": false,
          "start": 1220,
          "end": 1226
        },
        "prefix": true,
        "start": 1215,
        "end": 1226
      },
      "directive": null,
      "start": 1215,
      "end": 1227
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
            "start": 1233,
            "end": 1234
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 1235,
            "end": 1236
          },
          "optional": false,
          "computed": false,
          "start": 1233,
          "end": 1236
        },
        "prefix": true,
        "start": 1228,
        "end": 1236
      },
      "directive": null,
      "start": 1228,
      "end": 1237
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 31,
  "end": 1237
}
```
