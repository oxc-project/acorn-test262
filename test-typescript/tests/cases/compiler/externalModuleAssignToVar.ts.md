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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 24,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 10,
            "end": 22,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 10,
              "end": 13,
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
              "start": 13,
              "end": 21,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 15,
                "end": 21
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
        "end": 7,
        "decorators": [],
        "name": "D",
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
      "start": 25,
      "end": 36,
      "expression": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "decorators": [],
        "name": "D",
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
  "start": 0,
  "end": 32,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 31,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 31,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 31,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 17,
              "end": 29,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 17,
                "end": 20,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
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
              "value": null
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 24,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 10,
            "end": 22,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 10,
              "end": 13,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
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
      "start": 25,
      "end": 36,
      "expression": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "decorators": [],
        "name": "C",
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
        "decorators": [],
        "name": "ext",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 78,
        "end": 127,
        "expression": {
          "type": "Literal",
          "start": 86,
          "end": 126,
          "raw": "'externalModuleAssignToVar_core_require'",
          "value": "externalModuleAssignToVar_core_require"
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 159,
            "decorators": [],
            "name": "y1",
            "optional": false,
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 140,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 140,
                      "end": 156,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 142,
                        "end": 156,
                        "abstract": false,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 148,
                          "end": 156,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 151,
                            "end": 156,
                            "typeArguments": null,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 151,
                              "end": 156,
                              "left": {
                                "type": "Identifier",
                                "start": 151,
                                "end": 154,
                                "decorators": [],
                                "name": "ext",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 155,
                                "end": 156,
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        "typeParameters": null
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 162,
            "end": 165,
            "decorators": [],
            "name": "ext",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 167,
      "end": 176,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 167,
        "end": 175,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 167,
          "end": 169,
          "decorators": [],
          "name": "y1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 172,
          "end": 175,
          "decorators": [],
          "name": "ext",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 184,
      "end": 249,
      "id": {
        "type": "Identifier",
        "start": 191,
        "end": 195,
        "decorators": [],
        "name": "ext2",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 198,
        "end": 248,
        "expression": {
          "type": "Literal",
          "start": 206,
          "end": 247,
          "raw": "'externalModuleAssignToVar_core_require2'",
          "value": "externalModuleAssignToVar_core_require2"
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 254,
            "end": 271,
            "decorators": [],
            "name": "y2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 256,
              "end": 271,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 258,
                "end": 271,
                "abstract": false,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 264,
                  "end": 271,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 267,
                    "end": 271,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 267,
                      "end": 271,
                      "decorators": [],
                      "name": "ext2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 274,
            "end": 278,
            "decorators": [],
            "name": "ext2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 280,
      "end": 290,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 280,
        "end": 289,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 280,
          "end": 282,
          "decorators": [],
          "name": "y2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 285,
          "end": 289,
          "decorators": [],
          "name": "ext2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 298,
      "end": 353,
      "id": {
        "type": "Identifier",
        "start": 305,
        "end": 309,
        "decorators": [],
        "name": "ext3",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 312,
        "end": 352,
        "expression": {
          "type": "Literal",
          "start": 320,
          "end": 351,
          "raw": "'externalModuleAssignToVar_ext'",
          "value": "externalModuleAssignToVar_ext"
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 358,
            "end": 376,
            "decorators": [],
            "name": "y3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 360,
              "end": 376,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 362,
                "end": 376,
                "abstract": false,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 369,
                  "end": 376,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 372,
                    "end": 376,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 372,
                      "end": 376,
                      "decorators": [],
                      "name": "ext3",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 379,
            "end": 383,
            "decorators": [],
            "name": "ext3",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 385,
      "end": 395,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 385,
        "end": 394,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 385,
          "end": 387,
          "decorators": [],
          "name": "y3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 390,
          "end": 394,
          "decorators": [],
          "name": "ext3",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
