__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 51,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 51,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 51,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 51,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 49,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 31,
                "end": 32,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 21,
                  "end": 26,
                  "expression": {
                    "type": "Identifier",
                    "start": 22,
                    "end": 26,
                    "name": "test",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 32,
                "end": 49,
                "typeAnnotation": {
                  "type": "TSImportType",
                  "start": 34,
                  "end": 49,
                  "argument": {
                    "type": "TSLiteralType",
                    "start": 41,
                    "end": 46,
                    "literal": {
                      "type": "Literal",
                      "start": 41,
                      "end": 46,
                      "value": "./b",
                      "raw": "'./b'"
                    }
                  },
                  "options": null,
                  "qualifier": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 49,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null
            }
          ]
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
  "sourceType": "script",
  "hashbang": null
}
```
