__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 150,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 30,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 30,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 28,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 19,
              "decorators": [],
              "name": "aProp",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 31,
      "end": 103,
      "body": {
        "type": "TSModuleBlock",
        "start": 40,
        "end": 103,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 46,
            "end": 78,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 53,
              "end": 78,
              "body": {
                "type": "TSInterfaceBody",
                "start": 65,
                "end": 78,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 67,
                    "end": 76,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 67,
                      "end": 68,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 68,
                      "end": 76,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 70,
                        "end": 76
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 63,
                "end": 64,
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 83,
            "end": 101,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 90,
              "end": 101,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 94,
                  "end": 100,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 95,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 98,
                    "end": 100,
                    "raw": "10",
                    "value": 10,
                    "regex": null,
                    "bigint": null
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 39,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 105,
      "end": 150,
      "body": {
        "type": "TSModuleBlock",
        "start": 114,
        "end": 150,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 120,
            "end": 130,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 124,
                "end": 129,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 125,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 128,
                  "end": 129,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 135,
            "end": 148,
            "id": {
              "type": "Identifier",
              "start": 142,
              "end": 143,
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value",
            "moduleReference": {
              "type": "Identifier",
              "start": 146,
              "end": 147,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 113,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
