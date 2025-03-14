inheritFromGenericTypeParameter.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 24,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 21,
        "end": 24,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 19,
        "end": 20,
        "decorators": [],
        "name": "T",
        "optional": false
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
      "type": "TSInterfaceDeclaration",
      "start": 25,
      "end": 53,
      "body": {
        "type": "TSInterfaceBody",
        "start": 50,
        "end": 53,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 48,
          "end": 49,
          "expression": {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 36,
        "decorators": [],
        "name": "I",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 36,
        "end": 39,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 37,
            "end": 38,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
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
