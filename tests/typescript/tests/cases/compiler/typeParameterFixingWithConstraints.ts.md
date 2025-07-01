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
        "name": "IBar",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "barId",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 29,
                    "end": 35
                  },
                  "start": 27,
                  "end": 35
                },
                "start": 22,
                "end": 35
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 38,
                "end": 41
              },
              "start": 36,
              "end": 41
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 21,
            "end": 42
          }
        ],
        "start": 15,
        "end": 44
      },
      "declare": false,
      "start": 0,
      "end": 44
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 60
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 70
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TBar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 71,
                    "end": 75
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IBar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 84,
                      "end": 88
                    },
                    "typeArguments": null,
                    "start": 84,
                    "end": 88
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 71,
                  "end": 88
                }
              ],
              "start": 70,
              "end": 89
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TBar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 95,
                      "end": 99
                    },
                    "typeArguments": null,
                    "start": 95,
                    "end": 99
                  },
                  "start": 93,
                  "end": 99
                },
                "start": 90,
                "end": 99
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "bar1",
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
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TBar",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 113,
                              "end": 117
                            },
                            "typeArguments": null,
                            "start": 113,
                            "end": 117
                          },
                          "start": 111,
                          "end": 117
                        },
                        "start": 108,
                        "end": 117
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TBar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 122,
                          "end": 126
                        },
                        "typeArguments": null,
                        "start": 122,
                        "end": 126
                      },
                      "start": 119,
                      "end": 126
                    },
                    "start": 107,
                    "end": 126
                  },
                  "start": 105,
                  "end": 126
                },
                "start": 101,
                "end": 126
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "bar2",
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
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TBar",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 140,
                              "end": 144
                            },
                            "typeArguments": null,
                            "start": 140,
                            "end": 144
                          },
                          "start": 138,
                          "end": 144
                        },
                        "start": 135,
                        "end": 144
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TBar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 149,
                          "end": 153
                        },
                        "typeArguments": null,
                        "start": 149,
                        "end": 153
                      },
                      "start": 146,
                      "end": 153
                    },
                    "start": 134,
                    "end": 153
                  },
                  "start": 132,
                  "end": 153
                },
                "start": 128,
                "end": 153
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TBar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 156,
                  "end": 160
                },
                "typeArguments": null,
                "start": 156,
                "end": 160
              },
              "start": 154,
              "end": 160
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 67,
            "end": 161
          }
        ],
        "start": 61,
        "end": 163
      },
      "declare": false,
      "start": 46,
      "end": 163
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 174,
                  "end": 178
                },
                "typeArguments": null,
                "start": 174,
                "end": 178
              },
              "start": 172,
              "end": 178
            },
            "start": 169,
            "end": 178
          },
          "init": null,
          "definite": false,
          "start": 169,
          "end": 178
        }
      ],
      "declare": false,
      "start": 165,
      "end": 179
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 183
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 184,
            "end": 187
          },
          "optional": false,
          "computed": false,
          "start": 180,
          "end": 187
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
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 190,
                  "end": 193
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 195,
                  "end": 199
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 190,
                "end": 199
              }
            ],
            "start": 188,
            "end": 201
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 203,
                "end": 206
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 210,
              "end": 214
            },
            "id": null,
            "generator": false,
            "start": 203,
            "end": 214
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 216,
                "end": 219
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 223,
              "end": 227
            },
            "id": null,
            "generator": false,
            "start": 216,
            "end": 227
          }
        ],
        "optional": false,
        "start": 180,
        "end": 228
      },
      "directive": null,
      "start": 180,
      "end": 229
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 229
}
```
