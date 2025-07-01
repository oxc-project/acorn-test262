__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Unresolved",
            "optional": false,
            "typeAnnotation": null,
            "start": 66,
            "end": 76
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Unresolved",
            "optional": false,
            "typeAnnotation": null,
            "start": 66,
            "end": 76
          },
          "importKind": "value",
          "start": 66,
          "end": 76
        }
      ],
      "source": {
        "type": "Literal",
        "value": "foo",
        "raw": "\"foo\"",
        "start": 84,
        "end": 89
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 57,
      "end": 90
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 109
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Unresolved",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 120,
                        "end": 130
                      },
                      "typeArguments": null,
                      "start": 120,
                      "end": 130
                    },
                    "start": 118,
                    "end": 130
                  },
                  "start": 113,
                  "end": 130
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 133,
                  "end": 137
                },
                "start": 131,
                "end": 137
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 141,
                "end": 143
              },
              "id": null,
              "generator": false,
              "start": 112,
              "end": 143
            },
            "definite": false,
            "start": 105,
            "end": 143
          }
        ],
        "declare": false,
        "start": 99,
        "end": 144
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 92,
      "end": 144
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 158,
              "end": 162
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Unresolved",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 173,
                            "end": 183
                          },
                          "typeArguments": null,
                          "start": 173,
                          "end": 183
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 186,
                          "end": 195
                        }
                      ],
                      "start": 173,
                      "end": 195
                    },
                    "start": 171,
                    "end": 195
                  },
                  "start": 166,
                  "end": 195
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 198,
                  "end": 202
                },
                "start": 196,
                "end": 202
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 206,
                "end": 208
              },
              "id": null,
              "generator": false,
              "start": 165,
              "end": 208
            },
            "definite": false,
            "start": 158,
            "end": 208
          }
        ],
        "declare": false,
        "start": 152,
        "end": 209
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 145,
      "end": 209
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 227
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Unresolved",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 237,
                        "end": 247
                      },
                      "typeArguments": null,
                      "start": 237,
                      "end": 247
                    },
                    "start": 235,
                    "end": 247
                  },
                  "start": 231,
                  "end": 247
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 250,
                  "end": 254
                },
                "start": 248,
                "end": 254
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 258,
                "end": 260
              },
              "id": null,
              "generator": false,
              "start": 230,
              "end": 260
            },
            "definite": false,
            "start": 223,
            "end": 260
          }
        ],
        "declare": false,
        "start": 217,
        "end": 261
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 210,
      "end": 261
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 261
}
```
