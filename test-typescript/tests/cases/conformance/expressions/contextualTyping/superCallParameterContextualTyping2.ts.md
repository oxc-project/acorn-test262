__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 257,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 76,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 76,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 22,
            "end": 74,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 33,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 33,
              "end": 74,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 66,
                "end": 74,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 34,
                  "end": 64,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 64,
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 45,
                      "end": 64,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 47,
                        "end": 64,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 48,
                            "end": 57,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 53,
                              "end": 57,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 55,
                                "end": 57,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 55,
                                  "end": 57,
                                  "decorators": [],
                                  "name": "T1",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 59,
                          "end": 64,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 62,
                            "end": 64,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 62,
                              "end": 64,
                              "decorators": [],
                              "name": "T2",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 10,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 10,
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 14,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 14,
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 78,
      "end": 257,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 112,
        "end": 257,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 197,
            "end": 255,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 197,
              "end": 208,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 208,
              "end": 255,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 211,
                "end": 255,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 213,
                    "end": 253,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 213,
                      "end": 252,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 219,
                          "end": 251,
                          "async": false,
                          "body": {
                            "type": "CallExpression",
                            "start": 228,
                            "end": 251,
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "start": 235,
                                "end": 250,
                                "arguments": [],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 235,
                                  "end": 240,
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 240,
                                  "end": 248,
                                  "params": [
                                    {
                                      "type": "TSStringKeyword",
                                      "start": 241,
                                      "end": 247
                                    }
                                  ]
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 228,
                              "end": 234,
                              "decorators": [],
                              "name": "String",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "typeArguments": null
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 219,
                              "end": 224,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 213,
                        "end": 218
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 85,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 94,
        "end": 95,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 95,
        "end": 111,
        "params": [
          {
            "type": "TSNumberKeyword",
            "start": 96,
            "end": 102
          },
          {
            "type": "TSStringKeyword",
            "start": 104,
            "end": 110
          }
        ]
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
