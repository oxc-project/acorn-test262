__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 873,
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
      "end": 464,
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
        "end": 464,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 346,
            "end": 439,
            "id": {
              "type": "Identifier",
              "start": 352,
              "end": 362,
              "name": "MixinClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 371,
              "end": 380,
              "name": "baseClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 398,
              "end": 439,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 408,
                  "end": 433,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 408,
                    "end": 419,
                    "name": "mixinMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 419,
                    "end": 433,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 422,
                      "end": 433,
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
                "start": 392,
                "end": 397,
                "expression": {
                  "type": "Identifier",
                  "start": 392,
                  "end": 397,
                  "name": "Mixin",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ReturnStatement",
            "start": 444,
            "end": 462,
            "argument": {
              "type": "Identifier",
              "start": 451,
              "end": 461,
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
      "start": 466,
      "end": 538,
      "id": {
        "type": "Identifier",
        "start": 481,
        "end": 493,
        "name": "AbstractBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 494,
        "end": 538,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 500,
            "end": 536,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 509,
              "end": 527,
              "name": "abstractBaseMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 527,
              "end": 536,
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
                "start": 529,
                "end": 535,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 531,
                  "end": 535
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
      "type": "VariableDeclaration",
      "start": 540,
      "end": 578,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 546,
          "end": 577,
          "id": {
            "type": "Identifier",
            "start": 546,
            "end": 555,
            "name": "MixedBase",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 558,
            "end": 577,
            "callee": {
              "type": "Identifier",
              "start": 558,
              "end": 563,
              "name": "Mixin",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 564,
                "end": 576,
                "name": "AbstractBase",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 741,
      "end": 788,
      "id": {
        "type": "Identifier",
        "start": 747,
        "end": 766,
        "name": "DerivedFromAbstract",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 775,
        "end": 784,
        "name": "MixedBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 785,
        "end": 788,
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
      "type": "ExpressionStatement",
      "start": 857,
      "end": 873,
      "expression": {
        "type": "NewExpression",
        "start": 857,
        "end": 872,
        "callee": {
          "type": "Identifier",
          "start": 861,
          "end": 870,
          "name": "MixedBase",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
