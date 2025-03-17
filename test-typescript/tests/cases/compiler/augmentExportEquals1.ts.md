__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 23,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 10,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 9,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSExportAssignment",
      "start": 11,
      "end": 22,
      "expression": {
        "type": "Identifier",
        "start": 20,
        "end": 21,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
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
  "end": 178,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 29,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 28,
          "raw": "\"./file1\"",
          "value": "./file1"
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 127,
      "end": 177,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 152,
        "end": 177,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 158,
            "end": 175,
            "body": {
              "type": "TSInterfaceBody",
              "start": 170,
              "end": 175,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 172,
                  "end": 173,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 172,
                    "end": 173,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": null
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 168,
              "end": 169,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 142,
        "end": 151,
        "raw": "\"./file1\"",
        "value": "./file1"
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
  "end": 79,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 29,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 28,
          "raw": "\"./file1\"",
          "value": "./file1"
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 31,
      "end": 48,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 38,
        "end": 47,
        "raw": "\"./file2\"",
        "value": "./file2"
      },
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 49,
      "end": 60,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 59,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 59,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 59,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 56,
                "end": 59,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 56,
                  "end": 59,
                  "left": {
                    "type": "Identifier",
                    "start": 56,
                    "end": 57,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 58,
                    "end": 59,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": null
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
