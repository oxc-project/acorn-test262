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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 18,
                  "end": 19
                },
                "typeArguments": null,
                "start": 18,
                "end": 19
              },
              "start": 16,
              "end": 19
            },
            "start": 14,
            "end": 20
          }
        ],
        "start": 12,
        "end": 22
      },
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "EmptyStatement",
      "start": 22,
      "end": 23
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
                  "start": 39,
                  "end": 40
                },
                "typeArguments": null,
                "start": 39,
                "end": 40
              },
              "start": 37,
              "end": 40
            },
            "start": 36,
            "end": 40
          },
          "init": null,
          "definite": false,
          "start": 36,
          "end": 40
        }
      ],
      "declare": true,
      "start": 24,
      "end": 41
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 47
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 51
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 50,
            "end": 53
          },
          "definite": false,
          "start": 46,
          "end": 53
        }
      ],
      "declare": false,
      "start": 42,
      "end": 54
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 67
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 74,
                  "end": 75
                },
                "typeArguments": null,
                "start": 74,
                "end": 75
              },
              "start": 72,
              "end": 75
            },
            "start": 70,
            "end": 76
          }
        ],
        "start": 68,
        "end": 78
      },
      "declare": false,
      "start": 56,
      "end": 78
    },
    {
      "type": "EmptyStatement",
      "start": 78,
      "end": 79
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
                  "start": 95,
                  "end": 96
                },
                "typeArguments": null,
                "start": 95,
                "end": 96
              },
              "start": 93,
              "end": 96
            },
            "start": 92,
            "end": 96
          },
          "init": null,
          "definite": false,
          "start": 92,
          "end": 96
        }
      ],
      "declare": true,
      "start": 80,
      "end": 97
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 102,
            "end": 103
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 107
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 106,
            "end": 109
          },
          "definite": false,
          "start": 102,
          "end": 109
        }
      ],
      "declare": false,
      "start": 98,
      "end": 110
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 122,
        "end": 123
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 130,
                  "end": 131
                },
                "typeArguments": null,
                "start": 130,
                "end": 131
              },
              "start": 128,
              "end": 131
            },
            "start": 126,
            "end": 132
          }
        ],
        "start": 124,
        "end": 134
      },
      "declare": false,
      "start": 112,
      "end": 134
    },
    {
      "type": "EmptyStatement",
      "start": 134,
      "end": 135
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 151,
                  "end": 152
                },
                "typeArguments": null,
                "start": 151,
                "end": 152
              },
              "start": 149,
              "end": 152
            },
            "start": 148,
            "end": 152
          },
          "init": null,
          "definite": false,
          "start": 148,
          "end": 152
        }
      ],
      "declare": true,
      "start": 136,
      "end": 153
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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 159
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 163
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 162,
            "end": 165
          },
          "definite": false,
          "start": 158,
          "end": 165
        }
      ],
      "declare": false,
      "start": 154,
      "end": 166
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 168,
          "end": 169
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 172,
          "end": 173
        },
        "start": 168,
        "end": 173
      },
      "directive": null,
      "start": 168,
      "end": 174
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 174
}
```
