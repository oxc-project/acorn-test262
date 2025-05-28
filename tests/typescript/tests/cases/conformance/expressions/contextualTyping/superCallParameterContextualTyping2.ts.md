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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 10,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 10,
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 14,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 14,
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 76,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 22,
            "end": 74,
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
            "value": {
              "type": "FunctionExpression",
              "start": 33,
              "end": 74,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                        "typeParameters": null,
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
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 55,
                                  "end": 57,
                                  "decorators": [],
                                  "name": "T1",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
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
                            "typeName": {
                              "type": "Identifier",
                              "start": 62,
                              "end": 64,
                              "decorators": [],
                              "name": "T2",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 66,
                "end": 74,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
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
    },
    {
      "type": "ClassDeclaration",
      "start": 78,
      "end": 257,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 112,
        "end": 257,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 197,
            "end": 255,
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
            "value": {
              "type": "FunctionExpression",
              "start": 208,
              "end": 255,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 211,
                "end": 255,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 213,
                    "end": 253,
                    "expression": {
                      "type": "CallExpression",
                      "start": 213,
                      "end": 252,
                      "callee": {
                        "type": "Super",
                        "start": 213,
                        "end": 218
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 219,
                          "end": 251,
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
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
                          "body": {
                            "type": "CallExpression",
                            "start": 228,
                            "end": 251,
                            "callee": {
                              "type": "Identifier",
                              "start": 228,
                              "end": 234,
                              "decorators": [],
                              "name": "String",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "start": 235,
                                "end": 250,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 235,
                                  "end": 240,
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
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
                                },
                                "arguments": [],
                                "optional": false
                              }
                            ],
                            "optional": false
                          },
                          "id": null,
                          "generator": false
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
