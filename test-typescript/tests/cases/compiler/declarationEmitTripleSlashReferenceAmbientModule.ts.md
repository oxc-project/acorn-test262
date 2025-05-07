__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 80,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 79,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 79,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 25,
            "end": 44,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 32,
              "end": 44,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 42,
                "end": 44,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 38,
                "end": 41,
                "decorators": [],
                "name": "Url",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 47,
            "end": 76,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 54,
              "end": 76,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 63,
                "end": 68,
                "decorators": [],
                "name": "parse",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 70,
                "end": 75,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 72,
                  "end": 75,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 72,
                    "end": 75,
                    "decorators": [],
                    "name": "Url",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "raw": "\"url\"",
        "value": "url",
        "regex": null,
        "bigint": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 29,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 28,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 27,
        "raw": "\"url\"",
        "value": "url",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 9,
          "end": 14,
          "exported": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "parse",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "parse",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 79,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 28,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 27,
        "raw": "\"url\"",
        "value": "url",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 14,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "parse",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "parse",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 29,
      "end": 77,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 36,
        "end": 77,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 42,
            "end": 76,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 66,
              "decorators": [],
              "name": "thing",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 47,
                "end": 66,
                "typeAnnotation": {
                  "type": "TSImportType",
                  "start": 49,
                  "end": 66,
                  "argument": {
                    "type": "TSLiteralType",
                    "start": 56,
                    "end": 61,
                    "literal": {
                      "type": "Literal",
                      "start": 56,
                      "end": 61,
                      "raw": "\"url\"",
                      "value": "url",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  "options": null,
                  "qualifier": {
                    "type": "Identifier",
                    "start": 63,
                    "end": 66,
                    "decorators": [],
                    "name": "Url",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "start": 69,
              "end": 76,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 69,
                "end": 74,
                "decorators": [],
                "name": "parse",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 58,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 28,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 27,
        "raw": "\"url\"",
        "value": "url",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 14,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "parse",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "parse",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 29,
      "end": 58,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 36,
        "end": 58,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 42,
            "end": 57,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 47,
              "decorators": [],
              "name": "thing",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 50,
              "end": 57,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 50,
                "end": 55,
                "decorators": [],
                "name": "parse",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
