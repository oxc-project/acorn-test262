__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 35,
  "body": [
    {
      "type": "TSExportAssignment",
      "start": 0,
      "end": 11,
      "expression": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 12,
      "end": 34,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 23,
        "end": 34,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 25,
            "end": 32,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 28,
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
              "start": 28,
              "end": 31,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 30,
                "end": 31,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 31,
                  "decorators": [],
                  "name": "X",
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
        "start": 18,
        "end": 19,
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 22,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 21,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
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
  "start": 59,
  "end": 179,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 59,
      "end": 114,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 67,
        "decorators": [],
        "name": "q",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 70,
        "end": 113,
        "expression": {
          "type": "Literal",
          "start": 78,
          "end": 112,
          "raw": "\"exportAssignmentOfGenericType1_0\"",
          "value": "exportAssignmentOfGenericType1_0"
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 116,
      "end": 145,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 142,
        "end": 145,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 122,
        "end": 123,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 132,
        "end": 133,
        "decorators": [],
        "name": "q",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 133,
        "end": 141,
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 134,
            "end": 140
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 146,
      "end": 155,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 150,
          "end": 154,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 150,
            "end": 154,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 151,
              "end": 154,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 153,
                "end": 154,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 154,
                  "decorators": [],
                  "name": "M",
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
      "start": 156,
      "end": 178,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 160,
          "end": 177,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 160,
            "end": 169,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 161,
              "end": 169,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 163,
                "end": 169
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 172,
            "end": 177,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 172,
              "end": 173,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 174,
              "end": 177,
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
