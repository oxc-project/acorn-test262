__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 225,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 40,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 40,
            "decorators": [],
            "name": "decorator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 40,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 25,
                "end": 40,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 40,
                  "decorators": [],
                  "name": "MethodDecorator",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 43,
      "end": 224,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 51,
        "end": 224,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 57,
            "end": 86,
            "accessibility": null,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 57,
                "end": 67,
                "expression": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 67,
                  "decorators": [],
                  "name": "decorator",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 81,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 81,
              "end": 86,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 84,
                "end": 86,
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
          },
          {
            "type": "MethodDefinition",
            "start": 91,
            "end": 148,
            "accessibility": null,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 91,
                "end": 101,
                "expression": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 101,
                  "decorators": [],
                  "name": "decorator",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 112,
              "end": 115,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 115,
              "end": 148,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 135,
                "end": 148,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 137,
                    "end": 146,
                    "argument": {
                      "type": "Literal",
                      "start": 144,
                      "end": 145,
                      "raw": "0",
                      "value": 0
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 117,
                "end": 134,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 119,
                  "end": 134,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 126,
                    "end": 134,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 127,
                        "end": 133
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 126,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 153,
            "end": 222,
            "accessibility": null,
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 153,
                "end": 163,
                "expression": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 163,
                  "decorators": [],
                  "name": "decorator",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 171,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 171,
              "end": 222,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 209,
                "end": 222,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 211,
                    "end": 220,
                    "argument": {
                      "type": "Identifier",
                      "start": 218,
                      "end": 219,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 172,
                  "end": 190,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 173,
                    "end": 190,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 175,
                      "end": 190,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 182,
                        "end": 190,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 183,
                            "end": 189
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 175,
                        "end": 182,
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 191,
                "end": 208,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 193,
                  "end": 208,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 200,
                    "end": 208,
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 201,
                        "end": 207
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 193,
                    "end": 200,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
        "start": 49,
        "end": 50,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
