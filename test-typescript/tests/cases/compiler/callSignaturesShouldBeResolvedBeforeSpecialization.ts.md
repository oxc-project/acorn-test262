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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "name": "I1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
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
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 66,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 22,
            "end": 39,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 23,
                "end": 31,
                "name": "value",
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
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 44,
            "end": 64,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 50,
              "name": "field1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 50,
              "end": 63,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 52,
                "end": 63,
                "typeName": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 54,
                  "name": "I1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 68,
      "end": 266,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 80,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 109,
                  "name": "test",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 97,
                    "end": 109,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 99,
                      "end": 109,
                      "typeName": {
                        "type": "Identifier",
                        "start": 99,
                        "end": 101,
                        "name": "I1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 115,
            "end": 157,
            "expression": {
              "type": "CallExpression",
              "start": 115,
              "end": 156,
              "callee": {
                "type": "Identifier",
                "start": 115,
                "end": 119,
                "name": "test",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 120,
                  "end": 155,
                  "value": "expects boolean instead of string",
                  "raw": "\"expects boolean instead of string\""
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 219,
            "end": 230,
            "expression": {
              "type": "CallExpression",
              "start": 219,
              "end": 229,
              "callee": {
                "type": "Identifier",
                "start": 219,
                "end": 223,
                "name": "test",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 224,
                  "end": 228,
                  "value": true,
                  "raw": "true"
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
