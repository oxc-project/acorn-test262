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
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 40,
            "name": "decorator",
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
                  "name": "MethodDecorator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 43,
      "end": 224,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 50,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 51,
        "end": 224,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 57,
            "end": 86,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 81,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 81,
              "end": 86,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 84,
                "end": 86,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 57,
                "end": 67,
                "expression": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 67,
                  "name": "decorator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 91,
            "end": 148,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 112,
              "end": 115,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 115,
              "end": 148,
              "id": null,
              "expression": false,
              "generator": false,
              "async": true,
              "params": [],
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
              "declare": false,
              "typeParameters": null,
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
                    "name": "Promise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              }
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 91,
                "end": 101,
                "expression": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 101,
                  "name": "decorator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 153,
            "end": 222,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 171,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 171,
              "end": 222,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 172,
                  "end": 190,
                  "name": "n",
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
                        "name": "Promise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "name": "n",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
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
                    "name": "Promise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              }
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 153,
                "end": 163,
                "expression": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 163,
                  "name": "decorator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
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
