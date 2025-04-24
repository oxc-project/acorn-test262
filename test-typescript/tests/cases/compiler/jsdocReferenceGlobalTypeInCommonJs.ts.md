__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 95,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 32,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 11,
            "decorators": [],
            "name": "other",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 14,
            "end": 32,
            "arguments": [
              {
                "type": "Literal",
                "start": 22,
                "end": 31,
                "raw": "'./other'",
                "value": "./other"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 14,
              "end": 21,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 68,
      "end": 76,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 72,
          "end": 75,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 72,
            "end": 75,
            "decorators": [],
            "name": "ppk",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 95,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 77,
        "end": 94,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 77,
          "end": 86,
          "decorators": [],
          "name": "Puppeteer",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 87,
          "end": 94,
          "decorators": [],
          "name": "connect",
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
  "end": 122,
  "body": [
    {
      "type": "TSNamespaceExportDeclaration",
      "start": 0,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 29,
        "decorators": [],
        "name": "Puppeteer",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 31,
      "end": 76,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 38,
        "end": 76,
        "body": {
          "type": "TSInterfaceBody",
          "start": 57,
          "end": 76,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 63,
              "end": 74,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 63,
                "end": 66,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 66,
                "end": 74,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 68,
                  "end": 74
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 48,
          "end": 56,
          "decorators": [],
          "name": "Keyboard",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 77,
      "end": 121,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 84,
        "end": 121,
        "async": false,
        "body": null,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 93,
          "end": 100,
          "decorators": [],
          "name": "connect",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 101,
            "end": 113,
            "decorators": [],
            "name": "name",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 113,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 107,
                "end": 113
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 114,
          "end": 120,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 116,
            "end": 120
          }
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 41,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 29,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 20,
        "end": 28,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 22,
          "end": 28
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSExportAssignment",
      "start": 30,
      "end": 41,
      "expression": {
        "type": "Identifier",
        "start": 39,
        "end": 40,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
