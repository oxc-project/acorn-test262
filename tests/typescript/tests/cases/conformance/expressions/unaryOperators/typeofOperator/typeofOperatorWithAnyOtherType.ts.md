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
      "end": 102
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
            "start": 107,
            "end": 111
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
                  "start": 116,
                  "end": 117
                },
                "value": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 119,
                  "end": 122
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 116,
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
            "start": 114,
            "end": 137
          },
          "definite": false,
          "start": 107,
          "end": 137
        }
      ],
      "declare": false,
      "start": 103,
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
        "start": 149,
        "end": 152
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
          "start": 156,
          "end": 159
        },
        "start": 154,
        "end": 159
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
                  "start": 170,
                  "end": 171
                },
                "init": null,
                "definite": false,
                "start": 170,
                "end": 171
              }
            ],
            "declare": false,
            "start": 166,
            "end": 172
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 184,
              "end": 185
            },
            "start": 177,
            "end": 186
          }
        ],
        "start": 160,
        "end": 188
      },
      "expression": false,
      "start": 140,
      "end": 188
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
        "start": 195,
        "end": 196
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
              "start": 210,
              "end": 211
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 213,
                "end": 216
              },
              "start": 211,
              "end": 216
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
            "start": 203,
            "end": 217
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
              "start": 229,
              "end": 232
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
                          "start": 249,
                          "end": 250
                        },
                        "init": null,
                        "definite": false,
                        "start": 249,
                        "end": 250
                      }
                    ],
                    "declare": false,
                    "start": 245,
                    "end": 251
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 267,
                      "end": 268
                    },
                    "start": 260,
                    "end": 269
                  }
                ],
                "start": 235,
                "end": 275
              },
              "expression": false,
              "start": 232,
              "end": 275
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 222,
            "end": 275
          }
        ],
        "start": 197,
        "end": 277
      },
      "abstract": false,
      "declare": false,
      "start": 189,
      "end": 277
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 288,
        "end": 289
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
                        "start": 310,
                        "end": 313
                      },
                      "start": 308,
                      "end": 313
                    },
                    "start": 307,
                    "end": 313
                  },
                  "init": null,
                  "definite": false,
                  "start": 307,
                  "end": 313
                }
              ],
              "declare": false,
              "start": 303,
              "end": 314
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 296,
            "end": 314
          }
        ],
        "start": 290,
        "end": 316
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 278,
      "end": 316
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
            "start": 321,
            "end": 325
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 332,
              "end": 333
            },
            "typeArguments": null,
            "arguments": [],
            "start": 328,
            "end": 335
          },
          "definite": false,
          "start": 321,
          "end": 335
        }
      ],
      "declare": false,
      "start": 317,
      "end": 336
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
            "name": "ResultIsString1",
            "optional": false,
            "typeAnnotation": null,
            "start": 358,
            "end": 373
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
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
          "start": 358,
          "end": 387
        }
      ],
      "declare": false,
      "start": 354,
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
            "name": "ResultIsString2",
            "optional": false,
            "typeAnnotation": null,
            "start": 393,
            "end": 408
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY2",
              "optional": false,
              "typeAnnotation": null,
              "start": 418,
              "end": 422
            },
            "prefix": true,
            "start": 411,
            "end": 422
          },
          "definite": false,
          "start": 393,
          "end": 422
        }
      ],
      "declare": false,
      "start": 389,
      "end": 423
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
            "name": "ResultIsString3",
            "optional": false,
            "typeAnnotation": null,
            "start": 428,
            "end": 443
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 453,
              "end": 454
            },
            "prefix": true,
            "start": 446,
            "end": 454
          },
          "definite": false,
          "start": 428,
          "end": 454
        }
      ],
      "declare": false,
      "start": 424,
      "end": 455
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
            "name": "ResultIsString4",
            "optional": false,
            "typeAnnotation": null,
            "start": 460,
            "end": 475
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 485,
              "end": 486
            },
            "prefix": true,
            "start": 478,
            "end": 486
          },
          "definite": false,
          "start": 460,
          "end": 486
        }
      ],
      "declare": false,
      "start": 456,
      "end": 487
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
            "name": "ResultIsString5",
            "optional": false,
            "typeAnnotation": null,
            "start": 492,
            "end": 507
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 517,
              "end": 520
            },
            "prefix": true,
            "start": 510,
            "end": 520
          },
          "definite": false,
          "start": 492,
          "end": 520
        }
      ],
      "declare": false,
      "start": 488,
      "end": 521
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
            "name": "ResultIsString6",
            "optional": false,
            "typeAnnotation": null,
            "start": 526,
            "end": 541
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null,
              "start": 551,
              "end": 555
            },
            "prefix": true,
            "start": 544,
            "end": 555
          },
          "definite": false,
          "start": 526,
          "end": 555
        }
      ],
      "declare": false,
      "start": 522,
      "end": 556
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
            "name": "ResultIsString7",
            "optional": false,
            "typeAnnotation": null,
            "start": 582,
            "end": 597
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 607,
              "end": 616
            },
            "prefix": true,
            "start": 600,
            "end": 616
          },
          "definite": false,
          "start": 582,
          "end": 616
        }
      ],
      "declare": false,
      "start": 578,
      "end": 617
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
            "name": "ResultIsString8",
            "optional": false,
            "typeAnnotation": null,
            "start": 622,
            "end": 637
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 647,
              "end": 651
            },
            "prefix": true,
            "start": 640,
            "end": 651
          },
          "definite": false,
          "start": 622,
          "end": 651
        }
      ],
      "declare": false,
      "start": 618,
      "end": 652
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
            "name": "ResultIsString9",
            "optional": false,
            "typeAnnotation": null,
            "start": 657,
            "end": 672
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 682,
              "end": 684
            },
            "prefix": true,
            "start": 675,
            "end": 684
          },
          "definite": false,
          "start": 657,
          "end": 684
        }
      ],
      "declare": false,
      "start": 653,
      "end": 685
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
            "name": "ResultIsString10",
            "optional": false,
            "typeAnnotation": null,
            "start": 715,
            "end": 731
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY2",
                "optional": false,
                "typeAnnotation": null,
                "start": 741,
                "end": 745
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 746,
                "end": 747
              },
              "optional": false,
              "computed": true,
              "start": 741,
              "end": 748
            },
            "prefix": true,
            "start": 734,
            "end": 748
          },
          "definite": false,
          "start": 715,
          "end": 748
        }
      ],
      "declare": false,
      "start": 711,
      "end": 749
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
            "name": "ResultIsString11",
            "optional": false,
            "typeAnnotation": null,
            "start": 754,
            "end": 770
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 780,
                "end": 784
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 785,
                "end": 786
              },
              "optional": false,
              "computed": false,
              "start": 780,
              "end": 786
            },
            "prefix": true,
            "start": 773,
            "end": 786
          },
          "definite": false,
          "start": 754,
          "end": 786
        }
      ],
      "declare": false,
      "start": 750,
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
            "name": "ResultIsString12",
            "optional": false,
            "typeAnnotation": null,
            "start": 792,
            "end": 808
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": null,
                "start": 818,
                "end": 822
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 823,
                "end": 824
              },
              "optional": false,
              "computed": false,
              "start": 818,
              "end": 824
            },
            "prefix": true,
            "start": 811,
            "end": 824
          },
          "definite": false,
          "start": 792,
          "end": 824
        }
      ],
      "declare": false,
      "start": 788,
      "end": 825
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
            "name": "ResultIsString13",
            "optional": false,
            "typeAnnotation": null,
            "start": 830,
            "end": 846
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 856,
                "end": 857
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 858,
                "end": 859
              },
              "optional": false,
              "computed": false,
              "start": 856,
              "end": 859
            },
            "prefix": true,
            "start": 849,
            "end": 859
          },
          "definite": false,
          "start": 830,
          "end": 859
        }
      ],
      "declare": false,
      "start": 826,
      "end": 860
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
            "name": "ResultIsString14",
            "optional": false,
            "typeAnnotation": null,
            "start": 865,
            "end": 881
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 891,
                "end": 894
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 891,
              "end": 896
            },
            "prefix": true,
            "start": 884,
            "end": 896
          },
          "definite": false,
          "start": 865,
          "end": 896
        }
      ],
      "declare": false,
      "start": 861,
      "end": 897
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
            "name": "ResultIsString15",
            "optional": false,
            "typeAnnotation": null,
            "start": 902,
            "end": 918
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
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
                  "start": 928,
                  "end": 929
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 930,
                  "end": 933
                },
                "optional": false,
                "computed": false,
                "start": 928,
                "end": 933
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 928,
              "end": 935
            },
            "prefix": true,
            "start": 921,
            "end": 935
          },
          "definite": false,
          "start": 902,
          "end": 935
        }
      ],
      "declare": false,
      "start": 898,
      "end": 936
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
            "name": "ResultIsString16",
            "optional": false,
            "typeAnnotation": null,
            "start": 941,
            "end": 957
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null,
                "start": 968,
                "end": 971
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY1",
                "optional": false,
                "typeAnnotation": null,
                "start": 974,
                "end": 978
              },
              "start": 968,
              "end": 978
            },
            "prefix": true,
            "start": 960,
            "end": 979
          },
          "definite": false,
          "start": 941,
          "end": 979
        }
      ],
      "declare": false,
      "start": 937,
      "end": 980
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
            "name": "ResultIsString17",
            "optional": false,
            "typeAnnotation": null,
            "start": 985,
            "end": 1001
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1012,
                "end": 1016
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1019,
                "end": 1028
              },
              "start": 1012,
              "end": 1028
            },
            "prefix": true,
            "start": 1004,
            "end": 1029
          },
          "definite": false,
          "start": 985,
          "end": 1029
        }
      ],
      "declare": false,
      "start": 981,
      "end": 1030
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
            "name": "ResultIsString18",
            "optional": false,
            "typeAnnotation": null,
            "start": 1035,
            "end": 1051
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1062,
                "end": 1066
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1069,
                "end": 1073
              },
              "start": 1062,
              "end": 1073
            },
            "prefix": true,
            "start": 1054,
            "end": 1074
          },
          "definite": false,
          "start": 1035,
          "end": 1074
        }
      ],
      "declare": false,
      "start": 1031,
      "end": 1075
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
            "name": "ResultIsString19",
            "optional": false,
            "typeAnnotation": null,
            "start": 1080,
            "end": 1096
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1107,
                "end": 1116
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1119,
                "end": 1128
              },
              "start": 1107,
              "end": 1128
            },
            "prefix": true,
            "start": 1099,
            "end": 1129
          },
          "definite": false,
          "start": 1080,
          "end": 1129
        }
      ],
      "declare": false,
      "start": 1076,
      "end": 1130
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
            "name": "ResultIsString20",
            "optional": false,
            "typeAnnotation": null,
            "start": 1166,
            "end": 1182
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "ANY",
                "optional": false,
                "typeAnnotation": null,
                "start": 1199,
                "end": 1202
              },
              "prefix": true,
              "start": 1192,
              "end": 1202
            },
            "prefix": true,
            "start": 1185,
            "end": 1202
          },
          "definite": false,
          "start": 1166,
          "end": 1202
        }
      ],
      "declare": false,
      "start": 1162,
      "end": 1203
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
            "name": "ResultIsString21",
            "optional": false,
            "typeAnnotation": null,
            "start": 1208,
            "end": 1224
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANY",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1249,
                    "end": 1252
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ANY1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1255,
                    "end": 1259
                  },
                  "start": 1249,
                  "end": 1259
                },
                "prefix": true,
                "start": 1241,
                "end": 1260
              },
              "prefix": true,
              "start": 1234,
              "end": 1260
            },
            "prefix": true,
            "start": 1227,
            "end": 1260
          },
          "definite": false,
          "start": 1208,
          "end": 1260
        }
      ],
      "declare": false,
      "start": 1204,
      "end": 1261
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ANY",
          "optional": false,
          "typeAnnotation": null,
          "start": 1299,
          "end": 1302
        },
        "prefix": true,
        "start": 1292,
        "end": 1302
      },
      "directive": null,
      "start": 1292,
      "end": 1303
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ANY1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1311,
          "end": 1315
        },
        "prefix": true,
        "start": 1304,
        "end": 1315
      },
      "directive": null,
      "start": 1304,
      "end": 1316
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1324,
            "end": 1328
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1329,
            "end": 1330
          },
          "optional": false,
          "computed": true,
          "start": 1324,
          "end": 1331
        },
        "prefix": true,
        "start": 1317,
        "end": 1331
      },
      "directive": null,
      "start": 1317,
      "end": 1332
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ANY",
              "optional": false,
              "typeAnnotation": null,
              "start": 1340,
              "end": 1343
            },
            "prefix": true,
            "start": 1333,
            "end": 1343
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1345,
            "end": 1349
          }
        ],
        "start": 1333,
        "end": 1349
      },
      "directive": null,
      "start": 1333,
      "end": 1350
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1358,
          "end": 1362
        },
        "prefix": true,
        "start": 1351,
        "end": 1362
      },
      "directive": null,
      "start": 1351,
      "end": 1363
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1371,
            "end": 1375
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1376,
            "end": 1377
          },
          "optional": false,
          "computed": false,
          "start": 1371,
          "end": 1377
        },
        "prefix": true,
        "start": 1364,
        "end": 1377
      },
      "directive": null,
      "start": 1364,
      "end": 1378
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 1386,
            "end": 1390
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1391,
            "end": 1392
          },
          "optional": false,
          "computed": false,
          "start": 1386,
          "end": 1392
        },
        "prefix": true,
        "start": 1379,
        "end": 1392
      },
      "directive": null,
      "start": 1379,
      "end": 1393
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 1401,
            "end": 1402
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 1403,
            "end": 1404
          },
          "optional": false,
          "computed": false,
          "start": 1401,
          "end": 1404
        },
        "prefix": true,
        "start": 1394,
        "end": 1404
      },
      "directive": null,
      "start": 1394,
      "end": 1405
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1442,
                "end": 1445
              },
              "start": 1440,
              "end": 1445
            },
            "start": 1439,
            "end": 1445
          },
          "init": null,
          "definite": false,
          "start": 1439,
          "end": 1445
        }
      ],
      "declare": false,
      "start": 1435,
      "end": 1446
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
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 1454,
                  "end": 1457
                },
                "start": 1454,
                "end": 1459
              },
              "start": 1452,
              "end": 1459
            },
            "start": 1451,
            "end": 1459
          },
          "init": null,
          "definite": false,
          "start": 1451,
          "end": 1459
        }
      ],
      "declare": false,
      "start": 1447,
      "end": 1460
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
            "name": "r",
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
                    "type": "TSAnyKeyword",
                    "start": 1474,
                    "end": 1477
                  },
                  "start": 1471,
                  "end": 1477
                },
                "start": 1468,
                "end": 1477
              },
              "start": 1466,
              "end": 1477
            },
            "start": 1465,
            "end": 1477
          },
          "init": null,
          "definite": false,
          "start": 1465,
          "end": 1477
        }
      ],
      "declare": false,
      "start": 1461,
      "end": 1478
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 1479,
        "end": 1480
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY",
            "optional": false,
            "typeAnnotation": null,
            "start": 1489,
            "end": 1492
          },
          "prefix": true,
          "start": 1482,
          "end": 1492
        },
        "directive": null,
        "start": 1482,
        "end": 1493
      },
      "start": 1479,
      "end": 1493
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 1494,
        "end": 1495
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "ANY2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1504,
            "end": 1508
          },
          "prefix": true,
          "start": 1497,
          "end": 1508
        },
        "directive": null,
        "start": 1497,
        "end": 1509
      },
      "start": 1494,
      "end": 1509
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "r",
        "optional": false,
        "typeAnnotation": null,
        "start": 1510,
        "end": 1511
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1520,
            "end": 1523
          },
          "prefix": true,
          "start": 1513,
          "end": 1523
        },
        "directive": null,
        "start": 1513,
        "end": 1524
      },
      "start": 1510,
      "end": 1524
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 1525,
        "end": 1526
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "objA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1535,
              "end": 1539
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1540,
              "end": 1541
            },
            "optional": false,
            "computed": false,
            "start": 1535,
            "end": 1541
          },
          "prefix": true,
          "start": 1528,
          "end": 1541
        },
        "directive": null,
        "start": 1528,
        "end": 1542
      },
      "start": 1525,
      "end": 1542
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 1543,
        "end": 1544
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1553,
              "end": 1554
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1555,
              "end": 1558
            },
            "optional": false,
            "computed": false,
            "start": 1553,
            "end": 1558
          },
          "prefix": true,
          "start": 1546,
          "end": 1558
        },
        "directive": null,
        "start": 1546,
        "end": 1559
      },
      "start": 1543,
      "end": 1559
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 1560,
        "end": 1561
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 1570,
              "end": 1571
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 1572,
              "end": 1573
            },
            "optional": false,
            "computed": false,
            "start": 1570,
            "end": 1573
          },
          "prefix": true,
          "start": 1563,
          "end": 1573
        },
        "directive": null,
        "start": 1563,
        "end": 1574
      },
      "start": 1560,
      "end": 1574
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 1575,
        "end": 1576
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1585,
              "end": 1589
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1590,
              "end": 1591
            },
            "optional": false,
            "computed": false,
            "start": 1585,
            "end": 1591
          },
          "prefix": true,
          "start": 1578,
          "end": 1591
        },
        "directive": null,
        "start": 1578,
        "end": 1592
      },
      "start": 1575,
      "end": 1592
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 33,
  "end": 1592
}
```
