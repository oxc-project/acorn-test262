__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 217,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 44,
      "id": {
        "type": "TSQualifiedName",
        "start": 15,
        "end": 20,
        "left": {
          "type": "TSQualifiedName",
          "start": 15,
          "end": 18,
          "left": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 17,
            "end": 18,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 19,
          "end": 20,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 44,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 27,
            "end": 42,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 35,
              "end": 42,
              "body": []
            },
            "abstract": false,
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 46,
      "end": 119,
      "id": {
        "type": "TSQualifiedName",
        "start": 53,
        "end": 56,
        "left": {
          "type": "Identifier",
          "start": 53,
          "end": 54,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 55,
          "end": 56,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 57,
        "end": 119,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 63,
            "end": 117,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 70,
              "end": 117,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 76,
                "end": 88,
                "decorators": [],
                "name": "EventManager",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 89,
                "end": 117,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 99,
                    "end": 110,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 101,
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 101,
                      "end": 109,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 103,
                        "end": 109
                      }
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 121,
      "end": 217,
      "id": {
        "type": "TSQualifiedName",
        "start": 128,
        "end": 133,
        "left": {
          "type": "TSQualifiedName",
          "start": 128,
          "end": 131,
          "left": {
            "type": "Identifier",
            "start": 128,
            "end": 129,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 130,
            "end": 131,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 132,
          "end": 133,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 134,
        "end": 217,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 140,
            "end": 215,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 147,
              "end": 215,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 153,
                "end": 164,
                "decorators": [],
                "name": "ContextMenu",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "start": 173,
                "end": 185,
                "decorators": [],
                "name": "EventManager",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 186,
                "end": 215,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 196,
                    "end": 209,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 196,
                      "end": 200,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 200,
                      "end": 208,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 202,
                        "end": 208
                      }
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
