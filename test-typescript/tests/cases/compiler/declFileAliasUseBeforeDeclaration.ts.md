__ESTREE_TEST__:PASS:
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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 20,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 16,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 17,
          "end": 20,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
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
  "start": 0,
  "end": 100,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 35,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 35,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "name": "bar",
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
            "start": 20,
            "end": 30,
            "name": "a",
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
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 27,
                    "end": 30,
                    "name": "Foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 32,
          "end": 35,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 36,
      "end": 100,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 46,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 49,
        "end": 99,
        "expression": {
          "type": "Literal",
          "start": 57,
          "end": 98,
          "value": "./declFileAliasUseBeforeDeclaration_foo",
          "raw": "\"./declFileAliasUseBeforeDeclaration_foo\""
        }
      },
      "importKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
