file1.d.ts
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
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 23,
        "end": 70,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 29,
            "end": 50,
            "async": false,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 41,
              "decorators": [],
              "name": "foo",
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
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 22,
        "raw": "\"file1\"",
        "value": "file1"
      }
    }
  ],
  "sourceType": "module"
}
```
file2.ts
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
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 47,
        "end": 63,
        "expression": {
          "type": "Literal",
          "start": 55,
          "end": 62,
          "raw": "\"file1\"",
          "value": "file1"
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 131,
      "end": 179,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 154,
        "end": 179,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 160,
            "end": 177,
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
                  "key": {
                    "type": "Identifier",
                    "start": 174,
                    "end": 175,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 170,
              "end": 171,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 146,
        "end": 153,
        "raw": "\"file1\"",
        "value": "file1"
      }
    }
  ],
  "sourceType": "module"
}
```
file3.ts
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
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 27,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 26,
          "raw": "\"file1\"",
          "value": "file1"
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 29,
      "end": 44,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 36,
        "end": 43,
        "raw": "\"file2\"",
        "value": "file2"
      },
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 45,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 49,
          "end": 55,
          "definite": false,
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
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 54,
                    "end": 55,
                    "decorators": [],
                    "name": "A",
                    "optional": false
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
  "sourceType": "module"
}
```
