__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 98,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 38,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 17,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "name": "boxedBox",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "name": "boxedBox",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 37,
        "value": "./boxedBox",
        "raw": "\"./boxedBox\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 40,
      "end": 66,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 47,
        "end": 66,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 53,
            "end": 65,
            "id": {
              "type": "Identifier",
              "start": 53,
              "end": 54,
              "name": "_",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 57,
              "end": 65,
              "name": "boxedBox",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
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
  "end": 154,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 96,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 96,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 95,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 95,
              "name": "boxedBox",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 29,
                "end": 95,
                "typeAnnotation": {
                  "type": "TSImportType",
                  "start": 31,
                  "end": 95,
                  "argument": {
                    "type": "TSLiteralType",
                    "start": 38,
                    "end": 45,
                    "literal": {
                      "type": "Literal",
                      "start": 38,
                      "end": 45,
                      "value": "./box",
                      "raw": "\"./box\""
                    }
                  },
                  "options": null,
                  "qualifier": {
                    "type": "Identifier",
                    "start": 47,
                    "end": 50,
                    "name": "Box",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 50,
                    "end": 95,
                    "params": [
                      {
                        "type": "TSTypeLiteral",
                        "start": 51,
                        "end": 94,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 57,
                            "end": 92,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 57,
                              "end": 62,
                              "name": "boxed",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 62,
                              "end": 91,
                              "typeAnnotation": {
                                "type": "TSImportType",
                                "start": 64,
                                "end": 91,
                                "argument": {
                                  "type": "TSLiteralType",
                                  "start": 71,
                                  "end": 78,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 71,
                                    "end": 78,
                                    "value": "./box",
                                    "raw": "\"./box\""
                                  }
                                },
                                "options": null,
                                "qualifier": {
                                  "type": "Identifier",
                                  "start": 80,
                                  "end": 83,
                                  "name": "Box",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 83,
                                  "end": 91,
                                  "params": [
                                    {
                                      "type": "TSNumberKeyword",
                                      "start": 84,
                                      "end": 90
                                    }
                                  ]
                                }
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
  "end": 122,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 72,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 72,
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 24,
          "name": "Box",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 28,
          "end": 72,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 34,
              "end": 43,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 34,
                "end": 39,
                "name": "value",
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
                "start": 39,
                "end": 42,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 41,
                  "end": 42,
                  "typeName": {
                    "type": "Identifier",
                    "start": 41,
                    "end": 42,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 48,
              "end": 70,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 48,
                "end": 59,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 59,
                "end": 70,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 60,
                    "end": 68,
                    "name": "value",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 65,
                      "end": 68,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 67,
                        "end": 68,
                        "typeName": {
                          "type": "Identifier",
                          "start": 67,
                          "end": 68,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
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
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 24,
          "end": 27,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 25,
              "end": 26,
              "name": {
                "type": "Identifier",
                "start": 25,
                "end": 26,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "implements": [],
        "abstract": false,
        "declare": true,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 73,
      "end": 122,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 80,
        "end": 122,
        "id": {
          "type": "Identifier",
          "start": 97,
          "end": 100,
          "name": "box",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 104,
            "end": 112,
            "name": "value",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 109,
              "end": 112,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 111,
                "end": 112,
                "typeName": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 112,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": null,
        "declare": true,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 100,
          "end": 103,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 101,
              "end": 102,
              "name": {
                "type": "Identifier",
                "start": 101,
                "end": 102,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 113,
          "end": 121,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 115,
            "end": 121,
            "typeName": {
              "type": "Identifier",
              "start": 115,
              "end": 118,
              "name": "Box",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 118,
              "end": 121,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 119,
                  "end": 120,
                  "typeName": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 120,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
