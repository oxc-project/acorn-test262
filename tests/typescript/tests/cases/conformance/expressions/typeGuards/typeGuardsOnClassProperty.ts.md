__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 253,
        "end": 254
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
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 261,
              "end": 265
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 267,
                    "end": 273
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 276,
                      "end": 282
                    },
                    "start": 276,
                    "end": 284
                  }
                ],
                "start": 267,
                "end": 284
              },
              "start": 265,
              "end": 284
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 261,
            "end": 285
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getData",
              "optional": false,
              "typeAnnotation": null,
              "start": 290,
              "end": 297
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
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 314,
                          "end": 318
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 321,
                            "end": 325
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 326,
                            "end": 330
                          },
                          "optional": false,
                          "computed": false,
                          "start": 321,
                          "end": 330
                        },
                        "definite": false,
                        "start": 314,
                        "end": 330
                      }
                    ],
                    "declare": false,
                    "start": 310,
                    "end": 331
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "typeof",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 354,
                            "end": 358
                          },
                          "prefix": true,
                          "start": 347,
                          "end": 358
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "string",
                          "raw": "\"string\"",
                          "start": 363,
                          "end": 371
                        },
                        "start": 347,
                        "end": 371
                      },
                      "consequent": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 374,
                        "end": 378
                      },
                      "alternate": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 381,
                            "end": 385
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "join",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 386,
                            "end": 390
                          },
                          "optional": false,
                          "computed": false,
                          "start": 381,
                          "end": 390
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": " ",
                            "raw": "\" \"",
                            "start": 391,
                            "end": 394
                          }
                        ],
                        "optional": false,
                        "start": 381,
                        "end": 395
                      },
                      "start": 347,
                      "end": 395
                    },
                    "start": 340,
                    "end": 396
                  }
                ],
                "start": 300,
                "end": 402
              },
              "expression": false,
              "start": 297,
              "end": 402
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 290,
            "end": 402
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getData1",
              "optional": false,
              "typeAnnotation": null,
              "start": 408,
              "end": 416
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
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "typeof",
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 443,
                              "end": 447
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 448,
                              "end": 452
                            },
                            "optional": false,
                            "computed": false,
                            "start": 443,
                            "end": 452
                          },
                          "prefix": true,
                          "start": 436,
                          "end": 452
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "string",
                          "raw": "\"string\"",
                          "start": 457,
                          "end": 465
                        },
                        "start": 436,
                        "end": 465
                      },
                      "consequent": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 468,
                          "end": 472
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 473,
                          "end": 477
                        },
                        "optional": false,
                        "computed": false,
                        "start": 468,
                        "end": 477
                      },
                      "alternate": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 480,
                              "end": 484
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 485,
                              "end": 489
                            },
                            "optional": false,
                            "computed": false,
                            "start": 480,
                            "end": 489
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "join",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 490,
                            "end": 494
                          },
                          "optional": false,
                          "computed": false,
                          "start": 480,
                          "end": 494
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": " ",
                            "raw": "\" \"",
                            "start": 495,
                            "end": 498
                          }
                        ],
                        "optional": false,
                        "start": 480,
                        "end": 499
                      },
                      "start": 436,
                      "end": 499
                    },
                    "start": 429,
                    "end": 500
                  }
                ],
                "start": 419,
                "end": 506
              },
              "expression": false,
              "start": 416,
              "end": 506
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 408,
            "end": 506
          }
        ],
        "start": 255,
        "end": 508
      },
      "abstract": false,
      "declare": false,
      "start": 247,
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
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prop1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 523,
                      "end": 528
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 530,
                            "end": 536
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 537,
                            "end": 543
                          }
                        ],
                        "start": 530,
                        "end": 543
                      },
                      "start": 528,
                      "end": 543
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 523,
                    "end": 544
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prop2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 549,
                      "end": 554
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSBooleanKeyword",
                            "start": 556,
                            "end": 563
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 564,
                            "end": 570
                          }
                        ],
                        "start": 556,
                        "end": 570
                      },
                      "start": 554,
                      "end": 570
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 549,
                    "end": 571
                  }
                ],
                "start": 517,
                "end": 573
              },
              "start": 515,
              "end": 573
            },
            "start": 514,
            "end": 573
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
                  "name": "prop1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 586,
                  "end": 591
                },
                "value": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 593,
                  "end": 601
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 586,
                "end": 601
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 612,
                  "end": 617
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 619,
                  "end": 623
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 612,
                "end": 623
              }
            ],
            "start": 576,
            "end": 629
          },
          "definite": false,
          "start": 514,
          "end": 629
        }
      ],
      "declare": false,
      "start": 510,
      "end": 629
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 642,
                "end": 643
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop1",
                "optional": false,
                "typeAnnotation": null,
                "start": 644,
                "end": 649
              },
              "optional": false,
              "computed": false,
              "start": 642,
              "end": 649
            },
            "prefix": true,
            "start": 635,
            "end": 649
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 654,
            "end": 662
          },
          "start": 635,
          "end": 662
        },
        "operator": "&&",
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 666,
                "end": 667
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop1",
                "optional": false,
                "typeAnnotation": null,
                "start": 668,
                "end": 673
              },
              "optional": false,
              "computed": false,
              "start": 666,
              "end": 673
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLowerCase",
              "optional": false,
              "typeAnnotation": null,
              "start": 674,
              "end": 685
            },
            "optional": false,
            "computed": false,
            "start": 666,
            "end": 685
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 666,
          "end": 687
        },
        "start": 635,
        "end": 687
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 689,
        "end": 691
      },
      "alternate": null,
      "start": 631,
      "end": 691
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
            "name": "prop1",
            "optional": false,
            "typeAnnotation": null,
            "start": 696,
            "end": 701
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 704,
              "end": 705
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 706,
              "end": 711
            },
            "optional": false,
            "computed": false,
            "start": 704,
            "end": 711
          },
          "definite": false,
          "start": 696,
          "end": 711
        }
      ],
      "declare": false,
      "start": 692,
      "end": 712
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 724,
              "end": 729
            },
            "prefix": true,
            "start": 717,
            "end": 729
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": "string",
            "raw": "\"string\"",
            "start": 734,
            "end": 742
          },
          "start": 717,
          "end": 742
        },
        "operator": "&&",
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 746,
              "end": 751
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "toLocaleLowerCase",
              "optional": false,
              "typeAnnotation": null,
              "start": 752,
              "end": 769
            },
            "optional": false,
            "computed": false,
            "start": 746,
            "end": 769
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 746,
          "end": 771
        },
        "start": 717,
        "end": 771
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 773,
        "end": 776
      },
      "alternate": null,
      "start": 713,
      "end": 776
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 247,
  "end": 776
}
```
