__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 22,
        "value": "file1",
        "raw": "\"file1\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 23,
        "end": 117,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 29,
            "end": 41,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 38,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 39,
              "end": 41,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "TSModuleDeclaration",
            "start": 46,
            "end": 97,
            "id": {
              "type": "Identifier",
              "start": 56,
              "end": 59,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 60,
              "end": 97,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 70,
                  "end": 91,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 77,
                    "end": 91,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 81,
                        "end": 90,
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
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  "specifiers": [],
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
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 46,
        "end": 62,
        "expression": {
          "type": "Literal",
          "start": 54,
          "end": 61,
          "value": "file1",
          "raw": "\"file1\""
        }
      },
      "importKind": "value"
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
          "object": {
            "type": "Identifier",
            "start": 65,
            "end": 66,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 67,
            "end": 68,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 71,
          "end": 72,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 108,
      "end": 175,
      "id": {
        "type": "Literal",
        "start": 123,
        "end": 130,
        "value": "file1",
        "raw": "\"file1\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 131,
        "end": 175,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 137,
            "end": 154,
            "id": {
              "type": "Identifier",
              "start": 147,
              "end": 148,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
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
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 151,
                    "end": 152,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": null,
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 159,
            "end": 173,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 163,
                "end": 172,
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
                "init": null,
                "definite": false
              }
            ],
            "declare": false
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
  "end": 68,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
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
      ],
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 26,
        "value": "file1",
        "raw": "\"file1\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 28,
      "end": 43,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 35,
        "end": 42,
        "value": "file2",
        "raw": "\"file2\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 44,
      "end": 55,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 54,
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
      "type": "VariableDeclaration",
      "start": 56,
      "end": 68,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 67,
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
            "object": {
              "type": "Identifier",
              "start": 64,
              "end": 65,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
