/types.d.ts
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
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 48,
        "declare": true,
        "id": {
          "type": "Identifier",
          "start": 20,
          "end": 24,
          "decorators": [],
          "name": "User",
          "optional": false
        },
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
              "key": {
                "type": "Identifier",
                "start": 33,
                "end": 37,
                "decorators": [],
                "name": "name",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 37,
                "end": 45,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 39,
                  "end": 45
                }
              }
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
/a.ts
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
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 26,
        "end": 40,
        "raw": "\"./types.d.ts\"",
        "value": "./types.d.ts"
      },
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 18,
            "decorators": [],
            "name": "User",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 42,
      "end": 83,
      "attributes": [],
      "declaration": null,
      "exportKind": "type",
      "source": {
        "type": "Literal",
        "start": 68,
        "end": 82,
        "raw": "\"./types.d.ts\"",
        "value": "./types.d.ts"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 56,
          "end": 60,
          "exported": {
            "type": "Identifier",
            "start": 56,
            "end": 60,
            "decorators": [],
            "name": "User",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 56,
            "end": 60,
            "decorators": [],
            "name": "User",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 85,
      "end": 128,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 92,
        "end": 128,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 98,
            "end": 127,
            "definite": false,
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
                    "optional": false
                  }
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 117,
                    "decorators": [],
                    "name": "name",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 119,
                    "end": 125,
                    "raw": "\"John\"",
                    "value": "John"
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 130,
      "end": 205,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 137,
        "end": 205,
        "async": false,
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
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 146,
          "end": 153,
          "decorators": [],
          "name": "getUser",
          "optional": false
        },
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
                "raw": "\"./types.d.ts\"",
                "value": "./types.d.ts"
              }
            },
            "options": null,
            "qualifier": {
              "type": "Identifier",
              "start": 180,
              "end": 184,
              "decorators": [],
              "name": "User",
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
