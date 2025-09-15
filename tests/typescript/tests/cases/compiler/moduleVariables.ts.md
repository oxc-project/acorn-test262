__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 21,
                "end": 24
              },
              "start": 19,
              "end": 24
            },
            "start": 12,
            "end": 24
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 24
        }
      ],
      "declare": true,
      "start": 0,
      "end": 25
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
            "start": 32,
            "end": 33
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 36,
            "end": 37
          },
          "definite": false,
          "start": 32,
          "end": 37
        }
      ],
      "declare": false,
      "start": 28,
      "end": 38
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 50
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
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
                    "start": 68,
                    "end": 69
                  },
                  "init": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 72,
                    "end": 73
                  },
                  "definite": false,
                  "start": 68,
                  "end": 73
                }
              ],
              "declare": false,
              "start": 64,
              "end": 74
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 57,
            "end": 74
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 79,
                  "end": 86
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 90
                },
                "optional": false,
                "computed": false,
                "start": 79,
                "end": 90
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 91,
                  "end": 92
                }
              ],
              "optional": false,
              "start": 79,
              "end": 93
            },
            "directive": null,
            "start": 79,
            "end": 94
          }
        ],
        "start": 51,
        "end": 101
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 39,
      "end": 101
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 114,
        "end": 115
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 122,
                  "end": 129
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 130,
                  "end": 133
                },
                "optional": false,
                "computed": false,
                "start": 122,
                "end": 133
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 134,
                  "end": 135
                }
              ],
              "optional": false,
              "start": 122,
              "end": 136
            },
            "directive": null,
            "start": 122,
            "end": 137
          }
        ],
        "start": 116,
        "end": 144
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 104,
      "end": 144
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 157,
        "end": 158
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
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
                  "start": 169,
                  "end": 170
                },
                "init": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 173,
                  "end": 174
                },
                "definite": false,
                "start": 169,
                "end": 174
              }
            ],
            "declare": false,
            "start": 165,
            "end": 175
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 180,
                  "end": 187
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 188,
                  "end": 191
                },
                "optional": false,
                "computed": false,
                "start": 180,
                "end": 191
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 192,
                  "end": 193
                }
              ],
              "optional": false,
              "start": 180,
              "end": 194
            },
            "directive": null,
            "start": 180,
            "end": 195
          }
        ],
        "start": 159,
        "end": 202
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 147,
      "end": 202
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 202
}
```
