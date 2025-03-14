main.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 123,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 11,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 23,
          "end": 31,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 23,
            "end": 31,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 31,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 28,
                "end": 31
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 93,
      "end": 122,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 101,
        "end": 122,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 103,
            "end": 120,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 103,
              "end": 104,
              "decorators": [],
              "name": "D",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ClassExpression",
              "start": 107,
              "end": 120,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 118,
                "end": 120,
                "body": []
              },
              "declare": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 107,
                  "end": 111,
                  "expression": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 111,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  }
                }
              ],
              "id": null,
              "implements": [],
              "superClass": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 99,
        "end": 100,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "module"
}
```
tslib.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 10,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 9,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
