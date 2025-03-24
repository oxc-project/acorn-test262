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
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 82,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 82,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 80,
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 29,
                "end": 80,
                "id": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 37,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "body": {
                  "type": "TSModuleBlock",
                  "start": 38,
                  "end": 80,
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 48,
                      "end": 74,
                      "declaration": {
                        "type": "ClassDeclaration",
                        "start": 55,
                        "end": 74,
                        "id": {
                          "type": "Identifier",
                          "start": 61,
                          "end": 62,
                          "name": "c",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "superClass": null,
                        "body": {
                          "type": "ClassBody",
                          "start": 63,
                          "end": 74,
                          "body": []
                        },
                        "decorators": [],
                        "typeParameters": null,
                        "implements": [],
                        "abstract": false,
                        "declare": false,
                        "superTypeArguments": null
                      },
                      "specifiers": [],
                      "source": null,
                      "attributes": [],
                      "exportKind": "value"
                    }
                  ]
                },
                "kind": "module",
                "declare": false,
                "global": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "value"
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 84,
      "end": 99,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 92,
        "name": "b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 95,
        "end": 98,
        "left": {
          "type": "Identifier",
          "start": 95,
          "end": 96,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 97,
          "end": 98,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 100,
      "end": 130,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 107,
        "end": 130,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 111,
            "end": 129,
            "id": {
              "type": "Identifier",
              "start": 111,
              "end": 117,
              "name": "x",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 112,
                "end": 117,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 114,
                  "end": 117,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 114,
                    "end": 117,
                    "left": {
                      "type": "Identifier",
                      "start": 114,
                      "end": 115,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 116,
                      "end": 117,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeArguments": null
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "NewExpression",
              "start": 120,
              "end": 129,
              "callee": {
                "type": "MemberExpression",
                "start": 124,
                "end": 127,
                "object": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 125,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 127,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
