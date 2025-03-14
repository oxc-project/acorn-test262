__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 226,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 81,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 81,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 21,
            "end": 31,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 31,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 24,
                "end": 31,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 25,
                  "end": 31,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 26,
                      "end": 30,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 27,
                        "end": 30,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 28,
                            "end": 29,
                            "typeName": {
                              "type": "Identifier",
                              "start": 28,
                              "end": 29,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 26,
                        "end": 27,
                        "decorators": [],
                        "name": "G",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 25,
                  "decorators": [],
                  "name": "G",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 75,
            "end": 79,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 79,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 78,
                "end": 79,
                "typeName": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 79,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
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
        "name": "G",
        "optional": false
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
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 83,
      "end": 224,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 113,
        "end": 224,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 119,
            "end": 124,
            "expression": {
              "type": "CallExpression",
              "start": 119,
              "end": 124,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 122,
                  "end": 123,
                  "decorators": [],
                  "name": "g",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 119,
                "end": 121,
                "decorators": [],
                "name": "ff",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 94,
        "decorators": [],
        "name": "ff",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 98,
          "end": 105,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 99,
            "end": 105,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 101,
              "end": 105,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 102,
                "end": 105,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 103,
                    "end": 104,
                    "typeName": {
                      "type": "Identifier",
                      "start": 103,
                      "end": 104,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 101,
                "end": 102,
                "decorators": [],
                "name": "G",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 106,
        "end": 112,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 108,
          "end": 112
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 94,
        "end": 97,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 95,
            "end": 96,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 95,
              "end": 96,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
