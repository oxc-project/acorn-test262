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
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 44,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 22,
            "end": 42,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 33,
              "decorators": [],
              "name": "mixinMethod",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
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
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "Mixin",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 46,
      "end": 325,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 192,
        "end": 325,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 198,
            "end": 300,
            "abstract": true,
            "body": {
              "type": "ClassBody",
              "start": 259,
              "end": 300,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 269,
                  "end": 294,
                  "accessibility": null,
                  "computed": false,
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
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 280,
                    "end": 294,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 283,
                      "end": 294,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            },
            "declare": false,
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
            "typeParameters": null
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
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 60,
        "decorators": [],
        "name": "Mixin",
        "optional": false,
        "typeAnnotation": null
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 127,
                "end": 137,
                "decorators": [],
                "name": "TBaseClass",
                "optional": false,
                "typeAnnotation": null
              }
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 140,
                "end": 150,
                "decorators": [],
                "name": "TBaseClass",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSConstructorType",
              "start": 154,
              "end": 190,
              "abstract": true,
              "params": [
                {
                  "type": "RestElement",
                  "start": 168,
                  "end": 180,
                  "argument": {
                    "type": "Identifier",
                    "start": 171,
                    "end": 175,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 185,
                    "end": 190,
                    "decorators": [],
                    "name": "Mixin",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 60,
        "end": 115,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 61,
            "end": 114,
            "const": false,
            "constraint": {
              "type": "TSConstructorType",
              "start": 80,
              "end": 114,
              "abstract": true,
              "params": [
                {
                  "type": "RestElement",
                  "start": 94,
                  "end": 106,
                  "argument": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 101,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
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
              },
              "typeParameters": null
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 61,
              "end": 71,
              "decorators": [],
              "name": "TBaseClass",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 327,
      "end": 369,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 346,
        "end": 369,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 352,
            "end": 367,
            "accessibility": null,
            "computed": false,
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 362,
              "end": 367,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 365,
                "end": 367,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
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
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 371,
      "end": 443,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 399,
        "end": 443,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 405,
            "end": 441,
            "accessibility": null,
            "computed": false,
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 432,
              "end": 441,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
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
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 445,
      "end": 502,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 499,
        "end": 502,
        "body": []
      },
      "declare": false,
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
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 479,
        "end": 498,
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
        "callee": {
          "type": "Identifier",
          "start": 479,
          "end": 484,
          "decorators": [],
          "name": "Mixin",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      },
      "superTypeArguments": null,
      "typeParameters": null
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
          "definite": false,
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
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 528,
              "end": 547,
              "decorators": [],
              "name": "DerivedFromConcrete",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 551,
      "end": 576,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 551,
        "end": 575,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 551,
          "end": 573,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 551,
            "end": 562,
            "decorators": [],
            "name": "wasConcrete",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 563,
            "end": 573,
            "decorators": [],
            "name": "baseMethod",
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
      "start": 577,
      "end": 603,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 577,
        "end": 602,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 577,
          "end": 600,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 577,
            "end": 588,
            "decorators": [],
            "name": "wasConcrete",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 589,
            "end": 600,
            "decorators": [],
            "name": "mixinMethod",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 605,
      "end": 690,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 659,
        "end": 690,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 665,
            "end": 688,
            "accessibility": null,
            "computed": false,
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 683,
              "end": 688,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 686,
                "end": 688,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
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
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 639,
        "end": 658,
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
        "callee": {
          "type": "Identifier",
          "start": 639,
          "end": 644,
          "decorators": [],
          "name": "Mixin",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      },
      "superTypeArguments": null,
      "typeParameters": null
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
          "definite": false,
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
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 716,
              "end": 735,
              "decorators": [],
              "name": "DerivedFromAbstract",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 739,
      "end": 772,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 739,
        "end": 771,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 739,
          "end": 769,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 739,
            "end": 750,
            "decorators": [],
            "name": "wasAbstract",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 751,
            "end": 769,
            "decorators": [],
            "name": "abstractBaseMethod",
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
      "start": 773,
      "end": 799,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 773,
        "end": 798,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 773,
          "end": 796,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 773,
            "end": 784,
            "decorators": [],
            "name": "wasAbstract",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 785,
            "end": 796,
            "decorators": [],
            "name": "mixinMethod",
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
