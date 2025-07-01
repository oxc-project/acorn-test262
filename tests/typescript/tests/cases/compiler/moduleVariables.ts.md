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
        "start": 46,
        "end": 47
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
                    "start": 65,
                    "end": 66
                  },
                  "init": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 69,
                    "end": 70
                  },
                  "definite": false,
                  "start": 65,
                  "end": 70
                }
              ],
              "declare": false,
              "start": 61,
              "end": 71
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 54,
            "end": 71
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
                  "start": 76,
                  "end": 83
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 84,
                  "end": 87
                },
                "optional": false,
                "computed": false,
                "start": 76,
                "end": 87
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 89
                }
              ],
              "optional": false,
              "start": 76,
              "end": 90
            },
            "directive": null,
            "start": 76,
            "end": 91
          }
        ],
        "start": 48,
        "end": 98
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 39,
      "end": 98
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 109
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
                  "start": 116,
                  "end": 123
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 124,
                  "end": 127
                },
                "optional": false,
                "computed": false,
                "start": 116,
                "end": 127
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 128,
                  "end": 129
                }
              ],
              "optional": false,
              "start": 116,
              "end": 130
            },
            "directive": null,
            "start": 116,
            "end": 131
          }
        ],
        "start": 110,
        "end": 138
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 101,
      "end": 138
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 148,
        "end": 149
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
                  "start": 160,
                  "end": 161
                },
                "init": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 164,
                  "end": 165
                },
                "definite": false,
                "start": 160,
                "end": 165
              }
            ],
            "declare": false,
            "start": 156,
            "end": 166
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
                  "start": 171,
                  "end": 178
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 179,
                  "end": 182
                },
                "optional": false,
                "computed": false,
                "start": 171,
                "end": 182
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 183,
                  "end": 184
                }
              ],
              "optional": false,
              "start": 171,
              "end": 185
            },
            "directive": null,
            "start": 171,
            "end": 186
          }
        ],
        "start": 150,
        "end": 193
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 141,
      "end": 193
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 193
}
```
