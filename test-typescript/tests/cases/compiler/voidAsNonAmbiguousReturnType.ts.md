__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 126,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 61,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 61,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 25,
          "name": "mkdirSync",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 26,
            "end": 38,
            "name": "path",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 38,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 32,
                "end": 38
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 40,
            "end": 53,
            "name": "mode",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 53,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 47,
                "end": 53
              }
            },
            "decorators": [],
            "optional": true
          }
        ],
        "body": null,
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 54,
          "end": 60,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 56,
            "end": 60
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 62,
      "end": 125,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 69,
        "end": 125,
        "id": {
          "type": "Identifier",
          "start": 78,
          "end": 87,
          "name": "mkdirSync",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 88,
            "end": 100,
            "name": "path",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 92,
              "end": 100,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 94,
                "end": 100
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 102,
            "end": 115,
            "name": "mode",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 115,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 109,
                "end": 115
              }
            },
            "decorators": [],
            "optional": true
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 123,
          "end": 125,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 116,
          "end": 122,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 118,
            "end": 122
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 206,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 57,
      "end": 113,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 66,
        "name": "fs",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 69,
        "end": 112,
        "expression": {
          "type": "Literal",
          "start": 77,
          "end": 111,
          "value": "./voidAsNonAmbiguousReturnType_0",
          "raw": "\"./voidAsNonAmbiguousReturnType_0\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 115,
      "end": 205,
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 128,
        "name": "main",
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
        "start": 131,
        "end": 205,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 134,
            "end": 155,
            "expression": {
              "type": "CallExpression",
              "start": 134,
              "end": 154,
              "callee": {
                "type": "MemberExpression",
                "start": 134,
                "end": 146,
                "object": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 136,
                  "name": "fs",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 146,
                  "name": "mkdirSync",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 147,
                  "end": 153,
                  "value": "test",
                  "raw": "'test'"
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
