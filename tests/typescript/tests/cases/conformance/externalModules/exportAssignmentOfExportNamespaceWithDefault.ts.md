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
      "source": {
        "type": "Literal",
        "start": 70,
        "end": 73,
        "value": "a",
        "raw": "\"a\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 75,
      "end": 79,
      "expression": {
        "type": "CallExpression",
        "start": 75,
        "end": 78,
        "callee": {
          "type": "Identifier",
          "start": 75,
          "end": 76,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
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
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 18,
        "value": "b",
        "raw": "\"b\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 166,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 25,
            "end": 51,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 32,
              "end": 51,
              "id": {
                "type": "Identifier",
                "start": 41,
                "end": 42,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": null,
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 56,
            "end": 142,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 63,
              "end": 142,
              "id": {
                "type": "Identifier",
                "start": 73,
                "end": 74,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 75,
                "end": 142,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 85,
                    "end": 102,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 89,
                        "end": 101,
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
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 111,
                    "end": 136,
                    "declaration": null,
                    "specifiers": [
                      {
                        "type": "ExportSpecifier",
                        "start": 120,
                        "end": 133,
                        "local": {
                          "type": "Identifier",
                          "start": 120,
                          "end": 122,
                          "decorators": [],
                          "name": "_a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "exported": {
                          "type": "Identifier",
                          "start": 126,
                          "end": 133,
                          "decorators": [],
                          "name": "default",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "exportKind": "value"
                      }
                    ],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  }
                ]
              },
              "kind": "namespace",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 168,
      "end": 233,
      "id": {
        "type": "Literal",
        "start": 183,
        "end": 186,
        "value": "a",
        "raw": "\"a\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 187,
        "end": 233,
        "body": [
          {
            "type": "ImportDeclaration",
            "start": 193,
            "end": 215,
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
                "local": {
                  "type": "Identifier",
                  "start": 202,
                  "end": 203,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "importKind": "value"
              }
            ],
            "source": {
              "type": "Literal",
              "start": 211,
              "end": 214,
              "value": "b",
              "raw": "\"b\""
            },
            "phase": null,
            "attributes": [],
            "importKind": "value"
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
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
