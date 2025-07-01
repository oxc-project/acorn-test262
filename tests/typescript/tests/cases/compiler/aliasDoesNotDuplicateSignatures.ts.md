__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "demoNS",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 24
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 41
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 45,
                "end": 49
              },
              "start": 43,
              "end": 49
            },
            "body": null,
            "expression": false,
            "start": 31,
            "end": 50
          }
        ],
        "start": 25,
        "end": 52
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 52
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "demoModule",
        "raw": "'demoModule'",
        "start": 68,
        "end": 80
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "alias",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 99
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "demoNS",
              "optional": false,
              "typeAnnotation": null,
              "start": 102,
              "end": 108
            },
            "importKind": "value",
            "start": 87,
            "end": 109
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "alias",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 128
            },
            "start": 114,
            "end": 129
          }
        ],
        "start": 81,
        "end": 131
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 53,
      "end": 131
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 131
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "importKind": "value",
          "start": 9,
          "end": 10
        }
      ],
      "source": {
        "type": "Literal",
        "value": "demoModule",
        "raw": "'demoModule'",
        "start": 18,
        "end": 30
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 31
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 97,
                "end": 103
              },
              "start": 95,
              "end": 103
            },
            "start": 93,
            "end": 103
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "demoNS",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 112
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 114
            },
            "optional": false,
            "computed": false,
            "start": 106,
            "end": 114
          },
          "definite": false,
          "start": 93,
          "end": 114
        }
      ],
      "declare": false,
      "start": 89,
      "end": 115
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 124,
                "end": 130
              },
              "start": 122,
              "end": 130
            },
            "start": 120,
            "end": 130
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 133,
            "end": 134
          },
          "definite": false,
          "start": 120,
          "end": 134
        }
      ],
      "declare": false,
      "start": 116,
      "end": 135
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 135
}
```
