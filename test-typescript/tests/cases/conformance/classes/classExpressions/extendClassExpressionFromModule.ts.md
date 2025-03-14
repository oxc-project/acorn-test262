foo1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 24,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 9,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 7,
        "end": 9,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "x",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSExportAssignment",
      "start": 11,
      "end": 22,
      "expression": {
        "type": "Identifier",
        "start": 20,
        "end": 21,
        "decorators": [],
        "name": "x",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
foo2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 68,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "decorators": [],
        "name": "foo1",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 14,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 22,
          "end": 30,
          "raw": "'./foo1'",
          "value": "./foo1"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 46,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 45,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 41,
            "end": 45,
            "decorators": [],
            "name": "foo1",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 47,
      "end": 67,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 65,
        "end": 67,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 54,
        "decorators": [],
        "name": "y",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 63,
        "end": 64,
        "decorators": [],
        "name": "x",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
