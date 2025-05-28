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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "R",
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
        "start": 19,
        "end": 88,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 25,
            "end": 86,
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
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 36,
              "end": 86,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                      "typeParameters": null,
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
                              "typeParameters": null,
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
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 65,
                                        "end": 66,
                                        "decorators": [],
                                        "name": "R",
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
                                "start": 68,
                                "end": 75,
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 71,
                                  "end": 75
                                }
                              }
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
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
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
      "declare": true
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
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "R",
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 18,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 19,
      "end": 52,
      "expression": {
        "type": "NewExpression",
        "start": 19,
        "end": 51,
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
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 33,
            "end": 50,
            "expression": false,
            "async": false,
            "typeParameters": null,
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
            "body": {
              "type": "BlockStatement",
              "start": 38,
              "end": 50,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 40,
                  "end": 48,
                  "expression": {
                    "type": "CallExpression",
                    "start": 40,
                    "end": 48,
                    "callee": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 41,
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 42,
                        "end": 47,
                        "value": "foo",
                        "raw": "'foo'"
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "id": null,
            "generator": false
          }
        ]
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
