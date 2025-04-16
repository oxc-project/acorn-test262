__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 356,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 16,
        "name": "Constructor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 19,
        "end": 45,
        "abstract": false,
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "start": 24,
            "end": 38,
            "argument": {
              "type": "Identifier",
              "start": 27,
              "end": 31,
              "name": "args",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 31,
              "end": 38,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 33,
                "end": 38,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 33,
                  "end": 36
                }
              }
            },
            "value": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 40,
          "end": 45,
          "typeAnnotation": {
            "type": "TSTypeLiteral",
            "start": 43,
            "end": 45,
            "members": []
          }
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 48,
      "end": 146,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 146,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 60,
            "name": "Mixin1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 63,
            "end": 146,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 87,
                "end": 94,
                "name": "Base",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 91,
                  "end": 94,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 93,
                    "end": 94,
                    "typeName": {
                      "type": "Identifier",
                      "start": 93,
                      "end": 94,
                      "name": "C",
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
              "type": "ClassExpression",
              "start": 99,
              "end": 146,
              "id": null,
              "superClass": {
                "type": "Identifier",
                "start": 113,
                "end": 117,
                "name": "Base",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 118,
                "end": 146,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 120,
                    "end": 144,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 128,
                      "end": 139,
                      "name": "_fooPrivate",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 139,
                      "end": 143,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 141,
                        "end": 143,
                        "members": []
                      }
                    },
                    "accessibility": "private"
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
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 63,
              "end": 86,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 64,
                  "end": 85,
                  "name": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 65,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 74,
                    "end": 85,
                    "typeName": {
                      "type": "Identifier",
                      "start": 74,
                      "end": 85,
                      "name": "Constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 148,
      "end": 236,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 167,
        "name": "FooConstructor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 170,
        "end": 235,
        "checkType": {
          "type": "TSTypeQuery",
          "start": 170,
          "end": 183,
          "exprName": {
            "type": "Identifier",
            "start": 177,
            "end": 183,
            "name": "Mixin1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 192,
          "end": 221,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 193,
              "end": 207,
              "name": "a",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 194,
                "end": 207,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 196,
                  "end": 207,
                  "typeName": {
                    "type": "Identifier",
                    "start": 196,
                    "end": 207,
                    "name": "Constructor",
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
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 209,
            "end": 221,
            "typeAnnotation": {
              "type": "TSInferType",
              "start": 212,
              "end": 221,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 218,
                "end": 221,
                "name": {
                  "type": "Identifier",
                  "start": 218,
                  "end": 221,
                  "name": "Cls",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 224,
          "end": 227,
          "typeName": {
            "type": "Identifier",
            "start": 224,
            "end": 227,
            "name": "Cls",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 230,
          "end": 235
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 237,
      "end": 313,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 243,
          "end": 312,
          "id": {
            "type": "Identifier",
            "start": 243,
            "end": 249,
            "name": "Mixin2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 252,
            "end": 312,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 279,
                "end": 286,
                "name": "Base",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 283,
                  "end": 286,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 285,
                    "end": 286,
                    "typeName": {
                      "type": "Identifier",
                      "start": 285,
                      "end": 286,
                      "name": "C",
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
              "type": "ClassExpression",
              "start": 291,
              "end": 312,
              "id": null,
              "superClass": {
                "type": "Identifier",
                "start": 305,
                "end": 309,
                "name": "Base",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 310,
                "end": 312,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 252,
              "end": 278,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 253,
                  "end": 277,
                  "name": {
                    "type": "Identifier",
                    "start": 253,
                    "end": 254,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 263,
                    "end": 277,
                    "typeName": {
                      "type": "Identifier",
                      "start": 263,
                      "end": 277,
                      "name": "FooConstructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 315,
      "end": 356,
      "id": {
        "type": "Identifier",
        "start": 321,
        "end": 322,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 331,
        "end": 353,
        "callee": {
          "type": "Identifier",
          "start": 331,
          "end": 337,
          "name": "Mixin2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "CallExpression",
            "start": 338,
            "end": 352,
            "callee": {
              "type": "Identifier",
              "start": 338,
              "end": 344,
              "name": "Mixin1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 345,
                "end": 351,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "ClassBody",
        "start": 354,
        "end": 356,
        "body": []
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
