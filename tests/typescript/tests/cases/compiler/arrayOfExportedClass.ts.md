__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Car",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 21,
                "end": 27
              },
              "start": 19,
              "end": 27
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 16,
            "end": 28
          }
        ],
        "start": 10,
        "end": 30
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "Car",
        "optional": false,
        "typeAnnotation": null,
        "start": 41,
        "end": 44
      },
      "start": 32,
      "end": 45
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 46
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
        "name": "Car",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 59
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./arrayOfExportedClass_0",
          "raw": "'./arrayOfExportedClass_0'",
          "start": 70,
          "end": 96
        },
        "start": 62,
        "end": 97
      },
      "importKind": "value",
      "start": 49,
      "end": 98
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Road",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
        "end": 110
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "cars",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 129
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Car",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 131,
                    "end": 134
                  },
                  "typeArguments": null,
                  "start": 131,
                  "end": 134
                },
                "start": 131,
                "end": 136
              },
              "start": 129,
              "end": 136
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 118,
            "end": 137
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "AddCars",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 157
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cars",
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
                          "name": "Car",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 164,
                          "end": 167
                        },
                        "typeArguments": null,
                        "start": 164,
                        "end": 167
                      },
                      "start": 164,
                      "end": 169
                    },
                    "start": 162,
                    "end": 169
                  },
                  "start": 158,
                  "end": 169
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 182,
                          "end": 186
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cars",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 187,
                          "end": 191
                        },
                        "optional": false,
                        "computed": false,
                        "start": 182,
                        "end": 191
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cars",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 194,
                        "end": 198
                      },
                      "start": 182,
                      "end": 198
                    },
                    "directive": null,
                    "start": 182,
                    "end": 199
                  }
                ],
                "start": 171,
                "end": 205
              },
              "expression": false,
              "start": 157,
              "end": 205
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 143,
            "end": 205
          }
        ],
        "start": 111,
        "end": 207
      },
      "abstract": false,
      "declare": false,
      "start": 100,
      "end": 207
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "Road",
        "optional": false,
        "typeAnnotation": null,
        "start": 218,
        "end": 222
      },
      "start": 209,
      "end": 223
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 49,
  "end": 223
}
```
