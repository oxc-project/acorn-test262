__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 130,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 82,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 82,
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 82,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 80,
              "attributes": [],
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 29,
                "end": 80,
                "body": {
                  "type": "TSModuleBlock",
                  "start": 38,
                  "end": 80,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 48,
                      "end": 74,
                      "attributes": [],
                      "declaration": {
                        "type": "ClassDeclaration",
                        "start": 55,
                        "end": 74,
                        "abstract": false,
                        "body": {
                          "type": "ClassBody",
                          "start": 63,
                          "end": 74,
                          "body": []
                        },
                        "declare": false,
                        "decorators": [],
                        "id": {
                          "type": "Identifier",
                          "start": 61,
                          "end": 62,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "implements": [],
                        "superClass": null,
                        "superTypeArguments": null,
                        "typeParameters": null
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
                  "start": 36,
                  "end": 37,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "module"
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
          "start": 14,
          "end": 15,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 84,
      "end": 99,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 92,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 95,
        "end": 98,
        "left": {
          "type": "Identifier",
          "start": 95,
          "end": 96,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 97,
          "end": 98,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 100,
      "end": 130,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 107,
        "end": 130,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 111,
            "end": 129,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 111,
              "end": 117,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 112,
                "end": 117,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 114,
                  "end": 117,
                  "typeArguments": null,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 114,
                    "end": 117,
                    "left": {
                      "type": "Identifier",
                      "start": 114,
                      "end": 115,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 116,
                      "end": 117,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            },
            "init": {
              "type": "NewExpression",
              "start": 120,
              "end": 129,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 124,
                "end": 127,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 125,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 127,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeArguments": null
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
