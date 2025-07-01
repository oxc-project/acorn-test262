__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "dearray",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 34
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 36
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 35,
            "end": 36
          }
        ],
        "start": 34,
        "end": 37
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ara",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 56
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 57,
                      "end": 58
                    },
                    "typeArguments": null,
                    "start": 57,
                    "end": 58
                  }
                ],
                "start": 56,
                "end": 59
              },
              "start": 43,
              "end": 59
            },
            "start": 41,
            "end": 59
          },
          "start": 38,
          "end": 59
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 63
          },
          "typeArguments": null,
          "start": 62,
          "end": 63
        },
        "start": 60,
        "end": 63
      },
      "body": null,
      "expression": false,
      "start": 10,
      "end": 64
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LiteralType",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 81
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 84,
              "end": 89
            },
            "start": 84,
            "end": 89
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 92,
              "end": 97
            },
            "start": 92,
            "end": 97
          }
        ],
        "start": 84,
        "end": 97
      },
      "declare": false,
      "start": 65,
      "end": 98
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "alt",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 116,
                  "end": 121
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "LiteralType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 122,
                        "end": 133
                      },
                      "typeArguments": null,
                      "start": 122,
                      "end": 133
                    }
                  ],
                  "start": 121,
                  "end": 134
                },
                "start": 116,
                "end": 134
              },
              "start": 114,
              "end": 134
            },
            "start": 111,
            "end": 134
          },
          "init": null,
          "definite": false,
          "start": 111,
          "end": 134
        }
      ],
      "declare": true,
      "start": 99,
      "end": 135
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "LiteralType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 146,
                  "end": 157
                },
                "typeArguments": null,
                "start": 146,
                "end": 157
              },
              "start": 144,
              "end": 157
            },
            "start": 141,
            "end": 157
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "dearray",
              "optional": false,
              "typeAnnotation": null,
              "start": 160,
              "end": 167
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "alt",
                "optional": false,
                "typeAnnotation": null,
                "start": 168,
                "end": 171
              }
            ],
            "optional": false,
            "start": 160,
            "end": 172
          },
          "definite": false,
          "start": 141,
          "end": 172
        }
      ],
      "declare": false,
      "start": 137,
      "end": 173
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 10,
  "end": 173
}
```
