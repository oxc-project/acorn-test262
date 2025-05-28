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
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 24,
        "decorators": [],
        "name": "demoNS",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 25,
        "end": 52,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 31,
            "end": 50,
            "id": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
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
            "body": null,
            "expression": false
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 53,
      "end": 131,
      "id": {
        "type": "Literal",
        "start": 68,
        "end": 80,
        "value": "demoModule",
        "raw": "'demoModule'"
      },
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
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 102,
              "end": 108,
              "decorators": [],
              "name": "demoNS",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value"
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
  "start": 0,
  "end": 135,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
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
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 30,
        "value": "demoModule",
        "raw": "'demoModule'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 89,
      "end": 115,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 93,
          "end": 114,
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
            "object": {
              "type": "Identifier",
              "start": 106,
              "end": 112,
              "decorators": [],
              "name": "demoNS",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "decorators": [],
              "name": "f",
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
    },
    {
      "type": "VariableDeclaration",
      "start": 116,
      "end": 135,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 120,
          "end": 134,
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
            "optional": false,
            "typeAnnotation": null
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
