__ESTREE_TEST__:AST:
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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "start": 10,
              "end": 11
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 13,
                "end": 19
              },
              "start": 11,
              "end": 19
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
            "start": 10,
            "end": 20
          }
        ],
        "start": 8,
        "end": 22
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 29,
        "end": 30
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 34
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 36,
                "end": 42
              },
              "start": 34,
              "end": 42
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
            "start": 33,
            "end": 43
          }
        ],
        "start": 31,
        "end": 45
      },
      "abstract": false,
      "declare": false,
      "start": 23,
      "end": 45
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "negativeClassesTest",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 75
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 79,
                    "end": 80
                  },
                  "typeArguments": null,
                  "start": 79,
                  "end": 80
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 83,
                    "end": 84
                  },
                  "typeArguments": null,
                  "start": 83,
                  "end": 84
                }
              ],
              "start": 79,
              "end": 84
            },
            "start": 77,
            "end": 84
          },
          "start": 76,
          "end": 84
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 96,
                "end": 99
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 103,
                "end": 104
              },
              "start": 96,
              "end": 104
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 116,
                        "end": 117
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 118,
                        "end": 119
                      },
                      "optional": false,
                      "computed": false,
                      "start": 116,
                      "end": 119
                    },
                    "right": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 122,
                      "end": 125
                    },
                    "start": 116,
                    "end": 125
                  },
                  "directive": null,
                  "start": 116,
                  "end": 126
                }
              ],
              "start": 106,
              "end": 132
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 148,
                        "end": 149
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 150,
                        "end": 151
                      },
                      "optional": false,
                      "computed": false,
                      "start": 148,
                      "end": 151
                    },
                    "right": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 154,
                      "end": 157
                    },
                    "start": 148,
                    "end": 157
                  },
                  "directive": null,
                  "start": 148,
                  "end": 158
                }
              ],
              "start": 138,
              "end": 164
            },
            "start": 92,
            "end": 164
          }
        ],
        "start": 86,
        "end": 166
      },
      "expression": false,
      "start": 47,
      "end": 166
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "positiveClassesTest",
        "optional": false,
        "typeAnnotation": null,
        "start": 177,
        "end": 196
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 200,
                    "end": 201
                  },
                  "typeArguments": null,
                  "start": 200,
                  "end": 201
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 204,
                    "end": 205
                  },
                  "typeArguments": null,
                  "start": 204,
                  "end": 205
                }
              ],
              "start": 200,
              "end": 205
            },
            "start": 198,
            "end": 205
          },
          "start": 197,
          "end": 205
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 217,
                "end": 220
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 224,
                "end": 225
              },
              "start": 217,
              "end": 225
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 237,
                        "end": 238
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 239,
                        "end": 240
                      },
                      "optional": false,
                      "computed": false,
                      "start": 237,
                      "end": 240
                    },
                    "right": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 243,
                      "end": 246
                    },
                    "start": 237,
                    "end": 246
                  },
                  "directive": null,
                  "start": 237,
                  "end": 247
                }
              ],
              "start": 227,
              "end": 253
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 269,
                        "end": 270
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 271,
                        "end": 272
                      },
                      "optional": false,
                      "computed": false,
                      "start": 269,
                      "end": 272
                    },
                    "right": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 275,
                      "end": 278
                    },
                    "start": 269,
                    "end": 278
                  },
                  "directive": null,
                  "start": 269,
                  "end": 279
                }
              ],
              "start": 259,
              "end": 285
            },
            "start": 213,
            "end": 285
          }
        ],
        "start": 207,
        "end": 287
      },
      "expression": false,
      "start": 168,
      "end": 287
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AWithOptionalProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 295,
        "end": 312
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
              "start": 315,
              "end": 316
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 319,
                "end": 325
              },
              "start": 317,
              "end": 325
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 315,
            "end": 326
          }
        ],
        "start": 313,
        "end": 328
      },
      "abstract": false,
      "declare": false,
      "start": 289,
      "end": 328
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BWithOptionalProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 335,
        "end": 352
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 355,
              "end": 356
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 359,
                "end": 365
              },
              "start": 357,
              "end": 365
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 355,
            "end": 366
          }
        ],
        "start": 353,
        "end": 368
      },
      "abstract": false,
      "declare": false,
      "start": 329,
      "end": 368
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "positiveTestClassesWithOptionalProperties",
        "optional": false,
        "typeAnnotation": null,
        "start": 379,
        "end": 420
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AWithOptionalProp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 424,
                    "end": 441
                  },
                  "typeArguments": null,
                  "start": 424,
                  "end": 441
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BWithOptionalProp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 444,
                    "end": 461
                  },
                  "typeArguments": null,
                  "start": 444,
                  "end": 461
                }
              ],
              "start": 424,
              "end": 461
            },
            "start": 422,
            "end": 461
          },
          "start": 421,
          "end": 461
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 473,
                "end": 476
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 480,
                "end": 481
              },
              "start": 473,
              "end": 481
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 493,
                        "end": 494
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 495,
                        "end": 496
                      },
                      "optional": false,
                      "computed": false,
                      "start": 493,
                      "end": 496
                    },
                    "right": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 499,
                      "end": 502
                    },
                    "start": 493,
                    "end": 502
                  },
                  "directive": null,
                  "start": 493,
                  "end": 503
                }
              ],
              "start": 483,
              "end": 509
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 525,
                        "end": 526
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 527,
                        "end": 528
                      },
                      "optional": false,
                      "computed": false,
                      "start": 525,
                      "end": 528
                    },
                    "right": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 531,
                      "end": 534
                    },
                    "start": 525,
                    "end": 534
                  },
                  "directive": null,
                  "start": 525,
                  "end": 535
                }
              ],
              "start": 515,
              "end": 541
            },
            "start": 469,
            "end": 541
          }
        ],
        "start": 463,
        "end": 543
      },
      "expression": false,
      "start": 370,
      "end": 543
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AWithMethod",
        "optional": false,
        "typeAnnotation": null,
        "start": 551,
        "end": 562
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 569,
              "end": 570
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 574,
                  "end": 580
                },
                "start": 572,
                "end": 580
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 590,
                      "end": 592
                    },
                    "start": 583,
                    "end": 593
                  }
                ],
                "start": 581,
                "end": 595
              },
              "expression": false,
              "start": 570,
              "end": 595
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 569,
            "end": 595
          }
        ],
        "start": 563,
        "end": 597
      },
      "abstract": false,
      "declare": false,
      "start": 545,
      "end": 597
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BWithMethod",
        "optional": false,
        "typeAnnotation": null,
        "start": 605,
        "end": 616
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 623,
              "end": 624
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 628,
                  "end": 634
                },
                "start": 626,
                "end": 634
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 644,
                      "end": 646
                    },
                    "start": 637,
                    "end": 647
                  }
                ],
                "start": 635,
                "end": 649
              },
              "expression": false,
              "start": 624,
              "end": 649
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 623,
            "end": 649
          }
        ],
        "start": 617,
        "end": 651
      },
      "abstract": false,
      "declare": false,
      "start": 599,
      "end": 651
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "negativeTestClassesWithMembers",
        "optional": false,
        "typeAnnotation": null,
        "start": 662,
        "end": 692
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AWithMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 696,
                    "end": 707
                  },
                  "typeArguments": null,
                  "start": 696,
                  "end": 707
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BWithMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 710,
                    "end": 721
                  },
                  "typeArguments": null,
                  "start": 710,
                  "end": 721
                }
              ],
              "start": 696,
              "end": 721
            },
            "start": 694,
            "end": 721
          },
          "start": 693,
          "end": 721
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 733,
                "end": 736
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 740,
                "end": 741
              },
              "start": 733,
              "end": 741
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 753,
                        "end": 754
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 755,
                        "end": 756
                      },
                      "optional": false,
                      "computed": false,
                      "start": 753,
                      "end": 756
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 753,
                    "end": 758
                  },
                  "directive": null,
                  "start": 753,
                  "end": 759
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 768,
                        "end": 769
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 770,
                        "end": 771
                      },
                      "optional": false,
                      "computed": false,
                      "start": 768,
                      "end": 771
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 768,
                    "end": 773
                  },
                  "directive": null,
                  "start": 768,
                  "end": 774
                }
              ],
              "start": 743,
              "end": 780
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [],
              "start": 786,
              "end": 793
            },
            "start": 729,
            "end": 793
          }
        ],
        "start": 723,
        "end": 795
      },
      "expression": false,
      "start": 653,
      "end": 795
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "negativeTestClassesWithMemberMissingInBothClasses",
        "optional": false,
        "typeAnnotation": null,
        "start": 806,
        "end": 855
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AWithMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 859,
                    "end": 870
                  },
                  "typeArguments": null,
                  "start": 859,
                  "end": 870
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "BWithMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 873,
                    "end": 884
                  },
                  "typeArguments": null,
                  "start": 873,
                  "end": 884
                }
              ],
              "start": 859,
              "end": 884
            },
            "start": 857,
            "end": 884
          },
          "start": 856,
          "end": 884
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "c",
                "raw": "\"c\"",
                "start": 896,
                "end": 899
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 903,
                "end": 904
              },
              "start": 896,
              "end": 904
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 916,
                        "end": 917
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 918,
                        "end": 919
                      },
                      "optional": false,
                      "computed": false,
                      "start": 916,
                      "end": 919
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 916,
                    "end": 921
                  },
                  "directive": null,
                  "start": 916,
                  "end": 922
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 931,
                        "end": 932
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 933,
                        "end": 934
                      },
                      "optional": false,
                      "computed": false,
                      "start": 931,
                      "end": 934
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 931,
                    "end": 936
                  },
                  "directive": null,
                  "start": 931,
                  "end": 937
                }
              ],
              "start": 906,
              "end": 943
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 959,
                        "end": 960
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 961,
                        "end": 962
                      },
                      "optional": false,
                      "computed": false,
                      "start": 959,
                      "end": 962
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 959,
                    "end": 964
                  },
                  "directive": null,
                  "start": 959,
                  "end": 965
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 974,
                        "end": 975
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 976,
                        "end": 977
                      },
                      "optional": false,
                      "computed": false,
                      "start": 974,
                      "end": 977
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 974,
                    "end": 979
                  },
                  "directive": null,
                  "start": 974,
                  "end": 980
                }
              ],
              "start": 949,
              "end": 986
            },
            "start": 892,
            "end": 986
          }
        ],
        "start": 886,
        "end": 988
      },
      "expression": false,
      "start": 797,
      "end": 988
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 996,
        "end": 997
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
              "start": 1000,
              "end": 1001
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1003,
                "end": 1009
              },
              "start": 1001,
              "end": 1009
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
            "start": 1000,
            "end": 1010
          }
        ],
        "start": 998,
        "end": 1012
      },
      "abstract": false,
      "declare": false,
      "start": 990,
      "end": 1012
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 1019,
        "end": 1020
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
              "start": 1023,
              "end": 1024
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1026,
                "end": 1032
              },
              "start": 1024,
              "end": 1032
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
            "start": 1023,
            "end": 1033
          }
        ],
        "start": 1021,
        "end": 1035
      },
      "abstract": false,
      "declare": false,
      "start": 1013,
      "end": 1035
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "negativeMultipleClassesTest",
        "optional": false,
        "typeAnnotation": null,
        "start": 1046,
        "end": 1073
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1077,
                    "end": 1078
                  },
                  "typeArguments": null,
                  "start": 1077,
                  "end": 1078
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1081,
                    "end": 1082
                  },
                  "typeArguments": null,
                  "start": 1081,
                  "end": 1082
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1085,
                    "end": 1086
                  },
                  "typeArguments": null,
                  "start": 1085,
                  "end": 1086
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1089,
                    "end": 1090
                  },
                  "typeArguments": null,
                  "start": 1089,
                  "end": 1090
                }
              ],
              "start": 1077,
              "end": 1090
            },
            "start": 1075,
            "end": 1090
          },
          "start": 1074,
          "end": 1090
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 1102,
                "end": 1105
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1109,
                "end": 1110
              },
              "start": 1102,
              "end": 1110
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1122,
                        "end": 1123
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1124,
                        "end": 1125
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1122,
                      "end": 1125
                    },
                    "right": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 1128,
                      "end": 1131
                    },
                    "start": 1122,
                    "end": 1131
                  },
                  "directive": null,
                  "start": 1122,
                  "end": 1132
                }
              ],
              "start": 1112,
              "end": 1138
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1154,
                        "end": 1155
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1156,
                        "end": 1157
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1154,
                      "end": 1157
                    },
                    "right": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 1160,
                      "end": 1163
                    },
                    "start": 1154,
                    "end": 1163
                  },
                  "directive": null,
                  "start": 1154,
                  "end": 1164
                }
              ],
              "start": 1144,
              "end": 1170
            },
            "start": 1098,
            "end": 1170
          }
        ],
        "start": 1092,
        "end": 1172
      },
      "expression": false,
      "start": 1037,
      "end": 1172
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassWithUnionProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 1180,
        "end": 1198
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 1201,
              "end": 1205
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1207,
                      "end": 1208
                    },
                    "typeArguments": null,
                    "start": 1207,
                    "end": 1208
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1211,
                      "end": 1212
                    },
                    "typeArguments": null,
                    "start": 1211,
                    "end": 1212
                  }
                ],
                "start": 1207,
                "end": 1212
              },
              "start": 1205,
              "end": 1212
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
            "start": 1201,
            "end": 1212
          }
        ],
        "start": 1199,
        "end": 1214
      },
      "abstract": false,
      "declare": false,
      "start": 1174,
      "end": 1214
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "negativePropTest",
        "optional": false,
        "typeAnnotation": null,
        "start": 1225,
        "end": 1241
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ClassWithUnionProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 1245,
                "end": 1263
              },
              "typeArguments": null,
              "start": 1245,
              "end": 1263
            },
            "start": 1243,
            "end": 1263
          },
          "start": 1242,
          "end": 1263
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 1275,
                "end": 1278
              },
              "operator": "in",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1282,
                  "end": 1283
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1284,
                  "end": 1288
                },
                "optional": false,
                "computed": false,
                "start": 1282,
                "end": 1288
              },
              "start": 1275,
              "end": 1288
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1307,
                            "end": 1313
                          },
                          "start": 1305,
                          "end": 1313
                        },
                        "start": 1304,
                        "end": 1313
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1316,
                            "end": 1317
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1318,
                            "end": 1322
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1316,
                          "end": 1322
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1323,
                          "end": 1324
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1316,
                        "end": 1324
                      },
                      "definite": false,
                      "start": 1304,
                      "end": 1324
                    }
                  ],
                  "declare": false,
                  "start": 1300,
                  "end": 1325
                }
              ],
              "start": 1290,
              "end": 1331
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
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
                            "type": "TSStringKeyword",
                            "start": 1354,
                            "end": 1360
                          },
                          "start": 1352,
                          "end": 1360
                        },
                        "start": 1351,
                        "end": 1360
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1363,
                            "end": 1364
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1365,
                            "end": 1369
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1363,
                          "end": 1369
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1370,
                          "end": 1371
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1363,
                        "end": 1371
                      },
                      "definite": false,
                      "start": 1351,
                      "end": 1371
                    }
                  ],
                  "declare": false,
                  "start": 1347,
                  "end": 1372
                }
              ],
              "start": 1337,
              "end": 1378
            },
            "start": 1271,
            "end": 1378
          }
        ],
        "start": 1265,
        "end": 1380
      },
      "expression": false,
      "start": 1216,
      "end": 1380
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NegativeClassTest",
        "optional": false,
        "typeAnnotation": null,
        "start": 1388,
        "end": 1405
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 1422,
              "end": 1426
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1428,
                      "end": 1429
                    },
                    "typeArguments": null,
                    "start": 1428,
                    "end": 1429
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1432,
                      "end": 1433
                    },
                    "typeArguments": null,
                    "start": 1432,
                    "end": 1433
                  }
                ],
                "start": 1428,
                "end": 1433
              },
              "start": 1426,
              "end": 1433
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 1412,
            "end": 1434
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "inThis",
              "optional": false,
              "typeAnnotation": null,
              "start": 1439,
              "end": 1445
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
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 1462,
                        "end": 1465
                      },
                      "operator": "in",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1469,
                          "end": 1473
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1474,
                          "end": 1478
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1469,
                        "end": 1478
                      },
                      "start": 1462,
                      "end": 1478
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "kind": "let",
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
                                    "type": "TSNumberKeyword",
                                    "start": 1501,
                                    "end": 1507
                                  },
                                  "start": 1499,
                                  "end": 1507
                                },
                                "start": 1498,
                                "end": 1507
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1510,
                                    "end": 1514
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "prop",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1515,
                                    "end": 1519
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1510,
                                  "end": 1519
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1520,
                                  "end": 1521
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1510,
                                "end": 1521
                              },
                              "definite": false,
                              "start": 1498,
                              "end": 1521
                            }
                          ],
                          "declare": false,
                          "start": 1494,
                          "end": 1522
                        }
                      ],
                      "start": 1480,
                      "end": 1532
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "kind": "let",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1559,
                                    "end": 1565
                                  },
                                  "start": 1557,
                                  "end": 1565
                                },
                                "start": 1556,
                                "end": 1565
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1568,
                                    "end": 1572
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "prop",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1573,
                                    "end": 1577
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1568,
                                  "end": 1577
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1578,
                                  "end": 1579
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1568,
                                "end": 1579
                              },
                              "definite": false,
                              "start": 1556,
                              "end": 1579
                            }
                          ],
                          "declare": false,
                          "start": 1552,
                          "end": 1580
                        }
                      ],
                      "start": 1538,
                      "end": 1590
                    },
                    "start": 1458,
                    "end": 1590
                  }
                ],
                "start": 1448,
                "end": 1596
              },
              "expression": false,
              "start": 1445,
              "end": 1596
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1439,
            "end": 1596
          }
        ],
        "start": 1406,
        "end": 1598
      },
      "abstract": false,
      "declare": false,
      "start": 1382,
      "end": 1598
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnreachableCodeDetection",
        "optional": false,
        "typeAnnotation": null,
        "start": 1606,
        "end": 1630
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
              "start": 1637,
              "end": 1638
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1640,
                "end": 1646
              },
              "start": 1638,
              "end": 1646
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
            "start": 1637,
            "end": 1647
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "inThis",
              "optional": false,
              "typeAnnotation": null,
              "start": 1652,
              "end": 1658
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
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 1675,
                        "end": 1678
                      },
                      "operator": "in",
                      "right": {
                        "type": "ThisExpression",
                        "start": 1682,
                        "end": 1686
                      },
                      "start": 1675,
                      "end": 1686
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1688,
                      "end": 1699
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "kind": "let",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1723,
                                "end": 1724
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1727,
                                  "end": 1731
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1732,
                                  "end": 1733
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1727,
                                "end": 1733
                              },
                              "definite": false,
                              "start": 1723,
                              "end": 1733
                            }
                          ],
                          "declare": false,
                          "start": 1719,
                          "end": 1734
                        }
                      ],
                      "start": 1705,
                      "end": 1744
                    },
                    "start": 1671,
                    "end": 1744
                  }
                ],
                "start": 1661,
                "end": 1750
              },
              "expression": false,
              "start": 1658,
              "end": 1750
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1652,
            "end": 1750
          }
        ],
        "start": 1631,
        "end": 1752
      },
      "abstract": false,
      "declare": false,
      "start": 1600,
      "end": 1752
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "positiveIntersectionTest",
        "optional": false,
        "typeAnnotation": null,
        "start": 1763,
        "end": 1787
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1793,
                        "end": 1794
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1796,
                          "end": 1802
                        },
                        "start": 1794,
                        "end": 1802
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1793,
                      "end": 1802
                    }
                  ],
                  "start": 1791,
                  "end": 1804
                },
                {
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1809,
                        "end": 1810
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1812,
                          "end": 1818
                        },
                        "start": 1810,
                        "end": 1818
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1809,
                      "end": 1818
                    }
                  ],
                  "start": 1807,
                  "end": 1820
                }
              ],
              "start": 1791,
              "end": 1820
            },
            "start": 1789,
            "end": 1820
          },
          "start": 1788,
          "end": 1820
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 1832,
                "end": 1835
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1839,
                "end": 1840
              },
              "start": 1832,
              "end": 1840
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1859,
                            "end": 1865
                          },
                          "start": 1857,
                          "end": 1865
                        },
                        "start": 1856,
                        "end": 1865
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1868,
                          "end": 1869
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1870,
                          "end": 1871
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1868,
                        "end": 1871
                      },
                      "definite": false,
                      "start": 1856,
                      "end": 1871
                    }
                  ],
                  "declare": false,
                  "start": 1852,
                  "end": 1872
                }
              ],
              "start": 1842,
              "end": 1878
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
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
                            "type": "TSNeverKeyword",
                            "start": 1901,
                            "end": 1906
                          },
                          "start": 1899,
                          "end": 1906
                        },
                        "start": 1898,
                        "end": 1906
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1909,
                        "end": 1910
                      },
                      "definite": false,
                      "start": 1898,
                      "end": 1910
                    }
                  ],
                  "declare": false,
                  "start": 1894,
                  "end": 1911
                }
              ],
              "start": 1884,
              "end": 1917
            },
            "start": 1828,
            "end": 1917
          }
        ],
        "start": 1822,
        "end": 1919
      },
      "expression": false,
      "start": 1754,
      "end": 1919
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "error",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1963,
                  "end": 1968
                },
                "typeArguments": null,
                "start": 1963,
                "end": 1968
              },
              "start": 1961,
              "end": 1968
            },
            "start": 1956,
            "end": 1968
          },
          "init": null,
          "definite": false,
          "start": 1956,
          "end": 1968
        }
      ],
      "declare": true,
      "start": 1942,
      "end": 1969
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": "extra",
          "raw": "'extra'",
          "start": 1974,
          "end": 1981
        },
        "operator": "in",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "error",
          "optional": false,
          "typeAnnotation": null,
          "start": 1985,
          "end": 1990
        },
        "start": 1974,
        "end": 1990
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "error",
              "optional": false,
              "typeAnnotation": null,
              "start": 1998,
              "end": 2003
            },
            "directive": null,
            "start": 1998,
            "end": 2003
          }
        ],
        "start": 1992,
        "end": 2020
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "error",
              "optional": false,
              "typeAnnotation": null,
              "start": 2032,
              "end": 2037
            },
            "directive": null,
            "start": 2032,
            "end": 2037
          }
        ],
        "start": 2026,
        "end": 2048
      },
      "start": 1970,
      "end": 2048
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "narrowsToNever",
        "optional": false,
        "typeAnnotation": null,
        "start": 2059,
        "end": 2073
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
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
                        "name": "l",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2079,
                        "end": 2080
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2082,
                          "end": 2088
                        },
                        "start": 2080,
                        "end": 2088
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2079,
                      "end": 2088
                    }
                  ],
                  "start": 2077,
                  "end": 2090
                },
                {
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
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2095,
                        "end": 2096
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2098,
                          "end": 2104
                        },
                        "start": 2096,
                        "end": 2104
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2095,
                      "end": 2104
                    }
                  ],
                  "start": 2093,
                  "end": 2106
                }
              ],
              "start": 2077,
              "end": 2106
            },
            "start": 2075,
            "end": 2106
          },
          "start": 2074,
          "end": 2106
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2121,
                      "end": 2127
                    },
                    "start": 2119,
                    "end": 2127
                  },
                  "start": 2118,
                  "end": 2127
                },
                "init": null,
                "definite": false,
                "start": 2118,
                "end": 2127
              }
            ],
            "declare": false,
            "start": 2114,
            "end": 2128
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "l",
                "raw": "\"l\"",
                "start": 2137,
                "end": 2140
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2144,
                "end": 2145
              },
              "start": 2137,
              "end": 2145
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2157,
                      "end": 2158
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2161,
                        "end": 2162
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "l",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2163,
                        "end": 2164
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2161,
                      "end": 2164
                    },
                    "start": 2157,
                    "end": 2164
                  },
                  "directive": null,
                  "start": 2157,
                  "end": 2165
                }
              ],
              "start": 2147,
              "end": 2171
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "r",
                  "raw": "\"r\"",
                  "start": 2185,
                  "end": 2188
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2192,
                  "end": 2193
                },
                "start": 2185,
                "end": 2193
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2205,
                        "end": 2206
                      },
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2209,
                          "end": 2210
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "r",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2211,
                          "end": 2212
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2209,
                        "end": 2212
                      },
                      "start": 2205,
                      "end": 2212
                    },
                    "directive": null,
                    "start": 2205,
                    "end": 2213
                  }
                ],
                "start": 2195,
                "end": 2219
              },
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2239,
                        "end": 2240
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2243,
                        "end": 2244
                      },
                      "start": 2239,
                      "end": 2244
                    },
                    "directive": null,
                    "start": 2239,
                    "end": 2244
                  }
                ],
                "start": 2229,
                "end": 2250
              },
              "start": 2181,
              "end": 2250
            },
            "start": 2133,
            "end": 2250
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 2262,
              "end": 2263
            },
            "start": 2255,
            "end": 2264
          }
        ],
        "start": 2108,
        "end": 2266
      },
      "expression": false,
      "start": 2050,
      "end": 2266
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AOrB",
        "optional": false,
        "typeAnnotation": null,
        "start": 2273,
        "end": 2277
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
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
                  "name": "aProp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2282,
                  "end": 2287
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2289,
                    "end": 2295
                  },
                  "start": 2287,
                  "end": 2295
                },
                "accessibility": null,
                "static": false,
                "start": 2282,
                "end": 2295
              }
            ],
            "start": 2280,
            "end": 2297
          },
          {
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
                  "name": "bProp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2302,
                  "end": 2307
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2309,
                    "end": 2315
                  },
                  "start": 2307,
                  "end": 2315
                },
                "accessibility": null,
                "static": false,
                "start": 2302,
                "end": 2315
              }
            ],
            "start": 2300,
            "end": 2317
          }
        ],
        "start": 2280,
        "end": 2317
      },
      "declare": false,
      "start": 2268,
      "end": 2318
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isAOrB",
        "optional": false,
        "typeAnnotation": null,
        "start": 2336,
        "end": 2342
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 2346,
              "end": 2353
            },
            "start": 2344,
            "end": 2353
          },
          "start": 2343,
          "end": 2353
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 2356,
            "end": 2357
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AOrB",
                "optional": false,
                "typeAnnotation": null,
                "start": 2361,
                "end": 2365
              },
              "typeArguments": null,
              "start": 2361,
              "end": 2365
            },
            "start": 2361,
            "end": 2365
          },
          "start": 2356,
          "end": 2365
        },
        "start": 2354,
        "end": 2365
      },
      "body": null,
      "expression": false,
      "start": 2319,
      "end": 2366
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
                "type": "TSUnknownKeyword",
                "start": 2383,
                "end": 2390
              },
              "start": 2381,
              "end": 2390
            },
            "start": 2380,
            "end": 2390
          },
          "init": null,
          "definite": false,
          "start": 2380,
          "end": 2390
        }
      ],
      "declare": true,
      "start": 2368,
      "end": 2391
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isAOrB",
          "optional": false,
          "typeAnnotation": null,
          "start": 2396,
          "end": 2402
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 2403,
            "end": 2404
          }
        ],
        "optional": false,
        "start": 2396,
        "end": 2405
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "aProp",
                "raw": "\"aProp\"",
                "start": 2417,
                "end": 2424
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2428,
                "end": 2429
              },
              "start": 2417,
              "end": 2429
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2441,
                      "end": 2442
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "aProp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2443,
                      "end": 2448
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2441,
                    "end": 2448
                  },
                  "directive": null,
                  "start": 2441,
                  "end": 2449
                }
              ],
              "start": 2431,
              "end": 2455
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "bProp",
                  "raw": "\"bProp\"",
                  "start": 2469,
                  "end": 2476
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2480,
                  "end": 2481
                },
                "start": 2469,
                "end": 2481
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2493,
                        "end": 2494
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2495,
                        "end": 2500
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2493,
                      "end": 2500
                    },
                    "directive": null,
                    "start": 2493,
                    "end": 2501
                  }
                ],
                "start": 2483,
                "end": 2507
              },
              "alternate": {
                "type": "IfStatement",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "cProp",
                    "raw": "\"cProp\"",
                    "start": 2582,
                    "end": 2589
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2593,
                    "end": 2594
                  },
                  "start": 2582,
                  "end": 2594
                },
                "consequent": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_never",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNeverKeyword",
                                "start": 2620,
                                "end": 2625
                              },
                              "start": 2618,
                              "end": 2625
                            },
                            "start": 2612,
                            "end": 2625
                          },
                          "init": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2628,
                            "end": 2629
                          },
                          "definite": false,
                          "start": 2612,
                          "end": 2629
                        }
                      ],
                      "declare": false,
                      "start": 2606,
                      "end": 2630
                    }
                  ],
                  "start": 2596,
                  "end": 2636
                },
                "alternate": null,
                "start": 2578,
                "end": 2636
              },
              "start": 2465,
              "end": 2636
            },
            "start": 2413,
            "end": 2636
          }
        ],
        "start": 2407,
        "end": 2638
      },
      "alternate": null,
      "start": 2392,
      "end": 2638
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "negativeIntersectionTest",
        "optional": false,
        "typeAnnotation": null,
        "start": 2649,
        "end": 2673
      },
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
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "ontouchstart",
                "raw": "\"ontouchstart\"",
                "start": 2686,
                "end": 2700
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "window",
                "optional": false,
                "typeAnnotation": null,
                "start": 2704,
                "end": 2710
              },
              "start": 2686,
              "end": 2710
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "window",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2722,
                      "end": 2728
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ontouchstart",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2729,
                      "end": 2741
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2722,
                    "end": 2741
                  },
                  "directive": null,
                  "start": 2722,
                  "end": 2741
                }
              ],
              "start": 2712,
              "end": 2747
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "window",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2763,
                      "end": 2769
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ontouchstart",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2770,
                      "end": 2782
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2763,
                    "end": 2782
                  },
                  "directive": null,
                  "start": 2763,
                  "end": 2782
                }
              ],
              "start": 2753,
              "end": 2788
            },
            "start": 2682,
            "end": 2788
          }
        ],
        "start": 2676,
        "end": 2790
      },
      "expression": false,
      "start": 2640,
      "end": 2790
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2801,
        "end": 2803
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 2807,
              "end": 2814
            },
            "start": 2805,
            "end": 2814
          },
          "start": 2804,
          "end": 2814
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 2826,
                "end": 2829
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2833,
                "end": 2834
              },
              "start": 2826,
              "end": 2834
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2846,
                      "end": 2847
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2848,
                      "end": 2849
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2846,
                    "end": 2849
                  },
                  "directive": null,
                  "start": 2846,
                  "end": 2850
                }
              ],
              "start": 2836,
              "end": 2856
            },
            "alternate": null,
            "start": 2822,
            "end": 2856
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2865,
                "end": 2866
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 2870,
                  "end": 2873
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2877,
                  "end": 2878
                },
                "start": 2870,
                "end": 2878
              },
              "start": 2865,
              "end": 2878
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2890,
                      "end": 2891
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2892,
                      "end": 2893
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2890,
                    "end": 2893
                  },
                  "directive": null,
                  "start": 2890,
                  "end": 2894
                }
              ],
              "start": 2880,
              "end": 2900
            },
            "alternate": null,
            "start": 2861,
            "end": 2900
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2909,
                  "end": 2910
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2921,
                      "end": 2922
                    },
                    "prefix": true,
                    "start": 2914,
                    "end": 2922
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "object",
                    "raw": "\"object\"",
                    "start": 2927,
                    "end": 2935
                  },
                  "start": 2914,
                  "end": 2935
                },
                "start": 2909,
                "end": 2935
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 2939,
                  "end": 2942
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2946,
                  "end": 2947
                },
                "start": 2939,
                "end": 2947
              },
              "start": 2909,
              "end": 2947
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2959,
                      "end": 2960
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2961,
                      "end": 2962
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2959,
                    "end": 2962
                  },
                  "directive": null,
                  "start": 2959,
                  "end": 2963
                }
              ],
              "start": 2949,
              "end": 2969
            },
            "alternate": null,
            "start": 2905,
            "end": 2969
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2978,
                      "end": 2979
                    },
                    "operator": "&&",
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "UnaryExpression",
                        "operator": "typeof",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2990,
                          "end": 2991
                        },
                        "prefix": true,
                        "start": 2983,
                        "end": 2991
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": "object",
                        "raw": "\"object\"",
                        "start": 2996,
                        "end": 3004
                      },
                      "start": 2983,
                      "end": 3004
                    },
                    "start": 2978,
                    "end": 3004
                  },
                  "operator": "&&",
                  "right": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 3008,
                      "end": 3011
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3015,
                      "end": 3016
                    },
                    "start": 3008,
                    "end": 3016
                  },
                  "start": 2978,
                  "end": 3016
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 3020,
                    "end": 3023
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3027,
                    "end": 3028
                  },
                  "start": 3020,
                  "end": 3028
                },
                "start": 2978,
                "end": 3028
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "c",
                  "raw": "\"c\"",
                  "start": 3032,
                  "end": 3035
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3039,
                  "end": 3040
                },
                "start": 3032,
                "end": 3040
              },
              "start": 2978,
              "end": 3040
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3052,
                      "end": 3053
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3054,
                      "end": 3055
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3052,
                    "end": 3055
                  },
                  "directive": null,
                  "start": 3052,
                  "end": 3056
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3065,
                      "end": 3066
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3067,
                      "end": 3068
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3065,
                    "end": 3068
                  },
                  "directive": null,
                  "start": 3065,
                  "end": 3069
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3078,
                      "end": 3079
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3080,
                      "end": 3081
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3078,
                    "end": 3081
                  },
                  "directive": null,
                  "start": 3078,
                  "end": 3082
                }
              ],
              "start": 3042,
              "end": 3088
            },
            "alternate": null,
            "start": 2974,
            "end": 3088
          }
        ],
        "start": 2816,
        "end": 3090
      },
      "expression": false,
      "start": 2792,
      "end": 3090
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3101,
        "end": 3103
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 3107,
              "end": 3113
            },
            "start": 3105,
            "end": 3113
          },
          "start": 3104,
          "end": 3113
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 3125,
                "end": 3128
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3132,
                "end": 3133
              },
              "start": 3125,
              "end": 3133
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3145,
                      "end": 3146
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3147,
                      "end": 3148
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3145,
                    "end": 3148
                  },
                  "directive": null,
                  "start": 3145,
                  "end": 3149
                }
              ],
              "start": 3135,
              "end": 3155
            },
            "alternate": null,
            "start": 3121,
            "end": 3155
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 3164,
                    "end": 3167
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3171,
                    "end": 3172
                  },
                  "start": 3164,
                  "end": 3172
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 3176,
                    "end": 3179
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3183,
                    "end": 3184
                  },
                  "start": 3176,
                  "end": 3184
                },
                "start": 3164,
                "end": 3184
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "c",
                  "raw": "\"c\"",
                  "start": 3188,
                  "end": 3191
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3195,
                  "end": 3196
                },
                "start": 3188,
                "end": 3196
              },
              "start": 3164,
              "end": 3196
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3208,
                      "end": 3209
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3210,
                      "end": 3211
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3208,
                    "end": 3211
                  },
                  "directive": null,
                  "start": 3208,
                  "end": 3212
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3221,
                      "end": 3222
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3223,
                      "end": 3224
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3221,
                    "end": 3224
                  },
                  "directive": null,
                  "start": 3221,
                  "end": 3225
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3234,
                      "end": 3235
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3236,
                      "end": 3237
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3234,
                    "end": 3237
                  },
                  "directive": null,
                  "start": 3234,
                  "end": 3238
                }
              ],
              "start": 3198,
              "end": 3244
            },
            "alternate": null,
            "start": 3160,
            "end": 3244
          }
        ],
        "start": 3115,
        "end": 3246
      },
      "expression": false,
      "start": 3092,
      "end": 3246
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 3257,
        "end": 3259
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3260,
              "end": 3261
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3260,
            "end": 3261
          }
        ],
        "start": 3259,
        "end": 3262
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3266,
                "end": 3267
              },
              "typeArguments": null,
              "start": 3266,
              "end": 3267
            },
            "start": 3264,
            "end": 3267
          },
          "start": 3263,
          "end": 3267
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 3279,
                "end": 3282
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3286,
                "end": 3287
              },
              "start": 3279,
              "end": 3287
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3299,
                      "end": 3300
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3301,
                      "end": 3302
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3299,
                    "end": 3302
                  },
                  "directive": null,
                  "start": 3299,
                  "end": 3303
                }
              ],
              "start": 3289,
              "end": 3309
            },
            "alternate": null,
            "start": 3275,
            "end": 3309
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3318,
                "end": 3319
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 3323,
                  "end": 3326
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3330,
                  "end": 3331
                },
                "start": 3323,
                "end": 3331
              },
              "start": 3318,
              "end": 3331
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3343,
                      "end": 3344
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3345,
                      "end": 3346
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3343,
                    "end": 3346
                  },
                  "directive": null,
                  "start": 3343,
                  "end": 3347
                }
              ],
              "start": 3333,
              "end": 3353
            },
            "alternate": null,
            "start": 3314,
            "end": 3353
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3362,
                  "end": 3363
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3374,
                      "end": 3375
                    },
                    "prefix": true,
                    "start": 3367,
                    "end": 3375
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "object",
                    "raw": "\"object\"",
                    "start": 3380,
                    "end": 3388
                  },
                  "start": 3367,
                  "end": 3388
                },
                "start": 3362,
                "end": 3388
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 3392,
                  "end": 3395
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3399,
                  "end": 3400
                },
                "start": 3392,
                "end": 3400
              },
              "start": 3362,
              "end": 3400
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3412,
                      "end": 3413
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3414,
                      "end": 3415
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3412,
                    "end": 3415
                  },
                  "directive": null,
                  "start": 3412,
                  "end": 3416
                }
              ],
              "start": 3402,
              "end": 3422
            },
            "alternate": null,
            "start": 3358,
            "end": 3422
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3431,
                      "end": 3432
                    },
                    "operator": "&&",
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "UnaryExpression",
                        "operator": "typeof",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3443,
                          "end": 3444
                        },
                        "prefix": true,
                        "start": 3436,
                        "end": 3444
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": "object",
                        "raw": "\"object\"",
                        "start": 3449,
                        "end": 3457
                      },
                      "start": 3436,
                      "end": 3457
                    },
                    "start": 3431,
                    "end": 3457
                  },
                  "operator": "&&",
                  "right": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 3461,
                      "end": 3464
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3468,
                      "end": 3469
                    },
                    "start": 3461,
                    "end": 3469
                  },
                  "start": 3431,
                  "end": 3469
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 3473,
                    "end": 3476
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3480,
                    "end": 3481
                  },
                  "start": 3473,
                  "end": 3481
                },
                "start": 3431,
                "end": 3481
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "c",
                  "raw": "\"c\"",
                  "start": 3485,
                  "end": 3488
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3492,
                  "end": 3493
                },
                "start": 3485,
                "end": 3493
              },
              "start": 3431,
              "end": 3493
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3505,
                      "end": 3506
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3507,
                      "end": 3508
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3505,
                    "end": 3508
                  },
                  "directive": null,
                  "start": 3505,
                  "end": 3509
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3518,
                      "end": 3519
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3520,
                      "end": 3521
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3518,
                    "end": 3521
                  },
                  "directive": null,
                  "start": 3518,
                  "end": 3522
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3531,
                      "end": 3532
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3533,
                      "end": 3534
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3531,
                    "end": 3534
                  },
                  "directive": null,
                  "start": 3531,
                  "end": 3535
                }
              ],
              "start": 3495,
              "end": 3541
            },
            "alternate": null,
            "start": 3427,
            "end": 3541
          }
        ],
        "start": 3269,
        "end": 3543
      },
      "expression": false,
      "start": 3248,
      "end": 3543
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 3554,
        "end": 3556
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3562,
                    "end": 3563
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3565,
                      "end": 3571
                    },
                    "start": 3563,
                    "end": 3571
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3562,
                  "end": 3571
                }
              ],
              "start": 3560,
              "end": 3573
            },
            "start": 3558,
            "end": 3573
          },
          "start": 3557,
          "end": 3573
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 3585,
                "end": 3588
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3592,
                "end": 3593
              },
              "start": 3585,
              "end": 3593
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3605,
                      "end": 3606
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3607,
                      "end": 3608
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3605,
                    "end": 3608
                  },
                  "directive": null,
                  "start": 3605,
                  "end": 3609
                }
              ],
              "start": 3595,
              "end": 3615
            },
            "alternate": null,
            "start": 3581,
            "end": 3615
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 3624,
                    "end": 3627
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3631,
                    "end": 3632
                  },
                  "start": 3624,
                  "end": 3632
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 3636,
                    "end": 3639
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3643,
                    "end": 3644
                  },
                  "start": 3636,
                  "end": 3644
                },
                "start": 3624,
                "end": 3644
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "c",
                  "raw": "\"c\"",
                  "start": 3648,
                  "end": 3651
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3655,
                  "end": 3656
                },
                "start": 3648,
                "end": 3656
              },
              "start": 3624,
              "end": 3656
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3668,
                      "end": 3669
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3670,
                      "end": 3671
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3668,
                    "end": 3671
                  },
                  "directive": null,
                  "start": 3668,
                  "end": 3672
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3681,
                      "end": 3682
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3683,
                      "end": 3684
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3681,
                    "end": 3684
                  },
                  "directive": null,
                  "start": 3681,
                  "end": 3685
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3694,
                      "end": 3695
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3696,
                      "end": 3697
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3694,
                    "end": 3697
                  },
                  "directive": null,
                  "start": 3694,
                  "end": 3698
                }
              ],
              "start": 3658,
              "end": 3704
            },
            "alternate": null,
            "start": 3620,
            "end": 3704
          }
        ],
        "start": 3575,
        "end": 3706
      },
      "expression": false,
      "start": 3545,
      "end": 3706
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 3717,
        "end": 3719
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3725,
                        "end": 3726
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3728,
                          "end": 3734
                        },
                        "start": 3726,
                        "end": 3734
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3725,
                      "end": 3734
                    }
                  ],
                  "start": 3723,
                  "end": 3736
                },
                {
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3741,
                        "end": 3742
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3744,
                          "end": 3750
                        },
                        "start": 3742,
                        "end": 3750
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3741,
                      "end": 3750
                    }
                  ],
                  "start": 3739,
                  "end": 3752
                }
              ],
              "start": 3723,
              "end": 3752
            },
            "start": 3721,
            "end": 3752
          },
          "start": 3720,
          "end": 3752
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 3764,
                "end": 3767
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3771,
                "end": 3772
              },
              "start": 3764,
              "end": 3772
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3784,
                    "end": 3785
                  },
                  "directive": null,
                  "start": 3784,
                  "end": 3786
                }
              ],
              "start": 3774,
              "end": 3810
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 3824,
                  "end": 3827
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3831,
                  "end": 3832
                },
                "start": 3824,
                "end": 3832
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3844,
                      "end": 3845
                    },
                    "directive": null,
                    "start": 3844,
                    "end": 3846
                  }
                ],
                "start": 3834,
                "end": 3870
              },
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3890,
                      "end": 3891
                    },
                    "directive": null,
                    "start": 3890,
                    "end": 3892
                  }
                ],
                "start": 3880,
                "end": 3908
              },
              "start": 3820,
              "end": 3908
            },
            "start": 3760,
            "end": 3908
          }
        ],
        "start": 3754,
        "end": 3910
      },
      "expression": false,
      "start": 3708,
      "end": 3910
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 3921,
        "end": 3923
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3929,
                        "end": 3930
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3932,
                          "end": 3938
                        },
                        "start": 3930,
                        "end": 3938
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3929,
                      "end": 3938
                    }
                  ],
                  "start": 3927,
                  "end": 3940
                },
                {
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3945,
                        "end": 3946
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3948,
                          "end": 3954
                        },
                        "start": 3946,
                        "end": 3954
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3945,
                      "end": 3954
                    }
                  ],
                  "start": 3943,
                  "end": 3956
                }
              ],
              "start": 3927,
              "end": 3956
            },
            "start": 3925,
            "end": 3956
          },
          "start": 3924,
          "end": 3956
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 3968,
                "end": 3971
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3975,
                "end": 3976
              },
              "start": 3968,
              "end": 3976
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3988,
                    "end": 3989
                  },
                  "directive": null,
                  "start": 3988,
                  "end": 3990
                }
              ],
              "start": 3978,
              "end": 4014
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 4028,
                  "end": 4031
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4035,
                  "end": 4036
                },
                "start": 4028,
                "end": 4036
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4048,
                      "end": 4049
                    },
                    "directive": null,
                    "start": 4048,
                    "end": 4050
                  }
                ],
                "start": 4038,
                "end": 4097
              },
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4117,
                      "end": 4118
                    },
                    "directive": null,
                    "start": 4117,
                    "end": 4119
                  }
                ],
                "start": 4107,
                "end": 4143
              },
              "start": 4024,
              "end": 4143
            },
            "start": 3964,
            "end": 4143
          }
        ],
        "start": 3958,
        "end": 4145
      },
      "expression": false,
      "start": 3912,
      "end": 4145
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 4221,
        "end": 4223
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4229,
                    "end": 4230
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4232,
                      "end": 4238
                    },
                    "start": 4230,
                    "end": 4238
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4229,
                  "end": 4239
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4240,
                    "end": 4241
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4243,
                      "end": 4249
                    },
                    "start": 4241,
                    "end": 4249
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4240,
                  "end": 4249
                }
              ],
              "start": 4227,
              "end": 4251
            },
            "start": 4225,
            "end": 4251
          },
          "start": 4224,
          "end": 4251
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4258,
                        "end": 4259
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 4261,
                          "end": 4267
                        },
                        "start": 4259,
                        "end": 4267
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 4258,
                      "end": 4267
                    }
                  ],
                  "start": 4256,
                  "end": 4269
                },
                {
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4274,
                        "end": 4275
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 4277,
                          "end": 4283
                        },
                        "start": 4275,
                        "end": 4283
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 4274,
                      "end": 4283
                    }
                  ],
                  "start": 4272,
                  "end": 4285
                }
              ],
              "start": 4256,
              "end": 4285
            },
            "start": 4254,
            "end": 4285
          },
          "start": 4253,
          "end": 4285
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 4297,
                "end": 4300
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 4304,
                "end": 4305
              },
              "start": 4297,
              "end": 4305
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4317,
                    "end": 4318
                  },
                  "directive": null,
                  "start": 4317,
                  "end": 4319
                }
              ],
              "start": 4307,
              "end": 4325
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4345,
                    "end": 4346
                  },
                  "directive": null,
                  "start": 4345,
                  "end": 4347
                }
              ],
              "start": 4335,
              "end": 4363
            },
            "start": 4293,
            "end": 4363
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 4372,
                "end": 4375
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 4379,
                "end": 4380
              },
              "start": 4372,
              "end": 4380
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4392,
                    "end": 4393
                  },
                  "directive": null,
                  "start": 4392,
                  "end": 4394
                }
              ],
              "start": 4382,
              "end": 4400
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4420,
                    "end": 4421
                  },
                  "directive": null,
                  "start": 4420,
                  "end": 4422
                }
              ],
              "start": 4410,
              "end": 4438
            },
            "start": 4368,
            "end": 4438
          }
        ],
        "start": 4287,
        "end": 4440
      },
      "expression": false,
      "start": 4212,
      "end": 4440
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "sym",
            "optional": false,
            "typeAnnotation": null,
            "start": 4448,
            "end": 4451
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 4454,
              "end": 4460
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 4454,
            "end": 4462
          },
          "definite": false,
          "start": 4448,
          "end": 4462
        }
      ],
      "declare": false,
      "start": 4442,
      "end": 4463
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null,
        "start": 4474,
        "end": 4476
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 4480,
              "end": 4486
            },
            "start": 4478,
            "end": 4486
          },
          "start": 4477,
          "end": 4486
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 4498,
                    "end": 4501
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4505,
                    "end": 4506
                  },
                  "start": 4498,
                  "end": 4506
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 4510,
                    "end": 4511
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4515,
                    "end": 4516
                  },
                  "start": 4510,
                  "end": 4516
                },
                "start": 4498,
                "end": 4516
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sym",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4520,
                  "end": 4523
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4527,
                  "end": 4528
                },
                "start": 4520,
                "end": 4528
              },
              "start": 4498,
              "end": 4528
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4540,
                      "end": 4541
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4542,
                      "end": 4543
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4540,
                    "end": 4543
                  },
                  "directive": null,
                  "start": 4540,
                  "end": 4544
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4553,
                      "end": 4554
                    },
                    "property": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 4555,
                      "end": 4558
                    },
                    "optional": false,
                    "computed": true,
                    "start": 4553,
                    "end": 4559
                  },
                  "directive": null,
                  "start": 4553,
                  "end": 4560
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4569,
                      "end": 4570
                    },
                    "property": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 4571,
                      "end": 4572
                    },
                    "optional": false,
                    "computed": true,
                    "start": 4569,
                    "end": 4573
                  },
                  "directive": null,
                  "start": 4569,
                  "end": 4574
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4583,
                      "end": 4584
                    },
                    "property": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 4585,
                      "end": 4588
                    },
                    "optional": false,
                    "computed": true,
                    "start": 4583,
                    "end": 4589
                  },
                  "directive": null,
                  "start": 4583,
                  "end": 4590
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4599,
                      "end": 4600
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "sym",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4601,
                      "end": 4604
                    },
                    "optional": false,
                    "computed": true,
                    "start": 4599,
                    "end": 4605
                  },
                  "directive": null,
                  "start": 4599,
                  "end": 4606
                }
              ],
              "start": 4530,
              "end": 4612
            },
            "alternate": null,
            "start": 4494,
            "end": 4612
          }
        ],
        "start": 4488,
        "end": 4614
      },
      "expression": false,
      "start": 4465,
      "end": 4614
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f9",
        "optional": false,
        "typeAnnotation": null,
        "start": 4625,
        "end": 4627
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 4631,
              "end": 4637
            },
            "start": 4629,
            "end": 4637
          },
          "start": 4628,
          "end": 4637
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 4649,
                    "end": 4652
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4656,
                    "end": 4657
                  },
                  "start": 4649,
                  "end": 4657
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "1",
                    "raw": "\"1\"",
                    "start": 4661,
                    "end": 4664
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4668,
                    "end": 4669
                  },
                  "start": 4661,
                  "end": 4669
                },
                "start": 4649,
                "end": 4669
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sym",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4673,
                  "end": 4676
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4680,
                  "end": 4681
                },
                "start": 4673,
                "end": 4681
              },
              "start": 4649,
              "end": 4681
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4693,
                      "end": 4694
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4695,
                      "end": 4696
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4693,
                    "end": 4696
                  },
                  "directive": null,
                  "start": 4693,
                  "end": 4697
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4706,
                      "end": 4707
                    },
                    "property": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 4708,
                      "end": 4711
                    },
                    "optional": false,
                    "computed": true,
                    "start": 4706,
                    "end": 4712
                  },
                  "directive": null,
                  "start": 4706,
                  "end": 4713
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4722,
                      "end": 4723
                    },
                    "property": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 4724,
                      "end": 4725
                    },
                    "optional": false,
                    "computed": true,
                    "start": 4722,
                    "end": 4726
                  },
                  "directive": null,
                  "start": 4722,
                  "end": 4727
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4736,
                      "end": 4737
                    },
                    "property": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 4738,
                      "end": 4741
                    },
                    "optional": false,
                    "computed": true,
                    "start": 4736,
                    "end": 4742
                  },
                  "directive": null,
                  "start": 4736,
                  "end": 4743
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4752,
                      "end": 4753
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "sym",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4754,
                      "end": 4757
                    },
                    "optional": false,
                    "computed": true,
                    "start": 4752,
                    "end": 4758
                  },
                  "directive": null,
                  "start": 4752,
                  "end": 4759
                }
              ],
              "start": 4683,
              "end": 4765
            },
            "alternate": null,
            "start": 4645,
            "end": 4765
          }
        ],
        "start": 4639,
        "end": 4767
      },
      "expression": false,
      "start": 4616,
      "end": 4767
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 4778,
        "end": 4781
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4787,
                    "end": 4788
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 4790,
                      "end": 4797
                    },
                    "start": 4788,
                    "end": 4797
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4787,
                  "end": 4797
                }
              ],
              "start": 4785,
              "end": 4799
            },
            "start": 4783,
            "end": 4799
          },
          "start": 4782,
          "end": 4799
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 4811,
                "end": 4814
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 4818,
                "end": 4819
              },
              "start": 4811,
              "end": 4819
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4831,
                    "end": 4832
                  },
                  "directive": null,
                  "start": 4831,
                  "end": 4833
                }
              ],
              "start": 4821,
              "end": 4839
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4859,
                    "end": 4860
                  },
                  "directive": null,
                  "start": 4859,
                  "end": 4861
                }
              ],
              "start": 4849,
              "end": 4867
            },
            "start": 4807,
            "end": 4867
          }
        ],
        "start": 4801,
        "end": 4869
      },
      "expression": false,
      "start": 4769,
      "end": 4869
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 4880,
        "end": 4883
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4889,
                    "end": 4890
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 4892,
                      "end": 4895
                    },
                    "start": 4890,
                    "end": 4895
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4889,
                  "end": 4895
                }
              ],
              "start": 4887,
              "end": 4897
            },
            "start": 4885,
            "end": 4897
          },
          "start": 4884,
          "end": 4897
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 4909,
                "end": 4912
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 4916,
                "end": 4917
              },
              "start": 4909,
              "end": 4917
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4929,
                    "end": 4930
                  },
                  "directive": null,
                  "start": 4929,
                  "end": 4931
                }
              ],
              "start": 4919,
              "end": 4937
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4957,
                    "end": 4958
                  },
                  "directive": null,
                  "start": 4957,
                  "end": 4959
                }
              ],
              "start": 4947,
              "end": 4965
            },
            "start": 4905,
            "end": 4965
          }
        ],
        "start": 4899,
        "end": 4967
      },
      "expression": false,
      "start": 4871,
      "end": 4967
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 4978,
        "end": 4981
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4987,
                    "end": 4988
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4990,
                      "end": 4996
                    },
                    "start": 4988,
                    "end": 4996
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4987,
                  "end": 4996
                }
              ],
              "start": 4985,
              "end": 4998
            },
            "start": 4983,
            "end": 4998
          },
          "start": 4982,
          "end": 4998
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 5010,
                "end": 5013
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 5017,
                "end": 5018
              },
              "start": 5010,
              "end": 5018
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5030,
                    "end": 5031
                  },
                  "directive": null,
                  "start": 5030,
                  "end": 5032
                }
              ],
              "start": 5020,
              "end": 5038
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5058,
                    "end": 5059
                  },
                  "directive": null,
                  "start": 5058,
                  "end": 5060
                }
              ],
              "start": 5048,
              "end": 5066
            },
            "start": 5006,
            "end": 5066
          }
        ],
        "start": 5000,
        "end": 5068
      },
      "expression": false,
      "start": 4969,
      "end": 5068
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null,
        "start": 5079,
        "end": 5082
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5088,
                    "end": 5089
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 5092,
                      "end": 5098
                    },
                    "start": 5090,
                    "end": 5098
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5088,
                  "end": 5098
                }
              ],
              "start": 5086,
              "end": 5100
            },
            "start": 5084,
            "end": 5100
          },
          "start": 5083,
          "end": 5100
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 5112,
                "end": 5115
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 5119,
                "end": 5120
              },
              "start": 5112,
              "end": 5120
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5132,
                    "end": 5133
                  },
                  "directive": null,
                  "start": 5132,
                  "end": 5134
                }
              ],
              "start": 5122,
              "end": 5140
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5160,
                    "end": 5161
                  },
                  "directive": null,
                  "start": 5160,
                  "end": 5162
                }
              ],
              "start": 5150,
              "end": 5168
            },
            "start": 5108,
            "end": 5168
          }
        ],
        "start": 5102,
        "end": 5170
      },
      "expression": false,
      "start": 5070,
      "end": 5170
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f14",
        "optional": false,
        "typeAnnotation": null,
        "start": 5181,
        "end": 5184
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5190,
                    "end": 5191
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 5193,
                          "end": 5199
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 5202,
                          "end": 5211
                        }
                      ],
                      "start": 5193,
                      "end": 5211
                    },
                    "start": 5191,
                    "end": 5211
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5190,
                  "end": 5211
                }
              ],
              "start": 5188,
              "end": 5213
            },
            "start": 5186,
            "end": 5213
          },
          "start": 5185,
          "end": 5213
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 5225,
                "end": 5228
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 5232,
                "end": 5233
              },
              "start": 5225,
              "end": 5233
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5245,
                    "end": 5246
                  },
                  "directive": null,
                  "start": 5245,
                  "end": 5247
                }
              ],
              "start": 5235,
              "end": 5253
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5273,
                    "end": 5274
                  },
                  "directive": null,
                  "start": 5273,
                  "end": 5275
                }
              ],
              "start": 5263,
              "end": 5281
            },
            "start": 5221,
            "end": 5281
          }
        ],
        "start": 5215,
        "end": 5283
      },
      "expression": false,
      "start": 5172,
      "end": 5283
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f15",
        "optional": false,
        "typeAnnotation": null,
        "start": 5294,
        "end": 5297
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5303,
                    "end": 5304
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 5307,
                          "end": 5313
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 5316,
                          "end": 5325
                        }
                      ],
                      "start": 5307,
                      "end": 5325
                    },
                    "start": 5305,
                    "end": 5325
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5303,
                  "end": 5325
                }
              ],
              "start": 5301,
              "end": 5327
            },
            "start": 5299,
            "end": 5327
          },
          "start": 5298,
          "end": 5327
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 5339,
                "end": 5342
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 5346,
                "end": 5347
              },
              "start": 5339,
              "end": 5347
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5359,
                    "end": 5360
                  },
                  "directive": null,
                  "start": 5359,
                  "end": 5361
                }
              ],
              "start": 5349,
              "end": 5367
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5387,
                    "end": 5388
                  },
                  "directive": null,
                  "start": 5387,
                  "end": 5389
                }
              ],
              "start": 5377,
              "end": 5395
            },
            "start": 5335,
            "end": 5395
          }
        ],
        "start": 5329,
        "end": 5397
      },
      "expression": false,
      "start": 5285,
      "end": 5397
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f16",
        "optional": false,
        "typeAnnotation": null,
        "start": 5408,
        "end": 5411
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "globalThis",
                "optional": false,
                "typeAnnotation": null,
                "start": 5422,
                "end": 5432
              },
              "typeArguments": null,
              "start": 5415,
              "end": 5432
            },
            "start": 5413,
            "end": 5432
          },
          "start": 5412,
          "end": 5432
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Window",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5437,
                    "end": 5443
                  },
                  "typeArguments": null,
                  "start": 5437,
                  "end": 5443
                },
                {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "globalThis",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5453,
                    "end": 5463
                  },
                  "typeArguments": null,
                  "start": 5446,
                  "end": 5463
                }
              ],
              "start": 5437,
              "end": 5463
            },
            "start": 5435,
            "end": 5463
          },
          "start": 5434,
          "end": 5463
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 5471,
                "end": 5472
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 5475,
                "end": 5476
              },
              "start": 5471,
              "end": 5476
            },
            "directive": null,
            "start": 5471,
            "end": 5477
          }
        ],
        "start": 5465,
        "end": 5479
      },
      "expression": false,
      "start": 5399,
      "end": 5479
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 5512,
        "end": 5515
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 5516,
              "end": 5517
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5516,
            "end": 5517
          }
        ],
        "start": 5515,
        "end": 5518
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 5526,
                "end": 5527
              },
              "typeArguments": null,
              "start": 5526,
              "end": 5527
            },
            "start": 5524,
            "end": 5527
          },
          "start": 5519,
          "end": 5527
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5546,
                      "end": 5551
                    },
                    "prefix": true,
                    "start": 5539,
                    "end": 5551
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "object",
                    "raw": "\"object\"",
                    "start": 5556,
                    "end": 5564
                  },
                  "start": 5539,
                  "end": 5564
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5568,
                    "end": 5573
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 5578,
                    "end": 5582
                  },
                  "start": 5568,
                  "end": 5582
                },
                "start": 5539,
                "end": 5582
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "prop",
                  "raw": "\"prop\"",
                  "start": 5586,
                  "end": 5592
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5596,
                  "end": 5601
                },
                "start": 5586,
                "end": 5601
              },
              "start": 5539,
              "end": 5601
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5613,
                    "end": 5618
                  },
                  "directive": null,
                  "start": 5613,
                  "end": 5619
                }
              ],
              "start": 5603,
              "end": 5666
            },
            "alternate": null,
            "start": 5535,
            "end": 5666
          }
        ],
        "start": 5529,
        "end": 5668
      },
      "expression": false,
      "start": 5503,
      "end": 5668
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "checkIsTouchDevice",
            "optional": false,
            "typeAnnotation": null,
            "start": 5698,
            "end": 5716
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "ontouchstart",
                  "raw": "\"ontouchstart\"",
                  "start": 5729,
                  "end": 5743
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "window",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5747,
                  "end": 5753
                },
                "start": 5729,
                "end": 5753
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "msMaxTouchPoints",
                  "raw": "\"msMaxTouchPoints\"",
                  "start": 5757,
                  "end": 5775
                },
                "operator": "in",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "window",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5779,
                    "end": 5785
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "navigator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5786,
                    "end": 5795
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5779,
                  "end": 5795
                },
                "start": 5757,
                "end": 5795
              },
              "start": 5729,
              "end": 5795
            },
            "id": null,
            "generator": false,
            "start": 5719,
            "end": 5795
          },
          "definite": false,
          "start": 5698,
          "end": 5795
        }
      ],
      "declare": false,
      "start": 5692,
      "end": 5796
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isHTMLTable",
        "optional": false,
        "typeAnnotation": null,
        "start": 5829,
        "end": 5840
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 5841,
              "end": 5842
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSObjectKeyword",
                  "start": 5851,
                  "end": 5857
                },
                {
                  "type": "TSNullKeyword",
                  "start": 5860,
                  "end": 5864
                }
              ],
              "start": 5851,
              "end": 5864
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5841,
            "end": 5864
          }
        ],
        "start": 5840,
        "end": 5865
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "table",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 5873,
                "end": 5874
              },
              "typeArguments": null,
              "start": 5873,
              "end": 5874
            },
            "start": 5871,
            "end": 5874
          },
          "start": 5866,
          "end": 5874
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 5877,
          "end": 5884
        },
        "start": 5875,
        "end": 5884
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "table",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5900,
                    "end": 5905
                  },
                  "prefix": true,
                  "start": 5899,
                  "end": 5905
                },
                "prefix": true,
                "start": 5898,
                "end": 5905
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "html",
                  "raw": "'html'",
                  "start": 5909,
                  "end": 5915
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "table",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5919,
                  "end": 5924
                },
                "start": 5909,
                "end": 5924
              },
              "start": 5898,
              "end": 5924
            },
            "start": 5891,
            "end": 5925
          }
        ],
        "start": 5885,
        "end": 5927
      },
      "expression": false,
      "start": 5820,
      "end": 5927
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 5957,
            "end": 5958
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5962,
                    "end": 5963
                  },
                  "constraint": {
                    "type": "TSObjectKeyword",
                    "start": 5972,
                    "end": 5978
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 5962,
                  "end": 5978
                }
              ],
              "start": 5961,
              "end": 5979
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5983,
                          "end": 5984
                        },
                        "typeArguments": null,
                        "start": 5983,
                        "end": 5984
                      },
                      {
                        "type": "TSTypeLiteral",
                        "members": [],
                        "start": 5987,
                        "end": 5989
                      }
                    ],
                    "start": 5983,
                    "end": 5989
                  },
                  "start": 5981,
                  "end": 5989
                },
                "start": 5980,
                "end": 5989
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 6000,
                      "end": 6005
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6009,
                      "end": 6010
                    },
                    "start": 6000,
                    "end": 6010
                  },
                  "directive": null,
                  "start": 6000,
                  "end": 6011
                }
              ],
              "start": 5994,
              "end": 6013
            },
            "id": null,
            "generator": false,
            "start": 5961,
            "end": 6013
          },
          "definite": false,
          "start": 5957,
          "end": 6013
        }
      ],
      "declare": false,
      "start": 5951,
      "end": 6014
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6047,
        "end": 6052
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 6053,
              "end": 6054
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 6063,
                    "end": 6066
                  },
                  "start": 6063,
                  "end": 6068
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Record",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6071,
                    "end": 6077
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 6078,
                        "end": 6084
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 6086,
                        "end": 6089
                      }
                    ],
                    "start": 6077,
                    "end": 6090
                  },
                  "start": 6071,
                  "end": 6090
                }
              ],
              "start": 6063,
              "end": 6090
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 6053,
            "end": 6090
          }
        ],
        "start": 6052,
        "end": 6091
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 6097,
                "end": 6098
              },
              "typeArguments": null,
              "start": 6097,
              "end": 6098
            },
            "start": 6095,
            "end": 6098
          },
          "start": 6092,
          "end": 6098
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6110,
                    "end": 6115
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isArray",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6116,
                    "end": 6123
                  },
                  "optional": false,
                  "computed": false,
                  "start": 6110,
                  "end": 6123
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6124,
                    "end": 6127
                  }
                ],
                "optional": false,
                "start": 6110,
                "end": 6128
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "length",
                  "raw": "'length'",
                  "start": 6132,
                  "end": 6140
                },
                "operator": "in",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6144,
                  "end": 6147
                },
                "start": 6132,
                "end": 6147
              },
              "start": 6110,
              "end": 6147
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6157,
                    "end": 6160
                  },
                  "directive": null,
                  "start": 6157,
                  "end": 6161
                }
              ],
              "start": 6149,
              "end": 6173
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6191,
                    "end": 6194
                  },
                  "directive": null,
                  "start": 6191,
                  "end": 6195
                }
              ],
              "start": 6183,
              "end": 6207
            },
            "start": 6106,
            "end": 6207
          }
        ],
        "start": 6100,
        "end": 6209
      },
      "expression": false,
      "start": 6038,
      "end": 6209
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 6220,
        "end": 6225
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 6226,
              "end": 6227
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 6236,
                    "end": 6239
                  },
                  "start": 6236,
                  "end": 6241
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Record",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6244,
                    "end": 6250
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 6251,
                        "end": 6257
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 6259,
                        "end": 6262
                      }
                    ],
                    "start": 6250,
                    "end": 6263
                  },
                  "start": 6244,
                  "end": 6263
                }
              ],
              "start": 6236,
              "end": 6263
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 6226,
            "end": 6263
          }
        ],
        "start": 6225,
        "end": 6264
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 6270,
                "end": 6271
              },
              "typeArguments": null,
              "start": 6270,
              "end": 6271
            },
            "start": 6268,
            "end": 6271
          },
          "start": 6265,
          "end": 6271
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6283,
                  "end": 6288
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6289,
                  "end": 6296
                },
                "optional": false,
                "computed": false,
                "start": 6283,
                "end": 6296
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6297,
                  "end": 6300
                }
              ],
              "optional": false,
              "start": 6283,
              "end": 6301
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6311,
                    "end": 6314
                  },
                  "directive": null,
                  "start": 6311,
                  "end": 6315
                }
              ],
              "start": 6303,
              "end": 6335
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6353,
                    "end": 6356
                  },
                  "directive": null,
                  "start": 6353,
                  "end": 6357
                }
              ],
              "start": 6345,
              "end": 6369
            },
            "start": 6279,
            "end": 6369
          }
        ],
        "start": 6273,
        "end": 6371
      },
      "expression": false,
      "start": 6211,
      "end": 6371
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test3",
        "optional": false,
        "typeAnnotation": null,
        "start": 6382,
        "end": 6387
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 6388,
              "end": 6389
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 6398,
                    "end": 6401
                  },
                  "start": 6398,
                  "end": 6403
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Record",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6406,
                    "end": 6412
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 6413,
                        "end": 6419
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 6421,
                        "end": 6424
                      }
                    ],
                    "start": 6412,
                    "end": 6425
                  },
                  "start": 6406,
                  "end": 6425
                }
              ],
              "start": 6398,
              "end": 6425
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 6388,
            "end": 6425
          }
        ],
        "start": 6387,
        "end": 6426
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 6432,
                "end": 6433
              },
              "typeArguments": null,
              "start": 6432,
              "end": 6433
            },
            "start": 6430,
            "end": 6433
          },
          "start": 6427,
          "end": 6433
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "length",
                "raw": "'length'",
                "start": 6445,
                "end": 6453
              },
              "operator": "in",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 6457,
                "end": 6460
              },
              "start": 6445,
              "end": 6460
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6470,
                    "end": 6473
                  },
                  "directive": null,
                  "start": 6470,
                  "end": 6474
                }
              ],
              "start": 6462,
              "end": 6486
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6504,
                    "end": 6507
                  },
                  "directive": null,
                  "start": 6504,
                  "end": 6508
                }
              ],
              "start": 6496,
              "end": 6520
            },
            "start": 6441,
            "end": 6520
          }
        ],
        "start": 6435,
        "end": 6522
      },
      "expression": false,
      "start": 6373,
      "end": 6522
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 6522
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 6,
    "end": 7,
    "range": [
      6,
      7
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9,
    "range": [
      8,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 13,
    "end": 19,
    "range": [
      13,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 23,
    "end": 28,
    "range": [
      23,
      28
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 36,
    "end": 42,
    "range": [
      36,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 47,
    "end": 55,
    "range": [
      47,
      55
    ]
  },
  {
    "type": "Identifier",
    "value": "negativeClassesTest",
    "start": 56,
    "end": 75,
    "range": [
      56,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 92,
    "end": 94,
    "range": [
      92,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 96,
    "end": 99,
    "range": [
      96,
      99
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 100,
    "end": 102,
    "range": [
      100,
      102
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
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
    "value": ".",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 122,
    "end": 125,
    "range": [
      122,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 133,
    "end": 137,
    "range": [
      133,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 154,
    "end": 157,
    "range": [
      154,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 168,
    "end": 176,
    "range": [
      168,
      176
    ]
  },
  {
    "type": "Identifier",
    "value": "positiveClassesTest",
    "start": 177,
    "end": 196,
    "range": [
      177,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 213,
    "end": 215,
    "range": [
      213,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 217,
    "end": 220,
    "range": [
      217,
      220
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 221,
    "end": 223,
    "range": [
      221,
      223
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 243,
    "end": 246,
    "range": [
      243,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 254,
    "end": 258,
    "range": [
      254,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 275,
    "end": 278,
    "range": [
      275,
      278
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 289,
    "end": 294,
    "range": [
      289,
      294
    ]
  },
  {
    "type": "Identifier",
    "value": "AWithOptionalProp",
    "start": 295,
    "end": 312,
    "range": [
      295,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 319,
    "end": 325,
    "range": [
      319,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 329,
    "end": 334,
    "range": [
      329,
      334
    ]
  },
  {
    "type": "Identifier",
    "value": "BWithOptionalProp",
    "start": 335,
    "end": 352,
    "range": [
      335,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 353,
    "end": 354,
    "range": [
      353,
      354
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 359,
    "end": 365,
    "range": [
      359,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 370,
    "end": 378,
    "range": [
      370,
      378
    ]
  },
  {
    "type": "Identifier",
    "value": "positiveTestClassesWithOptionalProperties",
    "start": 379,
    "end": 420,
    "range": [
      379,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Identifier",
    "value": "AWithOptionalProp",
    "start": 424,
    "end": 441,
    "range": [
      424,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Identifier",
    "value": "BWithOptionalProp",
    "start": 444,
    "end": 461,
    "range": [
      444,
      461
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 461,
    "end": 462,
    "range": [
      461,
      462
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 469,
    "end": 471,
    "range": [
      469,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 473,
    "end": 476,
    "range": [
      473,
      476
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 477,
    "end": 479,
    "range": [
      477,
      479
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 499,
    "end": 502,
    "range": [
      499,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 510,
    "end": 514,
    "range": [
      510,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 531,
    "end": 534,
    "range": [
      531,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 545,
    "end": 550,
    "range": [
      545,
      550
    ]
  },
  {
    "type": "Identifier",
    "value": "AWithMethod",
    "start": 551,
    "end": 562,
    "range": [
      551,
      562
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 570,
    "end": 571,
    "range": [
      570,
      571
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 574,
    "end": 580,
    "range": [
      574,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 583,
    "end": 589,
    "range": [
      583,
      589
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 590,
    "end": 592,
    "range": [
      590,
      592
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 599,
    "end": 604,
    "range": [
      599,
      604
    ]
  },
  {
    "type": "Identifier",
    "value": "BWithMethod",
    "start": 605,
    "end": 616,
    "range": [
      605,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 617,
    "end": 618,
    "range": [
      617,
      618
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 628,
    "end": 634,
    "range": [
      628,
      634
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 637,
    "end": 643,
    "range": [
      637,
      643
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 644,
    "end": 646,
    "range": [
      644,
      646
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 653,
    "end": 661,
    "range": [
      653,
      661
    ]
  },
  {
    "type": "Identifier",
    "value": "negativeTestClassesWithMembers",
    "start": 662,
    "end": 692,
    "range": [
      662,
      692
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 693,
    "end": 694,
    "range": [
      693,
      694
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 694,
    "end": 695,
    "range": [
      694,
      695
    ]
  },
  {
    "type": "Identifier",
    "value": "AWithMethod",
    "start": 696,
    "end": 707,
    "range": [
      696,
      707
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 708,
    "end": 709,
    "range": [
      708,
      709
    ]
  },
  {
    "type": "Identifier",
    "value": "BWithMethod",
    "start": 710,
    "end": 721,
    "range": [
      710,
      721
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 721,
    "end": 722,
    "range": [
      721,
      722
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 723,
    "end": 724,
    "range": [
      723,
      724
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 729,
    "end": 731,
    "range": [
      729,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 733,
    "end": 736,
    "range": [
      733,
      736
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 737,
    "end": 739,
    "range": [
      737,
      739
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 740,
    "end": 741,
    "range": [
      740,
      741
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 741,
    "end": 742,
    "range": [
      741,
      742
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 755,
    "end": 756,
    "range": [
      755,
      756
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 757,
    "end": 758,
    "range": [
      757,
      758
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 769,
    "end": 770,
    "range": [
      769,
      770
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 771,
    "end": 772,
    "range": [
      771,
      772
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 772,
    "end": 773,
    "range": [
      772,
      773
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 773,
    "end": 774,
    "range": [
      773,
      774
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 779,
    "end": 780,
    "range": [
      779,
      780
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 781,
    "end": 785,
    "range": [
      781,
      785
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 786,
    "end": 787,
    "range": [
      786,
      787
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 792,
    "end": 793,
    "range": [
      792,
      793
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 794,
    "end": 795,
    "range": [
      794,
      795
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 797,
    "end": 805,
    "range": [
      797,
      805
    ]
  },
  {
    "type": "Identifier",
    "value": "negativeTestClassesWithMemberMissingInBothClasses",
    "start": 806,
    "end": 855,
    "range": [
      806,
      855
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 856,
    "end": 857,
    "range": [
      856,
      857
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Identifier",
    "value": "AWithMethod",
    "start": 859,
    "end": 870,
    "range": [
      859,
      870
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 871,
    "end": 872,
    "range": [
      871,
      872
    ]
  },
  {
    "type": "Identifier",
    "value": "BWithMethod",
    "start": 873,
    "end": 884,
    "range": [
      873,
      884
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 884,
    "end": 885,
    "range": [
      884,
      885
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 892,
    "end": 894,
    "range": [
      892,
      894
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 896,
    "end": 899,
    "range": [
      896,
      899
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 900,
    "end": 902,
    "range": [
      900,
      902
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 903,
    "end": 904,
    "range": [
      903,
      904
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 904,
    "end": 905,
    "range": [
      904,
      905
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 906,
    "end": 907,
    "range": [
      906,
      907
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 916,
    "end": 917,
    "range": [
      916,
      917
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 917,
    "end": 918,
    "range": [
      917,
      918
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 918,
    "end": 919,
    "range": [
      918,
      919
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 919,
    "end": 920,
    "range": [
      919,
      920
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 920,
    "end": 921,
    "range": [
      920,
      921
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 921,
    "end": 922,
    "range": [
      921,
      922
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 931,
    "end": 932,
    "range": [
      931,
      932
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 932,
    "end": 933,
    "range": [
      932,
      933
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 934,
    "end": 935,
    "range": [
      934,
      935
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 935,
    "end": 936,
    "range": [
      935,
      936
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 936,
    "end": 937,
    "range": [
      936,
      937
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 944,
    "end": 948,
    "range": [
      944,
      948
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 949,
    "end": 950,
    "range": [
      949,
      950
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 959,
    "end": 960,
    "range": [
      959,
      960
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 960,
    "end": 961,
    "range": [
      960,
      961
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 961,
    "end": 962,
    "range": [
      961,
      962
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 962,
    "end": 963,
    "range": [
      962,
      963
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 963,
    "end": 964,
    "range": [
      963,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 964,
    "end": 965,
    "range": [
      964,
      965
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 974,
    "end": 975,
    "range": [
      974,
      975
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 975,
    "end": 976,
    "range": [
      975,
      976
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 976,
    "end": 977,
    "range": [
      976,
      977
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 977,
    "end": 978,
    "range": [
      977,
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
    "type": "Punctuator",
    "value": "}",
    "start": 985,
    "end": 986,
    "range": [
      985,
      986
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 987,
    "end": 988,
    "range": [
      987,
      988
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 990,
    "end": 995,
    "range": [
      990,
      995
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 996,
    "end": 997,
    "range": [
      996,
      997
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 998,
    "end": 999,
    "range": [
      998,
      999
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1000,
    "end": 1001,
    "range": [
      1000,
      1001
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1001,
    "end": 1002,
    "range": [
      1001,
      1002
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1003,
    "end": 1009,
    "range": [
      1003,
      1009
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1009,
    "end": 1010,
    "range": [
      1009,
      1010
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1011,
    "end": 1012,
    "range": [
      1011,
      1012
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1013,
    "end": 1018,
    "range": [
      1013,
      1018
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1019,
    "end": 1020,
    "range": [
      1019,
      1020
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1021,
    "end": 1022,
    "range": [
      1021,
      1022
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1023,
    "end": 1024,
    "range": [
      1023,
      1024
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1024,
    "end": 1025,
    "range": [
      1024,
      1025
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1026,
    "end": 1032,
    "range": [
      1026,
      1032
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1032,
    "end": 1033,
    "range": [
      1032,
      1033
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1034,
    "end": 1035,
    "range": [
      1034,
      1035
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1037,
    "end": 1045,
    "range": [
      1037,
      1045
    ]
  },
  {
    "type": "Identifier",
    "value": "negativeMultipleClassesTest",
    "start": 1046,
    "end": 1073,
    "range": [
      1046,
      1073
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1073,
    "end": 1074,
    "range": [
      1073,
      1074
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1074,
    "end": 1075,
    "range": [
      1074,
      1075
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1075,
    "end": 1076,
    "range": [
      1075,
      1076
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1077,
    "end": 1078,
    "range": [
      1077,
      1078
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1079,
    "end": 1080,
    "range": [
      1079,
      1080
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1081,
    "end": 1082,
    "range": [
      1081,
      1082
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1083,
    "end": 1084,
    "range": [
      1083,
      1084
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1085,
    "end": 1086,
    "range": [
      1085,
      1086
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1087,
    "end": 1088,
    "range": [
      1087,
      1088
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1089,
    "end": 1090,
    "range": [
      1089,
      1090
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1090,
    "end": 1091,
    "range": [
      1090,
      1091
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1092,
    "end": 1093,
    "range": [
      1092,
      1093
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1098,
    "end": 1100,
    "range": [
      1098,
      1100
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1101,
    "end": 1102,
    "range": [
      1101,
      1102
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1102,
    "end": 1105,
    "range": [
      1102,
      1105
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1106,
    "end": 1108,
    "range": [
      1106,
      1108
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1109,
    "end": 1110,
    "range": [
      1109,
      1110
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1110,
    "end": 1111,
    "range": [
      1110,
      1111
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1112,
    "end": 1113,
    "range": [
      1112,
      1113
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1122,
    "end": 1123,
    "range": [
      1122,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1123,
    "end": 1124,
    "range": [
      1123,
      1124
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1124,
    "end": 1125,
    "range": [
      1124,
      1125
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1126,
    "end": 1127,
    "range": [
      1126,
      1127
    ]
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 1128,
    "end": 1131,
    "range": [
      1128,
      1131
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1131,
    "end": 1132,
    "range": [
      1131,
      1132
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1137,
    "end": 1138,
    "range": [
      1137,
      1138
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1139,
    "end": 1143,
    "range": [
      1139,
      1143
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1144,
    "end": 1145,
    "range": [
      1144,
      1145
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1154,
    "end": 1155,
    "range": [
      1154,
      1155
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1155,
    "end": 1156,
    "range": [
      1155,
      1156
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1156,
    "end": 1157,
    "range": [
      1156,
      1157
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1158,
    "end": 1159,
    "range": [
      1158,
      1159
    ]
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 1160,
    "end": 1163,
    "range": [
      1160,
      1163
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1163,
    "end": 1164,
    "range": [
      1163,
      1164
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1169,
    "end": 1170,
    "range": [
      1169,
      1170
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1171,
    "end": 1172,
    "range": [
      1171,
      1172
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1174,
    "end": 1179,
    "range": [
      1174,
      1179
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassWithUnionProp",
    "start": 1180,
    "end": 1198,
    "range": [
      1180,
      1198
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1199,
    "end": 1200,
    "range": [
      1199,
      1200
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1201,
    "end": 1205,
    "range": [
      1201,
      1205
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1205,
    "end": 1206,
    "range": [
      1205,
      1206
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1207,
    "end": 1208,
    "range": [
      1207,
      1208
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1209,
    "end": 1210,
    "range": [
      1209,
      1210
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1211,
    "end": 1212,
    "range": [
      1211,
      1212
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1213,
    "end": 1214,
    "range": [
      1213,
      1214
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1216,
    "end": 1224,
    "range": [
      1216,
      1224
    ]
  },
  {
    "type": "Identifier",
    "value": "negativePropTest",
    "start": 1225,
    "end": 1241,
    "range": [
      1225,
      1241
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1241,
    "end": 1242,
    "range": [
      1241,
      1242
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1242,
    "end": 1243,
    "range": [
      1242,
      1243
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1243,
    "end": 1244,
    "range": [
      1243,
      1244
    ]
  },
  {
    "type": "Identifier",
    "value": "ClassWithUnionProp",
    "start": 1245,
    "end": 1263,
    "range": [
      1245,
      1263
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1263,
    "end": 1264,
    "range": [
      1263,
      1264
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1265,
    "end": 1266,
    "range": [
      1265,
      1266
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1271,
    "end": 1273,
    "range": [
      1271,
      1273
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1274,
    "end": 1275,
    "range": [
      1274,
      1275
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1275,
    "end": 1278,
    "range": [
      1275,
      1278
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1279,
    "end": 1281,
    "range": [
      1279,
      1281
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1282,
    "end": 1283,
    "range": [
      1282,
      1283
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1283,
    "end": 1284,
    "range": [
      1283,
      1284
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1284,
    "end": 1288,
    "range": [
      1284,
      1288
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1288,
    "end": 1289,
    "range": [
      1288,
      1289
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1290,
    "end": 1291,
    "range": [
      1290,
      1291
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1300,
    "end": 1303,
    "range": [
      1300,
      1303
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1304,
    "end": 1305,
    "range": [
      1304,
      1305
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1305,
    "end": 1306,
    "range": [
      1305,
      1306
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1307,
    "end": 1313,
    "range": [
      1307,
      1313
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1314,
    "end": 1315,
    "range": [
      1314,
      1315
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1316,
    "end": 1317,
    "range": [
      1316,
      1317
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1317,
    "end": 1318,
    "range": [
      1317,
      1318
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1318,
    "end": 1322,
    "range": [
      1318,
      1322
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1322,
    "end": 1323,
    "range": [
      1322,
      1323
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1323,
    "end": 1324,
    "range": [
      1323,
      1324
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1324,
    "end": 1325,
    "range": [
      1324,
      1325
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1330,
    "end": 1331,
    "range": [
      1330,
      1331
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1332,
    "end": 1336,
    "range": [
      1332,
      1336
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1337,
    "end": 1338,
    "range": [
      1337,
      1338
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1347,
    "end": 1350,
    "range": [
      1347,
      1350
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1351,
    "end": 1352,
    "range": [
      1351,
      1352
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1352,
    "end": 1353,
    "range": [
      1352,
      1353
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1354,
    "end": 1360,
    "range": [
      1354,
      1360
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1361,
    "end": 1362,
    "range": [
      1361,
      1362
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1363,
    "end": 1364,
    "range": [
      1363,
      1364
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1364,
    "end": 1365,
    "range": [
      1364,
      1365
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1365,
    "end": 1369,
    "range": [
      1365,
      1369
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1369,
    "end": 1370,
    "range": [
      1369,
      1370
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1370,
    "end": 1371,
    "range": [
      1370,
      1371
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1371,
    "end": 1372,
    "range": [
      1371,
      1372
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1377,
    "end": 1378,
    "range": [
      1377,
      1378
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1379,
    "end": 1380,
    "range": [
      1379,
      1380
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1382,
    "end": 1387,
    "range": [
      1382,
      1387
    ]
  },
  {
    "type": "Identifier",
    "value": "NegativeClassTest",
    "start": 1388,
    "end": 1405,
    "range": [
      1388,
      1405
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1406,
    "end": 1407,
    "range": [
      1406,
      1407
    ]
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 1412,
    "end": 1421,
    "range": [
      1412,
      1421
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1422,
    "end": 1426,
    "range": [
      1422,
      1426
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1426,
    "end": 1427,
    "range": [
      1426,
      1427
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1428,
    "end": 1429,
    "range": [
      1428,
      1429
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1430,
    "end": 1431,
    "range": [
      1430,
      1431
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1432,
    "end": 1433,
    "range": [
      1432,
      1433
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1433,
    "end": 1434,
    "range": [
      1433,
      1434
    ]
  },
  {
    "type": "Identifier",
    "value": "inThis",
    "start": 1439,
    "end": 1445,
    "range": [
      1439,
      1445
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1445,
    "end": 1446,
    "range": [
      1445,
      1446
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1446,
    "end": 1447,
    "range": [
      1446,
      1447
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1448,
    "end": 1449,
    "range": [
      1448,
      1449
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1458,
    "end": 1460,
    "range": [
      1458,
      1460
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1461,
    "end": 1462,
    "range": [
      1461,
      1462
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1462,
    "end": 1465,
    "range": [
      1462,
      1465
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1466,
    "end": 1468,
    "range": [
      1466,
      1468
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1469,
    "end": 1473,
    "range": [
      1469,
      1473
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1473,
    "end": 1474,
    "range": [
      1473,
      1474
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1474,
    "end": 1478,
    "range": [
      1474,
      1478
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1478,
    "end": 1479,
    "range": [
      1478,
      1479
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1480,
    "end": 1481,
    "range": [
      1480,
      1481
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1494,
    "end": 1497,
    "range": [
      1494,
      1497
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1498,
    "end": 1499,
    "range": [
      1498,
      1499
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1499,
    "end": 1500,
    "range": [
      1499,
      1500
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1501,
    "end": 1507,
    "range": [
      1501,
      1507
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1508,
    "end": 1509,
    "range": [
      1508,
      1509
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1510,
    "end": 1514,
    "range": [
      1510,
      1514
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1514,
    "end": 1515,
    "range": [
      1514,
      1515
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1515,
    "end": 1519,
    "range": [
      1515,
      1519
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1519,
    "end": 1520,
    "range": [
      1519,
      1520
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1520,
    "end": 1521,
    "range": [
      1520,
      1521
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1521,
    "end": 1522,
    "range": [
      1521,
      1522
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1531,
    "end": 1532,
    "range": [
      1531,
      1532
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1533,
    "end": 1537,
    "range": [
      1533,
      1537
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1538,
    "end": 1539,
    "range": [
      1538,
      1539
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1552,
    "end": 1555,
    "range": [
      1552,
      1555
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1556,
    "end": 1557,
    "range": [
      1556,
      1557
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1557,
    "end": 1558,
    "range": [
      1557,
      1558
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1559,
    "end": 1565,
    "range": [
      1559,
      1565
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1566,
    "end": 1567,
    "range": [
      1566,
      1567
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1568,
    "end": 1572,
    "range": [
      1568,
      1572
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1572,
    "end": 1573,
    "range": [
      1572,
      1573
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1573,
    "end": 1577,
    "range": [
      1573,
      1577
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1577,
    "end": 1578,
    "range": [
      1577,
      1578
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1578,
    "end": 1579,
    "range": [
      1578,
      1579
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1579,
    "end": 1580,
    "range": [
      1579,
      1580
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1589,
    "end": 1590,
    "range": [
      1589,
      1590
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1595,
    "end": 1596,
    "range": [
      1595,
      1596
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1597,
    "end": 1598,
    "range": [
      1597,
      1598
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1600,
    "end": 1605,
    "range": [
      1600,
      1605
    ]
  },
  {
    "type": "Identifier",
    "value": "UnreachableCodeDetection",
    "start": 1606,
    "end": 1630,
    "range": [
      1606,
      1630
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1631,
    "end": 1632,
    "range": [
      1631,
      1632
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1637,
    "end": 1638,
    "range": [
      1637,
      1638
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1638,
    "end": 1639,
    "range": [
      1638,
      1639
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1640,
    "end": 1646,
    "range": [
      1640,
      1646
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1646,
    "end": 1647,
    "range": [
      1646,
      1647
    ]
  },
  {
    "type": "Identifier",
    "value": "inThis",
    "start": 1652,
    "end": 1658,
    "range": [
      1652,
      1658
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1658,
    "end": 1659,
    "range": [
      1658,
      1659
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1659,
    "end": 1660,
    "range": [
      1659,
      1660
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1661,
    "end": 1662,
    "range": [
      1661,
      1662
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1671,
    "end": 1673,
    "range": [
      1671,
      1673
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1674,
    "end": 1675,
    "range": [
      1674,
      1675
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1675,
    "end": 1678,
    "range": [
      1675,
      1678
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1679,
    "end": 1681,
    "range": [
      1679,
      1681
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1682,
    "end": 1686,
    "range": [
      1682,
      1686
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1686,
    "end": 1687,
    "range": [
      1686,
      1687
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1688,
    "end": 1689,
    "range": [
      1688,
      1689
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1698,
    "end": 1699,
    "range": [
      1698,
      1699
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1700,
    "end": 1704,
    "range": [
      1700,
      1704
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1705,
    "end": 1706,
    "range": [
      1705,
      1706
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1719,
    "end": 1722,
    "range": [
      1719,
      1722
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1723,
    "end": 1724,
    "range": [
      1723,
      1724
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1725,
    "end": 1726,
    "range": [
      1725,
      1726
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1727,
    "end": 1731,
    "range": [
      1727,
      1731
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1731,
    "end": 1732,
    "range": [
      1731,
      1732
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1732,
    "end": 1733,
    "range": [
      1732,
      1733
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1733,
    "end": 1734,
    "range": [
      1733,
      1734
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1743,
    "end": 1744,
    "range": [
      1743,
      1744
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1749,
    "end": 1750,
    "range": [
      1749,
      1750
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1751,
    "end": 1752,
    "range": [
      1751,
      1752
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1754,
    "end": 1762,
    "range": [
      1754,
      1762
    ]
  },
  {
    "type": "Identifier",
    "value": "positiveIntersectionTest",
    "start": 1763,
    "end": 1787,
    "range": [
      1763,
      1787
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1787,
    "end": 1788,
    "range": [
      1787,
      1788
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1788,
    "end": 1789,
    "range": [
      1788,
      1789
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1789,
    "end": 1790,
    "range": [
      1789,
      1790
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1791,
    "end": 1792,
    "range": [
      1791,
      1792
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1793,
    "end": 1794,
    "range": [
      1793,
      1794
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1794,
    "end": 1795,
    "range": [
      1794,
      1795
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1796,
    "end": 1802,
    "range": [
      1796,
      1802
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1803,
    "end": 1804,
    "range": [
      1803,
      1804
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1805,
    "end": 1806,
    "range": [
      1805,
      1806
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1807,
    "end": 1808,
    "range": [
      1807,
      1808
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1809,
    "end": 1810,
    "range": [
      1809,
      1810
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1810,
    "end": 1811,
    "range": [
      1810,
      1811
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1812,
    "end": 1818,
    "range": [
      1812,
      1818
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1819,
    "end": 1820,
    "range": [
      1819,
      1820
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1820,
    "end": 1821,
    "range": [
      1820,
      1821
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1822,
    "end": 1823,
    "range": [
      1822,
      1823
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1828,
    "end": 1830,
    "range": [
      1828,
      1830
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1831,
    "end": 1832,
    "range": [
      1831,
      1832
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1832,
    "end": 1835,
    "range": [
      1832,
      1835
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1836,
    "end": 1838,
    "range": [
      1836,
      1838
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1839,
    "end": 1840,
    "range": [
      1839,
      1840
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1840,
    "end": 1841,
    "range": [
      1840,
      1841
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1842,
    "end": 1843,
    "range": [
      1842,
      1843
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1852,
    "end": 1855,
    "range": [
      1852,
      1855
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1856,
    "end": 1857,
    "range": [
      1856,
      1857
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1857,
    "end": 1858,
    "range": [
      1857,
      1858
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1859,
    "end": 1865,
    "range": [
      1859,
      1865
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1866,
    "end": 1867,
    "range": [
      1866,
      1867
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1868,
    "end": 1869,
    "range": [
      1868,
      1869
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1869,
    "end": 1870,
    "range": [
      1869,
      1870
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1870,
    "end": 1871,
    "range": [
      1870,
      1871
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1871,
    "end": 1872,
    "range": [
      1871,
      1872
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1877,
    "end": 1878,
    "range": [
      1877,
      1878
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1879,
    "end": 1883,
    "range": [
      1879,
      1883
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1884,
    "end": 1885,
    "range": [
      1884,
      1885
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1894,
    "end": 1897,
    "range": [
      1894,
      1897
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1898,
    "end": 1899,
    "range": [
      1898,
      1899
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1899,
    "end": 1900,
    "range": [
      1899,
      1900
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1901,
    "end": 1906,
    "range": [
      1901,
      1906
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1907,
    "end": 1908,
    "range": [
      1907,
      1908
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1909,
    "end": 1910,
    "range": [
      1909,
      1910
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1910,
    "end": 1911,
    "range": [
      1910,
      1911
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1916,
    "end": 1917,
    "range": [
      1916,
      1917
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1918,
    "end": 1919,
    "range": [
      1918,
      1919
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1942,
    "end": 1949,
    "range": [
      1942,
      1949
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1950,
    "end": 1955,
    "range": [
      1950,
      1955
    ]
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1956,
    "end": 1961,
    "range": [
      1956,
      1961
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1961,
    "end": 1962,
    "range": [
      1961,
      1962
    ]
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 1963,
    "end": 1968,
    "range": [
      1963,
      1968
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1968,
    "end": 1969,
    "range": [
      1968,
      1969
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1970,
    "end": 1972,
    "range": [
      1970,
      1972
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1973,
    "end": 1974,
    "range": [
      1973,
      1974
    ]
  },
  {
    "type": "String",
    "value": "'extra'",
    "start": 1974,
    "end": 1981,
    "range": [
      1974,
      1981
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1982,
    "end": 1984,
    "range": [
      1982,
      1984
    ]
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1985,
    "end": 1990,
    "range": [
      1985,
      1990
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1990,
    "end": 1991,
    "range": [
      1990,
      1991
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1992,
    "end": 1993,
    "range": [
      1992,
      1993
    ]
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1998,
    "end": 2003,
    "range": [
      1998,
      2003
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2019,
    "end": 2020,
    "range": [
      2019,
      2020
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2021,
    "end": 2025,
    "range": [
      2021,
      2025
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2026,
    "end": 2027,
    "range": [
      2026,
      2027
    ]
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 2032,
    "end": 2037,
    "range": [
      2032,
      2037
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2047,
    "end": 2048,
    "range": [
      2047,
      2048
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2050,
    "end": 2058,
    "range": [
      2050,
      2058
    ]
  },
  {
    "type": "Identifier",
    "value": "narrowsToNever",
    "start": 2059,
    "end": 2073,
    "range": [
      2059,
      2073
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2073,
    "end": 2074,
    "range": [
      2073,
      2074
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2074,
    "end": 2075,
    "range": [
      2074,
      2075
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2075,
    "end": 2076,
    "range": [
      2075,
      2076
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2077,
    "end": 2078,
    "range": [
      2077,
      2078
    ]
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 2079,
    "end": 2080,
    "range": [
      2079,
      2080
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2080,
    "end": 2081,
    "range": [
      2080,
      2081
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2082,
    "end": 2088,
    "range": [
      2082,
      2088
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2089,
    "end": 2090,
    "range": [
      2089,
      2090
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2091,
    "end": 2092,
    "range": [
      2091,
      2092
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2093,
    "end": 2094,
    "range": [
      2093,
      2094
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2095,
    "end": 2096,
    "range": [
      2095,
      2096
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2096,
    "end": 2097,
    "range": [
      2096,
      2097
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2098,
    "end": 2104,
    "range": [
      2098,
      2104
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2105,
    "end": 2106,
    "range": [
      2105,
      2106
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2106,
    "end": 2107,
    "range": [
      2106,
      2107
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2108,
    "end": 2109,
    "range": [
      2108,
      2109
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2114,
    "end": 2117,
    "range": [
      2114,
      2117
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2118,
    "end": 2119,
    "range": [
      2118,
      2119
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2119,
    "end": 2120,
    "range": [
      2119,
      2120
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2121,
    "end": 2127,
    "range": [
      2121,
      2127
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2127,
    "end": 2128,
    "range": [
      2127,
      2128
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2133,
    "end": 2135,
    "range": [
      2133,
      2135
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2136,
    "end": 2137,
    "range": [
      2136,
      2137
    ]
  },
  {
    "type": "String",
    "value": "\"l\"",
    "start": 2137,
    "end": 2140,
    "range": [
      2137,
      2140
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2141,
    "end": 2143,
    "range": [
      2141,
      2143
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2144,
    "end": 2145,
    "range": [
      2144,
      2145
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2145,
    "end": 2146,
    "range": [
      2145,
      2146
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2147,
    "end": 2148,
    "range": [
      2147,
      2148
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2157,
    "end": 2158,
    "range": [
      2157,
      2158
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2159,
    "end": 2160,
    "range": [
      2159,
      2160
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2161,
    "end": 2162,
    "range": [
      2161,
      2162
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2162,
    "end": 2163,
    "range": [
      2162,
      2163
    ]
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 2163,
    "end": 2164,
    "range": [
      2163,
      2164
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2164,
    "end": 2165,
    "range": [
      2164,
      2165
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2170,
    "end": 2171,
    "range": [
      2170,
      2171
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2176,
    "end": 2180,
    "range": [
      2176,
      2180
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2181,
    "end": 2183,
    "range": [
      2181,
      2183
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2184,
    "end": 2185,
    "range": [
      2184,
      2185
    ]
  },
  {
    "type": "String",
    "value": "\"r\"",
    "start": 2185,
    "end": 2188,
    "range": [
      2185,
      2188
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2189,
    "end": 2191,
    "range": [
      2189,
      2191
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2192,
    "end": 2193,
    "range": [
      2192,
      2193
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2193,
    "end": 2194,
    "range": [
      2193,
      2194
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2195,
    "end": 2196,
    "range": [
      2195,
      2196
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2205,
    "end": 2206,
    "range": [
      2205,
      2206
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2207,
    "end": 2208,
    "range": [
      2207,
      2208
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2209,
    "end": 2210,
    "range": [
      2209,
      2210
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2210,
    "end": 2211,
    "range": [
      2210,
      2211
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2211,
    "end": 2212,
    "range": [
      2211,
      2212
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2212,
    "end": 2213,
    "range": [
      2212,
      2213
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2218,
    "end": 2219,
    "range": [
      2218,
      2219
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2224,
    "end": 2228,
    "range": [
      2224,
      2228
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2229,
    "end": 2230,
    "range": [
      2229,
      2230
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2239,
    "end": 2240,
    "range": [
      2239,
      2240
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2241,
    "end": 2242,
    "range": [
      2241,
      2242
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2243,
    "end": 2244,
    "range": [
      2243,
      2244
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2249,
    "end": 2250,
    "range": [
      2249,
      2250
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2255,
    "end": 2261,
    "range": [
      2255,
      2261
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2262,
    "end": 2263,
    "range": [
      2262,
      2263
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2263,
    "end": 2264,
    "range": [
      2263,
      2264
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2265,
    "end": 2266,
    "range": [
      2265,
      2266
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2268,
    "end": 2272,
    "range": [
      2268,
      2272
    ]
  },
  {
    "type": "Identifier",
    "value": "AOrB",
    "start": 2273,
    "end": 2277,
    "range": [
      2273,
      2277
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2278,
    "end": 2279,
    "range": [
      2278,
      2279
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2280,
    "end": 2281,
    "range": [
      2280,
      2281
    ]
  },
  {
    "type": "Identifier",
    "value": "aProp",
    "start": 2282,
    "end": 2287,
    "range": [
      2282,
      2287
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2287,
    "end": 2288,
    "range": [
      2287,
      2288
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2289,
    "end": 2295,
    "range": [
      2289,
      2295
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2296,
    "end": 2297,
    "range": [
      2296,
      2297
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2298,
    "end": 2299,
    "range": [
      2298,
      2299
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2300,
    "end": 2301,
    "range": [
      2300,
      2301
    ]
  },
  {
    "type": "Identifier",
    "value": "bProp",
    "start": 2302,
    "end": 2307,
    "range": [
      2302,
      2307
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2307,
    "end": 2308,
    "range": [
      2307,
      2308
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2309,
    "end": 2315,
    "range": [
      2309,
      2315
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2316,
    "end": 2317,
    "range": [
      2316,
      2317
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2317,
    "end": 2318,
    "range": [
      2317,
      2318
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2319,
    "end": 2326,
    "range": [
      2319,
      2326
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2327,
    "end": 2335,
    "range": [
      2327,
      2335
    ]
  },
  {
    "type": "Identifier",
    "value": "isAOrB",
    "start": 2336,
    "end": 2342,
    "range": [
      2336,
      2342
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2342,
    "end": 2343,
    "range": [
      2342,
      2343
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2343,
    "end": 2344,
    "range": [
      2343,
      2344
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2344,
    "end": 2345,
    "range": [
      2344,
      2345
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2346,
    "end": 2353,
    "range": [
      2346,
      2353
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2353,
    "end": 2354,
    "range": [
      2353,
      2354
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2354,
    "end": 2355,
    "range": [
      2354,
      2355
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2356,
    "end": 2357,
    "range": [
      2356,
      2357
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 2358,
    "end": 2360,
    "range": [
      2358,
      2360
    ]
  },
  {
    "type": "Identifier",
    "value": "AOrB",
    "start": 2361,
    "end": 2365,
    "range": [
      2361,
      2365
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2365,
    "end": 2366,
    "range": [
      2365,
      2366
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2368,
    "end": 2375,
    "range": [
      2368,
      2375
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2376,
    "end": 2379,
    "range": [
      2376,
      2379
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2380,
    "end": 2381,
    "range": [
      2380,
      2381
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2381,
    "end": 2382,
    "range": [
      2381,
      2382
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2383,
    "end": 2390,
    "range": [
      2383,
      2390
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2390,
    "end": 2391,
    "range": [
      2390,
      2391
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2392,
    "end": 2394,
    "range": [
      2392,
      2394
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2395,
    "end": 2396,
    "range": [
      2395,
      2396
    ]
  },
  {
    "type": "Identifier",
    "value": "isAOrB",
    "start": 2396,
    "end": 2402,
    "range": [
      2396,
      2402
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2402,
    "end": 2403,
    "range": [
      2402,
      2403
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2403,
    "end": 2404,
    "range": [
      2403,
      2404
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2404,
    "end": 2405,
    "range": [
      2404,
      2405
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2405,
    "end": 2406,
    "range": [
      2405,
      2406
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2407,
    "end": 2408,
    "range": [
      2407,
      2408
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2413,
    "end": 2415,
    "range": [
      2413,
      2415
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2416,
    "end": 2417,
    "range": [
      2416,
      2417
    ]
  },
  {
    "type": "String",
    "value": "\"aProp\"",
    "start": 2417,
    "end": 2424,
    "range": [
      2417,
      2424
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2425,
    "end": 2427,
    "range": [
      2425,
      2427
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2428,
    "end": 2429,
    "range": [
      2428,
      2429
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2429,
    "end": 2430,
    "range": [
      2429,
      2430
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2431,
    "end": 2432,
    "range": [
      2431,
      2432
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2441,
    "end": 2442,
    "range": [
      2441,
      2442
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2442,
    "end": 2443,
    "range": [
      2442,
      2443
    ]
  },
  {
    "type": "Identifier",
    "value": "aProp",
    "start": 2443,
    "end": 2448,
    "range": [
      2443,
      2448
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2448,
    "end": 2449,
    "range": [
      2448,
      2449
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2454,
    "end": 2455,
    "range": [
      2454,
      2455
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2460,
    "end": 2464,
    "range": [
      2460,
      2464
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2465,
    "end": 2467,
    "range": [
      2465,
      2467
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2468,
    "end": 2469,
    "range": [
      2468,
      2469
    ]
  },
  {
    "type": "String",
    "value": "\"bProp\"",
    "start": 2469,
    "end": 2476,
    "range": [
      2469,
      2476
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2477,
    "end": 2479,
    "range": [
      2477,
      2479
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2480,
    "end": 2481,
    "range": [
      2480,
      2481
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2481,
    "end": 2482,
    "range": [
      2481,
      2482
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2483,
    "end": 2484,
    "range": [
      2483,
      2484
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2493,
    "end": 2494,
    "range": [
      2493,
      2494
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2494,
    "end": 2495,
    "range": [
      2494,
      2495
    ]
  },
  {
    "type": "Identifier",
    "value": "bProp",
    "start": 2495,
    "end": 2500,
    "range": [
      2495,
      2500
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2500,
    "end": 2501,
    "range": [
      2500,
      2501
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2506,
    "end": 2507,
    "range": [
      2506,
      2507
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2573,
    "end": 2577,
    "range": [
      2573,
      2577
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2578,
    "end": 2580,
    "range": [
      2578,
      2580
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2581,
    "end": 2582,
    "range": [
      2581,
      2582
    ]
  },
  {
    "type": "String",
    "value": "\"cProp\"",
    "start": 2582,
    "end": 2589,
    "range": [
      2582,
      2589
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2590,
    "end": 2592,
    "range": [
      2590,
      2592
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2593,
    "end": 2594,
    "range": [
      2593,
      2594
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2594,
    "end": 2595,
    "range": [
      2594,
      2595
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2596,
    "end": 2597,
    "range": [
      2596,
      2597
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2606,
    "end": 2611,
    "range": [
      2606,
      2611
    ]
  },
  {
    "type": "Identifier",
    "value": "_never",
    "start": 2612,
    "end": 2618,
    "range": [
      2612,
      2618
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2618,
    "end": 2619,
    "range": [
      2618,
      2619
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2620,
    "end": 2625,
    "range": [
      2620,
      2625
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2626,
    "end": 2627,
    "range": [
      2626,
      2627
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2628,
    "end": 2629,
    "range": [
      2628,
      2629
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2629,
    "end": 2630,
    "range": [
      2629,
      2630
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2635,
    "end": 2636,
    "range": [
      2635,
      2636
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2637,
    "end": 2638,
    "range": [
      2637,
      2638
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2640,
    "end": 2648,
    "range": [
      2640,
      2648
    ]
  },
  {
    "type": "Identifier",
    "value": "negativeIntersectionTest",
    "start": 2649,
    "end": 2673,
    "range": [
      2649,
      2673
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2673,
    "end": 2674,
    "range": [
      2673,
      2674
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2674,
    "end": 2675,
    "range": [
      2674,
      2675
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2676,
    "end": 2677,
    "range": [
      2676,
      2677
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2682,
    "end": 2684,
    "range": [
      2682,
      2684
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2685,
    "end": 2686,
    "range": [
      2685,
      2686
    ]
  },
  {
    "type": "String",
    "value": "\"ontouchstart\"",
    "start": 2686,
    "end": 2700,
    "range": [
      2686,
      2700
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2701,
    "end": 2703,
    "range": [
      2701,
      2703
    ]
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 2704,
    "end": 2710,
    "range": [
      2704,
      2710
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2710,
    "end": 2711,
    "range": [
      2710,
      2711
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2712,
    "end": 2713,
    "range": [
      2712,
      2713
    ]
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 2722,
    "end": 2728,
    "range": [
      2722,
      2728
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2728,
    "end": 2729,
    "range": [
      2728,
      2729
    ]
  },
  {
    "type": "Identifier",
    "value": "ontouchstart",
    "start": 2729,
    "end": 2741,
    "range": [
      2729,
      2741
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2746,
    "end": 2747,
    "range": [
      2746,
      2747
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2748,
    "end": 2752,
    "range": [
      2748,
      2752
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2753,
    "end": 2754,
    "range": [
      2753,
      2754
    ]
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 2763,
    "end": 2769,
    "range": [
      2763,
      2769
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2769,
    "end": 2770,
    "range": [
      2769,
      2770
    ]
  },
  {
    "type": "Identifier",
    "value": "ontouchstart",
    "start": 2770,
    "end": 2782,
    "range": [
      2770,
      2782
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2787,
    "end": 2788,
    "range": [
      2787,
      2788
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2789,
    "end": 2790,
    "range": [
      2789,
      2790
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2792,
    "end": 2800,
    "range": [
      2792,
      2800
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 2801,
    "end": 2803,
    "range": [
      2801,
      2803
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2803,
    "end": 2804,
    "range": [
      2803,
      2804
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2804,
    "end": 2805,
    "range": [
      2804,
      2805
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2805,
    "end": 2806,
    "range": [
      2805,
      2806
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2807,
    "end": 2814,
    "range": [
      2807,
      2814
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2814,
    "end": 2815,
    "range": [
      2814,
      2815
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2816,
    "end": 2817,
    "range": [
      2816,
      2817
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2822,
    "end": 2824,
    "range": [
      2822,
      2824
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2825,
    "end": 2826,
    "range": [
      2825,
      2826
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2826,
    "end": 2829,
    "range": [
      2826,
      2829
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2830,
    "end": 2832,
    "range": [
      2830,
      2832
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2833,
    "end": 2834,
    "range": [
      2833,
      2834
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2834,
    "end": 2835,
    "range": [
      2834,
      2835
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2836,
    "end": 2837,
    "range": [
      2836,
      2837
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2846,
    "end": 2847,
    "range": [
      2846,
      2847
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2847,
    "end": 2848,
    "range": [
      2847,
      2848
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2848,
    "end": 2849,
    "range": [
      2848,
      2849
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2849,
    "end": 2850,
    "range": [
      2849,
      2850
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2855,
    "end": 2856,
    "range": [
      2855,
      2856
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2861,
    "end": 2863,
    "range": [
      2861,
      2863
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2864,
    "end": 2865,
    "range": [
      2864,
      2865
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2865,
    "end": 2866,
    "range": [
      2865,
      2866
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2867,
    "end": 2869,
    "range": [
      2867,
      2869
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2870,
    "end": 2873,
    "range": [
      2870,
      2873
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2874,
    "end": 2876,
    "range": [
      2874,
      2876
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2877,
    "end": 2878,
    "range": [
      2877,
      2878
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2878,
    "end": 2879,
    "range": [
      2878,
      2879
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2880,
    "end": 2881,
    "range": [
      2880,
      2881
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2890,
    "end": 2891,
    "range": [
      2890,
      2891
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2891,
    "end": 2892,
    "range": [
      2891,
      2892
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2892,
    "end": 2893,
    "range": [
      2892,
      2893
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2893,
    "end": 2894,
    "range": [
      2893,
      2894
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2899,
    "end": 2900,
    "range": [
      2899,
      2900
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2905,
    "end": 2907,
    "range": [
      2905,
      2907
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2908,
    "end": 2909,
    "range": [
      2908,
      2909
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2909,
    "end": 2910,
    "range": [
      2909,
      2910
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2911,
    "end": 2913,
    "range": [
      2911,
      2913
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2914,
    "end": 2920,
    "range": [
      2914,
      2920
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2921,
    "end": 2922,
    "range": [
      2921,
      2922
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2923,
    "end": 2926,
    "range": [
      2923,
      2926
    ]
  },
  {
    "type": "String",
    "value": "\"object\"",
    "start": 2927,
    "end": 2935,
    "range": [
      2927,
      2935
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2936,
    "end": 2938,
    "range": [
      2936,
      2938
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 2939,
    "end": 2942,
    "range": [
      2939,
      2942
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2943,
    "end": 2945,
    "range": [
      2943,
      2945
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2946,
    "end": 2947,
    "range": [
      2946,
      2947
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2947,
    "end": 2948,
    "range": [
      2947,
      2948
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2949,
    "end": 2950,
    "range": [
      2949,
      2950
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2959,
    "end": 2960,
    "range": [
      2959,
      2960
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2960,
    "end": 2961,
    "range": [
      2960,
      2961
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2961,
    "end": 2962,
    "range": [
      2961,
      2962
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2962,
    "end": 2963,
    "range": [
      2962,
      2963
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2968,
    "end": 2969,
    "range": [
      2968,
      2969
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2974,
    "end": 2976,
    "range": [
      2974,
      2976
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2977,
    "end": 2978,
    "range": [
      2977,
      2978
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2978,
    "end": 2979,
    "range": [
      2978,
      2979
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2980,
    "end": 2982,
    "range": [
      2980,
      2982
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2983,
    "end": 2989,
    "range": [
      2983,
      2989
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2990,
    "end": 2991,
    "range": [
      2990,
      2991
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2992,
    "end": 2995,
    "range": [
      2992,
      2995
    ]
  },
  {
    "type": "String",
    "value": "\"object\"",
    "start": 2996,
    "end": 3004,
    "range": [
      2996,
      3004
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3005,
    "end": 3007,
    "range": [
      3005,
      3007
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 3008,
    "end": 3011,
    "range": [
      3008,
      3011
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3012,
    "end": 3014,
    "range": [
      3012,
      3014
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3015,
    "end": 3016,
    "range": [
      3015,
      3016
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3017,
    "end": 3019,
    "range": [
      3017,
      3019
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 3020,
    "end": 3023,
    "range": [
      3020,
      3023
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3024,
    "end": 3026,
    "range": [
      3024,
      3026
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3027,
    "end": 3028,
    "range": [
      3027,
      3028
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3029,
    "end": 3031,
    "range": [
      3029,
      3031
    ]
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 3032,
    "end": 3035,
    "range": [
      3032,
      3035
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3036,
    "end": 3038,
    "range": [
      3036,
      3038
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3039,
    "end": 3040,
    "range": [
      3039,
      3040
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3040,
    "end": 3041,
    "range": [
      3040,
      3041
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3042,
    "end": 3043,
    "range": [
      3042,
      3043
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3052,
    "end": 3053,
    "range": [
      3052,
      3053
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3053,
    "end": 3054,
    "range": [
      3053,
      3054
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3054,
    "end": 3055,
    "range": [
      3054,
      3055
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3055,
    "end": 3056,
    "range": [
      3055,
      3056
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3065,
    "end": 3066,
    "range": [
      3065,
      3066
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3066,
    "end": 3067,
    "range": [
      3066,
      3067
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3067,
    "end": 3068,
    "range": [
      3067,
      3068
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3068,
    "end": 3069,
    "range": [
      3068,
      3069
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3078,
    "end": 3079,
    "range": [
      3078,
      3079
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3079,
    "end": 3080,
    "range": [
      3079,
      3080
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3080,
    "end": 3081,
    "range": [
      3080,
      3081
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3081,
    "end": 3082,
    "range": [
      3081,
      3082
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3087,
    "end": 3088,
    "range": [
      3087,
      3088
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3089,
    "end": 3090,
    "range": [
      3089,
      3090
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3092,
    "end": 3100,
    "range": [
      3092,
      3100
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 3101,
    "end": 3103,
    "range": [
      3101,
      3103
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3103,
    "end": 3104,
    "range": [
      3103,
      3104
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3104,
    "end": 3105,
    "range": [
      3104,
      3105
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3105,
    "end": 3106,
    "range": [
      3105,
      3106
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 3107,
    "end": 3113,
    "range": [
      3107,
      3113
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3113,
    "end": 3114,
    "range": [
      3113,
      3114
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3115,
    "end": 3116,
    "range": [
      3115,
      3116
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3121,
    "end": 3123,
    "range": [
      3121,
      3123
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3124,
    "end": 3125,
    "range": [
      3124,
      3125
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 3125,
    "end": 3128,
    "range": [
      3125,
      3128
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3129,
    "end": 3131,
    "range": [
      3129,
      3131
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3132,
    "end": 3133,
    "range": [
      3132,
      3133
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3133,
    "end": 3134,
    "range": [
      3133,
      3134
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3135,
    "end": 3136,
    "range": [
      3135,
      3136
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3145,
    "end": 3146,
    "range": [
      3145,
      3146
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3146,
    "end": 3147,
    "range": [
      3146,
      3147
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3147,
    "end": 3148,
    "range": [
      3147,
      3148
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3148,
    "end": 3149,
    "range": [
      3148,
      3149
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3154,
    "end": 3155,
    "range": [
      3154,
      3155
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3160,
    "end": 3162,
    "range": [
      3160,
      3162
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3163,
    "end": 3164,
    "range": [
      3163,
      3164
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 3164,
    "end": 3167,
    "range": [
      3164,
      3167
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3168,
    "end": 3170,
    "range": [
      3168,
      3170
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3171,
    "end": 3172,
    "range": [
      3171,
      3172
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3173,
    "end": 3175,
    "range": [
      3173,
      3175
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 3176,
    "end": 3179,
    "range": [
      3176,
      3179
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3180,
    "end": 3182,
    "range": [
      3180,
      3182
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3183,
    "end": 3184,
    "range": [
      3183,
      3184
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3185,
    "end": 3187,
    "range": [
      3185,
      3187
    ]
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 3188,
    "end": 3191,
    "range": [
      3188,
      3191
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3192,
    "end": 3194,
    "range": [
      3192,
      3194
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3195,
    "end": 3196,
    "range": [
      3195,
      3196
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3196,
    "end": 3197,
    "range": [
      3196,
      3197
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3198,
    "end": 3199,
    "range": [
      3198,
      3199
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3208,
    "end": 3209,
    "range": [
      3208,
      3209
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3209,
    "end": 3210,
    "range": [
      3209,
      3210
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3210,
    "end": 3211,
    "range": [
      3210,
      3211
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3211,
    "end": 3212,
    "range": [
      3211,
      3212
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3221,
    "end": 3222,
    "range": [
      3221,
      3222
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3222,
    "end": 3223,
    "range": [
      3222,
      3223
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3223,
    "end": 3224,
    "range": [
      3223,
      3224
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3224,
    "end": 3225,
    "range": [
      3224,
      3225
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3234,
    "end": 3235,
    "range": [
      3234,
      3235
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3235,
    "end": 3236,
    "range": [
      3235,
      3236
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3236,
    "end": 3237,
    "range": [
      3236,
      3237
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3237,
    "end": 3238,
    "range": [
      3237,
      3238
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3243,
    "end": 3244,
    "range": [
      3243,
      3244
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3245,
    "end": 3246,
    "range": [
      3245,
      3246
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3248,
    "end": 3256,
    "range": [
      3248,
      3256
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 3257,
    "end": 3259,
    "range": [
      3257,
      3259
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3259,
    "end": 3260,
    "range": [
      3259,
      3260
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3260,
    "end": 3261,
    "range": [
      3260,
      3261
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3261,
    "end": 3262,
    "range": [
      3261,
      3262
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3262,
    "end": 3263,
    "range": [
      3262,
      3263
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3263,
    "end": 3264,
    "range": [
      3263,
      3264
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3264,
    "end": 3265,
    "range": [
      3264,
      3265
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3266,
    "end": 3267,
    "range": [
      3266,
      3267
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3267,
    "end": 3268,
    "range": [
      3267,
      3268
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3269,
    "end": 3270,
    "range": [
      3269,
      3270
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3275,
    "end": 3277,
    "range": [
      3275,
      3277
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3278,
    "end": 3279,
    "range": [
      3278,
      3279
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 3279,
    "end": 3282,
    "range": [
      3279,
      3282
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3283,
    "end": 3285,
    "range": [
      3283,
      3285
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3286,
    "end": 3287,
    "range": [
      3286,
      3287
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3287,
    "end": 3288,
    "range": [
      3287,
      3288
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3289,
    "end": 3290,
    "range": [
      3289,
      3290
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3299,
    "end": 3300,
    "range": [
      3299,
      3300
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3300,
    "end": 3301,
    "range": [
      3300,
      3301
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3301,
    "end": 3302,
    "range": [
      3301,
      3302
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3302,
    "end": 3303,
    "range": [
      3302,
      3303
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3308,
    "end": 3309,
    "range": [
      3308,
      3309
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3314,
    "end": 3316,
    "range": [
      3314,
      3316
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3317,
    "end": 3318,
    "range": [
      3317,
      3318
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3318,
    "end": 3319,
    "range": [
      3318,
      3319
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3320,
    "end": 3322,
    "range": [
      3320,
      3322
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 3323,
    "end": 3326,
    "range": [
      3323,
      3326
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3327,
    "end": 3329,
    "range": [
      3327,
      3329
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3330,
    "end": 3331,
    "range": [
      3330,
      3331
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3331,
    "end": 3332,
    "range": [
      3331,
      3332
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3333,
    "end": 3334,
    "range": [
      3333,
      3334
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3343,
    "end": 3344,
    "range": [
      3343,
      3344
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3344,
    "end": 3345,
    "range": [
      3344,
      3345
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3345,
    "end": 3346,
    "range": [
      3345,
      3346
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3346,
    "end": 3347,
    "range": [
      3346,
      3347
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3352,
    "end": 3353,
    "range": [
      3352,
      3353
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3358,
    "end": 3360,
    "range": [
      3358,
      3360
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3361,
    "end": 3362,
    "range": [
      3361,
      3362
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3362,
    "end": 3363,
    "range": [
      3362,
      3363
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3364,
    "end": 3366,
    "range": [
      3364,
      3366
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3367,
    "end": 3373,
    "range": [
      3367,
      3373
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3374,
    "end": 3375,
    "range": [
      3374,
      3375
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3376,
    "end": 3379,
    "range": [
      3376,
      3379
    ]
  },
  {
    "type": "String",
    "value": "\"object\"",
    "start": 3380,
    "end": 3388,
    "range": [
      3380,
      3388
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3389,
    "end": 3391,
    "range": [
      3389,
      3391
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 3392,
    "end": 3395,
    "range": [
      3392,
      3395
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3396,
    "end": 3398,
    "range": [
      3396,
      3398
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3399,
    "end": 3400,
    "range": [
      3399,
      3400
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3400,
    "end": 3401,
    "range": [
      3400,
      3401
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3402,
    "end": 3403,
    "range": [
      3402,
      3403
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3412,
    "end": 3413,
    "range": [
      3412,
      3413
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3413,
    "end": 3414,
    "range": [
      3413,
      3414
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3414,
    "end": 3415,
    "range": [
      3414,
      3415
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3415,
    "end": 3416,
    "range": [
      3415,
      3416
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3421,
    "end": 3422,
    "range": [
      3421,
      3422
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3427,
    "end": 3429,
    "range": [
      3427,
      3429
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3430,
    "end": 3431,
    "range": [
      3430,
      3431
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3431,
    "end": 3432,
    "range": [
      3431,
      3432
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3433,
    "end": 3435,
    "range": [
      3433,
      3435
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3436,
    "end": 3442,
    "range": [
      3436,
      3442
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3443,
    "end": 3444,
    "range": [
      3443,
      3444
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3445,
    "end": 3448,
    "range": [
      3445,
      3448
    ]
  },
  {
    "type": "String",
    "value": "\"object\"",
    "start": 3449,
    "end": 3457,
    "range": [
      3449,
      3457
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3458,
    "end": 3460,
    "range": [
      3458,
      3460
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 3461,
    "end": 3464,
    "range": [
      3461,
      3464
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3465,
    "end": 3467,
    "range": [
      3465,
      3467
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3468,
    "end": 3469,
    "range": [
      3468,
      3469
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3470,
    "end": 3472,
    "range": [
      3470,
      3472
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 3473,
    "end": 3476,
    "range": [
      3473,
      3476
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3477,
    "end": 3479,
    "range": [
      3477,
      3479
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3480,
    "end": 3481,
    "range": [
      3480,
      3481
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3482,
    "end": 3484,
    "range": [
      3482,
      3484
    ]
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 3485,
    "end": 3488,
    "range": [
      3485,
      3488
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3489,
    "end": 3491,
    "range": [
      3489,
      3491
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3492,
    "end": 3493,
    "range": [
      3492,
      3493
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3493,
    "end": 3494,
    "range": [
      3493,
      3494
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3495,
    "end": 3496,
    "range": [
      3495,
      3496
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3505,
    "end": 3506,
    "range": [
      3505,
      3506
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3506,
    "end": 3507,
    "range": [
      3506,
      3507
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3507,
    "end": 3508,
    "range": [
      3507,
      3508
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3508,
    "end": 3509,
    "range": [
      3508,
      3509
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3518,
    "end": 3519,
    "range": [
      3518,
      3519
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3519,
    "end": 3520,
    "range": [
      3519,
      3520
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3520,
    "end": 3521,
    "range": [
      3520,
      3521
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3521,
    "end": 3522,
    "range": [
      3521,
      3522
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3531,
    "end": 3532,
    "range": [
      3531,
      3532
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3532,
    "end": 3533,
    "range": [
      3532,
      3533
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3533,
    "end": 3534,
    "range": [
      3533,
      3534
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3534,
    "end": 3535,
    "range": [
      3534,
      3535
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3540,
    "end": 3541,
    "range": [
      3540,
      3541
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3542,
    "end": 3543,
    "range": [
      3542,
      3543
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3545,
    "end": 3553,
    "range": [
      3545,
      3553
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 3554,
    "end": 3556,
    "range": [
      3554,
      3556
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3556,
    "end": 3557,
    "range": [
      3556,
      3557
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3557,
    "end": 3558,
    "range": [
      3557,
      3558
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3558,
    "end": 3559,
    "range": [
      3558,
      3559
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3560,
    "end": 3561,
    "range": [
      3560,
      3561
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3562,
    "end": 3563,
    "range": [
      3562,
      3563
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3563,
    "end": 3564,
    "range": [
      3563,
      3564
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3565,
    "end": 3571,
    "range": [
      3565,
      3571
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3572,
    "end": 3573,
    "range": [
      3572,
      3573
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3573,
    "end": 3574,
    "range": [
      3573,
      3574
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3575,
    "end": 3576,
    "range": [
      3575,
      3576
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3581,
    "end": 3583,
    "range": [
      3581,
      3583
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3584,
    "end": 3585,
    "range": [
      3584,
      3585
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 3585,
    "end": 3588,
    "range": [
      3585,
      3588
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3589,
    "end": 3591,
    "range": [
      3589,
      3591
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3592,
    "end": 3593,
    "range": [
      3592,
      3593
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3593,
    "end": 3594,
    "range": [
      3593,
      3594
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3595,
    "end": 3596,
    "range": [
      3595,
      3596
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3605,
    "end": 3606,
    "range": [
      3605,
      3606
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3606,
    "end": 3607,
    "range": [
      3606,
      3607
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3607,
    "end": 3608,
    "range": [
      3607,
      3608
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3608,
    "end": 3609,
    "range": [
      3608,
      3609
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3614,
    "end": 3615,
    "range": [
      3614,
      3615
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3620,
    "end": 3622,
    "range": [
      3620,
      3622
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3623,
    "end": 3624,
    "range": [
      3623,
      3624
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 3624,
    "end": 3627,
    "range": [
      3624,
      3627
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3628,
    "end": 3630,
    "range": [
      3628,
      3630
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3631,
    "end": 3632,
    "range": [
      3631,
      3632
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3633,
    "end": 3635,
    "range": [
      3633,
      3635
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 3636,
    "end": 3639,
    "range": [
      3636,
      3639
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3640,
    "end": 3642,
    "range": [
      3640,
      3642
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3643,
    "end": 3644,
    "range": [
      3643,
      3644
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3645,
    "end": 3647,
    "range": [
      3645,
      3647
    ]
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 3648,
    "end": 3651,
    "range": [
      3648,
      3651
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3652,
    "end": 3654,
    "range": [
      3652,
      3654
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3655,
    "end": 3656,
    "range": [
      3655,
      3656
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3656,
    "end": 3657,
    "range": [
      3656,
      3657
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3658,
    "end": 3659,
    "range": [
      3658,
      3659
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3668,
    "end": 3669,
    "range": [
      3668,
      3669
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3669,
    "end": 3670,
    "range": [
      3669,
      3670
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3670,
    "end": 3671,
    "range": [
      3670,
      3671
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3671,
    "end": 3672,
    "range": [
      3671,
      3672
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3681,
    "end": 3682,
    "range": [
      3681,
      3682
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3682,
    "end": 3683,
    "range": [
      3682,
      3683
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3683,
    "end": 3684,
    "range": [
      3683,
      3684
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3684,
    "end": 3685,
    "range": [
      3684,
      3685
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3694,
    "end": 3695,
    "range": [
      3694,
      3695
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3695,
    "end": 3696,
    "range": [
      3695,
      3696
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3696,
    "end": 3697,
    "range": [
      3696,
      3697
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3697,
    "end": 3698,
    "range": [
      3697,
      3698
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3703,
    "end": 3704,
    "range": [
      3703,
      3704
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3705,
    "end": 3706,
    "range": [
      3705,
      3706
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3708,
    "end": 3716,
    "range": [
      3708,
      3716
    ]
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 3717,
    "end": 3719,
    "range": [
      3717,
      3719
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3719,
    "end": 3720,
    "range": [
      3719,
      3720
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3720,
    "end": 3721,
    "range": [
      3720,
      3721
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3721,
    "end": 3722,
    "range": [
      3721,
      3722
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3723,
    "end": 3724,
    "range": [
      3723,
      3724
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3725,
    "end": 3726,
    "range": [
      3725,
      3726
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3726,
    "end": 3727,
    "range": [
      3726,
      3727
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3728,
    "end": 3734,
    "range": [
      3728,
      3734
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3735,
    "end": 3736,
    "range": [
      3735,
      3736
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3737,
    "end": 3738,
    "range": [
      3737,
      3738
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3739,
    "end": 3740,
    "range": [
      3739,
      3740
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3741,
    "end": 3742,
    "range": [
      3741,
      3742
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3742,
    "end": 3743,
    "range": [
      3742,
      3743
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3744,
    "end": 3750,
    "range": [
      3744,
      3750
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3751,
    "end": 3752,
    "range": [
      3751,
      3752
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3752,
    "end": 3753,
    "range": [
      3752,
      3753
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3754,
    "end": 3755,
    "range": [
      3754,
      3755
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3760,
    "end": 3762,
    "range": [
      3760,
      3762
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3763,
    "end": 3764,
    "range": [
      3763,
      3764
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 3764,
    "end": 3767,
    "range": [
      3764,
      3767
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3768,
    "end": 3770,
    "range": [
      3768,
      3770
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3771,
    "end": 3772,
    "range": [
      3771,
      3772
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3772,
    "end": 3773,
    "range": [
      3772,
      3773
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3774,
    "end": 3775,
    "range": [
      3774,
      3775
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3784,
    "end": 3785,
    "range": [
      3784,
      3785
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3785,
    "end": 3786,
    "range": [
      3785,
      3786
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3809,
    "end": 3810,
    "range": [
      3809,
      3810
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 3815,
    "end": 3819,
    "range": [
      3815,
      3819
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3820,
    "end": 3822,
    "range": [
      3820,
      3822
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3823,
    "end": 3824,
    "range": [
      3823,
      3824
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 3824,
    "end": 3827,
    "range": [
      3824,
      3827
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3828,
    "end": 3830,
    "range": [
      3828,
      3830
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3831,
    "end": 3832,
    "range": [
      3831,
      3832
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3832,
    "end": 3833,
    "range": [
      3832,
      3833
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3834,
    "end": 3835,
    "range": [
      3834,
      3835
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3844,
    "end": 3845,
    "range": [
      3844,
      3845
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3845,
    "end": 3846,
    "range": [
      3845,
      3846
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3869,
    "end": 3870,
    "range": [
      3869,
      3870
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 3875,
    "end": 3879,
    "range": [
      3875,
      3879
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3880,
    "end": 3881,
    "range": [
      3880,
      3881
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3890,
    "end": 3891,
    "range": [
      3890,
      3891
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3891,
    "end": 3892,
    "range": [
      3891,
      3892
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3907,
    "end": 3908,
    "range": [
      3907,
      3908
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3909,
    "end": 3910,
    "range": [
      3909,
      3910
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3912,
    "end": 3920,
    "range": [
      3912,
      3920
    ]
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 3921,
    "end": 3923,
    "range": [
      3921,
      3923
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3923,
    "end": 3924,
    "range": [
      3923,
      3924
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3924,
    "end": 3925,
    "range": [
      3924,
      3925
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3925,
    "end": 3926,
    "range": [
      3925,
      3926
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3927,
    "end": 3928,
    "range": [
      3927,
      3928
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3929,
    "end": 3930,
    "range": [
      3929,
      3930
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3930,
    "end": 3931,
    "range": [
      3930,
      3931
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3932,
    "end": 3938,
    "range": [
      3932,
      3938
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3939,
    "end": 3940,
    "range": [
      3939,
      3940
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3941,
    "end": 3942,
    "range": [
      3941,
      3942
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3943,
    "end": 3944,
    "range": [
      3943,
      3944
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3945,
    "end": 3946,
    "range": [
      3945,
      3946
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3946,
    "end": 3947,
    "range": [
      3946,
      3947
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3948,
    "end": 3954,
    "range": [
      3948,
      3954
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3955,
    "end": 3956,
    "range": [
      3955,
      3956
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3956,
    "end": 3957,
    "range": [
      3956,
      3957
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3958,
    "end": 3959,
    "range": [
      3958,
      3959
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3964,
    "end": 3966,
    "range": [
      3964,
      3966
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3967,
    "end": 3968,
    "range": [
      3967,
      3968
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 3968,
    "end": 3971,
    "range": [
      3968,
      3971
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3972,
    "end": 3974,
    "range": [
      3972,
      3974
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3975,
    "end": 3976,
    "range": [
      3975,
      3976
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3976,
    "end": 3977,
    "range": [
      3976,
      3977
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3978,
    "end": 3979,
    "range": [
      3978,
      3979
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3988,
    "end": 3989,
    "range": [
      3988,
      3989
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3989,
    "end": 3990,
    "range": [
      3989,
      3990
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4013,
    "end": 4014,
    "range": [
      4013,
      4014
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 4019,
    "end": 4023,
    "range": [
      4019,
      4023
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4024,
    "end": 4026,
    "range": [
      4024,
      4026
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4027,
    "end": 4028,
    "range": [
      4027,
      4028
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 4028,
    "end": 4031,
    "range": [
      4028,
      4031
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4032,
    "end": 4034,
    "range": [
      4032,
      4034
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4035,
    "end": 4036,
    "range": [
      4035,
      4036
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4036,
    "end": 4037,
    "range": [
      4036,
      4037
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4038,
    "end": 4039,
    "range": [
      4038,
      4039
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4048,
    "end": 4049,
    "range": [
      4048,
      4049
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4049,
    "end": 4050,
    "range": [
      4049,
      4050
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4096,
    "end": 4097,
    "range": [
      4096,
      4097
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 4102,
    "end": 4106,
    "range": [
      4102,
      4106
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4107,
    "end": 4108,
    "range": [
      4107,
      4108
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4117,
    "end": 4118,
    "range": [
      4117,
      4118
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4118,
    "end": 4119,
    "range": [
      4118,
      4119
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4142,
    "end": 4143,
    "range": [
      4142,
      4143
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4144,
    "end": 4145,
    "range": [
      4144,
      4145
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4212,
    "end": 4220,
    "range": [
      4212,
      4220
    ]
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 4221,
    "end": 4223,
    "range": [
      4221,
      4223
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4223,
    "end": 4224,
    "range": [
      4223,
      4224
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4224,
    "end": 4225,
    "range": [
      4224,
      4225
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4225,
    "end": 4226,
    "range": [
      4225,
      4226
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4227,
    "end": 4228,
    "range": [
      4227,
      4228
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4229,
    "end": 4230,
    "range": [
      4229,
      4230
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4230,
    "end": 4231,
    "range": [
      4230,
      4231
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4232,
    "end": 4238,
    "range": [
      4232,
      4238
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4238,
    "end": 4239,
    "range": [
      4238,
      4239
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4240,
    "end": 4241,
    "range": [
      4240,
      4241
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4241,
    "end": 4242,
    "range": [
      4241,
      4242
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4243,
    "end": 4249,
    "range": [
      4243,
      4249
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4250,
    "end": 4251,
    "range": [
      4250,
      4251
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4251,
    "end": 4252,
    "range": [
      4251,
      4252
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4253,
    "end": 4254,
    "range": [
      4253,
      4254
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4254,
    "end": 4255,
    "range": [
      4254,
      4255
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4256,
    "end": 4257,
    "range": [
      4256,
      4257
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4258,
    "end": 4259,
    "range": [
      4258,
      4259
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4259,
    "end": 4260,
    "range": [
      4259,
      4260
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4261,
    "end": 4267,
    "range": [
      4261,
      4267
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4268,
    "end": 4269,
    "range": [
      4268,
      4269
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 4270,
    "end": 4271,
    "range": [
      4270,
      4271
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4272,
    "end": 4273,
    "range": [
      4272,
      4273
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4274,
    "end": 4275,
    "range": [
      4274,
      4275
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4275,
    "end": 4276,
    "range": [
      4275,
      4276
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4277,
    "end": 4283,
    "range": [
      4277,
      4283
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4284,
    "end": 4285,
    "range": [
      4284,
      4285
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4285,
    "end": 4286,
    "range": [
      4285,
      4286
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4287,
    "end": 4288,
    "range": [
      4287,
      4288
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4293,
    "end": 4295,
    "range": [
      4293,
      4295
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4296,
    "end": 4297,
    "range": [
      4296,
      4297
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 4297,
    "end": 4300,
    "range": [
      4297,
      4300
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4301,
    "end": 4303,
    "range": [
      4301,
      4303
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4304,
    "end": 4305,
    "range": [
      4304,
      4305
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4305,
    "end": 4306,
    "range": [
      4305,
      4306
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4307,
    "end": 4308,
    "range": [
      4307,
      4308
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4317,
    "end": 4318,
    "range": [
      4317,
      4318
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4318,
    "end": 4319,
    "range": [
      4318,
      4319
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4324,
    "end": 4325,
    "range": [
      4324,
      4325
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 4330,
    "end": 4334,
    "range": [
      4330,
      4334
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4335,
    "end": 4336,
    "range": [
      4335,
      4336
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4345,
    "end": 4346,
    "range": [
      4345,
      4346
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4346,
    "end": 4347,
    "range": [
      4346,
      4347
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4362,
    "end": 4363,
    "range": [
      4362,
      4363
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4368,
    "end": 4370,
    "range": [
      4368,
      4370
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4371,
    "end": 4372,
    "range": [
      4371,
      4372
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 4372,
    "end": 4375,
    "range": [
      4372,
      4375
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4376,
    "end": 4378,
    "range": [
      4376,
      4378
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4379,
    "end": 4380,
    "range": [
      4379,
      4380
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4380,
    "end": 4381,
    "range": [
      4380,
      4381
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4382,
    "end": 4383,
    "range": [
      4382,
      4383
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4392,
    "end": 4393,
    "range": [
      4392,
      4393
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4393,
    "end": 4394,
    "range": [
      4393,
      4394
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4399,
    "end": 4400,
    "range": [
      4399,
      4400
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 4405,
    "end": 4409,
    "range": [
      4405,
      4409
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4410,
    "end": 4411,
    "range": [
      4410,
      4411
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4420,
    "end": 4421,
    "range": [
      4420,
      4421
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4421,
    "end": 4422,
    "range": [
      4421,
      4422
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4437,
    "end": 4438,
    "range": [
      4437,
      4438
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4439,
    "end": 4440,
    "range": [
      4439,
      4440
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4442,
    "end": 4447,
    "range": [
      4442,
      4447
    ]
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 4448,
    "end": 4451,
    "range": [
      4448,
      4451
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4452,
    "end": 4453,
    "range": [
      4452,
      4453
    ]
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 4454,
    "end": 4460,
    "range": [
      4454,
      4460
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4460,
    "end": 4461,
    "range": [
      4460,
      4461
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4461,
    "end": 4462,
    "range": [
      4461,
      4462
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4462,
    "end": 4463,
    "range": [
      4462,
      4463
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4465,
    "end": 4473,
    "range": [
      4465,
      4473
    ]
  },
  {
    "type": "Identifier",
    "value": "f8",
    "start": 4474,
    "end": 4476,
    "range": [
      4474,
      4476
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4476,
    "end": 4477,
    "range": [
      4476,
      4477
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4477,
    "end": 4478,
    "range": [
      4477,
      4478
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4478,
    "end": 4479,
    "range": [
      4478,
      4479
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 4480,
    "end": 4486,
    "range": [
      4480,
      4486
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4486,
    "end": 4487,
    "range": [
      4486,
      4487
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4488,
    "end": 4489,
    "range": [
      4488,
      4489
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4494,
    "end": 4496,
    "range": [
      4494,
      4496
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4497,
    "end": 4498,
    "range": [
      4497,
      4498
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 4498,
    "end": 4501,
    "range": [
      4498,
      4501
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4502,
    "end": 4504,
    "range": [
      4502,
      4504
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4505,
    "end": 4506,
    "range": [
      4505,
      4506
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4507,
    "end": 4509,
    "range": [
      4507,
      4509
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4510,
    "end": 4511,
    "range": [
      4510,
      4511
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4512,
    "end": 4514,
    "range": [
      4512,
      4514
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4515,
    "end": 4516,
    "range": [
      4515,
      4516
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4517,
    "end": 4519,
    "range": [
      4517,
      4519
    ]
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 4520,
    "end": 4523,
    "range": [
      4520,
      4523
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4524,
    "end": 4526,
    "range": [
      4524,
      4526
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4527,
    "end": 4528,
    "range": [
      4527,
      4528
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4528,
    "end": 4529,
    "range": [
      4528,
      4529
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4530,
    "end": 4531,
    "range": [
      4530,
      4531
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4540,
    "end": 4541,
    "range": [
      4540,
      4541
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4541,
    "end": 4542,
    "range": [
      4541,
      4542
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4542,
    "end": 4543,
    "range": [
      4542,
      4543
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4543,
    "end": 4544,
    "range": [
      4543,
      4544
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4553,
    "end": 4554,
    "range": [
      4553,
      4554
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4554,
    "end": 4555,
    "range": [
      4554,
      4555
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 4555,
    "end": 4558,
    "range": [
      4555,
      4558
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4558,
    "end": 4559,
    "range": [
      4558,
      4559
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4559,
    "end": 4560,
    "range": [
      4559,
      4560
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4569,
    "end": 4570,
    "range": [
      4569,
      4570
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4570,
    "end": 4571,
    "range": [
      4570,
      4571
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4571,
    "end": 4572,
    "range": [
      4571,
      4572
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4572,
    "end": 4573,
    "range": [
      4572,
      4573
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4573,
    "end": 4574,
    "range": [
      4573,
      4574
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4583,
    "end": 4584,
    "range": [
      4583,
      4584
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4584,
    "end": 4585,
    "range": [
      4584,
      4585
    ]
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 4585,
    "end": 4588,
    "range": [
      4585,
      4588
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4588,
    "end": 4589,
    "range": [
      4588,
      4589
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4589,
    "end": 4590,
    "range": [
      4589,
      4590
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4599,
    "end": 4600,
    "range": [
      4599,
      4600
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4600,
    "end": 4601,
    "range": [
      4600,
      4601
    ]
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 4601,
    "end": 4604,
    "range": [
      4601,
      4604
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4604,
    "end": 4605,
    "range": [
      4604,
      4605
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4605,
    "end": 4606,
    "range": [
      4605,
      4606
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4611,
    "end": 4612,
    "range": [
      4611,
      4612
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4613,
    "end": 4614,
    "range": [
      4613,
      4614
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4616,
    "end": 4624,
    "range": [
      4616,
      4624
    ]
  },
  {
    "type": "Identifier",
    "value": "f9",
    "start": 4625,
    "end": 4627,
    "range": [
      4625,
      4627
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4627,
    "end": 4628,
    "range": [
      4627,
      4628
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4628,
    "end": 4629,
    "range": [
      4628,
      4629
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4629,
    "end": 4630,
    "range": [
      4629,
      4630
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 4631,
    "end": 4637,
    "range": [
      4631,
      4637
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4637,
    "end": 4638,
    "range": [
      4637,
      4638
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4639,
    "end": 4640,
    "range": [
      4639,
      4640
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4645,
    "end": 4647,
    "range": [
      4645,
      4647
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4648,
    "end": 4649,
    "range": [
      4648,
      4649
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 4649,
    "end": 4652,
    "range": [
      4649,
      4652
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4653,
    "end": 4655,
    "range": [
      4653,
      4655
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4656,
    "end": 4657,
    "range": [
      4656,
      4657
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4658,
    "end": 4660,
    "range": [
      4658,
      4660
    ]
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 4661,
    "end": 4664,
    "range": [
      4661,
      4664
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4665,
    "end": 4667,
    "range": [
      4665,
      4667
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4668,
    "end": 4669,
    "range": [
      4668,
      4669
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4670,
    "end": 4672,
    "range": [
      4670,
      4672
    ]
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 4673,
    "end": 4676,
    "range": [
      4673,
      4676
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4677,
    "end": 4679,
    "range": [
      4677,
      4679
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4680,
    "end": 4681,
    "range": [
      4680,
      4681
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4681,
    "end": 4682,
    "range": [
      4681,
      4682
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4683,
    "end": 4684,
    "range": [
      4683,
      4684
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4693,
    "end": 4694,
    "range": [
      4693,
      4694
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4694,
    "end": 4695,
    "range": [
      4694,
      4695
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4695,
    "end": 4696,
    "range": [
      4695,
      4696
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4696,
    "end": 4697,
    "range": [
      4696,
      4697
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4706,
    "end": 4707,
    "range": [
      4706,
      4707
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4707,
    "end": 4708,
    "range": [
      4707,
      4708
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 4708,
    "end": 4711,
    "range": [
      4708,
      4711
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4711,
    "end": 4712,
    "range": [
      4711,
      4712
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4712,
    "end": 4713,
    "range": [
      4712,
      4713
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4722,
    "end": 4723,
    "range": [
      4722,
      4723
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4723,
    "end": 4724,
    "range": [
      4723,
      4724
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4724,
    "end": 4725,
    "range": [
      4724,
      4725
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4725,
    "end": 4726,
    "range": [
      4725,
      4726
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4726,
    "end": 4727,
    "range": [
      4726,
      4727
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4736,
    "end": 4737,
    "range": [
      4736,
      4737
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4737,
    "end": 4738,
    "range": [
      4737,
      4738
    ]
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 4738,
    "end": 4741,
    "range": [
      4738,
      4741
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4741,
    "end": 4742,
    "range": [
      4741,
      4742
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4742,
    "end": 4743,
    "range": [
      4742,
      4743
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4752,
    "end": 4753,
    "range": [
      4752,
      4753
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4753,
    "end": 4754,
    "range": [
      4753,
      4754
    ]
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 4754,
    "end": 4757,
    "range": [
      4754,
      4757
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4757,
    "end": 4758,
    "range": [
      4757,
      4758
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4758,
    "end": 4759,
    "range": [
      4758,
      4759
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4764,
    "end": 4765,
    "range": [
      4764,
      4765
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4766,
    "end": 4767,
    "range": [
      4766,
      4767
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4769,
    "end": 4777,
    "range": [
      4769,
      4777
    ]
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 4778,
    "end": 4781,
    "range": [
      4778,
      4781
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4781,
    "end": 4782,
    "range": [
      4781,
      4782
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4782,
    "end": 4783,
    "range": [
      4782,
      4783
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4783,
    "end": 4784,
    "range": [
      4783,
      4784
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4785,
    "end": 4786,
    "range": [
      4785,
      4786
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4787,
    "end": 4788,
    "range": [
      4787,
      4788
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4788,
    "end": 4789,
    "range": [
      4788,
      4789
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4790,
    "end": 4797,
    "range": [
      4790,
      4797
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4798,
    "end": 4799,
    "range": [
      4798,
      4799
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4799,
    "end": 4800,
    "range": [
      4799,
      4800
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4801,
    "end": 4802,
    "range": [
      4801,
      4802
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4807,
    "end": 4809,
    "range": [
      4807,
      4809
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4810,
    "end": 4811,
    "range": [
      4810,
      4811
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 4811,
    "end": 4814,
    "range": [
      4811,
      4814
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4815,
    "end": 4817,
    "range": [
      4815,
      4817
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4818,
    "end": 4819,
    "range": [
      4818,
      4819
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4819,
    "end": 4820,
    "range": [
      4819,
      4820
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4821,
    "end": 4822,
    "range": [
      4821,
      4822
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4831,
    "end": 4832,
    "range": [
      4831,
      4832
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4832,
    "end": 4833,
    "range": [
      4832,
      4833
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4838,
    "end": 4839,
    "range": [
      4838,
      4839
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 4844,
    "end": 4848,
    "range": [
      4844,
      4848
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4849,
    "end": 4850,
    "range": [
      4849,
      4850
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4859,
    "end": 4860,
    "range": [
      4859,
      4860
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4860,
    "end": 4861,
    "range": [
      4860,
      4861
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4866,
    "end": 4867,
    "range": [
      4866,
      4867
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4868,
    "end": 4869,
    "range": [
      4868,
      4869
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4871,
    "end": 4879,
    "range": [
      4871,
      4879
    ]
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 4880,
    "end": 4883,
    "range": [
      4880,
      4883
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4883,
    "end": 4884,
    "range": [
      4883,
      4884
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4884,
    "end": 4885,
    "range": [
      4884,
      4885
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4885,
    "end": 4886,
    "range": [
      4885,
      4886
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4887,
    "end": 4888,
    "range": [
      4887,
      4888
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4889,
    "end": 4890,
    "range": [
      4889,
      4890
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4890,
    "end": 4891,
    "range": [
      4890,
      4891
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4892,
    "end": 4895,
    "range": [
      4892,
      4895
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4896,
    "end": 4897,
    "range": [
      4896,
      4897
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4897,
    "end": 4898,
    "range": [
      4897,
      4898
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4899,
    "end": 4900,
    "range": [
      4899,
      4900
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4905,
    "end": 4907,
    "range": [
      4905,
      4907
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4908,
    "end": 4909,
    "range": [
      4908,
      4909
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 4909,
    "end": 4912,
    "range": [
      4909,
      4912
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4913,
    "end": 4915,
    "range": [
      4913,
      4915
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4916,
    "end": 4917,
    "range": [
      4916,
      4917
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4917,
    "end": 4918,
    "range": [
      4917,
      4918
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4919,
    "end": 4920,
    "range": [
      4919,
      4920
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4929,
    "end": 4930,
    "range": [
      4929,
      4930
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4930,
    "end": 4931,
    "range": [
      4930,
      4931
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4936,
    "end": 4937,
    "range": [
      4936,
      4937
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 4942,
    "end": 4946,
    "range": [
      4942,
      4946
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4947,
    "end": 4948,
    "range": [
      4947,
      4948
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4957,
    "end": 4958,
    "range": [
      4957,
      4958
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4958,
    "end": 4959,
    "range": [
      4958,
      4959
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4964,
    "end": 4965,
    "range": [
      4964,
      4965
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4966,
    "end": 4967,
    "range": [
      4966,
      4967
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4969,
    "end": 4977,
    "range": [
      4969,
      4977
    ]
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 4978,
    "end": 4981,
    "range": [
      4978,
      4981
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4981,
    "end": 4982,
    "range": [
      4981,
      4982
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4982,
    "end": 4983,
    "range": [
      4982,
      4983
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4983,
    "end": 4984,
    "range": [
      4983,
      4984
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4985,
    "end": 4986,
    "range": [
      4985,
      4986
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4987,
    "end": 4988,
    "range": [
      4987,
      4988
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4988,
    "end": 4989,
    "range": [
      4988,
      4989
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4990,
    "end": 4996,
    "range": [
      4990,
      4996
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4997,
    "end": 4998,
    "range": [
      4997,
      4998
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4998,
    "end": 4999,
    "range": [
      4998,
      4999
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5000,
    "end": 5001,
    "range": [
      5000,
      5001
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5006,
    "end": 5008,
    "range": [
      5006,
      5008
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5009,
    "end": 5010,
    "range": [
      5009,
      5010
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 5010,
    "end": 5013,
    "range": [
      5010,
      5013
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 5014,
    "end": 5016,
    "range": [
      5014,
      5016
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5017,
    "end": 5018,
    "range": [
      5017,
      5018
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5018,
    "end": 5019,
    "range": [
      5018,
      5019
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5020,
    "end": 5021,
    "range": [
      5020,
      5021
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5030,
    "end": 5031,
    "range": [
      5030,
      5031
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5031,
    "end": 5032,
    "range": [
      5031,
      5032
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5037,
    "end": 5038,
    "range": [
      5037,
      5038
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 5043,
    "end": 5047,
    "range": [
      5043,
      5047
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5048,
    "end": 5049,
    "range": [
      5048,
      5049
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5058,
    "end": 5059,
    "range": [
      5058,
      5059
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5059,
    "end": 5060,
    "range": [
      5059,
      5060
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5065,
    "end": 5066,
    "range": [
      5065,
      5066
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5067,
    "end": 5068,
    "range": [
      5067,
      5068
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5070,
    "end": 5078,
    "range": [
      5070,
      5078
    ]
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 5079,
    "end": 5082,
    "range": [
      5079,
      5082
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5082,
    "end": 5083,
    "range": [
      5082,
      5083
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5083,
    "end": 5084,
    "range": [
      5083,
      5084
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5084,
    "end": 5085,
    "range": [
      5084,
      5085
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5086,
    "end": 5087,
    "range": [
      5086,
      5087
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 5088,
    "end": 5089,
    "range": [
      5088,
      5089
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5089,
    "end": 5090,
    "range": [
      5089,
      5090
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5090,
    "end": 5091,
    "range": [
      5090,
      5091
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5092,
    "end": 5098,
    "range": [
      5092,
      5098
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5099,
    "end": 5100,
    "range": [
      5099,
      5100
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5100,
    "end": 5101,
    "range": [
      5100,
      5101
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5102,
    "end": 5103,
    "range": [
      5102,
      5103
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5108,
    "end": 5110,
    "range": [
      5108,
      5110
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5111,
    "end": 5112,
    "range": [
      5111,
      5112
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 5112,
    "end": 5115,
    "range": [
      5112,
      5115
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 5116,
    "end": 5118,
    "range": [
      5116,
      5118
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5119,
    "end": 5120,
    "range": [
      5119,
      5120
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5120,
    "end": 5121,
    "range": [
      5120,
      5121
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5122,
    "end": 5123,
    "range": [
      5122,
      5123
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5132,
    "end": 5133,
    "range": [
      5132,
      5133
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5133,
    "end": 5134,
    "range": [
      5133,
      5134
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5139,
    "end": 5140,
    "range": [
      5139,
      5140
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 5145,
    "end": 5149,
    "range": [
      5145,
      5149
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5150,
    "end": 5151,
    "range": [
      5150,
      5151
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5160,
    "end": 5161,
    "range": [
      5160,
      5161
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5161,
    "end": 5162,
    "range": [
      5161,
      5162
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5167,
    "end": 5168,
    "range": [
      5167,
      5168
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5169,
    "end": 5170,
    "range": [
      5169,
      5170
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5172,
    "end": 5180,
    "range": [
      5172,
      5180
    ]
  },
  {
    "type": "Identifier",
    "value": "f14",
    "start": 5181,
    "end": 5184,
    "range": [
      5181,
      5184
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5184,
    "end": 5185,
    "range": [
      5184,
      5185
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5185,
    "end": 5186,
    "range": [
      5185,
      5186
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5186,
    "end": 5187,
    "range": [
      5186,
      5187
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5188,
    "end": 5189,
    "range": [
      5188,
      5189
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 5190,
    "end": 5191,
    "range": [
      5190,
      5191
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5191,
    "end": 5192,
    "range": [
      5191,
      5192
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5193,
    "end": 5199,
    "range": [
      5193,
      5199
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5200,
    "end": 5201,
    "range": [
      5200,
      5201
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 5202,
    "end": 5211,
    "range": [
      5202,
      5211
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5212,
    "end": 5213,
    "range": [
      5212,
      5213
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5213,
    "end": 5214,
    "range": [
      5213,
      5214
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5215,
    "end": 5216,
    "range": [
      5215,
      5216
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5221,
    "end": 5223,
    "range": [
      5221,
      5223
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5224,
    "end": 5225,
    "range": [
      5224,
      5225
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 5225,
    "end": 5228,
    "range": [
      5225,
      5228
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 5229,
    "end": 5231,
    "range": [
      5229,
      5231
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5232,
    "end": 5233,
    "range": [
      5232,
      5233
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5233,
    "end": 5234,
    "range": [
      5233,
      5234
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5235,
    "end": 5236,
    "range": [
      5235,
      5236
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5245,
    "end": 5246,
    "range": [
      5245,
      5246
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5246,
    "end": 5247,
    "range": [
      5246,
      5247
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5252,
    "end": 5253,
    "range": [
      5252,
      5253
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 5258,
    "end": 5262,
    "range": [
      5258,
      5262
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5263,
    "end": 5264,
    "range": [
      5263,
      5264
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5273,
    "end": 5274,
    "range": [
      5273,
      5274
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5274,
    "end": 5275,
    "range": [
      5274,
      5275
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5280,
    "end": 5281,
    "range": [
      5280,
      5281
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5282,
    "end": 5283,
    "range": [
      5282,
      5283
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5285,
    "end": 5293,
    "range": [
      5285,
      5293
    ]
  },
  {
    "type": "Identifier",
    "value": "f15",
    "start": 5294,
    "end": 5297,
    "range": [
      5294,
      5297
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5297,
    "end": 5298,
    "range": [
      5297,
      5298
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5298,
    "end": 5299,
    "range": [
      5298,
      5299
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5299,
    "end": 5300,
    "range": [
      5299,
      5300
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5301,
    "end": 5302,
    "range": [
      5301,
      5302
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 5303,
    "end": 5304,
    "range": [
      5303,
      5304
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5304,
    "end": 5305,
    "range": [
      5304,
      5305
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5305,
    "end": 5306,
    "range": [
      5305,
      5306
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5307,
    "end": 5313,
    "range": [
      5307,
      5313
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5314,
    "end": 5315,
    "range": [
      5314,
      5315
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 5316,
    "end": 5325,
    "range": [
      5316,
      5325
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5326,
    "end": 5327,
    "range": [
      5326,
      5327
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5327,
    "end": 5328,
    "range": [
      5327,
      5328
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5329,
    "end": 5330,
    "range": [
      5329,
      5330
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5335,
    "end": 5337,
    "range": [
      5335,
      5337
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5338,
    "end": 5339,
    "range": [
      5338,
      5339
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 5339,
    "end": 5342,
    "range": [
      5339,
      5342
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 5343,
    "end": 5345,
    "range": [
      5343,
      5345
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5346,
    "end": 5347,
    "range": [
      5346,
      5347
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5347,
    "end": 5348,
    "range": [
      5347,
      5348
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5349,
    "end": 5350,
    "range": [
      5349,
      5350
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5359,
    "end": 5360,
    "range": [
      5359,
      5360
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5360,
    "end": 5361,
    "range": [
      5360,
      5361
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5366,
    "end": 5367,
    "range": [
      5366,
      5367
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 5372,
    "end": 5376,
    "range": [
      5372,
      5376
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5377,
    "end": 5378,
    "range": [
      5377,
      5378
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5387,
    "end": 5388,
    "range": [
      5387,
      5388
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5388,
    "end": 5389,
    "range": [
      5388,
      5389
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5394,
    "end": 5395,
    "range": [
      5394,
      5395
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5396,
    "end": 5397,
    "range": [
      5396,
      5397
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5399,
    "end": 5407,
    "range": [
      5399,
      5407
    ]
  },
  {
    "type": "Identifier",
    "value": "f16",
    "start": 5408,
    "end": 5411,
    "range": [
      5408,
      5411
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5411,
    "end": 5412,
    "range": [
      5411,
      5412
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5412,
    "end": 5413,
    "range": [
      5412,
      5413
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5413,
    "end": 5414,
    "range": [
      5413,
      5414
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 5415,
    "end": 5421,
    "range": [
      5415,
      5421
    ]
  },
  {
    "type": "Identifier",
    "value": "globalThis",
    "start": 5422,
    "end": 5432,
    "range": [
      5422,
      5432
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5432,
    "end": 5433,
    "range": [
      5432,
      5433
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 5434,
    "end": 5435,
    "range": [
      5434,
      5435
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5435,
    "end": 5436,
    "range": [
      5435,
      5436
    ]
  },
  {
    "type": "Identifier",
    "value": "Window",
    "start": 5437,
    "end": 5443,
    "range": [
      5437,
      5443
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 5444,
    "end": 5445,
    "range": [
      5444,
      5445
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 5446,
    "end": 5452,
    "range": [
      5446,
      5452
    ]
  },
  {
    "type": "Identifier",
    "value": "globalThis",
    "start": 5453,
    "end": 5463,
    "range": [
      5453,
      5463
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5463,
    "end": 5464,
    "range": [
      5463,
      5464
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5465,
    "end": 5466,
    "range": [
      5465,
      5466
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5471,
    "end": 5472,
    "range": [
      5471,
      5472
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5473,
    "end": 5474,
    "range": [
      5473,
      5474
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 5475,
    "end": 5476,
    "range": [
      5475,
      5476
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5476,
    "end": 5477,
    "range": [
      5476,
      5477
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5478,
    "end": 5479,
    "range": [
      5478,
      5479
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5503,
    "end": 5511,
    "range": [
      5503,
      5511
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5512,
    "end": 5515,
    "range": [
      5512,
      5515
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5515,
    "end": 5516,
    "range": [
      5515,
      5516
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 5516,
    "end": 5517,
    "range": [
      5516,
      5517
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5517,
    "end": 5518,
    "range": [
      5517,
      5518
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5518,
    "end": 5519,
    "range": [
      5518,
      5519
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5519,
    "end": 5524,
    "range": [
      5519,
      5524
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5524,
    "end": 5525,
    "range": [
      5524,
      5525
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 5526,
    "end": 5527,
    "range": [
      5526,
      5527
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5527,
    "end": 5528,
    "range": [
      5527,
      5528
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5529,
    "end": 5530,
    "range": [
      5529,
      5530
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5535,
    "end": 5537,
    "range": [
      5535,
      5537
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5538,
    "end": 5539,
    "range": [
      5538,
      5539
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 5539,
    "end": 5545,
    "range": [
      5539,
      5545
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5546,
    "end": 5551,
    "range": [
      5546,
      5551
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5552,
    "end": 5555,
    "range": [
      5552,
      5555
    ]
  },
  {
    "type": "String",
    "value": "\"object\"",
    "start": 5556,
    "end": 5564,
    "range": [
      5556,
      5564
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5565,
    "end": 5567,
    "range": [
      5565,
      5567
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5568,
    "end": 5573,
    "range": [
      5568,
      5573
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 5574,
    "end": 5577,
    "range": [
      5574,
      5577
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 5578,
    "end": 5582,
    "range": [
      5578,
      5582
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5583,
    "end": 5585,
    "range": [
      5583,
      5585
    ]
  },
  {
    "type": "String",
    "value": "\"prop\"",
    "start": 5586,
    "end": 5592,
    "range": [
      5586,
      5592
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 5593,
    "end": 5595,
    "range": [
      5593,
      5595
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5596,
    "end": 5601,
    "range": [
      5596,
      5601
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5601,
    "end": 5602,
    "range": [
      5601,
      5602
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5603,
    "end": 5604,
    "range": [
      5603,
      5604
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5613,
    "end": 5618,
    "range": [
      5613,
      5618
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5618,
    "end": 5619,
    "range": [
      5618,
      5619
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5665,
    "end": 5666,
    "range": [
      5665,
      5666
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5667,
    "end": 5668,
    "range": [
      5667,
      5668
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5692,
    "end": 5697,
    "range": [
      5692,
      5697
    ]
  },
  {
    "type": "Identifier",
    "value": "checkIsTouchDevice",
    "start": 5698,
    "end": 5716,
    "range": [
      5698,
      5716
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5717,
    "end": 5718,
    "range": [
      5717,
      5718
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5719,
    "end": 5720,
    "range": [
      5719,
      5720
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5720,
    "end": 5721,
    "range": [
      5720,
      5721
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5722,
    "end": 5724,
    "range": [
      5722,
      5724
    ]
  },
  {
    "type": "String",
    "value": "\"ontouchstart\"",
    "start": 5729,
    "end": 5743,
    "range": [
      5729,
      5743
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 5744,
    "end": 5746,
    "range": [
      5744,
      5746
    ]
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 5747,
    "end": 5753,
    "range": [
      5747,
      5753
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 5754,
    "end": 5756,
    "range": [
      5754,
      5756
    ]
  },
  {
    "type": "String",
    "value": "\"msMaxTouchPoints\"",
    "start": 5757,
    "end": 5775,
    "range": [
      5757,
      5775
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 5776,
    "end": 5778,
    "range": [
      5776,
      5778
    ]
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 5779,
    "end": 5785,
    "range": [
      5779,
      5785
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5785,
    "end": 5786,
    "range": [
      5785,
      5786
    ]
  },
  {
    "type": "Identifier",
    "value": "navigator",
    "start": 5786,
    "end": 5795,
    "range": [
      5786,
      5795
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5795,
    "end": 5796,
    "range": [
      5795,
      5796
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5820,
    "end": 5828,
    "range": [
      5820,
      5828
    ]
  },
  {
    "type": "Identifier",
    "value": "isHTMLTable",
    "start": 5829,
    "end": 5840,
    "range": [
      5829,
      5840
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5840,
    "end": 5841,
    "range": [
      5840,
      5841
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5841,
    "end": 5842,
    "range": [
      5841,
      5842
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5843,
    "end": 5850,
    "range": [
      5843,
      5850
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 5851,
    "end": 5857,
    "range": [
      5851,
      5857
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5858,
    "end": 5859,
    "range": [
      5858,
      5859
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 5860,
    "end": 5864,
    "range": [
      5860,
      5864
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5864,
    "end": 5865,
    "range": [
      5864,
      5865
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5865,
    "end": 5866,
    "range": [
      5865,
      5866
    ]
  },
  {
    "type": "Identifier",
    "value": "table",
    "start": 5866,
    "end": 5871,
    "range": [
      5866,
      5871
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5871,
    "end": 5872,
    "range": [
      5871,
      5872
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5873,
    "end": 5874,
    "range": [
      5873,
      5874
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5874,
    "end": 5875,
    "range": [
      5874,
      5875
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5875,
    "end": 5876,
    "range": [
      5875,
      5876
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 5877,
    "end": 5884,
    "range": [
      5877,
      5884
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5885,
    "end": 5886,
    "range": [
      5885,
      5886
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5891,
    "end": 5897,
    "range": [
      5891,
      5897
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 5898,
    "end": 5899,
    "range": [
      5898,
      5899
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 5899,
    "end": 5900,
    "range": [
      5899,
      5900
    ]
  },
  {
    "type": "Identifier",
    "value": "table",
    "start": 5900,
    "end": 5905,
    "range": [
      5900,
      5905
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5906,
    "end": 5908,
    "range": [
      5906,
      5908
    ]
  },
  {
    "type": "String",
    "value": "'html'",
    "start": 5909,
    "end": 5915,
    "range": [
      5909,
      5915
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 5916,
    "end": 5918,
    "range": [
      5916,
      5918
    ]
  },
  {
    "type": "Identifier",
    "value": "table",
    "start": 5919,
    "end": 5924,
    "range": [
      5919,
      5924
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5924,
    "end": 5925,
    "range": [
      5924,
      5925
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5926,
    "end": 5927,
    "range": [
      5926,
      5927
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5951,
    "end": 5956,
    "range": [
      5951,
      5956
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 5957,
    "end": 5958,
    "range": [
      5957,
      5958
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5959,
    "end": 5960,
    "range": [
      5959,
      5960
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5961,
    "end": 5962,
    "range": [
      5961,
      5962
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 5962,
    "end": 5963,
    "range": [
      5962,
      5963
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5964,
    "end": 5971,
    "range": [
      5964,
      5971
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 5972,
    "end": 5978,
    "range": [
      5972,
      5978
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5978,
    "end": 5979,
    "range": [
      5978,
      5979
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5979,
    "end": 5980,
    "range": [
      5979,
      5980
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 5980,
    "end": 5981,
    "range": [
      5980,
      5981
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5981,
    "end": 5982,
    "range": [
      5981,
      5982
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 5983,
    "end": 5984,
    "range": [
      5983,
      5984
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 5985,
    "end": 5986,
    "range": [
      5985,
      5986
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5987,
    "end": 5988,
    "range": [
      5987,
      5988
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5988,
    "end": 5989,
    "range": [
      5988,
      5989
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5989,
    "end": 5990,
    "range": [
      5989,
      5990
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5991,
    "end": 5993,
    "range": [
      5991,
      5993
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5994,
    "end": 5995,
    "range": [
      5994,
      5995
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 6000,
    "end": 6005,
    "range": [
      6000,
      6005
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 6006,
    "end": 6008,
    "range": [
      6006,
      6008
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 6009,
    "end": 6010,
    "range": [
      6009,
      6010
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6010,
    "end": 6011,
    "range": [
      6010,
      6011
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6012,
    "end": 6013,
    "range": [
      6012,
      6013
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6013,
    "end": 6014,
    "range": [
      6013,
      6014
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6038,
    "end": 6046,
    "range": [
      6038,
      6046
    ]
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 6047,
    "end": 6052,
    "range": [
      6047,
      6052
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6052,
    "end": 6053,
    "range": [
      6052,
      6053
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6053,
    "end": 6054,
    "range": [
      6053,
      6054
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6055,
    "end": 6062,
    "range": [
      6055,
      6062
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 6063,
    "end": 6066,
    "range": [
      6063,
      6066
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6066,
    "end": 6067,
    "range": [
      6066,
      6067
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6067,
    "end": 6068,
    "range": [
      6067,
      6068
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6069,
    "end": 6070,
    "range": [
      6069,
      6070
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 6071,
    "end": 6077,
    "range": [
      6071,
      6077
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6077,
    "end": 6078,
    "range": [
      6077,
      6078
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6078,
    "end": 6084,
    "range": [
      6078,
      6084
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6084,
    "end": 6085,
    "range": [
      6084,
      6085
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 6086,
    "end": 6089,
    "range": [
      6086,
      6089
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6089,
    "end": 6090,
    "range": [
      6089,
      6090
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6090,
    "end": 6091,
    "range": [
      6090,
      6091
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6091,
    "end": 6092,
    "range": [
      6091,
      6092
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 6092,
    "end": 6095,
    "range": [
      6092,
      6095
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6095,
    "end": 6096,
    "range": [
      6095,
      6096
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6097,
    "end": 6098,
    "range": [
      6097,
      6098
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6098,
    "end": 6099,
    "range": [
      6098,
      6099
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6100,
    "end": 6101,
    "range": [
      6100,
      6101
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 6106,
    "end": 6108,
    "range": [
      6106,
      6108
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6109,
    "end": 6110,
    "range": [
      6109,
      6110
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 6110,
    "end": 6115,
    "range": [
      6110,
      6115
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6115,
    "end": 6116,
    "range": [
      6115,
      6116
    ]
  },
  {
    "type": "Identifier",
    "value": "isArray",
    "start": 6116,
    "end": 6123,
    "range": [
      6116,
      6123
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6123,
    "end": 6124,
    "range": [
      6123,
      6124
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 6124,
    "end": 6127,
    "range": [
      6124,
      6127
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6127,
    "end": 6128,
    "range": [
      6127,
      6128
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 6129,
    "end": 6131,
    "range": [
      6129,
      6131
    ]
  },
  {
    "type": "String",
    "value": "'length'",
    "start": 6132,
    "end": 6140,
    "range": [
      6132,
      6140
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 6141,
    "end": 6143,
    "range": [
      6141,
      6143
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 6144,
    "end": 6147,
    "range": [
      6144,
      6147
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6147,
    "end": 6148,
    "range": [
      6147,
      6148
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6149,
    "end": 6150,
    "range": [
      6149,
      6150
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 6157,
    "end": 6160,
    "range": [
      6157,
      6160
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6160,
    "end": 6161,
    "range": [
      6160,
      6161
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6172,
    "end": 6173,
    "range": [
      6172,
      6173
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 6178,
    "end": 6182,
    "range": [
      6178,
      6182
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6183,
    "end": 6184,
    "range": [
      6183,
      6184
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 6191,
    "end": 6194,
    "range": [
      6191,
      6194
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6194,
    "end": 6195,
    "range": [
      6194,
      6195
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6206,
    "end": 6207,
    "range": [
      6206,
      6207
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6208,
    "end": 6209,
    "range": [
      6208,
      6209
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6211,
    "end": 6219,
    "range": [
      6211,
      6219
    ]
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 6220,
    "end": 6225,
    "range": [
      6220,
      6225
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6225,
    "end": 6226,
    "range": [
      6225,
      6226
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6226,
    "end": 6227,
    "range": [
      6226,
      6227
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6228,
    "end": 6235,
    "range": [
      6228,
      6235
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 6236,
    "end": 6239,
    "range": [
      6236,
      6239
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6239,
    "end": 6240,
    "range": [
      6239,
      6240
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6240,
    "end": 6241,
    "range": [
      6240,
      6241
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6242,
    "end": 6243,
    "range": [
      6242,
      6243
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 6244,
    "end": 6250,
    "range": [
      6244,
      6250
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6250,
    "end": 6251,
    "range": [
      6250,
      6251
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6251,
    "end": 6257,
    "range": [
      6251,
      6257
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6257,
    "end": 6258,
    "range": [
      6257,
      6258
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 6259,
    "end": 6262,
    "range": [
      6259,
      6262
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6262,
    "end": 6263,
    "range": [
      6262,
      6263
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6263,
    "end": 6264,
    "range": [
      6263,
      6264
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6264,
    "end": 6265,
    "range": [
      6264,
      6265
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 6265,
    "end": 6268,
    "range": [
      6265,
      6268
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6268,
    "end": 6269,
    "range": [
      6268,
      6269
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6270,
    "end": 6271,
    "range": [
      6270,
      6271
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6271,
    "end": 6272,
    "range": [
      6271,
      6272
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6273,
    "end": 6274,
    "range": [
      6273,
      6274
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 6279,
    "end": 6281,
    "range": [
      6279,
      6281
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6282,
    "end": 6283,
    "range": [
      6282,
      6283
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 6283,
    "end": 6288,
    "range": [
      6283,
      6288
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6288,
    "end": 6289,
    "range": [
      6288,
      6289
    ]
  },
  {
    "type": "Identifier",
    "value": "isArray",
    "start": 6289,
    "end": 6296,
    "range": [
      6289,
      6296
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6296,
    "end": 6297,
    "range": [
      6296,
      6297
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 6297,
    "end": 6300,
    "range": [
      6297,
      6300
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6300,
    "end": 6301,
    "range": [
      6300,
      6301
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6301,
    "end": 6302,
    "range": [
      6301,
      6302
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6303,
    "end": 6304,
    "range": [
      6303,
      6304
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 6311,
    "end": 6314,
    "range": [
      6311,
      6314
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6314,
    "end": 6315,
    "range": [
      6314,
      6315
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6334,
    "end": 6335,
    "range": [
      6334,
      6335
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 6340,
    "end": 6344,
    "range": [
      6340,
      6344
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6345,
    "end": 6346,
    "range": [
      6345,
      6346
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 6353,
    "end": 6356,
    "range": [
      6353,
      6356
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6356,
    "end": 6357,
    "range": [
      6356,
      6357
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6368,
    "end": 6369,
    "range": [
      6368,
      6369
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6370,
    "end": 6371,
    "range": [
      6370,
      6371
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6373,
    "end": 6381,
    "range": [
      6373,
      6381
    ]
  },
  {
    "type": "Identifier",
    "value": "test3",
    "start": 6382,
    "end": 6387,
    "range": [
      6382,
      6387
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6387,
    "end": 6388,
    "range": [
      6387,
      6388
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6388,
    "end": 6389,
    "range": [
      6388,
      6389
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6390,
    "end": 6397,
    "range": [
      6390,
      6397
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 6398,
    "end": 6401,
    "range": [
      6398,
      6401
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6401,
    "end": 6402,
    "range": [
      6401,
      6402
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6402,
    "end": 6403,
    "range": [
      6402,
      6403
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6404,
    "end": 6405,
    "range": [
      6404,
      6405
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 6406,
    "end": 6412,
    "range": [
      6406,
      6412
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6412,
    "end": 6413,
    "range": [
      6412,
      6413
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6413,
    "end": 6419,
    "range": [
      6413,
      6419
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6419,
    "end": 6420,
    "range": [
      6419,
      6420
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 6421,
    "end": 6424,
    "range": [
      6421,
      6424
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6424,
    "end": 6425,
    "range": [
      6424,
      6425
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6425,
    "end": 6426,
    "range": [
      6425,
      6426
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6426,
    "end": 6427,
    "range": [
      6426,
      6427
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 6427,
    "end": 6430,
    "range": [
      6427,
      6430
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6430,
    "end": 6431,
    "range": [
      6430,
      6431
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6432,
    "end": 6433,
    "range": [
      6432,
      6433
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6433,
    "end": 6434,
    "range": [
      6433,
      6434
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6435,
    "end": 6436,
    "range": [
      6435,
      6436
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 6441,
    "end": 6443,
    "range": [
      6441,
      6443
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6444,
    "end": 6445,
    "range": [
      6444,
      6445
    ]
  },
  {
    "type": "String",
    "value": "'length'",
    "start": 6445,
    "end": 6453,
    "range": [
      6445,
      6453
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 6454,
    "end": 6456,
    "range": [
      6454,
      6456
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 6457,
    "end": 6460,
    "range": [
      6457,
      6460
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6460,
    "end": 6461,
    "range": [
      6460,
      6461
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6462,
    "end": 6463,
    "range": [
      6462,
      6463
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 6470,
    "end": 6473,
    "range": [
      6470,
      6473
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6473,
    "end": 6474,
    "range": [
      6473,
      6474
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6485,
    "end": 6486,
    "range": [
      6485,
      6486
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 6491,
    "end": 6495,
    "range": [
      6491,
      6495
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6496,
    "end": 6497,
    "range": [
      6496,
      6497
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 6504,
    "end": 6507,
    "range": [
      6504,
      6507
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6507,
    "end": 6508,
    "range": [
      6507,
      6508
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6519,
    "end": 6520,
    "range": [
      6519,
      6520
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6521,
    "end": 6522,
    "range": [
      6521,
      6522
    ]
  }
]
```
