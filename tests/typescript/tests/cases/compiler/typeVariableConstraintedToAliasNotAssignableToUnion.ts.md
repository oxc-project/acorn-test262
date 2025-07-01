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
