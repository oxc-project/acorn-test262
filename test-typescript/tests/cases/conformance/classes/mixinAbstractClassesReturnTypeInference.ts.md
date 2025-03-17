__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 620,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 45,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "name": "Mixin1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 45,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 23,
            "end": 43,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 34,
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
              "start": 36,
              "end": 42,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 38,
                "end": 42
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
      "type": "ClassDeclaration",
      "start": 47,
      "end": 119,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 74,
        "name": "AbstractBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 75,
        "end": 119,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 81,
            "end": 117,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 90,
              "end": 108,
              "name": "abstractBaseMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 108,
              "end": 117,
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
                "start": 110,
                "end": 116,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 112,
                  "end": 116
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
      "type": "FunctionDeclaration",
      "start": 121,
      "end": 530,
      "id": {
        "type": "Identifier",
        "start": 130,
        "end": 136,
        "name": "Mixin2",
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
          "start": 189,
          "end": 205,
          "name": "baseClass",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 198,
            "end": 205,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 200,
              "end": 205,
              "typeName": {
                "type": "Identifier",
                "start": 200,
                "end": 205,
                "name": "TBase",
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
        "start": 207,
        "end": 530,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 361,
            "end": 505,
            "id": {
              "type": "Identifier",
              "start": 376,
              "end": 386,
              "name": "MixinClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 395,
              "end": 404,
              "name": "baseClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 423,
              "end": 505,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 433,
                  "end": 455,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 433,
                    "end": 444,
                    "name": "mixinMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 444,
                    "end": 455,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 453,
                      "end": 455,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 446,
                      "end": 452,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 448,
                        "end": 452
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 464,
                  "end": 499,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 471,
                    "end": 488,
                    "name": "staticMixinMethod",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 488,
                    "end": 499,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 497,
                      "end": 499,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 490,
                      "end": 496,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 492,
                        "end": 496
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
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 416,
                "end": 422,
                "expression": {
                  "type": "Identifier",
                  "start": 416,
                  "end": 422,
                  "name": "Mixin1",
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
            "start": 510,
            "end": 528,
            "argument": {
              "type": "Identifier",
              "start": 517,
              "end": 527,
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
        "start": 136,
        "end": 188,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 137,
            "end": 187,
            "name": {
              "type": "Identifier",
              "start": 137,
              "end": 142,
              "name": "TBase",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSConstructorType",
              "start": 151,
              "end": 187,
              "abstract": true,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 165,
                  "end": 179,
                  "argument": {
                    "type": "Identifier",
                    "start": 168,
                    "end": 172,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 532,
      "end": 619,
      "id": {
        "type": "Identifier",
        "start": 538,
        "end": 558,
        "name": "DerivedFromAbstract2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 567,
        "end": 587,
        "callee": {
          "type": "Identifier",
          "start": 567,
          "end": 573,
          "name": "Mixin2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 574,
            "end": 586,
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
        "start": 588,
        "end": 619,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 594,
            "end": 617,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 594,
              "end": 612,
              "name": "abstractBaseMethod",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 612,
              "end": 617,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 615,
                "end": 617,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
