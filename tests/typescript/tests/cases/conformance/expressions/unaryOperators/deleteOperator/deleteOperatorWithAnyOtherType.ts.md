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
                "start": 42,
                "end": 45
              },
              "start": 40,
              "end": 45
            },
            "start": 37,
            "end": 45
          },
          "init": null,
          "definite": false,
          "start": 37,
          "end": 45
        }
      ],
      "declare": false,
      "start": 33,
      "end": 46
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
            "start": 51,
            "end": 55
          },
          "init": null,
          "definite": false,
          "start": 51,
          "end": 55
        }
      ],
      "declare": false,
      "start": 47,
      "end": 56
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
                  "start": 67,
                  "end": 70
                },
                "start": 67,
                "end": 72
              },
              "start": 65,
              "end": 72
            },
            "start": 61,
            "end": 72
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 76,
                "end": 78
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 80,
                "end": 82
              }
            ],
            "start": 75,
            "end": 83
          },
          "definite": false,
          "start": 61,
          "end": 83
        }
      ],
      "declare": false,
      "start": 57,
      "end": 84
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
                    "start": 100,
                    "end": 102
                  },
                  "start": 97,
                  "end": 102
                },
                "start": 94,
                "end": 102
              },
              "start": 92,
              "end": 102
            },
            "start": 89,
            "end": 102
          },
          "init": null,
          "definite": false,
          "start": 89,
          "end": 102
        }
      ],
      "declare": false,
      "start": 85,
      "end": 103
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
            "start": 108,
            "end": 112
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
                  "start": 117,
                  "end": 118
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 120,
                  "end": 122
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 117,
                "end": 122
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
                  "start": 124,
                  "end": 125
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
                    "start": 133,
                    "end": 136
                  },
                  "id": null,
                  "generator": false,
                  "start": 127,
                  "end": 136
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 124,
                "end": 136
              }
            ],
            "start": 115,
            "end": 137
          },
          "definite": false,
          "start": 108,
          "end": 137
        }
      ],
      "declare": false,
      "start": 104,
      "end": 138
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 148,
        "end": 151
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
          "start": 155,
          "end": 158
        },
        "start": 153,
        "end": 158
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
                  "start": 169,
                  "end": 170
                },
                "init": null,
                "definite": false,
                "start": 169,
                "end": 170
              }
            ],
            "declare": false,
            "start": 165,
            "end": 171
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 183,
              "end": 184
            },
            "start": 176,
            "end": 185
          }
        ],
        "start": 159,
        "end": 187
      },
      "expression": false,
      "start": 139,
      "end": 187
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
        "start": 194,
        "end": 195
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
              "start": 209,
              "end": 210
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 212,
                "end": 215
              },
              "start": 210,
              "end": 215
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
            "start": 202,
            "end": 216
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
              "start": 228,
              "end": 231
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
                          "start": 248,
                          "end": 249
                        },
                        "init": null,
                        "definite": false,
                        "start": 248,
                        "end": 249
                      }
                    ],
                    "declare": false,
                    "start": 244,
                    "end": 250
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 266,
                      "end": 267
                    },
                    "start": 259,
                    "end": 268
                  }
                ],
                "start": 234,
                "end": 274
              },
              "expression": false,
              "start": 231,
              "end": 274
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 221,
            "end": 274
          }
        ],
        "start": 196,
        "end": 276
      },
      "abstract": false,
      "declare": false,
      "start": 188,
      "end": 276
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 287,
        "end": 288
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
                        "start": 309,
                        "end": 312
                      },
                      "start": 307,
                      "end": 312
                    },
                    "start": 306,
                    "end": 312
                  },
                  "init": null,
                  "definite": false,
                  "start": 306,
                  "end": 312
                }
              ],
              "declare": false,
              "start": 302,
              "end": 313
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 295,
            "end": 313
          }
        ],
        "start": 289,
        "end": 315
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 277,
      "end": 315
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
            "start": 320,
            "end": 324
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 331,
              "end": 332
            },
            "typeArguments": null,
            "arguments": [],
            "start": 327,
            "end": 334
          },
          "definite": false,
          "start": 320,
          "end": 334
        }
      ],
      "declare": false,
      "start": 316,
      "end": 335
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
            "name": "ResultIsBoolean1",
            "optional": false,
            "typeAnnotation": null,
            "start": 357,
            "end": 373
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY1",
              "optional": false,
              "typeAnnotation": null,
              "start": 383,
              "end": 387
            },
            "prefix": true,
            "start": 376,
            "end": 387
          },
          "definite": false,
          "start": 357,
          "end": 387
        }
      ],
      "declare": false,
      "start": 353,
      "end": 388
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
            "name": "ResultIsBoolean2",
            "optional": false,
            "typeAnnotation": null,
            "start": 393,
            "end": 409
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY2",
              "optional": false,
              "typeAnnotation": null,
              "start": 419,
              "end": 423
            },
            "prefix": true,
            "start": 412,
            "end": 423
          },
          "definite": false,
          "start": 393,
          "end": 423
        }
      ],
      "declare": false,
      "start": 389,
      "end": 424
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
            "name": "ResultIsBoolean3",
            "optional": false,
            "typeAnnotation": null,
            "start": 429,
            "end": 445
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 455,
              "end": 456
            },
            "prefix": true,
            "start": 448,
            "end": 456
          },
          "definite": false,
          "start": 429,
          "end": 456
        }
      ],
      "declare": false,
      "start": 425,
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
            "name": "ResultIsBoolean4",
            "optional": false,
            "typeAnnotation": null,
            "start": 462,
            "end": 478
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 488,
              "end": 489
            },
            "prefix": true,
            "start": 481,
            "end": 489
          },
          "definite": false,
          "start": 462,
          "end": 489
        }
      ],
      "declare": false,
      "start": 458,
      "end": 490
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
            "name": "ResultIsBoolean5",
            "optional": false,
            "typeAnnotation": null,
            "start": 495,
            "end": 511
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 521,
              "end": 524
            },
            "prefix": true,
            "start": 514,
            "end": 524
          },
          "definite": false,
          "start": 495,
          "end": 524
        }
      ],
      "declare": false,
      "start": 491,
      "end": 525
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
            "name": "ResultIsBoolean6",
            "optional": false,
            "typeAnnotation": null,
            "start": 530,
            "end": 546
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null,
              "start": 556,
              "end": 560
            },
            "prefix": true,
            "start": 549,
            "end": 560
          },
          "definite": false,
          "start": 530,
          "end": 560
        }
      ],
      "declare": false,
      "start": 526,
      "end": 561
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
            "name": "ResultIsBoolean7",
            "optional": false,
            "typeAnnotation": null,
            "start": 587,
            "end": 603
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 613,
              "end": 622
            },
            "prefix": true,
            "start": 606,
            "end": 622
          },
          "definite": false,
          "start": 587,
          "end": 622
        }
      ],
      "declare": false,
      "start": 583,
      "end": 623
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
            "name": "ResultIsBoolean8",
            "optional": false,
            "typeAnnotation": null,
            "start": 628,
            "end": 644
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 654,
              "end": 658
            },
            "prefix": true,
            "start": 647,
            "end": 658
          },
          "definite": false,
          "start": 628,
          "end": 658
        }
      ],
      "declare": false,
      "start": 624,
      "end": 659
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
            "name": "ResultIsBoolean9",
            "optional": false,
            "typeAnnotation": null,
            "start": 689,
            "end": 705
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY2",
                "optional": false,
                "typeAnnotation": null,
                "start": 715,
                "end": 719
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 720,
                "end": 721
              },
              "optional": false,
              "computed": true,
              "start": 715,
              "end": 722
            },
            "prefix": true,
            "start": 708,
            "end": 722
          },
          "definite": false,
          "start": 689,
          "end": 722
        }
      ],
      "declare": false,
      "start": 685,
      "end": 723
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
            "name": "ResultIsBoolean10",
            "optional": false,
            "typeAnnotation": null,
            "start": 728,
            "end": 745
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null,
                "start": 755,
                "end": 759
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 760,
                "end": 761
              },
              "optional": false,
              "computed": false,
              "start": 755,
              "end": 761
            },
            "prefix": true,
            "start": 748,
            "end": 761
          },
          "definite": false,
          "start": 728,
          "end": 761
        }
      ],
      "declare": false,
      "start": 724,
      "end": 762
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
            "name": "ResultIsBoolean11",
            "optional": false,
            "typeAnnotation": null,
            "start": 767,
            "end": 784
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null,
                "start": 794,
                "end": 798
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 799,
                "end": 800
              },
              "optional": false,
              "computed": false,
              "start": 794,
              "end": 800
            },
            "prefix": true,
            "start": 787,
            "end": 800
          },
          "definite": false,
          "start": 767,
          "end": 800
        }
      ],
      "declare": false,
      "start": 763,
      "end": 801
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
            "name": "ResultIsBoolean12",
            "optional": false,
            "typeAnnotation": null,
            "start": 806,
            "end": 823
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 833,
                "end": 837
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 838,
                "end": 839
              },
              "optional": false,
              "computed": false,
              "start": 833,
              "end": 839
            },
            "prefix": true,
            "start": 826,
            "end": 839
          },
          "definite": false,
          "start": 806,
          "end": 839
        }
      ],
      "declare": false,
      "start": 802,
      "end": 840
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
            "name": "ResultIsBoolean13",
            "optional": false,
            "typeAnnotation": null,
            "start": 845,
            "end": 862
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 872,
                "end": 873
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 874,
                "end": 875
              },
              "optional": false,
              "computed": false,
              "start": 872,
              "end": 875
            },
            "prefix": true,
            "start": 865,
            "end": 875
          },
          "definite": false,
          "start": 845,
          "end": 875
        }
      ],
      "declare": false,
      "start": 841,
      "end": 876
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
            "name": "ResultIsBoolean14",
            "optional": false,
            "typeAnnotation": null,
            "start": 881,
            "end": 898
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 908,
                "end": 911
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 908,
              "end": 913
            },
            "prefix": true,
            "start": 901,
            "end": 913
          },
          "definite": false,
          "start": 881,
          "end": 913
        }
      ],
      "declare": false,
      "start": 877,
      "end": 914
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
            "name": "ResultIsBoolean15",
            "optional": false,
            "typeAnnotation": null,
            "start": 919,
            "end": 936
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
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
                  "start": 946,
                  "end": 947
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 948,
                  "end": 951
                },
                "optional": false,
                "computed": false,
                "start": 946,
                "end": 951
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 946,
              "end": 953
            },
            "prefix": true,
            "start": 939,
            "end": 953
          },
          "definite": false,
          "start": 919,
          "end": 953
        }
      ],
      "declare": false,
      "start": 915,
      "end": 954
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
            "name": "ResultIsBoolean16",
            "optional": false,
            "typeAnnotation": null,
            "start": 959,
            "end": 976
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null,
                "start": 987,
                "end": 990
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY1",
                "optional": false,
                "typeAnnotation": null,
                "start": 993,
                "end": 997
              },
              "start": 987,
              "end": 997
            },
            "prefix": true,
            "start": 979,
            "end": 998
          },
          "definite": false,
          "start": 959,
          "end": 998
        }
      ],
      "declare": false,
      "start": 955,
      "end": 999
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
            "name": "ResultIsBoolean17",
            "optional": false,
            "typeAnnotation": null,
            "start": 1004,
            "end": 1021
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1032,
                "end": 1036
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1039,
                "end": 1048
              },
              "start": 1032,
              "end": 1048
            },
            "prefix": true,
            "start": 1024,
            "end": 1049
          },
          "definite": false,
          "start": 1004,
          "end": 1049
        }
      ],
      "declare": false,
      "start": 1000,
      "end": 1050
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
            "name": "ResultIsBoolean18",
            "optional": false,
            "typeAnnotation": null,
            "start": 1055,
            "end": 1072
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1083,
                "end": 1087
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1090,
                "end": 1094
              },
              "start": 1083,
              "end": 1094
            },
            "prefix": true,
            "start": 1075,
            "end": 1095
          },
          "definite": false,
          "start": 1055,
          "end": 1095
        }
      ],
      "declare": false,
      "start": 1051,
      "end": 1096
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
            "name": "ResultIsBoolean19",
            "optional": false,
            "typeAnnotation": null,
            "start": 1101,
            "end": 1118
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1129,
                "end": 1138
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1141,
                "end": 1150
              },
              "start": 1129,
              "end": 1150
            },
            "prefix": true,
            "start": 1121,
            "end": 1151
          },
          "definite": false,
          "start": 1101,
          "end": 1151
        }
      ],
      "declare": false,
      "start": 1097,
      "end": 1152
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
            "name": "ResultIsBoolean20",
            "optional": false,
            "typeAnnotation": null,
            "start": 1188,
            "end": 1205
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "UnaryExpression",
              "operator": "delete",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null,
                "start": 1222,
                "end": 1225
              },
              "prefix": true,
              "start": 1215,
              "end": 1225
            },
            "prefix": true,
            "start": 1208,
            "end": 1225
          },
          "definite": false,
          "start": 1188,
          "end": 1225
        }
      ],
      "declare": false,
      "start": 1184,
      "end": 1226
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
            "name": "ResultIsBoolean21",
            "optional": false,
            "typeAnnotation": null,
            "start": 1231,
            "end": 1248
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "UnaryExpression",
              "operator": "delete",
              "argument": {
                "type": "UnaryExpression",
                "operator": "delete",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANY",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1273,
                    "end": 1276
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANY1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1279,
                    "end": 1283
                  },
                  "start": 1273,
                  "end": 1283
                },
                "prefix": true,
                "start": 1265,
                "end": 1284
              },
              "prefix": true,
              "start": 1258,
              "end": 1284
            },
            "prefix": true,
            "start": 1251,
            "end": 1284
          },
          "definite": false,
          "start": 1231,
          "end": 1284
        }
      ],
      "declare": false,
      "start": 1227,
      "end": 1285
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ANY",
          "optional": false,
          "typeAnnotation": null,
          "start": 1323,
          "end": 1326
        },
        "prefix": true,
        "start": 1316,
        "end": 1326
      },
      "directive": null,
      "start": 1316,
      "end": 1327
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ANY1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1335,
          "end": 1339
        },
        "prefix": true,
        "start": 1328,
        "end": 1339
      },
      "directive": null,
      "start": 1328,
      "end": 1340
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1348,
            "end": 1352
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1353,
            "end": 1354
          },
          "optional": false,
          "computed": true,
          "start": 1348,
          "end": 1355
        },
        "prefix": true,
        "start": 1341,
        "end": 1355
      },
      "directive": null,
      "start": 1341,
      "end": 1356
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY",
              "optional": false,
              "typeAnnotation": null,
              "start": 1364,
              "end": 1367
            },
            "prefix": true,
            "start": 1357,
            "end": 1367
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1369,
            "end": 1373
          }
        ],
        "start": 1357,
        "end": 1373
      },
      "directive": null,
      "start": 1357,
      "end": 1374
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1382,
            "end": 1386
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1387,
            "end": 1388
          },
          "optional": false,
          "computed": false,
          "start": 1382,
          "end": 1388
        },
        "prefix": true,
        "start": 1375,
        "end": 1388
      },
      "directive": null,
      "start": 1375,
      "end": 1389
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1397,
            "end": 1401
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 1402,
            "end": 1403
          },
          "optional": false,
          "computed": false,
          "start": 1397,
          "end": 1403
        },
        "prefix": true,
        "start": 1390,
        "end": 1403
      },
      "directive": null,
      "start": 1390,
      "end": 1404
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 1412,
            "end": 1416
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1417,
            "end": 1418
          },
          "optional": false,
          "computed": false,
          "start": 1412,
          "end": 1418
        },
        "prefix": true,
        "start": 1405,
        "end": 1418
      },
      "directive": null,
      "start": 1405,
      "end": 1419
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 1427,
            "end": 1428
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 1429,
            "end": 1430
          },
          "optional": false,
          "computed": false,
          "start": 1427,
          "end": 1430
        },
        "prefix": true,
        "start": 1420,
        "end": 1430
      },
      "directive": null,
      "start": 1420,
      "end": 1431
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 33,
  "end": 1431
}
```
