__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 172,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 59,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 59,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 14,
            "end": 57,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 21,
              "end": 57,
              "id": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 30,
                "end": 57,
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "start": 40,
                    "end": 51,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 46,
                      "end": 47,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "start": 48,
                      "end": 51,
                      "body": []
                    },
                    "abstract": false,
                    "declare": false
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
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
      "start": 60,
      "end": 127,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 68,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 69,
        "end": 127,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 75,
            "end": 125,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 82,
              "end": 125,
              "id": {
                "type": "Identifier",
                "start": 89,
                "end": 90,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 91,
                "end": 125,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 101,
                    "end": 119,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 108,
                      "end": 119,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 114,
                        "end": 115,
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "start": 116,
                        "end": 119,
                        "body": []
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
      "type": "VariableDeclaration",
      "start": 129,
      "end": 138,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 133,
          "end": 137,
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 137,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 134,
              "end": 137,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 136,
                "end": 137,
                "typeName": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 137,
                  "decorators": [],
                  "name": "A",
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
    },
    {
      "type": "VariableDeclaration",
      "start": 139,
      "end": 148,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 143,
          "end": 147,
          "id": {
            "type": "Identifier",
            "start": 143,
            "end": 147,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 144,
              "end": 147,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 146,
                "end": 147,
                "typeName": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 147,
                  "decorators": [],
                  "name": "B",
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
    },
    {
      "type": "ExpressionStatement",
      "start": 150,
      "end": 156,
      "expression": {
        "type": "AssignmentExpression",
        "start": 150,
        "end": 155,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 150,
          "end": 151,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 154,
          "end": 155,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 157,
      "end": 163,
      "expression": {
        "type": "AssignmentExpression",
        "start": 157,
        "end": 162,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 157,
          "end": 158,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 161,
          "end": 162,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
