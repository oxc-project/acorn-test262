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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 26,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 24,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 23,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 22,
                "end": 23,
                "typeName": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 23,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSExportAssignment",
      "start": 27,
      "end": 38,
      "expression": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "name": "C",
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
  "end": 174,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 66,
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
        "end": 65,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 64,
          "value": "./externalModuleExportingGenericClass_file0",
          "raw": "'./externalModuleExportingGenericClass_file0'"
        }
      },
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 75,
            "name": "v",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 75,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 74,
                "end": 75,
                "typeName": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 75,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 105,
      "end": 133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 109,
          "end": 132,
          "id": {
            "type": "Identifier",
            "start": 109,
            "end": 116,
            "name": "v2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 111,
              "end": 116,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 113,
                "end": 116
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 119,
            "end": 132,
            "object": {
              "type": "NewExpression",
              "start": 120,
              "end": 127,
              "callee": {
                "type": "Identifier",
                "start": 124,
                "end": 125,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "property": {
              "type": "Identifier",
              "start": 129,
              "end": 132,
              "name": "foo",
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
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 148,
            "name": "v3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 148,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 142,
                "end": 148
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 151,
            "end": 172,
            "object": {
              "type": "NewExpression",
              "start": 152,
              "end": 167,
              "callee": {
                "type": "Identifier",
                "start": 156,
                "end": 157,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
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
            "property": {
              "type": "Identifier",
              "start": 169,
              "end": 172,
              "name": "foo",
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
