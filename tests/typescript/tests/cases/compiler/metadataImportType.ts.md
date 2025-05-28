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
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 51,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 49,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 21,
                  "end": 26,
                  "expression": {
                    "type": "Identifier",
                    "start": 22,
                    "end": 26,
                    "decorators": [],
                    "name": "test",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "key": {
                "type": "Identifier",
                "start": 31,
                "end": 32,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
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
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
