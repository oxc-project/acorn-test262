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
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
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
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 95,
                "end": 110,
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
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
  "end": 159,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 117,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "Root",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "default",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "Root",
                  "optional": false,
                  "typeAnnotation": null
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 133,
          "end": 143,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "root",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
