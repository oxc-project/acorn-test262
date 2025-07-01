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
        "name": "TestGeneric",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 43
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TG",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 46
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 44,
            "end": 46
          }
        ],
        "start": 43,
        "end": 47
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 53
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 55,
                "end": 61
              },
              "start": 53,
              "end": 61
            },
            "accessibility": null,
            "static": false,
            "start": 52,
            "end": 61
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 65
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TG",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 69
                },
                "typeArguments": null,
                "start": 67,
                "end": 69
              },
              "start": 65,
              "end": 69
            },
            "accessibility": null,
            "static": false,
            "start": 64,
            "end": 69
          }
        ],
        "start": 48,
        "end": 71
      },
      "declare": false,
      "start": 22,
      "end": 71
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
            "name": "removeF",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 86
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TX",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 90,
                    "end": 92
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 90,
                  "end": 92
                }
              ],
              "start": 89,
              "end": 93
            },
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
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 96,
                      "end": 97
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 96,
                      "end": 97
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 96,
                    "end": 97
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rest",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 102,
                      "end": 106
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 99,
                    "end": 106
                  }
                ],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TestGeneric",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 110,
                      "end": 121
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TX",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 122,
                            "end": 124
                          },
                          "typeArguments": null,
                          "start": 122,
                          "end": 124
                        }
                      ],
                      "start": 121,
                      "end": 125
                    },
                    "start": 110,
                    "end": 125
                  },
                  "start": 108,
                  "end": 125
                },
                "start": 94,
                "end": 125
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 141,
                    "end": 145
                  },
                  "start": 134,
                  "end": 145
                }
              ],
              "start": 130,
              "end": 147
            },
            "id": null,
            "generator": false,
            "start": 89,
            "end": 147
          },
          "definite": false,
          "start": 79,
          "end": 147
        }
      ],
      "declare": false,
      "start": 73,
      "end": 147
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
            "name": "result",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 163,
                "end": 169
              },
              "start": 161,
              "end": 169
            },
            "start": 155,
            "end": 169
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "removeF",
                "optional": false,
                "typeAnnotation": null,
                "start": 172,
                "end": 179
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 180,
                    "end": 186
                  }
                ],
                "start": 179,
                "end": 187
              },
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
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 190,
                        "end": 191
                      },
                      "value": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 193,
                        "end": 195
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 190,
                      "end": 195
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 197,
                        "end": 198
                      },
                      "value": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 200,
                        "end": 201
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 197,
                      "end": 201
                    }
                  ],
                  "start": 188,
                  "end": 203
                }
              ],
              "optional": false,
              "start": 172,
              "end": 204
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 206
            },
            "optional": false,
            "computed": false,
            "start": 172,
            "end": 206
          },
          "definite": false,
          "start": 155,
          "end": 206
        }
      ],
      "declare": false,
      "start": 149,
      "end": 206
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 206
}
```
