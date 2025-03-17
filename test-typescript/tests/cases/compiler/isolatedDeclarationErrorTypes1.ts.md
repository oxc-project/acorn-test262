__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 262,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 57,
      "end": 90,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 66,
          "end": 76,
          "imported": {
            "type": "Identifier",
            "start": 66,
            "end": 76,
            "name": "Unresolved",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 66,
            "end": 76,
            "name": "Unresolved",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 84,
        "end": 89,
        "value": "foo",
        "raw": "\"foo\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 92,
      "end": 144,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 99,
        "end": 144,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 105,
            "end": 143,
            "id": {
              "type": "Identifier",
              "start": 105,
              "end": 109,
              "name": "foo1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 112,
              "end": 143,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 113,
                  "end": 130,
                  "name": "type",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 118,
                    "end": 130,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 120,
                      "end": 130,
                      "typeName": {
                        "type": "Identifier",
                        "start": 120,
                        "end": 130,
                        "name": "Unresolved",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 141,
                "end": 143,
                "body": []
              },
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 131,
                "end": 137,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 133,
                  "end": 137
                }
              }
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 145,
      "end": 209,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 152,
        "end": 209,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 158,
            "end": 208,
            "id": {
              "type": "Identifier",
              "start": 158,
              "end": 162,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 165,
              "end": 208,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 166,
                  "end": 195,
                  "name": "type",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 171,
                    "end": 195,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 173,
                      "end": 195,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 173,
                          "end": 183,
                          "typeName": {
                            "type": "Identifier",
                            "start": 173,
                            "end": 183,
                            "name": "Unresolved",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 186,
                          "end": 195
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 206,
                "end": 208,
                "body": []
              },
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 196,
                "end": 202,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 198,
                  "end": 202
                }
              }
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 210,
      "end": 261,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 217,
        "end": 261,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 223,
            "end": 260,
            "id": {
              "type": "Identifier",
              "start": 223,
              "end": 227,
              "name": "foo3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 230,
              "end": 260,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 231,
                  "end": 247,
                  "name": "type",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 235,
                    "end": 247,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 237,
                      "end": 247,
                      "typeName": {
                        "type": "Identifier",
                        "start": 237,
                        "end": 247,
                        "name": "Unresolved",
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
              "body": {
                "type": "BlockStatement",
                "start": 258,
                "end": 260,
                "body": []
              },
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 248,
                "end": 254,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 250,
                  "end": 254
                }
              }
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
