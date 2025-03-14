file1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 32,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 17,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 17,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": []
    },
    {
      "type": "TSExportAssignment",
      "start": 18,
      "end": 31,
      "expression": {
        "type": "Identifier",
        "start": 27,
        "end": 30,
        "decorators": [],
        "name": "foo",
        "optional": false
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
  "start": 0,
  "end": 148,
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
        "optional": false
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
      "start": 97,
      "end": 147,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 122,
        "end": 147,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 128,
            "end": 145,
            "body": {
              "type": "TSInterfaceBody",
              "start": 140,
              "end": 145,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 142,
                  "end": 143,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 142,
                    "end": 143,
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
              "start": 138,
              "end": 139,
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
        "start": 112,
        "end": 121,
        "raw": "\"./file1\"",
        "value": "./file1"
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
  "end": 0,
  "body": [],
  "sourceType": "module"
}
```
file3.ts
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
        "optional": false
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
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 58,
                    "end": 59,
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
