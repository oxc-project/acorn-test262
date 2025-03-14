indirectSelfReferenceGeneric.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 55,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 27,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 24,
        "end": 27,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "a",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 19,
        "end": 20,
        "decorators": [],
        "name": "b",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 20,
        "end": 23,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 21,
            "end": 22,
            "typeName": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
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
      "end": 55,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 52,
        "end": 55,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "decorators": [],
        "name": "b",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 47,
        "end": 48,
        "decorators": [],
        "name": "a",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 48,
        "end": 51,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 49,
            "end": 50,
            "typeName": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 35,
        "end": 38,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 36,
            "end": 37,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "T",
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
