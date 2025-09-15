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
        "start": 299,
        "end": 300
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
                        "start": 321,
                        "end": 324
                      },
                      "start": 319,
                      "end": 324
                    },
                    "start": 318,
                    "end": 324
                  },
                  "init": null,
                  "definite": false,
                  "start": 318,
                  "end": 324
                }
              ],
              "declare": false,
              "start": 314,
              "end": 325
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 307,
            "end": 325
          }
        ],
        "start": 301,
        "end": 327
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 289,
      "end": 327
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
            "start": 332,
            "end": 336
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 343,
              "end": 344
            },
            "typeArguments": null,
            "arguments": [],
            "start": 339,
            "end": 346
          },
          "definite": false,
          "start": 332,
          "end": 346
        }
      ],
      "declare": false,
      "start": 328,
      "end": 347
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
            "start": 375,
            "end": 390
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
              "start": 394,
              "end": 398
            },
            "prefix": true,
            "start": 393,
            "end": 398
          },
          "definite": false,
          "start": 375,
          "end": 398
        }
      ],
      "declare": false,
      "start": 371,
      "end": 399
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
            "start": 404,
            "end": 419
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
              "start": 423,
              "end": 427
            },
            "prefix": true,
            "start": 422,
            "end": 427
          },
          "definite": false,
          "start": 404,
          "end": 427
        }
      ],
      "declare": false,
      "start": 400,
      "end": 428
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
            "start": 433,
            "end": 448
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
              "start": 452,
              "end": 453
            },
            "prefix": true,
            "start": 451,
            "end": 453
          },
          "definite": false,
          "start": 433,
          "end": 453
        }
      ],
      "declare": false,
      "start": 429,
      "end": 454
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
            "start": 459,
            "end": 474
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
              "start": 478,
              "end": 479
            },
            "prefix": true,
            "start": 477,
            "end": 479
          },
          "definite": false,
          "start": 459,
          "end": 479
        }
      ],
      "declare": false,
      "start": 455,
      "end": 480
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
            "start": 485,
            "end": 500
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
              "start": 504,
              "end": 507
            },
            "prefix": true,
            "start": 503,
            "end": 507
          },
          "definite": false,
          "start": 485,
          "end": 507
        }
      ],
      "declare": false,
      "start": 481,
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
            "name": "ResultIsNumber6",
            "optional": false,
            "typeAnnotation": null,
            "start": 513,
            "end": 528
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
              "start": 532,
              "end": 536
            },
            "prefix": true,
            "start": 531,
            "end": 536
          },
          "definite": false,
          "start": 513,
          "end": 536
        }
      ],
      "declare": false,
      "start": 509,
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
            "name": "ResultIsNumber7",
            "optional": false,
            "typeAnnotation": null,
            "start": 563,
            "end": 578
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
              "start": 582,
              "end": 591
            },
            "prefix": true,
            "start": 581,
            "end": 591
          },
          "definite": false,
          "start": 563,
          "end": 591
        }
      ],
      "declare": false,
      "start": 559,
      "end": 592
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
            "start": 597,
            "end": 612
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 616,
              "end": 620
            },
            "prefix": true,
            "start": 615,
            "end": 620
          },
          "definite": false,
          "start": 597,
          "end": 620
        }
      ],
      "declare": false,
      "start": 593,
      "end": 621
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
            "start": 651,
            "end": 666
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
                "start": 670,
                "end": 674
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 675,
                "end": 676
              },
              "optional": false,
              "computed": true,
              "start": 670,
              "end": 677
            },
            "prefix": true,
            "start": 669,
            "end": 677
          },
          "definite": false,
          "start": 651,
          "end": 677
        }
      ],
      "declare": false,
      "start": 647,
      "end": 678
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
            "start": 683,
            "end": 699
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
                "start": 703,
                "end": 707
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 708,
                "end": 709
              },
              "optional": false,
              "computed": false,
              "start": 703,
              "end": 709
            },
            "prefix": true,
            "start": 702,
            "end": 709
          },
          "definite": false,
          "start": 683,
          "end": 709
        }
      ],
      "declare": false,
      "start": 679,
      "end": 710
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
            "start": 715,
            "end": 731
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
                "start": 735,
                "end": 739
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 740,
                "end": 741
              },
              "optional": false,
              "computed": false,
              "start": 735,
              "end": 741
            },
            "prefix": true,
            "start": 734,
            "end": 741
          },
          "definite": false,
          "start": 715,
          "end": 741
        }
      ],
      "declare": false,
      "start": 711,
      "end": 742
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
            "start": 747,
            "end": 763
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
                "start": 767,
                "end": 771
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 772,
                "end": 773
              },
              "optional": false,
              "computed": false,
              "start": 767,
              "end": 773
            },
            "prefix": true,
            "start": 766,
            "end": 773
          },
          "definite": false,
          "start": 747,
          "end": 773
        }
      ],
      "declare": false,
      "start": 743,
      "end": 774
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
            "start": 779,
            "end": 795
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
                "start": 799,
                "end": 800
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 801,
                "end": 802
              },
              "optional": false,
              "computed": false,
              "start": 799,
              "end": 802
            },
            "prefix": true,
            "start": 798,
            "end": 802
          },
          "definite": false,
          "start": 779,
          "end": 802
        }
      ],
      "declare": false,
      "start": 775,
      "end": 803
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
            "start": 808,
            "end": 824
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
                "start": 828,
                "end": 831
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 828,
              "end": 833
            },
            "prefix": true,
            "start": 827,
            "end": 833
          },
          "definite": false,
          "start": 808,
          "end": 833
        }
      ],
      "declare": false,
      "start": 804,
      "end": 834
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
            "start": 839,
            "end": 855
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
                  "start": 859,
                  "end": 860
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 861,
                  "end": 864
                },
                "optional": false,
                "computed": false,
                "start": 859,
                "end": 864
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 859,
              "end": 866
            },
            "prefix": true,
            "start": 858,
            "end": 866
          },
          "definite": false,
          "start": 839,
          "end": 866
        }
      ],
      "declare": false,
      "start": 835,
      "end": 867
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
            "start": 872,
            "end": 888
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
                "start": 893,
                "end": 896
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY1",
                "optional": false,
                "typeAnnotation": null,
                "start": 899,
                "end": 903
              },
              "start": 893,
              "end": 903
            },
            "prefix": true,
            "start": 891,
            "end": 904
          },
          "definite": false,
          "start": 872,
          "end": 904
        }
      ],
      "declare": false,
      "start": 868,
      "end": 905
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
            "start": 910,
            "end": 926
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
                "start": 931,
                "end": 935
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 938,
                "end": 947
              },
              "start": 931,
              "end": 947
            },
            "prefix": true,
            "start": 929,
            "end": 948
          },
          "definite": false,
          "start": 910,
          "end": 948
        }
      ],
      "declare": false,
      "start": 906,
      "end": 949
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
            "start": 954,
            "end": 970
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
                "start": 975,
                "end": 979
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 982,
                "end": 986
              },
              "start": 975,
              "end": 986
            },
            "prefix": true,
            "start": 973,
            "end": 987
          },
          "definite": false,
          "start": 954,
          "end": 987
        }
      ],
      "declare": false,
      "start": 950,
      "end": 988
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
            "start": 993,
            "end": 1009
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
                "start": 1014,
                "end": 1023
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1026,
                "end": 1035
              },
              "start": 1014,
              "end": 1035
            },
            "prefix": true,
            "start": 1012,
            "end": 1036
          },
          "definite": false,
          "start": 993,
          "end": 1036
        }
      ],
      "declare": false,
      "start": 989,
      "end": 1037
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
          "start": 1069,
          "end": 1072
        },
        "prefix": true,
        "start": 1068,
        "end": 1072
      },
      "directive": null,
      "start": 1068,
      "end": 1073
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
          "start": 1075,
          "end": 1079
        },
        "prefix": true,
        "start": 1074,
        "end": 1079
      },
      "directive": null,
      "start": 1074,
      "end": 1080
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
            "start": 1082,
            "end": 1086
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1087,
            "end": 1088
          },
          "optional": false,
          "computed": true,
          "start": 1082,
          "end": 1089
        },
        "prefix": true,
        "start": 1081,
        "end": 1089
      },
      "directive": null,
      "start": 1081,
      "end": 1090
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
              "start": 1092,
              "end": 1095
            },
            "prefix": true,
            "start": 1091,
            "end": 1095
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1097,
            "end": 1101
          }
        ],
        "start": 1091,
        "end": 1101
      },
      "directive": null,
      "start": 1091,
      "end": 1102
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
            "start": 1104,
            "end": 1108
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1109,
            "end": 1110
          },
          "optional": false,
          "computed": false,
          "start": 1104,
          "end": 1110
        },
        "prefix": true,
        "start": 1103,
        "end": 1110
      },
      "directive": null,
      "start": 1103,
      "end": 1111
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
            "start": 1113,
            "end": 1114
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 1115,
            "end": 1116
          },
          "optional": false,
          "computed": false,
          "start": 1113,
          "end": 1116
        },
        "prefix": true,
        "start": 1112,
        "end": 1116
      },
      "directive": null,
      "start": 1112,
      "end": 1117
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 27,
  "end": 1117
}
```
