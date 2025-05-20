__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 80,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 56,
      "end": 74,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 70,
        "end": 73,
        "raw": "\"a\"",
        "value": "a"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 63,
          "end": 64,
          "local": {
            "type": "Identifier",
            "start": 63,
            "end": 64,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 75,
      "end": 79,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 75,
        "end": 78,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 75,
          "end": 76,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 233,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 166,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 166,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 25,
            "end": 51,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 32,
              "end": 51,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 41,
                "end": 42,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 44,
                "end": 50,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 46,
                  "end": 50
                }
              },
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 56,
            "end": 142,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 63,
              "end": 142,
              "body": {
                "type": "TSModuleBlock",
                "start": 75,
                "end": 142,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 85,
                    "end": 102,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 89,
                        "end": 101,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 89,
                          "end": 101,
                          "decorators": [],
                          "name": "_a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 91,
                            "end": 101,
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "start": 93,
                              "end": 101,
                              "exprName": {
                                "type": "Identifier",
                                "start": 100,
                                "end": 101,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 111,
                    "end": 136,
                    "attributes": [],
                    "declaration": null,
                    "exportKind": "value",
                    "source": null,
                    "specifiers": [
                      {
                        "type": "ExportSpecifier",
                        "start": 120,
                        "end": 133,
                        "exported": {
                          "type": "Identifier",
                          "start": 126,
                          "end": 133,
                          "decorators": [],
                          "name": "default",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "exportKind": "value",
                        "local": {
                          "type": "Identifier",
                          "start": 120,
                          "end": 122,
                          "decorators": [],
                          "name": "_a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  }
                ]
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "start": 73,
                "end": 74,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "namespace"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportDefaultDeclaration",
            "start": 147,
            "end": 164,
            "declaration": {
              "type": "Identifier",
              "start": 162,
              "end": 163,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "exportKind": "value"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 18,
        "raw": "\"b\"",
        "value": "b"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 168,
      "end": 233,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 187,
        "end": 233,
        "body": [
          {
            "type": "ImportDeclaration",
            "start": 193,
            "end": 215,
            "importKind": "value",
            "source": {
              "type": "Literal",
              "start": 211,
              "end": 214,
              "raw": "\"b\"",
              "value": "b"
            },
            "specifiers": [
              {
                "type": "ImportSpecifier",
                "start": 202,
                "end": 203,
                "imported": {
                  "type": "Identifier",
                  "start": 202,
                  "end": 203,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "importKind": "value",
                "local": {
                  "type": "Identifier",
                  "start": 202,
                  "end": 203,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "phase": null,
            "attributes": []
          },
          {
            "type": "TSExportAssignment",
            "start": 220,
            "end": 231,
            "expression": {
              "type": "Identifier",
              "start": 229,
              "end": 230,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 183,
        "end": 186,
        "raw": "\"a\"",
        "value": "a"
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
