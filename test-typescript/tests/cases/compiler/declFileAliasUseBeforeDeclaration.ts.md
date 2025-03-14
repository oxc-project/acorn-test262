declFileAliasUseBeforeDeclaration_foo.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 21,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 20,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 20,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 20,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 16,
          "decorators": [],
          "name": "Foo",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
declFileAliasUseBeforeDeclaration_test.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 100,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 35,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 35,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 32,
          "end": 35,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "decorators": [],
          "name": "bar",
          "optional": false
        },
        "params": [
          {
            "type": "Identifier",
            "start": 20,
            "end": 30,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 30,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 23,
                "end": 30,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 23,
                  "end": 30,
                  "left": {
                    "type": "Identifier",
                    "start": 23,
                    "end": 26,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 27,
                    "end": 30,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false
                  }
                }
              }
            }
          }
        ]
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 36,
      "end": 100,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 46,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 49,
        "end": 99,
        "expression": {
          "type": "Literal",
          "start": 57,
          "end": 98,
          "raw": "\"./declFileAliasUseBeforeDeclaration_foo\"",
          "value": "./declFileAliasUseBeforeDeclaration_foo"
        }
      }
    }
  ],
  "sourceType": "module"
}
```
