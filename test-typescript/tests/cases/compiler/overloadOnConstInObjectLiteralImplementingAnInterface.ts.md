__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 140,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 65,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 65,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 18,
            "end": 63,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 20,
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 21,
                "end": 30,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 22,
                  "end": 30,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 24,
                    "end": 30
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 32,
                "end": 61,
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 40,
                  "end": 61,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 42,
                    "end": 61,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 43,
                        "end": 50,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 44,
                          "end": 50,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 46,
                            "end": 50,
                            "literal": {
                              "type": "Literal",
                              "start": 46,
                              "end": 50,
                              "raw": "'hi'",
                              "value": "hi"
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 52,
                      "end": 61,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 55,
                        "end": 61
                      }
                    },
                    "typeParameters": null
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": null,
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 67,
      "end": 131,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 130,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 76,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 76,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 75,
                "end": 76,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 76,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 79,
            "end": 130,
            "properties": [
              {
                "type": "Property",
                "start": 81,
                "end": 128,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 83,
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 85,
                  "end": 128,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 125,
                    "end": 128,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 86,
                      "end": 95,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 87,
                        "end": 95,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 89,
                          "end": 95
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 97,
                      "end": 120,
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 99,
                        "end": 120,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 101,
                          "end": 120,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 102,
                              "end": 109,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 103,
                                "end": 109,
                                "typeAnnotation": {
                                  "type": "TSLiteralType",
                                  "start": 105,
                                  "end": 109,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 105,
                                    "end": 109,
                                    "raw": "'hi'",
                                    "value": "hi"
                                  }
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 111,
                            "end": 120,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 114,
                              "end": 120
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
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
