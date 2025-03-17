__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 37,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 24,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 24,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 10,
            "end": 22,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 10,
              "end": 13,
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
              "start": 13,
              "end": 21,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 15,
                "end": 21
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
      "start": 25,
      "end": 36,
      "expression": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "name": "D",
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
  "end": 32,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 31,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 31,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 31,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 17,
              "end": 29,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 17,
                "end": 20,
                "name": "bar",
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
                "end": 28,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 22,
                  "end": 28
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "end": 37,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 24,
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
        "start": 8,
        "end": 24,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 10,
            "end": 22,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 10,
              "end": 13,
              "name": "baz",
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
              "start": 13,
              "end": 21,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 15,
                "end": 21
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
      "start": 25,
      "end": 36,
      "expression": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
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
  "start": 65,
  "end": 402,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 65,
      "end": 128,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 75,
        "name": "ext",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 78,
        "end": 127,
        "expression": {
          "type": "Literal",
          "start": 86,
          "end": 126,
          "value": "externalModuleAssignToVar_core_require",
          "raw": "'externalModuleAssignToVar_core_require'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 129,
      "end": 166,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 133,
          "end": 165,
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 159,
            "name": "y1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 135,
              "end": 159,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 137,
                "end": 159,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 139,
                    "end": 157,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 140,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 140,
                      "end": 156,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 142,
                        "end": 156,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 148,
                          "end": 156,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 151,
                            "end": 156,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 151,
                              "end": 156,
                              "left": {
                                "type": "Identifier",
                                "start": 151,
                                "end": 154,
                                "name": "ext",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 155,
                                "end": 156,
                                "name": "C",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 162,
            "end": 165,
            "name": "ext",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 167,
      "end": 176,
      "expression": {
        "type": "AssignmentExpression",
        "start": 167,
        "end": 175,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 167,
          "end": 169,
          "name": "y1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 172,
          "end": 175,
          "name": "ext",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 184,
      "end": 249,
      "id": {
        "type": "Identifier",
        "start": 191,
        "end": 195,
        "name": "ext2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 198,
        "end": 248,
        "expression": {
          "type": "Literal",
          "start": 206,
          "end": 247,
          "value": "externalModuleAssignToVar_core_require2",
          "raw": "'externalModuleAssignToVar_core_require2'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 250,
      "end": 279,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 254,
          "end": 278,
          "id": {
            "type": "Identifier",
            "start": 254,
            "end": 271,
            "name": "y2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 256,
              "end": 271,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 258,
                "end": 271,
                "abstract": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 264,
                  "end": 271,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 267,
                    "end": 271,
                    "typeName": {
                      "type": "Identifier",
                      "start": 267,
                      "end": 271,
                      "name": "ext2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 274,
            "end": 278,
            "name": "ext2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 280,
      "end": 290,
      "expression": {
        "type": "AssignmentExpression",
        "start": 280,
        "end": 289,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 280,
          "end": 282,
          "name": "y2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 285,
          "end": 289,
          "name": "ext2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 298,
      "end": 353,
      "id": {
        "type": "Identifier",
        "start": 305,
        "end": 309,
        "name": "ext3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 312,
        "end": 352,
        "expression": {
          "type": "Literal",
          "start": 320,
          "end": 351,
          "value": "externalModuleAssignToVar_ext",
          "raw": "'externalModuleAssignToVar_ext'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 354,
      "end": 384,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 358,
          "end": 383,
          "id": {
            "type": "Identifier",
            "start": 358,
            "end": 376,
            "name": "y3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 360,
              "end": 376,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 362,
                "end": 376,
                "abstract": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 369,
                  "end": 376,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 372,
                    "end": 376,
                    "typeName": {
                      "type": "Identifier",
                      "start": 372,
                      "end": 376,
                      "name": "ext3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 379,
            "end": 383,
            "name": "ext3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 385,
      "end": 395,
      "expression": {
        "type": "AssignmentExpression",
        "start": 385,
        "end": 394,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 385,
          "end": 387,
          "name": "y3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 390,
          "end": 394,
          "name": "ext3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
