__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 114,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 28,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 28,
        "raw": "'./foo'",
        "value": "./foo"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 15,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 15,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "start": 29,
      "end": 52,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 52,
        "decorators": [],
        "name": "foo",
        "optional": false
      }
    },
    {
      "type": "TSExportAssignment",
      "start": 53,
      "end": 66,
      "expression": {
        "type": "Identifier",
        "start": 62,
        "end": 65,
        "decorators": [],
        "name": "foo",
        "optional": false
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 68,
      "end": 113,
      "body": {
        "type": "TSModuleBlock",
        "start": 83,
        "end": 113,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 89,
            "end": 111,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 95,
                "end": 110,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 110,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 98,
                    "end": 110,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 100,
                      "end": 110,
                      "exprName": {
                        "type": "Identifier",
                        "start": 107,
                        "end": 110,
                        "decorators": [],
                        "name": "foo",
                        "optional": false
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 82,
        "decorators": [],
        "name": "global",
        "optional": false
      },
      "kind": "global"
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
  "end": 160,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 117,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 117,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 101,
            "end": 115,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 101,
              "end": 108,
              "decorators": [],
              "name": "default",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 108,
              "end": 114,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 110,
                "end": 114,
                "typeName": {
                  "type": "Identifier",
                  "start": 110,
                  "end": 114,
                  "decorators": [],
                  "name": "Root",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "Root",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 144,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 133,
          "end": 143,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 143,
            "decorators": [],
            "name": "root",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 137,
              "end": 143,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 139,
                "end": 143,
                "typeName": {
                  "type": "Identifier",
                  "start": 139,
                  "end": 143,
                  "decorators": [],
                  "name": "Root",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSExportAssignment",
      "start": 145,
      "end": 159,
      "expression": {
        "type": "Identifier",
        "start": 154,
        "end": 158,
        "decorators": [],
        "name": "root",
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
