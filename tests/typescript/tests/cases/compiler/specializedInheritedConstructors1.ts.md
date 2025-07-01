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
        "name": "ViewOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 21
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TModel",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 28
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 22,
            "end": 28
          }
        ],
        "start": 21,
        "end": 29
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "model",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 41
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TModel",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 43,
                  "end": 49
                },
                "typeArguments": null,
                "start": 43,
                "end": 49
              },
              "start": 41,
              "end": 49
            },
            "accessibility": null,
            "static": false,
            "start": 36,
            "end": 50
          }
        ],
        "start": 30,
        "end": 52
      },
      "declare": false,
      "start": 0,
      "end": 52
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "View",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 64
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TModel",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 71
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 65,
            "end": 71
          }
        ],
        "start": 64,
        "end": 72
      },
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 90
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "options",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ViewOptions",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 100,
                        "end": 111
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TModel",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 112,
                              "end": 118
                            },
                            "typeArguments": null,
                            "start": 112,
                            "end": 118
                          }
                        ],
                        "start": 111,
                        "end": 119
                      },
                      "start": 100,
                      "end": 119
                    },
                    "start": 98,
                    "end": 119
                  },
                  "start": 91,
                  "end": 119
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 121,
                "end": 124
              },
              "expression": false,
              "start": 90,
              "end": 124
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 79,
            "end": 124
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "model",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 134
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TModel",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 136,
                  "end": 142
                },
                "typeArguments": null,
                "start": 136,
                "end": 142
              },
              "start": 134,
              "end": 142
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 129,
            "end": 143
          }
        ],
        "start": 73,
        "end": 145
      },
      "abstract": false,
      "declare": false,
      "start": 54,
      "end": 145
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Model",
        "optional": false,
        "typeAnnotation": null,
        "start": 153,
        "end": 158
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 159,
        "end": 162
      },
      "abstract": false,
      "declare": false,
      "start": 147,
      "end": 162
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyView",
        "optional": false,
        "typeAnnotation": null,
        "start": 169,
        "end": 175
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "View",
        "optional": false,
        "typeAnnotation": null,
        "start": 184,
        "end": 188
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Model",
              "optional": false,
              "typeAnnotation": null,
              "start": 189,
              "end": 194
            },
            "typeArguments": null,
            "start": 189,
            "end": 194
          }
        ],
        "start": 188,
        "end": 195
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 196,
        "end": 199
      },
      "abstract": false,
      "declare": false,
      "start": 163,
      "end": 199
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ViewOptions",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 208,
                  "end": 219
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Model",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 220,
                        "end": 225
                      },
                      "typeArguments": null,
                      "start": 220,
                      "end": 225
                    }
                  ],
                  "start": 219,
                  "end": 226
                },
                "start": 208,
                "end": 226
              },
              "start": 206,
              "end": 226
            },
            "start": 205,
            "end": 226
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "model",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 231,
                  "end": 236
                },
                "value": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Model",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 242,
                    "end": 247
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 238,
                  "end": 249
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 231,
                "end": 249
              }
            ],
            "start": 229,
            "end": 251
          },
          "definite": false,
          "start": 205,
          "end": 251
        }
      ],
      "declare": false,
      "start": 201,
      "end": 252
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "aView",
            "optional": false,
            "typeAnnotation": null,
            "start": 257,
            "end": 262
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "View",
              "optional": false,
              "typeAnnotation": null,
              "start": 269,
              "end": 273
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "model",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 276,
                      "end": 281
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Model",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 287,
                        "end": 292
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 283,
                      "end": 294
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 276,
                    "end": 294
                  }
                ],
                "start": 274,
                "end": 296
              }
            ],
            "start": 265,
            "end": 297
          },
          "definite": false,
          "start": 257,
          "end": 297
        }
      ],
      "declare": false,
      "start": 253,
      "end": 298
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "aView2",
            "optional": false,
            "typeAnnotation": null,
            "start": 304,
            "end": 310
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "View",
              "optional": false,
              "typeAnnotation": null,
              "start": 317,
              "end": 321
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 322,
                "end": 323
              }
            ],
            "start": 313,
            "end": 324
          },
          "definite": false,
          "start": 304,
          "end": 324
        }
      ],
      "declare": false,
      "start": 300,
      "end": 325
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "myView",
            "optional": false,
            "typeAnnotation": null,
            "start": 331,
            "end": 337
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyView",
              "optional": false,
              "typeAnnotation": null,
              "start": 344,
              "end": 350
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 351,
                "end": 352
              }
            ],
            "start": 340,
            "end": 353
          },
          "definite": false,
          "start": 331,
          "end": 353
        }
      ],
      "declare": false,
      "start": 327,
      "end": 354
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 367
}
```
