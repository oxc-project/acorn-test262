__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 108,
  "end": 252,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 108,
      "end": 171,
      "id": {
        "type": "Identifier",
        "start": 118,
        "end": 122,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 123,
        "end": 171,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 129,
            "end": 140,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 131,
              "end": 139,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 133,
                "end": 139
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 145,
            "end": 169,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 150,
                "end": 159,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 151,
                  "end": 159,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 153,
                    "end": 159
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 160,
              "end": 168,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 162,
                "end": 168
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 173,
      "end": 252,
      "id": {
        "type": "Identifier",
        "start": 183,
        "end": 190,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 199,
          "end": 203,
          "expression": {
            "type": "Identifier",
            "start": 199,
            "end": 203,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 204,
        "end": 252,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 210,
            "end": 221,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 212,
              "end": 220,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 214,
                "end": 220
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 226,
            "end": 250,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 231,
                "end": 240,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 232,
                  "end": 240,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 234,
                    "end": 240
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 241,
              "end": 249,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 243,
                "end": 249
              }
            }
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
