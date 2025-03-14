override14.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 90,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 30,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 30,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 28,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 24,
              "decorators": [],
              "name": "property",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 27,
              "end": 28,
              "raw": "1",
              "value": 1
            }
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
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 32,
      "end": 89,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 57,
        "end": 89,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 63,
            "end": 87,
            "computed": false,
            "declare": true,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 79,
              "decorators": [],
              "name": "property",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 87,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 81,
                "end": 87
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
        "start": 38,
        "end": 44,
        "decorators": [],
        "name": "SubFoo",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 53,
        "end": 56,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
