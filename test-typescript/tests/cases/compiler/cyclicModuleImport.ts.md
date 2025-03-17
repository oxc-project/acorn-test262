__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 454,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 262,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 26,
        "value": "SubModule",
        "raw": "\"SubModule\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 27,
        "end": 262,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 33,
            "end": 75,
            "id": {
              "type": "Identifier",
              "start": 40,
              "end": 50,
              "name": "MainModule",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "start": 53,
              "end": 74,
              "expression": {
                "type": "Literal",
                "start": 61,
                "end": 73,
                "value": "MainModule",
                "raw": "'MainModule'"
              }
            },
            "importKind": "value"
          },
          {
            "type": "ClassDeclaration",
            "start": 80,
            "end": 236,
            "id": {
              "type": "Identifier",
              "start": 86,
              "end": 95,
              "name": "SubModule",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 96,
              "end": 236,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 106,
                  "end": 138,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 129,
                    "name": "StaticVar",
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
                    "end": 137,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 131,
                      "end": 137
                    }
                  },
                  "accessibility": "public"
                },
                {
                  "type": "PropertyDefinition",
                  "start": 147,
                  "end": 174,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 154,
                    "end": 165,
                    "name": "InstanceVar",
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
                    "start": 165,
                    "end": 173,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 167,
                      "end": 173
                    }
                  },
                  "accessibility": "public"
                },
                {
                  "type": "PropertyDefinition",
                  "start": 183,
                  "end": 207,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 190,
                    "end": 194,
                    "name": "main",
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
                    "start": 194,
                    "end": 206,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 196,
                      "end": 206,
                      "typeName": {
                        "type": "Identifier",
                        "start": 196,
                        "end": 206,
                        "name": "MainModule",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 216,
                  "end": 230,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 216,
                    "end": 227,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 227,
                    "end": 230,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
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
            "start": 241,
            "end": 260,
            "expression": {
              "type": "Identifier",
              "start": 250,
              "end": 259,
              "name": "SubModule",
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
    },
    {
      "type": "TSModuleDeclaration",
      "start": 263,
      "end": 453,
      "id": {
        "type": "Literal",
        "start": 278,
        "end": 290,
        "value": "MainModule",
        "raw": "\"MainModule\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 291,
        "end": 453,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 297,
            "end": 337,
            "id": {
              "type": "Identifier",
              "start": 304,
              "end": 313,
              "name": "SubModule",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "start": 316,
              "end": 336,
              "expression": {
                "type": "Literal",
                "start": 324,
                "end": 335,
                "value": "SubModule",
                "raw": "'SubModule'"
              }
            },
            "importKind": "value"
          },
          {
            "type": "ClassDeclaration",
            "start": 342,
            "end": 426,
            "id": {
              "type": "Identifier",
              "start": 348,
              "end": 358,
              "name": "MainModule",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 359,
              "end": 426,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 369,
                  "end": 397,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 376,
                    "end": 385,
                    "name": "SubModule",
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
                    "start": 385,
                    "end": 396,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 387,
                      "end": 396,
                      "typeName": {
                        "type": "Identifier",
                        "start": 387,
                        "end": 396,
                        "name": "SubModule",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 406,
                  "end": 420,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 406,
                    "end": 417,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 417,
                    "end": 420,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
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
            "start": 431,
            "end": 451,
            "expression": {
              "type": "Identifier",
              "start": 440,
              "end": 450,
              "name": "MainModule",
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
  "sourceType": "script",
  "hashbang": null
}
```
