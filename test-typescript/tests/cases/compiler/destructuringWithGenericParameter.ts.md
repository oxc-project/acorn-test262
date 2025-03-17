__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 359,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 18,
        "name": "GenericClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 41,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 28,
            "end": 39,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 35,
              "name": "payload",
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
              "start": 35,
              "end": 38,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 37,
                "end": 38,
                "typeName": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 38,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 18,
        "end": 21,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 20,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "name": "T",
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
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 104,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 103,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 60,
            "name": "genericObject",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 63,
            "end": 103,
            "callee": {
              "type": "Identifier",
              "start": 67,
              "end": 79,
              "name": "GenericClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 79,
              "end": 101,
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "start": 80,
                  "end": 100,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 82,
                      "end": 98,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 82,
                        "end": 90,
                        "name": "greeting",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 90,
                        "end": 98,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 92,
                          "end": 98
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 106,
      "end": 224,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 130,
        "name": "genericFunction",
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
          "start": 134,
          "end": 157,
          "name": "object",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 140,
            "end": 157,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 142,
              "end": 157,
              "typeName": {
                "type": "Identifier",
                "start": 142,
                "end": 154,
                "name": "GenericClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 154,
                "end": 157,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 155,
                    "end": 156,
                    "typeName": {
                      "type": "Identifier",
                      "start": 155,
                      "end": 156,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 159,
          "end": 189,
          "name": "callback",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 167,
            "end": 189,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 169,
              "end": 189,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 170,
                  "end": 180,
                  "name": "payload",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 177,
                    "end": 180,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 179,
                      "end": 180,
                      "typeName": {
                        "type": "Identifier",
                        "start": 179,
                        "end": 180,
                        "name": "T",
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
                "start": 182,
                "end": 189,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 185,
                  "end": 189
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 191,
        "end": 224,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 197,
            "end": 222,
            "expression": {
              "type": "CallExpression",
              "start": 197,
              "end": 221,
              "callee": {
                "type": "Identifier",
                "start": 197,
                "end": 205,
                "name": "callback",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 206,
                  "end": 220,
                  "object": {
                    "type": "Identifier",
                    "start": 206,
                    "end": 212,
                    "name": "object",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 213,
                    "end": 220,
                    "name": "payload",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 130,
        "end": 133,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 131,
            "end": 132,
            "name": {
              "type": "Identifier",
              "start": 131,
              "end": 132,
              "name": "T",
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
        ]
      },
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 226,
      "end": 358,
      "expression": {
        "type": "CallExpression",
        "start": 226,
        "end": 357,
        "callee": {
          "type": "Identifier",
          "start": 226,
          "end": 241,
          "name": "genericFunction",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 242,
            "end": 255,
            "name": "genericObject",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 257,
            "end": 356,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 258,
                "end": 268,
                "properties": [
                  {
                    "type": "Property",
                    "start": 259,
                    "end": 267,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 259,
                      "end": 267,
                      "name": "greeting",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 259,
                      "end": 267,
                      "name": "greeting",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 273,
              "end": 356,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 279,
                  "end": 316,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 283,
                      "end": 315,
                      "id": {
                        "type": "Identifier",
                        "start": 283,
                        "end": 284,
                        "name": "s",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 287,
                        "end": 315,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 287,
                          "end": 313,
                          "object": {
                            "type": "Identifier",
                            "start": 287,
                            "end": 295,
                            "name": "greeting",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 296,
                            "end": 313,
                            "name": "toLocaleLowerCase",
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
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
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
