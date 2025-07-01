__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Constructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 16
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": false,
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
              "start": 27,
              "end": 31
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 33,
                  "end": 36
                },
                "start": 33,
                "end": 38
              },
              "start": 31,
              "end": 38
            },
            "value": null,
            "start": 24,
            "end": 38
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 43,
            "end": 45
          },
          "start": 40,
          "end": 45
        },
        "start": 19,
        "end": 45
      },
      "declare": false,
      "start": 0,
      "end": 46
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
            "name": "Mixin1",
            "optional": false,
            "typeAnnotation": null,
            "start": 54,
            "end": 60
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 64,
                    "end": 65
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 74,
                      "end": 85
                    },
                    "typeArguments": null,
                    "start": 74,
                    "end": 85
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 64,
                  "end": 85
                }
              ],
              "start": 63,
              "end": 86
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 93,
                      "end": 94
                    },
                    "typeArguments": null,
                    "start": 93,
                    "end": 94
                  },
                  "start": 91,
                  "end": 94
                },
                "start": 87,
                "end": 94
              }
            ],
            "returnType": null,
            "body": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 113,
                "end": 117
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_fooPrivate",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 128,
                      "end": 139
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [],
                        "start": 141,
                        "end": 143
                      },
                      "start": 139,
                      "end": 143
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 120,
                    "end": 144
                  }
                ],
                "start": 118,
                "end": 146
              },
              "abstract": false,
              "declare": false,
              "start": 99,
              "end": 146
            },
            "id": null,
            "generator": false,
            "start": 63,
            "end": 146
          },
          "definite": false,
          "start": 54,
          "end": 146
        }
      ],
      "declare": false,
      "start": 48,
      "end": 146
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FooConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 153,
        "end": 167
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Mixin1",
            "optional": false,
            "typeAnnotation": null,
            "start": 177,
            "end": 183
          },
          "typeArguments": null,
          "start": 170,
          "end": 183
        },
        "extendsType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 196,
                    "end": 207
                  },
                  "typeArguments": null,
                  "start": 196,
                  "end": 207
                },
                "start": 194,
                "end": 207
              },
              "start": 193,
              "end": 207
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Cls",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 218,
                  "end": 221
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 218,
                "end": 221
              },
              "start": 212,
              "end": 221
            },
            "start": 209,
            "end": 221
          },
          "start": 192,
          "end": 221
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Cls",
            "optional": false,
            "typeAnnotation": null,
            "start": 224,
            "end": 227
          },
          "typeArguments": null,
          "start": 224,
          "end": 227
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 230,
          "end": 235
        },
        "start": 170,
        "end": 235
      },
      "declare": false,
      "start": 148,
      "end": 236
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
            "name": "Mixin2",
            "optional": false,
            "typeAnnotation": null,
            "start": 243,
            "end": 249
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 253,
                    "end": 254
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FooConstructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 263,
                      "end": 277
                    },
                    "typeArguments": null,
                    "start": 263,
                    "end": 277
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 253,
                  "end": 277
                }
              ],
              "start": 252,
              "end": 278
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 285,
                      "end": 286
                    },
                    "typeArguments": null,
                    "start": 285,
                    "end": 286
                  },
                  "start": 283,
                  "end": 286
                },
                "start": 279,
                "end": 286
              }
            ],
            "returnType": null,
            "body": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 305,
                "end": 309
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 310,
                "end": 312
              },
              "abstract": false,
              "declare": false,
              "start": 291,
              "end": 312
            },
            "id": null,
            "generator": false,
            "start": 252,
            "end": 312
          },
          "definite": false,
          "start": 243,
          "end": 312
        }
      ],
      "declare": false,
      "start": 237,
      "end": 313
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 321,
        "end": 322
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Mixin2",
          "optional": false,
          "typeAnnotation": null,
          "start": 331,
          "end": 337
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Mixin1",
              "optional": false,
              "typeAnnotation": null,
              "start": 338,
              "end": 344
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 345,
                "end": 351
              }
            ],
            "optional": false,
            "start": 338,
            "end": 352
          }
        ],
        "optional": false,
        "start": 331,
        "end": 353
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 354,
        "end": 356
      },
      "abstract": false,
      "declare": false,
      "start": 315,
      "end": 356
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 356
}
```
