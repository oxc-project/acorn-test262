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
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "start": 10,
              "end": 13
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 15,
                "end": 21
              },
              "start": 13,
              "end": 21
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
            "start": 10,
            "end": 22
          }
        ],
        "start": 8,
        "end": 24
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 24
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 34,
        "end": 35
      },
      "start": 25,
      "end": 36
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 37
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
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
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 17,
                "end": 20
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 22,
                  "end": 28
                },
                "start": 20,
                "end": 28
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
              "start": 17,
              "end": 29
            }
          ],
          "start": 15,
          "end": 31
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 31
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 31
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 32
}
```
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
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 13
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 15,
                "end": 21
              },
              "start": 13,
              "end": 21
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
            "start": 10,
            "end": 22
          }
        ],
        "start": 8,
        "end": 24
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 24
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 34,
        "end": 35
      },
      "start": 25,
      "end": 36
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 37
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
        "name": "ext",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 75
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "externalModuleAssignToVar_core_require",
          "raw": "'externalModuleAssignToVar_core_require'",
          "start": 86,
          "end": 126
        },
        "start": 78,
        "end": 127
      },
      "importKind": "value",
      "start": 65,
      "end": 128
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 139,
                      "end": 140
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "abstract": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ext",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 151,
                                "end": 154
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 155,
                                "end": 156
                              },
                              "start": 151,
                              "end": 156
                            },
                            "typeArguments": null,
                            "start": 151,
                            "end": 156
                          },
                          "start": 148,
                          "end": 156
                        },
                        "start": 142,
                        "end": 156
                      },
                      "start": 140,
                      "end": 156
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 139,
                    "end": 157
                  }
                ],
                "start": 137,
                "end": 159
              },
              "start": 135,
              "end": 159
            },
            "start": 133,
            "end": 159
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "ext",
            "optional": false,
            "typeAnnotation": null,
            "start": 162,
            "end": 165
          },
          "definite": false,
          "start": 133,
          "end": 165
        }
      ],
      "declare": false,
      "start": 129,
      "end": 166
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y1",
          "optional": false,
          "typeAnnotation": null,
          "start": 167,
          "end": 169
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "ext",
          "optional": false,
          "typeAnnotation": null,
          "start": 172,
          "end": 175
        },
        "start": 167,
        "end": 175
      },
      "directive": null,
      "start": 167,
      "end": 176
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ext2",
        "optional": false,
        "typeAnnotation": null,
        "start": 191,
        "end": 195
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "externalModuleAssignToVar_core_require2",
          "raw": "'externalModuleAssignToVar_core_require2'",
          "start": 206,
          "end": 247
        },
        "start": 198,
        "end": 248
      },
      "importKind": "value",
      "start": 184,
      "end": 249
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ext2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 267,
                      "end": 271
                    },
                    "typeArguments": null,
                    "start": 267,
                    "end": 271
                  },
                  "start": 264,
                  "end": 271
                },
                "start": 258,
                "end": 271
              },
              "start": 256,
              "end": 271
            },
            "start": 254,
            "end": 271
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "ext2",
            "optional": false,
            "typeAnnotation": null,
            "start": 274,
            "end": 278
          },
          "definite": false,
          "start": 254,
          "end": 278
        }
      ],
      "declare": false,
      "start": 250,
      "end": 279
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y2",
          "optional": false,
          "typeAnnotation": null,
          "start": 280,
          "end": 282
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "ext2",
          "optional": false,
          "typeAnnotation": null,
          "start": 285,
          "end": 289
        },
        "start": 280,
        "end": 289
      },
      "directive": null,
      "start": 280,
      "end": 290
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ext3",
        "optional": false,
        "typeAnnotation": null,
        "start": 305,
        "end": 309
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "externalModuleAssignToVar_ext",
          "raw": "'externalModuleAssignToVar_ext'",
          "start": 320,
          "end": 351
        },
        "start": 312,
        "end": 352
      },
      "importKind": "value",
      "start": 298,
      "end": 353
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ext3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 372,
                      "end": 376
                    },
                    "typeArguments": null,
                    "start": 372,
                    "end": 376
                  },
                  "start": 369,
                  "end": 376
                },
                "start": 362,
                "end": 376
              },
              "start": 360,
              "end": 376
            },
            "start": 358,
            "end": 376
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "ext3",
            "optional": false,
            "typeAnnotation": null,
            "start": 379,
            "end": 383
          },
          "definite": false,
          "start": 358,
          "end": 383
        }
      ],
      "declare": false,
      "start": 354,
      "end": 384
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y3",
          "optional": false,
          "typeAnnotation": null,
          "start": 385,
          "end": 387
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "ext3",
          "optional": false,
          "typeAnnotation": null,
          "start": 390,
          "end": 394
        },
        "start": 385,
        "end": 394
      },
      "directive": null,
      "start": 385,
      "end": 395
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 65,
  "end": 401
}
```
