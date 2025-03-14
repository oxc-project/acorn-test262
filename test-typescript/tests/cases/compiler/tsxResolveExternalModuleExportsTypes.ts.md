/node_modules/@types/a/index.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 79,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 20,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 15,
                "end": 20,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 15,
                  "end": 20,
                  "left": {
                    "type": "Identifier",
                    "start": 15,
                    "end": 16,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 17,
                    "end": 20,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 22,
      "end": 66,
      "body": {
        "type": "TSModuleBlock",
        "start": 42,
        "end": 66,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 48,
            "end": 64,
            "body": {
              "type": "TSInterfaceBody",
              "start": 62,
              "end": 64,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 58,
              "end": 61,
              "decorators": [],
              "name": "Foo",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 41,
        "decorators": [],
        "name": "a",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "TSExportAssignment",
      "start": 67,
      "end": 78,
      "expression": {
        "type": "Identifier",
        "start": 76,
        "end": 77,
        "decorators": [],
        "name": "a",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
/node_modules/@types/b/index.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 116,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 23,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 22,
        "raw": "'a'",
        "value": "a"
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
            "name": "a",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "TSModuleDeclaration",
      "start": 24,
      "end": 115,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 43,
        "end": 115,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 49,
            "end": 66,
            "body": {
              "type": "TSModuleBlock",
              "start": 64,
              "end": 66,
              "body": []
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 59,
              "end": 63,
              "decorators": [],
              "name": "Test",
              "optional": false
            },
            "kind": "namespace"
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 72,
            "end": 113,
            "body": {
              "type": "TSInterfaceBody",
              "start": 86,
              "end": 113,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 96,
                  "end": 107,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 96,
                    "end": 100,
                    "decorators": [],
                    "name": "Test",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 100,
                    "end": 106,
                    "typeAnnotation": {
                      "type": "TSNullKeyword",
                      "start": 102,
                      "end": 106
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 82,
              "end": 85,
              "decorators": [],
              "name": "Foo",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 39,
        "end": 42,
        "raw": "'a'",
        "value": "a"
      }
    }
  ],
  "sourceType": "module"
}
```
foo.tsx
```json
Type expected.
```
