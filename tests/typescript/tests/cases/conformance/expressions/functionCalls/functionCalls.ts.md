__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "anyVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 82,
                "end": 85
              },
              "start": 80,
              "end": 85
            },
            "start": 74,
            "end": 85
          },
          "init": null,
          "definite": false,
          "start": 74,
          "end": 85
        }
      ],
      "declare": false,
      "start": 70,
      "end": 86
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyVar",
          "optional": false,
          "typeAnnotation": null,
          "start": 87,
          "end": 93
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 94,
            "end": 95
          }
        ],
        "optional": false,
        "start": 87,
        "end": 96
      },
      "directive": null,
      "start": 87,
      "end": 97
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyVar",
          "optional": false,
          "typeAnnotation": null,
          "start": 98,
          "end": 104
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 105,
            "end": 107
          }
        ],
        "optional": false,
        "start": 98,
        "end": 108
      },
      "directive": null,
      "start": 98,
      "end": 109
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyVar",
          "optional": false,
          "typeAnnotation": null,
          "start": 204,
          "end": 210
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 211,
              "end": 217
            }
          ],
          "start": 210,
          "end": 218
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "'hello'",
            "start": 219,
            "end": 226
          }
        ],
        "optional": false,
        "start": 204,
        "end": 227
      },
      "directive": null,
      "start": 204,
      "end": 228
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyVar",
          "optional": false,
          "typeAnnotation": null,
          "start": 229,
          "end": 235
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 236,
              "end": 242
            }
          ],
          "start": 235,
          "end": 243
        },
        "arguments": [],
        "optional": false,
        "start": 229,
        "end": 245
      },
      "directive": null,
      "start": 229,
      "end": 246
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyVar",
          "optional": false,
          "typeAnnotation": null,
          "start": 247,
          "end": 253
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Window",
                "optional": false,
                "typeAnnotation": null,
                "start": 254,
                "end": 260
              },
              "typeArguments": null,
              "start": 254,
              "end": 260
            }
          ],
          "start": 253,
          "end": 261
        },
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 262,
            "end": 271
          }
        ],
        "optional": false,
        "start": 247,
        "end": 272
      },
      "directive": null,
      "start": 247,
      "end": 273
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubFunc",
        "optional": false,
        "typeAnnotation": null,
        "start": 391,
        "end": 398
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Function",
            "optional": false,
            "typeAnnotation": null,
            "start": 407,
            "end": 415
          },
          "typeArguments": null,
          "start": 407,
          "end": 415
        }
      ],
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
              "start": 422,
              "end": 426
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 428,
                "end": 434
              },
              "start": 426,
              "end": 434
            },
            "accessibility": null,
            "static": false,
            "start": 422,
            "end": 435
          }
        ],
        "start": 416,
        "end": 437
      },
      "declare": false,
      "start": 381,
      "end": 437
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
            "name": "subFunc",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SubFunc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 451,
                  "end": 458
                },
                "typeArguments": null,
                "start": 451,
                "end": 458
              },
              "start": 449,
              "end": 458
            },
            "start": 442,
            "end": 458
          },
          "init": null,
          "definite": false,
          "start": 442,
          "end": 458
        }
      ],
      "declare": false,
      "start": 438,
      "end": 459
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "subFunc",
          "optional": false,
          "typeAnnotation": null,
          "start": 460,
          "end": 467
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 468,
            "end": 469
          }
        ],
        "optional": false,
        "start": 460,
        "end": 470
      },
      "directive": null,
      "start": 460,
      "end": 471
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "subFunc",
          "optional": false,
          "typeAnnotation": null,
          "start": 472,
          "end": 479
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 480,
            "end": 482
          }
        ],
        "optional": false,
        "start": 472,
        "end": 483
      },
      "directive": null,
      "start": 472,
      "end": 484
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "subFunc",
          "optional": false,
          "typeAnnotation": null,
          "start": 485,
          "end": 492
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 485,
        "end": 494
      },
      "directive": null,
      "start": 485,
      "end": 495
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "subFunc",
          "optional": false,
          "typeAnnotation": null,
          "start": 626,
          "end": 633
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 634,
              "end": 640
            }
          ],
          "start": 633,
          "end": 641
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 642,
            "end": 643
          }
        ],
        "optional": false,
        "start": 626,
        "end": 644
      },
      "directive": null,
      "start": 626,
      "end": 645
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "subFunc",
          "optional": false,
          "typeAnnotation": null,
          "start": 646,
          "end": 653
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 654,
              "end": 660
            }
          ],
          "start": 653,
          "end": 661
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 662,
            "end": 664
          }
        ],
        "optional": false,
        "start": 646,
        "end": 665
      },
      "directive": null,
      "start": 646,
      "end": 666
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "subFunc",
          "optional": false,
          "typeAnnotation": null,
          "start": 667,
          "end": 674
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 675,
              "end": 678
            }
          ],
          "start": 674,
          "end": 679
        },
        "arguments": [],
        "optional": false,
        "start": 667,
        "end": 681
      },
      "directive": null,
      "start": 667,
      "end": 682
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
            "name": "func",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 814,
                  "end": 822
                },
                "typeArguments": null,
                "start": 814,
                "end": 822
              },
              "start": 812,
              "end": 822
            },
            "start": 808,
            "end": 822
          },
          "init": null,
          "definite": false,
          "start": 808,
          "end": 822
        }
      ],
      "declare": false,
      "start": 804,
      "end": 823
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": null,
          "start": 824,
          "end": 828
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 829,
              "end": 835
            }
          ],
          "start": 828,
          "end": 836
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 837,
            "end": 838
          }
        ],
        "optional": false,
        "start": 824,
        "end": 839
      },
      "directive": null,
      "start": 824,
      "end": 840
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": null,
          "start": 841,
          "end": 845
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 846,
              "end": 852
            }
          ],
          "start": 845,
          "end": 853
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 854,
            "end": 856
          }
        ],
        "optional": false,
        "start": 841,
        "end": 857
      },
      "directive": null,
      "start": 841,
      "end": 858
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": null,
          "start": 859,
          "end": 863
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 864,
              "end": 867
            }
          ],
          "start": 863,
          "end": 868
        },
        "arguments": [],
        "optional": false,
        "start": 859,
        "end": 870
      },
      "directive": null,
      "start": 859,
      "end": 871
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 70,
  "end": 871
}
```
