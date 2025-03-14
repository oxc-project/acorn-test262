/a.ts
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 14,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false
      }
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
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
/b.ts
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
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 25,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 24,
          "raw": "\"./a\"",
          "value": "./a"
        }
      }
    }
  ],
  "sourceType": "module"
}
```
/c.ts
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 14,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 15,
      "end": 54,
      "body": {
        "type": "TSModuleBlock",
        "start": 27,
        "end": 54,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 33,
            "end": 52,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 40,
              "end": 52,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 46,
                  "end": 51,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 46,
                    "end": 47,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 50,
                    "end": 51,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "decorators": [],
        "name": "I",
        "optional": false
      },
      "kind": "namespace"
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
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
/d.ts
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
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 25,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 24,
          "raw": "\"./c\"",
          "value": "./c"
        }
      }
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
        "optional": false
      },
      "importKind": "type",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 43,
        "end": 57,
        "expression": {
          "type": "Literal",
          "start": 51,
          "end": 56,
          "raw": "\"./c\"",
          "value": "./c"
        }
      }
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
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
/e.d.ts
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 14,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false
      }
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
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
/f.ts
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
        "optional": false
      },
      "importKind": "type",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 16,
        "end": 30,
        "expression": {
          "type": "Literal",
          "start": 24,
          "end": 29,
          "raw": "\"./e\"",
          "value": "./e"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 32,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 44,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 39,
            "decorators": [],
            "name": "I",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 42,
            "end": 44,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
/z.ts
```json
{
  "type": "Program",
  "start": 63,
  "end": 63,
  "body": [],
  "sourceType": "module"
}
```
