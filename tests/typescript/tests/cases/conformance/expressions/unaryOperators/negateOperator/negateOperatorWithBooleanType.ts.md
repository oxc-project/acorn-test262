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
            "name": "ResultIsNumber1",
            "optional": false,
            "typeAnnotation": null,
            "start": 254,
            "end": 269
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "BOOLEAN",
              "optional": false,
              "typeAnnotation": null,
              "start": 273,
              "end": 280
            },
            "prefix": true,
            "start": 272,
            "end": 280
          },
          "definite": false,
          "start": 254,
          "end": 280
        }
      ],
      "declare": false,
      "start": 250,
      "end": 281
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
            "start": 311,
            "end": 326
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 330,
              "end": 334
            },
            "prefix": true,
            "start": 329,
            "end": 334
          },
          "definite": false,
          "start": 311,
          "end": 334
        }
      ],
      "declare": false,
      "start": 307,
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
            "name": "ResultIsNumber3",
            "optional": false,
            "typeAnnotation": null,
            "start": 340,
            "end": 355
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
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
                    "start": 361,
                    "end": 362
                  },
                  "value": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 364,
                    "end": 368
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 361,
                  "end": 368
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
                    "start": 370,
                    "end": 371
                  },
                  "value": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 373,
                    "end": 378
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 370,
                  "end": 378
                }
              ],
              "start": 359,
              "end": 380
            },
            "prefix": true,
            "start": 358,
            "end": 380
          },
          "definite": false,
          "start": 340,
          "end": 380
        }
      ],
      "declare": false,
      "start": 336,
      "end": 381
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
            "start": 415,
            "end": 430
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 434,
                "end": 438
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 439,
                "end": 440
              },
              "optional": false,
              "computed": false,
              "start": 434,
              "end": 440
            },
            "prefix": true,
            "start": 433,
            "end": 440
          },
          "definite": false,
          "start": 415,
          "end": 440
        }
      ],
      "declare": false,
      "start": 411,
      "end": 441
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
            "start": 446,
            "end": 461
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 465,
                "end": 466
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 467,
                "end": 468
              },
              "optional": false,
              "computed": false,
              "start": 465,
              "end": 468
            },
            "prefix": true,
            "start": 464,
            "end": 468
          },
          "definite": false,
          "start": 446,
          "end": 468
        }
      ],
      "declare": false,
      "start": 442,
      "end": 469
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
            "start": 474,
            "end": 489
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 493,
                "end": 496
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 493,
              "end": 498
            },
            "prefix": true,
            "start": 492,
            "end": 498
          },
          "definite": false,
          "start": 474,
          "end": 498
        }
      ],
      "declare": false,
      "start": 470,
      "end": 499
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
            "start": 504,
            "end": 519
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
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
                  "start": 523,
                  "end": 524
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 525,
                  "end": 528
                },
                "optional": false,
                "computed": false,
                "start": 523,
                "end": 528
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 523,
              "end": 530
            },
            "prefix": true,
            "start": 522,
            "end": 530
          },
          "definite": false,
          "start": 504,
          "end": 530
        }
      ],
      "declare": false,
      "start": 500,
      "end": 531
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "-",
        "argument": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 563,
          "end": 567
        },
        "prefix": true,
        "start": 562,
        "end": 567
      },
      "directive": null,
      "start": 562,
      "end": 568
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "-",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "BOOLEAN",
          "optional": false,
          "typeAnnotation": null,
          "start": 570,
          "end": 577
        },
        "prefix": true,
        "start": 569,
        "end": 577
      },
      "directive": null,
      "start": 569,
      "end": 578
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "-",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 580,
            "end": 583
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 580,
          "end": 585
        },
        "prefix": true,
        "start": 579,
        "end": 585
      },
      "directive": null,
      "start": 579,
      "end": 586
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 588,
              "end": 592
            },
            "prefix": true,
            "start": 587,
            "end": 592
          },
          {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 594,
            "end": 599
          }
        ],
        "start": 587,
        "end": 599
      },
      "directive": null,
      "start": 587,
      "end": 600
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "-",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 602,
            "end": 606
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 607,
            "end": 608
          },
          "optional": false,
          "computed": false,
          "start": 602,
          "end": 608
        },
        "prefix": true,
        "start": 601,
        "end": 608
      },
      "directive": null,
      "start": 601,
      "end": 609
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "-",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 611,
            "end": 612
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 613,
            "end": 614
          },
          "optional": false,
          "computed": false,
          "start": 611,
          "end": 614
        },
        "prefix": true,
        "start": 610,
        "end": 614
      },
      "directive": null,
      "start": 610,
      "end": 615
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 30,
  "end": 615
}
```
