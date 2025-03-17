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
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                    "id": {
                      "type": "Identifier",
                      "start": 46,
                      "end": 47,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 48,
                      "end": 51,
                      "body": []
                    },
                    "decorators": [],
                    "typeParameters": null,
                    "implements": [],
                    "abstract": false,
                    "declare": false,
                    "superTypeArguments": null
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
      "start": 60,
      "end": 127,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 68,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "id": {
                        "type": "Identifier",
                        "start": 114,
                        "end": 115,
                        "name": "D",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "superClass": null,
                      "body": {
                        "type": "ClassBody",
                        "start": 116,
                        "end": 119,
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
      "type": "VariableDeclaration",
      "start": 129,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 133,
          "end": 137,
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 137,
            "name": "a",
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
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 139,
      "end": 148,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 143,
          "end": 147,
          "id": {
            "type": "Identifier",
            "start": 143,
            "end": 147,
            "name": "b",
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
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 154,
          "end": 155,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 161,
          "end": 162,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
