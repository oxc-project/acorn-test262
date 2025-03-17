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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 12,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 13,
      "end": 93,
      "body": {
        "type": "TSModuleBlock",
        "start": 27,
        "end": 93,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 33,
            "end": 50,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 40,
              "end": 50,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 48,
                "end": 50,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 46,
                "end": 47,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 55,
            "end": 91,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 62,
              "end": 91,
              "body": {
                "type": "TSModuleBlock",
                "start": 74,
                "end": 91,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 76,
                    "end": 89,
                    "attributes": [],
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 83,
                      "end": 89,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 87,
                          "end": 88,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 87,
                            "end": 88,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": null
                        }
                      ],
                      "declare": false,
                      "kind": "let"
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
                "start": 72,
                "end": 73,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "namespace"
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
        "start": 23,
        "end": 26,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "TSExportAssignment",
      "start": 94,
      "end": 107,
      "expression": {
        "type": "Identifier",
        "start": 103,
        "end": 106,
        "decorators": [],
        "name": "foo",
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
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 29,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 28,
          "raw": "\"./file1\"",
          "value": "./file1"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 32,
      "end": 42,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 32,
        "end": 41,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 32,
          "end": 37,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 32,
            "end": 35,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 36,
            "end": 37,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 40,
          "end": 41,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 77,
      "end": 189,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 102,
        "end": 189,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 108,
            "end": 133,
            "body": {
              "type": "TSInterfaceBody",
              "start": 120,
              "end": 133,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 122,
                  "end": 131,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 122,
                    "end": 123,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 123,
                    "end": 131,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 125,
                      "end": 131
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 118,
              "end": 119,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSModuleDeclaration",
            "start": 138,
            "end": 187,
            "body": {
              "type": "TSModuleBlock",
              "start": 150,
              "end": 187,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 160,
                  "end": 181,
                  "attributes": [],
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 167,
                    "end": 181,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 171,
                        "end": 180,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 171,
                          "end": 180,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 172,
                            "end": 180,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 174,
                              "end": 180
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "let"
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
              "start": 148,
              "end": 149,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "namespace"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 92,
        "end": 101,
        "raw": "\"./file1\"",
        "value": "./file1"
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
  "end": 87,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 28,
        "raw": "\"./file1\"",
        "value": "./file1"
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
      "start": 30,
      "end": 47,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 37,
        "end": 46,
        "raw": "\"./file2\"",
        "value": "./file2"
      },
      "specifiers": []
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 52,
            "end": 58,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 58,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 55,
                "end": 58,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 55,
                  "end": 58,
                  "left": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 56,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 57,
                    "end": 58,
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
      "start": 60,
      "end": 72,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 71,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 65,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 68,
            "end": 71,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 78,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 81,
            "end": 86,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 81,
              "end": 84,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 81,
                "end": 82,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 83,
                "end": 84,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
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
