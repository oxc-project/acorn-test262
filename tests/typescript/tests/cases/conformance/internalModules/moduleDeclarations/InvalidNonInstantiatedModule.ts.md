__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 170,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 64,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 64,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 62,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 22,
              "end": 62,
              "id": {
                "type": "Identifier",
                "start": 32,
                "end": 37,
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 38,
                "end": 62,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 40,
                    "end": 50,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 41,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 41,
                      "end": 49,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 43,
                        "end": 49
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 51,
                    "end": 60,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 51,
                      "end": 52,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 52,
                      "end": 60,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 54,
                        "end": 60
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 66,
      "end": 76,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 70,
          "end": 75,
          "id": {
            "type": "Identifier",
            "start": 70,
            "end": 71,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 74,
            "end": 75,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 128,
      "end": 144,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 143,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 143,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 133,
              "end": 143,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 135,
                "end": 143,
                "exprName": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 143,
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
