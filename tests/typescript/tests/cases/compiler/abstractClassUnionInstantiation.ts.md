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
        "name": "ConcreteA",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 15
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 16,
        "end": 18
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 18
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConcreteB",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 34
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 35,
        "end": 37
      },
      "abstract": false,
      "declare": false,
      "start": 19,
      "end": 37
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AbstractA",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 62
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
              "start": 65,
              "end": 66
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 68,
                "end": 74
              },
              "start": 66,
              "end": 74
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
            "start": 65,
            "end": 75
          }
        ],
        "start": 63,
        "end": 77
      },
      "abstract": true,
      "declare": false,
      "start": 38,
      "end": 77
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AbstractB",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 106
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 108,
                "end": 114
              },
              "start": 106,
              "end": 114
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
            "start": 105,
            "end": 115
          }
        ],
        "start": 103,
        "end": 117
      },
      "abstract": true,
      "declare": false,
      "start": 78,
      "end": 117
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Abstracts",
        "optional": false,
        "typeAnnotation": null,
        "start": 124,
        "end": 133
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AbstractA",
              "optional": false,
              "typeAnnotation": null,
              "start": 143,
              "end": 152
            },
            "typeArguments": null,
            "start": 136,
            "end": 152
          },
          {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AbstractB",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 171
            },
            "typeArguments": null,
            "start": 155,
            "end": 171
          }
        ],
        "start": 136,
        "end": 171
      },
      "declare": false,
      "start": 119,
      "end": 172
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Concretes",
        "optional": false,
        "typeAnnotation": null,
        "start": 178,
        "end": 187
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ConcreteA",
              "optional": false,
              "typeAnnotation": null,
              "start": 197,
              "end": 206
            },
            "typeArguments": null,
            "start": 190,
            "end": 206
          },
          {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ConcreteB",
              "optional": false,
              "typeAnnotation": null,
              "start": 216,
              "end": 225
            },
            "typeArguments": null,
            "start": 209,
            "end": 225
          }
        ],
        "start": 190,
        "end": 225
      },
      "declare": false,
      "start": 173,
      "end": 226
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConcretesOrAbstracts",
        "optional": false,
        "typeAnnotation": null,
        "start": 232,
        "end": 252
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Concretes",
              "optional": false,
              "typeAnnotation": null,
              "start": 255,
              "end": 264
            },
            "typeArguments": null,
            "start": 255,
            "end": 264
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Abstracts",
              "optional": false,
              "typeAnnotation": null,
              "start": 267,
              "end": 276
            },
            "typeArguments": null,
            "start": 267,
            "end": 276
          }
        ],
        "start": 255,
        "end": 276
      },
      "declare": false,
      "start": 227,
      "end": 277
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
            "name": "cls1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ConcretesOrAbstracts",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 299,
                  "end": 319
                },
                "typeArguments": null,
                "start": 299,
                "end": 319
              },
              "start": 297,
              "end": 319
            },
            "start": 293,
            "end": 319
          },
          "init": null,
          "definite": false,
          "start": 293,
          "end": 319
        }
      ],
      "declare": true,
      "start": 279,
      "end": 320
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
            "name": "cls2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Abstracts",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 341,
                  "end": 350
                },
                "typeArguments": null,
                "start": 341,
                "end": 350
              },
              "start": 339,
              "end": 350
            },
            "start": 335,
            "end": 350
          },
          "init": null,
          "definite": false,
          "start": 335,
          "end": 350
        }
      ],
      "declare": true,
      "start": 321,
      "end": 351
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
            "name": "cls3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Concretes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 372,
                  "end": 381
                },
                "typeArguments": null,
                "start": 372,
                "end": 381
              },
              "start": 370,
              "end": 381
            },
            "start": 366,
            "end": 381
          },
          "init": null,
          "definite": false,
          "start": 366,
          "end": 381
        }
      ],
      "declare": true,
      "start": 352,
      "end": 382
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "cls1",
          "optional": false,
          "typeAnnotation": null,
          "start": 388,
          "end": 392
        },
        "typeArguments": null,
        "arguments": [],
        "start": 384,
        "end": 394
      },
      "directive": null,
      "start": 384,
      "end": 395
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "cls2",
          "optional": false,
          "typeAnnotation": null,
          "start": 416,
          "end": 420
        },
        "typeArguments": null,
        "arguments": [],
        "start": 412,
        "end": 422
      },
      "directive": null,
      "start": 412,
      "end": 423
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "cls3",
          "optional": false,
          "typeAnnotation": null,
          "start": 444,
          "end": 448
        },
        "typeArguments": null,
        "arguments": [],
        "start": 440,
        "end": 450
      },
      "directive": null,
      "start": 440,
      "end": 451
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ConcreteA",
                "optional": false,
                "typeAnnotation": null,
                "start": 469,
                "end": 478
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "AbstractA",
                "optional": false,
                "typeAnnotation": null,
                "start": 480,
                "end": 489
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "AbstractB",
                "optional": false,
                "typeAnnotation": null,
                "start": 491,
                "end": 500
              }
            ],
            "start": 468,
            "end": 501
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 502,
            "end": 505
          },
          "optional": false,
          "computed": false,
          "start": 468,
          "end": 505
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cls",
                "optional": false,
                "typeAnnotation": null,
                "start": 506,
                "end": 509
              }
            ],
            "returnType": null,
            "body": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cls",
                "optional": false,
                "typeAnnotation": null,
                "start": 517,
                "end": 520
              },
              "typeArguments": null,
              "arguments": [],
              "start": 513,
              "end": 522
            },
            "id": null,
            "generator": false,
            "start": 506,
            "end": 522
          }
        ],
        "optional": false,
        "start": 468,
        "end": 523
      },
      "directive": null,
      "start": 468,
      "end": 524
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "AbstractA",
                "optional": false,
                "typeAnnotation": null,
                "start": 542,
                "end": 551
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "AbstractB",
                "optional": false,
                "typeAnnotation": null,
                "start": 553,
                "end": 562
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ConcreteA",
                "optional": false,
                "typeAnnotation": null,
                "start": 564,
                "end": 573
              }
            ],
            "start": 541,
            "end": 574
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 575,
            "end": 578
          },
          "optional": false,
          "computed": false,
          "start": 541,
          "end": 578
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cls",
                "optional": false,
                "typeAnnotation": null,
                "start": 579,
                "end": 582
              }
            ],
            "returnType": null,
            "body": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cls",
                "optional": false,
                "typeAnnotation": null,
                "start": 590,
                "end": 593
              },
              "typeArguments": null,
              "arguments": [],
              "start": 586,
              "end": 595
            },
            "id": null,
            "generator": false,
            "start": 579,
            "end": 595
          }
        ],
        "optional": false,
        "start": 541,
        "end": 596
      },
      "directive": null,
      "start": 541,
      "end": 597
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ConcreteA",
                "optional": false,
                "typeAnnotation": null,
                "start": 615,
                "end": 624
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ConcreteB",
                "optional": false,
                "typeAnnotation": null,
                "start": 626,
                "end": 635
              }
            ],
            "start": 614,
            "end": 636
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 637,
            "end": 640
          },
          "optional": false,
          "computed": false,
          "start": 614,
          "end": 640
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cls",
                "optional": false,
                "typeAnnotation": null,
                "start": 641,
                "end": 644
              }
            ],
            "returnType": null,
            "body": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cls",
                "optional": false,
                "typeAnnotation": null,
                "start": 652,
                "end": 655
              },
              "typeArguments": null,
              "arguments": [],
              "start": 648,
              "end": 657
            },
            "id": null,
            "generator": false,
            "start": 641,
            "end": 657
          }
        ],
        "optional": false,
        "start": 614,
        "end": 658
      },
      "directive": null,
      "start": 614,
      "end": 659
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "AbstractA",
                "optional": false,
                "typeAnnotation": null,
                "start": 676,
                "end": 685
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "AbstractB",
                "optional": false,
                "typeAnnotation": null,
                "start": 687,
                "end": 696
              }
            ],
            "start": 675,
            "end": 697
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 698,
            "end": 701
          },
          "optional": false,
          "computed": false,
          "start": 675,
          "end": 701
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cls",
                "optional": false,
                "typeAnnotation": null,
                "start": 702,
                "end": 705
              }
            ],
            "returnType": null,
            "body": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cls",
                "optional": false,
                "typeAnnotation": null,
                "start": 713,
                "end": 716
              },
              "typeArguments": null,
              "arguments": [],
              "start": 709,
              "end": 718
            },
            "id": null,
            "generator": false,
            "start": 702,
            "end": 718
          }
        ],
        "optional": false,
        "start": 675,
        "end": 719
      },
      "directive": null,
      "start": 675,
      "end": 720
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 736
}
```
