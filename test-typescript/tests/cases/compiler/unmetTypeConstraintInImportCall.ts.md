file1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 47,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 46,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 46,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 15,
          "decorators": [],
          "name": "Foo",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 36,
          "end": 46,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 38,
              "end": 44,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 38,
                "end": 41,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 41,
                "end": 44,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 43,
                  "end": 44,
                  "typeName": {
                    "type": "Identifier",
                    "start": 43,
                    "end": 44,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
          ]
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 15,
          "end": 33,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 16,
              "end": 32,
              "const": false,
              "constraint": {
                "type": "TSStringKeyword",
                "start": 26,
                "end": 32
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 16,
                "end": 17,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
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
file2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 39,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Bar",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSImportType",
        "start": 14,
        "end": 38,
        "argument": {
          "type": "TSLiteralType",
          "start": 21,
          "end": 30,
          "literal": {
            "type": "Literal",
            "start": 21,
            "end": 30,
            "raw": "'./file1'",
            "value": "./file1"
          }
        },
        "options": null,
        "qualifier": {
          "type": "Identifier",
          "start": 32,
          "end": 35,
          "decorators": [],
          "name": "Foo",
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 35,
          "end": 38,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 36,
              "end": 37,
              "typeName": {
                "type": "Identifier",
                "start": 36,
                "end": 37,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 8,
        "end": 11,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 9,
            "end": 10,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "module"
}
```
