__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 168,
  "end": 322,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 168,
      "end": 214,
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 182,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 182,
        "end": 185,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 183,
            "end": 184,
            "name": {
              "type": "Identifier",
              "start": 183,
              "end": 184,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 186,
        "end": 214,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 192,
            "end": 212,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 193,
                "end": 202,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 194,
                  "end": 202,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 196,
                    "end": 202
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 203,
              "end": 211,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 205,
                "end": 211
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 216,
      "end": 266,
      "id": {
        "type": "Identifier",
        "start": 226,
        "end": 227,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 236,
          "end": 248,
          "expression": {
            "type": "Identifier",
            "start": 236,
            "end": 240,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 240,
            "end": 248,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 241,
                "end": 247
              }
            ]
          }
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 250,
          "end": 262,
          "expression": {
            "type": "Identifier",
            "start": 250,
            "end": 254,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 254,
            "end": 262,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 255,
                "end": 261
              }
            ]
          }
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 263,
        "end": 266,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 268,
      "end": 322,
      "id": {
        "type": "Identifier",
        "start": 278,
        "end": 280,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 292,
          "end": 304,
          "expression": {
            "type": "Identifier",
            "start": 292,
            "end": 296,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 296,
            "end": 304,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 297,
                "end": 303
              }
            ]
          }
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 306,
          "end": 318,
          "expression": {
            "type": "Identifier",
            "start": 306,
            "end": 310,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 310,
            "end": 318,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 311,
                "end": 317
              }
            ]
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 280,
        "end": 283,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 281,
            "end": 282,
            "name": {
              "type": "Identifier",
              "start": 281,
              "end": 282,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 319,
        "end": 322,
        "body": []
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
