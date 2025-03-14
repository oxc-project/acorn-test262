typeParameterDoesntBlockParameterLookup.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 56,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 56,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 41,
          "end": 49,
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 44,
            "end": 49,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 46,
              "end": 49
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 50,
        "end": 56,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 52,
          "end": 56
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 18,
        "end": 40,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 34,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 31,
              "end": 34,
              "typeName": {
                "type": "Identifier",
                "start": 31,
                "end": 34,
                "decorators": [],
                "name": "Bar",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 22,
              "decorators": [],
              "name": "Foo",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 36,
            "end": 39,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 36,
              "end": 39,
              "decorators": [],
              "name": "Bar",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
