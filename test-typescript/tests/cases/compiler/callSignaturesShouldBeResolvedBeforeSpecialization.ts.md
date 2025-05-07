__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 266,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 66,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 66,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 22,
            "end": 39,
            "params": [
              {
                "type": "Identifier",
                "start": 23,
                "end": 31,
                "decorators": [],
                "name": "value",
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
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 38,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 34,
                "end": 38
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSPropertySignature",
            "start": 44,
            "end": 64,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 50,
              "decorators": [],
              "name": "field1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 50,
              "end": 63,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 52,
                "end": 63,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 54,
                  "end": 63,
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 55,
                      "end": 62
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 54,
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "typeAnnotation": null
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
        "end": 12,
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 68,
      "end": 266,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 83,
        "end": 266,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 89,
            "end": 110,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 93,
                "end": 109,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 109,
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 97,
                    "end": 109,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 99,
                      "end": 109,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 101,
                        "end": 109,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 102,
                            "end": 108
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 99,
                        "end": 101,
                        "decorators": [],
                        "name": "I1",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 115,
            "end": 157,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 115,
              "end": 156,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 120,
                  "end": 155,
                  "raw": "\"expects boolean instead of string\"",
                  "value": "expects boolean instead of string",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 115,
                "end": 119,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 219,
            "end": 230,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 219,
              "end": 229,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 224,
                  "end": 228,
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 219,
                "end": 223,
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 80,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
