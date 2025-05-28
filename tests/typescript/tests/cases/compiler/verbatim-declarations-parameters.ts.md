__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 636,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 38,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Map",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 11,
        "end": 38,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 11,
            "end": 13,
            "members": []
          },
          {
            "type": "TSMappedType",
            "start": 16,
            "end": 38,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 24,
              "end": 30
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 33,
              "end": 36
            },
            "optional": false,
            "readonly": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 39,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 58,
        "decorators": [],
        "name": "MapOrUndefined",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 61,
        "end": 86,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 61,
            "end": 64,
            "typeName": {
              "type": "Identifier",
              "start": 61,
              "end": 64,
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 67,
            "end": 76
          },
          {
            "type": "TSLiteralType",
            "start": 79,
            "end": 86,
            "literal": {
              "type": "Literal",
              "start": 79,
              "end": 86,
              "value": "dummy",
              "raw": "\"dummy\""
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 87,
      "end": 359,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 94,
        "end": 359,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 100,
          "end": 103,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 104,
          "end": 359,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 108,
              "end": 357,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 108,
                "end": 119,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 119,
                "end": 357,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "start": 164,
                    "end": 202,
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "start": 171,
                      "end": 202,
                      "decorators": [],
                      "name": "reuseTypeNode",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 185,
                        "end": 202,
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "start": 187,
                          "end": 202,
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "start": 187,
                              "end": 190,
                              "typeName": {
                                "type": "Identifier",
                                "start": 187,
                                "end": 190,
                                "decorators": [],
                                "name": "Map",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            {
                              "type": "TSUndefinedKeyword",
                              "start": 193,
                              "end": 202
                            }
                          ]
                        }
                      }
                    },
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSParameterProperty",
                    "start": 208,
                    "end": 264,
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "start": 215,
                      "end": 264,
                      "decorators": [],
                      "name": "reuseTypeNode2",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 230,
                        "end": 264,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 232,
                          "end": 264,
                          "typeName": {
                            "type": "Identifier",
                            "start": 232,
                            "end": 239,
                            "decorators": [],
                            "name": "Exclude",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 239,
                            "end": 264,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 240,
                                "end": 254,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 240,
                                  "end": 254,
                                  "decorators": [],
                                  "name": "MapOrUndefined",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSLiteralType",
                                "start": 256,
                                "end": 263,
                                "literal": {
                                  "type": "Literal",
                                  "start": 256,
                                  "end": 263,
                                  "value": "dummy",
                                  "raw": "\"dummy\""
                                }
                              }
                            ]
                          }
                        }
                      }
                    },
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSParameterProperty",
                    "start": 324,
                    "end": 348,
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "start": 331,
                      "end": 348,
                      "decorators": [],
                      "name": "resolveType",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 343,
                        "end": 348,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 345,
                          "end": 348,
                          "typeName": {
                            "type": "Identifier",
                            "start": 345,
                            "end": 348,
                            "decorators": [],
                            "name": "Map",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "readonly": false,
                    "static": false
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 354,
                  "end": 357,
                  "body": []
                },
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 361,
      "end": 636,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 368,
        "end": 636,
        "id": {
          "type": "Identifier",
          "start": 377,
          "end": 381,
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 426,
            "end": 461,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 426,
              "end": 456,
              "decorators": [],
              "name": "reuseTypeNode",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 439,
                "end": 456,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 441,
                  "end": 456,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 441,
                      "end": 444,
                      "typeName": {
                        "type": "Identifier",
                        "start": 441,
                        "end": 444,
                        "decorators": [],
                        "name": "Map",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 447,
                      "end": 456
                    }
                  ]
                }
              }
            },
            "right": {
              "type": "ObjectExpression",
              "start": 459,
              "end": 461,
              "properties": []
            },
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "AssignmentPattern",
            "start": 467,
            "end": 521,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 467,
              "end": 515,
              "decorators": [],
              "name": "reuseTypeNode2",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 481,
                "end": 515,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 483,
                  "end": 515,
                  "typeName": {
                    "type": "Identifier",
                    "start": 483,
                    "end": 490,
                    "decorators": [],
                    "name": "Exclude",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 490,
                    "end": 515,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 491,
                        "end": 505,
                        "typeName": {
                          "type": "Identifier",
                          "start": 491,
                          "end": 505,
                          "decorators": [],
                          "name": "MapOrUndefined",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 507,
                        "end": 514,
                        "literal": {
                          "type": "Literal",
                          "start": 507,
                          "end": 514,
                          "value": "dummy",
                          "raw": "\"dummy\""
                        }
                      }
                    ]
                  }
                }
              }
            },
            "right": {
              "type": "ObjectExpression",
              "start": 519,
              "end": 521,
              "properties": []
            },
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "AssignmentPattern",
            "start": 581,
            "end": 602,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 581,
              "end": 597,
              "decorators": [],
              "name": "resolveType",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 592,
                "end": 597,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 594,
                  "end": 597,
                  "typeName": {
                    "type": "Identifier",
                    "start": 594,
                    "end": 597,
                    "decorators": [],
                    "name": "Map",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "right": {
              "type": "ObjectExpression",
              "start": 600,
              "end": 602,
              "properties": []
            },
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 609,
            "end": 630,
            "decorators": [],
            "name": "requiredParam",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 622,
              "end": 630,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 624,
                "end": 630
              }
            }
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 632,
          "end": 636,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
