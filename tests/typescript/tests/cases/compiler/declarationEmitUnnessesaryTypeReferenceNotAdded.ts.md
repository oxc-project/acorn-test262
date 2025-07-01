__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "thing",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 23
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ParsedArgs",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 50
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 51,
              "end": 53
            },
            "declare": false,
            "start": 30,
            "end": 53
          }
        ],
        "start": 24,
        "end": 55
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 55
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "thing",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 78
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 82,
              "end": 85
            },
            "start": 80,
            "end": 85
          },
          "start": 79,
          "end": 85
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "thing",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 93
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "ParsedArgs",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 104
            },
            "start": 88,
            "end": 104
          },
          "typeArguments": null,
          "start": 88,
          "end": 104
        },
        "start": 86,
        "end": 104
      },
      "body": null,
      "expression": false,
      "start": 56,
      "end": 105
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "thing",
        "optional": false,
        "typeAnnotation": null,
        "start": 115,
        "end": 120
      },
      "start": 106,
      "end": 121
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 121
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
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
            "start": 14,
            "end": 24
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 24
        }
      ],
      "declare": true,
      "start": 0,
      "end": 25
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "thing",
        "optional": false,
        "typeAnnotation": null,
        "start": 35,
        "end": 40
      },
      "start": 26,
      "end": 41
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 41
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "minimist",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 15
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "minimist",
          "raw": "'minimist'",
          "start": 26,
          "end": 36
        },
        "start": 18,
        "end": 37
      },
      "importKind": "value",
      "start": 0,
      "end": 38
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "process",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 53
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "process",
          "raw": "'process'",
          "start": 64,
          "end": 73
        },
        "start": 56,
        "end": 74
      },
      "importKind": "value",
      "start": 39,
      "end": 75
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "parseArgs",
          "optional": false,
          "typeAnnotation": null,
          "start": 101,
          "end": 110
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "minimist",
                "optional": false,
                "typeAnnotation": null,
                "start": 114,
                "end": 122
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ParsedArgs",
                "optional": false,
                "typeAnnotation": null,
                "start": 123,
                "end": 133
              },
              "start": 114,
              "end": 133
            },
            "typeArguments": null,
            "start": 114,
            "end": 133
          },
          "start": 112,
          "end": 133
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "minimist",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 145,
                  "end": 153
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "process",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 154,
                          "end": 161
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "argv",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 162,
                          "end": 166
                        },
                        "optional": false,
                        "computed": false,
                        "start": 154,
                        "end": 166
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "slice",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 167,
                        "end": 172
                      },
                      "optional": false,
                      "computed": false,
                      "start": 154,
                      "end": 172
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 173,
                        "end": 174
                      }
                    ],
                    "optional": false,
                    "start": 154,
                    "end": 175
                  }
                ],
                "optional": false,
                "start": 145,
                "end": 176
              },
              "start": 138,
              "end": 177
            }
          ],
          "start": 134,
          "end": 179
        },
        "expression": false,
        "start": 92,
        "end": 179
      },
      "exportKind": "value",
      "start": 77,
      "end": 179
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 179
}
```
