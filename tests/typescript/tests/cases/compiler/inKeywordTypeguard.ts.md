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
