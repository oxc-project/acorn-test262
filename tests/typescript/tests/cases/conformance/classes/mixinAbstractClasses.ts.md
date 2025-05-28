__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 799,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 44,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "Mixin",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 44,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 22,
            "end": 42,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 33,
              "decorators": [],
              "name": "mixinMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 41,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 37,
                "end": 41
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 46,
      "end": 325,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 60,
        "decorators": [],
        "name": "Mixin",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 60,
        "end": 115,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 61,
            "end": 114,
            "name": {
              "type": "Identifier",
              "start": 61,
              "end": 71,
              "decorators": [],
              "name": "TBaseClass",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSConstructorType",
              "start": 80,
              "end": 114,
              "abstract": true,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 94,
                  "end": 106,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 101,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 101,
                    "end": 106,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 103,
                      "end": 106
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 108,
                "end": 114,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 111,
                  "end": 114
                }
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 116,
          "end": 137,
          "decorators": [],
          "name": "baseClass",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 125,
            "end": 137,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 127,
              "end": 137,
              "typeName": {
                "type": "Identifier",
                "start": 127,
                "end": 137,
                "decorators": [],
                "name": "TBaseClass",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 138,
        "end": 191,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 140,
          "end": 191,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 140,
              "end": 150,
              "typeName": {
                "type": "Identifier",
                "start": 140,
                "end": 150,
                "decorators": [],
                "name": "TBaseClass",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSConstructorType",
              "start": 154,
              "end": 190,
              "abstract": true,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 168,
                  "end": 180,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 171,
                    "end": 175,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 175,
                    "end": 180,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 177,
                      "end": 180
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 182,
                "end": 190,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 185,
                  "end": 190,
                  "typeName": {
                    "type": "Identifier",
                    "start": 185,
                    "end": 190,
                    "decorators": [],
                    "name": "Mixin",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          ]
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 192,
        "end": 325,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 198,
            "end": 300,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 213,
              "end": 223,
              "decorators": [],
              "name": "MixinClass",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 232,
              "end": 241,
              "decorators": [],
              "name": "baseClass",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 253,
                "end": 258,
                "expression": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 258,
                  "decorators": [],
                  "name": "Mixin",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "body": {
              "type": "ClassBody",
              "start": 259,
              "end": 300,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 269,
                  "end": 294,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 269,
                    "end": 280,
                    "decorators": [],
                    "name": "mixinMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 280,
                    "end": 294,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 283,
                      "end": 294,
                      "body": []
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": true,
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 305,
            "end": 323,
            "argument": {
              "type": "Identifier",
              "start": 312,
              "end": 322,
              "decorators": [],
              "name": "MixinClass",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 327,
      "end": 369,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 333,
        "end": 345,
        "decorators": [],
        "name": "ConcreteBase",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 346,
        "end": 369,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 352,
            "end": 367,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 352,
              "end": 362,
              "decorators": [],
              "name": "baseMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 362,
              "end": 367,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 365,
                "end": 367,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 371,
      "end": 443,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 386,
        "end": 398,
        "decorators": [],
        "name": "AbstractBase",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 399,
        "end": 443,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 405,
            "end": 441,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 414,
              "end": 432,
              "decorators": [],
              "name": "abstractBaseMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 432,
              "end": 441,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 434,
                "end": 440,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 436,
                  "end": 440
                }
              },
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": true,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 445,
      "end": 502,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 451,
        "end": 470,
        "decorators": [],
        "name": "DerivedFromConcrete",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "start": 479,
        "end": 498,
        "callee": {
          "type": "Identifier",
          "start": 479,
          "end": 484,
          "decorators": [],
          "name": "Mixin",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 485,
            "end": 497,
            "decorators": [],
            "name": "ConcreteBase",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 499,
        "end": 502,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 504,
      "end": 550,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 510,
          "end": 549,
          "id": {
            "type": "Identifier",
            "start": 510,
            "end": 521,
            "decorators": [],
            "name": "wasConcrete",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 524,
            "end": 549,
            "callee": {
              "type": "Identifier",
              "start": 528,
              "end": 547,
              "decorators": [],
              "name": "DerivedFromConcrete",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 551,
      "end": 576,
      "expression": {
        "type": "CallExpression",
        "start": 551,
        "end": 575,
        "callee": {
          "type": "MemberExpression",
          "start": 551,
          "end": 573,
          "object": {
            "type": "Identifier",
            "start": 551,
            "end": 562,
            "decorators": [],
            "name": "wasConcrete",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 563,
            "end": 573,
            "decorators": [],
            "name": "baseMethod",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 577,
      "end": 603,
      "expression": {
        "type": "CallExpression",
        "start": 577,
        "end": 602,
        "callee": {
          "type": "MemberExpression",
          "start": 577,
          "end": 600,
          "object": {
            "type": "Identifier",
            "start": 577,
            "end": 588,
            "decorators": [],
            "name": "wasConcrete",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 589,
            "end": 600,
            "decorators": [],
            "name": "mixinMethod",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 605,
      "end": 690,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 611,
        "end": 630,
        "decorators": [],
        "name": "DerivedFromAbstract",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "start": 639,
        "end": 658,
        "callee": {
          "type": "Identifier",
          "start": 639,
          "end": 644,
          "decorators": [],
          "name": "Mixin",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 645,
            "end": 657,
            "decorators": [],
            "name": "AbstractBase",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 659,
        "end": 690,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 665,
            "end": 688,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 665,
              "end": 683,
              "decorators": [],
              "name": "abstractBaseMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 683,
              "end": 688,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 686,
                "end": 688,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 692,
      "end": 738,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 698,
          "end": 737,
          "id": {
            "type": "Identifier",
            "start": 698,
            "end": 709,
            "decorators": [],
            "name": "wasAbstract",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 712,
            "end": 737,
            "callee": {
              "type": "Identifier",
              "start": 716,
              "end": 735,
              "decorators": [],
              "name": "DerivedFromAbstract",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 739,
      "end": 772,
      "expression": {
        "type": "CallExpression",
        "start": 739,
        "end": 771,
        "callee": {
          "type": "MemberExpression",
          "start": 739,
          "end": 769,
          "object": {
            "type": "Identifier",
            "start": 739,
            "end": 750,
            "decorators": [],
            "name": "wasAbstract",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 751,
            "end": 769,
            "decorators": [],
            "name": "abstractBaseMethod",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 773,
      "end": 799,
      "expression": {
        "type": "CallExpression",
        "start": 773,
        "end": 798,
        "callee": {
          "type": "MemberExpression",
          "start": 773,
          "end": 796,
          "object": {
            "type": "Identifier",
            "start": 773,
            "end": 784,
            "decorators": [],
            "name": "wasAbstract",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 785,
            "end": 796,
            "decorators": [],
            "name": "mixinMethod",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
