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
              "name": "Name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
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
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "name": "Name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "ITest",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 84,
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 84,
            "name": "testData",
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
                    "name": "ITest",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 91,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "testData",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 103,
                "end": 104,
                "value": 0,
                "raw": "0"
              },
              "computed": true,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 106,
              "end": 110,
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
