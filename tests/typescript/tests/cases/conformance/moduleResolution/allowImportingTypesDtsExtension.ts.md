__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "User",
          "optional": false,
          "typeAnnotation": null,
          "start": 20,
          "end": 24
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 33,
                "end": 37
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 39,
                  "end": 45
                },
                "start": 37,
                "end": 45
              },
              "accessibility": null,
              "static": false,
              "start": 33,
              "end": 46
            }
          ],
          "start": 27,
          "end": 48
        },
        "declare": true,
        "start": 7,
        "end": 48
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 48
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 49
}
```
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
            "name": "User",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 18
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "User",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 18
          },
          "importKind": "value",
          "start": 14,
          "end": 18
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./types.d.ts",
        "raw": "\"./types.d.ts\"",
        "start": 26,
        "end": 40
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 0,
      "end": 41
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "User",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 60
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "User",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 60
          },
          "exportKind": "value",
          "start": 56,
          "end": 60
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./types.d.ts",
        "raw": "\"./types.d.ts\"",
        "start": 68,
        "end": 82
      },
      "exportKind": "type",
      "attributes": [],
      "start": 42,
      "end": 83
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
              "name": "user",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "User",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 104,
                    "end": 108
                  },
                  "typeArguments": null,
                  "start": 104,
                  "end": 108
                },
                "start": 102,
                "end": 108
              },
              "start": 98,
              "end": 108
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 113,
                    "end": 117
                  },
                  "value": {
                    "type": "Literal",
                    "value": "John",
                    "raw": "\"John\"",
                    "start": 119,
                    "end": 125
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 113,
                  "end": 125
                }
              ],
              "start": 111,
              "end": 127
            },
            "definite": false,
            "start": 98,
            "end": 127
          }
        ],
        "declare": false,
        "start": 92,
        "end": 128
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 85,
      "end": 128
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "getUser",
          "optional": false,
          "typeAnnotation": null,
          "start": 146,
          "end": 153
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSImportType",
            "source": {
              "type": "Literal",
              "value": "./types.d.ts",
              "raw": "\"./types.d.ts\"",
              "start": 164,
              "end": 178
            },
            "options": null,
            "qualifier": {
              "type": "Identifier",
              "decorators": [],
              "name": "User",
              "optional": false,
              "typeAnnotation": null,
              "start": 180,
              "end": 184
            },
            "typeArguments": null,
            "start": 157,
            "end": 184
          },
          "start": 155,
          "end": 184
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "user",
                "optional": false,
                "typeAnnotation": null,
                "start": 198,
                "end": 202
              },
              "start": 191,
              "end": 203
            }
          ],
          "start": 185,
          "end": 205
        },
        "expression": false,
        "start": 137,
        "end": 205
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 130,
      "end": 205
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 205
}
```
