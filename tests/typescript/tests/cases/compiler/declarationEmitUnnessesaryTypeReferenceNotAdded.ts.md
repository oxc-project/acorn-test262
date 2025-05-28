__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 121,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 55,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 23,
        "decorators": [],
        "name": "thing",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 24,
        "end": 55,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 30,
            "end": 53,
            "id": {
              "type": "Identifier",
              "start": 40,
              "end": 50,
              "decorators": [],
              "name": "ParsedArgs",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 51,
              "end": 53,
              "body": []
            },
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 56,
      "end": 105,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 78,
        "decorators": [],
        "name": "thing",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 79,
          "end": 85,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 80,
            "end": 85,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 82,
              "end": 85
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 86,
        "end": 104,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 88,
          "end": 104,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 88,
            "end": 104,
            "left": {
              "type": "Identifier",
              "start": 88,
              "end": 93,
              "decorators": [],
              "name": "thing",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 94,
              "end": 104,
              "decorators": [],
              "name": "ParsedArgs",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSExportAssignment",
      "start": 106,
      "end": 121,
      "expression": {
        "type": "Identifier",
        "start": 115,
        "end": 120,
        "decorators": [],
        "name": "thing",
        "optional": false,
        "typeAnnotation": null
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
  "end": 41,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 25,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 24,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 24,
            "decorators": [],
            "name": "thing",
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "TSExportAssignment",
      "start": 26,
      "end": 41,
      "expression": {
        "type": "Identifier",
        "start": 35,
        "end": 40,
        "decorators": [],
        "name": "thing",
        "optional": false,
        "typeAnnotation": null
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
  "end": 179,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 38,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 15,
        "decorators": [],
        "name": "minimist",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 18,
        "end": 37,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 36,
          "value": "minimist",
          "raw": "'minimist'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 39,
      "end": 75,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 53,
        "decorators": [],
        "name": "process",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 56,
        "end": 74,
        "expression": {
          "type": "Literal",
          "start": 64,
          "end": 73,
          "value": "process",
          "raw": "'process'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 77,
      "end": 179,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 92,
        "end": 179,
        "id": {
          "type": "Identifier",
          "start": 101,
          "end": 110,
          "decorators": [],
          "name": "parseArgs",
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
          "start": 112,
          "end": 133,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 114,
            "end": 133,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 114,
              "end": 133,
              "left": {
                "type": "Identifier",
                "start": 114,
                "end": 122,
                "decorators": [],
                "name": "minimist",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 123,
                "end": 133,
                "decorators": [],
                "name": "ParsedArgs",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 134,
          "end": 179,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 138,
              "end": 177,
              "argument": {
                "type": "CallExpression",
                "start": 145,
                "end": 176,
                "callee": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 153,
                  "decorators": [],
                  "name": "minimist",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "CallExpression",
                    "start": 154,
                    "end": 175,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 154,
                      "end": 172,
                      "object": {
                        "type": "MemberExpression",
                        "start": 154,
                        "end": 166,
                        "object": {
                          "type": "Identifier",
                          "start": 154,
                          "end": 161,
                          "decorators": [],
                          "name": "process",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 162,
                          "end": 166,
                          "decorators": [],
                          "name": "argv",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 167,
                        "end": 172,
                        "decorators": [],
                        "name": "slice",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 173,
                        "end": 174,
                        "value": 2,
                        "raw": "2"
                      }
                    ],
                    "optional": false
                  }
                ],
                "optional": false
              }
            }
          ]
        },
        "expression": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
