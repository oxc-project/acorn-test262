__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 12,
        "end": 14
      },
      "declare": false,
      "start": 0,
      "end": 14
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 24,
        "end": 25
      },
      "start": 15,
      "end": 26
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 27
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
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./a",
          "raw": "\"./a\"",
          "start": 19,
          "end": 24
        },
        "start": 11,
        "end": 25
      },
      "importKind": "value",
      "start": 0,
      "end": 26
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 27
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 12,
        "end": 14
      },
      "declare": false,
      "start": 0,
      "end": 14
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 46,
                    "end": 47
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 50,
                    "end": 51
                  },
                  "definite": false,
                  "start": 46,
                  "end": 51
                }
              ],
              "declare": false,
              "start": 40,
              "end": 52
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 33,
            "end": 52
          }
        ],
        "start": 27,
        "end": 54
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 15,
      "end": 54
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 65
      },
      "start": 55,
      "end": 66
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 67
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
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./c",
          "raw": "\"./c\"",
          "start": 19,
          "end": 24
        },
        "start": 11,
        "end": 25
      },
      "importKind": "value",
      "start": 0,
      "end": 26
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "J",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 40
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./c",
          "raw": "\"./c\"",
          "start": 51,
          "end": 56
        },
        "start": 43,
        "end": 57
      },
      "importKind": "type",
      "start": 27,
      "end": 58
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "J",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 69
      },
      "start": 59,
      "end": 70
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 71
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 12,
        "end": 14
      },
      "declare": false,
      "start": 0,
      "end": 14
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 24,
        "end": 25
      },
      "start": 15,
      "end": 26
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 27
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
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 12,
        "end": 13
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./e",
          "raw": "\"./e\"",
          "start": 24,
          "end": 29
        },
        "start": 16,
        "end": 30
      },
      "importKind": "type",
      "start": 0,
      "end": 31
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 39
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 42,
            "end": 44
          },
          "definite": false,
          "start": 38,
          "end": 44
        }
      ],
      "declare": false,
      "start": 32,
      "end": 45
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 56
      },
      "start": 46,
      "end": 57
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 58
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [],
  "sourceType": "module",
  "hashbang": null,
  "start": 63,
  "end": 63
}
```
