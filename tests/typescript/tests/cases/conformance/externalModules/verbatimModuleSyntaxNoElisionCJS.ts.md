__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 14,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 14,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSExportAssignment",
      "start": 15,
      "end": 26,
      "expression": {
        "type": "Identifier",
        "start": 24,
        "end": 25,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
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
  "end": 27,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 26,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 25,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 24,
          "value": "./a",
          "raw": "\"./a\""
        }
      },
      "importKind": "value"
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
  "end": 67,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 14,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 14,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 15,
      "end": 54,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 27,
        "end": 54,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 33,
            "end": 52,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 40,
              "end": 52,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 46,
                  "end": 51,
                  "id": {
                    "type": "Identifier",
                    "start": 46,
                    "end": 47,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 50,
                    "end": 51,
                    "value": 1,
                    "raw": "1"
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
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "TSExportAssignment",
      "start": 55,
      "end": 66,
      "expression": {
        "type": "Identifier",
        "start": 64,
        "end": 65,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
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
  "end": 71,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 26,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 25,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 24,
          "value": "./c",
          "raw": "\"./c\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 27,
      "end": 58,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 40,
        "decorators": [],
        "name": "J",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 43,
        "end": 57,
        "expression": {
          "type": "Literal",
          "start": 51,
          "end": 56,
          "value": "./c",
          "raw": "\"./c\""
        }
      },
      "importKind": "type"
    },
    {
      "type": "TSExportAssignment",
      "start": 59,
      "end": 70,
      "expression": {
        "type": "Identifier",
        "start": 68,
        "end": 69,
        "decorators": [],
        "name": "J",
        "optional": false,
        "typeAnnotation": null
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
  "end": 27,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 14,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 14,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSExportAssignment",
      "start": 15,
      "end": 26,
      "expression": {
        "type": "Identifier",
        "start": 24,
        "end": 25,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
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
  "end": 58,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 31,
      "id": {
        "type": "Identifier",
        "start": 12,
        "end": 13,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 16,
        "end": 30,
        "expression": {
          "type": "Literal",
          "start": 24,
          "end": 29,
          "value": "./e",
          "raw": "\"./e\""
        }
      },
      "importKind": "type"
    },
    {
      "type": "VariableDeclaration",
      "start": 32,
      "end": 45,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 44,
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 39,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 42,
            "end": 44,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSExportAssignment",
      "start": 46,
      "end": 57,
      "expression": {
        "type": "Identifier",
        "start": 55,
        "end": 56,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
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
  "start": 63,
  "end": 63,
  "body": [],
  "sourceType": "module",
  "hashbang": null
}
```
