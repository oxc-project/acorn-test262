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
            "name": "BOOLEAN",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 47,
                "end": 54
              },
              "start": 45,
              "end": 54
            },
            "start": 38,
            "end": 54
          },
          "init": null,
          "definite": false,
          "start": 38,
          "end": 54
        }
      ],
      "declare": false,
      "start": 34,
      "end": 55
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 69
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 73,
          "end": 80
        },
        "start": 71,
        "end": 80
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 90,
              "end": 94
            },
            "start": 83,
            "end": 95
          }
        ],
        "start": 81,
        "end": 97
      },
      "expression": false,
      "start": 57,
      "end": 97
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
        "start": 105,
        "end": 106
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
              "start": 120,
              "end": 121
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 123,
                "end": 130
              },
              "start": 121,
              "end": 130
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
            "start": 113,
            "end": 131
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
              "start": 143,
              "end": 146
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 158,
                      "end": 163
                    },
                    "start": 151,
                    "end": 164
                  }
                ],
                "start": 149,
                "end": 166
              },
              "expression": false,
              "start": 146,
              "end": 166
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 136,
            "end": 166
          }
        ],
        "start": 107,
        "end": 168
      },
      "abstract": false,
      "declare": false,
      "start": 99,
      "end": 168
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 179,
        "end": 180
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
                        "type": "TSBooleanKeyword",
                        "start": 201,
                        "end": 208
                      },
                      "start": 199,
                      "end": 208
                    },
                    "start": 198,
                    "end": 208
                  },
                  "init": null,
                  "definite": false,
                  "start": 198,
                  "end": 208
                }
              ],
              "declare": false,
              "start": 194,
              "end": 209
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 187,
            "end": 209
          }
        ],
        "start": 181,
        "end": 211
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 169,
      "end": 211
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
            "start": 217,
            "end": 221
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 228,
              "end": 229
            },
            "typeArguments": null,
            "arguments": [],
            "start": 224,
            "end": 231
          },
          "definite": false,
          "start": 217,
          "end": 231
        }
      ],
      "declare": false,
      "start": 213,
      "end": 232
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
            "start": 258,
            "end": 270
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "BOOLEAN",
              "optional": false,
              "typeAnnotation": null,
              "start": 278,
              "end": 285
            },
            "prefix": true,
            "start": 273,
            "end": 285
          },
          "definite": false,
          "start": 258,
          "end": 285
        }
      ],
      "declare": false,
      "start": 254,
      "end": 286
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
            "start": 316,
            "end": 328
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 336,
              "end": 340
            },
            "prefix": true,
            "start": 331,
            "end": 340
          },
          "definite": false,
          "start": 316,
          "end": 340
        }
      ],
      "declare": false,
      "start": 312,
      "end": 341
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
            "start": 346,
            "end": 358
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
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
                    "start": 368,
                    "end": 369
                  },
                  "value": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 371,
                    "end": 375
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 368,
                  "end": 375
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
                    "start": 377,
                    "end": 378
                  },
                  "value": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 380,
                    "end": 385
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 377,
                  "end": 385
                }
              ],
              "start": 366,
              "end": 387
            },
            "prefix": true,
            "start": 361,
            "end": 387
          },
          "definite": false,
          "start": 346,
          "end": 387
        }
      ],
      "declare": false,
      "start": 342,
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
            "name": "ResultIsAny4",
            "optional": false,
            "typeAnnotation": null,
            "start": 422,
            "end": 434
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
                "start": 442,
                "end": 446
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 447,
                "end": 448
              },
              "optional": false,
              "computed": false,
              "start": 442,
              "end": 448
            },
            "prefix": true,
            "start": 437,
            "end": 448
          },
          "definite": false,
          "start": 422,
          "end": 448
        }
      ],
      "declare": false,
      "start": 418,
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
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 474,
                "end": 475
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 476,
                "end": 477
              },
              "optional": false,
              "computed": false,
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
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 503,
                "end": 506
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 503,
              "end": 508
            },
            "prefix": true,
            "start": 498,
            "end": 508
          },
          "definite": false,
          "start": 483,
          "end": 508
        }
      ],
      "declare": false,
      "start": 479,
      "end": 509
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
            "start": 514,
            "end": 526
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
                  "start": 534,
                  "end": 535
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 536,
                  "end": 539
                },
                "optional": false,
                "computed": false,
                "start": 534,
                "end": 539
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 534,
              "end": 541
            },
            "prefix": true,
            "start": 529,
            "end": 541
          },
          "definite": false,
          "start": 514,
          "end": 541
        }
      ],
      "declare": false,
      "start": 510,
      "end": 542
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
            "start": 575,
            "end": 587
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
                "name": "BOOLEAN",
                "optional": false,
                "typeAnnotation": null,
                "start": 600,
                "end": 607
              },
              "prefix": true,
              "start": 595,
              "end": 607
            },
            "prefix": true,
            "start": 590,
            "end": 607
          },
          "definite": false,
          "start": 575,
          "end": 607
        }
      ],
      "declare": false,
      "start": 571,
      "end": 608
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 644,
          "end": 648
        },
        "prefix": true,
        "start": 639,
        "end": 648
      },
      "directive": null,
      "start": 639,
      "end": 649
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "BOOLEAN",
          "optional": false,
          "typeAnnotation": null,
          "start": 655,
          "end": 662
        },
        "prefix": true,
        "start": 650,
        "end": 662
      },
      "directive": null,
      "start": 650,
      "end": 663
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
            "start": 669,
            "end": 672
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 669,
          "end": 674
        },
        "prefix": true,
        "start": 664,
        "end": 674
      },
      "directive": null,
      "start": 664,
      "end": 675
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
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 681,
              "end": 685
            },
            "prefix": true,
            "start": 676,
            "end": 685
          },
          {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 687,
            "end": 692
          }
        ],
        "start": 676,
        "end": 692
      },
      "directive": null,
      "start": 676,
      "end": 693
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
            "start": 699,
            "end": 703
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 704,
            "end": 705
          },
          "optional": false,
          "computed": false,
          "start": 699,
          "end": 705
        },
        "prefix": true,
        "start": 694,
        "end": 705
      },
      "directive": null,
      "start": 694,
      "end": 706
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
            "start": 712,
            "end": 713
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 714,
            "end": 715
          },
          "optional": false,
          "computed": false,
          "start": 712,
          "end": 715
        },
        "prefix": true,
        "start": 707,
        "end": 715
      },
      "directive": null,
      "start": 707,
      "end": 716
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 34,
  "end": 716
}
```
