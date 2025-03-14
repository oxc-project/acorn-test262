__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 120,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 49,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 49,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 47,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 22,
              "end": 47,
              "body": {
                "type": "TSInterfaceBody",
                "start": 34,
                "end": 47,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 36,
                    "end": 45,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 36,
                      "end": 37,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 37,
                      "end": 45,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 39,
                        "end": 45
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 51,
      "end": 93,
      "body": {
        "type": "TSModuleBlock",
        "start": 60,
        "end": 93,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 66,
            "end": 86,
            "attributes": [],
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 73,
              "end": 86,
              "id": {
                "type": "Identifier",
                "start": 80,
                "end": 82,
                "decorators": [],
                "name": "A1",
                "optional": false
              },
              "importKind": "value",
              "moduleReference": {
                "type": "Identifier",
                "start": 85,
                "end": 86,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 59,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 95,
      "end": 120,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 99,
          "end": 119,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 99,
            "end": 108,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 100,
              "end": 108,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 102,
                "end": 108,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 102,
                  "end": 108,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 102,
                    "end": 106,
                    "left": {
                      "type": "Identifier",
                      "start": 102,
                      "end": 103,
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 104,
                      "end": 106,
                      "decorators": [],
                      "name": "A1",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 107,
                    "end": 108,
                    "decorators": [],
                    "name": "I",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 111,
            "end": 119,
            "properties": [
              {
                "type": "Property",
                "start": 113,
                "end": 117,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 114,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 116,
                  "end": 117,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
