__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 18
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 20
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 19,
            "end": 20
          }
        ],
        "start": 18,
        "end": 21
      },
      "superClass": null,
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
              "name": "payload",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 35
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 37,
                  "end": 38
                },
                "typeArguments": null,
                "start": 37,
                "end": 38
              },
              "start": 35,
              "end": 38
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
            "start": 28,
            "end": 39
          }
        ],
        "start": 22,
        "end": 41
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 41
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
            "name": "genericObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 60
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "GenericClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 79
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "greeting",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 82,
                        "end": 90
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 92,
                          "end": 98
                        },
                        "start": 90,
                        "end": 98
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 82,
                      "end": 98
                    }
                  ],
                  "start": 80,
                  "end": 100
                }
              ],
              "start": 79,
              "end": 101
            },
            "arguments": [],
            "start": 63,
            "end": 103
          },
          "definite": false,
          "start": 47,
          "end": 103
        }
      ],
      "declare": false,
      "start": 43,
      "end": 104
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "genericFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 115,
        "end": 130
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 132
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 131,
            "end": 132
          }
        ],
        "start": 130,
        "end": 133
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "object",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "GenericClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 142,
                "end": 154
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 155,
                      "end": 156
                    },
                    "typeArguments": null,
                    "start": 155,
                    "end": 156
                  }
                ],
                "start": 154,
                "end": 157
              },
              "start": 142,
              "end": 157
            },
            "start": 140,
            "end": 157
          },
          "start": 134,
          "end": 157
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "payload",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 179,
                        "end": 180
                      },
                      "typeArguments": null,
                      "start": 179,
                      "end": 180
                    },
                    "start": 177,
                    "end": 180
                  },
                  "start": 170,
                  "end": 180
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 185,
                  "end": 189
                },
                "start": 182,
                "end": 189
              },
              "start": 169,
              "end": 189
            },
            "start": 167,
            "end": 189
          },
          "start": 159,
          "end": 189
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": null,
                "start": 197,
                "end": 205
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "object",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 206,
                    "end": 212
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "payload",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 213,
                    "end": 220
                  },
                  "optional": false,
                  "computed": false,
                  "start": 206,
                  "end": 220
                }
              ],
              "optional": false,
              "start": 197,
              "end": 221
            },
            "directive": null,
            "start": 197,
            "end": 222
          }
        ],
        "start": 191,
        "end": 224
      },
      "expression": false,
      "start": 106,
      "end": 224
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "genericFunction",
          "optional": false,
          "typeAnnotation": null,
          "start": 226,
          "end": 241
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "genericObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 242,
            "end": 255
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "greeting",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 259,
                      "end": 267
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "greeting",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 259,
                      "end": 267
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 259,
                    "end": 267
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 258,
                "end": 268
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 283,
                        "end": 284
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "greeting",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 287,
                            "end": 295
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "toLocaleLowerCase",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 296,
                            "end": 313
                          },
                          "optional": false,
                          "computed": false,
                          "start": 287,
                          "end": 313
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 287,
                        "end": 315
                      },
                      "definite": false,
                      "start": 283,
                      "end": 315
                    }
                  ],
                  "declare": false,
                  "start": 279,
                  "end": 316
                }
              ],
              "start": 273,
              "end": 356
            },
            "id": null,
            "generator": false,
            "start": 257,
            "end": 356
          }
        ],
        "optional": false,
        "start": 226,
        "end": 357
      },
      "directive": null,
      "start": 226,
      "end": 358
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 358
}
```
