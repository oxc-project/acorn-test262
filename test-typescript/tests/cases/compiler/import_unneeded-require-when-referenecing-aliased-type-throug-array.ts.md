__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 95,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 94,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 23,
        "end": 94,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 29,
            "end": 73,
            "body": {
              "type": "TSInterfaceBody",
              "start": 44,
              "end": 73,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 54,
                  "end": 67,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 54,
                    "end": 58,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 58,
                    "end": 66,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 60,
                      "end": 66
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 39,
              "end": 43,
              "decorators": [],
              "name": "Name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSExportAssignment",
            "start": 78,
            "end": 92,
            "expression": {
              "type": "Identifier",
              "start": 87,
              "end": 91,
              "decorators": [],
              "name": "Name",
              "optional": false,
              "typeAnnotation": null
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
        "raw": "\"ITest\"",
        "value": "ITest",
        "regex": null,
        "bigint": null
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
  "start": 30,
  "end": 113,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 30,
      "end": 62,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 42,
        "decorators": [],
        "name": "ITest",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 45,
        "end": 61,
        "expression": {
          "type": "Literal",
          "start": 53,
          "end": 60,
          "raw": "'ITest'",
          "value": "ITest",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 63,
      "end": 85,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 84,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 84,
            "decorators": [],
            "name": "testData",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 84,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 77,
                "end": 84,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 77,
                  "end": 82,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 82,
                    "decorators": [],
                    "name": "ITest",
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
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 111,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 110,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 91,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 94,
            "end": 110,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 94,
              "end": 105,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 94,
                "end": 102,
                "decorators": [],
                "name": "testData",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 103,
                "end": 104,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 106,
              "end": 110,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
