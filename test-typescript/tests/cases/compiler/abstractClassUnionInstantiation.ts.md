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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 18,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 15,
        "decorators": [],
        "name": "ConcreteA",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 19,
      "end": 37,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 35,
        "end": 37,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 34,
        "decorators": [],
        "name": "ConcreteB",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 38,
      "end": 77,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 63,
        "end": 77,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 65,
            "end": 75,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 62,
        "decorators": [],
        "name": "AbstractA",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 78,
      "end": 117,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 103,
        "end": 117,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 105,
            "end": 115,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 106,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 102,
        "decorators": [],
        "name": "AbstractB",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 119,
      "end": 172,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 133,
        "decorators": [],
        "name": "Abstracts",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "AbstractA",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "AbstractB",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 173,
      "end": 226,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 187,
        "decorators": [],
        "name": "Concretes",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "ConcreteA",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "ConcreteB",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 227,
      "end": 277,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 232,
        "end": 252,
        "decorators": [],
        "name": "ConcretesOrAbstracts",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 255,
        "end": 276,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 255,
            "end": 264,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 255,
              "end": 264,
              "decorators": [],
              "name": "Concretes",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 267,
            "end": 276,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 267,
              "end": 276,
              "decorators": [],
              "name": "Abstracts",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 293,
            "end": 319,
            "decorators": [],
            "name": "cls1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 297,
              "end": 319,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 299,
                "end": 319,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 299,
                  "end": 319,
                  "decorators": [],
                  "name": "ConcretesOrAbstracts",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 335,
            "end": 350,
            "decorators": [],
            "name": "cls2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 339,
              "end": 350,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 341,
                "end": 350,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 350,
                  "decorators": [],
                  "name": "Abstracts",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 366,
            "end": 381,
            "decorators": [],
            "name": "cls3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 370,
              "end": 381,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 372,
                "end": 381,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 381,
                  "decorators": [],
                  "name": "Concretes",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 384,
      "end": 395,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 384,
        "end": 394,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 388,
          "end": 392,
          "decorators": [],
          "name": "cls1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 412,
      "end": 423,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 412,
        "end": 422,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 416,
          "end": 420,
          "decorators": [],
          "name": "cls2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 440,
      "end": 451,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 440,
        "end": 450,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 444,
          "end": 448,
          "decorators": [],
          "name": "cls3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 468,
      "end": 524,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 468,
        "end": 523,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 506,
            "end": 522,
            "async": false,
            "body": {
              "type": "NewExpression",
              "start": 513,
              "end": 522,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 517,
                "end": 520,
                "decorators": [],
                "name": "cls",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 506,
                "end": 509,
                "decorators": [],
                "name": "cls",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 468,
          "end": 505,
          "computed": false,
          "object": {
            "type": "ArrayExpression",
            "start": 468,
            "end": 501,
            "elements": [
              {
                "type": "Identifier",
                "start": 469,
                "end": 478,
                "decorators": [],
                "name": "ConcreteA",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 480,
                "end": 489,
                "decorators": [],
                "name": "AbstractA",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 491,
                "end": 500,
                "decorators": [],
                "name": "AbstractB",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 502,
            "end": 505,
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 541,
      "end": 597,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 541,
        "end": 596,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 579,
            "end": 595,
            "async": false,
            "body": {
              "type": "NewExpression",
              "start": 586,
              "end": 595,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 590,
                "end": 593,
                "decorators": [],
                "name": "cls",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 579,
                "end": 582,
                "decorators": [],
                "name": "cls",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 541,
          "end": 578,
          "computed": false,
          "object": {
            "type": "ArrayExpression",
            "start": 541,
            "end": 574,
            "elements": [
              {
                "type": "Identifier",
                "start": 542,
                "end": 551,
                "decorators": [],
                "name": "AbstractA",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 553,
                "end": 562,
                "decorators": [],
                "name": "AbstractB",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 564,
                "end": 573,
                "decorators": [],
                "name": "ConcreteA",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 575,
            "end": 578,
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 614,
      "end": 659,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 614,
        "end": 658,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 641,
            "end": 657,
            "async": false,
            "body": {
              "type": "NewExpression",
              "start": 648,
              "end": 657,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 652,
                "end": 655,
                "decorators": [],
                "name": "cls",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 641,
                "end": 644,
                "decorators": [],
                "name": "cls",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 614,
          "end": 640,
          "computed": false,
          "object": {
            "type": "ArrayExpression",
            "start": 614,
            "end": 636,
            "elements": [
              {
                "type": "Identifier",
                "start": 615,
                "end": 624,
                "decorators": [],
                "name": "ConcreteA",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 626,
                "end": 635,
                "decorators": [],
                "name": "ConcreteB",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 637,
            "end": 640,
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 675,
      "end": 720,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 675,
        "end": 719,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 702,
            "end": 718,
            "async": false,
            "body": {
              "type": "NewExpression",
              "start": 709,
              "end": 718,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 713,
                "end": 716,
                "decorators": [],
                "name": "cls",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 702,
                "end": 705,
                "decorators": [],
                "name": "cls",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 675,
          "end": 701,
          "computed": false,
          "object": {
            "type": "ArrayExpression",
            "start": 675,
            "end": 697,
            "elements": [
              {
                "type": "Identifier",
                "start": 676,
                "end": 685,
                "decorators": [],
                "name": "AbstractA",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 687,
                "end": 696,
                "decorators": [],
                "name": "AbstractB",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 698,
            "end": 701,
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
