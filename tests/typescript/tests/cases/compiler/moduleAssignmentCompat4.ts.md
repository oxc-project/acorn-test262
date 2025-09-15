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
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 35
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 52,
                      "end": 53
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 54,
                      "end": 57
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 46,
                    "end": 57
                  }
                ],
                "start": 36,
                "end": 63
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 24,
              "end": 63
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 17,
            "end": 63
          }
        ],
        "start": 12,
        "end": 65
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 65
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 76,
        "end": 77
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 101,
                "end": 102
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "ClassDeclaration",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 126,
                        "end": 127
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 128,
                        "end": 131
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 120,
                      "end": 131
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 113,
                    "end": 131
                  }
                ],
                "start": 103,
                "end": 137
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 91,
              "end": 137
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 84,
            "end": 137
          }
        ],
        "start": 78,
        "end": 139
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 66,
      "end": 139
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 149
                },
                "typeArguments": null,
                "start": 148,
                "end": 149
              },
              "start": 146,
              "end": 149
            },
            "start": 145,
            "end": 149
          },
          "init": null,
          "definite": false,
          "start": 145,
          "end": 149
        }
      ],
      "declare": false,
      "start": 141,
      "end": 150
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 158,
                  "end": 159
                },
                "typeArguments": null,
                "start": 158,
                "end": 159
              },
              "start": 156,
              "end": 159
            },
            "start": 155,
            "end": 159
          },
          "init": null,
          "definite": false,
          "start": 155,
          "end": 159
        }
      ],
      "declare": false,
      "start": 151,
      "end": 160
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 162,
          "end": 163
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 166,
          "end": 167
        },
        "start": 162,
        "end": 167
      },
      "directive": null,
      "start": 162,
      "end": 168
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 169,
          "end": 170
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 173,
          "end": 174
        },
        "start": 169,
        "end": 174
      },
      "directive": null,
      "start": 169,
      "end": 175
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 184
}
```
