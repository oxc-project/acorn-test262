__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 193,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 25,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 24,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 24,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 24,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 21,
                "end": 24
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 28,
      "end": 38,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 37,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 33,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 36,
            "end": 37,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 39,
      "end": 98,
      "body": {
        "type": "TSModuleBlock",
        "start": 48,
        "end": 98,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 54,
            "end": 71,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 61,
              "end": 71,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 65,
                  "end": 70,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 66,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 69,
                    "end": 70,
                    "raw": "2",
                    "value": 2,
                    "regex": null,
                    "bigint": null
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExpressionStatement",
            "start": 76,
            "end": 91,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 76,
              "end": 90,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 88,
                  "end": 89,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 76,
                "end": 87,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 83,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 84,
                  "end": 87,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 47,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 101,
      "end": 138,
      "body": {
        "type": "TSModuleBlock",
        "start": 110,
        "end": 138,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 116,
            "end": 131,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 116,
              "end": 130,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 128,
                  "end": 129,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 116,
                "end": 127,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 123,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 127,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 109,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 141,
      "end": 193,
      "body": {
        "type": "TSModuleBlock",
        "start": 150,
        "end": 193,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 156,
            "end": 166,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 160,
                "end": 165,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 161,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 164,
                  "end": 165,
                  "raw": "3",
                  "value": 3,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 171,
            "end": 186,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 171,
              "end": 185,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 183,
                  "end": 184,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 171,
                "end": 182,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 171,
                  "end": 178,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 179,
                  "end": 182,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 148,
        "end": 149,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
