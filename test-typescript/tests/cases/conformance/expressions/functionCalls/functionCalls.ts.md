functionCalls.ts
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 74,
            "end": 85,
            "decorators": [],
            "name": "anyVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 80,
              "end": 85,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 82,
                "end": 85
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 87,
      "end": 97,
      "expression": {
        "type": "CallExpression",
        "start": 87,
        "end": 96,
        "arguments": [
          {
            "type": "Literal",
            "start": 94,
            "end": 95,
            "raw": "0",
            "value": 0
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 87,
          "end": 93,
          "decorators": [],
          "name": "anyVar",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 98,
      "end": 109,
      "expression": {
        "type": "CallExpression",
        "start": 98,
        "end": 108,
        "arguments": [
          {
            "type": "Literal",
            "start": 105,
            "end": 107,
            "raw": "''",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 98,
          "end": 104,
          "decorators": [],
          "name": "anyVar",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 204,
      "end": 228,
      "expression": {
        "type": "CallExpression",
        "start": 204,
        "end": 227,
        "arguments": [
          {
            "type": "Literal",
            "start": 219,
            "end": 226,
            "raw": "'hello'",
            "value": "hello"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 204,
          "end": 210,
          "decorators": [],
          "name": "anyVar",
          "optional": false
        },
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
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 229,
      "end": 246,
      "expression": {
        "type": "CallExpression",
        "start": 229,
        "end": 245,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 229,
          "end": 235,
          "decorators": [],
          "name": "anyVar",
          "optional": false
        },
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
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 247,
      "end": 273,
      "expression": {
        "type": "CallExpression",
        "start": 247,
        "end": 272,
        "arguments": [
          {
            "type": "Identifier",
            "start": 262,
            "end": 271,
            "decorators": [],
            "name": "undefined",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 247,
          "end": 253,
          "decorators": [],
          "name": "anyVar",
          "optional": false
        },
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
                "decorators": [],
                "name": "Window",
                "optional": false
              }
            }
          ]
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 381,
      "end": 437,
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
            "key": {
              "type": "Identifier",
              "start": 422,
              "end": 426,
              "decorators": [],
              "name": "prop",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 426,
              "end": 434,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 428,
                "end": 434
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 407,
          "end": 415,
          "expression": {
            "type": "Identifier",
            "start": 407,
            "end": 415,
            "decorators": [],
            "name": "Function",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 391,
        "end": 398,
        "decorators": [],
        "name": "SubFunc",
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 442,
            "end": 458,
            "decorators": [],
            "name": "subFunc",
            "optional": false,
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
                  "decorators": [],
                  "name": "SubFunc",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 460,
      "end": 471,
      "expression": {
        "type": "CallExpression",
        "start": 460,
        "end": 470,
        "arguments": [
          {
            "type": "Literal",
            "start": 468,
            "end": 469,
            "raw": "0",
            "value": 0
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 460,
          "end": 467,
          "decorators": [],
          "name": "subFunc",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 472,
      "end": 484,
      "expression": {
        "type": "CallExpression",
        "start": 472,
        "end": 483,
        "arguments": [
          {
            "type": "Literal",
            "start": 480,
            "end": 482,
            "raw": "''",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 472,
          "end": 479,
          "decorators": [],
          "name": "subFunc",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 485,
      "end": 495,
      "expression": {
        "type": "CallExpression",
        "start": 485,
        "end": 494,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 485,
          "end": 492,
          "decorators": [],
          "name": "subFunc",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 626,
      "end": 645,
      "expression": {
        "type": "CallExpression",
        "start": 626,
        "end": 644,
        "arguments": [
          {
            "type": "Literal",
            "start": 642,
            "end": 643,
            "raw": "0",
            "value": 0
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 626,
          "end": 633,
          "decorators": [],
          "name": "subFunc",
          "optional": false
        },
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
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 646,
      "end": 666,
      "expression": {
        "type": "CallExpression",
        "start": 646,
        "end": 665,
        "arguments": [
          {
            "type": "Literal",
            "start": 662,
            "end": 664,
            "raw": "''",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 646,
          "end": 653,
          "decorators": [],
          "name": "subFunc",
          "optional": false
        },
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
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 667,
      "end": 682,
      "expression": {
        "type": "CallExpression",
        "start": 667,
        "end": 681,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 667,
          "end": 674,
          "decorators": [],
          "name": "subFunc",
          "optional": false
        },
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
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 808,
            "end": 822,
            "decorators": [],
            "name": "func",
            "optional": false,
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
                  "decorators": [],
                  "name": "Function",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 824,
      "end": 840,
      "expression": {
        "type": "CallExpression",
        "start": 824,
        "end": 839,
        "arguments": [
          {
            "type": "Literal",
            "start": 837,
            "end": 838,
            "raw": "0",
            "value": 0
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 824,
          "end": 828,
          "decorators": [],
          "name": "func",
          "optional": false
        },
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
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 841,
      "end": 858,
      "expression": {
        "type": "CallExpression",
        "start": 841,
        "end": 857,
        "arguments": [
          {
            "type": "Literal",
            "start": 854,
            "end": 856,
            "raw": "''",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 841,
          "end": 845,
          "decorators": [],
          "name": "func",
          "optional": false
        },
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
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 859,
      "end": 871,
      "expression": {
        "type": "CallExpression",
        "start": 859,
        "end": 870,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 859,
          "end": 863,
          "decorators": [],
          "name": "func",
          "optional": false
        },
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
      }
    }
  ],
  "sourceType": "script"
}
```
