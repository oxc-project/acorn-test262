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
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 28
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 31,
              "end": 33
            },
            "expression": false,
            "start": 18,
            "end": 33
          }
        ],
        "start": 12,
        "end": 35
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 35
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 47
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 64
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 67,
              "end": 69
            },
            "expression": false,
            "start": 54,
            "end": 69
          }
        ],
        "start": 48,
        "end": 71
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 36,
      "end": 71
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ns",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 93
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 107,
                      "end": 113
                    },
                    "start": 105,
                    "end": 113
                  },
                  "start": 104,
                  "end": 113
                },
                "init": null,
                "definite": false,
                "start": 104,
                "end": 113
              }
            ],
            "declare": false,
            "start": 100,
            "end": 114
          }
        ],
        "start": 94,
        "end": 116
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 73,
      "end": 116
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
            "name": "foge",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 128,
                    "end": 129
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 130,
                    "end": 131
                  },
                  "start": 128,
                  "end": 131
                },
                "typeArguments": null,
                "start": 128,
                "end": 131
              },
              "start": 126,
              "end": 131
            },
            "start": 122,
            "end": 131
          },
          "init": null,
          "definite": false,
          "start": 122,
          "end": 131
        }
      ],
      "declare": false,
      "start": 118,
      "end": 132
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 142,
                    "end": 143
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 144,
                    "end": 145
                  },
                  "start": 142,
                  "end": 145
                },
                "typeArguments": null,
                "start": 142,
                "end": 145
              },
              "start": 140,
              "end": 145
            },
            "start": 137,
            "end": 145
          },
          "init": null,
          "definite": false,
          "start": 137,
          "end": 145
        }
      ],
      "declare": false,
      "start": 133,
      "end": 146
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ns",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 154,
                    "end": 156
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 157,
                    "end": 158
                  },
                  "start": 154,
                  "end": 158
                },
                "typeArguments": null,
                "start": 154,
                "end": 158
              },
              "start": 152,
              "end": 158
            },
            "start": 151,
            "end": 158
          },
          "init": null,
          "definite": false,
          "start": 151,
          "end": 158
        }
      ],
      "declare": false,
      "start": 147,
      "end": 159
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 159
}
```
