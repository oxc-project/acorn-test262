indexerSignatureWithRestParam.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 67,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 35,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 35,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 18,
            "end": 33,
            "parameters": [
              {
                "type": "RestElement",
                "start": 19,
                "end": 23,
                "argument": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 23,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "decorators": [],
                "optional": false
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 32,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 26,
                "end": 32
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 37,
      "end": 67,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 45,
        "end": 67,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 51,
            "end": 65,
            "parameters": [
              {
                "type": "RestElement",
                "start": 52,
                "end": 56,
                "argument": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 56,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "decorators": [],
                "optional": false
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 65,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 59,
                "end": 65
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 44,
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
