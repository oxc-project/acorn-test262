typeParameterAsBaseClass.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 51,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 23,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 21,
        "end": 23,
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
      "type": "ClassDeclaration",
      "start": 24,
      "end": 51,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 49,
        "end": 51,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 32,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 47,
          "end": 48,
          "expression": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      ],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 32,
        "end": 35,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 33,
            "end": 34,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
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
