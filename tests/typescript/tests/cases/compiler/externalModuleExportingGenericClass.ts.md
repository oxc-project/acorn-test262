__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 26,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 26,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 24,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 23,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 22,
                "end": 23,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 23,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSExportAssignment",
      "start": 27,
      "end": 38,
      "expression": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "decorators": [],
        "name": "C",
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
  "end": 173,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 65,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 64,
          "raw": "'./externalModuleExportingGenericClass_file0'",
          "value": "./externalModuleExportingGenericClass_file0"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 67,
      "end": 76,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 75,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 75,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 75,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 74,
                "end": 75,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 75,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 105,
      "end": 133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 109,
          "end": 132,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 109,
            "end": 116,
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 111,
              "end": 116,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 113,
                "end": 116
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 119,
            "end": 132,
            "computed": false,
            "object": {
              "type": "NewExpression",
              "start": 120,
              "end": 127,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 124,
                "end": 125,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 129,
              "end": 132,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 134,
      "end": 173,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 138,
          "end": 172,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 148,
            "decorators": [],
            "name": "v3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 148,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 142,
                "end": 148
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 151,
            "end": 172,
            "computed": false,
            "object": {
              "type": "NewExpression",
              "start": 152,
              "end": 167,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 156,
                "end": 157,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 157,
                "end": 165,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 158,
                    "end": 164
                  }
                ]
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 169,
              "end": 172,
              "decorators": [],
              "name": "foo",
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
