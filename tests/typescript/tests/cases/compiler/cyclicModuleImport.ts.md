__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 453,
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
              "decorators": [],
              "name": "MainModule",
              "optional": false,
              "typeAnnotation": null
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
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 86,
              "end": 95,
              "decorators": [],
              "name": "SubModule",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 96,
              "end": 236,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 106,
                  "end": 138,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 129,
                    "decorators": [],
                    "name": "StaticVar",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public"
                },
                {
                  "type": "PropertyDefinition",
                  "start": 147,
                  "end": 174,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 154,
                    "end": 165,
                    "decorators": [],
                    "name": "InstanceVar",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public"
                },
                {
                  "type": "PropertyDefinition",
                  "start": 183,
                  "end": 207,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 190,
                    "end": 194,
                    "decorators": [],
                    "name": "main",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                        "decorators": [],
                        "name": "MainModule",
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
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 216,
                  "end": 230,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 216,
                    "end": 227,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 227,
                    "end": 230,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": null,
                    "expression": false
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "TSExportAssignment",
            "start": 241,
            "end": 260,
            "expression": {
              "type": "Identifier",
              "start": 250,
              "end": 259,
              "decorators": [],
              "name": "SubModule",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "SubModule",
              "optional": false,
              "typeAnnotation": null
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
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 348,
              "end": 358,
              "decorators": [],
              "name": "MainModule",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 359,
              "end": 426,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 369,
                  "end": 397,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 376,
                    "end": 385,
                    "decorators": [],
                    "name": "SubModule",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                        "decorators": [],
                        "name": "SubModule",
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
                  "accessibility": "public"
                },
                {
                  "type": "MethodDefinition",
                  "start": 406,
                  "end": 420,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 406,
                    "end": 417,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 417,
                    "end": 420,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": null,
                    "expression": false
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "TSExportAssignment",
            "start": 431,
            "end": 451,
            "expression": {
              "type": "Identifier",
              "start": 440,
              "end": 450,
              "decorators": [],
              "name": "MainModule",
              "optional": false,
              "typeAnnotation": null
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
