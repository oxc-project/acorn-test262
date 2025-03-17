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
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 15,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 15,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 28,
        "value": "./foo",
        "raw": "'./foo'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "start": 29,
      "end": 52,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 52,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
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
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 68,
      "end": 113,
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 82,
        "name": "global",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 110,
                  "name": "foo",
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
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
            "kind": "const",
            "declare": false
          }
        ]
      },
      "kind": "global",
      "declare": true,
      "global": true
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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "name": "Root",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 101,
              "end": 108,
              "name": "default",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "name": "Root",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 143,
            "name": "root",
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
                  "name": "Root",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "TSExportAssignment",
      "start": 145,
      "end": 159,
      "expression": {
        "type": "Identifier",
        "start": 154,
        "end": 158,
        "name": "root",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
