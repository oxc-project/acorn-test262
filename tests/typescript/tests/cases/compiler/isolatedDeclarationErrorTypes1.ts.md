__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 261,
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
            "decorators": [],
            "name": "Unresolved",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 66,
            "end": 76,
            "decorators": [],
            "name": "Unresolved",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 105,
            "end": 143,
            "id": {
              "type": "Identifier",
              "start": 105,
              "end": 109,
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 112,
              "end": 143,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 113,
                  "end": 130,
                  "decorators": [],
                  "name": "type",
                  "optional": true,
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
                        "decorators": [],
                        "name": "Unresolved",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 131,
                "end": 137,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 133,
                  "end": 137
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 141,
                "end": 143,
                "body": []
              },
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 145,
      "end": 209,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 152,
        "end": 209,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 158,
            "end": 208,
            "id": {
              "type": "Identifier",
              "start": 158,
              "end": 162,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 165,
              "end": 208,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 166,
                  "end": 195,
                  "decorators": [],
                  "name": "type",
                  "optional": true,
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
                            "decorators": [],
                            "name": "Unresolved",
                            "optional": false,
                            "typeAnnotation": null
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
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 196,
                "end": 202,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 198,
                  "end": 202
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 206,
                "end": 208,
                "body": []
              },
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 210,
      "end": 261,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 217,
        "end": 261,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 223,
            "end": 260,
            "id": {
              "type": "Identifier",
              "start": 223,
              "end": 227,
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 230,
              "end": 260,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 231,
                  "end": 247,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
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
                        "decorators": [],
                        "name": "Unresolved",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 248,
                "end": 254,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 250,
                  "end": 254
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 258,
                "end": 260,
                "body": []
              },
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
