__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 62,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 61,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 22,
        "value": "file1",
        "raw": "\"file1\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 23,
        "end": 61,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 29,
            "end": 43,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 33,
                "end": 42,
                "id": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 42,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 34,
                    "end": 42,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 36,
                      "end": 42
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "TSExportAssignment",
            "start": 48,
            "end": 59,
            "expression": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "decorators": [],
              "name": "x",
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
  "start": 35,
  "end": 205,
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
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 46,
        "end": 62,
        "expression": {
          "type": "Literal",
          "start": 54,
          "end": 61,
          "value": "file1",
          "raw": "\"file1\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 156,
      "end": 204,
      "id": {
        "type": "Literal",
        "start": 171,
        "end": 178,
        "value": "file1",
        "raw": "\"file1\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 179,
        "end": 204,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 185,
            "end": 202,
            "id": {
              "type": "Identifier",
              "start": 195,
              "end": 196,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 197,
              "end": 202,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 199,
                  "end": 200,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 199,
                    "end": 200,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": null,
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
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
  "end": 75,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 28,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 27,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 26,
          "value": "file1",
          "raw": "\"file1\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 29,
      "end": 44,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 36,
        "end": 43,
        "value": "file2",
        "raw": "\"file2\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 45,
      "end": 56,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 49,
          "end": 55,
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 55,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 50,
              "end": 55,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 52,
                "end": 55,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 52,
                  "end": 55,
                  "left": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 53,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 54,
                    "end": 55,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
