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
        "name": "Mixin",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "mixinMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "Mixin",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 116,
          "end": 137,
          "name": "baseClass",
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
                "name": "TBaseClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 192,
        "end": 325,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 198,
            "end": 300,
            "id": {
              "type": "Identifier",
              "start": 213,
              "end": 223,
              "name": "MixinClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 232,
              "end": 241,
              "name": "baseClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 259,
              "end": 300,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 269,
                  "end": 294,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 269,
                    "end": 280,
                    "name": "mixinMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 280,
                    "end": 294,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 283,
                      "end": 294,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 253,
                "end": 258,
                "expression": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 258,
                  "name": "Mixin",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "abstract": true,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ReturnStatement",
            "start": 305,
            "end": 323,
            "argument": {
              "type": "Identifier",
              "start": 312,
              "end": 322,
              "name": "MixinClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
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
              "name": "TBaseClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "argument": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 101,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
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
                "name": "TBaseClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                  "argument": {
                    "type": "Identifier",
                    "start": 171,
                    "end": 175,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
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
                    "name": "Mixin",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          ]
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 327,
      "end": 369,
      "id": {
        "type": "Identifier",
        "start": 333,
        "end": 345,
        "name": "ConcreteBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 346,
        "end": 369,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 352,
            "end": 367,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 352,
              "end": 362,
              "name": "baseMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 362,
              "end": 367,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 365,
                "end": 367,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
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
      "start": 371,
      "end": 443,
      "id": {
        "type": "Identifier",
        "start": 386,
        "end": 398,
        "name": "AbstractBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 399,
        "end": 443,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 405,
            "end": 441,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 414,
              "end": 432,
              "name": "abstractBaseMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 432,
              "end": 441,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 434,
                "end": 440,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 436,
                  "end": 440
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
      "start": 445,
      "end": 502,
      "id": {
        "type": "Identifier",
        "start": 451,
        "end": 470,
        "name": "DerivedFromConcrete",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 479,
        "end": 498,
        "callee": {
          "type": "Identifier",
          "start": 479,
          "end": 484,
          "name": "Mixin",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 485,
            "end": 497,
            "name": "ConcreteBase",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "ClassBody",
        "start": 499,
        "end": 502,
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
      "type": "VariableDeclaration",
      "start": 504,
      "end": 550,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 510,
          "end": 549,
          "id": {
            "type": "Identifier",
            "start": 510,
            "end": 521,
            "name": "wasConcrete",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 524,
            "end": 549,
            "callee": {
              "type": "Identifier",
              "start": 528,
              "end": 547,
              "name": "DerivedFromConcrete",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
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
            "name": "wasConcrete",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 563,
            "end": 573,
            "name": "baseMethod",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
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
            "name": "wasConcrete",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 589,
            "end": 600,
            "name": "mixinMethod",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 605,
      "end": 690,
      "id": {
        "type": "Identifier",
        "start": 611,
        "end": 630,
        "name": "DerivedFromAbstract",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 639,
        "end": 658,
        "callee": {
          "type": "Identifier",
          "start": 639,
          "end": 644,
          "name": "Mixin",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 645,
            "end": 657,
            "name": "AbstractBase",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "ClassBody",
        "start": 659,
        "end": 690,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 665,
            "end": 688,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 665,
              "end": 683,
              "name": "abstractBaseMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 683,
              "end": 688,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 686,
                "end": 688,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 692,
      "end": 738,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 698,
          "end": 737,
          "id": {
            "type": "Identifier",
            "start": 698,
            "end": 709,
            "name": "wasAbstract",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 712,
            "end": 737,
            "callee": {
              "type": "Identifier",
              "start": 716,
              "end": 735,
              "name": "DerivedFromAbstract",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
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
            "name": "wasAbstract",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 751,
            "end": 769,
            "name": "abstractBaseMethod",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
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
            "name": "wasAbstract",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 785,
            "end": 796,
            "name": "mixinMethod",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
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
