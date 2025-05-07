__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 108,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 54,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 41,
        "end": 54,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 43,
            "end": 52,
            "argument": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 29,
          "end": 33,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 30,
            "end": 33,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 32,
              "end": 33,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
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
          "start": 35,
          "end": 39,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 36,
            "end": 39,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 38,
              "end": 39,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 38,
                "end": 39,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 28,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 24,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 23,
              "end": 24,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 23,
                "end": 24,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            },
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
          },
          {
            "type": "TSTypeParameter",
            "start": 26,
            "end": 27,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
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
      "type": "TSModuleDeclaration",
      "start": 55,
      "end": 108,
      "body": {
        "type": "TSModuleBlock",
        "start": 66,
        "end": 108,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 72,
            "end": 88,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 79,
              "end": 88,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 83,
                  "end": 87,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 87,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 84,
                      "end": 87,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 86,
                        "end": 87,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 86,
                          "end": 87,
                          "decorators": [],
                          "name": "T",
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
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "VariableDeclaration",
            "start": 93,
            "end": 106,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 97,
                "end": 105,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 98,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "TSTypeAssertion",
                  "start": 101,
                  "end": 105,
                  "expression": {
                    "type": "Literal",
                    "start": 104,
                    "end": 105,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  },
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 65,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
