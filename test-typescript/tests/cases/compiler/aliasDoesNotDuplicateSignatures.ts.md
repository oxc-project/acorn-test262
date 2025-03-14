__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 131,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 52,
      "body": {
        "type": "TSModuleBlock",
        "start": 25,
        "end": 52,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 31,
            "end": 50,
            "async": false,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "decorators": [],
              "name": "f",
              "optional": false
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
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 24,
        "decorators": [],
        "name": "demoNS",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 53,
      "end": 131,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 81,
        "end": 131,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 87,
            "end": 109,
            "id": {
              "type": "Identifier",
              "start": 94,
              "end": 99,
              "decorators": [],
              "name": "alias",
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "Identifier",
              "start": 102,
              "end": 108,
              "decorators": [],
              "name": "demoNS",
              "optional": false
            }
          },
          {
            "type": "TSExportAssignment",
            "start": 114,
            "end": 129,
            "expression": {
              "type": "Identifier",
              "start": 123,
              "end": 128,
              "decorators": [],
              "name": "alias",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 68,
        "end": 80,
        "raw": "'demoModule'",
        "value": "demoModule"
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
  "end": 135,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 30,
        "raw": "'demoModule'",
        "value": "demoModule"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "f",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 89,
      "end": 115,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 93,
          "end": 114,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 93,
            "end": 103,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 103,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 97,
                "end": 103
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 106,
            "end": 114,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 106,
              "end": 112,
              "decorators": [],
              "name": "demoNS",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "decorators": [],
              "name": "f",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 116,
      "end": 135,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 120,
          "end": 134,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 130,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 122,
              "end": 130,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 124,
                "end": 130
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 133,
            "end": 134,
            "decorators": [],
            "name": "f",
            "optional": false
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
