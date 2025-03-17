__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 70,
  "end": 872,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 70,
      "end": 86,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 74,
          "end": 85,
          "id": {
            "type": "Identifier",
            "start": 74,
            "end": 85,
            "name": "anyVar",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 80,
              "end": 85,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 82,
                "end": 85
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 87,
      "end": 97,
      "expression": {
        "type": "CallExpression",
        "start": 87,
        "end": 96,
        "callee": {
          "type": "Identifier",
          "start": 87,
          "end": 93,
          "name": "anyVar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 94,
            "end": 95,
            "value": 0,
            "raw": "0"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 98,
      "end": 109,
      "expression": {
        "type": "CallExpression",
        "start": 98,
        "end": 108,
        "callee": {
          "type": "Identifier",
          "start": 98,
          "end": 104,
          "name": "anyVar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 105,
            "end": 107,
            "value": "",
            "raw": "''"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 204,
      "end": 228,
      "expression": {
        "type": "CallExpression",
        "start": 204,
        "end": 227,
        "callee": {
          "type": "Identifier",
          "start": 204,
          "end": 210,
          "name": "anyVar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 219,
            "end": 226,
            "value": "hello",
            "raw": "'hello'"
          }
        ],
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 210,
          "end": 218,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 211,
              "end": 217
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 229,
      "end": 246,
      "expression": {
        "type": "CallExpression",
        "start": 229,
        "end": 245,
        "callee": {
          "type": "Identifier",
          "start": 229,
          "end": 235,
          "name": "anyVar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 235,
          "end": 243,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 236,
              "end": 242
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 247,
      "end": 273,
      "expression": {
        "type": "CallExpression",
        "start": 247,
        "end": 272,
        "callee": {
          "type": "Identifier",
          "start": 247,
          "end": 253,
          "name": "anyVar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 262,
            "end": 271,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 253,
          "end": 261,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 254,
              "end": 260,
              "typeName": {
                "type": "Identifier",
                "start": 254,
                "end": 260,
                "name": "Window",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 381,
      "end": 437,
      "id": {
        "type": "Identifier",
        "start": 391,
        "end": 398,
        "name": "SubFunc",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 407,
          "end": 415,
          "expression": {
            "type": "Identifier",
            "start": 407,
            "end": 415,
            "name": "Function",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 416,
        "end": 437,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 422,
            "end": 435,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 422,
              "end": 426,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 426,
              "end": 434,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 428,
                "end": 434
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 438,
      "end": 459,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 442,
          "end": 458,
          "id": {
            "type": "Identifier",
            "start": 442,
            "end": 458,
            "name": "subFunc",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 449,
              "end": 458,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 451,
                "end": 458,
                "typeName": {
                  "type": "Identifier",
                  "start": 451,
                  "end": 458,
                  "name": "SubFunc",
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 460,
      "end": 471,
      "expression": {
        "type": "CallExpression",
        "start": 460,
        "end": 470,
        "callee": {
          "type": "Identifier",
          "start": 460,
          "end": 467,
          "name": "subFunc",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 468,
            "end": 469,
            "value": 0,
            "raw": "0"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 472,
      "end": 484,
      "expression": {
        "type": "CallExpression",
        "start": 472,
        "end": 483,
        "callee": {
          "type": "Identifier",
          "start": 472,
          "end": 479,
          "name": "subFunc",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 480,
            "end": 482,
            "value": "",
            "raw": "''"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 485,
      "end": 495,
      "expression": {
        "type": "CallExpression",
        "start": 485,
        "end": 494,
        "callee": {
          "type": "Identifier",
          "start": 485,
          "end": 492,
          "name": "subFunc",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 626,
      "end": 645,
      "expression": {
        "type": "CallExpression",
        "start": 626,
        "end": 644,
        "callee": {
          "type": "Identifier",
          "start": 626,
          "end": 633,
          "name": "subFunc",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 642,
            "end": 643,
            "value": 0,
            "raw": "0"
          }
        ],
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 633,
          "end": 641,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 634,
              "end": 640
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 646,
      "end": 666,
      "expression": {
        "type": "CallExpression",
        "start": 646,
        "end": 665,
        "callee": {
          "type": "Identifier",
          "start": 646,
          "end": 653,
          "name": "subFunc",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 662,
            "end": 664,
            "value": "",
            "raw": "''"
          }
        ],
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 653,
          "end": 661,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 654,
              "end": 660
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 667,
      "end": 682,
      "expression": {
        "type": "CallExpression",
        "start": 667,
        "end": 681,
        "callee": {
          "type": "Identifier",
          "start": 667,
          "end": 674,
          "name": "subFunc",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 674,
          "end": 679,
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 675,
              "end": 678
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 804,
      "end": 823,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 808,
          "end": 822,
          "id": {
            "type": "Identifier",
            "start": 808,
            "end": 822,
            "name": "func",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 812,
              "end": 822,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 814,
                "end": 822,
                "typeName": {
                  "type": "Identifier",
                  "start": 814,
                  "end": 822,
                  "name": "Function",
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 824,
      "end": 840,
      "expression": {
        "type": "CallExpression",
        "start": 824,
        "end": 839,
        "callee": {
          "type": "Identifier",
          "start": 824,
          "end": 828,
          "name": "func",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 837,
            "end": 838,
            "value": 0,
            "raw": "0"
          }
        ],
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 828,
          "end": 836,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 829,
              "end": 835
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 841,
      "end": 858,
      "expression": {
        "type": "CallExpression",
        "start": 841,
        "end": 857,
        "callee": {
          "type": "Identifier",
          "start": 841,
          "end": 845,
          "name": "func",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 854,
            "end": 856,
            "value": "",
            "raw": "''"
          }
        ],
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 845,
          "end": 853,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 846,
              "end": 852
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 859,
      "end": 871,
      "expression": {
        "type": "CallExpression",
        "start": 859,
        "end": 870,
        "callee": {
          "type": "Identifier",
          "start": 859,
          "end": 863,
          "name": "func",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 863,
          "end": 868,
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 864,
              "end": 867
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
