__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mixin",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixinMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 33
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 37,
                "end": 41
              },
              "start": 35,
              "end": 41
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 22,
            "end": 42
          }
        ],
        "start": 16,
        "end": 44
      },
      "declare": false,
      "start": 0,
      "end": 44
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mixin",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 60
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
              "name": "TBaseClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 71
            },
            "constraint": {
              "type": "TSConstructorType",
              "abstract": true,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 97,
                    "end": 101
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 103,
                      "end": 106
                    },
                    "start": 101,
                    "end": 106
                  },
                  "value": null,
                  "start": 94,
                  "end": 106
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 111,
                  "end": 114
                },
                "start": 108,
                "end": 114
              },
              "start": 80,
              "end": 114
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 61,
            "end": 114
          }
        ],
        "start": 60,
        "end": 115
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "baseClass",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TBaseClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 137
              },
              "typeArguments": null,
              "start": 127,
              "end": 137
            },
            "start": 125,
            "end": 137
          },
          "start": 116,
          "end": 137
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TBaseClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 140,
                "end": 150
              },
              "typeArguments": null,
              "start": 140,
              "end": 150
            },
            {
              "type": "TSConstructorType",
              "abstract": true,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 171,
                    "end": 175
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 177,
                      "end": 180
                    },
                    "start": 175,
                    "end": 180
                  },
                  "value": null,
                  "start": 168,
                  "end": 180
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Mixin",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 185,
                    "end": 190
                  },
                  "typeArguments": null,
                  "start": 185,
                  "end": 190
                },
                "start": 182,
                "end": 190
              },
              "start": 154,
              "end": 190
            }
          ],
          "start": 140,
          "end": 191
        },
        "start": 138,
        "end": 191
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "MixinClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 223
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "baseClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 241
            },
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Mixin",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 253,
                  "end": 258
                },
                "typeArguments": null,
                "start": 253,
                "end": 258
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mixinMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 269,
                    "end": 280
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 283,
                      "end": 294
                    },
                    "expression": false,
                    "start": 280,
                    "end": 294
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 269,
                  "end": 294
                }
              ],
              "start": 259,
              "end": 300
            },
            "abstract": true,
            "declare": false,
            "start": 198,
            "end": 300
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "MixinClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 312,
              "end": 322
            },
            "start": 305,
            "end": 323
          }
        ],
        "start": 192,
        "end": 325
      },
      "expression": false,
      "start": 46,
      "end": 325
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ConcreteBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 333,
        "end": 345
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baseMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 362
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 365,
                "end": 367
              },
              "expression": false,
              "start": 362,
              "end": 367
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 352,
            "end": 367
          }
        ],
        "start": 346,
        "end": 369
      },
      "abstract": false,
      "declare": false,
      "start": 327,
      "end": 369
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AbstractBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 386,
        "end": 398
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "abstractBaseMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 414,
              "end": 432
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 436,
                  "end": 440
                },
                "start": 434,
                "end": 440
              },
              "body": null,
              "expression": false,
              "start": 432,
              "end": 441
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 405,
            "end": 441
          }
        ],
        "start": 399,
        "end": 443
      },
      "abstract": true,
      "declare": false,
      "start": 371,
      "end": 443
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedFromConcrete",
        "optional": false,
        "typeAnnotation": null,
        "start": 451,
        "end": 470
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Mixin",
          "optional": false,
          "typeAnnotation": null,
          "start": 479,
          "end": 484
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ConcreteBase",
            "optional": false,
            "typeAnnotation": null,
            "start": 485,
            "end": 497
          }
        ],
        "optional": false,
        "start": 479,
        "end": 498
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 499,
        "end": 502
      },
      "abstract": false,
      "declare": false,
      "start": 445,
      "end": 502
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
            "name": "wasConcrete",
            "optional": false,
            "typeAnnotation": null,
            "start": 510,
            "end": 521
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "DerivedFromConcrete",
              "optional": false,
              "typeAnnotation": null,
              "start": 528,
              "end": 547
            },
            "typeArguments": null,
            "arguments": [],
            "start": 524,
            "end": 549
          },
          "definite": false,
          "start": 510,
          "end": 549
        }
      ],
      "declare": false,
      "start": 504,
      "end": 550
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "wasConcrete",
            "optional": false,
            "typeAnnotation": null,
            "start": 551,
            "end": 562
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "baseMethod",
            "optional": false,
            "typeAnnotation": null,
            "start": 563,
            "end": 573
          },
          "optional": false,
          "computed": false,
          "start": 551,
          "end": 573
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 551,
        "end": 575
      },
      "directive": null,
      "start": 551,
      "end": 576
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "wasConcrete",
            "optional": false,
            "typeAnnotation": null,
            "start": 577,
            "end": 588
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "mixinMethod",
            "optional": false,
            "typeAnnotation": null,
            "start": 589,
            "end": 600
          },
          "optional": false,
          "computed": false,
          "start": 577,
          "end": 600
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 577,
        "end": 602
      },
      "directive": null,
      "start": 577,
      "end": 603
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedFromAbstract",
        "optional": false,
        "typeAnnotation": null,
        "start": 611,
        "end": 630
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Mixin",
          "optional": false,
          "typeAnnotation": null,
          "start": 639,
          "end": 644
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "AbstractBase",
            "optional": false,
            "typeAnnotation": null,
            "start": 645,
            "end": 657
          }
        ],
        "optional": false,
        "start": 639,
        "end": 658
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "abstractBaseMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 665,
              "end": 683
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 686,
                "end": 688
              },
              "expression": false,
              "start": 683,
              "end": 688
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 665,
            "end": 688
          }
        ],
        "start": 659,
        "end": 690
      },
      "abstract": false,
      "declare": false,
      "start": 605,
      "end": 690
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
            "name": "wasAbstract",
            "optional": false,
            "typeAnnotation": null,
            "start": 698,
            "end": 709
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "DerivedFromAbstract",
              "optional": false,
              "typeAnnotation": null,
              "start": 716,
              "end": 735
            },
            "typeArguments": null,
            "arguments": [],
            "start": 712,
            "end": 737
          },
          "definite": false,
          "start": 698,
          "end": 737
        }
      ],
      "declare": false,
      "start": 692,
      "end": 738
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "wasAbstract",
            "optional": false,
            "typeAnnotation": null,
            "start": 739,
            "end": 750
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "abstractBaseMethod",
            "optional": false,
            "typeAnnotation": null,
            "start": 751,
            "end": 769
          },
          "optional": false,
          "computed": false,
          "start": 739,
          "end": 769
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 739,
        "end": 771
      },
      "directive": null,
      "start": 739,
      "end": 772
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "wasAbstract",
            "optional": false,
            "typeAnnotation": null,
            "start": 773,
            "end": 784
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "mixinMethod",
            "optional": false,
            "typeAnnotation": null,
            "start": 785,
            "end": 796
          },
          "optional": false,
          "computed": false,
          "start": 773,
          "end": 796
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 773,
        "end": 798
      },
      "directive": null,
      "start": 773,
      "end": 799
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 799
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "Mixin",
    "start": 10,
    "end": 15,
    "range": [
      10,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Identifier",
    "value": "mixinMethod",
    "start": 22,
    "end": 33,
    "range": [
      22,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 37,
    "end": 41,
    "range": [
      37,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 46,
    "end": 54,
    "range": [
      46,
      54
    ]
  },
  {
    "type": "Identifier",
    "value": "Mixin",
    "start": 55,
    "end": 60,
    "range": [
      55,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "TBaseClass",
    "start": 61,
    "end": 71,
    "range": [
      61,
      71
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 72,
    "end": 79,
    "range": [
      72,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 80,
    "end": 88,
    "range": [
      80,
      88
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 89,
    "end": 92,
    "range": [
      89,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 94,
    "end": 97,
    "range": [
      94,
      97
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 97,
    "end": 101,
    "range": [
      97,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 103,
    "end": 106,
    "range": [
      103,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 108,
    "end": 110,
    "range": [
      108,
      110
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 111,
    "end": 114,
    "range": [
      111,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "baseClass",
    "start": 116,
    "end": 125,
    "range": [
      116,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Identifier",
    "value": "TBaseClass",
    "start": 127,
    "end": 137,
    "range": [
      127,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Identifier",
    "value": "TBaseClass",
    "start": 140,
    "end": 150,
    "range": [
      140,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 154,
    "end": 162,
    "range": [
      154,
      162
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 163,
    "end": 166,
    "range": [
      163,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 168,
    "end": 171,
    "range": [
      168,
      171
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 171,
    "end": 175,
    "range": [
      171,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 177,
    "end": 180,
    "range": [
      177,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 182,
    "end": 184,
    "range": [
      182,
      184
    ]
  },
  {
    "type": "Identifier",
    "value": "Mixin",
    "start": 185,
    "end": 190,
    "range": [
      185,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 198,
    "end": 206,
    "range": [
      198,
      206
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 207,
    "end": 212,
    "range": [
      207,
      212
    ]
  },
  {
    "type": "Identifier",
    "value": "MixinClass",
    "start": 213,
    "end": 223,
    "range": [
      213,
      223
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 224,
    "end": 231,
    "range": [
      224,
      231
    ]
  },
  {
    "type": "Identifier",
    "value": "baseClass",
    "start": 232,
    "end": 241,
    "range": [
      232,
      241
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 242,
    "end": 252,
    "range": [
      242,
      252
    ]
  },
  {
    "type": "Identifier",
    "value": "Mixin",
    "start": 253,
    "end": 258,
    "range": [
      253,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Identifier",
    "value": "mixinMethod",
    "start": 269,
    "end": 280,
    "range": [
      269,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 305,
    "end": 311,
    "range": [
      305,
      311
    ]
  },
  {
    "type": "Identifier",
    "value": "MixinClass",
    "start": 312,
    "end": 322,
    "range": [
      312,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 327,
    "end": 332,
    "range": [
      327,
      332
    ]
  },
  {
    "type": "Identifier",
    "value": "ConcreteBase",
    "start": 333,
    "end": 345,
    "range": [
      333,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Identifier",
    "value": "baseMethod",
    "start": 352,
    "end": 362,
    "range": [
      352,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 371,
    "end": 379,
    "range": [
      371,
      379
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 380,
    "end": 385,
    "range": [
      380,
      385
    ]
  },
  {
    "type": "Identifier",
    "value": "AbstractBase",
    "start": 386,
    "end": 398,
    "range": [
      386,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 405,
    "end": 413,
    "range": [
      405,
      413
    ]
  },
  {
    "type": "Identifier",
    "value": "abstractBaseMethod",
    "start": 414,
    "end": 432,
    "range": [
      414,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 436,
    "end": 440,
    "range": [
      436,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 445,
    "end": 450,
    "range": [
      445,
      450
    ]
  },
  {
    "type": "Identifier",
    "value": "DerivedFromConcrete",
    "start": 451,
    "end": 470,
    "range": [
      451,
      470
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 471,
    "end": 478,
    "range": [
      471,
      478
    ]
  },
  {
    "type": "Identifier",
    "value": "Mixin",
    "start": 479,
    "end": 484,
    "range": [
      479,
      484
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Identifier",
    "value": "ConcreteBase",
    "start": 485,
    "end": 497,
    "range": [
      485,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 504,
    "end": 509,
    "range": [
      504,
      509
    ]
  },
  {
    "type": "Identifier",
    "value": "wasConcrete",
    "start": 510,
    "end": 521,
    "range": [
      510,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 524,
    "end": 527,
    "range": [
      524,
      527
    ]
  },
  {
    "type": "Identifier",
    "value": "DerivedFromConcrete",
    "start": 528,
    "end": 547,
    "range": [
      528,
      547
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 547,
    "end": 548,
    "range": [
      547,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "Identifier",
    "value": "wasConcrete",
    "start": 551,
    "end": 562,
    "range": [
      551,
      562
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Identifier",
    "value": "baseMethod",
    "start": 563,
    "end": 573,
    "range": [
      563,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Identifier",
    "value": "wasConcrete",
    "start": 577,
    "end": 588,
    "range": [
      577,
      588
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 588,
    "end": 589,
    "range": [
      588,
      589
    ]
  },
  {
    "type": "Identifier",
    "value": "mixinMethod",
    "start": 589,
    "end": 600,
    "range": [
      589,
      600
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 601,
    "end": 602,
    "range": [
      601,
      602
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 605,
    "end": 610,
    "range": [
      605,
      610
    ]
  },
  {
    "type": "Identifier",
    "value": "DerivedFromAbstract",
    "start": 611,
    "end": 630,
    "range": [
      611,
      630
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 631,
    "end": 638,
    "range": [
      631,
      638
    ]
  },
  {
    "type": "Identifier",
    "value": "Mixin",
    "start": 639,
    "end": 644,
    "range": [
      639,
      644
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 644,
    "end": 645,
    "range": [
      644,
      645
    ]
  },
  {
    "type": "Identifier",
    "value": "AbstractBase",
    "start": 645,
    "end": 657,
    "range": [
      645,
      657
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 657,
    "end": 658,
    "range": [
      657,
      658
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Identifier",
    "value": "abstractBaseMethod",
    "start": 665,
    "end": 683,
    "range": [
      665,
      683
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 684,
    "end": 685,
    "range": [
      684,
      685
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 692,
    "end": 697,
    "range": [
      692,
      697
    ]
  },
  {
    "type": "Identifier",
    "value": "wasAbstract",
    "start": 698,
    "end": 709,
    "range": [
      698,
      709
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 710,
    "end": 711,
    "range": [
      710,
      711
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 712,
    "end": 715,
    "range": [
      712,
      715
    ]
  },
  {
    "type": "Identifier",
    "value": "DerivedFromAbstract",
    "start": 716,
    "end": 735,
    "range": [
      716,
      735
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 735,
    "end": 736,
    "range": [
      735,
      736
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 736,
    "end": 737,
    "range": [
      736,
      737
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 737,
    "end": 738,
    "range": [
      737,
      738
    ]
  },
  {
    "type": "Identifier",
    "value": "wasAbstract",
    "start": 739,
    "end": 750,
    "range": [
      739,
      750
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Identifier",
    "value": "abstractBaseMethod",
    "start": 751,
    "end": 769,
    "range": [
      751,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 769,
    "end": 770,
    "range": [
      769,
      770
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 771,
    "end": 772,
    "range": [
      771,
      772
    ]
  },
  {
    "type": "Identifier",
    "value": "wasAbstract",
    "start": 773,
    "end": 784,
    "range": [
      773,
      784
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 784,
    "end": 785,
    "range": [
      784,
      785
    ]
  },
  {
    "type": "Identifier",
    "value": "mixinMethod",
    "start": 785,
    "end": 796,
    "range": [
      785,
      796
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 797,
    "end": 798,
    "range": [
      797,
      798
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 798,
    "end": 799,
    "range": [
      798,
      799
    ]
  }
]
```
