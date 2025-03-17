__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 2,
  "end": 282,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 2,
      "end": 78,
      "id": {
        "type": "Identifier",
        "start": 8,
        "end": 9,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 18,
        "end": 78,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 24,
            "end": 76,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 35,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 35,
              "end": 76,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "map",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 47,
                      "end": 66,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 49,
                        "end": 66,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 50,
                            "end": 59,
                            "name": "value",
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
                                  "name": "T1",
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
                              "name": "T2",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 68,
                "end": 76,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 9,
        "end": 17,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 12,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 12,
              "name": "T1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 16,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 16,
              "name": "T2",
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
      "type": "ClassDeclaration",
      "start": 80,
      "end": 281,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 87,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 96,
        "end": 97,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 114,
        "end": 281,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 215,
            "end": 279,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 215,
              "end": 226,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 226,
              "end": 279,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 229,
                "end": 279,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 231,
                    "end": 277,
                    "expression": {
                      "type": "CallExpression",
                      "start": 231,
                      "end": 276,
                      "callee": {
                        "type": "Super",
                        "start": 231,
                        "end": 236
                      },
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 237,
                          "end": 275,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 237,
                              "end": 242,
                              "name": "value",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "CallExpression",
                            "start": 246,
                            "end": 275,
                            "callee": {
                              "type": "Identifier",
                              "start": 246,
                              "end": 252,
                              "name": "String",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "start": 253,
                                "end": 274,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 253,
                                  "end": 272,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 253,
                                    "end": 258,
                                    "name": "value",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 259,
                                    "end": 272,
                                    "name": "toExponential",
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
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
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
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
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
  "sourceType": "script",
  "hashbang": null
}
```
