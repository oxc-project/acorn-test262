__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 51,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 50,
      "attributes": [],
      "declaration": {
        "type": "TSEnumDeclaration",
        "start": 7,
        "end": 50,
        "body": {
          "type": "TSEnumBody",
          "start": 30,
          "end": 50,
          "members": [
            {
              "type": "TSEnumMember",
              "start": 36,
              "end": 39,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 36,
                "end": 39,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null
            },
            {
              "type": "TSEnumMember",
              "start": 45,
              "end": 48,
              "computed": false,
              "id": {
                "type": "Identifier",
                "start": 45,
                "end": 48,
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null
              },
              "initializer": null
            }
          ]
        },
        "const": true,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 18,
          "end": 29,
          "decorators": [],
          "name": "MyConstEnum",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "EmptyStatement",
      "start": 50,
      "end": 51
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
  "end": 66,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 42,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 41,
        "raw": "'./ConstEnum'",
        "value": "./ConstEnum"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 20,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "MyConstEnum",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "MyConstEnum",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 43,
      "end": 66,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 52,
          "end": 63,
          "exported": {
            "type": "Identifier",
            "start": 52,
            "end": 63,
            "decorators": [],
            "name": "MyConstEnum",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 52,
            "end": 63,
            "decorators": [],
            "name": "MyConstEnum",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
  "end": 70,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 42,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 41,
        "raw": "'./ConstEnum'",
        "value": "./ConstEnum"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 20,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "MyConstEnum",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "MyConstEnum",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 43,
      "end": 70,
      "declaration": {
        "type": "Identifier",
        "start": 58,
        "end": 69,
        "decorators": [],
        "name": "MyConstEnum",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value"
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
  "end": 53,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 53,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 39,
        "end": 52,
        "raw": "'./ConstEnum'",
        "value": "./ConstEnum"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 9,
          "end": 31,
          "exported": {
            "type": "Identifier",
            "start": 24,
            "end": 31,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "MyConstEnum",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
  "end": 42,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 42,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 41,
        "raw": "'./ConstEnum'",
        "value": "./ConstEnum"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 9,
          "end": 20,
          "exported": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "MyConstEnum",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "MyConstEnum",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
  "end": 131,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 49,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 48,
        "raw": "'./ImportExportDefault'",
        "value": "./ImportExportDefault"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 19,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 19,
            "decorators": [],
            "name": "MyConstEnum1",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 50,
      "end": 95,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 75,
        "end": 94,
        "raw": "'./ReExportDefault'",
        "value": "./ReExportDefault"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 57,
          "end": 69,
          "local": {
            "type": "Identifier",
            "start": 57,
            "end": 69,
            "decorators": [],
            "name": "MyConstEnum2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 96,
      "end": 113,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 96,
        "end": 112,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 96,
          "end": 108,
          "decorators": [],
          "name": "MyConstEnum1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 109,
          "end": 112,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 114,
      "end": 131,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 114,
        "end": 130,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 114,
          "end": 126,
          "decorators": [],
          "name": "MyConstEnum2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 127,
          "end": 130,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        }
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
  "end": 62,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 45,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 44,
        "raw": "'./ImportExport'",
        "value": "./ImportExport"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 20,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "MyConstEnum",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "MyConstEnum",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 46,
      "end": 62,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 46,
        "end": 61,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 46,
          "end": 57,
          "decorators": [],
          "name": "MyConstEnum",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 58,
          "end": 61,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        }
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
  "end": 58,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 41,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 40,
        "raw": "'./ReExport'",
        "value": "./ReExport"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 20,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "MyConstEnum",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 20,
            "decorators": [],
            "name": "MyConstEnum",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 42,
      "end": 58,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 42,
        "end": 57,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 42,
          "end": 53,
          "decorators": [],
          "name": "MyConstEnum",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 54,
          "end": 57,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
