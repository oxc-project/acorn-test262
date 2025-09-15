__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "aProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 21,
                "end": 27
              },
              "start": 19,
              "end": 27
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 28
          }
        ],
        "start": 8,
        "end": 30
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 41,
        "end": 42
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
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 66,
                "end": 67
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
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 70,
                      "end": 71
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 73,
                        "end": 79
                      },
                      "start": 71,
                      "end": 79
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 70,
                    "end": 79
                  }
                ],
                "start": 68,
                "end": 81
              },
              "declare": false,
              "start": 56,
              "end": 81
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 49,
            "end": 81
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 97,
                    "end": 98
                  },
                  "init": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 101,
                    "end": 103
                  },
                  "definite": false,
                  "start": 97,
                  "end": 103
                }
              ],
              "declare": false,
              "start": 93,
              "end": 104
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 86,
            "end": 104
          }
        ],
        "start": 43,
        "end": 106
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 31,
      "end": 106
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 119
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 130,
                  "end": 131
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 134,
                  "end": 135
                },
                "definite": false,
                "start": 130,
                "end": 135
              }
            ],
            "declare": false,
            "start": 126,
            "end": 136
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 148,
              "end": 149
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 153
            },
            "importKind": "value",
            "start": 141,
            "end": 154
          }
        ],
        "start": 120,
        "end": 156
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 108,
      "end": 156
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 156
}
```
