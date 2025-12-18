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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 33,
    "end": 36,
    "range": [
      33,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 37,
    "end": 40,
    "range": [
      37,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 42,
    "end": 45,
    "range": [
      42,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 47,
    "end": 50,
    "range": [
      47,
      50
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 51,
    "end": 55,
    "range": [
      51,
      55
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 57,
    "end": 60,
    "range": [
      57,
      60
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 61,
    "end": 65,
    "range": [
      61,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 67,
    "end": 70,
    "range": [
      67,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 76,
    "end": 78,
    "range": [
      76,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 80,
    "end": 82,
    "range": [
      80,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 85,
    "end": 88,
    "range": [
      85,
      88
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 89,
    "end": 92,
    "range": [
      89,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 97,
    "end": 99,
    "range": [
      97,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 104,
    "end": 107,
    "range": [
      104,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 108,
    "end": 112,
    "range": [
      108,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 120,
    "end": 122,
    "range": [
      120,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 130,
    "end": 132,
    "range": [
      130,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 139,
    "end": 147,
    "range": [
      139,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 148,
    "end": 151,
    "range": [
      148,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 155,
    "end": 158,
    "range": [
      155,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 165,
    "end": 168,
    "range": [
      165,
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
    "type": "Keyword",
    "value": "return",
    "start": 176,
    "end": 182,
    "range": [
      176,
      182
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 188,
    "end": 193,
    "range": [
      188,
      193
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 202,
    "end": 208,
    "range": [
      202,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 212,
    "end": 215,
    "range": [
      212,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 221,
    "end": 227,
    "range": [
      221,
      227
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 228,
    "end": 231,
    "range": [
      228,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 244,
    "end": 247,
    "range": [
      244,
      247
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 259,
    "end": 265,
    "range": [
      259,
      265
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 277,
    "end": 286,
    "range": [
      277,
      286
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 295,
    "end": 301,
    "range": [
      295,
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
    "value": "n",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 309,
    "end": 312,
    "range": [
      309,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 316,
    "end": 319,
    "range": [
      316,
      319
    ]
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 320,
    "end": 324,
    "range": [
      320,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 327,
    "end": 330,
    "range": [
      327,
      330
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 353,
    "end": 356,
    "range": [
      353,
      356
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean1",
    "start": 357,
    "end": 373,
    "range": [
      357,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 376,
    "end": 382,
    "range": [
      376,
      382
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 383,
    "end": 387,
    "range": [
      383,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 389,
    "end": 392,
    "range": [
      389,
      392
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean2",
    "start": 393,
    "end": 409,
    "range": [
      393,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 412,
    "end": 418,
    "range": [
      412,
      418
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 419,
    "end": 423,
    "range": [
      419,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 425,
    "end": 428,
    "range": [
      425,
      428
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean3",
    "start": 429,
    "end": 445,
    "range": [
      429,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 448,
    "end": 454,
    "range": [
      448,
      454
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 458,
    "end": 461,
    "range": [
      458,
      461
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean4",
    "start": 462,
    "end": 478,
    "range": [
      462,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 481,
    "end": 487,
    "range": [
      481,
      487
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 491,
    "end": 494,
    "range": [
      491,
      494
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean5",
    "start": 495,
    "end": 511,
    "range": [
      495,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 514,
    "end": 520,
    "range": [
      514,
      520
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 521,
    "end": 524,
    "range": [
      521,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 526,
    "end": 529,
    "range": [
      526,
      529
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean6",
    "start": 530,
    "end": 546,
    "range": [
      530,
      546
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 547,
    "end": 548,
    "range": [
      547,
      548
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 549,
    "end": 555,
    "range": [
      549,
      555
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 556,
    "end": 560,
    "range": [
      556,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 583,
    "end": 586,
    "range": [
      583,
      586
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean7",
    "start": 587,
    "end": 603,
    "range": [
      587,
      603
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 606,
    "end": 612,
    "range": [
      606,
      612
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 613,
    "end": 622,
    "range": [
      613,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 624,
    "end": 627,
    "range": [
      624,
      627
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean8",
    "start": 628,
    "end": 644,
    "range": [
      628,
      644
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 645,
    "end": 646,
    "range": [
      645,
      646
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 647,
    "end": 653,
    "range": [
      647,
      653
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 654,
    "end": 658,
    "range": [
      654,
      658
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 685,
    "end": 688,
    "range": [
      685,
      688
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean9",
    "start": 689,
    "end": 705,
    "range": [
      689,
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
    "value": "delete",
    "start": 708,
    "end": 714,
    "range": [
      708,
      714
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 715,
    "end": 719,
    "range": [
      715,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 721,
    "end": 722,
    "range": [
      721,
      722
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 722,
    "end": 723,
    "range": [
      722,
      723
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 724,
    "end": 727,
    "range": [
      724,
      727
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean10",
    "start": 728,
    "end": 745,
    "range": [
      728,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 748,
    "end": 754,
    "range": [
      748,
      754
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 755,
    "end": 759,
    "range": [
      755,
      759
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 759,
    "end": 760,
    "range": [
      759,
      760
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 760,
    "end": 761,
    "range": [
      760,
      761
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 761,
    "end": 762,
    "range": [
      761,
      762
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 763,
    "end": 766,
    "range": [
      763,
      766
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean11",
    "start": 767,
    "end": 784,
    "range": [
      767,
      784
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 787,
    "end": 793,
    "range": [
      787,
      793
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 794,
    "end": 798,
    "range": [
      794,
      798
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 798,
    "end": 799,
    "range": [
      798,
      799
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 800,
    "end": 801,
    "range": [
      800,
      801
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 802,
    "end": 805,
    "range": [
      802,
      805
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean12",
    "start": 806,
    "end": 823,
    "range": [
      806,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 826,
    "end": 832,
    "range": [
      826,
      832
    ]
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 833,
    "end": 837,
    "range": [
      833,
      837
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 837,
    "end": 838,
    "range": [
      837,
      838
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 838,
    "end": 839,
    "range": [
      838,
      839
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 839,
    "end": 840,
    "range": [
      839,
      840
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 841,
    "end": 844,
    "range": [
      841,
      844
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean13",
    "start": 845,
    "end": 862,
    "range": [
      845,
      862
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 863,
    "end": 864,
    "range": [
      863,
      864
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 865,
    "end": 871,
    "range": [
      865,
      871
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 872,
    "end": 873,
    "range": [
      872,
      873
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 873,
    "end": 874,
    "range": [
      873,
      874
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 874,
    "end": 875,
    "range": [
      874,
      875
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 875,
    "end": 876,
    "range": [
      875,
      876
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 877,
    "end": 880,
    "range": [
      877,
      880
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean14",
    "start": 881,
    "end": 898,
    "range": [
      881,
      898
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 899,
    "end": 900,
    "range": [
      899,
      900
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 901,
    "end": 907,
    "range": [
      901,
      907
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 908,
    "end": 911,
    "range": [
      908,
      911
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 911,
    "end": 912,
    "range": [
      911,
      912
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 912,
    "end": 913,
    "range": [
      912,
      913
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 913,
    "end": 914,
    "range": [
      913,
      914
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 915,
    "end": 918,
    "range": [
      915,
      918
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean15",
    "start": 919,
    "end": 936,
    "range": [
      919,
      936
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 937,
    "end": 938,
    "range": [
      937,
      938
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 939,
    "end": 945,
    "range": [
      939,
      945
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 946,
    "end": 947,
    "range": [
      946,
      947
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 947,
    "end": 948,
    "range": [
      947,
      948
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 948,
    "end": 951,
    "range": [
      948,
      951
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 951,
    "end": 952,
    "range": [
      951,
      952
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 955,
    "end": 958,
    "range": [
      955,
      958
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean16",
    "start": 959,
    "end": 976,
    "range": [
      959,
      976
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 977,
    "end": 978,
    "range": [
      977,
      978
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 979,
    "end": 985,
    "range": [
      979,
      985
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 986,
    "end": 987,
    "range": [
      986,
      987
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 987,
    "end": 990,
    "range": [
      987,
      990
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 991,
    "end": 992,
    "range": [
      991,
      992
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 993,
    "end": 997,
    "range": [
      993,
      997
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 997,
    "end": 998,
    "range": [
      997,
      998
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 998,
    "end": 999,
    "range": [
      998,
      999
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1000,
    "end": 1003,
    "range": [
      1000,
      1003
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean17",
    "start": 1004,
    "end": 1021,
    "range": [
      1004,
      1021
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1022,
    "end": 1023,
    "range": [
      1022,
      1023
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 1024,
    "end": 1030,
    "range": [
      1024,
      1030
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1031,
    "end": 1032,
    "range": [
      1031,
      1032
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1032,
    "end": 1036,
    "range": [
      1032,
      1036
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1037,
    "end": 1038,
    "range": [
      1037,
      1038
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1039,
    "end": 1048,
    "range": [
      1039,
      1048
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1048,
    "end": 1049,
    "range": [
      1048,
      1049
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1049,
    "end": 1050,
    "range": [
      1049,
      1050
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1051,
    "end": 1054,
    "range": [
      1051,
      1054
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean18",
    "start": 1055,
    "end": 1072,
    "range": [
      1055,
      1072
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1073,
    "end": 1074,
    "range": [
      1073,
      1074
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 1075,
    "end": 1081,
    "range": [
      1075,
      1081
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1082,
    "end": 1083,
    "range": [
      1082,
      1083
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1083,
    "end": 1087,
    "range": [
      1083,
      1087
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1090,
    "end": 1094,
    "range": [
      1090,
      1094
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1094,
    "end": 1095,
    "range": [
      1094,
      1095
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1095,
    "end": 1096,
    "range": [
      1095,
      1096
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1097,
    "end": 1100,
    "range": [
      1097,
      1100
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean19",
    "start": 1101,
    "end": 1118,
    "range": [
      1101,
      1118
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1119,
    "end": 1120,
    "range": [
      1119,
      1120
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 1121,
    "end": 1127,
    "range": [
      1121,
      1127
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1128,
    "end": 1129,
    "range": [
      1128,
      1129
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1129,
    "end": 1138,
    "range": [
      1129,
      1138
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1139,
    "end": 1140,
    "range": [
      1139,
      1140
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1141,
    "end": 1150,
    "range": [
      1141,
      1150
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1150,
    "end": 1151,
    "range": [
      1150,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1151,
    "end": 1152,
    "range": [
      1151,
      1152
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1184,
    "end": 1187,
    "range": [
      1184,
      1187
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean20",
    "start": 1188,
    "end": 1205,
    "range": [
      1188,
      1205
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1206,
    "end": 1207,
    "range": [
      1206,
      1207
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 1208,
    "end": 1214,
    "range": [
      1208,
      1214
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 1215,
    "end": 1221,
    "range": [
      1215,
      1221
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1222,
    "end": 1225,
    "range": [
      1222,
      1225
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1225,
    "end": 1226,
    "range": [
      1225,
      1226
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1227,
    "end": 1230,
    "range": [
      1227,
      1230
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsBoolean21",
    "start": 1231,
    "end": 1248,
    "range": [
      1231,
      1248
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1249,
    "end": 1250,
    "range": [
      1249,
      1250
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 1251,
    "end": 1257,
    "range": [
      1251,
      1257
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 1258,
    "end": 1264,
    "range": [
      1258,
      1264
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 1265,
    "end": 1271,
    "range": [
      1265,
      1271
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1272,
    "end": 1273,
    "range": [
      1272,
      1273
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1273,
    "end": 1276,
    "range": [
      1273,
      1276
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1277,
    "end": 1278,
    "range": [
      1277,
      1278
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 1279,
    "end": 1283,
    "range": [
      1279,
      1283
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1283,
    "end": 1284,
    "range": [
      1283,
      1284
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1284,
    "end": 1285,
    "range": [
      1284,
      1285
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 1316,
    "end": 1322,
    "range": [
      1316,
      1322
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1323,
    "end": 1326,
    "range": [
      1323,
      1326
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1326,
    "end": 1327,
    "range": [
      1326,
      1327
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 1328,
    "end": 1334,
    "range": [
      1328,
      1334
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 1335,
    "end": 1339,
    "range": [
      1335,
      1339
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1339,
    "end": 1340,
    "range": [
      1339,
      1340
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 1341,
    "end": 1347,
    "range": [
      1341,
      1347
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 1348,
    "end": 1352,
    "range": [
      1348,
      1352
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1352,
    "end": 1353,
    "range": [
      1352,
      1353
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1353,
    "end": 1354,
    "range": [
      1353,
      1354
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1354,
    "end": 1355,
    "range": [
      1354,
      1355
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1355,
    "end": 1356,
    "range": [
      1355,
      1356
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 1357,
    "end": 1363,
    "range": [
      1357,
      1363
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1364,
    "end": 1367,
    "range": [
      1364,
      1367
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1367,
    "end": 1368,
    "range": [
      1367,
      1368
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 1369,
    "end": 1373,
    "range": [
      1369,
      1373
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1373,
    "end": 1374,
    "range": [
      1373,
      1374
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 1375,
    "end": 1381,
    "range": [
      1375,
      1381
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 1382,
    "end": 1386,
    "range": [
      1382,
      1386
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1386,
    "end": 1387,
    "range": [
      1386,
      1387
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1387,
    "end": 1388,
    "range": [
      1387,
      1388
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1388,
    "end": 1389,
    "range": [
      1388,
      1389
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 1390,
    "end": 1396,
    "range": [
      1390,
      1396
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 1397,
    "end": 1401,
    "range": [
      1397,
      1401
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1401,
    "end": 1402,
    "range": [
      1401,
      1402
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1402,
    "end": 1403,
    "range": [
      1402,
      1403
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1403,
    "end": 1404,
    "range": [
      1403,
      1404
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 1405,
    "end": 1411,
    "range": [
      1405,
      1411
    ]
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 1412,
    "end": 1416,
    "range": [
      1412,
      1416
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1416,
    "end": 1417,
    "range": [
      1416,
      1417
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1417,
    "end": 1418,
    "range": [
      1417,
      1418
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1418,
    "end": 1419,
    "range": [
      1418,
      1419
    ]
  },
  {
    "type": "Keyword",
    "value": "delete",
    "start": 1420,
    "end": 1426,
    "range": [
      1420,
      1426
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1427,
    "end": 1428,
    "range": [
      1427,
      1428
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1428,
    "end": 1429,
    "range": [
      1428,
      1429
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1429,
    "end": 1430,
    "range": [
      1429,
      1430
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1430,
    "end": 1431,
    "range": [
      1430,
      1431
    ]
  }
]
```
