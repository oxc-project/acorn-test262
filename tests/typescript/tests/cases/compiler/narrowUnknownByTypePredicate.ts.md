__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 625,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 59,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 29,
        "decorators": [],
        "name": "isNotNullish",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 30,
          "end": 44,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 35,
            "end": 44,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 37,
              "end": 44
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 45,
        "end": 58,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 47,
          "end": 58,
          "parameterName": {
            "type": "Identifier",
            "start": 47,
            "end": 52,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 56,
            "end": 58,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 56,
              "end": 58,
              "members": []
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 60,
      "end": 130,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 86,
        "decorators": [],
        "name": "isNullish",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 87,
          "end": 101,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 92,
            "end": 101,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 94,
              "end": 101
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 102,
        "end": 129,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 104,
          "end": 129,
          "parameterName": {
            "type": "Identifier",
            "start": 104,
            "end": 109,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 113,
            "end": 129,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 113,
              "end": 129,
              "types": [
                {
                  "type": "TSNullKeyword",
                  "start": 113,
                  "end": 117
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 120,
                  "end": 129
                }
              ]
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 132,
      "end": 162,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 146,
          "end": 161,
          "id": {
            "type": "Identifier",
            "start": 146,
            "end": 161,
            "decorators": [],
            "name": "value1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 152,
              "end": 161,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 154,
                "end": 161
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 163,
      "end": 202,
      "test": {
        "type": "CallExpression",
        "start": 167,
        "end": 187,
        "callee": {
          "type": "Identifier",
          "start": 167,
          "end": 179,
          "decorators": [],
          "name": "isNotNullish",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 180,
            "end": 186,
            "decorators": [],
            "name": "value1",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 189,
        "end": 202,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 193,
            "end": 200,
            "expression": {
              "type": "Identifier",
              "start": 193,
              "end": 199,
              "decorators": [],
              "name": "value1",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 204,
      "end": 234,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 218,
          "end": 233,
          "id": {
            "type": "Identifier",
            "start": 218,
            "end": 233,
            "decorators": [],
            "name": "value2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 224,
              "end": 233,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 226,
                "end": 233
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 235,
      "end": 275,
      "test": {
        "type": "UnaryExpression",
        "start": 239,
        "end": 260,
        "operator": "!",
        "argument": {
          "type": "CallExpression",
          "start": 240,
          "end": 260,
          "callee": {
            "type": "Identifier",
            "start": 240,
            "end": 252,
            "decorators": [],
            "name": "isNotNullish",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "start": 253,
              "end": 259,
              "decorators": [],
              "name": "value2",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false
        },
        "prefix": true
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 262,
        "end": 275,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 266,
            "end": 273,
            "expression": {
              "type": "Identifier",
              "start": 266,
              "end": 272,
              "decorators": [],
              "name": "value2",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 277,
      "end": 307,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 291,
          "end": 306,
          "id": {
            "type": "Identifier",
            "start": 291,
            "end": 306,
            "decorators": [],
            "name": "value3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 297,
              "end": 306,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 299,
                "end": 306
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 308,
      "end": 344,
      "test": {
        "type": "CallExpression",
        "start": 312,
        "end": 329,
        "callee": {
          "type": "Identifier",
          "start": 312,
          "end": 321,
          "decorators": [],
          "name": "isNullish",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 322,
            "end": 328,
            "decorators": [],
            "name": "value3",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 331,
        "end": 344,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 335,
            "end": 342,
            "expression": {
              "type": "Identifier",
              "start": 335,
              "end": 341,
              "decorators": [],
              "name": "value3",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 346,
      "end": 376,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 360,
          "end": 375,
          "id": {
            "type": "Identifier",
            "start": 360,
            "end": 375,
            "decorators": [],
            "name": "value4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 366,
              "end": 375,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 368,
                "end": 375
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 377,
      "end": 414,
      "test": {
        "type": "UnaryExpression",
        "start": 381,
        "end": 399,
        "operator": "!",
        "argument": {
          "type": "CallExpression",
          "start": 382,
          "end": 399,
          "callee": {
            "type": "Identifier",
            "start": 382,
            "end": 391,
            "decorators": [],
            "name": "isNullish",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "start": 392,
              "end": 398,
              "decorators": [],
              "name": "value4",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false
        },
        "prefix": true
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 401,
        "end": 414,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 405,
            "end": 412,
            "expression": {
              "type": "Identifier",
              "start": 405,
              "end": 411,
              "decorators": [],
              "name": "value4",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "ClassDeclaration",
      "start": 416,
      "end": 448,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 430,
        "end": 431,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 432,
        "end": 448,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 434,
            "end": 446,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 434,
              "end": 437,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 437,
              "end": 445,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 439,
                "end": 445
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "TSDeclareFunction",
      "start": 449,
      "end": 498,
      "id": {
        "type": "Identifier",
        "start": 466,
        "end": 469,
        "decorators": [],
        "name": "isA",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 470,
          "end": 484,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 475,
            "end": 484,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 477,
              "end": 484
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 485,
        "end": 497,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 487,
          "end": 497,
          "parameterName": {
            "type": "Identifier",
            "start": 487,
            "end": 492,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 496,
            "end": 497,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 496,
              "end": 497,
              "typeName": {
                "type": "Identifier",
                "start": 496,
                "end": 497,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 500,
      "end": 530,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 514,
          "end": 529,
          "id": {
            "type": "Identifier",
            "start": 514,
            "end": 529,
            "decorators": [],
            "name": "value5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 520,
              "end": 529,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 522,
                "end": 529
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 531,
      "end": 561,
      "test": {
        "type": "CallExpression",
        "start": 535,
        "end": 546,
        "callee": {
          "type": "Identifier",
          "start": 535,
          "end": 538,
          "decorators": [],
          "name": "isA",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 539,
            "end": 545,
            "decorators": [],
            "name": "value5",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 548,
        "end": 561,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 552,
            "end": 559,
            "expression": {
              "type": "Identifier",
              "start": 552,
              "end": 558,
              "decorators": [],
              "name": "value5",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 563,
      "end": 593,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 577,
          "end": 592,
          "id": {
            "type": "Identifier",
            "start": 577,
            "end": 592,
            "decorators": [],
            "name": "value6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 583,
              "end": 592,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 585,
                "end": 592
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 594,
      "end": 625,
      "test": {
        "type": "UnaryExpression",
        "start": 598,
        "end": 610,
        "operator": "!",
        "argument": {
          "type": "CallExpression",
          "start": 599,
          "end": 610,
          "callee": {
            "type": "Identifier",
            "start": 599,
            "end": 602,
            "decorators": [],
            "name": "isA",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "start": 603,
              "end": 609,
              "decorators": [],
              "name": "value6",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false
        },
        "prefix": true
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 612,
        "end": 625,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 616,
            "end": 623,
            "expression": {
              "type": "Identifier",
              "start": 616,
              "end": 622,
              "decorators": [],
              "name": "value6",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
