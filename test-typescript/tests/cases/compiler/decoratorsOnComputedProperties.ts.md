__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 4738,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 41,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 38,
        "end": 41,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 11,
          "end": 20,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 12,
            "end": 20,
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 14,
              "end": 20
            }
          }
        },
        {
          "type": "Identifier",
          "start": 22,
          "end": 36,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 23,
            "end": 36,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 25,
              "end": 36,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 25,
                "end": 36,
                "decorators": [],
                "name": "PropertyKey",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 42,
      "end": 52,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 46,
          "end": 51,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 50,
            "end": 51,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "FunctionDeclaration",
      "start": 53,
      "end": 96,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 76,
        "end": 96,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 78,
            "end": 94,
            "argument": {
              "type": "BinaryExpression",
              "start": 85,
              "end": 93,
              "operator": "+",
              "left": {
                "type": "UpdateExpression",
                "start": 85,
                "end": 88,
                "argument": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 88,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "++",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 91,
                "end": 93,
                "raw": "\"\"",
                "value": "",
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 65,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 67,
        "end": 75,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 69,
          "end": 75
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 98,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 104,
          "end": 137,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 104,
            "end": 122,
            "decorators": [],
            "name": "fieldNameA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 122,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 116,
                "end": 122
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 125,
            "end": 137,
            "raw": "\"fieldName1\"",
            "value": "fieldName1",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 139,
      "end": 179,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 145,
          "end": 178,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 145,
            "end": 163,
            "decorators": [],
            "name": "fieldNameB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 155,
              "end": 163,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 157,
                "end": 163
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 166,
            "end": 178,
            "raw": "\"fieldName2\"",
            "value": "fieldName2",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 180,
      "end": 220,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 186,
          "end": 219,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 186,
            "end": 204,
            "decorators": [],
            "name": "fieldNameC",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 196,
              "end": 204,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 198,
                "end": 204
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 207,
            "end": 219,
            "raw": "\"fieldName3\"",
            "value": "fieldName3",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 222,
      "end": 633,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 230,
        "end": 633,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 236,
            "end": 257,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 236,
                "end": 238,
                "expression": {
                  "type": "Identifier",
                  "start": 237,
                  "end": 238,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 240,
              "end": 250,
              "raw": "\"property\"",
              "value": "property",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 251,
              "end": 256,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 253,
                "end": 256
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 262,
            "end": 291,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 262,
                "end": 264,
                "expression": {
                  "type": "Identifier",
                  "start": 263,
                  "end": 264,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "start": 266,
              "end": 284,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 266,
                "end": 272,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 273,
                "end": 284,
                "decorators": [],
                "name": "toStringTag",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 285,
              "end": 290,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 287,
                "end": 290
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 296,
            "end": 322,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 296,
                "end": 298,
                "expression": {
                  "type": "Identifier",
                  "start": 297,
                  "end": 298,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 300,
              "end": 311,
              "raw": "\"property2\"",
              "value": "property2",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 312,
              "end": 317,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 314,
                "end": 317
              }
            },
            "value": {
              "type": "Literal",
              "start": 320,
              "end": 321,
              "raw": "2",
              "value": 2,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 327,
            "end": 360,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 327,
                "end": 329,
                "expression": {
                  "type": "Identifier",
                  "start": 328,
                  "end": 329,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "start": 331,
              "end": 346,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 331,
                "end": 337,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 338,
                "end": 346,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 347,
              "end": 352,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 349,
                "end": 352
              }
            },
            "value": {
              "type": "Literal",
              "start": 355,
              "end": 359,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 365,
            "end": 384,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 366,
              "end": 377,
              "raw": "\"property3\"",
              "value": "property3",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 378,
              "end": 383,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 380,
                "end": 383
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 389,
            "end": 422,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "start": 390,
              "end": 415,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 390,
                "end": 396,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 397,
                "end": 415,
                "decorators": [],
                "name": "isConcatSpreadable",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 416,
              "end": 421,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 418,
                "end": 421
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 427,
            "end": 450,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 428,
              "end": 439,
              "raw": "\"property4\"",
              "value": "property4",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 440,
              "end": 445,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 442,
                "end": 445
              }
            },
            "value": {
              "type": "Literal",
              "start": 448,
              "end": 449,
              "raw": "2",
              "value": 2,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 455,
            "end": 482,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "start": 456,
              "end": 468,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 456,
                "end": 462,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 463,
                "end": 468,
                "decorators": [],
                "name": "match",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 469,
              "end": 474,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 471,
                "end": 474
              }
            },
            "value": {
              "type": "Literal",
              "start": 477,
              "end": 481,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 487,
            "end": 500,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "CallExpression",
              "start": 488,
              "end": 493,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 488,
                "end": 491,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 494,
              "end": 499,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 496,
                "end": 499
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 505,
            "end": 521,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 505,
                "end": 507,
                "expression": {
                  "type": "Identifier",
                  "start": 506,
                  "end": 507,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "CallExpression",
              "start": 509,
              "end": 514,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 509,
                "end": 512,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 515,
              "end": 520,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 517,
                "end": 520
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 526,
            "end": 549,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 526,
                "end": 528,
                "expression": {
                  "type": "Identifier",
                  "start": 527,
                  "end": 528,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "CallExpression",
              "start": 530,
              "end": 535,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 530,
                "end": 533,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 536,
              "end": 541,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 538,
                "end": 541
              }
            },
            "value": {
              "type": "Literal",
              "start": 544,
              "end": 548,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 554,
            "end": 572,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 555,
              "end": 565,
              "decorators": [],
              "name": "fieldNameA",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 566,
              "end": 571,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 568,
                "end": 571
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 577,
            "end": 598,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 577,
                "end": 579,
                "expression": {
                  "type": "Identifier",
                  "start": 578,
                  "end": 579,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 581,
              "end": 591,
              "decorators": [],
              "name": "fieldNameB",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 592,
              "end": 597,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 594,
                "end": 597
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 603,
            "end": 631,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 603,
                "end": 605,
                "expression": {
                  "type": "Identifier",
                  "start": 604,
                  "end": 605,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 607,
              "end": 617,
              "decorators": [],
              "name": "fieldNameC",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 618,
              "end": 623,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 620,
                "end": 623
              }
            },
            "value": {
              "type": "Literal",
              "start": 626,
              "end": 630,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 228,
        "end": 229,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 635,
      "end": 1052,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 635,
        "end": 1051,
        "argument": {
          "type": "ClassExpression",
          "start": 640,
          "end": 1051,
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "start": 648,
            "end": 1051,
            "body": [
              {
                "type": "PropertyDefinition",
                "start": 654,
                "end": 675,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 654,
                    "end": 656,
                    "expression": {
                      "type": "Identifier",
                      "start": 655,
                      "end": 656,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "start": 658,
                  "end": 668,
                  "raw": "\"property\"",
                  "value": "property",
                  "regex": null,
                  "bigint": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 669,
                  "end": 674,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 671,
                    "end": 674
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 680,
                "end": 709,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 680,
                    "end": 682,
                    "expression": {
                      "type": "Identifier",
                      "start": 681,
                      "end": 682,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "start": 684,
                  "end": 702,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 684,
                    "end": 690,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 691,
                    "end": 702,
                    "decorators": [],
                    "name": "toStringTag",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 703,
                  "end": 708,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 705,
                    "end": 708
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 714,
                "end": 740,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 714,
                    "end": 716,
                    "expression": {
                      "type": "Identifier",
                      "start": 715,
                      "end": 716,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "start": 718,
                  "end": 729,
                  "raw": "\"property2\"",
                  "value": "property2",
                  "regex": null,
                  "bigint": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 730,
                  "end": 735,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 732,
                    "end": 735
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 738,
                  "end": 739,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "PropertyDefinition",
                "start": 745,
                "end": 778,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 745,
                    "end": 747,
                    "expression": {
                      "type": "Identifier",
                      "start": 746,
                      "end": 747,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "start": 749,
                  "end": 764,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 749,
                    "end": 755,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 756,
                    "end": 764,
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 765,
                  "end": 770,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 767,
                    "end": 770
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 773,
                  "end": 777,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "PropertyDefinition",
                "start": 783,
                "end": 802,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "start": 784,
                  "end": 795,
                  "raw": "\"property3\"",
                  "value": "property3",
                  "regex": null,
                  "bigint": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 796,
                  "end": 801,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 798,
                    "end": 801
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 807,
                "end": 840,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "start": 808,
                  "end": 833,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 808,
                    "end": 814,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 815,
                    "end": 833,
                    "decorators": [],
                    "name": "isConcatSpreadable",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 834,
                  "end": 839,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 836,
                    "end": 839
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 845,
                "end": 868,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "start": 846,
                  "end": 857,
                  "raw": "\"property4\"",
                  "value": "property4",
                  "regex": null,
                  "bigint": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 858,
                  "end": 863,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 860,
                    "end": 863
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 866,
                  "end": 867,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "PropertyDefinition",
                "start": 873,
                "end": 900,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "start": 874,
                  "end": 886,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 874,
                    "end": 880,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 881,
                    "end": 886,
                    "decorators": [],
                    "name": "match",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 887,
                  "end": 892,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 889,
                    "end": 892
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 895,
                  "end": 899,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "PropertyDefinition",
                "start": 905,
                "end": 918,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "CallExpression",
                  "start": 906,
                  "end": 911,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 906,
                    "end": 909,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 912,
                  "end": 917,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 914,
                    "end": 917
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 923,
                "end": 939,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 923,
                    "end": 925,
                    "expression": {
                      "type": "Identifier",
                      "start": 924,
                      "end": 925,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "CallExpression",
                  "start": 927,
                  "end": 932,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 927,
                    "end": 930,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 933,
                  "end": 938,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 935,
                    "end": 938
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 944,
                "end": 967,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 944,
                    "end": 946,
                    "expression": {
                      "type": "Identifier",
                      "start": 945,
                      "end": 946,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "CallExpression",
                  "start": 948,
                  "end": 953,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 948,
                    "end": 951,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 954,
                  "end": 959,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 956,
                    "end": 959
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 962,
                  "end": 966,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "PropertyDefinition",
                "start": 972,
                "end": 990,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "Identifier",
                  "start": 973,
                  "end": 983,
                  "decorators": [],
                  "name": "fieldNameA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 984,
                  "end": 989,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 986,
                    "end": 989
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 995,
                "end": 1016,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 995,
                    "end": 997,
                    "expression": {
                      "type": "Identifier",
                      "start": 996,
                      "end": 997,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Identifier",
                  "start": 999,
                  "end": 1009,
                  "decorators": [],
                  "name": "fieldNameB",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1010,
                  "end": 1015,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1012,
                    "end": 1015
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 1021,
                "end": 1049,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 1021,
                    "end": 1023,
                    "expression": {
                      "type": "Identifier",
                      "start": 1022,
                      "end": 1023,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Identifier",
                  "start": 1025,
                  "end": 1035,
                  "decorators": [],
                  "name": "fieldNameC",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1036,
                  "end": 1041,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1038,
                    "end": 1041
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 1044,
                  "end": 1048,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          },
          "declare": false,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "start": 646,
            "end": 647,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "implements": [],
          "superClass": null,
          "superTypeArguments": null,
          "typeParameters": null
        },
        "operator": "void",
        "prefix": true
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1054,
      "end": 1494,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1062,
        "end": 1494,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1068,
            "end": 1089,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1068,
                "end": 1070,
                "expression": {
                  "type": "Identifier",
                  "start": 1069,
                  "end": 1070,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 1072,
              "end": 1082,
              "raw": "\"property\"",
              "value": "property",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1083,
              "end": 1088,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1085,
                "end": 1088
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1094,
            "end": 1123,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1094,
                "end": 1096,
                "expression": {
                  "type": "Identifier",
                  "start": 1095,
                  "end": 1096,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "start": 1098,
              "end": 1116,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1098,
                "end": 1104,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1105,
                "end": 1116,
                "decorators": [],
                "name": "toStringTag",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1117,
              "end": 1122,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1119,
                "end": 1122
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1128,
            "end": 1154,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1128,
                "end": 1130,
                "expression": {
                  "type": "Identifier",
                  "start": 1129,
                  "end": 1130,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 1132,
              "end": 1143,
              "raw": "\"property2\"",
              "value": "property2",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1144,
              "end": 1149,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1146,
                "end": 1149
              }
            },
            "value": {
              "type": "Literal",
              "start": 1152,
              "end": 1153,
              "raw": "2",
              "value": 2,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1159,
            "end": 1192,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1159,
                "end": 1161,
                "expression": {
                  "type": "Identifier",
                  "start": 1160,
                  "end": 1161,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "start": 1163,
              "end": 1178,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1163,
                "end": 1169,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1170,
                "end": 1178,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1179,
              "end": 1184,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1181,
                "end": 1184
              }
            },
            "value": {
              "type": "Literal",
              "start": 1187,
              "end": 1191,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1197,
            "end": 1216,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 1198,
              "end": 1209,
              "raw": "\"property3\"",
              "value": "property3",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1210,
              "end": 1215,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1212,
                "end": 1215
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1221,
            "end": 1254,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "start": 1222,
              "end": 1247,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1222,
                "end": 1228,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1229,
                "end": 1247,
                "decorators": [],
                "name": "isConcatSpreadable",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1248,
              "end": 1253,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1250,
                "end": 1253
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1259,
            "end": 1282,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 1260,
              "end": 1271,
              "raw": "\"property4\"",
              "value": "property4",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1272,
              "end": 1277,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1274,
                "end": 1277
              }
            },
            "value": {
              "type": "Literal",
              "start": 1280,
              "end": 1281,
              "raw": "2",
              "value": 2,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1287,
            "end": 1314,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "start": 1288,
              "end": 1300,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1288,
                "end": 1294,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1295,
                "end": 1300,
                "decorators": [],
                "name": "match",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1301,
              "end": 1306,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1303,
                "end": 1306
              }
            },
            "value": {
              "type": "Literal",
              "start": 1309,
              "end": 1313,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1319,
            "end": 1332,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "CallExpression",
              "start": 1320,
              "end": 1325,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1320,
                "end": 1323,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1326,
              "end": 1331,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1328,
                "end": 1331
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1337,
            "end": 1353,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1337,
                "end": 1339,
                "expression": {
                  "type": "Identifier",
                  "start": 1338,
                  "end": 1339,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "CallExpression",
              "start": 1341,
              "end": 1346,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1341,
                "end": 1344,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1347,
              "end": 1352,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1349,
                "end": 1352
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1358,
            "end": 1381,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1358,
                "end": 1360,
                "expression": {
                  "type": "Identifier",
                  "start": 1359,
                  "end": 1360,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "CallExpression",
              "start": 1362,
              "end": 1367,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1362,
                "end": 1365,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1368,
              "end": 1373,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1370,
                "end": 1373
              }
            },
            "value": {
              "type": "Literal",
              "start": 1376,
              "end": 1380,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 1386,
            "end": 1404,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1387,
              "end": 1397,
              "decorators": [],
              "name": "fieldNameA",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1398,
              "end": 1403,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1400,
                "end": 1403
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1409,
            "end": 1430,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1409,
                "end": 1411,
                "expression": {
                  "type": "Identifier",
                  "start": 1410,
                  "end": 1411,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1413,
              "end": 1423,
              "decorators": [],
              "name": "fieldNameB",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1424,
              "end": 1429,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1426,
                "end": 1429
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1435,
            "end": 1463,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1435,
                "end": 1437,
                "expression": {
                  "type": "Identifier",
                  "start": 1436,
                  "end": 1437,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1439,
              "end": 1449,
              "decorators": [],
              "name": "fieldNameC",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1450,
              "end": 1455,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1452,
                "end": 1455
              }
            },
            "value": {
              "type": "Literal",
              "start": 1458,
              "end": 1462,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1468,
            "end": 1492,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "BinaryExpression",
              "start": 1469,
              "end": 1486,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 1469,
                "end": 1475,
                "raw": "\"some\"",
                "value": "some",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Literal",
                "start": 1478,
                "end": 1486,
                "raw": "\"method\"",
                "value": "method",
                "regex": null,
                "bigint": null
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1487,
              "end": 1492,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1490,
                "end": 1492,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1060,
        "end": 1061,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1496,
      "end": 1942,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 1496,
        "end": 1941,
        "argument": {
          "type": "ClassExpression",
          "start": 1501,
          "end": 1941,
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "start": 1509,
            "end": 1941,
            "body": [
              {
                "type": "PropertyDefinition",
                "start": 1515,
                "end": 1536,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 1515,
                    "end": 1517,
                    "expression": {
                      "type": "Identifier",
                      "start": 1516,
                      "end": 1517,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "start": 1519,
                  "end": 1529,
                  "raw": "\"property\"",
                  "value": "property",
                  "regex": null,
                  "bigint": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1530,
                  "end": 1535,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1532,
                    "end": 1535
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 1541,
                "end": 1570,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 1541,
                    "end": 1543,
                    "expression": {
                      "type": "Identifier",
                      "start": 1542,
                      "end": 1543,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "start": 1545,
                  "end": 1563,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1545,
                    "end": 1551,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1552,
                    "end": 1563,
                    "decorators": [],
                    "name": "toStringTag",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1564,
                  "end": 1569,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1566,
                    "end": 1569
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 1575,
                "end": 1601,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 1575,
                    "end": 1577,
                    "expression": {
                      "type": "Identifier",
                      "start": 1576,
                      "end": 1577,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "start": 1579,
                  "end": 1590,
                  "raw": "\"property2\"",
                  "value": "property2",
                  "regex": null,
                  "bigint": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1591,
                  "end": 1596,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1593,
                    "end": 1596
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 1599,
                  "end": 1600,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "PropertyDefinition",
                "start": 1606,
                "end": 1639,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 1606,
                    "end": 1608,
                    "expression": {
                      "type": "Identifier",
                      "start": 1607,
                      "end": 1608,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "start": 1610,
                  "end": 1625,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1610,
                    "end": 1616,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1617,
                    "end": 1625,
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1626,
                  "end": 1631,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1628,
                    "end": 1631
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 1634,
                  "end": 1638,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "PropertyDefinition",
                "start": 1644,
                "end": 1663,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "start": 1645,
                  "end": 1656,
                  "raw": "\"property3\"",
                  "value": "property3",
                  "regex": null,
                  "bigint": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1657,
                  "end": 1662,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1659,
                    "end": 1662
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 1668,
                "end": 1701,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "start": 1669,
                  "end": 1694,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1669,
                    "end": 1675,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1676,
                    "end": 1694,
                    "decorators": [],
                    "name": "isConcatSpreadable",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1695,
                  "end": 1700,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1697,
                    "end": 1700
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 1706,
                "end": 1729,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "start": 1707,
                  "end": 1718,
                  "raw": "\"property4\"",
                  "value": "property4",
                  "regex": null,
                  "bigint": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1719,
                  "end": 1724,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1721,
                    "end": 1724
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 1727,
                  "end": 1728,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "PropertyDefinition",
                "start": 1734,
                "end": 1761,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "start": 1735,
                  "end": 1747,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1735,
                    "end": 1741,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1742,
                    "end": 1747,
                    "decorators": [],
                    "name": "match",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1748,
                  "end": 1753,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1750,
                    "end": 1753
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 1756,
                  "end": 1760,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "PropertyDefinition",
                "start": 1766,
                "end": 1779,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "CallExpression",
                  "start": 1767,
                  "end": 1772,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 1767,
                    "end": 1770,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1773,
                  "end": 1778,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1775,
                    "end": 1778
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 1784,
                "end": 1800,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 1784,
                    "end": 1786,
                    "expression": {
                      "type": "Identifier",
                      "start": 1785,
                      "end": 1786,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "CallExpression",
                  "start": 1788,
                  "end": 1793,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 1788,
                    "end": 1791,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1794,
                  "end": 1799,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1796,
                    "end": 1799
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 1805,
                "end": 1828,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 1805,
                    "end": 1807,
                    "expression": {
                      "type": "Identifier",
                      "start": 1806,
                      "end": 1807,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "CallExpression",
                  "start": 1809,
                  "end": 1814,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 1809,
                    "end": 1812,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1815,
                  "end": 1820,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1817,
                    "end": 1820
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 1823,
                  "end": 1827,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "PropertyDefinition",
                "start": 1833,
                "end": 1851,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "Identifier",
                  "start": 1834,
                  "end": 1844,
                  "decorators": [],
                  "name": "fieldNameA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1845,
                  "end": 1850,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1847,
                    "end": 1850
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 1856,
                "end": 1877,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 1856,
                    "end": 1858,
                    "expression": {
                      "type": "Identifier",
                      "start": 1857,
                      "end": 1858,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Identifier",
                  "start": 1860,
                  "end": 1870,
                  "decorators": [],
                  "name": "fieldNameB",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1871,
                  "end": 1876,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1873,
                    "end": 1876
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 1882,
                "end": 1910,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 1882,
                    "end": 1884,
                    "expression": {
                      "type": "Identifier",
                      "start": 1883,
                      "end": 1884,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Identifier",
                  "start": 1886,
                  "end": 1896,
                  "decorators": [],
                  "name": "fieldNameC",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1897,
                  "end": 1902,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1899,
                    "end": 1902
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 1905,
                  "end": 1909,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "MethodDefinition",
                "start": 1915,
                "end": 1939,
                "accessibility": null,
                "computed": true,
                "decorators": [],
                "key": {
                  "type": "BinaryExpression",
                  "start": 1916,
                  "end": 1933,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 1916,
                    "end": 1922,
                    "raw": "\"some\"",
                    "value": "some",
                    "regex": null,
                    "bigint": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1925,
                    "end": 1933,
                    "raw": "\"method\"",
                    "value": "method",
                    "regex": null,
                    "bigint": null
                  }
                },
                "kind": "method",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 1934,
                  "end": 1939,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1937,
                    "end": 1939,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          },
          "declare": false,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "start": 1507,
            "end": 1508,
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null
          },
          "implements": [],
          "superClass": null,
          "superTypeArguments": null,
          "typeParameters": null
        },
        "operator": "void",
        "prefix": true
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1944,
      "end": 2384,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1952,
        "end": 2384,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1958,
            "end": 1979,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1958,
                "end": 1960,
                "expression": {
                  "type": "Identifier",
                  "start": 1959,
                  "end": 1960,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 1962,
              "end": 1972,
              "raw": "\"property\"",
              "value": "property",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1973,
              "end": 1978,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1975,
                "end": 1978
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 1984,
            "end": 2013,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 1984,
                "end": 1986,
                "expression": {
                  "type": "Identifier",
                  "start": 1985,
                  "end": 1986,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "start": 1988,
              "end": 2006,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1988,
                "end": 1994,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1995,
                "end": 2006,
                "decorators": [],
                "name": "toStringTag",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2007,
              "end": 2012,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2009,
                "end": 2012
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 2018,
            "end": 2044,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 2018,
                "end": 2020,
                "expression": {
                  "type": "Identifier",
                  "start": 2019,
                  "end": 2020,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 2022,
              "end": 2033,
              "raw": "\"property2\"",
              "value": "property2",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2034,
              "end": 2039,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2036,
                "end": 2039
              }
            },
            "value": {
              "type": "Literal",
              "start": 2042,
              "end": 2043,
              "raw": "2",
              "value": 2,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 2049,
            "end": 2082,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 2049,
                "end": 2051,
                "expression": {
                  "type": "Identifier",
                  "start": 2050,
                  "end": 2051,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "start": 2053,
              "end": 2068,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2053,
                "end": 2059,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2060,
                "end": 2068,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2069,
              "end": 2074,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2071,
                "end": 2074
              }
            },
            "value": {
              "type": "Literal",
              "start": 2077,
              "end": 2081,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 2087,
            "end": 2106,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 2088,
              "end": 2099,
              "raw": "\"property3\"",
              "value": "property3",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2100,
              "end": 2105,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2102,
                "end": 2105
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 2111,
            "end": 2144,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "start": 2112,
              "end": 2137,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2112,
                "end": 2118,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2119,
                "end": 2137,
                "decorators": [],
                "name": "isConcatSpreadable",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2138,
              "end": 2143,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2140,
                "end": 2143
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 2149,
            "end": 2172,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 2150,
              "end": 2161,
              "raw": "\"property4\"",
              "value": "property4",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2162,
              "end": 2167,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2164,
                "end": 2167
              }
            },
            "value": {
              "type": "Literal",
              "start": 2170,
              "end": 2171,
              "raw": "2",
              "value": 2,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 2177,
            "end": 2204,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "start": 2178,
              "end": 2190,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2178,
                "end": 2184,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2185,
                "end": 2190,
                "decorators": [],
                "name": "match",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2191,
              "end": 2196,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2193,
                "end": 2196
              }
            },
            "value": {
              "type": "Literal",
              "start": 2199,
              "end": 2203,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 2209,
            "end": 2222,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "CallExpression",
              "start": 2210,
              "end": 2215,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 2210,
                "end": 2213,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2216,
              "end": 2221,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2218,
                "end": 2221
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 2227,
            "end": 2243,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 2227,
                "end": 2229,
                "expression": {
                  "type": "Identifier",
                  "start": 2228,
                  "end": 2229,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "CallExpression",
              "start": 2231,
              "end": 2236,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 2231,
                "end": 2234,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2237,
              "end": 2242,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2239,
                "end": 2242
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 2248,
            "end": 2271,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 2248,
                "end": 2250,
                "expression": {
                  "type": "Identifier",
                  "start": 2249,
                  "end": 2250,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "CallExpression",
              "start": 2252,
              "end": 2257,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 2252,
                "end": 2255,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2258,
              "end": 2263,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2260,
                "end": 2263
              }
            },
            "value": {
              "type": "Literal",
              "start": 2266,
              "end": 2270,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 2276,
            "end": 2300,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "BinaryExpression",
              "start": 2277,
              "end": 2294,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 2277,
                "end": 2283,
                "raw": "\"some\"",
                "value": "some",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Literal",
                "start": 2286,
                "end": 2294,
                "raw": "\"method\"",
                "value": "method",
                "regex": null,
                "bigint": null
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 2295,
              "end": 2300,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 2298,
                "end": 2300,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 2305,
            "end": 2323,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 2306,
              "end": 2316,
              "decorators": [],
              "name": "fieldNameA",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2317,
              "end": 2322,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2319,
                "end": 2322
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 2328,
            "end": 2349,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 2328,
                "end": 2330,
                "expression": {
                  "type": "Identifier",
                  "start": 2329,
                  "end": 2330,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 2332,
              "end": 2342,
              "decorators": [],
              "name": "fieldNameB",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2343,
              "end": 2348,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2345,
                "end": 2348
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 2354,
            "end": 2382,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 2354,
                "end": 2356,
                "expression": {
                  "type": "Identifier",
                  "start": 2355,
                  "end": 2356,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 2358,
              "end": 2368,
              "decorators": [],
              "name": "fieldNameC",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2369,
              "end": 2374,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2371,
                "end": 2374
              }
            },
            "value": {
              "type": "Literal",
              "start": 2377,
              "end": 2381,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1950,
        "end": 1951,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2386,
      "end": 2832,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 2386,
        "end": 2831,
        "argument": {
          "type": "ClassExpression",
          "start": 2391,
          "end": 2831,
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "start": 2399,
            "end": 2831,
            "body": [
              {
                "type": "PropertyDefinition",
                "start": 2405,
                "end": 2426,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 2405,
                    "end": 2407,
                    "expression": {
                      "type": "Identifier",
                      "start": 2406,
                      "end": 2407,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "start": 2409,
                  "end": 2419,
                  "raw": "\"property\"",
                  "value": "property",
                  "regex": null,
                  "bigint": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2420,
                  "end": 2425,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2422,
                    "end": 2425
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 2431,
                "end": 2460,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 2431,
                    "end": 2433,
                    "expression": {
                      "type": "Identifier",
                      "start": 2432,
                      "end": 2433,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "start": 2435,
                  "end": 2453,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2435,
                    "end": 2441,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2442,
                    "end": 2453,
                    "decorators": [],
                    "name": "toStringTag",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2454,
                  "end": 2459,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2456,
                    "end": 2459
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 2465,
                "end": 2491,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 2465,
                    "end": 2467,
                    "expression": {
                      "type": "Identifier",
                      "start": 2466,
                      "end": 2467,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "start": 2469,
                  "end": 2480,
                  "raw": "\"property2\"",
                  "value": "property2",
                  "regex": null,
                  "bigint": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2481,
                  "end": 2486,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2483,
                    "end": 2486
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 2489,
                  "end": 2490,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "PropertyDefinition",
                "start": 2496,
                "end": 2529,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 2496,
                    "end": 2498,
                    "expression": {
                      "type": "Identifier",
                      "start": 2497,
                      "end": 2498,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "start": 2500,
                  "end": 2515,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2500,
                    "end": 2506,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2507,
                    "end": 2515,
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2516,
                  "end": 2521,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2518,
                    "end": 2521
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 2524,
                  "end": 2528,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "PropertyDefinition",
                "start": 2534,
                "end": 2553,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "start": 2535,
                  "end": 2546,
                  "raw": "\"property3\"",
                  "value": "property3",
                  "regex": null,
                  "bigint": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2547,
                  "end": 2552,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2549,
                    "end": 2552
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 2558,
                "end": 2591,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "start": 2559,
                  "end": 2584,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2559,
                    "end": 2565,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2566,
                    "end": 2584,
                    "decorators": [],
                    "name": "isConcatSpreadable",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2585,
                  "end": 2590,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2587,
                    "end": 2590
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 2596,
                "end": 2619,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "start": 2597,
                  "end": 2608,
                  "raw": "\"property4\"",
                  "value": "property4",
                  "regex": null,
                  "bigint": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2609,
                  "end": 2614,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2611,
                    "end": 2614
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 2617,
                  "end": 2618,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "PropertyDefinition",
                "start": 2624,
                "end": 2651,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "start": 2625,
                  "end": 2637,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2625,
                    "end": 2631,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2632,
                    "end": 2637,
                    "decorators": [],
                    "name": "match",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2638,
                  "end": 2643,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2640,
                    "end": 2643
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 2646,
                  "end": 2650,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "PropertyDefinition",
                "start": 2656,
                "end": 2669,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "CallExpression",
                  "start": 2657,
                  "end": 2662,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 2657,
                    "end": 2660,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2663,
                  "end": 2668,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2665,
                    "end": 2668
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 2674,
                "end": 2690,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 2674,
                    "end": 2676,
                    "expression": {
                      "type": "Identifier",
                      "start": 2675,
                      "end": 2676,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "CallExpression",
                  "start": 2678,
                  "end": 2683,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 2678,
                    "end": 2681,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2684,
                  "end": 2689,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2686,
                    "end": 2689
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 2695,
                "end": 2718,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 2695,
                    "end": 2697,
                    "expression": {
                      "type": "Identifier",
                      "start": 2696,
                      "end": 2697,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "CallExpression",
                  "start": 2699,
                  "end": 2704,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 2699,
                    "end": 2702,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2705,
                  "end": 2710,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2707,
                    "end": 2710
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 2713,
                  "end": 2717,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "MethodDefinition",
                "start": 2723,
                "end": 2747,
                "accessibility": null,
                "computed": true,
                "decorators": [],
                "key": {
                  "type": "BinaryExpression",
                  "start": 2724,
                  "end": 2741,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 2724,
                    "end": 2730,
                    "raw": "\"some\"",
                    "value": "some",
                    "regex": null,
                    "bigint": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 2733,
                    "end": 2741,
                    "raw": "\"method\"",
                    "value": "method",
                    "regex": null,
                    "bigint": null
                  }
                },
                "kind": "method",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 2742,
                  "end": 2747,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 2745,
                    "end": 2747,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "PropertyDefinition",
                "start": 2752,
                "end": 2770,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "Identifier",
                  "start": 2753,
                  "end": 2763,
                  "decorators": [],
                  "name": "fieldNameA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2764,
                  "end": 2769,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2766,
                    "end": 2769
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 2775,
                "end": 2796,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 2775,
                    "end": 2777,
                    "expression": {
                      "type": "Identifier",
                      "start": 2776,
                      "end": 2777,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Identifier",
                  "start": 2779,
                  "end": 2789,
                  "decorators": [],
                  "name": "fieldNameB",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2790,
                  "end": 2795,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2792,
                    "end": 2795
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 2801,
                "end": 2829,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 2801,
                    "end": 2803,
                    "expression": {
                      "type": "Identifier",
                      "start": 2802,
                      "end": 2803,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Identifier",
                  "start": 2805,
                  "end": 2815,
                  "decorators": [],
                  "name": "fieldNameC",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2816,
                  "end": 2821,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 2818,
                    "end": 2821
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 2824,
                  "end": 2828,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          },
          "declare": false,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "start": 2397,
            "end": 2398,
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null
          },
          "implements": [],
          "superClass": null,
          "superTypeArguments": null,
          "typeParameters": null
        },
        "operator": "void",
        "prefix": true
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 2834,
      "end": 3304,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 2842,
        "end": 3304,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 2848,
            "end": 2869,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 2848,
                "end": 2850,
                "expression": {
                  "type": "Identifier",
                  "start": 2849,
                  "end": 2850,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 2852,
              "end": 2862,
              "raw": "\"property\"",
              "value": "property",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2863,
              "end": 2868,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2865,
                "end": 2868
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 2874,
            "end": 2903,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 2874,
                "end": 2876,
                "expression": {
                  "type": "Identifier",
                  "start": 2875,
                  "end": 2876,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "start": 2878,
              "end": 2896,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2878,
                "end": 2884,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2885,
                "end": 2896,
                "decorators": [],
                "name": "toStringTag",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2897,
              "end": 2902,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2899,
                "end": 2902
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 2908,
            "end": 2934,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 2908,
                "end": 2910,
                "expression": {
                  "type": "Identifier",
                  "start": 2909,
                  "end": 2910,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 2912,
              "end": 2923,
              "raw": "\"property2\"",
              "value": "property2",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2924,
              "end": 2929,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2926,
                "end": 2929
              }
            },
            "value": {
              "type": "Literal",
              "start": 2932,
              "end": 2933,
              "raw": "2",
              "value": 2,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 2939,
            "end": 2972,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 2939,
                "end": 2941,
                "expression": {
                  "type": "Identifier",
                  "start": 2940,
                  "end": 2941,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "start": 2943,
              "end": 2958,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2943,
                "end": 2949,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2950,
                "end": 2958,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2959,
              "end": 2964,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2961,
                "end": 2964
              }
            },
            "value": {
              "type": "Literal",
              "start": 2967,
              "end": 2971,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 2977,
            "end": 2996,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 2978,
              "end": 2989,
              "raw": "\"property3\"",
              "value": "property3",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2990,
              "end": 2995,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2992,
                "end": 2995
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 3001,
            "end": 3034,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "start": 3002,
              "end": 3027,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3002,
                "end": 3008,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3009,
                "end": 3027,
                "decorators": [],
                "name": "isConcatSpreadable",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3028,
              "end": 3033,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3030,
                "end": 3033
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 3039,
            "end": 3062,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 3040,
              "end": 3051,
              "raw": "\"property4\"",
              "value": "property4",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3052,
              "end": 3057,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3054,
                "end": 3057
              }
            },
            "value": {
              "type": "Literal",
              "start": 3060,
              "end": 3061,
              "raw": "2",
              "value": 2,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 3067,
            "end": 3094,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "start": 3068,
              "end": 3080,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3068,
                "end": 3074,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3075,
                "end": 3080,
                "decorators": [],
                "name": "match",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3081,
              "end": 3086,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3083,
                "end": 3086
              }
            },
            "value": {
              "type": "Literal",
              "start": 3089,
              "end": 3093,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 3099,
            "end": 3112,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "CallExpression",
              "start": 3100,
              "end": 3105,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 3100,
                "end": 3103,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3106,
              "end": 3111,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3108,
                "end": 3111
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 3117,
            "end": 3133,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 3117,
                "end": 3119,
                "expression": {
                  "type": "Identifier",
                  "start": 3118,
                  "end": 3119,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "CallExpression",
              "start": 3121,
              "end": 3126,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 3121,
                "end": 3124,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3127,
              "end": 3132,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3129,
                "end": 3132
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 3138,
            "end": 3161,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 3138,
                "end": 3140,
                "expression": {
                  "type": "Identifier",
                  "start": 3139,
                  "end": 3140,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "CallExpression",
              "start": 3142,
              "end": 3147,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 3142,
                "end": 3145,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3148,
              "end": 3153,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3150,
                "end": 3153
              }
            },
            "value": {
              "type": "Literal",
              "start": 3156,
              "end": 3160,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 3166,
            "end": 3190,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "BinaryExpression",
              "start": 3167,
              "end": 3184,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 3167,
                "end": 3173,
                "raw": "\"some\"",
                "value": "some",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Literal",
                "start": 3176,
                "end": 3184,
                "raw": "\"method\"",
                "value": "method",
                "regex": null,
                "bigint": null
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 3185,
              "end": 3190,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 3188,
                "end": 3190,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 3195,
            "end": 3213,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 3196,
              "end": 3206,
              "decorators": [],
              "name": "fieldNameA",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3207,
              "end": 3212,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3209,
                "end": 3212
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 3218,
            "end": 3239,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 3218,
                "end": 3220,
                "expression": {
                  "type": "Identifier",
                  "start": 3219,
                  "end": 3220,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 3222,
              "end": 3232,
              "decorators": [],
              "name": "fieldNameB",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3233,
              "end": 3238,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3235,
                "end": 3238
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 3244,
            "end": 3269,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "BinaryExpression",
              "start": 3245,
              "end": 3263,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 3245,
                "end": 3251,
                "raw": "\"some\"",
                "value": "some",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Literal",
                "start": 3254,
                "end": 3263,
                "raw": "\"method2\"",
                "value": "method2",
                "regex": null,
                "bigint": null
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 3264,
              "end": 3269,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 3267,
                "end": 3269,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 3274,
            "end": 3302,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 3274,
                "end": 3276,
                "expression": {
                  "type": "Identifier",
                  "start": 3275,
                  "end": 3276,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 3278,
              "end": 3288,
              "decorators": [],
              "name": "fieldNameC",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3289,
              "end": 3294,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3291,
                "end": 3294
              }
            },
            "value": {
              "type": "Literal",
              "start": 3297,
              "end": 3301,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2840,
        "end": 2841,
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3306,
      "end": 3782,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 3306,
        "end": 3781,
        "argument": {
          "type": "ClassExpression",
          "start": 3311,
          "end": 3781,
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "start": 3319,
            "end": 3781,
            "body": [
              {
                "type": "PropertyDefinition",
                "start": 3325,
                "end": 3346,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 3325,
                    "end": 3327,
                    "expression": {
                      "type": "Identifier",
                      "start": 3326,
                      "end": 3327,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "start": 3329,
                  "end": 3339,
                  "raw": "\"property\"",
                  "value": "property",
                  "regex": null,
                  "bigint": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3340,
                  "end": 3345,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3342,
                    "end": 3345
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 3351,
                "end": 3380,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 3351,
                    "end": 3353,
                    "expression": {
                      "type": "Identifier",
                      "start": 3352,
                      "end": 3353,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "start": 3355,
                  "end": 3373,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 3355,
                    "end": 3361,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 3362,
                    "end": 3373,
                    "decorators": [],
                    "name": "toStringTag",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3374,
                  "end": 3379,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3376,
                    "end": 3379
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 3385,
                "end": 3411,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 3385,
                    "end": 3387,
                    "expression": {
                      "type": "Identifier",
                      "start": 3386,
                      "end": 3387,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "start": 3389,
                  "end": 3400,
                  "raw": "\"property2\"",
                  "value": "property2",
                  "regex": null,
                  "bigint": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3401,
                  "end": 3406,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3403,
                    "end": 3406
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 3409,
                  "end": 3410,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "PropertyDefinition",
                "start": 3416,
                "end": 3449,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 3416,
                    "end": 3418,
                    "expression": {
                      "type": "Identifier",
                      "start": 3417,
                      "end": 3418,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "start": 3420,
                  "end": 3435,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 3420,
                    "end": 3426,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 3427,
                    "end": 3435,
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3436,
                  "end": 3441,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3438,
                    "end": 3441
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 3444,
                  "end": 3448,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "PropertyDefinition",
                "start": 3454,
                "end": 3473,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "start": 3455,
                  "end": 3466,
                  "raw": "\"property3\"",
                  "value": "property3",
                  "regex": null,
                  "bigint": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3467,
                  "end": 3472,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3469,
                    "end": 3472
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 3478,
                "end": 3511,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "start": 3479,
                  "end": 3504,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 3479,
                    "end": 3485,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 3486,
                    "end": 3504,
                    "decorators": [],
                    "name": "isConcatSpreadable",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3505,
                  "end": 3510,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3507,
                    "end": 3510
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 3516,
                "end": 3539,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "start": 3517,
                  "end": 3528,
                  "raw": "\"property4\"",
                  "value": "property4",
                  "regex": null,
                  "bigint": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3529,
                  "end": 3534,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3531,
                    "end": 3534
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 3537,
                  "end": 3538,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "PropertyDefinition",
                "start": 3544,
                "end": 3571,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "start": 3545,
                  "end": 3557,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 3545,
                    "end": 3551,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 3552,
                    "end": 3557,
                    "decorators": [],
                    "name": "match",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3558,
                  "end": 3563,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3560,
                    "end": 3563
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 3566,
                  "end": 3570,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "PropertyDefinition",
                "start": 3576,
                "end": 3589,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "CallExpression",
                  "start": 3577,
                  "end": 3582,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 3577,
                    "end": 3580,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3583,
                  "end": 3588,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3585,
                    "end": 3588
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 3594,
                "end": 3610,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 3594,
                    "end": 3596,
                    "expression": {
                      "type": "Identifier",
                      "start": 3595,
                      "end": 3596,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "CallExpression",
                  "start": 3598,
                  "end": 3603,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 3598,
                    "end": 3601,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3604,
                  "end": 3609,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3606,
                    "end": 3609
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 3615,
                "end": 3638,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 3615,
                    "end": 3617,
                    "expression": {
                      "type": "Identifier",
                      "start": 3616,
                      "end": 3617,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "CallExpression",
                  "start": 3619,
                  "end": 3624,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 3619,
                    "end": 3622,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3625,
                  "end": 3630,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3627,
                    "end": 3630
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 3633,
                  "end": 3637,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "MethodDefinition",
                "start": 3643,
                "end": 3667,
                "accessibility": null,
                "computed": true,
                "decorators": [],
                "key": {
                  "type": "BinaryExpression",
                  "start": 3644,
                  "end": 3661,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 3644,
                    "end": 3650,
                    "raw": "\"some\"",
                    "value": "some",
                    "regex": null,
                    "bigint": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 3653,
                    "end": 3661,
                    "raw": "\"method\"",
                    "value": "method",
                    "regex": null,
                    "bigint": null
                  }
                },
                "kind": "method",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 3662,
                  "end": 3667,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 3665,
                    "end": 3667,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "PropertyDefinition",
                "start": 3672,
                "end": 3690,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "Identifier",
                  "start": 3673,
                  "end": 3683,
                  "decorators": [],
                  "name": "fieldNameA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3684,
                  "end": 3689,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3686,
                    "end": 3689
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 3695,
                "end": 3716,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 3695,
                    "end": 3697,
                    "expression": {
                      "type": "Identifier",
                      "start": 3696,
                      "end": 3697,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Identifier",
                  "start": 3699,
                  "end": 3709,
                  "decorators": [],
                  "name": "fieldNameB",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3710,
                  "end": 3715,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3712,
                    "end": 3715
                  }
                },
                "value": null
              },
              {
                "type": "MethodDefinition",
                "start": 3721,
                "end": 3746,
                "accessibility": null,
                "computed": true,
                "decorators": [],
                "key": {
                  "type": "BinaryExpression",
                  "start": 3722,
                  "end": 3740,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 3722,
                    "end": 3728,
                    "raw": "\"some\"",
                    "value": "some",
                    "regex": null,
                    "bigint": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 3731,
                    "end": 3740,
                    "raw": "\"method2\"",
                    "value": "method2",
                    "regex": null,
                    "bigint": null
                  }
                },
                "kind": "method",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 3741,
                  "end": 3746,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 3744,
                    "end": 3746,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "PropertyDefinition",
                "start": 3751,
                "end": 3779,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 3751,
                    "end": 3753,
                    "expression": {
                      "type": "Identifier",
                      "start": 3752,
                      "end": 3753,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Identifier",
                  "start": 3755,
                  "end": 3765,
                  "decorators": [],
                  "name": "fieldNameC",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3766,
                  "end": 3771,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3768,
                    "end": 3771
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 3774,
                  "end": 3778,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          },
          "declare": false,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "start": 3317,
            "end": 3318,
            "decorators": [],
            "name": "H",
            "optional": false,
            "typeAnnotation": null
          },
          "implements": [],
          "superClass": null,
          "superTypeArguments": null,
          "typeParameters": null
        },
        "operator": "void",
        "prefix": true
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 3784,
      "end": 4257,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 3792,
        "end": 4257,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 3798,
            "end": 3819,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 3798,
                "end": 3800,
                "expression": {
                  "type": "Identifier",
                  "start": 3799,
                  "end": 3800,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 3802,
              "end": 3812,
              "raw": "\"property\"",
              "value": "property",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3813,
              "end": 3818,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3815,
                "end": 3818
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 3824,
            "end": 3853,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 3824,
                "end": 3826,
                "expression": {
                  "type": "Identifier",
                  "start": 3825,
                  "end": 3826,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "start": 3828,
              "end": 3846,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3828,
                "end": 3834,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3835,
                "end": 3846,
                "decorators": [],
                "name": "toStringTag",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3847,
              "end": 3852,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3849,
                "end": 3852
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 3858,
            "end": 3884,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 3858,
                "end": 3860,
                "expression": {
                  "type": "Identifier",
                  "start": 3859,
                  "end": 3860,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 3862,
              "end": 3873,
              "raw": "\"property2\"",
              "value": "property2",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3874,
              "end": 3879,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3876,
                "end": 3879
              }
            },
            "value": {
              "type": "Literal",
              "start": 3882,
              "end": 3883,
              "raw": "2",
              "value": 2,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 3889,
            "end": 3922,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 3889,
                "end": 3891,
                "expression": {
                  "type": "Identifier",
                  "start": 3890,
                  "end": 3891,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "start": 3893,
              "end": 3908,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3893,
                "end": 3899,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3900,
                "end": 3908,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3909,
              "end": 3914,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3911,
                "end": 3914
              }
            },
            "value": {
              "type": "Literal",
              "start": 3917,
              "end": 3921,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 3927,
            "end": 3946,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 3928,
              "end": 3939,
              "raw": "\"property3\"",
              "value": "property3",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3940,
              "end": 3945,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3942,
                "end": 3945
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 3951,
            "end": 3984,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "start": 3952,
              "end": 3977,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3952,
                "end": 3958,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3959,
                "end": 3977,
                "decorators": [],
                "name": "isConcatSpreadable",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3978,
              "end": 3983,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3980,
                "end": 3983
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 3989,
            "end": 4012,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 3990,
              "end": 4001,
              "raw": "\"property4\"",
              "value": "property4",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4002,
              "end": 4007,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4004,
                "end": 4007
              }
            },
            "value": {
              "type": "Literal",
              "start": 4010,
              "end": 4011,
              "raw": "2",
              "value": 2,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 4017,
            "end": 4044,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "start": 4018,
              "end": 4030,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4018,
                "end": 4024,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4025,
                "end": 4030,
                "decorators": [],
                "name": "match",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4031,
              "end": 4036,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4033,
                "end": 4036
              }
            },
            "value": {
              "type": "Literal",
              "start": 4039,
              "end": 4043,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 4049,
            "end": 4062,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "CallExpression",
              "start": 4050,
              "end": 4055,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 4050,
                "end": 4053,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4056,
              "end": 4061,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4058,
                "end": 4061
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 4067,
            "end": 4083,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 4067,
                "end": 4069,
                "expression": {
                  "type": "Identifier",
                  "start": 4068,
                  "end": 4069,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "CallExpression",
              "start": 4071,
              "end": 4076,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 4071,
                "end": 4074,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4077,
              "end": 4082,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4079,
                "end": 4082
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 4088,
            "end": 4111,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 4088,
                "end": 4090,
                "expression": {
                  "type": "Identifier",
                  "start": 4089,
                  "end": 4090,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "CallExpression",
              "start": 4092,
              "end": 4097,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 4092,
                "end": 4095,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4098,
              "end": 4103,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4100,
                "end": 4103
              }
            },
            "value": {
              "type": "Literal",
              "start": 4106,
              "end": 4110,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 4116,
            "end": 4143,
            "accessibility": null,
            "computed": true,
            "decorators": [
              {
                "type": "Decorator",
                "start": 4116,
                "end": 4118,
                "expression": {
                  "type": "Identifier",
                  "start": 4117,
                  "end": 4118,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "key": {
              "type": "BinaryExpression",
              "start": 4120,
              "end": 4137,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 4120,
                "end": 4126,
                "raw": "\"some\"",
                "value": "some",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Literal",
                "start": 4129,
                "end": 4137,
                "raw": "\"method\"",
                "value": "method",
                "regex": null,
                "bigint": null
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 4138,
              "end": 4143,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 4141,
                "end": 4143,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 4148,
            "end": 4166,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 4149,
              "end": 4159,
              "decorators": [],
              "name": "fieldNameA",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4160,
              "end": 4165,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4162,
                "end": 4165
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 4171,
            "end": 4192,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 4171,
                "end": 4173,
                "expression": {
                  "type": "Identifier",
                  "start": 4172,
                  "end": 4173,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 4175,
              "end": 4185,
              "decorators": [],
              "name": "fieldNameB",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4186,
              "end": 4191,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4188,
                "end": 4191
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 4197,
            "end": 4222,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "BinaryExpression",
              "start": 4198,
              "end": 4216,
              "operator": "+",
              "left": {
                "type": "Literal",
                "start": 4198,
                "end": 4204,
                "raw": "\"some\"",
                "value": "some",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Literal",
                "start": 4207,
                "end": 4216,
                "raw": "\"method2\"",
                "value": "method2",
                "regex": null,
                "bigint": null
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 4217,
              "end": 4222,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 4220,
                "end": 4222,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 4227,
            "end": 4255,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 4227,
                "end": 4229,
                "expression": {
                  "type": "Identifier",
                  "start": 4228,
                  "end": 4229,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 4231,
              "end": 4241,
              "decorators": [],
              "name": "fieldNameC",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4242,
              "end": 4247,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4244,
                "end": 4247
              }
            },
            "value": {
              "type": "Literal",
              "start": 4250,
              "end": 4254,
              "raw": "null",
              "value": null,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 3790,
        "end": 3791,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4259,
      "end": 4738,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 4259,
        "end": 4737,
        "argument": {
          "type": "ClassExpression",
          "start": 4264,
          "end": 4737,
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "start": 4272,
            "end": 4737,
            "body": [
              {
                "type": "PropertyDefinition",
                "start": 4278,
                "end": 4299,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 4278,
                    "end": 4280,
                    "expression": {
                      "type": "Identifier",
                      "start": 4279,
                      "end": 4280,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "start": 4282,
                  "end": 4292,
                  "raw": "\"property\"",
                  "value": "property",
                  "regex": null,
                  "bigint": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4293,
                  "end": 4298,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4295,
                    "end": 4298
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 4304,
                "end": 4333,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 4304,
                    "end": 4306,
                    "expression": {
                      "type": "Identifier",
                      "start": 4305,
                      "end": 4306,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "start": 4308,
                  "end": 4326,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 4308,
                    "end": 4314,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 4315,
                    "end": 4326,
                    "decorators": [],
                    "name": "toStringTag",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4327,
                  "end": 4332,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4329,
                    "end": 4332
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 4338,
                "end": 4364,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 4338,
                    "end": 4340,
                    "expression": {
                      "type": "Identifier",
                      "start": 4339,
                      "end": 4340,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "start": 4342,
                  "end": 4353,
                  "raw": "\"property2\"",
                  "value": "property2",
                  "regex": null,
                  "bigint": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4354,
                  "end": 4359,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4356,
                    "end": 4359
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 4362,
                  "end": 4363,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "PropertyDefinition",
                "start": 4369,
                "end": 4402,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 4369,
                    "end": 4371,
                    "expression": {
                      "type": "Identifier",
                      "start": 4370,
                      "end": 4371,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "start": 4373,
                  "end": 4388,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 4373,
                    "end": 4379,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 4380,
                    "end": 4388,
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4389,
                  "end": 4394,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4391,
                    "end": 4394
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 4397,
                  "end": 4401,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "PropertyDefinition",
                "start": 4407,
                "end": 4426,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "start": 4408,
                  "end": 4419,
                  "raw": "\"property3\"",
                  "value": "property3",
                  "regex": null,
                  "bigint": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4420,
                  "end": 4425,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4422,
                    "end": 4425
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 4431,
                "end": 4464,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "start": 4432,
                  "end": 4457,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 4432,
                    "end": 4438,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 4439,
                    "end": 4457,
                    "decorators": [],
                    "name": "isConcatSpreadable",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4458,
                  "end": 4463,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4460,
                    "end": 4463
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 4469,
                "end": 4492,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "start": 4470,
                  "end": 4481,
                  "raw": "\"property4\"",
                  "value": "property4",
                  "regex": null,
                  "bigint": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4482,
                  "end": 4487,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4484,
                    "end": 4487
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 4490,
                  "end": 4491,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "PropertyDefinition",
                "start": 4497,
                "end": 4524,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "start": 4498,
                  "end": 4510,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 4498,
                    "end": 4504,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 4505,
                    "end": 4510,
                    "decorators": [],
                    "name": "match",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4511,
                  "end": 4516,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4513,
                    "end": 4516
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 4519,
                  "end": 4523,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "PropertyDefinition",
                "start": 4529,
                "end": 4542,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "CallExpression",
                  "start": 4530,
                  "end": 4535,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 4530,
                    "end": 4533,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4536,
                  "end": 4541,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4538,
                    "end": 4541
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 4547,
                "end": 4563,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 4547,
                    "end": 4549,
                    "expression": {
                      "type": "Identifier",
                      "start": 4548,
                      "end": 4549,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "CallExpression",
                  "start": 4551,
                  "end": 4556,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 4551,
                    "end": 4554,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4557,
                  "end": 4562,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4559,
                    "end": 4562
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 4568,
                "end": 4591,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 4568,
                    "end": 4570,
                    "expression": {
                      "type": "Identifier",
                      "start": 4569,
                      "end": 4570,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "CallExpression",
                  "start": 4572,
                  "end": 4577,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 4572,
                    "end": 4575,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4578,
                  "end": 4583,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4580,
                    "end": 4583
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 4586,
                  "end": 4590,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "MethodDefinition",
                "start": 4596,
                "end": 4623,
                "accessibility": null,
                "computed": true,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 4596,
                    "end": 4598,
                    "expression": {
                      "type": "Identifier",
                      "start": 4597,
                      "end": 4598,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "key": {
                  "type": "BinaryExpression",
                  "start": 4600,
                  "end": 4617,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 4600,
                    "end": 4606,
                    "raw": "\"some\"",
                    "value": "some",
                    "regex": null,
                    "bigint": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 4609,
                    "end": 4617,
                    "raw": "\"method\"",
                    "value": "method",
                    "regex": null,
                    "bigint": null
                  }
                },
                "kind": "method",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 4618,
                  "end": 4623,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 4621,
                    "end": 4623,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "PropertyDefinition",
                "start": 4628,
                "end": 4646,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "Identifier",
                  "start": 4629,
                  "end": 4639,
                  "decorators": [],
                  "name": "fieldNameA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4640,
                  "end": 4645,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4642,
                    "end": 4645
                  }
                },
                "value": null
              },
              {
                "type": "PropertyDefinition",
                "start": 4651,
                "end": 4672,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 4651,
                    "end": 4653,
                    "expression": {
                      "type": "Identifier",
                      "start": 4652,
                      "end": 4653,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Identifier",
                  "start": 4655,
                  "end": 4665,
                  "decorators": [],
                  "name": "fieldNameB",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4666,
                  "end": 4671,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4668,
                    "end": 4671
                  }
                },
                "value": null
              },
              {
                "type": "MethodDefinition",
                "start": 4677,
                "end": 4702,
                "accessibility": null,
                "computed": true,
                "decorators": [],
                "key": {
                  "type": "BinaryExpression",
                  "start": 4678,
                  "end": 4696,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 4678,
                    "end": 4684,
                    "raw": "\"some\"",
                    "value": "some",
                    "regex": null,
                    "bigint": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 4687,
                    "end": 4696,
                    "raw": "\"method2\"",
                    "value": "method2",
                    "regex": null,
                    "bigint": null
                  }
                },
                "kind": "method",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 4697,
                  "end": 4702,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 4700,
                    "end": 4702,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              },
              {
                "type": "PropertyDefinition",
                "start": 4707,
                "end": 4735,
                "accessibility": null,
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "start": 4707,
                    "end": 4709,
                    "expression": {
                      "type": "Identifier",
                      "start": 4708,
                      "end": 4709,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Identifier",
                  "start": 4711,
                  "end": 4721,
                  "decorators": [],
                  "name": "fieldNameC",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "override": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4722,
                  "end": 4727,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 4724,
                    "end": 4727
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 4730,
                  "end": 4734,
                  "raw": "null",
                  "value": null,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          },
          "declare": false,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "start": 4270,
            "end": 4271,
            "decorators": [],
            "name": "J",
            "optional": false,
            "typeAnnotation": null
          },
          "implements": [],
          "superClass": null,
          "superTypeArguments": null,
          "typeParameters": null
        },
        "operator": "void",
        "prefix": true
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
