__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 157,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 65,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "map",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 27,
          "end": 31,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 28,
            "end": 31,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 30,
              "end": 31,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 30,
                "end": 31,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 33,
          "end": 60,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 34,
            "end": 60,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 36,
              "end": 60,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 60,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 42,
                  "end": 60,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 44,
                      "end": 58,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 44,
                        "end": 45,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 45,
                        "end": 58,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 47,
                          "end": 58,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 48,
                              "end": 52,
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 49,
                                "end": 52,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 51,
                                  "end": 52,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 51,
                                    "end": 52,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 54,
                            "end": 58,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 57,
                              "end": 58,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 57,
                                "end": 58,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          "typeParameters": null
                        }
                      }
                    }
                  ]
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 61,
        "end": 64,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 63,
          "end": 64,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 63,
            "end": 64,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 26,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 22,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 24,
            "end": 25,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 66,
      "end": 104,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 91,
        "decorators": [],
        "name": "identity",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 95,
          "end": 99,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 96,
            "end": 99,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 98,
              "end": 99,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 98,
                "end": 99,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 100,
        "end": 103,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 102,
          "end": 103,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 102,
            "end": 103,
            "decorators": [],
            "name": "V",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 91,
        "end": 94,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 92,
            "end": 93,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 106,
      "end": 157,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 110,
          "end": 156,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 111,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 114,
            "end": 156,
            "arguments": [
              {
                "type": "Literal",
                "start": 118,
                "end": 120,
                "raw": "\"\"",
                "value": "",
                "regex": null,
                "bigint": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 122,
                "end": 155,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 128,
                  "end": 155,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 130,
                      "end": 153,
                      "argument": {
                        "type": "ObjectExpression",
                        "start": 137,
                        "end": 152,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 139,
                            "end": 150,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 139,
                              "end": 140,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Identifier",
                              "start": 142,
                              "end": 150,
                              "decorators": [],
                              "name": "identity",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 114,
              "end": 117,
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
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
