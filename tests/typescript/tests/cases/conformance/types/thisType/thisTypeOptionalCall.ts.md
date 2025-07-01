__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "maybeBind",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 18
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
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 23
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 32,
                "end": 35
              },
              "start": 32,
              "end": 37
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 22,
            "end": 37
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 40
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 39,
            "end": 40
          }
        ],
        "start": 18,
        "end": 41
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 47,
                "end": 48
              },
              "typeArguments": null,
              "start": 47,
              "end": 48
            },
            "start": 45,
            "end": 48
          },
          "start": 42,
          "end": 48
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "this",
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
                            "start": 62,
                            "end": 63
                          },
                          "typeArguments": null,
                          "start": 62,
                          "end": 63
                        },
                        "start": 60,
                        "end": 63
                      },
                      "start": 56,
                      "end": 63
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 68,
                        "end": 72
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 74,
                            "end": 75
                          },
                          "typeArguments": null,
                          "start": 74,
                          "end": 75
                        },
                        "start": 72,
                        "end": 75
                      },
                      "value": null,
                      "start": 65,
                      "end": 75
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 80,
                        "end": 81
                      },
                      "typeArguments": null,
                      "start": 80,
                      "end": 81
                    },
                    "start": 77,
                    "end": 81
                  },
                  "start": 55,
                  "end": 81
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 85,
                  "end": 94
                }
              ],
              "start": 54,
              "end": 94
            },
            "start": 52,
            "end": 94
          },
          "start": 50,
          "end": 94
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSFunctionType",
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
                    "start": 102,
                    "end": 106
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 108,
                        "end": 109
                      },
                      "typeArguments": null,
                      "start": 108,
                      "end": 109
                    },
                    "start": 106,
                    "end": 109
                  },
                  "value": null,
                  "start": 99,
                  "end": 109
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 114,
                    "end": 115
                  },
                  "typeArguments": null,
                  "start": 114,
                  "end": 115
                },
                "start": 111,
                "end": 115
              },
              "start": 98,
              "end": 115
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 119,
              "end": 128
            }
          ],
          "start": 97,
          "end": 128
        },
        "start": 95,
        "end": 128
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ChainExpression",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 142,
                    "end": 144
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 146,
                    "end": 150
                  },
                  "optional": true,
                  "computed": false,
                  "start": 142,
                  "end": 150
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 151,
                    "end": 154
                  }
                ],
                "optional": false,
                "start": 142,
                "end": 155
              },
              "start": 142,
              "end": 155
            },
            "start": 135,
            "end": 156
          }
        ],
        "start": 129,
        "end": 158
      },
      "expression": false,
      "start": 0,
      "end": 158
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 158
}
```
