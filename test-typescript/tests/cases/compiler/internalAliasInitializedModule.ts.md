__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 144,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 75,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 75,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 73,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 22,
              "end": 73,
              "id": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 31,
                "end": 73,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 41,
                    "end": 67,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 48,
                      "end": 67,
                      "id": {
                        "type": "Identifier",
                        "start": 54,
                        "end": 55,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "superClass": null,
                      "body": {
                        "type": "ClassBody",
                        "start": 56,
                        "end": 67,
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
    {
      "type": "TSModuleDeclaration",
      "start": 77,
      "end": 144,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 85,
        "name": "c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 86,
        "end": 144,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 92,
            "end": 107,
            "id": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 103,
              "end": 106,
              "left": {
                "type": "Identifier",
                "start": 103,
                "end": 104,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 105,
                "end": 106,
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
            "start": 112,
            "end": 142,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 119,
              "end": 142,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 123,
                  "end": 141,
                  "id": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 129,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 124,
                      "end": 129,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 126,
                        "end": 129,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 126,
                          "end": 129,
                          "left": {
                            "type": "Identifier",
                            "start": 126,
                            "end": 127,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 128,
                            "end": 129,
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
                    "start": 132,
                    "end": 141,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 136,
                      "end": 139,
                      "object": {
                        "type": "Identifier",
                        "start": 136,
                        "end": 137,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 138,
                        "end": 139,
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
