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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Car",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 30,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 28,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 19,
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
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 21,
                "end": 27
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSExportAssignment",
      "start": 32,
      "end": 45,
      "expression": {
        "type": "Identifier",
        "start": 41,
        "end": 44,
        "name": "Car",
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
  "start": 49,
  "end": 224,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 49,
      "end": 98,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 59,
        "name": "Car",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 62,
        "end": 97,
        "expression": {
          "type": "Literal",
          "start": 70,
          "end": 96,
          "value": "./arrayOfExportedClass_0",
          "raw": "'./arrayOfExportedClass_0'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 100,
      "end": 207,
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 110,
        "name": "Road",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 111,
        "end": 207,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 118,
            "end": 137,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 125,
              "end": 129,
              "name": "cars",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 131,
                    "end": 134,
                    "name": "Car",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 143,
            "end": 205,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 150,
              "end": 157,
              "name": "AddCars",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 157,
              "end": 205,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 158,
                  "end": 169,
                  "name": "cars",
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 164,
                          "end": 167,
                          "name": "Car",
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
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 171,
                "end": 205,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 182,
                    "end": 199,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 182,
                      "end": 198,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 182,
                        "end": 191,
                        "object": {
                          "type": "ThisExpression",
                          "start": 182,
                          "end": 186
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 187,
                          "end": 191,
                          "name": "cars",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 194,
                        "end": 198,
                        "name": "cars",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSExportAssignment",
      "start": 209,
      "end": 223,
      "expression": {
        "type": "Identifier",
        "start": 218,
        "end": 222,
        "name": "Road",
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
