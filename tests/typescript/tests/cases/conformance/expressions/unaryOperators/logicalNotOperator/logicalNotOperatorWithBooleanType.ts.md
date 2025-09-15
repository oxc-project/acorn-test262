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
                "start": 43,
                "end": 50
              },
              "start": 41,
              "end": 50
            },
            "start": 34,
            "end": 50
          },
          "init": null,
          "definite": false,
          "start": 34,
          "end": 50
        }
      ],
      "declare": false,
      "start": 30,
      "end": 51
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 65
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
          "start": 69,
          "end": 76
        },
        "start": 67,
        "end": 76
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
              "start": 86,
              "end": 90
            },
            "start": 79,
            "end": 91
          }
        ],
        "start": 77,
        "end": 93
      },
      "expression": false,
      "start": 53,
      "end": 93
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
        "start": 101,
        "end": 102
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
              "start": 116,
              "end": 117
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 119,
                "end": 126
              },
              "start": 117,
              "end": 126
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
            "start": 109,
            "end": 127
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
              "start": 139,
              "end": 142
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
                      "start": 154,
                      "end": 159
                    },
                    "start": 147,
                    "end": 160
                  }
                ],
                "start": 145,
                "end": 162
              },
              "expression": false,
              "start": 142,
              "end": 162
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 132,
            "end": 162
          }
        ],
        "start": 103,
        "end": 164
      },
      "abstract": false,
      "declare": false,
      "start": 95,
      "end": 164
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 175,
        "end": 176
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
                        "start": 197,
                        "end": 204
                      },
                      "start": 195,
                      "end": 204
                    },
                    "start": 194,
                    "end": 204
                  },
                  "init": null,
                  "definite": false,
                  "start": 194,
                  "end": 204
                }
              ],
              "declare": false,
              "start": 190,
              "end": 205
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 183,
            "end": 205
          }
        ],
        "start": 177,
        "end": 207
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 165,
      "end": 207
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
            "start": 213,
            "end": 217
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 224,
              "end": 225
            },
            "typeArguments": null,
            "arguments": [],
            "start": 220,
            "end": 227
          },
          "definite": false,
          "start": 213,
          "end": 227
        }
      ],
      "declare": false,
      "start": 209,
      "end": 228
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
            "start": 254,
            "end": 270
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "BOOLEAN",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 281
            },
            "prefix": true,
            "start": 273,
            "end": 281
          },
          "definite": false,
          "start": 254,
          "end": 281
        }
      ],
      "declare": false,
      "start": 250,
      "end": 282
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
            "start": 312,
            "end": 328
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 332,
              "end": 336
            },
            "prefix": true,
            "start": 331,
            "end": 336
          },
          "definite": false,
          "start": 312,
          "end": 336
        }
      ],
      "declare": false,
      "start": 308,
      "end": 337
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
            "start": 342,
            "end": 358
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
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
                    "start": 364,
                    "end": 365
                  },
                  "value": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 367,
                    "end": 371
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 364,
                  "end": 371
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
                    "start": 373,
                    "end": 374
                  },
                  "value": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 376,
                    "end": 381
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 373,
                  "end": 381
                }
              ],
              "start": 362,
              "end": 383
            },
            "prefix": true,
            "start": 361,
            "end": 383
          },
          "definite": false,
          "start": 342,
          "end": 383
        }
      ],
      "declare": false,
      "start": 338,
      "end": 384
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
            "start": 418,
            "end": 434
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 438,
                "end": 442
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 443,
                "end": 444
              },
              "optional": false,
              "computed": false,
              "start": 438,
              "end": 444
            },
            "prefix": true,
            "start": 437,
            "end": 444
          },
          "definite": false,
          "start": 418,
          "end": 444
        }
      ],
      "declare": false,
      "start": 414,
      "end": 445
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
            "start": 450,
            "end": 466
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 470,
                "end": 471
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 472,
                "end": 473
              },
              "optional": false,
              "computed": false,
              "start": 470,
              "end": 473
            },
            "prefix": true,
            "start": 469,
            "end": 473
          },
          "definite": false,
          "start": 450,
          "end": 473
        }
      ],
      "declare": false,
      "start": 446,
      "end": 474
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
            "start": 479,
            "end": 495
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 499,
                "end": 502
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 499,
              "end": 504
            },
            "prefix": true,
            "start": 498,
            "end": 504
          },
          "definite": false,
          "start": 479,
          "end": 504
        }
      ],
      "declare": false,
      "start": 475,
      "end": 505
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
            "start": 510,
            "end": 526
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
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
                  "start": 530,
                  "end": 531
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 532,
                  "end": 535
                },
                "optional": false,
                "computed": false,
                "start": 530,
                "end": 535
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 530,
              "end": 537
            },
            "prefix": true,
            "start": 529,
            "end": 537
          },
          "definite": false,
          "start": 510,
          "end": 537
        }
      ],
      "declare": false,
      "start": 506,
      "end": 538
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
            "name": "ResultIsBoolean",
            "optional": false,
            "typeAnnotation": null,
            "start": 568,
            "end": 583
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "BOOLEAN",
                "optional": false,
                "typeAnnotation": null,
                "start": 588,
                "end": 595
              },
              "prefix": true,
              "start": 587,
              "end": 595
            },
            "prefix": true,
            "start": 586,
            "end": 595
          },
          "definite": false,
          "start": 568,
          "end": 595
        }
      ],
      "declare": false,
      "start": 564,
      "end": 596
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 628,
          "end": 632
        },
        "prefix": true,
        "start": 627,
        "end": 632
      },
      "directive": null,
      "start": 627,
      "end": 633
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "BOOLEAN",
          "optional": false,
          "typeAnnotation": null,
          "start": 635,
          "end": 642
        },
        "prefix": true,
        "start": 634,
        "end": 642
      },
      "directive": null,
      "start": 634,
      "end": 643
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 645,
            "end": 648
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 645,
          "end": 650
        },
        "prefix": true,
        "start": 644,
        "end": 650
      },
      "directive": null,
      "start": 644,
      "end": 651
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 653,
              "end": 657
            },
            "prefix": true,
            "start": 652,
            "end": 657
          },
          {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 659,
            "end": 664
          }
        ],
        "start": 652,
        "end": 664
      },
      "directive": null,
      "start": 652,
      "end": 665
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 667,
            "end": 671
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 672,
            "end": 673
          },
          "optional": false,
          "computed": false,
          "start": 667,
          "end": 673
        },
        "prefix": true,
        "start": 666,
        "end": 673
      },
      "directive": null,
      "start": 666,
      "end": 674
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 676,
            "end": 677
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 678,
            "end": 679
          },
          "optional": false,
          "computed": false,
          "start": 676,
          "end": 679
        },
        "prefix": true,
        "start": 675,
        "end": 679
      },
      "directive": null,
      "start": 675,
      "end": 680
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 30,
  "end": 680
}
```
