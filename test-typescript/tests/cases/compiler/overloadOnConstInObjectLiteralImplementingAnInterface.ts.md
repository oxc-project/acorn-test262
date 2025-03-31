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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 65,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 18,
            "end": 63,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 20,
              "name": "x1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 21,
                "end": 30,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 22,
                  "end": 30,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 24,
                    "end": 30
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 32,
                "end": 61,
                "name": "callback",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 40,
                  "end": 61,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 42,
                    "end": 61,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 43,
                        "end": 50,
                        "name": "x",
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
                              "value": "hi",
                              "raw": "'hi'"
                            }
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 76,
            "name": "i2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 76,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 75,
                "end": 76,
                "typeName": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 76,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 83,
                  "name": "x1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 85,
                  "end": 128,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 86,
                      "end": 95,
                      "name": "a",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 87,
                        "end": 95,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 89,
                          "end": 95
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 97,
                      "end": 120,
                      "name": "cb",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 99,
                        "end": 120,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 101,
                          "end": 120,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 102,
                              "end": 109,
                              "name": "x",
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
                                    "value": "hi",
                                    "raw": "'hi'"
                                  }
                                }
                              },
                              "decorators": [],
                              "optional": false
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
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 125,
                    "end": 128,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
