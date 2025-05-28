__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 71,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 70,
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
        "end": 70,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 29,
            "end": 50,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 41,
              "decorators": [],
              "name": "foo",
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
          },
          {
            "type": "TSExportAssignment",
            "start": 55,
            "end": 68,
            "expression": {
              "type": "Identifier",
              "start": 64,
              "end": 67,
              "decorators": [],
              "name": "foo",
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
  "start": 36,
  "end": 180,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 36,
      "end": 64,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 44,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 47,
        "end": 63,
        "expression": {
          "type": "Literal",
          "start": 55,
          "end": 62,
          "value": "file1",
          "raw": "\"file1\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 131,
      "end": 179,
      "id": {
        "type": "Literal",
        "start": 146,
        "end": 153,
        "value": "file1",
        "raw": "\"file1\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 154,
        "end": 179,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 160,
            "end": 177,
            "id": {
              "type": "Identifier",
              "start": 170,
              "end": 171,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 172,
              "end": 177,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 174,
                  "end": 175,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 174,
                    "end": 175,
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
