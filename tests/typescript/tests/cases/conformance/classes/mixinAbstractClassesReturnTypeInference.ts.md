__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 619,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 45,
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 45,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 23,
            "end": 43,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 34,
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
              "start": 36,
              "end": 42,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 38,
                "end": 42
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
        "end": 16,
        "decorators": [],
        "name": "Mixin1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 47,
      "end": 119,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 75,
        "end": 119,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 81,
            "end": 117,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 90,
              "end": 108,
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
              "start": 108,
              "end": 117,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 110,
                "end": 116,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 112,
                  "end": 116
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
        "start": 62,
        "end": 74,
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
      "type": "FunctionDeclaration",
      "start": 121,
      "end": 530,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 207,
        "end": 530,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 361,
            "end": 505,
            "abstract": true,
            "body": {
              "type": "ClassBody",
              "start": 423,
              "end": 505,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 433,
                  "end": 455,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 433,
                    "end": 444,
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
                    "start": 444,
                    "end": 455,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 453,
                      "end": 455,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 446,
                      "end": 452,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 448,
                        "end": 452
                      }
                    },
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 464,
                  "end": 499,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 471,
                    "end": 488,
                    "decorators": [],
                    "name": "staticMixinMethod",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 488,
                    "end": 499,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 497,
                      "end": 499,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 490,
                      "end": 496,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 492,
                        "end": 496
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
              "start": 376,
              "end": 386,
              "decorators": [],
              "name": "MixinClass",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 416,
                "end": 422,
                "expression": {
                  "type": "Identifier",
                  "start": 416,
                  "end": 422,
                  "decorators": [],
                  "name": "Mixin1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "superClass": {
              "type": "Identifier",
              "start": 395,
              "end": 404,
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
            "start": 510,
            "end": 528,
            "argument": {
              "type": "Identifier",
              "start": 517,
              "end": 527,
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
        "start": 130,
        "end": 136,
        "decorators": [],
        "name": "Mixin2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 189,
          "end": 205,
          "decorators": [],
          "name": "baseClass",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 198,
            "end": 205,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 200,
              "end": 205,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 200,
                "end": 205,
                "decorators": [],
                "name": "TBase",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 136,
        "end": 188,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 137,
            "end": 187,
            "const": false,
            "constraint": {
              "type": "TSConstructorType",
              "start": 151,
              "end": 187,
              "abstract": true,
              "params": [
                {
                  "type": "RestElement",
                  "start": 165,
                  "end": 179,
                  "argument": {
                    "type": "Identifier",
                    "start": 168,
                    "end": 172,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 172,
                    "end": 179,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 174,
                      "end": 179,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 174,
                        "end": 177
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 181,
                "end": 187,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 184,
                  "end": 187
                }
              },
              "typeParameters": null
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 137,
              "end": 142,
              "decorators": [],
              "name": "TBase",
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
      "start": 532,
      "end": 619,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 588,
        "end": 619,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 594,
            "end": 617,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 594,
              "end": 612,
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
              "start": 612,
              "end": 617,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 615,
                "end": 617,
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
        "start": 538,
        "end": 558,
        "decorators": [],
        "name": "DerivedFromAbstract2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 567,
        "end": 587,
        "arguments": [
          {
            "type": "Identifier",
            "start": 574,
            "end": 586,
            "decorators": [],
            "name": "AbstractBase",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 567,
          "end": 573,
          "decorators": [],
          "name": "Mixin2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
