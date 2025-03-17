__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 263,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 39,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 39,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 17,
            "end": 37,
            "parameters": [
              {
                "type": "Identifier",
                "start": 18,
                "end": 27,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 19,
                  "end": 27,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 21,
                    "end": 27
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 36,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 30,
                "end": 36,
                "typeName": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 36,
                  "name": "Object",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 77,
      "end": 129,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 90,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 99,
        "end": 103,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 104,
        "end": 129,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 110,
            "end": 127,
            "parameters": [
              {
                "type": "Identifier",
                "start": 111,
                "end": 120,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 112,
                  "end": 120,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 114,
                    "end": 120
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 126,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 123,
                "end": 126
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 131,
      "end": 171,
      "id": {
        "type": "Identifier",
        "start": 137,
        "end": 142,
        "name": "Base2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 143,
        "end": 171,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 149,
            "end": 169,
            "parameters": [
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
                    "type": "TSNumberKeyword",
                    "start": 153,
                    "end": 159
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 160,
              "end": 168,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 162,
                "end": 168,
                "typeName": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 168,
                  "name": "Object",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 209,
      "end": 263,
      "id": {
        "type": "Identifier",
        "start": 215,
        "end": 223,
        "name": "Derived2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 232,
        "end": 237,
        "name": "Base2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 238,
        "end": 263,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 244,
            "end": 261,
            "parameters": [
              {
                "type": "Identifier",
                "start": 245,
                "end": 254,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 246,
                  "end": 254,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 248,
                    "end": 254
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 255,
              "end": 260,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 257,
                "end": 260
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
