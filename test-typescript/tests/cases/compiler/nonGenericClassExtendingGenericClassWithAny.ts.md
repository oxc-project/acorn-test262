nonGenericClassExtendingGenericClassWithAny.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 67,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 26,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 26,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 19,
            "end": 24,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "t",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 23,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 22,
                "end": 23,
                "typeName": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 23,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
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
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 9,
        "end": 12,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 11,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 28,
      "end": 58,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 55,
        "end": 58,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 37,
        "decorators": [],
        "name": "Bar",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 46,
        "end": 49,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 49,
        "end": 54,
        "params": [
          {
            "type": "TSAnyKeyword",
            "start": 50,
            "end": 53
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
