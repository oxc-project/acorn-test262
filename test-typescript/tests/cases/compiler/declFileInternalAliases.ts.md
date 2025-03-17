__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 216,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 39,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "m",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 39,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 37,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 22,
              "end": 37,
              "id": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 30,
                "end": 37,
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
    {
      "type": "TSModuleDeclaration",
      "start": 40,
      "end": 125,
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 49,
        "name": "m1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 50,
        "end": 125,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 56,
            "end": 71,
            "id": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 67,
              "end": 70,
              "left": {
                "type": "Identifier",
                "start": 67,
                "end": 68,
                "name": "m",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 69,
                "end": 70,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 76,
            "end": 99,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 83,
              "end": 99,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 87,
                  "end": 98,
                  "id": {
                    "type": "Identifier",
                    "start": 87,
                    "end": 88,
                    "name": "d",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 91,
                    "end": 98,
                    "callee": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 96,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
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
    },
    {
      "type": "TSModuleDeclaration",
      "start": 126,
      "end": 216,
      "id": {
        "type": "Identifier",
        "start": 133,
        "end": 135,
        "name": "m2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 136,
        "end": 216,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 142,
            "end": 164,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 149,
              "end": 164,
              "id": {
                "type": "Identifier",
                "start": 156,
                "end": 157,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "start": 160,
                "end": 163,
                "left": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 161,
                  "name": "m",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 162,
                  "end": 163,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 169,
            "end": 192,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 176,
              "end": 192,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 180,
                  "end": 191,
                  "id": {
                    "type": "Identifier",
                    "start": 180,
                    "end": 181,
                    "name": "d",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 184,
                    "end": 191,
                    "callee": {
                      "type": "Identifier",
                      "start": 188,
                      "end": 189,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
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
