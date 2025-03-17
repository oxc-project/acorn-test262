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
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 61,
        "async": false,
        "body": null,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 25,
          "decorators": [],
          "name": "mkdirSync",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 26,
            "end": 38,
            "decorators": [],
            "name": "path",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 38,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 32,
                "end": 38
              }
            }
          },
          {
            "type": "Identifier",
            "start": 40,
            "end": 53,
            "decorators": [],
            "name": "mode",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 53,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 47,
                "end": 53
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 54,
          "end": 60,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 56,
            "end": 60
          }
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 62,
      "end": 125,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 69,
        "end": 125,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 123,
          "end": 125,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 78,
          "end": 87,
          "decorators": [],
          "name": "mkdirSync",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 88,
            "end": 100,
            "decorators": [],
            "name": "path",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 92,
              "end": 100,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 94,
                "end": 100
              }
            }
          },
          {
            "type": "Identifier",
            "start": 102,
            "end": 115,
            "decorators": [],
            "name": "mode",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 115,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 109,
                "end": 115
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 116,
          "end": 122,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 118,
            "end": 122
          }
        },
        "typeParameters": null
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
        "decorators": [],
        "name": "fs",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 69,
        "end": 112,
        "expression": {
          "type": "Literal",
          "start": 77,
          "end": 111,
          "raw": "\"./voidAsNonAmbiguousReturnType_0\"",
          "value": "./voidAsNonAmbiguousReturnType_0"
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 115,
      "end": 205,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 131,
        "end": 205,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 134,
            "end": 155,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 134,
              "end": 154,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 147,
                  "end": 153,
                  "raw": "'test'",
                  "value": "test"
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 134,
                "end": 146,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 136,
                  "decorators": [],
                  "name": "fs",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 146,
                  "decorators": [],
                  "name": "mkdirSync",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 128,
        "decorators": [],
        "name": "main",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
