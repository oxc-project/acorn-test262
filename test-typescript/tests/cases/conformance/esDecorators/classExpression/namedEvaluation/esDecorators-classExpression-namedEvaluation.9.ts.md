a.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 48,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "TSExportAssignment",
      "start": 23,
      "end": 47,
      "expression": {
        "type": "ClassExpression",
        "start": 32,
        "end": 46,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 43,
          "end": 46,
          "body": []
        },
        "declare": false,
        "decorators": [
          {
            "type": "Decorator",
            "start": 32,
            "end": 36,
            "expression": {
              "type": "Identifier",
              "start": 33,
              "end": 36,
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
  ],
  "sourceType": "module"
}
```
b.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 54,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "TSExportAssignment",
      "start": 23,
      "end": 54,
      "expression": {
        "type": "ClassExpression",
        "start": 32,
        "end": 53,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 38,
          "end": 53,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 40,
              "end": 51,
              "computed": false,
              "declare": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 40,
                  "end": 44,
                  "expression": {
                    "type": "Identifier",
                    "start": 41,
                    "end": 44,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  }
                }
              ],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 45,
                "end": 46,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 46,
                "end": 51,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 48,
                  "end": 51
                }
              },
              "value": null
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": null,
        "implements": [],
        "superClass": null
      }
    }
  ],
  "sourceType": "module"
}
```
