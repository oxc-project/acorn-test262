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
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 22,
        "value": "ITest",
        "raw": "\"ITest\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 23,
        "end": 94,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 29,
            "end": 73,
            "id": {
              "type": "Identifier",
              "start": 39,
              "end": 43,
              "decorators": [],
              "name": "Name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 44,
              "end": 73,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 54,
                  "end": 67,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 54,
                    "end": 58,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 58,
                    "end": 66,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 60,
                      "end": 66
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
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 45,
        "end": 61,
        "expression": {
          "type": "Literal",
          "start": 53,
          "end": 60,
          "value": "ITest",
          "raw": "'ITest'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 63,
      "end": 85,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 84,
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 82,
                    "decorators": [],
                    "name": "ITest",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
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
      "type": "VariableDeclaration",
      "start": 86,
      "end": 111,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 110,
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
            "object": {
              "type": "MemberExpression",
              "start": 94,
              "end": 105,
              "object": {
                "type": "Identifier",
                "start": 94,
                "end": 102,
                "decorators": [],
                "name": "testData",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 103,
                "end": 104,
                "value": 0,
                "raw": "0"
              },
              "optional": false,
              "computed": true
            },
            "property": {
              "type": "Identifier",
              "start": 106,
              "end": 110,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
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
