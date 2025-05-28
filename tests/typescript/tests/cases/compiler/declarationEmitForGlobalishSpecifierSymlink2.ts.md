__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 52,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 26,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 26,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 20,
          "decorators": [],
          "name": "getA",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 22,
          "end": 25,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 24,
            "end": 25,
            "typeName": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 27,
      "end": 52,
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 34,
        "end": 52,
        "id": {
          "type": "Identifier",
          "start": 39,
          "end": 40,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSEnumBody",
          "start": 41,
          "end": 52,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 47,
              "end": 50,
              "id": {
                "type": "Identifier",
                "start": 47,
                "end": 50,
                "decorators": [],
                "name": "Val",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null,
              "computed": false
            }
          ]
        },
        "const": false,
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 27,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 26,
        "value": "./src/impl",
        "raw": "\"./src/impl\""
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
  "end": 97,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 32,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 21,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 21,
            "decorators": [],
            "name": "_whatever",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 27,
        "end": 31,
        "value": "p2",
        "raw": "\"p2\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 33,
      "end": 71,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 42,
          "end": 46,
          "imported": {
            "type": "Identifier",
            "start": 42,
            "end": 46,
            "decorators": [],
            "name": "getA",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 42,
            "end": 46,
            "decorators": [],
            "name": "getA",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 54,
        "end": 70,
        "value": "typescript-fsa",
        "raw": "\"typescript-fsa\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 73,
      "end": 97,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 80,
        "end": 97,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 86,
            "end": 96,
            "id": {
              "type": "Identifier",
              "start": 86,
              "end": 87,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 90,
              "end": 96,
              "callee": {
                "type": "Identifier",
                "start": 90,
                "end": 94,
                "decorators": [],
                "name": "getA",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 44,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 43,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 43,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 42,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 42,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 14,
                "end": 42,
                "typeAnnotation": {
                  "type": "TSImportType",
                  "start": 16,
                  "end": 42,
                  "argument": {
                    "type": "TSLiteralType",
                    "start": 23,
                    "end": 39,
                    "literal": {
                      "type": "Literal",
                      "start": 23,
                      "end": 39,
                      "value": "typescript-fsa",
                      "raw": "\"typescript-fsa\""
                    }
                  },
                  "options": null,
                  "qualifier": {
                    "type": "Identifier",
                    "start": 41,
                    "end": 42,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "init": null,
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
