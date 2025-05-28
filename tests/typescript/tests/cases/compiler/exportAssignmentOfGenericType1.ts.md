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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 22,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 21,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 23,
        "end": 34,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 25,
            "end": 32,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 28,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 31,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 30,
                "end": 31,
                "typeName": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 31,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
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
  "end": 178,
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
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 70,
        "end": 113,
        "expression": {
          "type": "Literal",
          "start": 78,
          "end": 112,
          "value": "exportAssignmentOfGenericType1_0",
          "raw": "\"exportAssignmentOfGenericType1_0\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 116,
      "end": 145,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 142,
        "end": 145,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 146,
      "end": 155,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 150,
          "end": 154,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 154,
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 156,
      "end": 178,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 160,
          "end": 177,
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
            "object": {
              "type": "Identifier",
              "start": 172,
              "end": 173,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 174,
              "end": 177,
              "decorators": [],
              "name": "foo",
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
