__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "mkdirSync",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 25
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "path",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 32,
                "end": 38
              },
              "start": 30,
              "end": 38
            },
            "start": 26,
            "end": 38
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "mode",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 47,
                "end": 53
              },
              "start": 45,
              "end": 53
            },
            "start": 40,
            "end": 53
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 56,
            "end": 60
          },
          "start": 54,
          "end": 60
        },
        "body": null,
        "expression": false,
        "start": 7,
        "end": 61
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 61
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "mkdirSync",
          "optional": false,
          "typeAnnotation": null,
          "start": 78,
          "end": 87
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "path",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 94,
                "end": 100
              },
              "start": 92,
              "end": 100
            },
            "start": 88,
            "end": 100
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "mode",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 109,
                "end": 115
              },
              "start": 107,
              "end": 115
            },
            "start": 102,
            "end": 115
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 118,
            "end": 122
          },
          "start": 116,
          "end": 122
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 123,
          "end": 125
        },
        "expression": false,
        "start": 69,
        "end": 125
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 62,
      "end": 125
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 126
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fs",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 66
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./voidAsNonAmbiguousReturnType_0",
          "raw": "\"./voidAsNonAmbiguousReturnType_0\"",
          "start": 77,
          "end": 111
        },
        "start": 69,
        "end": 112
      },
      "importKind": "value",
      "start": 57,
      "end": 113
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "main",
        "optional": false,
        "typeAnnotation": null,
        "start": 124,
        "end": 128
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 134,
                  "end": 136
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mkdirSync",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
                  "end": 146
                },
                "optional": false,
                "computed": false,
                "start": 134,
                "end": 146
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "test",
                  "raw": "'test'",
                  "start": 147,
                  "end": 153
                }
              ],
              "optional": false,
              "start": 134,
              "end": 154
            },
            "directive": null,
            "start": 134,
            "end": 155
          }
        ],
        "start": 131,
        "end": 205
      },
      "expression": false,
      "start": 115,
      "end": 205
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 205
}
```
