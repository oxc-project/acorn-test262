a.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 154,
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
      "type": "ExportDefaultDeclaration",
      "start": 121,
      "end": 153,
      "declaration": {
        "type": "ClassExpression",
        "start": 137,
        "end": 151,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 148,
          "end": 151,
          "body": []
        },
        "declare": false,
        "decorators": [
          {
            "type": "Decorator",
            "start": 137,
            "end": 141,
            "expression": {
              "type": "Identifier",
              "start": 138,
              "end": 141,
              "decorators": [],
              "name": "dec",
              "optional": false
            }
          }
        ],
        "id": null,
        "implements": [],
        "superClass": null
      },
      "exportKind": "value"
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
  "end": 160,
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
      "type": "ExportDefaultDeclaration",
      "start": 121,
      "end": 160,
      "declaration": {
        "type": "ClassExpression",
        "start": 137,
        "end": 158,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 143,
          "end": 158,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 145,
              "end": 156,
              "computed": false,
              "declare": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 145,
                  "end": 149,
                  "expression": {
                    "type": "Identifier",
                    "start": 146,
                    "end": 149,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  }
                }
              ],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 150,
                "end": 151,
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
                "start": 151,
                "end": 156,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 153,
                  "end": 156
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
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module"
}
```
