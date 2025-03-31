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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "name": "map",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 27,
          "end": 31,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 28,
            "end": 31,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 30,
              "end": 31,
              "typeName": {
                "type": "Identifier",
                "start": 30,
                "end": 31,
                "name": "T",
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
        {
          "type": "Identifier",
          "start": 33,
          "end": 60,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 34,
            "end": 60,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 36,
              "end": 60,
              "typeParameters": null,
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
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 44,
                        "end": 45,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 45,
                        "end": 58,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 47,
                          "end": 58,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 48,
                              "end": 52,
                              "name": "s",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 49,
                                "end": 52,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 51,
                                  "end": 52,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 51,
                                    "end": 52,
                                    "name": "T",
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
                            "start": 54,
                            "end": 58,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 57,
                              "end": 58,
                              "typeName": {
                                "type": "Identifier",
                                "start": 57,
                                "end": 58,
                                "name": "U",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 26,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 22,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "name": "T",
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
            "start": 24,
            "end": 25,
            "name": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "name": "U",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 61,
        "end": 64,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 63,
          "end": 64,
          "typeName": {
            "type": "Identifier",
            "start": 63,
            "end": 64,
            "name": "U",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 66,
      "end": 104,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 91,
        "name": "identity",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 95,
          "end": 99,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 96,
            "end": 99,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 98,
              "end": 99,
              "typeName": {
                "type": "Identifier",
                "start": 98,
                "end": 99,
                "name": "V",
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 91,
        "end": 94,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 92,
            "end": 93,
            "name": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "name": "V",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 100,
        "end": 103,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 102,
          "end": 103,
          "typeName": {
            "type": "Identifier",
            "start": 102,
            "end": 103,
            "name": "V",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
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
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 111,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 114,
            "end": 156,
            "callee": {
              "type": "Identifier",
              "start": 114,
              "end": 117,
              "name": "map",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 118,
                "end": 120,
                "value": "",
                "raw": "\"\""
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 122,
                "end": 155,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 139,
                              "end": 140,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 142,
                              "end": 150,
                              "name": "identity",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
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
