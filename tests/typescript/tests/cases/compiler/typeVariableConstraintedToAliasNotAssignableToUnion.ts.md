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
        "name": "TableClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 24
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 26
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 29,
              "end": 32
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 25,
            "end": 32
          }
        ],
        "start": 24,
        "end": 33
      },
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
              "name": "_field",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 46
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 48,
                  "end": 49
                },
                "typeArguments": null,
                "start": 48,
                "end": 49
              },
              "start": 46,
              "end": 49
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
            "start": 40,
            "end": 50
          }
        ],
        "start": 34,
        "end": 52
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 52
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Table",
          "optional": false,
          "typeAnnotation": null,
          "start": 66,
          "end": 71
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TableClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 84
          },
          "typeArguments": null,
          "start": 74,
          "end": 84
        },
        "declare": false,
        "start": 61,
        "end": 85
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 54,
      "end": 85
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Something",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 106
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 117
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 119,
                "end": 125
              },
              "start": 117,
              "end": 125
            },
            "accessibility": null,
            "static": false,
            "start": 113,
            "end": 126
          }
        ],
        "start": 107,
        "end": 128
      },
      "declare": false,
      "start": 87,
      "end": 128
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomethingElse",
        "optional": false,
        "typeAnnotation": null,
        "start": 140,
        "end": 153
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
              "start": 160,
              "end": 165
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 167,
                "end": 173
              },
              "start": 165,
              "end": 173
            },
            "accessibility": null,
            "static": false,
            "start": 160,
            "end": 174
          }
        ],
        "start": 154,
        "end": 176
      },
      "declare": false,
      "start": 130,
      "end": 176
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
            "name": "aBoolean",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 200,
                "end": 207
              },
              "start": 198,
              "end": 207
            },
            "start": 190,
            "end": 207
          },
          "init": null,
          "definite": false,
          "start": 190,
          "end": 207
        }
      ],
      "declare": true,
      "start": 178,
      "end": 208
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
            "name": "aStringOrNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 238,
                    "end": 244
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 247,
                    "end": 253
                  }
                ],
                "start": 238,
                "end": 253
              },
              "start": 236,
              "end": 253
            },
            "start": 221,
            "end": 253
          },
          "init": null,
          "definite": false,
          "start": 221,
          "end": 253
        }
      ],
      "declare": true,
      "start": 209,
      "end": 254
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
            "name": "aStringOrSomething",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 287,
                    "end": 293
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Something",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 296,
                      "end": 305
                    },
                    "typeArguments": null,
                    "start": 296,
                    "end": 305
                  }
                ],
                "start": 287,
                "end": 305
              },
              "start": 285,
              "end": 305
            },
            "start": 267,
            "end": 305
          },
          "init": null,
          "definite": false,
          "start": 267,
          "end": 305
        }
      ],
      "declare": true,
      "start": 255,
      "end": 306
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
            "name": "someUnion",
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
                      "name": "Something",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 330,
                      "end": 339
                    },
                    "typeArguments": null,
                    "start": 330,
                    "end": 339
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SomethingElse",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 342,
                      "end": 355
                    },
                    "typeArguments": null,
                    "start": 342,
                    "end": 355
                  }
                ],
                "start": 330,
                "end": 355
              },
              "start": 328,
              "end": 355
            },
            "start": 319,
            "end": 355
          },
          "init": null,
          "definite": false,
          "start": 319,
          "end": 355
        }
      ],
      "declare": true,
      "start": 307,
      "end": 356
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 367,
        "end": 369
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
              "start": 370,
              "end": 371
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Table",
                "optional": false,
                "typeAnnotation": null,
                "start": 380,
                "end": 385
              },
              "typeArguments": null,
              "start": 380,
              "end": 385
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 370,
            "end": 385
          }
        ],
        "start": 369,
        "end": 386
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
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
                "start": 390,
                "end": 391
              },
              "typeArguments": null,
              "start": 390,
              "end": 391
            },
            "start": 388,
            "end": 391
          },
          "start": 387,
          "end": 391
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
                "name": "aBoolean",
                "optional": false,
                "typeAnnotation": null,
                "start": 399,
                "end": 407
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 410,
                "end": 411
              },
              "start": 399,
              "end": 411
            },
            "directive": null,
            "start": 399,
            "end": 412
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "aStringOrNumber",
                "optional": false,
                "typeAnnotation": null,
                "start": 417,
                "end": 432
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 435,
                "end": 436
              },
              "start": 417,
              "end": 436
            },
            "directive": null,
            "start": 417,
            "end": 437
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "aStringOrSomething",
                "optional": false,
                "typeAnnotation": null,
                "start": 442,
                "end": 460
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 463,
                "end": 464
              },
              "start": 442,
              "end": 464
            },
            "directive": null,
            "start": 442,
            "end": 465
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "someUnion",
                "optional": false,
                "typeAnnotation": null,
                "start": 470,
                "end": 479
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 482,
                "end": 483
              },
              "start": 470,
              "end": 483
            },
            "directive": null,
            "start": 470,
            "end": 484
          }
        ],
        "start": 393,
        "end": 486
      },
      "expression": false,
      "start": 358,
      "end": 486
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 497,
        "end": 500
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
              "start": 501,
              "end": 502
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TableClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 511,
                "end": 521
              },
              "typeArguments": null,
              "start": 511,
              "end": 521
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 501,
            "end": 521
          }
        ],
        "start": 500,
        "end": 522
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
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
                "start": 526,
                "end": 527
              },
              "typeArguments": null,
              "start": 526,
              "end": 527
            },
            "start": 524,
            "end": 527
          },
          "start": 523,
          "end": 527
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
                "name": "aBoolean",
                "optional": false,
                "typeAnnotation": null,
                "start": 535,
                "end": 543
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 546,
                "end": 547
              },
              "start": 535,
              "end": 547
            },
            "directive": null,
            "start": 535,
            "end": 548
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "aStringOrNumber",
                "optional": false,
                "typeAnnotation": null,
                "start": 553,
                "end": 568
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 571,
                "end": 572
              },
              "start": 553,
              "end": 572
            },
            "directive": null,
            "start": 553,
            "end": 573
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "aStringOrSomething",
                "optional": false,
                "typeAnnotation": null,
                "start": 578,
                "end": 596
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 599,
                "end": 600
              },
              "start": 578,
              "end": 600
            },
            "directive": null,
            "start": 578,
            "end": 601
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "someUnion",
                "optional": false,
                "typeAnnotation": null,
                "start": 606,
                "end": 615
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 618,
                "end": 619
              },
              "start": 606,
              "end": 619
            },
            "directive": null,
            "start": 606,
            "end": 620
          }
        ],
        "start": 529,
        "end": 622
      },
      "expression": false,
      "start": 488,
      "end": 622
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
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Table",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 641,
                  "end": 646
                },
                "typeArguments": null,
                "start": 641,
                "end": 646
              },
              "start": 639,
              "end": 646
            },
            "start": 638,
            "end": 646
          },
          "init": null,
          "definite": false,
          "start": 638,
          "end": 646
        }
      ],
      "declare": true,
      "start": 624,
      "end": 647
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "aBoolean",
          "optional": false,
          "typeAnnotation": null,
          "start": 648,
          "end": 656
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null,
          "start": 659,
          "end": 660
        },
        "start": 648,
        "end": 660
      },
      "directive": null,
      "start": 648,
      "end": 661
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "aStringOrNumber",
          "optional": false,
          "typeAnnotation": null,
          "start": 662,
          "end": 677
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null,
          "start": 680,
          "end": 681
        },
        "start": 662,
        "end": 681
      },
      "directive": null,
      "start": 662,
      "end": 682
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "aStringOrSomething",
          "optional": false,
          "typeAnnotation": null,
          "start": 683,
          "end": 701
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null,
          "start": 704,
          "end": 705
        },
        "start": 683,
        "end": 705
      },
      "directive": null,
      "start": 683,
      "end": 706
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "someUnion",
          "optional": false,
          "typeAnnotation": null,
          "start": 707,
          "end": 716
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null,
          "start": 719,
          "end": 720
        },
        "start": 707,
        "end": 720
      },
      "directive": null,
      "start": 707,
      "end": 721
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 721
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 8,
    "end": 13,
    "range": [
      8,
      13
    ]
  },
  {
    "type": "Identifier",
    "value": "TableClass",
    "start": 14,
    "end": 24,
    "range": [
      14,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 29,
    "end": 32,
    "range": [
      29,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "_field",
    "start": 40,
    "end": 46,
    "range": [
      40,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 54,
    "end": 60,
    "range": [
      54,
      60
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 61,
    "end": 65,
    "range": [
      61,
      65
    ]
  },
  {
    "type": "Identifier",
    "value": "Table",
    "start": 66,
    "end": 71,
    "range": [
      66,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Identifier",
    "value": "TableClass",
    "start": 74,
    "end": 84,
    "range": [
      74,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 87,
    "end": 96,
    "range": [
      87,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "Something",
    "start": 97,
    "end": 106,
    "range": [
      97,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 113,
    "end": 117,
    "range": [
      113,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 119,
    "end": 125,
    "range": [
      119,
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
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 130,
    "end": 139,
    "range": [
      130,
      139
    ]
  },
  {
    "type": "Identifier",
    "value": "SomethingElse",
    "start": 140,
    "end": 153,
    "range": [
      140,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 160,
    "end": 165,
    "range": [
      160,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 167,
    "end": 173,
    "range": [
      167,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 178,
    "end": 185,
    "range": [
      178,
      185
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 186,
    "end": 189,
    "range": [
      186,
      189
    ]
  },
  {
    "type": "Identifier",
    "value": "aBoolean",
    "start": 190,
    "end": 198,
    "range": [
      190,
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
    "value": "boolean",
    "start": 200,
    "end": 207,
    "range": [
      200,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 209,
    "end": 216,
    "range": [
      209,
      216
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 217,
    "end": 220,
    "range": [
      217,
      220
    ]
  },
  {
    "type": "Identifier",
    "value": "aStringOrNumber",
    "start": 221,
    "end": 236,
    "range": [
      221,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 238,
    "end": 244,
    "range": [
      238,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 247,
    "end": 253,
    "range": [
      247,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 255,
    "end": 262,
    "range": [
      255,
      262
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 263,
    "end": 266,
    "range": [
      263,
      266
    ]
  },
  {
    "type": "Identifier",
    "value": "aStringOrSomething",
    "start": 267,
    "end": 285,
    "range": [
      267,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 287,
    "end": 293,
    "range": [
      287,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Identifier",
    "value": "Something",
    "start": 296,
    "end": 305,
    "range": [
      296,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 307,
    "end": 314,
    "range": [
      307,
      314
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 315,
    "end": 318,
    "range": [
      315,
      318
    ]
  },
  {
    "type": "Identifier",
    "value": "someUnion",
    "start": 319,
    "end": 328,
    "range": [
      319,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Identifier",
    "value": "Something",
    "start": 330,
    "end": 339,
    "range": [
      330,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Identifier",
    "value": "SomethingElse",
    "start": 342,
    "end": 355,
    "range": [
      342,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 358,
    "end": 366,
    "range": [
      358,
      366
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 367,
    "end": 369,
    "range": [
      367,
      369
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 372,
    "end": 379,
    "range": [
      372,
      379
    ]
  },
  {
    "type": "Identifier",
    "value": "Table",
    "start": 380,
    "end": 385,
    "range": [
      380,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Identifier",
    "value": "aBoolean",
    "start": 399,
    "end": 407,
    "range": [
      399,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Identifier",
    "value": "aStringOrNumber",
    "start": 417,
    "end": 432,
    "range": [
      417,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Identifier",
    "value": "aStringOrSomething",
    "start": 442,
    "end": 460,
    "range": [
      442,
      460
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 461,
    "end": 462,
    "range": [
      461,
      462
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Identifier",
    "value": "someUnion",
    "start": 470,
    "end": 479,
    "range": [
      470,
      479
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 485,
    "end": 486,
    "range": [
      485,
      486
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 488,
    "end": 496,
    "range": [
      488,
      496
    ]
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 497,
    "end": 500,
    "range": [
      497,
      500
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 503,
    "end": 510,
    "range": [
      503,
      510
    ]
  },
  {
    "type": "Identifier",
    "value": "TableClass",
    "start": 511,
    "end": 521,
    "range": [
      511,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Identifier",
    "value": "aBoolean",
    "start": 535,
    "end": 543,
    "range": [
      535,
      543
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 546,
    "end": 547,
    "range": [
      546,
      547
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 547,
    "end": 548,
    "range": [
      547,
      548
    ]
  },
  {
    "type": "Identifier",
    "value": "aStringOrNumber",
    "start": 553,
    "end": 568,
    "range": [
      553,
      568
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Identifier",
    "value": "aStringOrSomething",
    "start": 578,
    "end": 596,
    "range": [
      578,
      596
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 597,
    "end": 598,
    "range": [
      597,
      598
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 599,
    "end": 600,
    "range": [
      599,
      600
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Identifier",
    "value": "someUnion",
    "start": 606,
    "end": 615,
    "range": [
      606,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 621,
    "end": 622,
    "range": [
      621,
      622
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 624,
    "end": 631,
    "range": [
      624,
      631
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 632,
    "end": 637,
    "range": [
      632,
      637
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Identifier",
    "value": "Table",
    "start": 641,
    "end": 646,
    "range": [
      641,
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
    "type": "Identifier",
    "value": "aBoolean",
    "start": 648,
    "end": 656,
    "range": [
      648,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 657,
    "end": 658,
    "range": [
      657,
      658
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Identifier",
    "value": "aStringOrNumber",
    "start": 662,
    "end": 677,
    "range": [
      662,
      677
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 681,
    "end": 682,
    "range": [
      681,
      682
    ]
  },
  {
    "type": "Identifier",
    "value": "aStringOrSomething",
    "start": 683,
    "end": 701,
    "range": [
      683,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Identifier",
    "value": "someUnion",
    "start": 707,
    "end": 716,
    "range": [
      707,
      716
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 717,
    "end": 718,
    "range": [
      717,
      718
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  }
]
```
