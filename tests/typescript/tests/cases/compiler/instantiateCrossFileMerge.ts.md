__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 89,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 88,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 88,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 25,
            "end": 86,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 36,
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
              "type": "TSEmptyBodyFunctionExpression",
              "start": 36,
              "end": 86,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 37,
                  "end": 84,
                  "decorators": [],
                  "name": "callback",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 45,
                    "end": 84,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 47,
                      "end": 84,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 48,
                          "end": 75,
                          "decorators": [],
                          "name": "resolve",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 55,
                            "end": 75,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 57,
                              "end": 75,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 58,
                                  "end": 66,
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 63,
                                    "end": 66,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 65,
                                      "end": 66,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 65,
                                        "end": 66,
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 68,
                                "end": 75,
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 71,
                                  "end": 75
                                }
                              },
                              "typeParameters": null
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 77,
                        "end": 84,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 80,
                          "end": 84
                        }
                      },
                      "typeParameters": null
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 15,
        "decorators": [],
        "name": "P",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 52,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 18,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 18,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "P",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 19,
      "end": 52,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 19,
        "end": 51,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 33,
            "end": 50,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 38,
              "end": 50,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 40,
                  "end": 48,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 40,
                    "end": 48,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 42,
                        "end": 47,
                        "raw": "'foo'",
                        "value": "foo"
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 41,
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 33,
                "end": 34,
                "decorators": [],
                "name": "r",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 23,
          "end": 24,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 24,
          "end": 32,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 25,
              "end": 31
            }
          ]
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
