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
        "start": 176,
        "end": 177
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
                        "start": 198,
                        "end": 205
                      },
                      "start": 196,
                      "end": 205
                    },
                    "start": 195,
                    "end": 205
                  },
                  "init": null,
                  "definite": false,
                  "start": 195,
                  "end": 205
                }
              ],
              "declare": false,
              "start": 191,
              "end": 206
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 184,
            "end": 206
          }
        ],
        "start": 178,
        "end": 208
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 169,
      "end": 208
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
            "start": 214,
            "end": 218
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 225,
              "end": 226
            },
            "typeArguments": null,
            "arguments": [],
            "start": 221,
            "end": 228
          },
          "definite": false,
          "start": 214,
          "end": 228
        }
      ],
      "declare": false,
      "start": 210,
      "end": 229
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
            "start": 255,
            "end": 267
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
              "start": 275,
              "end": 282
            },
            "prefix": true,
            "start": 270,
            "end": 282
          },
          "definite": false,
          "start": 255,
          "end": 282
        }
      ],
      "declare": false,
      "start": 251,
      "end": 283
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
            "start": 313,
            "end": 325
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "void",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 333,
              "end": 337
            },
            "prefix": true,
            "start": 328,
            "end": 337
          },
          "definite": false,
          "start": 313,
          "end": 337
        }
      ],
      "declare": false,
      "start": 309,
      "end": 338
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
            "start": 343,
            "end": 355
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
                    "start": 365,
                    "end": 366
                  },
                  "value": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 368,
                    "end": 372
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 365,
                  "end": 372
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
                    "start": 374,
                    "end": 375
                  },
                  "value": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 377,
                    "end": 382
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 374,
                  "end": 382
                }
              ],
              "start": 363,
              "end": 384
            },
            "prefix": true,
            "start": 358,
            "end": 384
          },
          "definite": false,
          "start": 343,
          "end": 384
        }
      ],
      "declare": false,
      "start": 339,
      "end": 385
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
            "start": 419,
            "end": 431
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
                "start": 439,
                "end": 443
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 444,
                "end": 445
              },
              "optional": false,
              "computed": false,
              "start": 439,
              "end": 445
            },
            "prefix": true,
            "start": 434,
            "end": 445
          },
          "definite": false,
          "start": 419,
          "end": 445
        }
      ],
      "declare": false,
      "start": 415,
      "end": 446
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
            "start": 451,
            "end": 463
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
                "start": 471,
                "end": 472
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 473,
                "end": 474
              },
              "optional": false,
              "computed": false,
              "start": 471,
              "end": 474
            },
            "prefix": true,
            "start": 466,
            "end": 474
          },
          "definite": false,
          "start": 451,
          "end": 474
        }
      ],
      "declare": false,
      "start": 447,
      "end": 475
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
            "start": 480,
            "end": 492
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
                "start": 500,
                "end": 503
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 500,
              "end": 505
            },
            "prefix": true,
            "start": 495,
            "end": 505
          },
          "definite": false,
          "start": 480,
          "end": 505
        }
      ],
      "declare": false,
      "start": 476,
      "end": 506
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
            "start": 511,
            "end": 523
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
                  "start": 531,
                  "end": 532
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 533,
                  "end": 536
                },
                "optional": false,
                "computed": false,
                "start": 531,
                "end": 536
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 531,
              "end": 538
            },
            "prefix": true,
            "start": 526,
            "end": 538
          },
          "definite": false,
          "start": 511,
          "end": 538
        }
      ],
      "declare": false,
      "start": 507,
      "end": 539
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
              "type": "UnaryExpression",
              "operator": "void",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "BOOLEAN",
                "optional": false,
                "typeAnnotation": null,
                "start": 597,
                "end": 604
              },
              "prefix": true,
              "start": 592,
              "end": 604
            },
            "prefix": true,
            "start": 587,
            "end": 604
          },
          "definite": false,
          "start": 572,
          "end": 604
        }
      ],
      "declare": false,
      "start": 568,
      "end": 605
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
          "start": 641,
          "end": 645
        },
        "prefix": true,
        "start": 636,
        "end": 645
      },
      "directive": null,
      "start": 636,
      "end": 646
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
          "start": 652,
          "end": 659
        },
        "prefix": true,
        "start": 647,
        "end": 659
      },
      "directive": null,
      "start": 647,
      "end": 660
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
            "start": 666,
            "end": 669
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 666,
          "end": 671
        },
        "prefix": true,
        "start": 661,
        "end": 671
      },
      "directive": null,
      "start": 661,
      "end": 672
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
              "start": 678,
              "end": 682
            },
            "prefix": true,
            "start": 673,
            "end": 682
          },
          {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 684,
            "end": 689
          }
        ],
        "start": 673,
        "end": 689
      },
      "directive": null,
      "start": 673,
      "end": 690
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
            "start": 696,
            "end": 700
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 701,
            "end": 702
          },
          "optional": false,
          "computed": false,
          "start": 696,
          "end": 702
        },
        "prefix": true,
        "start": 691,
        "end": 702
      },
      "directive": null,
      "start": 691,
      "end": 703
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
            "start": 709,
            "end": 710
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 711,
            "end": 712
          },
          "optional": false,
          "computed": false,
          "start": 709,
          "end": 712
        },
        "prefix": true,
        "start": 704,
        "end": 712
      },
      "directive": null,
      "start": 704,
      "end": 713
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 34,
  "end": 713
}
```
