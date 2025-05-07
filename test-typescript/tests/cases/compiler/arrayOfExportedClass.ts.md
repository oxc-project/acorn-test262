__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 46,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 30,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 30,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 28,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 19,
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
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 21,
                "end": 27
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
        "end": 9,
        "decorators": [],
        "name": "Car",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSExportAssignment",
      "start": 32,
      "end": 45,
      "expression": {
        "type": "Identifier",
        "start": 41,
        "end": 44,
        "decorators": [],
        "name": "Car",
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
  "start": 49,
  "end": 223,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 49,
      "end": 98,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 59,
        "decorators": [],
        "name": "Car",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 62,
        "end": 97,
        "expression": {
          "type": "Literal",
          "start": 70,
          "end": 96,
          "raw": "'./arrayOfExportedClass_0'",
          "value": "./arrayOfExportedClass_0",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 100,
      "end": 207,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 111,
        "end": 207,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 118,
            "end": 137,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 125,
              "end": 129,
              "decorators": [],
              "name": "cars",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 129,
              "end": 136,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 131,
                "end": 136,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 131,
                  "end": 134,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 131,
                    "end": 134,
                    "decorators": [],
                    "name": "Car",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 143,
            "end": 205,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 150,
              "end": 157,
              "decorators": [],
              "name": "AddCars",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 157,
              "end": 205,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 171,
                "end": 205,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 182,
                    "end": 199,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 182,
                      "end": 198,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 182,
                        "end": 191,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 182,
                          "end": 186
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 187,
                          "end": 191,
                          "decorators": [],
                          "name": "cars",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 194,
                        "end": 198,
                        "decorators": [],
                        "name": "cars",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 158,
                  "end": 169,
                  "decorators": [],
                  "name": "cars",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 162,
                    "end": 169,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 164,
                      "end": 169,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 164,
                        "end": 167,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 164,
                          "end": 167,
                          "decorators": [],
                          "name": "Car",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 110,
        "decorators": [],
        "name": "Road",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSExportAssignment",
      "start": 209,
      "end": 223,
      "expression": {
        "type": "Identifier",
        "start": 218,
        "end": 222,
        "decorators": [],
        "name": "Road",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
