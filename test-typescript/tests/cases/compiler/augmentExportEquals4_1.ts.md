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
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 38,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 39,
              "end": 41,
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
            "start": 46,
            "end": 97,
            "id": {
              "type": "Identifier",
              "start": 56,
              "end": 59,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 81,
                        "end": 90,
                        "id": {
                          "type": "Identifier",
                          "start": 81,
                          "end": 90,
                          "name": "v",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 82,
                            "end": 90,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 84,
                              "end": 90
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "var",
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
          {
            "type": "TSExportAssignment",
            "start": 102,
            "end": 115,
            "expression": {
              "type": "Identifier",
              "start": 111,
              "end": 114,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 67,
            "end": 68,
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
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
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
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 163,
                "end": 172,
                "id": {
                  "type": "Identifier",
                  "start": 163,
                  "end": 172,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 164,
                    "end": 172,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 166,
                      "end": 172
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
        "end": 26,
        "value": "file1",
        "raw": "\"file1\""
      },
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
      "attributes": [],
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 54,
            "name": "a",
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 54,
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
      "start": 56,
      "end": 68,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 67,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 61,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 64,
            "end": 67,
            "object": {
              "type": "Identifier",
              "start": 64,
              "end": 65,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
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
