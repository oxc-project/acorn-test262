__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 194,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 23,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 20,
        "decorators": [],
        "name": "Comparable",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 21,
        "end": 23,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 24,
      "end": 53,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 31,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 40,
        "end": 50,
        "decorators": [],
        "name": "Comparable",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 51,
        "end": 53,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 54,
      "end": 86,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 61,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 73,
          "end": 83,
          "expression": {
            "type": "Identifier",
            "start": 73,
            "end": 83,
            "decorators": [],
            "name": "Comparable",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 84,
        "end": 86,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 88,
      "end": 115,
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 109,
        "decorators": [],
        "name": "Comparable2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 109,
        "end": 112,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 110,
            "end": 111,
            "name": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 113,
        "end": 115,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 116,
      "end": 153,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 122,
        "end": 124,
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 124,
        "end": 127,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 125,
            "end": 126,
            "name": {
              "type": "Identifier",
              "start": 125,
              "end": 126,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": {
        "type": "Identifier",
        "start": 136,
        "end": 147,
        "decorators": [],
        "name": "Comparable2",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 147,
        "end": 150,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 148,
            "end": 149,
            "typeName": {
              "type": "Identifier",
              "start": 148,
              "end": 149,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 151,
        "end": 153,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 154,
      "end": 194,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 160,
        "end": 162,
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 162,
        "end": 165,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 163,
            "end": 164,
            "name": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 177,
          "end": 191,
          "expression": {
            "type": "Identifier",
            "start": 177,
            "end": 188,
            "decorators": [],
            "name": "Comparable2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 188,
            "end": 191,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 189,
                "end": 190,
                "typeName": {
                  "type": "Identifier",
                  "start": 189,
                  "end": 190,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 192,
        "end": 194,
        "body": []
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
