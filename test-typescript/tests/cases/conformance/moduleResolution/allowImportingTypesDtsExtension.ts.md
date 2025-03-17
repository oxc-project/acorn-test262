__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 49,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 48,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 48,
        "id": {
          "type": "Identifier",
          "start": 20,
          "end": 24,
          "name": "User",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 27,
          "end": 48,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 33,
              "end": 46,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 33,
                "end": 37,
                "name": "name",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 37,
                "end": 45,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 39,
                  "end": 45
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
  "end": 206,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 41,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 14,
          "end": 18,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 18,
            "name": "User",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 18,
            "name": "User",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 26,
        "end": 40,
        "value": "./types.d.ts",
        "raw": "\"./types.d.ts\""
      },
      "attributes": [],
      "importKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 42,
      "end": 83,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 56,
          "end": 60,
          "local": {
            "type": "Identifier",
            "start": 56,
            "end": 60,
            "name": "User",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 56,
            "end": 60,
            "name": "User",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 68,
        "end": 82,
        "value": "./types.d.ts",
        "raw": "\"./types.d.ts\""
      },
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 85,
      "end": 128,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 92,
        "end": 128,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 98,
            "end": 127,
            "id": {
              "type": "Identifier",
              "start": 98,
              "end": 108,
              "name": "user",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 102,
                "end": 108,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 104,
                  "end": 108,
                  "typeName": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 108,
                    "name": "User",
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
              "type": "ObjectExpression",
              "start": 111,
              "end": 127,
              "properties": [
                {
                  "type": "Property",
                  "start": 113,
                  "end": 125,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 117,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 119,
                    "end": 125,
                    "value": "John",
                    "raw": "\"John\""
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
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
      "start": 130,
      "end": 205,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 137,
        "end": 205,
        "id": {
          "type": "Identifier",
          "start": 146,
          "end": 153,
          "name": "getUser",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 185,
          "end": 205,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 191,
              "end": 203,
              "argument": {
                "type": "Identifier",
                "start": 198,
                "end": 202,
                "name": "user",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 155,
          "end": 184,
          "typeAnnotation": {
            "type": "TSImportType",
            "start": 157,
            "end": 184,
            "argument": {
              "type": "TSLiteralType",
              "start": 164,
              "end": 178,
              "literal": {
                "type": "Literal",
                "start": 164,
                "end": 178,
                "value": "./types.d.ts",
                "raw": "\"./types.d.ts\""
              }
            },
            "options": null,
            "qualifier": {
              "type": "Identifier",
              "start": 180,
              "end": 184,
              "name": "User",
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
