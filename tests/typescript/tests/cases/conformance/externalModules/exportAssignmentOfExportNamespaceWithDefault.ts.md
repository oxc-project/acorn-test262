__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 64
          },
          "start": 63,
          "end": 64
        }
      ],
      "source": {
        "type": "Literal",
        "value": "a",
        "raw": "\"a\"",
        "start": 70,
        "end": 73
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 56,
      "end": 74
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 75,
          "end": 76
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 75,
        "end": 78
      },
      "directive": null,
      "start": 75,
      "end": 79
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 56,
  "end": 80
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "b",
        "raw": "\"b\"",
        "start": 15,
        "end": 18
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 42
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 46,
                  "end": 50
                },
                "start": 44,
                "end": 50
              },
              "body": null,
              "expression": false,
              "start": 32,
              "end": 51
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 25,
            "end": 51
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 73,
                "end": 74
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
                          "name": "_a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 100,
                                "end": 101
                              },
                              "typeArguments": null,
                              "start": 93,
                              "end": 101
                            },
                            "start": 91,
                            "end": 101
                          },
                          "start": 89,
                          "end": 101
                        },
                        "init": null,
                        "definite": false,
                        "start": 89,
                        "end": 101
                      }
                    ],
                    "declare": false,
                    "start": 85,
                    "end": 102
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": null,
                    "specifiers": [
                      {
                        "type": "ExportSpecifier",
                        "local": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 120,
                          "end": 122
                        },
                        "exported": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "default",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 126,
                          "end": 133
                        },
                        "exportKind": "value",
                        "start": 120,
                        "end": 133
                      }
                    ],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 111,
                    "end": 136
                  }
                ],
                "start": 75,
                "end": 142
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 63,
              "end": 142
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 56,
            "end": 142
          },
          {
            "type": "ExportDefaultDeclaration",
            "declaration": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 163
            },
            "exportKind": "value",
            "start": 147,
            "end": 164
          }
        ],
        "start": 19,
        "end": 166
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 166
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "a",
        "raw": "\"a\"",
        "start": 183,
        "end": 186
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ImportDeclaration",
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "imported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 202,
                  "end": 203
                },
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 202,
                  "end": 203
                },
                "importKind": "value",
                "start": 202,
                "end": 203
              }
            ],
            "source": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 211,
              "end": 214
            },
            "phase": null,
            "attributes": [],
            "importKind": "value",
            "start": 193,
            "end": 215
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 229,
              "end": 230
            },
            "start": 220,
            "end": 231
          }
        ],
        "start": 187,
        "end": 233
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 168,
      "end": 233
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 233
}
```
