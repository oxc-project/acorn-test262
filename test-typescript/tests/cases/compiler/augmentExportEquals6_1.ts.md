__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 108,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 106,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 23,
        "end": 106,
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
            "end": 86,
            "body": {
              "type": "TSModuleBlock",
              "start": 60,
              "end": 86,
              "body": [
                {
                  "type": "ClassDeclaration",
                  "start": 70,
                  "end": 80,
                  "abstract": false,
                  "body": {
                    "type": "ClassBody",
                    "start": 78,
                    "end": 80,
                    "body": []
                  },
                  "declare": false,
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 77,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  },
                  "implements": [],
                  "superClass": null
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
            "start": 91,
            "end": 104,
            "expression": {
              "type": "Identifier",
              "start": 100,
              "end": 103,
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 35,
  "end": 156,
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
      "type": "TSModuleDeclaration",
      "start": 99,
      "end": 155,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 122,
        "end": 155,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 128,
            "end": 153,
            "body": {
              "type": "TSInterfaceBody",
              "start": 140,
              "end": 153,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 142,
                  "end": 151,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 142,
                    "end": 143,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 143,
                    "end": 151,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 145,
                      "end": 151
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 138,
              "end": 139,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 114,
        "end": 121,
        "raw": "\"file1\"",
        "value": "file1"
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
              "name": "a",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "decorators": [],
              "name": "a",
              "optional": false
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
