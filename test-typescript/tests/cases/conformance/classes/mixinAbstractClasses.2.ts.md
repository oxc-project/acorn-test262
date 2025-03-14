mixinAbstractClasses.2.ts
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 44,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 22,
            "end": 42,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 33,
              "decorators": [],
              "name": "mixinMethod",
              "optional": false
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
            "static": false
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
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 46,
      "end": 464,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 192,
        "end": 464,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 346,
            "end": 439,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 398,
              "end": 439,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 408,
                  "end": 433,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 408,
                    "end": 419,
                    "decorators": [],
                    "name": "mixinMethod",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 419,
                    "end": 433,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 422,
                      "end": 433,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 352,
              "end": 362,
              "decorators": [],
              "name": "MixinClass",
              "optional": false
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 392,
                "end": 397,
                "expression": {
                  "type": "Identifier",
                  "start": 392,
                  "end": 397,
                  "decorators": [],
                  "name": "Mixin",
                  "optional": false
                }
              }
            ],
            "superClass": {
              "type": "Identifier",
              "start": 371,
              "end": 380,
              "decorators": [],
              "name": "baseClass",
              "optional": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 444,
            "end": 462,
            "argument": {
              "type": "Identifier",
              "start": 451,
              "end": 461,
              "decorators": [],
              "name": "MixinClass",
              "optional": false
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
        "optional": false
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
                "optional": false
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
              "typeName": {
                "type": "Identifier",
                "start": 140,
                "end": 150,
                "decorators": [],
                "name": "TBaseClass",
                "optional": false
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
                  }
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
                    "optional": false
                  }
                }
              }
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
                  }
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
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 61,
              "end": 71,
              "decorators": [],
              "name": "TBaseClass",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 466,
      "end": 538,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 494,
        "end": 538,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 500,
            "end": 536,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 509,
              "end": 527,
              "decorators": [],
              "name": "abstractBaseMethod",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 527,
              "end": 536,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
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
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 481,
        "end": 493,
        "decorators": [],
        "name": "AbstractBase",
        "optional": false
      },
      "implements": [],
      "superClass": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 546,
            "end": 555,
            "decorators": [],
            "name": "MixedBase",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 558,
            "end": 577,
            "arguments": [
              {
                "type": "Identifier",
                "start": 564,
                "end": 576,
                "decorators": [],
                "name": "AbstractBase",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 558,
              "end": 563,
              "decorators": [],
              "name": "Mixin",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 741,
      "end": 788,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 785,
        "end": 788,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 747,
        "end": 766,
        "decorators": [],
        "name": "DerivedFromAbstract",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 775,
        "end": 784,
        "decorators": [],
        "name": "MixedBase",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 857,
      "end": 873,
      "expression": {
        "type": "NewExpression",
        "start": 857,
        "end": 872,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 861,
          "end": 870,
          "decorators": [],
          "name": "MixedBase",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
