decoratorOnClassProperty11.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 98,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 70,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "dec",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 22,
        "end": 69,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 24,
          "end": 69,
          "params": [
            {
              "type": "Identifier",
              "start": 28,
              "end": 39,
              "decorators": [],
              "name": "target",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 34,
                "end": 39,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 36,
                  "end": 39
                }
              }
            },
            {
              "type": "Identifier",
              "start": 41,
              "end": 60,
              "decorators": [],
              "name": "propertyKey",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 52,
                "end": 60,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 54,
                  "end": 60
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 62,
            "end": 69,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 65,
              "end": 69
            }
          },
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "start": 24,
            "end": 27,
            "params": [
              {
                "type": "TSTypeParameter",
                "start": 25,
                "end": 26,
                "const": false,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                },
                "out": false
              }
            ]
          }
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 72,
      "end": 98,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 80,
        "end": 98,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 86,
            "end": 96,
            "computed": false,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 86,
                "end": 90,
                "expression": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 90,
                  "decorators": [],
                  "name": "dec",
                  "optional": false
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 95,
              "decorators": [],
              "name": "prop",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 79,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
