__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 736,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 18,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 15,
        "name": "ConcreteA",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 18,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 19,
      "end": 37,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 34,
        "name": "ConcreteB",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 35,
        "end": 37,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 38,
      "end": 77,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 62,
        "name": "AbstractA",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 63,
        "end": 77,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 65,
            "end": 75,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 74,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 68,
                "end": 74
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": true,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 78,
      "end": 117,
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 102,
        "name": "AbstractB",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 103,
        "end": 117,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 105,
            "end": 115,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 106,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 106,
              "end": 114,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 108,
                "end": 114
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": true,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 119,
      "end": 172,
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 133,
        "name": "Abstracts",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 136,
        "end": 171,
        "types": [
          {
            "type": "TSTypeQuery",
            "start": 136,
            "end": 152,
            "exprName": {
              "type": "Identifier",
              "start": 143,
              "end": 152,
              "name": "AbstractA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeQuery",
            "start": 155,
            "end": 171,
            "exprName": {
              "type": "Identifier",
              "start": 162,
              "end": 171,
              "name": "AbstractB",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 173,
      "end": 226,
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 187,
        "name": "Concretes",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 190,
        "end": 225,
        "types": [
          {
            "type": "TSTypeQuery",
            "start": 190,
            "end": 206,
            "exprName": {
              "type": "Identifier",
              "start": 197,
              "end": 206,
              "name": "ConcreteA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeQuery",
            "start": 209,
            "end": 225,
            "exprName": {
              "type": "Identifier",
              "start": 216,
              "end": 225,
              "name": "ConcreteB",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 227,
      "end": 277,
      "id": {
        "type": "Identifier",
        "start": 232,
        "end": 252,
        "name": "ConcretesOrAbstracts",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 255,
        "end": 276,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 255,
            "end": 264,
            "typeName": {
              "type": "Identifier",
              "start": 255,
              "end": 264,
              "name": "Concretes",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 267,
            "end": 276,
            "typeName": {
              "type": "Identifier",
              "start": 267,
              "end": 276,
              "name": "Abstracts",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 279,
      "end": 320,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 293,
          "end": 319,
          "id": {
            "type": "Identifier",
            "start": 293,
            "end": 319,
            "name": "cls1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 297,
              "end": 319,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 299,
                "end": 319,
                "typeName": {
                  "type": "Identifier",
                  "start": 299,
                  "end": 319,
                  "name": "ConcretesOrAbstracts",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 321,
      "end": 351,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 335,
          "end": 350,
          "id": {
            "type": "Identifier",
            "start": 335,
            "end": 350,
            "name": "cls2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 339,
              "end": 350,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 341,
                "end": 350,
                "typeName": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 350,
                  "name": "Abstracts",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 352,
      "end": 382,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 366,
          "end": 381,
          "id": {
            "type": "Identifier",
            "start": 366,
            "end": 381,
            "name": "cls3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 370,
              "end": 381,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 372,
                "end": 381,
                "typeName": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 381,
                  "name": "Concretes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 384,
      "end": 395,
      "expression": {
        "type": "NewExpression",
        "start": 384,
        "end": 394,
        "callee": {
          "type": "Identifier",
          "start": 388,
          "end": 392,
          "name": "cls1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 412,
      "end": 423,
      "expression": {
        "type": "NewExpression",
        "start": 412,
        "end": 422,
        "callee": {
          "type": "Identifier",
          "start": 416,
          "end": 420,
          "name": "cls2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 440,
      "end": 451,
      "expression": {
        "type": "NewExpression",
        "start": 440,
        "end": 450,
        "callee": {
          "type": "Identifier",
          "start": 444,
          "end": 448,
          "name": "cls3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 468,
      "end": 524,
      "expression": {
        "type": "CallExpression",
        "start": 468,
        "end": 523,
        "callee": {
          "type": "MemberExpression",
          "start": 468,
          "end": 505,
          "object": {
            "type": "ArrayExpression",
            "start": 468,
            "end": 501,
            "elements": [
              {
                "type": "Identifier",
                "start": 469,
                "end": 478,
                "name": "ConcreteA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 480,
                "end": 489,
                "name": "AbstractA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 491,
                "end": 500,
                "name": "AbstractB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "property": {
            "type": "Identifier",
            "start": 502,
            "end": 505,
            "name": "map",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 506,
            "end": 522,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 506,
                "end": 509,
                "name": "cls",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "NewExpression",
              "start": 513,
              "end": 522,
              "callee": {
                "type": "Identifier",
                "start": 517,
                "end": 520,
                "name": "cls",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 541,
      "end": 597,
      "expression": {
        "type": "CallExpression",
        "start": 541,
        "end": 596,
        "callee": {
          "type": "MemberExpression",
          "start": 541,
          "end": 578,
          "object": {
            "type": "ArrayExpression",
            "start": 541,
            "end": 574,
            "elements": [
              {
                "type": "Identifier",
                "start": 542,
                "end": 551,
                "name": "AbstractA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 553,
                "end": 562,
                "name": "AbstractB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 564,
                "end": 573,
                "name": "ConcreteA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "property": {
            "type": "Identifier",
            "start": 575,
            "end": 578,
            "name": "map",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 579,
            "end": 595,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 579,
                "end": 582,
                "name": "cls",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "NewExpression",
              "start": 586,
              "end": 595,
              "callee": {
                "type": "Identifier",
                "start": 590,
                "end": 593,
                "name": "cls",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 614,
      "end": 659,
      "expression": {
        "type": "CallExpression",
        "start": 614,
        "end": 658,
        "callee": {
          "type": "MemberExpression",
          "start": 614,
          "end": 640,
          "object": {
            "type": "ArrayExpression",
            "start": 614,
            "end": 636,
            "elements": [
              {
                "type": "Identifier",
                "start": 615,
                "end": 624,
                "name": "ConcreteA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 626,
                "end": 635,
                "name": "ConcreteB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "property": {
            "type": "Identifier",
            "start": 637,
            "end": 640,
            "name": "map",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 641,
            "end": 657,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 641,
                "end": 644,
                "name": "cls",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "NewExpression",
              "start": 648,
              "end": 657,
              "callee": {
                "type": "Identifier",
                "start": 652,
                "end": 655,
                "name": "cls",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 675,
      "end": 720,
      "expression": {
        "type": "CallExpression",
        "start": 675,
        "end": 719,
        "callee": {
          "type": "MemberExpression",
          "start": 675,
          "end": 701,
          "object": {
            "type": "ArrayExpression",
            "start": 675,
            "end": 697,
            "elements": [
              {
                "type": "Identifier",
                "start": 676,
                "end": 685,
                "name": "AbstractA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 687,
                "end": 696,
                "name": "AbstractB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "property": {
            "type": "Identifier",
            "start": 698,
            "end": 701,
            "name": "map",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 702,
            "end": 718,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 702,
                "end": 705,
                "name": "cls",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "NewExpression",
              "start": 709,
              "end": 718,
              "callee": {
                "type": "Identifier",
                "start": 713,
                "end": 716,
                "name": "cls",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
