__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 23,
                "end": 29
              },
              "start": 21,
              "end": 29
            },
            "start": 19,
            "end": 30
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "q",
                "optional": false,
                "typeAnnotation": null,
                "start": 36,
                "end": 37
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 40,
                "end": 47
              },
              "start": 38,
              "end": 47
            },
            "start": 35,
            "end": 48
          }
        ],
        "start": 13,
        "end": 50
      },
      "declare": false,
      "start": 0,
      "end": 50
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I3",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 64
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 75,
                "end": 81
              },
              "start": 73,
              "end": 81
            },
            "start": 71,
            "end": 82
          }
        ],
        "start": 65,
        "end": 84
      },
      "declare": false,
      "start": 52,
      "end": 84
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
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 94,
                  "end": 96
                },
                "typeArguments": null,
                "start": 94,
                "end": 96
              },
              "start": 92,
              "end": 96
            },
            "start": 90,
            "end": 96
          },
          "init": null,
          "definite": false,
          "start": 90,
          "end": 96
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 102,
                  "end": 104
                },
                "typeArguments": null,
                "start": 102,
                "end": 104
              },
              "start": 100,
              "end": 104
            },
            "start": 98,
            "end": 104
          },
          "init": null,
          "definite": false,
          "start": 98,
          "end": 104
        }
      ],
      "declare": false,
      "start": 86,
      "end": 105
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
            "name": "e1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 115,
                      "end": 117
                    },
                    "typeArguments": null,
                    "start": 115,
                    "end": 117
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 120,
                      "end": 122
                    },
                    "typeArguments": null,
                    "start": 120,
                    "end": 122
                  }
                ],
                "start": 115,
                "end": 122
              },
              "start": 113,
              "end": 122
            },
            "start": 111,
            "end": 122
          },
          "init": null,
          "definite": false,
          "start": 111,
          "end": 122
        }
      ],
      "declare": false,
      "start": 107,
      "end": 123
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
            "name": "e2",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 130
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i2",
              "optional": false,
              "typeAnnotation": null,
              "start": 133,
              "end": 135
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "i3",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 141
            },
            "start": 133,
            "end": 141
          },
          "definite": false,
          "start": 128,
          "end": 141
        }
      ],
      "declare": false,
      "start": 124,
      "end": 142
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
            "name": "r1",
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 191
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "e1",
              "optional": false,
              "typeAnnotation": null,
              "start": 194,
              "end": 196
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 194,
            "end": 198
          },
          "definite": false,
          "start": 189,
          "end": 198
        }
      ],
      "declare": false,
      "start": 185,
      "end": 199
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 270,
            "end": 272
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "e2",
              "optional": false,
              "typeAnnotation": null,
              "start": 275,
              "end": 277
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 275,
            "end": 279
          },
          "definite": false,
          "start": 270,
          "end": 279
        }
      ],
      "declare": false,
      "start": 266,
      "end": 280
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 280
}
```
