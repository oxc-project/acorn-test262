__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 35,
                "end": 40
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 43,
                      "end": 44
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 46,
                        "end": 52
                      },
                      "start": 44,
                      "end": 52
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 43,
                    "end": 53
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 54,
                      "end": 55
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 57,
                        "end": 63
                      },
                      "start": 55,
                      "end": 63
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 54,
                    "end": 63
                  }
                ],
                "start": 41,
                "end": 65
              },
              "declare": false,
              "start": 25,
              "end": 65
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 18,
            "end": 65
          }
        ],
        "start": 12,
        "end": 67
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 67
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 74
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 78
          },
          "definite": false,
          "start": 73,
          "end": 78
        }
      ],
      "declare": false,
      "start": 69,
      "end": 79
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 145,
                  "end": 146
                },
                "typeArguments": null,
                "start": 138,
                "end": 146
              },
              "start": 136,
              "end": 146
            },
            "start": 135,
            "end": 146
          },
          "init": null,
          "definite": false,
          "start": 135,
          "end": 146
        }
      ],
      "declare": false,
      "start": 131,
      "end": 147
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 173
}
```
