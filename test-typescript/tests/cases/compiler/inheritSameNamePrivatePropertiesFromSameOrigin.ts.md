inheritSameNamePrivatePropertiesFromSameOrigin.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 132,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 34,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 34,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 32,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 31,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 25,
                "end": 31
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 35,
      "end": 56,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 53,
        "end": 56,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 42,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 51,
        "end": 52,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 58,
      "end": 80,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 77,
        "end": 80,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 66,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 75,
        "end": 76,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 82,
      "end": 132,
      "body": {
        "type": "TSInterfaceBody",
        "start": 108,
        "end": 132,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 120,
            "end": 130,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 120,
              "end": 121,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 129,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 123,
                "end": 129
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 102,
          "end": 103,
          "expression": {
            "type": "Identifier",
            "start": 102,
            "end": 103,
            "decorators": [],
            "name": "C",
            "optional": false
          }
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 105,
          "end": 107,
          "expression": {
            "type": "Identifier",
            "start": 105,
            "end": 107,
            "decorators": [],
            "name": "C2",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 93,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
