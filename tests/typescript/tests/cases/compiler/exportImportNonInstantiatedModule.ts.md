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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
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
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 33
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
                      "start": 36,
                      "end": 37
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 39,
                        "end": 45
                      },
                      "start": 37,
                      "end": 45
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 36,
                    "end": 45
                  }
                ],
                "start": 34,
                "end": 47
              },
              "declare": false,
              "start": 22,
              "end": 47
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 15,
            "end": 47
          }
        ],
        "start": 9,
        "end": 49
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 49
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 59
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A1",
                "optional": false,
                "typeAnnotation": null,
                "start": 80,
                "end": 82
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 85,
                "end": 86
              },
              "importKind": "value",
              "start": 73,
              "end": 86
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 66,
            "end": 86
          }
        ],
        "start": 60,
        "end": 93
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 51,
      "end": 93
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 102,
                      "end": 103
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 104,
                      "end": 106
                    },
                    "start": 102,
                    "end": 106
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 107,
                    "end": 108
                  },
                  "start": 102,
                  "end": 108
                },
                "typeArguments": null,
                "start": 102,
                "end": 108
              },
              "start": 100,
              "end": 108
            },
            "start": 99,
            "end": 108
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 113,
                  "end": 114
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 116,
                  "end": 117
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 113,
                "end": 117
              }
            ],
            "start": 111,
            "end": 119
          },
          "definite": false,
          "start": 99,
          "end": 119
        }
      ],
      "declare": false,
      "start": 95,
      "end": 120
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 120
}
```
