name.ts
```json
{
  "type": "Program",
  "start": 11,
  "end": 38,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 11,
      "end": 37,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 18,
        "end": 37,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 23,
          "end": 27,
          "decorators": [],
          "name": "Name",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 33,
          "end": 36
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 27,
          "end": 30,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 28,
              "end": 29,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
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
index.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 121,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 120,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "T",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 12,
        "end": 119,
        "checkType": {
          "type": "TSAnyKeyword",
          "start": 12,
          "end": 15
        },
        "extendsType": {
          "type": "TSConditionalType",
          "start": 25,
          "end": 102,
          "checkType": {
            "type": "TSConditionalType",
            "start": 26,
            "end": 56,
            "checkType": {
              "type": "TSAnyKeyword",
              "start": 26,
              "end": 29
            },
            "extendsType": {
              "type": "TSAnyKeyword",
              "start": 38,
              "end": 41
            },
            "falseType": {
              "type": "TSStringKeyword",
              "start": 50,
              "end": 56
            },
            "trueType": {
              "type": "TSAnyKeyword",
              "start": 44,
              "end": 47
            }
          },
          "extendsType": {
            "type": "TSAnyKeyword",
            "start": 66,
            "end": 69
          },
          "falseType": {
            "type": "TSAnyKeyword",
            "start": 99,
            "end": 102
          },
          "trueType": {
            "type": "TSImportType",
            "start": 72,
            "end": 96,
            "argument": {
              "type": "TSLiteralType",
              "start": 79,
              "end": 87,
              "literal": {
                "type": "Literal",
                "start": 79,
                "end": 87,
                "raw": "\"./name\"",
                "value": "./name"
              }
            },
            "options": null,
            "qualifier": {
              "type": "Identifier",
              "start": 89,
              "end": 93,
              "decorators": [],
              "name": "Name",
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 93,
              "end": 96,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 94,
                  "end": 95,
                  "typeName": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 95,
                    "decorators": [],
                    "name": "X",
                    "optional": false
                  }
                }
              ]
            }
          }
        },
        "falseType": {
          "type": "TSAnyKeyword",
          "start": 116,
          "end": 119
        },
        "trueType": {
          "type": "TSAnyKeyword",
          "start": 108,
          "end": 111
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 6,
        "end": 9,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 7,
            "end": 8,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 7,
              "end": 8,
              "decorators": [],
              "name": "X",
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
