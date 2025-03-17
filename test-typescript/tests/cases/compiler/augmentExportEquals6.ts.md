__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 108,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 12,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 12,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 13,
      "end": 93,
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 26,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 27,
        "end": 93,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 33,
            "end": 50,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 40,
              "end": 50,
              "id": {
                "type": "Identifier",
                "start": 46,
                "end": 47,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 48,
                "end": 50,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 55,
            "end": 91,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 62,
              "end": 91,
              "id": {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 74,
                "end": 91,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 76,
                    "end": 89,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 83,
                      "end": 89,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 87,
                          "end": 88,
                          "id": {
                            "type": "Identifier",
                            "start": 87,
                            "end": 88,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": null,
                          "definite": false
                        }
                      ],
                      "kind": "let",
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "value"
                  }
                ]
              },
              "kind": "namespace",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "TSExportAssignment",
      "start": 94,
      "end": 107,
      "expression": {
        "type": "Identifier",
        "start": 103,
        "end": 106,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
  "end": 190,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 29,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 28,
          "value": "./file1",
          "raw": "\"./file1\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 32,
      "end": 42,
      "expression": {
        "type": "AssignmentExpression",
        "start": 32,
        "end": 41,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 32,
          "end": 37,
          "object": {
            "type": "MemberExpression",
            "start": 32,
            "end": 35,
            "object": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 36,
            "end": 37,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 40,
          "end": 41,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 77,
      "end": 189,
      "id": {
        "type": "Literal",
        "start": 92,
        "end": 101,
        "value": "./file1",
        "raw": "\"./file1\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 102,
        "end": 189,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 108,
            "end": 133,
            "id": {
              "type": "Identifier",
              "start": 118,
              "end": 119,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 120,
              "end": 133,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 122,
                  "end": 131,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 122,
                    "end": 123,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 123,
                    "end": 131,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 125,
                      "end": 131
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSModuleDeclaration",
            "start": 138,
            "end": 187,
            "id": {
              "type": "Identifier",
              "start": 148,
              "end": 149,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 150,
              "end": 187,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 160,
                  "end": 181,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 167,
                    "end": 181,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 171,
                        "end": 180,
                        "id": {
                          "type": "Identifier",
                          "start": 171,
                          "end": 180,
                          "name": "b",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 172,
                            "end": 180,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 174,
                              "end": 180
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
                }
              ]
            },
            "kind": "namespace",
            "declare": false,
            "global": false
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 87,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 28,
        "value": "./file1",
        "raw": "\"./file1\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 30,
      "end": 47,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 37,
        "end": 46,
        "value": "./file2",
        "raw": "\"./file2\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 48,
      "end": 59,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 52,
          "end": 58,
          "id": {
            "type": "Identifier",
            "start": 52,
            "end": 58,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 58,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 55,
                "end": 58,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 55,
                  "end": 58,
                  "left": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 56,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 57,
                    "end": 58,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 60,
      "end": 72,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 71,
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 68,
            "end": 71,
            "object": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 73,
      "end": 87,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 86,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 78,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 81,
            "end": 86,
            "object": {
              "type": "MemberExpression",
              "start": 81,
              "end": 84,
              "object": {
                "type": "Identifier",
                "start": 81,
                "end": 82,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 83,
                "end": 84,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
