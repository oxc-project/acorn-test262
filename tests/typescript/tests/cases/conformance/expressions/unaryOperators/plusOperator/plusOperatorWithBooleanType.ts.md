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
        "start": 172,
        "end": 173
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
                        "start": 194,
                        "end": 201
                      },
                      "start": 192,
                      "end": 201
                    },
                    "start": 191,
                    "end": 201
                  },
                  "init": null,
                  "definite": false,
                  "start": 191,
                  "end": 201
                }
              ],
              "declare": false,
              "start": 187,
              "end": 202
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 180,
            "end": 202
          }
        ],
        "start": 174,
        "end": 204
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 165,
      "end": 204
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
            "start": 210,
            "end": 214
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 221,
              "end": 222
            },
            "typeArguments": null,
            "arguments": [],
            "start": 217,
            "end": 224
          },
          "definite": false,
          "start": 210,
          "end": 224
        }
      ],
      "declare": false,
      "start": 206,
      "end": 225
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
            "start": 251,
            "end": 266
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "BOOLEAN",
              "optional": false,
              "typeAnnotation": null,
              "start": 270,
              "end": 277
            },
            "prefix": true,
            "start": 269,
            "end": 277
          },
          "definite": false,
          "start": 251,
          "end": 277
        }
      ],
      "declare": false,
      "start": 247,
      "end": 278
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
            "start": 308,
            "end": 323
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 327,
              "end": 331
            },
            "prefix": true,
            "start": 326,
            "end": 331
          },
          "definite": false,
          "start": 308,
          "end": 331
        }
      ],
      "declare": false,
      "start": 304,
      "end": 332
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
            "start": 337,
            "end": 352
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
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
                    "start": 358,
                    "end": 359
                  },
                  "value": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 361,
                    "end": 365
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 358,
                  "end": 365
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
                    "start": 367,
                    "end": 368
                  },
                  "value": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 370,
                    "end": 375
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 367,
                  "end": 375
                }
              ],
              "start": 356,
              "end": 377
            },
            "prefix": true,
            "start": 355,
            "end": 377
          },
          "definite": false,
          "start": 337,
          "end": 377
        }
      ],
      "declare": false,
      "start": 333,
      "end": 378
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
            "start": 412,
            "end": 427
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
                "start": 431,
                "end": 435
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 436,
                "end": 437
              },
              "optional": false,
              "computed": false,
              "start": 431,
              "end": 437
            },
            "prefix": true,
            "start": 430,
            "end": 437
          },
          "definite": false,
          "start": 412,
          "end": 437
        }
      ],
      "declare": false,
      "start": 408,
      "end": 438
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
            "start": 443,
            "end": 458
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
                "start": 462,
                "end": 463
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 464,
                "end": 465
              },
              "optional": false,
              "computed": false,
              "start": 462,
              "end": 465
            },
            "prefix": true,
            "start": 461,
            "end": 465
          },
          "definite": false,
          "start": 443,
          "end": 465
        }
      ],
      "declare": false,
      "start": 439,
      "end": 466
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
            "start": 471,
            "end": 486
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
                "start": 490,
                "end": 493
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 490,
              "end": 495
            },
            "prefix": true,
            "start": 489,
            "end": 495
          },
          "definite": false,
          "start": 471,
          "end": 495
        }
      ],
      "declare": false,
      "start": 467,
      "end": 496
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
            "start": 501,
            "end": 516
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
                  "start": 520,
                  "end": 521
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 522,
                  "end": 525
                },
                "optional": false,
                "computed": false,
                "start": 520,
                "end": 525
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 520,
              "end": 527
            },
            "prefix": true,
            "start": 519,
            "end": 527
          },
          "definite": false,
          "start": 501,
          "end": 527
        }
      ],
      "declare": false,
      "start": 497,
      "end": 528
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "+",
        "argument": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 560,
          "end": 564
        },
        "prefix": true,
        "start": 559,
        "end": 564
      },
      "directive": null,
      "start": 559,
      "end": 565
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "+",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "BOOLEAN",
          "optional": false,
          "typeAnnotation": null,
          "start": 567,
          "end": 574
        },
        "prefix": true,
        "start": 566,
        "end": 574
      },
      "directive": null,
      "start": 566,
      "end": 575
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
            "start": 577,
            "end": 580
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 577,
          "end": 582
        },
        "prefix": true,
        "start": 576,
        "end": 582
      },
      "directive": null,
      "start": 576,
      "end": 583
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
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 585,
              "end": 589
            },
            "prefix": true,
            "start": 584,
            "end": 589
          },
          {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 591,
            "end": 596
          }
        ],
        "start": 584,
        "end": 596
      },
      "directive": null,
      "start": 584,
      "end": 597
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
            "start": 599,
            "end": 603
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 604,
            "end": 605
          },
          "optional": false,
          "computed": false,
          "start": 599,
          "end": 605
        },
        "prefix": true,
        "start": 598,
        "end": 605
      },
      "directive": null,
      "start": 598,
      "end": 606
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
            "start": 608,
            "end": 609
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 610,
            "end": 611
          },
          "optional": false,
          "computed": false,
          "start": 608,
          "end": 611
        },
        "prefix": true,
        "start": 607,
        "end": 611
      },
      "directive": null,
      "start": 607,
      "end": 612
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 30,
  "end": 612
}
```
