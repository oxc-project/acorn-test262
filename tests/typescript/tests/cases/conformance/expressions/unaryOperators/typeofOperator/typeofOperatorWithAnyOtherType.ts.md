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
    "type": "Keyword",
    "value": "var",
    "start": 103,
    "end": 106,
    "range": [
      103,
      106
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 107,
    "end": 111,
    "range": [
      107,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 119,
    "end": 122,
    "range": [
      119,
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
    "start": 140,
    "end": 148,
    "range": [
      140,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 149,
    "end": 152,
    "range": [
      149,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 156,
    "end": 159,
    "range": [
      156,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 166,
    "end": 169,
    "range": [
      166,
      169
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 177,
    "end": 183,
    "range": [
      177,
      183
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 189,
    "end": 194,
    "range": [
      189,
      194
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 203,
    "end": 209,
    "range": [
      203,
      209
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 213,
    "end": 216,
    "range": [
      213,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 222,
    "end": 228,
    "range": [
      222,
      228
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 229,
    "end": 232,
    "range": [
      229,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 245,
    "end": 248,
    "range": [
      245,
      248
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 260,
    "end": 266,
    "range": [
      260,
      266
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 278,
    "end": 287,
    "range": [
      278,
      287
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 296,
    "end": 302,
    "range": [
      296,
      302
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 303,
    "end": 306,
    "range": [
      303,
      306
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 310,
    "end": 313,
    "range": [
      310,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 317,
    "end": 320,
    "range": [
      317,
      320
    ]
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 321,
    "end": 325,
    "range": [
      321,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 328,
    "end": 331,
    "range": [
      328,
      331
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 354,
    "end": 357,
    "range": [
      354,
      357
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsString1",
    "start": 358,
    "end": 373,
    "range": [
      358,
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
    "value": "typeof",
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
    "value": "ResultIsString2",
    "start": 393,
    "end": 408,
    "range": [
      393,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 411,
    "end": 417,
    "range": [
      411,
      417
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 418,
    "end": 422,
    "range": [
      418,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 424,
    "end": 427,
    "range": [
      424,
      427
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsString3",
    "start": 428,
    "end": 443,
    "range": [
      428,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 446,
    "end": 452,
    "range": [
      446,
      452
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 456,
    "end": 459,
    "range": [
      456,
      459
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsString4",
    "start": 460,
    "end": 475,
    "range": [
      460,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 478,
    "end": 484,
    "range": [
      478,
      484
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 485,
    "end": 486,
    "range": [
      485,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 488,
    "end": 491,
    "range": [
      488,
      491
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsString5",
    "start": 492,
    "end": 507,
    "range": [
      492,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 510,
    "end": 516,
    "range": [
      510,
      516
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 517,
    "end": 520,
    "range": [
      517,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 522,
    "end": 525,
    "range": [
      522,
      525
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsString6",
    "start": 526,
    "end": 541,
    "range": [
      526,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 544,
    "end": 550,
    "range": [
      544,
      550
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 551,
    "end": 555,
    "range": [
      551,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 578,
    "end": 581,
    "range": [
      578,
      581
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsString7",
    "start": 582,
    "end": 597,
    "range": [
      582,
      597
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 600,
    "end": 606,
    "range": [
      600,
      606
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 607,
    "end": 616,
    "range": [
      607,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 618,
    "end": 621,
    "range": [
      618,
      621
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsString8",
    "start": 622,
    "end": 637,
    "range": [
      622,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 640,
    "end": 646,
    "range": [
      640,
      646
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 647,
    "end": 651,
    "range": [
      647,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 653,
    "end": 656,
    "range": [
      653,
      656
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsString9",
    "start": 657,
    "end": 672,
    "range": [
      657,
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
    "value": "typeof",
    "start": 675,
    "end": 681,
    "range": [
      675,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 682,
    "end": 683,
    "range": [
      682,
      683
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 684,
    "end": 685,
    "range": [
      684,
      685
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 711,
    "end": 714,
    "range": [
      711,
      714
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsString10",
    "start": 715,
    "end": 731,
    "range": [
      715,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 734,
    "end": 740,
    "range": [
      734,
      740
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 741,
    "end": 745,
    "range": [
      741,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 748,
    "end": 749,
    "range": [
      748,
      749
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 750,
    "end": 753,
    "range": [
      750,
      753
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsString11",
    "start": 754,
    "end": 770,
    "range": [
      754,
      770
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 771,
    "end": 772,
    "range": [
      771,
      772
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 773,
    "end": 779,
    "range": [
      773,
      779
    ]
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 780,
    "end": 784,
    "range": [
      780,
      784
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 784,
    "end": 785,
    "range": [
      784,
      785
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 786,
    "end": 787,
    "range": [
      786,
      787
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 788,
    "end": 791,
    "range": [
      788,
      791
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsString12",
    "start": 792,
    "end": 808,
    "range": [
      792,
      808
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 809,
    "end": 810,
    "range": [
      809,
      810
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 811,
    "end": 817,
    "range": [
      811,
      817
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 818,
    "end": 822,
    "range": [
      818,
      822
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 826,
    "end": 829,
    "range": [
      826,
      829
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsString13",
    "start": 830,
    "end": 846,
    "range": [
      830,
      846
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 847,
    "end": 848,
    "range": [
      847,
      848
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 849,
    "end": 855,
    "range": [
      849,
      855
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 856,
    "end": 857,
    "range": [
      856,
      857
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 858,
    "end": 859,
    "range": [
      858,
      859
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 859,
    "end": 860,
    "range": [
      859,
      860
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 861,
    "end": 864,
    "range": [
      861,
      864
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsString14",
    "start": 865,
    "end": 881,
    "range": [
      865,
      881
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 882,
    "end": 883,
    "range": [
      882,
      883
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 884,
    "end": 890,
    "range": [
      884,
      890
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 891,
    "end": 894,
    "range": [
      891,
      894
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 894,
    "end": 895,
    "range": [
      894,
      895
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 896,
    "end": 897,
    "range": [
      896,
      897
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 898,
    "end": 901,
    "range": [
      898,
      901
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsString15",
    "start": 902,
    "end": 918,
    "range": [
      902,
      918
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 919,
    "end": 920,
    "range": [
      919,
      920
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 921,
    "end": 927,
    "range": [
      921,
      927
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 928,
    "end": 929,
    "range": [
      928,
      929
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 929,
    "end": 930,
    "range": [
      929,
      930
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 930,
    "end": 933,
    "range": [
      930,
      933
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 934,
    "end": 935,
    "range": [
      934,
      935
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 935,
    "end": 936,
    "range": [
      935,
      936
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 937,
    "end": 940,
    "range": [
      937,
      940
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsString16",
    "start": 941,
    "end": 957,
    "range": [
      941,
      957
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 958,
    "end": 959,
    "range": [
      958,
      959
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 960,
    "end": 966,
    "range": [
      960,
      966
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 967,
    "end": 968,
    "range": [
      967,
      968
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 968,
    "end": 971,
    "range": [
      968,
      971
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 972,
    "end": 973,
    "range": [
      972,
      973
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 974,
    "end": 978,
    "range": [
      974,
      978
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 978,
    "end": 979,
    "range": [
      978,
      979
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 979,
    "end": 980,
    "range": [
      979,
      980
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 981,
    "end": 984,
    "range": [
      981,
      984
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsString17",
    "start": 985,
    "end": 1001,
    "range": [
      985,
      1001
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1002,
    "end": 1003,
    "range": [
      1002,
      1003
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1004,
    "end": 1010,
    "range": [
      1004,
      1010
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1011,
    "end": 1012,
    "range": [
      1011,
      1012
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1012,
    "end": 1016,
    "range": [
      1012,
      1016
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1017,
    "end": 1018,
    "range": [
      1017,
      1018
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1019,
    "end": 1028,
    "range": [
      1019,
      1028
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1028,
    "end": 1029,
    "range": [
      1028,
      1029
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1031,
    "end": 1034,
    "range": [
      1031,
      1034
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsString18",
    "start": 1035,
    "end": 1051,
    "range": [
      1035,
      1051
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1052,
    "end": 1053,
    "range": [
      1052,
      1053
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1054,
    "end": 1060,
    "range": [
      1054,
      1060
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1061,
    "end": 1062,
    "range": [
      1061,
      1062
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1062,
    "end": 1066,
    "range": [
      1062,
      1066
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1067,
    "end": 1068,
    "range": [
      1067,
      1068
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1069,
    "end": 1073,
    "range": [
      1069,
      1073
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1073,
    "end": 1074,
    "range": [
      1073,
      1074
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1074,
    "end": 1075,
    "range": [
      1074,
      1075
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1076,
    "end": 1079,
    "range": [
      1076,
      1079
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsString19",
    "start": 1080,
    "end": 1096,
    "range": [
      1080,
      1096
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1097,
    "end": 1098,
    "range": [
      1097,
      1098
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1099,
    "end": 1105,
    "range": [
      1099,
      1105
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1106,
    "end": 1107,
    "range": [
      1106,
      1107
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1107,
    "end": 1116,
    "range": [
      1107,
      1116
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1117,
    "end": 1118,
    "range": [
      1117,
      1118
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1119,
    "end": 1128,
    "range": [
      1119,
      1128
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1128,
    "end": 1129,
    "range": [
      1128,
      1129
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1129,
    "end": 1130,
    "range": [
      1129,
      1130
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1162,
    "end": 1165,
    "range": [
      1162,
      1165
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsString20",
    "start": 1166,
    "end": 1182,
    "range": [
      1166,
      1182
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1183,
    "end": 1184,
    "range": [
      1183,
      1184
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1185,
    "end": 1191,
    "range": [
      1185,
      1191
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1192,
    "end": 1198,
    "range": [
      1192,
      1198
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1199,
    "end": 1202,
    "range": [
      1199,
      1202
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1202,
    "end": 1203,
    "range": [
      1202,
      1203
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1204,
    "end": 1207,
    "range": [
      1204,
      1207
    ]
  },
  {
    "type": "Identifier",
    "value": "ResultIsString21",
    "start": 1208,
    "end": 1224,
    "range": [
      1208,
      1224
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1225,
    "end": 1226,
    "range": [
      1225,
      1226
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1227,
    "end": 1233,
    "range": [
      1227,
      1233
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1234,
    "end": 1240,
    "range": [
      1234,
      1240
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1241,
    "end": 1247,
    "range": [
      1241,
      1247
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1248,
    "end": 1249,
    "range": [
      1248,
      1249
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1249,
    "end": 1252,
    "range": [
      1249,
      1252
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1253,
    "end": 1254,
    "range": [
      1253,
      1254
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 1255,
    "end": 1259,
    "range": [
      1255,
      1259
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1259,
    "end": 1260,
    "range": [
      1259,
      1260
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1260,
    "end": 1261,
    "range": [
      1260,
      1261
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1292,
    "end": 1298,
    "range": [
      1292,
      1298
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1299,
    "end": 1302,
    "range": [
      1299,
      1302
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1302,
    "end": 1303,
    "range": [
      1302,
      1303
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1304,
    "end": 1310,
    "range": [
      1304,
      1310
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 1311,
    "end": 1315,
    "range": [
      1311,
      1315
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1315,
    "end": 1316,
    "range": [
      1315,
      1316
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1317,
    "end": 1323,
    "range": [
      1317,
      1323
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 1324,
    "end": 1328,
    "range": [
      1324,
      1328
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1328,
    "end": 1329,
    "range": [
      1328,
      1329
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1329,
    "end": 1330,
    "range": [
      1329,
      1330
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1330,
    "end": 1331,
    "range": [
      1330,
      1331
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1331,
    "end": 1332,
    "range": [
      1331,
      1332
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1333,
    "end": 1339,
    "range": [
      1333,
      1339
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1340,
    "end": 1343,
    "range": [
      1340,
      1343
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1343,
    "end": 1344,
    "range": [
      1343,
      1344
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY1",
    "start": 1345,
    "end": 1349,
    "range": [
      1345,
      1349
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1349,
    "end": 1350,
    "range": [
      1349,
      1350
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1351,
    "end": 1357,
    "range": [
      1351,
      1357
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 1358,
    "end": 1362,
    "range": [
      1358,
      1362
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1362,
    "end": 1363,
    "range": [
      1362,
      1363
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1364,
    "end": 1370,
    "range": [
      1364,
      1370
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 1371,
    "end": 1375,
    "range": [
      1371,
      1375
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1375,
    "end": 1376,
    "range": [
      1375,
      1376
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1376,
    "end": 1377,
    "range": [
      1376,
      1377
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1377,
    "end": 1378,
    "range": [
      1377,
      1378
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1379,
    "end": 1385,
    "range": [
      1379,
      1385
    ]
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 1386,
    "end": 1390,
    "range": [
      1386,
      1390
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1390,
    "end": 1391,
    "range": [
      1390,
      1391
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1391,
    "end": 1392,
    "range": [
      1391,
      1392
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1392,
    "end": 1393,
    "range": [
      1392,
      1393
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1394,
    "end": 1400,
    "range": [
      1394,
      1400
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1401,
    "end": 1402,
    "range": [
      1401,
      1402
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1402,
    "end": 1403,
    "range": [
      1402,
      1403
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1403,
    "end": 1404,
    "range": [
      1403,
      1404
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1404,
    "end": 1405,
    "range": [
      1404,
      1405
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1435,
    "end": 1438,
    "range": [
      1435,
      1438
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1439,
    "end": 1440,
    "range": [
      1439,
      1440
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1440,
    "end": 1441,
    "range": [
      1440,
      1441
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1442,
    "end": 1445,
    "range": [
      1442,
      1445
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1445,
    "end": 1446,
    "range": [
      1445,
      1446
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1447,
    "end": 1450,
    "range": [
      1447,
      1450
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1451,
    "end": 1452,
    "range": [
      1451,
      1452
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1452,
    "end": 1453,
    "range": [
      1452,
      1453
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1454,
    "end": 1457,
    "range": [
      1454,
      1457
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1457,
    "end": 1458,
    "range": [
      1457,
      1458
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1458,
    "end": 1459,
    "range": [
      1458,
      1459
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1459,
    "end": 1460,
    "range": [
      1459,
      1460
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1461,
    "end": 1464,
    "range": [
      1461,
      1464
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1465,
    "end": 1466,
    "range": [
      1465,
      1466
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1466,
    "end": 1467,
    "range": [
      1466,
      1467
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1468,
    "end": 1469,
    "range": [
      1468,
      1469
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1469,
    "end": 1470,
    "range": [
      1469,
      1470
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1471,
    "end": 1473,
    "range": [
      1471,
      1473
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1474,
    "end": 1477,
    "range": [
      1474,
      1477
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1477,
    "end": 1478,
    "range": [
      1477,
      1478
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1479,
    "end": 1480,
    "range": [
      1479,
      1480
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1480,
    "end": 1481,
    "range": [
      1480,
      1481
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1482,
    "end": 1488,
    "range": [
      1482,
      1488
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY",
    "start": 1489,
    "end": 1492,
    "range": [
      1489,
      1492
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1492,
    "end": 1493,
    "range": [
      1492,
      1493
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1494,
    "end": 1495,
    "range": [
      1494,
      1495
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1495,
    "end": 1496,
    "range": [
      1495,
      1496
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1497,
    "end": 1503,
    "range": [
      1497,
      1503
    ]
  },
  {
    "type": "Identifier",
    "value": "ANY2",
    "start": 1504,
    "end": 1508,
    "range": [
      1504,
      1508
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1508,
    "end": 1509,
    "range": [
      1508,
      1509
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1510,
    "end": 1511,
    "range": [
      1510,
      1511
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1511,
    "end": 1512,
    "range": [
      1511,
      1512
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1513,
    "end": 1519,
    "range": [
      1513,
      1519
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1520,
    "end": 1523,
    "range": [
      1520,
      1523
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1523,
    "end": 1524,
    "range": [
      1523,
      1524
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1525,
    "end": 1526,
    "range": [
      1525,
      1526
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1526,
    "end": 1527,
    "range": [
      1526,
      1527
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1528,
    "end": 1534,
    "range": [
      1528,
      1534
    ]
  },
  {
    "type": "Identifier",
    "value": "objA",
    "start": 1535,
    "end": 1539,
    "range": [
      1535,
      1539
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1539,
    "end": 1540,
    "range": [
      1539,
      1540
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1540,
    "end": 1541,
    "range": [
      1540,
      1541
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1541,
    "end": 1542,
    "range": [
      1541,
      1542
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1543,
    "end": 1544,
    "range": [
      1543,
      1544
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1544,
    "end": 1545,
    "range": [
      1544,
      1545
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1546,
    "end": 1552,
    "range": [
      1546,
      1552
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1553,
    "end": 1554,
    "range": [
      1553,
      1554
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1554,
    "end": 1555,
    "range": [
      1554,
      1555
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1555,
    "end": 1558,
    "range": [
      1555,
      1558
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1558,
    "end": 1559,
    "range": [
      1558,
      1559
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1560,
    "end": 1561,
    "range": [
      1560,
      1561
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1561,
    "end": 1562,
    "range": [
      1561,
      1562
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1563,
    "end": 1569,
    "range": [
      1563,
      1569
    ]
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 1570,
    "end": 1571,
    "range": [
      1570,
      1571
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1571,
    "end": 1572,
    "range": [
      1571,
      1572
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1572,
    "end": 1573,
    "range": [
      1572,
      1573
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1573,
    "end": 1574,
    "range": [
      1573,
      1574
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1575,
    "end": 1576,
    "range": [
      1575,
      1576
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1576,
    "end": 1577,
    "range": [
      1576,
      1577
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1578,
    "end": 1584,
    "range": [
      1578,
      1584
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 1585,
    "end": 1589,
    "range": [
      1585,
      1589
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1589,
    "end": 1590,
    "range": [
      1589,
      1590
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1590,
    "end": 1591,
    "range": [
      1590,
      1591
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1591,
    "end": 1592,
    "range": [
      1591,
      1592
    ]
  }
]
```
