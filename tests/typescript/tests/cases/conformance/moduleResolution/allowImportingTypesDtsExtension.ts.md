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
          "decorators": [],
          "name": "User",
          "optional": false,
          "typeAnnotation": null
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
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
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
      "exportKind": "type",
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
  "end": 205,
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
            "decorators": [],
            "name": "User",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 18,
            "decorators": [],
            "name": "User",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
            "decorators": [],
            "name": "User",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 56,
            "end": 60,
            "decorators": [],
            "name": "User",
            "optional": false,
            "typeAnnotation": null
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
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 85,
      "end": 128,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 92,
        "end": 128,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 98,
            "end": 127,
            "id": {
              "type": "Identifier",
              "start": 98,
              "end": 108,
              "decorators": [],
              "name": "user",
              "optional": false,
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
                    "decorators": [],
                    "name": "User",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 117,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 119,
                    "end": 125,
                    "value": "John",
                    "raw": "\"John\""
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
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
          "decorators": [],
          "name": "getUser",
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
              "decorators": [],
              "name": "User",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
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
                "decorators": [],
                "name": "user",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "expression": false
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
