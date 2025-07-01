__ESTREE_TEST__:PASS:
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
