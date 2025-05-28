__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 224,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 41,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 40,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 40,
                  "decorators": [],
                  "name": "MethodDecorator",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 43,
      "end": 224,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 51,
        "end": 224,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 57,
            "end": 86,
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
            "value": {
              "type": "FunctionExpression",
              "start": 81,
              "end": 86,
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 84,
                "end": 86,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 91,
            "end": 148,
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
            "value": {
              "type": "FunctionExpression",
              "start": 115,
              "end": 148,
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 117,
                "end": 134,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 119,
                  "end": 134,
                  "typeName": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 126,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  }
                }
              },
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
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 153,
            "end": 222,
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
            "value": {
              "type": "FunctionExpression",
              "start": 171,
              "end": 222,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 175,
                        "end": 182,
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 193,
                    "end": 200,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  }
                }
              },
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
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
