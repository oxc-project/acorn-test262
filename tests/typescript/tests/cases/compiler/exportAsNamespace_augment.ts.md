__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSNamespaceExportDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 20,
        "end": 21
      },
      "start": 0,
      "end": 22
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 40,
              "end": 41
            },
            "definite": false,
            "start": 36,
            "end": 41
          }
        ],
        "declare": false,
        "start": 30,
        "end": 42
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 23,
      "end": 42
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "conflict",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 64
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 67,
              "end": 68
            },
            "definite": false,
            "start": 56,
            "end": 68
          }
        ],
        "declare": false,
        "start": 50,
        "end": 69
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 43,
      "end": 69
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 70
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 14
          },
          "start": 7,
          "end": 14
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 20,
        "end": 25
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 26
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 42
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 60
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 84,
                          "end": 85
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 88,
                          "end": 89
                        },
                        "definite": false,
                        "start": 84,
                        "end": 89
                      }
                    ],
                    "declare": false,
                    "start": 78,
                    "end": 90
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 71,
                  "end": 90
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "conflict",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 112,
                          "end": 120
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 123,
                          "end": 124
                        },
                        "definite": false,
                        "start": 112,
                        "end": 124
                      }
                    ],
                    "declare": false,
                    "start": 106,
                    "end": 125
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 99,
                  "end": 125
                }
              ],
              "start": 61,
              "end": 131
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 49,
            "end": 131
          }
        ],
        "start": 43,
        "end": 133
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 28,
      "end": 133
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 150,
        "end": 155
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 175,
                    "end": 176
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 179,
                    "end": 180
                  },
                  "definite": false,
                  "start": 175,
                  "end": 180
                }
              ],
              "declare": false,
              "start": 169,
              "end": 181
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 162,
            "end": 181
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "conflict",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 199,
                    "end": 207
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 210,
                    "end": 211
                  },
                  "definite": false,
                  "start": 199,
                  "end": 211
                }
              ],
              "declare": false,
              "start": 193,
              "end": 212
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 186,
            "end": 212
          }
        ],
        "start": 156,
        "end": 214
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 135,
      "end": 214
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 216,
                "end": 217
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 218,
                "end": 219
              },
              "optional": false,
              "computed": false,
              "start": 216,
              "end": 219
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 222,
                "end": 223
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 224,
                "end": 225
              },
              "optional": false,
              "computed": false,
              "start": 222,
              "end": 225
            },
            "start": 216,
            "end": 225
          },
          "operator": "+",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 228,
              "end": 229
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 230,
              "end": 231
            },
            "optional": false,
            "computed": false,
            "start": 228,
            "end": 231
          },
          "start": 216,
          "end": 231
        },
        "operator": "+",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 234,
            "end": 235
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "conflict",
            "optional": false,
            "typeAnnotation": null,
            "start": 236,
            "end": 244
          },
          "optional": false,
          "computed": false,
          "start": 234,
          "end": 244
        },
        "start": 216,
        "end": 244
      },
      "directive": null,
      "start": 216,
      "end": 245
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 246,
                "end": 248
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 249,
                "end": 250
              },
              "optional": false,
              "computed": false,
              "start": 246,
              "end": 250
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 253,
                "end": 255
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 256,
                "end": 257
              },
              "optional": false,
              "computed": false,
              "start": 253,
              "end": 257
            },
            "start": 246,
            "end": 257
          },
          "operator": "+",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 260,
              "end": 262
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 263,
              "end": 264
            },
            "optional": false,
            "computed": false,
            "start": 260,
            "end": 264
          },
          "start": 246,
          "end": 264
        },
        "operator": "+",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 267,
            "end": 269
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "conflict",
            "optional": false,
            "typeAnnotation": null,
            "start": 270,
            "end": 278
          },
          "optional": false,
          "computed": false,
          "start": 267,
          "end": 278
        },
        "start": 246,
        "end": 278
      },
      "directive": null,
      "start": 246,
      "end": 279
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 279
}
```
