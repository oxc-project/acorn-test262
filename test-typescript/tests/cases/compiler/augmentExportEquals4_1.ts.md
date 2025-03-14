file1.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 119,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 117,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 23,
        "end": 117,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 29,
            "end": 41,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 39,
              "end": 41,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 38,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "TSModuleDeclaration",
            "start": 46,
            "end": 97,
            "body": {
              "type": "TSModuleBlock",
              "start": 60,
              "end": 97,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 70,
                  "end": 91,
                  "attributes": [],
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 77,
                    "end": 91,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 81,
                        "end": 90,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 81,
                          "end": 90,
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 82,
                            "end": 90,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 84,
                              "end": 90
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
              "start": 56,
              "end": 59,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "namespace"
          },
          {
            "type": "TSExportAssignment",
            "start": 102,
            "end": 115,
            "expression": {
              "type": "Identifier",
              "start": 111,
              "end": 114,
              "decorators": [],
              "name": "foo",
              "optional": false
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
        "value": "file1"
      }
    }
  ],
  "sourceType": "module"
}
```
file2.ts
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
        "optional": false
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
          "value": "file1"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 65,
      "end": 73,
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
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 67,
            "end": 68,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 71,
          "end": 72,
          "raw": "1",
          "value": 1
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 151,
                    "end": 152,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false
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
              "optional": false
            }
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
        "value": "file1"
      }
    }
  ],
  "sourceType": "module"
}
```
file3.ts
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
        "value": "file1"
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
            "optional": false
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
        "value": "file2"
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
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 54,
                    "decorators": [],
                    "name": "A",
                    "optional": false
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
            "optional": false
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
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "module"
}
```
