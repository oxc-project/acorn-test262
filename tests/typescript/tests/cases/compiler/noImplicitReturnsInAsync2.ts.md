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
        "name": "test3",
        "optional": false,
        "typeAnnotation": null,
        "start": 85,
        "end": 90
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "isError",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 100,
                "end": 107
              },
              "start": 98,
              "end": 107
            },
            "start": 91,
            "end": 107
          },
          "right": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 110,
            "end": 114
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 91,
          "end": 114
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
                "type": "Identifier",
                "decorators": [],
                "name": "isError",
                "optional": false,
                "typeAnnotation": null,
                "start": 126,
                "end": 133
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 138,
                "end": 142
              },
              "start": 126,
              "end": 142
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 6,
                    "raw": "6",
                    "start": 161,
                    "end": 162
                  },
                  "start": 154,
                  "end": 163
                }
              ],
              "start": 144,
              "end": 169
            },
            "alternate": null,
            "start": 122,
            "end": 169
          }
        ],
        "start": 116,
        "end": 171
      },
      "expression": false,
      "start": 70,
      "end": 171
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test4",
        "optional": false,
        "typeAnnotation": null,
        "start": 255,
        "end": 260
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "isError",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 270,
                "end": 277
              },
              "start": 268,
              "end": 277
            },
            "start": 261,
            "end": 277
          },
          "right": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 280,
            "end": 284
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 261,
          "end": 284
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
                "type": "Identifier",
                "decorators": [],
                "name": "isError",
                "optional": false,
                "typeAnnotation": null,
                "start": 298,
                "end": 305
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 310,
                "end": 314
              },
              "start": 298,
              "end": 314
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 333,
                    "end": 342
                  },
                  "start": 326,
                  "end": 343
                }
              ],
              "start": 316,
              "end": 349
            },
            "alternate": null,
            "start": 294,
            "end": 349
          }
        ],
        "start": 286,
        "end": 351
      },
      "expression": false,
      "start": 240,
      "end": 351
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test5",
        "optional": false,
        "typeAnnotation": null,
        "start": 434,
        "end": 439
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "isError",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 449,
                "end": 456
              },
              "start": 447,
              "end": 456
            },
            "start": 440,
            "end": 456
          },
          "right": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 459,
            "end": 463
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 440,
          "end": 463
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 466,
            "end": 473
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 474,
                "end": 477
              }
            ],
            "start": 473,
            "end": 478
          },
          "start": 466,
          "end": 478
        },
        "start": 464,
        "end": 478
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "isError",
                "optional": false,
                "typeAnnotation": null,
                "start": 511,
                "end": 518
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 523,
                "end": 527
              },
              "start": 511,
              "end": 527
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 546,
                    "end": 555
                  },
                  "start": 539,
                  "end": 556
                }
              ],
              "start": 529,
              "end": 562
            },
            "alternate": null,
            "start": 507,
            "end": 562
          }
        ],
        "start": 479,
        "end": 564
      },
      "expression": false,
      "start": 419,
      "end": 564
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test6",
        "optional": false,
        "typeAnnotation": null,
        "start": 632,
        "end": 637
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "isError",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 647,
                "end": 654
              },
              "start": 645,
              "end": 654
            },
            "start": 638,
            "end": 654
          },
          "right": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 657,
            "end": 661
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 638,
          "end": 661
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 664,
            "end": 671
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 672,
                "end": 678
              }
            ],
            "start": 671,
            "end": 679
          },
          "start": 664,
          "end": 679
        },
        "start": 662,
        "end": 679
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "isError",
                "optional": false,
                "typeAnnotation": null,
                "start": 691,
                "end": 698
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 703,
                "end": 707
              },
              "start": 691,
              "end": 707
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 726,
                    "end": 735
                  },
                  "start": 719,
                  "end": 736
                }
              ],
              "start": 709,
              "end": 742
            },
            "alternate": null,
            "start": 687,
            "end": 742
          }
        ],
        "start": 680,
        "end": 744
      },
      "expression": false,
      "start": 617,
      "end": 744
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test7",
        "optional": false,
        "typeAnnotation": null,
        "start": 847,
        "end": 852
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "isError",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 862,
                "end": 869
              },
              "start": 860,
              "end": 869
            },
            "start": 853,
            "end": 869
          },
          "right": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 872,
            "end": 876
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 853,
          "end": 876
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
                "type": "Identifier",
                "decorators": [],
                "name": "isError",
                "optional": false,
                "typeAnnotation": null,
                "start": 889,
                "end": 896
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 901,
                "end": 905
              },
              "start": 889,
              "end": 905
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 917,
                  "end": 924
                }
              ],
              "start": 907,
              "end": 930
            },
            "alternate": null,
            "start": 885,
            "end": 930
          }
        ],
        "start": 878,
        "end": 932
      },
      "expression": false,
      "start": 832,
      "end": 932
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 70,
  "end": 932
}
```
