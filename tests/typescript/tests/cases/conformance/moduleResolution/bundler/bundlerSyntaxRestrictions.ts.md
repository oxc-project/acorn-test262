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
            "name": "require",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 25,
                      "end": 29
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 31,
                          "end": 34
                        },
                        "start": 31,
                        "end": 36
                      },
                      "start": 29,
                      "end": 36
                    },
                    "value": null,
                    "start": 22,
                    "end": 36
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 41,
                    "end": 44
                  },
                  "start": 38,
                  "end": 44
                },
                "start": 21,
                "end": 44
              },
              "start": 19,
              "end": 44
            },
            "start": 12,
            "end": 44
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 44
        }
      ],
      "declare": true,
      "start": 0,
      "end": 45
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 46
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
        "value": "fs",
        "raw": "\"fs\"",
        "start": 15,
        "end": 19
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
                "name": "readFileSync",
                "optional": false,
                "typeAnnotation": null,
                "start": 42,
                "end": 54
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "path",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 61,
                      "end": 67
                    },
                    "start": 59,
                    "end": 67
                  },
                  "start": 55,
                  "end": 67
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "encoding",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 80,
                      "end": 86
                    },
                    "start": 78,
                    "end": 86
                  },
                  "start": 69,
                  "end": 86
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 89,
                  "end": 95
                },
                "start": 87,
                "end": 95
              },
              "body": null,
              "expression": false,
              "start": 33,
              "end": 96
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 26,
            "end": 96
          }
        ],
        "start": 20,
        "end": 98
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 98
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "path",
        "raw": "\"path\"",
        "start": 114,
        "end": 120
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fs",
              "optional": false,
              "typeAnnotation": null,
              "start": 134,
              "end": 136
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "fs",
                "raw": "\"fs\"",
                "start": 147,
                "end": 151
              },
              "start": 139,
              "end": 152
            },
            "importKind": "value",
            "start": 127,
            "end": 153
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "path",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 178
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
                          "name": "sep",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 207,
                              "end": 213
                            },
                            "start": 205,
                            "end": 213
                          },
                          "start": 202,
                          "end": 213
                        },
                        "init": null,
                        "definite": false,
                        "start": 202,
                        "end": 213
                      }
                    ],
                    "declare": false,
                    "start": 196,
                    "end": 214
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 189,
                  "end": 214
                }
              ],
              "start": 179,
              "end": 220
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 164,
            "end": 220
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "path",
              "optional": false,
              "typeAnnotation": null,
              "start": 234,
              "end": 238
            },
            "start": 225,
            "end": 239
          }
        ],
        "start": 121,
        "end": 247
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 99,
      "end": 247
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 248
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 15,
        "end": 20
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 21
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "Literal",
          "value": "./a",
          "raw": "\"./a\"",
          "start": 29,
          "end": 34
        },
        "options": null,
        "phase": null,
        "start": 22,
        "end": 35
      },
      "directive": null,
      "start": 22,
      "end": 36
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 44
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 54
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./a",
                "raw": "\"./a\"",
                "start": 55,
                "end": 60
              }
            ],
            "optional": false,
            "start": 47,
            "end": 61
          },
          "definite": false,
          "start": 43,
          "end": 61
        }
      ],
      "declare": false,
      "start": 37,
      "end": 62
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "_",
          "optional": false,
          "typeAnnotation": null,
          "start": 63,
          "end": 64
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 65,
          "end": 66
        },
        "optional": false,
        "computed": false,
        "start": 63,
        "end": 66
      },
      "directive": null,
      "start": 63,
      "end": 67
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 75
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 15,
        "end": 20
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 21
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_",
        "optional": false,
        "typeAnnotation": null,
        "start": 29,
        "end": 30
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./a",
          "raw": "\"./a\"",
          "start": 41,
          "end": 46
        },
        "start": 33,
        "end": 47
      },
      "importKind": "value",
      "start": 22,
      "end": 48
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 77,
        "end": 79
      },
      "start": 68,
      "end": 80
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 90,
      "end": 100
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 101
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
            },
            "init": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 17,
              "end": 20
            },
            "definite": false,
            "start": 13,
            "end": 20
          }
        ],
        "declare": false,
        "start": 7,
        "end": 21
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 21
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 21
}
```
