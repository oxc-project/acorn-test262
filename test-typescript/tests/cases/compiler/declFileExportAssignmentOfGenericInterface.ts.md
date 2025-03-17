__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 50,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 35,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 16,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 15,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 35,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 23,
            "end": 33,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 32,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 26,
                "end": 32
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
      "start": 36,
      "end": 49,
      "expression": {
        "type": "Identifier",
        "start": 45,
        "end": 48,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
  "end": 100,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 67,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 66,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 65,
          "value": "declFileExportAssignmentOfGenericInterface_0",
          "raw": "'declFileExportAssignmentOfGenericInterface_0'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 68,
      "end": 95,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 75,
        "end": 95,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 79,
            "end": 94,
            "id": {
              "type": "Identifier",
              "start": 79,
              "end": 94,
              "name": "x",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 80,
                "end": 94,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 82,
                  "end": 94,
                  "typeName": {
                    "type": "Identifier",
                    "start": 82,
                    "end": 83,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 83,
                    "end": 94,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 84,
                        "end": 93,
                        "typeName": {
                          "type": "Identifier",
                          "start": 84,
                          "end": 85,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 85,
                          "end": 93,
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 86,
                              "end": 92
                            }
                          ]
                        }
                      }
                    ]
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 96,
      "end": 100,
      "expression": {
        "type": "MemberExpression",
        "start": 96,
        "end": 99,
        "object": {
          "type": "Identifier",
          "start": 96,
          "end": 97,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 98,
          "end": 99,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
