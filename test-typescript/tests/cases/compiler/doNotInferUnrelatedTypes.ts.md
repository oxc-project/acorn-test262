__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 10,
  "end": 174,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 10,
      "end": 64,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 34,
        "name": "dearray",
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
          "start": 38,
          "end": 59,
          "name": "ara",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 41,
            "end": 59,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 43,
              "end": 59,
              "typeName": {
                "type": "Identifier",
                "start": 43,
                "end": 56,
                "name": "ReadonlyArray",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 56,
                "end": 59,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 57,
                    "end": 58,
                    "typeName": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 58,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
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
        "start": 34,
        "end": 37,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 35,
            "end": 36,
            "name": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 60,
        "end": 63,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 62,
          "end": 63,
          "typeName": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 65,
      "end": 98,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 81,
        "name": "LiteralType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
              "value": "foo",
              "raw": "\"foo\""
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
              "value": "bar",
              "raw": "\"bar\""
            }
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 134,
            "name": "alt",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 134,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 116,
                "end": 134,
                "typeName": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 121,
                  "name": "Array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 121,
                  "end": 134,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 122,
                      "end": 133,
                      "typeName": {
                        "type": "Identifier",
                        "start": 122,
                        "end": 133,
                        "name": "LiteralType",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 141,
            "end": 157,
            "name": "foo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 144,
              "end": 157,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 146,
                "end": 157,
                "typeName": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 157,
                  "name": "LiteralType",
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
            "type": "CallExpression",
            "start": 160,
            "end": 172,
            "callee": {
              "type": "Identifier",
              "start": 160,
              "end": 167,
              "name": "dearray",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 168,
                "end": 171,
                "name": "alt",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
