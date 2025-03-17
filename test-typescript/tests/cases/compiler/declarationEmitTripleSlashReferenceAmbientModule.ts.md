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
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "value": "url",
        "raw": "\"url\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 79,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 25,
            "end": 44,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 32,
              "end": 44,
              "id": {
                "type": "Identifier",
                "start": 38,
                "end": 41,
                "name": "Url",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 42,
                "end": 44,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 47,
            "end": 76,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 54,
              "end": 76,
              "id": {
                "type": "Identifier",
                "start": 63,
                "end": 68,
                "name": "parse",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 70,
                "end": 75,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 72,
                  "end": 75,
                  "typeName": {
                    "type": "Identifier",
                    "start": 72,
                    "end": 75,
                    "name": "Url",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 9,
          "end": 14,
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "name": "parse",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "name": "parse",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 27,
        "value": "url",
        "raw": "\"url\""
      },
      "attributes": [],
      "exportKind": "value"
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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 14,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "name": "parse",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "name": "parse",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 27,
        "value": "url",
        "raw": "\"url\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 29,
      "end": 77,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 36,
        "end": 77,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 42,
            "end": 76,
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 66,
              "name": "thing",
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
                      "value": "url",
                      "raw": "\"url\""
                    }
                  },
                  "options": null,
                  "qualifier": {
                    "type": "Identifier",
                    "start": 63,
                    "end": 66,
                    "name": "Url",
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
              "start": 69,
              "end": 76,
              "callee": {
                "type": "Identifier",
                "start": 69,
                "end": 74,
                "name": "parse",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 59,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 28,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 14,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "name": "parse",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "name": "parse",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 27,
        "value": "url",
        "raw": "\"url\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 29,
      "end": 58,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 36,
        "end": 58,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 42,
            "end": 57,
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 47,
              "name": "thing",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 50,
              "end": 57,
              "callee": {
                "type": "Identifier",
                "start": 50,
                "end": 55,
                "name": "parse",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
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
  "sourceType": "module",
  "hashbang": null
}
```
