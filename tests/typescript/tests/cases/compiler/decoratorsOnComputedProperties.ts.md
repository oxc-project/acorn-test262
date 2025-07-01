__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 14,
              "end": 20
            },
            "start": 12,
            "end": 20
          },
          "start": 11,
          "end": 20
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PropertyKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 25,
                "end": 36
              },
              "typeArguments": null,
              "start": 25,
              "end": 36
            },
            "start": 23,
            "end": 36
          },
          "start": 22,
          "end": 36
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 38,
        "end": 41
      },
      "expression": false,
      "start": 0,
      "end": 41
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 47
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 50,
            "end": 51
          },
          "definite": false,
          "start": 46,
          "end": 51
        }
      ],
      "declare": false,
      "start": 42,
      "end": 52
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
          "type": "TSStringKeyword",
          "start": 69,
          "end": 75
        },
        "start": 67,
        "end": 75
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "UpdateExpression",
                "operator": "++",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 88
                },
                "start": 85,
                "end": 88
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 91,
                "end": 93
              },
              "start": 85,
              "end": 93
            },
            "start": 78,
            "end": 94
          }
        ],
        "start": 76,
        "end": 96
      },
      "expression": false,
      "start": 53,
      "end": 96
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
            "name": "fieldNameA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 116,
                "end": 122
              },
              "start": 114,
              "end": 122
            },
            "start": 104,
            "end": 122
          },
          "init": {
            "type": "Literal",
            "value": "fieldName1",
            "raw": "\"fieldName1\"",
            "start": 125,
            "end": 137
          },
          "definite": false,
          "start": 104,
          "end": 137
        }
      ],
      "declare": false,
      "start": 98,
      "end": 138
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
            "name": "fieldNameB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 157,
                "end": 163
              },
              "start": 155,
              "end": 163
            },
            "start": 145,
            "end": 163
          },
          "init": {
            "type": "Literal",
            "value": "fieldName2",
            "raw": "\"fieldName2\"",
            "start": 166,
            "end": 178
          },
          "definite": false,
          "start": 145,
          "end": 178
        }
      ],
      "declare": false,
      "start": 139,
      "end": 179
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
            "name": "fieldNameC",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 198,
                "end": 204
              },
              "start": 196,
              "end": 204
            },
            "start": 186,
            "end": 204
          },
          "init": {
            "type": "Literal",
            "value": "fieldName3",
            "raw": "\"fieldName3\"",
            "start": 207,
            "end": 219
          },
          "definite": false,
          "start": 186,
          "end": 219
        }
      ],
      "declare": false,
      "start": 180,
      "end": 220
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
        "start": 228,
        "end": 229
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 237,
                  "end": 238
                },
                "start": 236,
                "end": 238
              }
            ],
            "key": {
              "type": "Literal",
              "value": "property",
              "raw": "\"property\"",
              "start": 240,
              "end": 250
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 253,
                "end": 256
              },
              "start": 251,
              "end": 256
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 236,
            "end": 257
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 263,
                  "end": 264
                },
                "start": 262,
                "end": 264
              }
            ],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 266,
                "end": 272
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toStringTag",
                "optional": false,
                "typeAnnotation": null,
                "start": 273,
                "end": 284
              },
              "optional": false,
              "computed": false,
              "start": 266,
              "end": 284
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 287,
                "end": 290
              },
              "start": 285,
              "end": 290
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 262,
            "end": 291
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 297,
                  "end": 298
                },
                "start": 296,
                "end": 298
              }
            ],
            "key": {
              "type": "Literal",
              "value": "property2",
              "raw": "\"property2\"",
              "start": 300,
              "end": 311
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 314,
                "end": 317
              },
              "start": 312,
              "end": 317
            },
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 320,
              "end": 321
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 296,
            "end": 322
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 328,
                  "end": 329
                },
                "start": 327,
                "end": 329
              }
            ],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 331,
                "end": 337
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 338,
                "end": 346
              },
              "optional": false,
              "computed": false,
              "start": 331,
              "end": 346
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 349,
                "end": 352
              },
              "start": 347,
              "end": 352
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 355,
              "end": 359
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 327,
            "end": 360
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "property3",
              "raw": "\"property3\"",
              "start": 366,
              "end": 377
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 380,
                "end": 383
              },
              "start": 378,
              "end": 383
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 365,
            "end": 384
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 390,
                "end": 396
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isConcatSpreadable",
                "optional": false,
                "typeAnnotation": null,
                "start": 397,
                "end": 415
              },
              "optional": false,
              "computed": false,
              "start": 390,
              "end": 415
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 418,
                "end": 421
              },
              "start": 416,
              "end": 421
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 389,
            "end": 422
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "property4",
              "raw": "\"property4\"",
              "start": 428,
              "end": 439
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 442,
                "end": 445
              },
              "start": 440,
              "end": 445
            },
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 448,
              "end": 449
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 427,
            "end": 450
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 456,
                "end": 462
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "match",
                "optional": false,
                "typeAnnotation": null,
                "start": 463,
                "end": 468
              },
              "optional": false,
              "computed": false,
              "start": 456,
              "end": 468
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 471,
                "end": 474
              },
              "start": 469,
              "end": 474
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 477,
              "end": 481
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 455,
            "end": 482
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 488,
                "end": 491
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 488,
              "end": 493
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 496,
                "end": 499
              },
              "start": 494,
              "end": 499
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 487,
            "end": 500
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 506,
                  "end": 507
                },
                "start": 505,
                "end": 507
              }
            ],
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 509,
                "end": 512
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 509,
              "end": 514
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 517,
                "end": 520
              },
              "start": 515,
              "end": 520
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 505,
            "end": 521
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 527,
                  "end": 528
                },
                "start": 526,
                "end": 528
              }
            ],
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 530,
                "end": 533
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 530,
              "end": 535
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 538,
                "end": 541
              },
              "start": 536,
              "end": 541
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 544,
              "end": 548
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 526,
            "end": 549
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameA",
              "optional": false,
              "typeAnnotation": null,
              "start": 555,
              "end": 565
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 568,
                "end": 571
              },
              "start": 566,
              "end": 571
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 554,
            "end": 572
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 578,
                  "end": 579
                },
                "start": 577,
                "end": 579
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameB",
              "optional": false,
              "typeAnnotation": null,
              "start": 581,
              "end": 591
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 594,
                "end": 597
              },
              "start": 592,
              "end": 597
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 577,
            "end": 598
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 604,
                  "end": 605
                },
                "start": 603,
                "end": 605
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameC",
              "optional": false,
              "typeAnnotation": null,
              "start": 607,
              "end": 617
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 620,
                "end": 623
              },
              "start": 618,
              "end": 623
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 626,
              "end": 630
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 603,
            "end": 631
          }
        ],
        "start": 230,
        "end": 633
      },
      "abstract": false,
      "declare": false,
      "start": 222,
      "end": 633
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "ClassExpression",
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 646,
            "end": 647
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
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 655,
                      "end": 656
                    },
                    "start": 654,
                    "end": 656
                  }
                ],
                "key": {
                  "type": "Literal",
                  "value": "property",
                  "raw": "\"property\"",
                  "start": 658,
                  "end": 668
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 671,
                    "end": 674
                  },
                  "start": 669,
                  "end": 674
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 654,
                "end": 675
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 681,
                      "end": 682
                    },
                    "start": 680,
                    "end": 682
                  }
                ],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 684,
                    "end": 690
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toStringTag",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 691,
                    "end": 702
                  },
                  "optional": false,
                  "computed": false,
                  "start": 684,
                  "end": 702
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 705,
                    "end": 708
                  },
                  "start": 703,
                  "end": 708
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 680,
                "end": 709
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 715,
                      "end": 716
                    },
                    "start": 714,
                    "end": 716
                  }
                ],
                "key": {
                  "type": "Literal",
                  "value": "property2",
                  "raw": "\"property2\"",
                  "start": 718,
                  "end": 729
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 732,
                    "end": 735
                  },
                  "start": 730,
                  "end": 735
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 738,
                  "end": 739
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 714,
                "end": 740
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 746,
                      "end": 747
                    },
                    "start": 745,
                    "end": 747
                  }
                ],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 749,
                    "end": 755
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 756,
                    "end": 764
                  },
                  "optional": false,
                  "computed": false,
                  "start": 749,
                  "end": 764
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 767,
                    "end": 770
                  },
                  "start": 765,
                  "end": 770
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 773,
                  "end": 777
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 745,
                "end": 778
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "Literal",
                  "value": "property3",
                  "raw": "\"property3\"",
                  "start": 784,
                  "end": 795
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 798,
                    "end": 801
                  },
                  "start": 796,
                  "end": 801
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 783,
                "end": 802
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 808,
                    "end": 814
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isConcatSpreadable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 815,
                    "end": 833
                  },
                  "optional": false,
                  "computed": false,
                  "start": 808,
                  "end": 833
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 836,
                    "end": 839
                  },
                  "start": 834,
                  "end": 839
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 807,
                "end": 840
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "Literal",
                  "value": "property4",
                  "raw": "\"property4\"",
                  "start": 846,
                  "end": 857
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 860,
                    "end": 863
                  },
                  "start": 858,
                  "end": 863
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 866,
                  "end": 867
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 845,
                "end": 868
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 874,
                    "end": 880
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "match",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 881,
                    "end": 886
                  },
                  "optional": false,
                  "computed": false,
                  "start": 874,
                  "end": 886
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 889,
                    "end": 892
                  },
                  "start": 887,
                  "end": 892
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 895,
                  "end": 899
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 873,
                "end": 900
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 906,
                    "end": 909
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 906,
                  "end": 911
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 914,
                    "end": 917
                  },
                  "start": 912,
                  "end": 917
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 905,
                "end": 918
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 924,
                      "end": 925
                    },
                    "start": 923,
                    "end": 925
                  }
                ],
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 927,
                    "end": 930
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 927,
                  "end": 932
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 935,
                    "end": 938
                  },
                  "start": 933,
                  "end": 938
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 923,
                "end": 939
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 945,
                      "end": 946
                    },
                    "start": 944,
                    "end": 946
                  }
                ],
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 948,
                    "end": 951
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 948,
                  "end": 953
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 956,
                    "end": 959
                  },
                  "start": 954,
                  "end": 959
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 962,
                  "end": 966
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 944,
                "end": 967
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 973,
                  "end": 983
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 986,
                    "end": 989
                  },
                  "start": 984,
                  "end": 989
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 972,
                "end": 990
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 996,
                      "end": 997
                    },
                    "start": 995,
                    "end": 997
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 999,
                  "end": 1009
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1012,
                    "end": 1015
                  },
                  "start": 1010,
                  "end": 1015
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 995,
                "end": 1016
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1022,
                      "end": 1023
                    },
                    "start": 1021,
                    "end": 1023
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1025,
                  "end": 1035
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1038,
                    "end": 1041
                  },
                  "start": 1036,
                  "end": 1041
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 1044,
                  "end": 1048
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 1021,
                "end": 1049
              }
            ],
            "start": 648,
            "end": 1051
          },
          "abstract": false,
          "declare": false,
          "start": 640,
          "end": 1051
        },
        "prefix": true,
        "start": 635,
        "end": 1051
      },
      "directive": null,
      "start": 635,
      "end": 1052
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
        "start": 1060,
        "end": 1061
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1069,
                  "end": 1070
                },
                "start": 1068,
                "end": 1070
              }
            ],
            "key": {
              "type": "Literal",
              "value": "property",
              "raw": "\"property\"",
              "start": 1072,
              "end": 1082
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1085,
                "end": 1088
              },
              "start": 1083,
              "end": 1088
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1068,
            "end": 1089
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1095,
                  "end": 1096
                },
                "start": 1094,
                "end": 1096
              }
            ],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 1098,
                "end": 1104
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toStringTag",
                "optional": false,
                "typeAnnotation": null,
                "start": 1105,
                "end": 1116
              },
              "optional": false,
              "computed": false,
              "start": 1098,
              "end": 1116
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1119,
                "end": 1122
              },
              "start": 1117,
              "end": 1122
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1094,
            "end": 1123
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1129,
                  "end": 1130
                },
                "start": 1128,
                "end": 1130
              }
            ],
            "key": {
              "type": "Literal",
              "value": "property2",
              "raw": "\"property2\"",
              "start": 1132,
              "end": 1143
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1146,
                "end": 1149
              },
              "start": 1144,
              "end": 1149
            },
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 1152,
              "end": 1153
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1128,
            "end": 1154
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1160,
                  "end": 1161
                },
                "start": 1159,
                "end": 1161
              }
            ],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 1163,
                "end": 1169
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 1170,
                "end": 1178
              },
              "optional": false,
              "computed": false,
              "start": 1163,
              "end": 1178
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1181,
                "end": 1184
              },
              "start": 1179,
              "end": 1184
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1187,
              "end": 1191
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1159,
            "end": 1192
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "property3",
              "raw": "\"property3\"",
              "start": 1198,
              "end": 1209
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1212,
                "end": 1215
              },
              "start": 1210,
              "end": 1215
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1197,
            "end": 1216
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 1222,
                "end": 1228
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isConcatSpreadable",
                "optional": false,
                "typeAnnotation": null,
                "start": 1229,
                "end": 1247
              },
              "optional": false,
              "computed": false,
              "start": 1222,
              "end": 1247
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1250,
                "end": 1253
              },
              "start": 1248,
              "end": 1253
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1221,
            "end": 1254
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "property4",
              "raw": "\"property4\"",
              "start": 1260,
              "end": 1271
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1274,
                "end": 1277
              },
              "start": 1272,
              "end": 1277
            },
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 1280,
              "end": 1281
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1259,
            "end": 1282
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 1288,
                "end": 1294
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "match",
                "optional": false,
                "typeAnnotation": null,
                "start": 1295,
                "end": 1300
              },
              "optional": false,
              "computed": false,
              "start": 1288,
              "end": 1300
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1303,
                "end": 1306
              },
              "start": 1301,
              "end": 1306
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1309,
              "end": 1313
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1287,
            "end": 1314
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1320,
                "end": 1323
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1320,
              "end": 1325
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1328,
                "end": 1331
              },
              "start": 1326,
              "end": 1331
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1319,
            "end": 1332
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1338,
                  "end": 1339
                },
                "start": 1337,
                "end": 1339
              }
            ],
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1341,
                "end": 1344
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1341,
              "end": 1346
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1349,
                "end": 1352
              },
              "start": 1347,
              "end": 1352
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1337,
            "end": 1353
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1359,
                  "end": 1360
                },
                "start": 1358,
                "end": 1360
              }
            ],
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1362,
                "end": 1365
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1362,
              "end": 1367
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1370,
                "end": 1373
              },
              "start": 1368,
              "end": 1373
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1376,
              "end": 1380
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1358,
            "end": 1381
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1387,
              "end": 1397
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1400,
                "end": 1403
              },
              "start": 1398,
              "end": 1403
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1386,
            "end": 1404
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1410,
                  "end": 1411
                },
                "start": 1409,
                "end": 1411
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1413,
              "end": 1423
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1426,
                "end": 1429
              },
              "start": 1424,
              "end": 1429
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1409,
            "end": 1430
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1436,
                  "end": 1437
                },
                "start": 1435,
                "end": 1437
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameC",
              "optional": false,
              "typeAnnotation": null,
              "start": 1439,
              "end": 1449
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1452,
                "end": 1455
              },
              "start": 1450,
              "end": 1455
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1458,
              "end": 1462
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1435,
            "end": 1463
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "some",
                "raw": "\"some\"",
                "start": 1469,
                "end": 1475
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "method",
                "raw": "\"method\"",
                "start": 1478,
                "end": 1486
              },
              "start": 1469,
              "end": 1486
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
                "body": [],
                "start": 1490,
                "end": 1492
              },
              "expression": false,
              "start": 1487,
              "end": 1492
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1468,
            "end": 1492
          }
        ],
        "start": 1062,
        "end": 1494
      },
      "abstract": false,
      "declare": false,
      "start": 1054,
      "end": 1494
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "ClassExpression",
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null,
            "start": 1507,
            "end": 1508
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
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1516,
                      "end": 1517
                    },
                    "start": 1515,
                    "end": 1517
                  }
                ],
                "key": {
                  "type": "Literal",
                  "value": "property",
                  "raw": "\"property\"",
                  "start": 1519,
                  "end": 1529
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1532,
                    "end": 1535
                  },
                  "start": 1530,
                  "end": 1535
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 1515,
                "end": 1536
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1542,
                      "end": 1543
                    },
                    "start": 1541,
                    "end": 1543
                  }
                ],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1545,
                    "end": 1551
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toStringTag",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1552,
                    "end": 1563
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1545,
                  "end": 1563
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1566,
                    "end": 1569
                  },
                  "start": 1564,
                  "end": 1569
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 1541,
                "end": 1570
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1576,
                      "end": 1577
                    },
                    "start": 1575,
                    "end": 1577
                  }
                ],
                "key": {
                  "type": "Literal",
                  "value": "property2",
                  "raw": "\"property2\"",
                  "start": 1579,
                  "end": 1590
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1593,
                    "end": 1596
                  },
                  "start": 1591,
                  "end": 1596
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1599,
                  "end": 1600
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 1575,
                "end": 1601
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1607,
                      "end": 1608
                    },
                    "start": 1606,
                    "end": 1608
                  }
                ],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1610,
                    "end": 1616
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1617,
                    "end": 1625
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1610,
                  "end": 1625
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1628,
                    "end": 1631
                  },
                  "start": 1626,
                  "end": 1631
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 1634,
                  "end": 1638
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 1606,
                "end": 1639
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "Literal",
                  "value": "property3",
                  "raw": "\"property3\"",
                  "start": 1645,
                  "end": 1656
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1659,
                    "end": 1662
                  },
                  "start": 1657,
                  "end": 1662
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 1644,
                "end": 1663
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1669,
                    "end": 1675
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isConcatSpreadable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1676,
                    "end": 1694
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1669,
                  "end": 1694
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1697,
                    "end": 1700
                  },
                  "start": 1695,
                  "end": 1700
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 1668,
                "end": 1701
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "Literal",
                  "value": "property4",
                  "raw": "\"property4\"",
                  "start": 1707,
                  "end": 1718
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1721,
                    "end": 1724
                  },
                  "start": 1719,
                  "end": 1724
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1727,
                  "end": 1728
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 1706,
                "end": 1729
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1735,
                    "end": 1741
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "match",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1742,
                    "end": 1747
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1735,
                  "end": 1747
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1750,
                    "end": 1753
                  },
                  "start": 1748,
                  "end": 1753
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 1756,
                  "end": 1760
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 1734,
                "end": 1761
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1767,
                    "end": 1770
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1767,
                  "end": 1772
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1775,
                    "end": 1778
                  },
                  "start": 1773,
                  "end": 1778
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 1766,
                "end": 1779
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1785,
                      "end": 1786
                    },
                    "start": 1784,
                    "end": 1786
                  }
                ],
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1788,
                    "end": 1791
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1788,
                  "end": 1793
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1796,
                    "end": 1799
                  },
                  "start": 1794,
                  "end": 1799
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 1784,
                "end": 1800
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1806,
                      "end": 1807
                    },
                    "start": 1805,
                    "end": 1807
                  }
                ],
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1809,
                    "end": 1812
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1809,
                  "end": 1814
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1817,
                    "end": 1820
                  },
                  "start": 1815,
                  "end": 1820
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 1823,
                  "end": 1827
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 1805,
                "end": 1828
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1834,
                  "end": 1844
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1847,
                    "end": 1850
                  },
                  "start": 1845,
                  "end": 1850
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 1833,
                "end": 1851
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1857,
                      "end": 1858
                    },
                    "start": 1856,
                    "end": 1858
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1860,
                  "end": 1870
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1873,
                    "end": 1876
                  },
                  "start": 1871,
                  "end": 1876
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 1856,
                "end": 1877
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1883,
                      "end": 1884
                    },
                    "start": 1882,
                    "end": 1884
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1886,
                  "end": 1896
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1899,
                    "end": 1902
                  },
                  "start": 1897,
                  "end": 1902
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 1905,
                  "end": 1909
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 1882,
                "end": 1910
              },
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "some",
                    "raw": "\"some\"",
                    "start": 1916,
                    "end": 1922
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": "method",
                    "raw": "\"method\"",
                    "start": 1925,
                    "end": 1933
                  },
                  "start": 1916,
                  "end": 1933
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
                    "body": [],
                    "start": 1937,
                    "end": 1939
                  },
                  "expression": false,
                  "start": 1934,
                  "end": 1939
                },
                "kind": "method",
                "computed": true,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 1915,
                "end": 1939
              }
            ],
            "start": 1509,
            "end": 1941
          },
          "abstract": false,
          "declare": false,
          "start": 1501,
          "end": 1941
        },
        "prefix": true,
        "start": 1496,
        "end": 1941
      },
      "directive": null,
      "start": 1496,
      "end": 1942
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 1950,
        "end": 1951
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1959,
                  "end": 1960
                },
                "start": 1958,
                "end": 1960
              }
            ],
            "key": {
              "type": "Literal",
              "value": "property",
              "raw": "\"property\"",
              "start": 1962,
              "end": 1972
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1975,
                "end": 1978
              },
              "start": 1973,
              "end": 1978
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1958,
            "end": 1979
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1985,
                  "end": 1986
                },
                "start": 1984,
                "end": 1986
              }
            ],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 1988,
                "end": 1994
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toStringTag",
                "optional": false,
                "typeAnnotation": null,
                "start": 1995,
                "end": 2006
              },
              "optional": false,
              "computed": false,
              "start": 1988,
              "end": 2006
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2009,
                "end": 2012
              },
              "start": 2007,
              "end": 2012
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1984,
            "end": 2013
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2019,
                  "end": 2020
                },
                "start": 2018,
                "end": 2020
              }
            ],
            "key": {
              "type": "Literal",
              "value": "property2",
              "raw": "\"property2\"",
              "start": 2022,
              "end": 2033
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2036,
                "end": 2039
              },
              "start": 2034,
              "end": 2039
            },
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 2042,
              "end": 2043
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2018,
            "end": 2044
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2050,
                  "end": 2051
                },
                "start": 2049,
                "end": 2051
              }
            ],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 2053,
                "end": 2059
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 2060,
                "end": 2068
              },
              "optional": false,
              "computed": false,
              "start": 2053,
              "end": 2068
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2071,
                "end": 2074
              },
              "start": 2069,
              "end": 2074
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2077,
              "end": 2081
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2049,
            "end": 2082
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "property3",
              "raw": "\"property3\"",
              "start": 2088,
              "end": 2099
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2102,
                "end": 2105
              },
              "start": 2100,
              "end": 2105
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2087,
            "end": 2106
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 2112,
                "end": 2118
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isConcatSpreadable",
                "optional": false,
                "typeAnnotation": null,
                "start": 2119,
                "end": 2137
              },
              "optional": false,
              "computed": false,
              "start": 2112,
              "end": 2137
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2140,
                "end": 2143
              },
              "start": 2138,
              "end": 2143
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2111,
            "end": 2144
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "property4",
              "raw": "\"property4\"",
              "start": 2150,
              "end": 2161
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2164,
                "end": 2167
              },
              "start": 2162,
              "end": 2167
            },
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 2170,
              "end": 2171
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2149,
            "end": 2172
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 2178,
                "end": 2184
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "match",
                "optional": false,
                "typeAnnotation": null,
                "start": 2185,
                "end": 2190
              },
              "optional": false,
              "computed": false,
              "start": 2178,
              "end": 2190
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2193,
                "end": 2196
              },
              "start": 2191,
              "end": 2196
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2199,
              "end": 2203
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2177,
            "end": 2204
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 2210,
                "end": 2213
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2210,
              "end": 2215
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2218,
                "end": 2221
              },
              "start": 2216,
              "end": 2221
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2209,
            "end": 2222
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2228,
                  "end": 2229
                },
                "start": 2227,
                "end": 2229
              }
            ],
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 2231,
                "end": 2234
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2231,
              "end": 2236
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2239,
                "end": 2242
              },
              "start": 2237,
              "end": 2242
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2227,
            "end": 2243
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2249,
                  "end": 2250
                },
                "start": 2248,
                "end": 2250
              }
            ],
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 2252,
                "end": 2255
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2252,
              "end": 2257
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2260,
                "end": 2263
              },
              "start": 2258,
              "end": 2263
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2266,
              "end": 2270
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2248,
            "end": 2271
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "some",
                "raw": "\"some\"",
                "start": 2277,
                "end": 2283
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "method",
                "raw": "\"method\"",
                "start": 2286,
                "end": 2294
              },
              "start": 2277,
              "end": 2294
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
                "body": [],
                "start": 2298,
                "end": 2300
              },
              "expression": false,
              "start": 2295,
              "end": 2300
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2276,
            "end": 2300
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2306,
              "end": 2316
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2319,
                "end": 2322
              },
              "start": 2317,
              "end": 2322
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2305,
            "end": 2323
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2329,
                  "end": 2330
                },
                "start": 2328,
                "end": 2330
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameB",
              "optional": false,
              "typeAnnotation": null,
              "start": 2332,
              "end": 2342
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2345,
                "end": 2348
              },
              "start": 2343,
              "end": 2348
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2328,
            "end": 2349
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2355,
                  "end": 2356
                },
                "start": 2354,
                "end": 2356
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameC",
              "optional": false,
              "typeAnnotation": null,
              "start": 2358,
              "end": 2368
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2371,
                "end": 2374
              },
              "start": 2369,
              "end": 2374
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2377,
              "end": 2381
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2354,
            "end": 2382
          }
        ],
        "start": 1952,
        "end": 2384
      },
      "abstract": false,
      "declare": false,
      "start": 1944,
      "end": 2384
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "ClassExpression",
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null,
            "start": 2397,
            "end": 2398
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
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2406,
                      "end": 2407
                    },
                    "start": 2405,
                    "end": 2407
                  }
                ],
                "key": {
                  "type": "Literal",
                  "value": "property",
                  "raw": "\"property\"",
                  "start": 2409,
                  "end": 2419
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2422,
                    "end": 2425
                  },
                  "start": 2420,
                  "end": 2425
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 2405,
                "end": 2426
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2432,
                      "end": 2433
                    },
                    "start": 2431,
                    "end": 2433
                  }
                ],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2435,
                    "end": 2441
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toStringTag",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2442,
                    "end": 2453
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2435,
                  "end": 2453
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2456,
                    "end": 2459
                  },
                  "start": 2454,
                  "end": 2459
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 2431,
                "end": 2460
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2466,
                      "end": 2467
                    },
                    "start": 2465,
                    "end": 2467
                  }
                ],
                "key": {
                  "type": "Literal",
                  "value": "property2",
                  "raw": "\"property2\"",
                  "start": 2469,
                  "end": 2480
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2483,
                    "end": 2486
                  },
                  "start": 2481,
                  "end": 2486
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2489,
                  "end": 2490
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 2465,
                "end": 2491
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2497,
                      "end": 2498
                    },
                    "start": 2496,
                    "end": 2498
                  }
                ],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2500,
                    "end": 2506
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2507,
                    "end": 2515
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2500,
                  "end": 2515
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2518,
                    "end": 2521
                  },
                  "start": 2516,
                  "end": 2521
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 2524,
                  "end": 2528
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 2496,
                "end": 2529
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "Literal",
                  "value": "property3",
                  "raw": "\"property3\"",
                  "start": 2535,
                  "end": 2546
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2549,
                    "end": 2552
                  },
                  "start": 2547,
                  "end": 2552
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 2534,
                "end": 2553
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2559,
                    "end": 2565
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isConcatSpreadable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2566,
                    "end": 2584
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2559,
                  "end": 2584
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2587,
                    "end": 2590
                  },
                  "start": 2585,
                  "end": 2590
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 2558,
                "end": 2591
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "Literal",
                  "value": "property4",
                  "raw": "\"property4\"",
                  "start": 2597,
                  "end": 2608
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2611,
                    "end": 2614
                  },
                  "start": 2609,
                  "end": 2614
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2617,
                  "end": 2618
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 2596,
                "end": 2619
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2625,
                    "end": 2631
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "match",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2632,
                    "end": 2637
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2625,
                  "end": 2637
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2640,
                    "end": 2643
                  },
                  "start": 2638,
                  "end": 2643
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 2646,
                  "end": 2650
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 2624,
                "end": 2651
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2657,
                    "end": 2660
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 2657,
                  "end": 2662
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2665,
                    "end": 2668
                  },
                  "start": 2663,
                  "end": 2668
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 2656,
                "end": 2669
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2675,
                      "end": 2676
                    },
                    "start": 2674,
                    "end": 2676
                  }
                ],
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2678,
                    "end": 2681
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 2678,
                  "end": 2683
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2686,
                    "end": 2689
                  },
                  "start": 2684,
                  "end": 2689
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 2674,
                "end": 2690
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2696,
                      "end": 2697
                    },
                    "start": 2695,
                    "end": 2697
                  }
                ],
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2699,
                    "end": 2702
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 2699,
                  "end": 2704
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2707,
                    "end": 2710
                  },
                  "start": 2705,
                  "end": 2710
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 2713,
                  "end": 2717
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 2695,
                "end": 2718
              },
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "some",
                    "raw": "\"some\"",
                    "start": 2724,
                    "end": 2730
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": "method",
                    "raw": "\"method\"",
                    "start": 2733,
                    "end": 2741
                  },
                  "start": 2724,
                  "end": 2741
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
                    "body": [],
                    "start": 2745,
                    "end": 2747
                  },
                  "expression": false,
                  "start": 2742,
                  "end": 2747
                },
                "kind": "method",
                "computed": true,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 2723,
                "end": 2747
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2753,
                  "end": 2763
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2766,
                    "end": 2769
                  },
                  "start": 2764,
                  "end": 2769
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 2752,
                "end": 2770
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2776,
                      "end": 2777
                    },
                    "start": 2775,
                    "end": 2777
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2779,
                  "end": 2789
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2792,
                    "end": 2795
                  },
                  "start": 2790,
                  "end": 2795
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 2775,
                "end": 2796
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2802,
                      "end": 2803
                    },
                    "start": 2801,
                    "end": 2803
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2805,
                  "end": 2815
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2818,
                    "end": 2821
                  },
                  "start": 2816,
                  "end": 2821
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 2824,
                  "end": 2828
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 2801,
                "end": 2829
              }
            ],
            "start": 2399,
            "end": 2831
          },
          "abstract": false,
          "declare": false,
          "start": 2391,
          "end": 2831
        },
        "prefix": true,
        "start": 2386,
        "end": 2831
      },
      "directive": null,
      "start": 2386,
      "end": 2832
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null,
        "start": 2840,
        "end": 2841
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2849,
                  "end": 2850
                },
                "start": 2848,
                "end": 2850
              }
            ],
            "key": {
              "type": "Literal",
              "value": "property",
              "raw": "\"property\"",
              "start": 2852,
              "end": 2862
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2865,
                "end": 2868
              },
              "start": 2863,
              "end": 2868
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2848,
            "end": 2869
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2875,
                  "end": 2876
                },
                "start": 2874,
                "end": 2876
              }
            ],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 2878,
                "end": 2884
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toStringTag",
                "optional": false,
                "typeAnnotation": null,
                "start": 2885,
                "end": 2896
              },
              "optional": false,
              "computed": false,
              "start": 2878,
              "end": 2896
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2899,
                "end": 2902
              },
              "start": 2897,
              "end": 2902
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2874,
            "end": 2903
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2909,
                  "end": 2910
                },
                "start": 2908,
                "end": 2910
              }
            ],
            "key": {
              "type": "Literal",
              "value": "property2",
              "raw": "\"property2\"",
              "start": 2912,
              "end": 2923
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2926,
                "end": 2929
              },
              "start": 2924,
              "end": 2929
            },
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 2932,
              "end": 2933
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2908,
            "end": 2934
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2940,
                  "end": 2941
                },
                "start": 2939,
                "end": 2941
              }
            ],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 2943,
                "end": 2949
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 2950,
                "end": 2958
              },
              "optional": false,
              "computed": false,
              "start": 2943,
              "end": 2958
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2961,
                "end": 2964
              },
              "start": 2959,
              "end": 2964
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2967,
              "end": 2971
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2939,
            "end": 2972
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "property3",
              "raw": "\"property3\"",
              "start": 2978,
              "end": 2989
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2992,
                "end": 2995
              },
              "start": 2990,
              "end": 2995
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2977,
            "end": 2996
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 3002,
                "end": 3008
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isConcatSpreadable",
                "optional": false,
                "typeAnnotation": null,
                "start": 3009,
                "end": 3027
              },
              "optional": false,
              "computed": false,
              "start": 3002,
              "end": 3027
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3030,
                "end": 3033
              },
              "start": 3028,
              "end": 3033
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3001,
            "end": 3034
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "property4",
              "raw": "\"property4\"",
              "start": 3040,
              "end": 3051
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3054,
                "end": 3057
              },
              "start": 3052,
              "end": 3057
            },
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 3060,
              "end": 3061
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3039,
            "end": 3062
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 3068,
                "end": 3074
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "match",
                "optional": false,
                "typeAnnotation": null,
                "start": 3075,
                "end": 3080
              },
              "optional": false,
              "computed": false,
              "start": 3068,
              "end": 3080
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3083,
                "end": 3086
              },
              "start": 3081,
              "end": 3086
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 3089,
              "end": 3093
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3067,
            "end": 3094
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 3100,
                "end": 3103
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 3100,
              "end": 3105
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3108,
                "end": 3111
              },
              "start": 3106,
              "end": 3111
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3099,
            "end": 3112
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3118,
                  "end": 3119
                },
                "start": 3117,
                "end": 3119
              }
            ],
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 3121,
                "end": 3124
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 3121,
              "end": 3126
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3129,
                "end": 3132
              },
              "start": 3127,
              "end": 3132
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3117,
            "end": 3133
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3139,
                  "end": 3140
                },
                "start": 3138,
                "end": 3140
              }
            ],
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 3142,
                "end": 3145
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 3142,
              "end": 3147
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3150,
                "end": 3153
              },
              "start": 3148,
              "end": 3153
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 3156,
              "end": 3160
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3138,
            "end": 3161
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "some",
                "raw": "\"some\"",
                "start": 3167,
                "end": 3173
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "method",
                "raw": "\"method\"",
                "start": 3176,
                "end": 3184
              },
              "start": 3167,
              "end": 3184
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
                "body": [],
                "start": 3188,
                "end": 3190
              },
              "expression": false,
              "start": 3185,
              "end": 3190
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3166,
            "end": 3190
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameA",
              "optional": false,
              "typeAnnotation": null,
              "start": 3196,
              "end": 3206
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3209,
                "end": 3212
              },
              "start": 3207,
              "end": 3212
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3195,
            "end": 3213
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3219,
                  "end": 3220
                },
                "start": 3218,
                "end": 3220
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameB",
              "optional": false,
              "typeAnnotation": null,
              "start": 3222,
              "end": 3232
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3235,
                "end": 3238
              },
              "start": 3233,
              "end": 3238
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3218,
            "end": 3239
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "some",
                "raw": "\"some\"",
                "start": 3245,
                "end": 3251
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "method2",
                "raw": "\"method2\"",
                "start": 3254,
                "end": 3263
              },
              "start": 3245,
              "end": 3263
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
                "body": [],
                "start": 3267,
                "end": 3269
              },
              "expression": false,
              "start": 3264,
              "end": 3269
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3244,
            "end": 3269
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3275,
                  "end": 3276
                },
                "start": 3274,
                "end": 3276
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameC",
              "optional": false,
              "typeAnnotation": null,
              "start": 3278,
              "end": 3288
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3291,
                "end": 3294
              },
              "start": 3289,
              "end": 3294
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 3297,
              "end": 3301
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3274,
            "end": 3302
          }
        ],
        "start": 2842,
        "end": 3304
      },
      "abstract": false,
      "declare": false,
      "start": 2834,
      "end": 3304
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "ClassExpression",
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "H",
            "optional": false,
            "typeAnnotation": null,
            "start": 3317,
            "end": 3318
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
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3326,
                      "end": 3327
                    },
                    "start": 3325,
                    "end": 3327
                  }
                ],
                "key": {
                  "type": "Literal",
                  "value": "property",
                  "raw": "\"property\"",
                  "start": 3329,
                  "end": 3339
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3342,
                    "end": 3345
                  },
                  "start": 3340,
                  "end": 3345
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 3325,
                "end": 3346
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3352,
                      "end": 3353
                    },
                    "start": 3351,
                    "end": 3353
                  }
                ],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3355,
                    "end": 3361
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toStringTag",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3362,
                    "end": 3373
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3355,
                  "end": 3373
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3376,
                    "end": 3379
                  },
                  "start": 3374,
                  "end": 3379
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 3351,
                "end": 3380
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3386,
                      "end": 3387
                    },
                    "start": 3385,
                    "end": 3387
                  }
                ],
                "key": {
                  "type": "Literal",
                  "value": "property2",
                  "raw": "\"property2\"",
                  "start": 3389,
                  "end": 3400
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3403,
                    "end": 3406
                  },
                  "start": 3401,
                  "end": 3406
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 3409,
                  "end": 3410
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 3385,
                "end": 3411
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3417,
                      "end": 3418
                    },
                    "start": 3416,
                    "end": 3418
                  }
                ],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3420,
                    "end": 3426
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3427,
                    "end": 3435
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3420,
                  "end": 3435
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3438,
                    "end": 3441
                  },
                  "start": 3436,
                  "end": 3441
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 3444,
                  "end": 3448
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 3416,
                "end": 3449
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "Literal",
                  "value": "property3",
                  "raw": "\"property3\"",
                  "start": 3455,
                  "end": 3466
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3469,
                    "end": 3472
                  },
                  "start": 3467,
                  "end": 3472
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 3454,
                "end": 3473
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3479,
                    "end": 3485
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isConcatSpreadable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3486,
                    "end": 3504
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3479,
                  "end": 3504
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3507,
                    "end": 3510
                  },
                  "start": 3505,
                  "end": 3510
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 3478,
                "end": 3511
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "Literal",
                  "value": "property4",
                  "raw": "\"property4\"",
                  "start": 3517,
                  "end": 3528
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3531,
                    "end": 3534
                  },
                  "start": 3529,
                  "end": 3534
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 3537,
                  "end": 3538
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 3516,
                "end": 3539
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3545,
                    "end": 3551
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "match",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3552,
                    "end": 3557
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3545,
                  "end": 3557
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3560,
                    "end": 3563
                  },
                  "start": 3558,
                  "end": 3563
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 3566,
                  "end": 3570
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 3544,
                "end": 3571
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3577,
                    "end": 3580
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 3577,
                  "end": 3582
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3585,
                    "end": 3588
                  },
                  "start": 3583,
                  "end": 3588
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 3576,
                "end": 3589
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3595,
                      "end": 3596
                    },
                    "start": 3594,
                    "end": 3596
                  }
                ],
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3598,
                    "end": 3601
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 3598,
                  "end": 3603
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3606,
                    "end": 3609
                  },
                  "start": 3604,
                  "end": 3609
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 3594,
                "end": 3610
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3616,
                      "end": 3617
                    },
                    "start": 3615,
                    "end": 3617
                  }
                ],
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3619,
                    "end": 3622
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 3619,
                  "end": 3624
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3627,
                    "end": 3630
                  },
                  "start": 3625,
                  "end": 3630
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 3633,
                  "end": 3637
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 3615,
                "end": 3638
              },
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "some",
                    "raw": "\"some\"",
                    "start": 3644,
                    "end": 3650
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": "method",
                    "raw": "\"method\"",
                    "start": 3653,
                    "end": 3661
                  },
                  "start": 3644,
                  "end": 3661
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
                    "body": [],
                    "start": 3665,
                    "end": 3667
                  },
                  "expression": false,
                  "start": 3662,
                  "end": 3667
                },
                "kind": "method",
                "computed": true,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 3643,
                "end": 3667
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3673,
                  "end": 3683
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3686,
                    "end": 3689
                  },
                  "start": 3684,
                  "end": 3689
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 3672,
                "end": 3690
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3696,
                      "end": 3697
                    },
                    "start": 3695,
                    "end": 3697
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3699,
                  "end": 3709
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3712,
                    "end": 3715
                  },
                  "start": 3710,
                  "end": 3715
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 3695,
                "end": 3716
              },
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "some",
                    "raw": "\"some\"",
                    "start": 3722,
                    "end": 3728
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": "method2",
                    "raw": "\"method2\"",
                    "start": 3731,
                    "end": 3740
                  },
                  "start": 3722,
                  "end": 3740
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
                    "body": [],
                    "start": 3744,
                    "end": 3746
                  },
                  "expression": false,
                  "start": 3741,
                  "end": 3746
                },
                "kind": "method",
                "computed": true,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 3721,
                "end": 3746
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3752,
                      "end": 3753
                    },
                    "start": 3751,
                    "end": 3753
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3755,
                  "end": 3765
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3768,
                    "end": 3771
                  },
                  "start": 3766,
                  "end": 3771
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 3774,
                  "end": 3778
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 3751,
                "end": 3779
              }
            ],
            "start": 3319,
            "end": 3781
          },
          "abstract": false,
          "declare": false,
          "start": 3311,
          "end": 3781
        },
        "prefix": true,
        "start": 3306,
        "end": 3781
      },
      "directive": null,
      "start": 3306,
      "end": 3782
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 3790,
        "end": 3791
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
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3799,
                  "end": 3800
                },
                "start": 3798,
                "end": 3800
              }
            ],
            "key": {
              "type": "Literal",
              "value": "property",
              "raw": "\"property\"",
              "start": 3802,
              "end": 3812
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3815,
                "end": 3818
              },
              "start": 3813,
              "end": 3818
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3798,
            "end": 3819
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3825,
                  "end": 3826
                },
                "start": 3824,
                "end": 3826
              }
            ],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 3828,
                "end": 3834
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toStringTag",
                "optional": false,
                "typeAnnotation": null,
                "start": 3835,
                "end": 3846
              },
              "optional": false,
              "computed": false,
              "start": 3828,
              "end": 3846
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3849,
                "end": 3852
              },
              "start": 3847,
              "end": 3852
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3824,
            "end": 3853
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3859,
                  "end": 3860
                },
                "start": 3858,
                "end": 3860
              }
            ],
            "key": {
              "type": "Literal",
              "value": "property2",
              "raw": "\"property2\"",
              "start": 3862,
              "end": 3873
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3876,
                "end": 3879
              },
              "start": 3874,
              "end": 3879
            },
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 3882,
              "end": 3883
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3858,
            "end": 3884
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3890,
                  "end": 3891
                },
                "start": 3889,
                "end": 3891
              }
            ],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 3893,
                "end": 3899
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 3900,
                "end": 3908
              },
              "optional": false,
              "computed": false,
              "start": 3893,
              "end": 3908
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3911,
                "end": 3914
              },
              "start": 3909,
              "end": 3914
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 3917,
              "end": 3921
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3889,
            "end": 3922
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "property3",
              "raw": "\"property3\"",
              "start": 3928,
              "end": 3939
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3942,
                "end": 3945
              },
              "start": 3940,
              "end": 3945
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3927,
            "end": 3946
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 3952,
                "end": 3958
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isConcatSpreadable",
                "optional": false,
                "typeAnnotation": null,
                "start": 3959,
                "end": 3977
              },
              "optional": false,
              "computed": false,
              "start": 3952,
              "end": 3977
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3980,
                "end": 3983
              },
              "start": 3978,
              "end": 3983
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3951,
            "end": 3984
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "property4",
              "raw": "\"property4\"",
              "start": 3990,
              "end": 4001
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4004,
                "end": 4007
              },
              "start": 4002,
              "end": 4007
            },
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 4010,
              "end": 4011
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3989,
            "end": 4012
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 4018,
                "end": 4024
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "match",
                "optional": false,
                "typeAnnotation": null,
                "start": 4025,
                "end": 4030
              },
              "optional": false,
              "computed": false,
              "start": 4018,
              "end": 4030
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4033,
                "end": 4036
              },
              "start": 4031,
              "end": 4036
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 4039,
              "end": 4043
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 4017,
            "end": 4044
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 4050,
                "end": 4053
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 4050,
              "end": 4055
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4058,
                "end": 4061
              },
              "start": 4056,
              "end": 4061
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 4049,
            "end": 4062
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4068,
                  "end": 4069
                },
                "start": 4067,
                "end": 4069
              }
            ],
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 4071,
                "end": 4074
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 4071,
              "end": 4076
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4079,
                "end": 4082
              },
              "start": 4077,
              "end": 4082
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 4067,
            "end": 4083
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4089,
                  "end": 4090
                },
                "start": 4088,
                "end": 4090
              }
            ],
            "key": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 4092,
                "end": 4095
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 4092,
              "end": 4097
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4100,
                "end": 4103
              },
              "start": 4098,
              "end": 4103
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 4106,
              "end": 4110
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 4088,
            "end": 4111
          },
          {
            "type": "MethodDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4117,
                  "end": 4118
                },
                "start": 4116,
                "end": 4118
              }
            ],
            "key": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "some",
                "raw": "\"some\"",
                "start": 4120,
                "end": 4126
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "method",
                "raw": "\"method\"",
                "start": 4129,
                "end": 4137
              },
              "start": 4120,
              "end": 4137
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
                "body": [],
                "start": 4141,
                "end": 4143
              },
              "expression": false,
              "start": 4138,
              "end": 4143
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4116,
            "end": 4143
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameA",
              "optional": false,
              "typeAnnotation": null,
              "start": 4149,
              "end": 4159
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4162,
                "end": 4165
              },
              "start": 4160,
              "end": 4165
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 4148,
            "end": 4166
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4172,
                  "end": 4173
                },
                "start": 4171,
                "end": 4173
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameB",
              "optional": false,
              "typeAnnotation": null,
              "start": 4175,
              "end": 4185
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4188,
                "end": 4191
              },
              "start": 4186,
              "end": 4191
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 4171,
            "end": 4192
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": "some",
                "raw": "\"some\"",
                "start": 4198,
                "end": 4204
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "method2",
                "raw": "\"method2\"",
                "start": 4207,
                "end": 4216
              },
              "start": 4198,
              "end": 4216
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
                "body": [],
                "start": 4220,
                "end": 4222
              },
              "expression": false,
              "start": 4217,
              "end": 4222
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4197,
            "end": 4222
          },
          {
            "type": "PropertyDefinition",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4228,
                  "end": 4229
                },
                "start": 4227,
                "end": 4229
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameC",
              "optional": false,
              "typeAnnotation": null,
              "start": 4231,
              "end": 4241
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4244,
                "end": 4247
              },
              "start": 4242,
              "end": 4247
            },
            "value": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 4250,
              "end": 4254
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 4227,
            "end": 4255
          }
        ],
        "start": 3792,
        "end": 4257
      },
      "abstract": false,
      "declare": false,
      "start": 3784,
      "end": 4257
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "ClassExpression",
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "J",
            "optional": false,
            "typeAnnotation": null,
            "start": 4270,
            "end": 4271
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
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4279,
                      "end": 4280
                    },
                    "start": 4278,
                    "end": 4280
                  }
                ],
                "key": {
                  "type": "Literal",
                  "value": "property",
                  "raw": "\"property\"",
                  "start": 4282,
                  "end": 4292
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4295,
                    "end": 4298
                  },
                  "start": 4293,
                  "end": 4298
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 4278,
                "end": 4299
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4305,
                      "end": 4306
                    },
                    "start": 4304,
                    "end": 4306
                  }
                ],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4308,
                    "end": 4314
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toStringTag",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4315,
                    "end": 4326
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4308,
                  "end": 4326
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4329,
                    "end": 4332
                  },
                  "start": 4327,
                  "end": 4332
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 4304,
                "end": 4333
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4339,
                      "end": 4340
                    },
                    "start": 4338,
                    "end": 4340
                  }
                ],
                "key": {
                  "type": "Literal",
                  "value": "property2",
                  "raw": "\"property2\"",
                  "start": 4342,
                  "end": 4353
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4356,
                    "end": 4359
                  },
                  "start": 4354,
                  "end": 4359
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 4362,
                  "end": 4363
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 4338,
                "end": 4364
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4370,
                      "end": 4371
                    },
                    "start": 4369,
                    "end": 4371
                  }
                ],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4373,
                    "end": 4379
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4380,
                    "end": 4388
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4373,
                  "end": 4388
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4391,
                    "end": 4394
                  },
                  "start": 4389,
                  "end": 4394
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4397,
                  "end": 4401
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 4369,
                "end": 4402
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "Literal",
                  "value": "property3",
                  "raw": "\"property3\"",
                  "start": 4408,
                  "end": 4419
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4422,
                    "end": 4425
                  },
                  "start": 4420,
                  "end": 4425
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 4407,
                "end": 4426
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4432,
                    "end": 4438
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isConcatSpreadable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4439,
                    "end": 4457
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4432,
                  "end": 4457
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4460,
                    "end": 4463
                  },
                  "start": 4458,
                  "end": 4463
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 4431,
                "end": 4464
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "Literal",
                  "value": "property4",
                  "raw": "\"property4\"",
                  "start": 4470,
                  "end": 4481
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4484,
                    "end": 4487
                  },
                  "start": 4482,
                  "end": 4487
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 4490,
                  "end": 4491
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 4469,
                "end": 4492
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4498,
                    "end": 4504
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "match",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4505,
                    "end": 4510
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4498,
                  "end": 4510
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4513,
                    "end": 4516
                  },
                  "start": 4511,
                  "end": 4516
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4519,
                  "end": 4523
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 4497,
                "end": 4524
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4530,
                    "end": 4533
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 4530,
                  "end": 4535
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4538,
                    "end": 4541
                  },
                  "start": 4536,
                  "end": 4541
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 4529,
                "end": 4542
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4548,
                      "end": 4549
                    },
                    "start": 4547,
                    "end": 4549
                  }
                ],
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4551,
                    "end": 4554
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 4551,
                  "end": 4556
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4559,
                    "end": 4562
                  },
                  "start": 4557,
                  "end": 4562
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 4547,
                "end": 4563
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4569,
                      "end": 4570
                    },
                    "start": 4568,
                    "end": 4570
                  }
                ],
                "key": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4572,
                    "end": 4575
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 4572,
                  "end": 4577
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4580,
                    "end": 4583
                  },
                  "start": 4578,
                  "end": 4583
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4586,
                  "end": 4590
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 4568,
                "end": 4591
              },
              {
                "type": "MethodDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4597,
                      "end": 4598
                    },
                    "start": 4596,
                    "end": 4598
                  }
                ],
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "some",
                    "raw": "\"some\"",
                    "start": 4600,
                    "end": 4606
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": "method",
                    "raw": "\"method\"",
                    "start": 4609,
                    "end": 4617
                  },
                  "start": 4600,
                  "end": 4617
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
                    "body": [],
                    "start": 4621,
                    "end": 4623
                  },
                  "expression": false,
                  "start": 4618,
                  "end": 4623
                },
                "kind": "method",
                "computed": true,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 4596,
                "end": 4623
              },
              {
                "type": "PropertyDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4629,
                  "end": 4639
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4642,
                    "end": 4645
                  },
                  "start": 4640,
                  "end": 4645
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 4628,
                "end": 4646
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4652,
                      "end": 4653
                    },
                    "start": 4651,
                    "end": 4653
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4655,
                  "end": 4665
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4668,
                    "end": 4671
                  },
                  "start": 4666,
                  "end": 4671
                },
                "value": null,
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 4651,
                "end": 4672
              },
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "some",
                    "raw": "\"some\"",
                    "start": 4678,
                    "end": 4684
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": "method2",
                    "raw": "\"method2\"",
                    "start": 4687,
                    "end": 4696
                  },
                  "start": 4678,
                  "end": 4696
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
                    "body": [],
                    "start": 4700,
                    "end": 4702
                  },
                  "expression": false,
                  "start": 4697,
                  "end": 4702
                },
                "kind": "method",
                "computed": true,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 4677,
                "end": 4702
              },
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4708,
                      "end": 4709
                    },
                    "start": 4707,
                    "end": 4709
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4711,
                  "end": 4721
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4724,
                    "end": 4727
                  },
                  "start": 4722,
                  "end": 4727
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 4730,
                  "end": 4734
                },
                "computed": true,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 4707,
                "end": 4735
              }
            ],
            "start": 4272,
            "end": 4737
          },
          "abstract": false,
          "declare": false,
          "start": 4264,
          "end": 4737
        },
        "prefix": true,
        "start": 4259,
        "end": 4737
      },
      "directive": null,
      "start": 4259,
      "end": 4738
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4738
}
```
