superCallParameterContextualTyping2.ts
```json
{
  "type": "Program",
  "start": 2,
  "end": 259,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 2,
      "end": 78,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 18,
        "end": 78,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 24,
            "end": 76,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 35,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 35,
              "end": 76,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 68,
                "end": 76,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 36,
                  "end": 66,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 66,
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 47,
                      "end": 66,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 49,
                        "end": 66,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 50,
                            "end": 59,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 55,
                              "end": 59,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 57,
                                "end": 59,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 57,
                                  "end": 59,
                                  "decorators": [],
                                  "name": "T1",
                                  "optional": false
                                }
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 61,
                          "end": 66,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 64,
                            "end": 66,
                            "typeName": {
                              "type": "Identifier",
                              "start": 64,
                              "end": 66,
                              "decorators": [],
                              "name": "T2",
                              "optional": false
                            }
                          }
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 8,
        "end": 9,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 9,
        "end": 17,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 12,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 12,
              "decorators": [],
              "name": "T1",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 16,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 16,
              "decorators": [],
              "name": "T2",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 80,
      "end": 259,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 114,
        "end": 259,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 199,
            "end": 257,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 199,
              "end": 210,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 210,
              "end": 257,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 213,
                "end": 257,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 215,
                    "end": 255,
                    "expression": {
                      "type": "CallExpression",
                      "start": 215,
                      "end": 254,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 221,
                          "end": 253,
                          "async": false,
                          "body": {
                            "type": "CallExpression",
                            "start": 230,
                            "end": 253,
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "start": 237,
                                "end": 252,
                                "arguments": [],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 237,
                                  "end": 242,
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false
                                },
                                "optional": false,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 242,
                                  "end": 250,
                                  "params": [
                                    {
                                      "type": "TSStringKeyword",
                                      "start": 243,
                                      "end": 249
                                    }
                                  ]
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 230,
                              "end": 236,
                              "decorators": [],
                              "name": "String",
                              "optional": false
                            },
                            "optional": false
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 221,
                              "end": 226,
                              "decorators": [],
                              "name": "value",
                              "optional": false
                            }
                          ]
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 215,
                        "end": 220
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 87,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 96,
        "end": 97,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 97,
        "end": 113,
        "params": [
          {
            "type": "TSNumberKeyword",
            "start": 98,
            "end": 104
          },
          {
            "type": "TSStringKeyword",
            "start": 106,
            "end": 112
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
