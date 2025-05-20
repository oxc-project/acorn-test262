__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 10,
  "end": 173,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 10,
      "end": 64,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 34,
        "decorators": [],
        "name": "dearray",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 38,
          "end": 59,
          "decorators": [],
          "name": "ara",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 41,
            "end": 59,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 43,
              "end": 59,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 56,
                "end": 59,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 57,
                    "end": 58,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 58,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 43,
                "end": 56,
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 60,
        "end": 63,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 62,
          "end": 63,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 34,
        "end": 37,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 35,
            "end": 36,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
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
      "type": "TSTypeAliasDeclaration",
      "start": 65,
      "end": 98,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 81,
        "decorators": [],
        "name": "LiteralType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 84,
        "end": 97,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 84,
            "end": 89,
            "literal": {
              "type": "Literal",
              "start": 84,
              "end": 89,
              "raw": "\"foo\"",
              "value": "foo"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 92,
            "end": 97,
            "literal": {
              "type": "Literal",
              "start": 92,
              "end": 97,
              "raw": "\"bar\"",
              "value": "bar"
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 99,
      "end": 135,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 134,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 134,
            "decorators": [],
            "name": "alt",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 134,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 116,
                "end": 134,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 121,
                  "end": 134,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 122,
                      "end": 133,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 122,
                        "end": 133,
                        "decorators": [],
                        "name": "LiteralType",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 121,
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 137,
      "end": 173,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 141,
          "end": 172,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 141,
            "end": 157,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 144,
              "end": 157,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 146,
                "end": 157,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 157,
                  "decorators": [],
                  "name": "LiteralType",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 160,
            "end": 172,
            "arguments": [
              {
                "type": "Identifier",
                "start": 168,
                "end": 171,
                "decorators": [],
                "name": "alt",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 160,
              "end": 167,
              "decorators": [],
              "name": "dearray",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
