__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "ITest",
        "raw": "\"ITest\"",
        "start": 15,
        "end": 22
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Name",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 43
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 54,
                    "end": 58
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 60,
                      "end": 66
                    },
                    "start": 58,
                    "end": 66
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 54,
                  "end": 67
                }
              ],
              "start": 44,
              "end": 73
            },
            "declare": false,
            "start": 29,
            "end": 73
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Name",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 91
            },
            "start": 78,
            "end": 92
          }
        ],
        "start": 23,
        "end": 94
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 94
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 95
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ITest",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 42
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "ITest",
          "raw": "'ITest'",
          "start": 53,
          "end": 60
        },
        "start": 45,
        "end": 61
      },
      "importKind": "value",
      "start": 30,
      "end": 62
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "testData",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ITest",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 77,
                    "end": 82
                  },
                  "typeArguments": null,
                  "start": 77,
                  "end": 82
                },
                "start": 77,
                "end": 84
              },
              "start": 75,
              "end": 84
            },
            "start": 67,
            "end": 84
          },
          "init": null,
          "definite": false,
          "start": 67,
          "end": 84
        }
      ],
      "declare": false,
      "start": 63,
      "end": 85
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 90,
            "end": 91
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "testData",
                "optional": false,
                "typeAnnotation": null,
                "start": 94,
                "end": 102
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 103,
                "end": 104
              },
              "optional": false,
              "computed": true,
              "start": 94,
              "end": 105
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 110
            },
            "optional": false,
            "computed": false,
            "start": 94,
            "end": 110
          },
          "definite": false,
          "start": 90,
          "end": 110
        }
      ],
      "declare": false,
      "start": 86,
      "end": 111
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 30,
  "end": 113
}
```
