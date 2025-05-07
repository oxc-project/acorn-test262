__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 128,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 126,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 23,
        "end": 126,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 29,
            "end": 50,
            "async": false,
            "body": null,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 41,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 49,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 45,
                "end": 49
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSModuleDeclaration",
            "start": 55,
            "end": 106,
            "body": {
              "type": "TSModuleBlock",
              "start": 69,
              "end": 106,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 79,
                  "end": 100,
                  "attributes": [],
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 86,
                    "end": 100,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 90,
                        "end": 99,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 90,
                          "end": 99,
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 91,
                            "end": 99,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 93,
                              "end": 99
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": []
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 65,
              "end": 68,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "namespace"
          },
          {
            "type": "TSExportAssignment",
            "start": 111,
            "end": 124,
            "expression": {
              "type": "Identifier",
              "start": 120,
              "end": 123,
              "decorators": [],
              "name": "foo",
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
        "start": 15,
        "end": 22,
        "raw": "\"file1\"",
        "value": "file1",
        "regex": null,
        "bigint": null
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
  "start": 35,
  "end": 176,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 35,
      "end": 63,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 43,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 46,
        "end": 62,
        "expression": {
          "type": "Literal",
          "start": 54,
          "end": 61,
          "raw": "\"file1\"",
          "value": "file1",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 65,
      "end": 73,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 65,
        "end": 72,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 65,
          "end": 68,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 65,
            "end": 66,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 67,
            "end": 68,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 71,
          "end": 72,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 108,
      "end": 175,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 131,
        "end": 175,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 137,
            "end": 154,
            "body": {
              "type": "TSInterfaceBody",
              "start": 149,
              "end": 154,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 151,
                  "end": 152,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 151,
                    "end": 152,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": null
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 147,
              "end": 148,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "VariableDeclaration",
            "start": 159,
            "end": 173,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 163,
                "end": 172,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 163,
                  "end": 172,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 164,
                    "end": 172,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 166,
                      "end": 172
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 123,
        "end": 130,
        "raw": "\"file1\"",
        "value": "file1",
        "regex": null,
        "bigint": null
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
  "end": 68,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 26,
        "raw": "\"file1\"",
        "value": "file1",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 28,
      "end": 43,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 35,
        "end": 42,
        "raw": "\"file2\"",
        "value": "file2",
        "regex": null,
        "bigint": null
      },
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 44,
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 54,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 54,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 54,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 51,
                "end": 54,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 51,
                  "end": 54,
                  "left": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 52,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 54,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 68,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 67,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 61,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 64,
            "end": 67,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 64,
              "end": 65,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
