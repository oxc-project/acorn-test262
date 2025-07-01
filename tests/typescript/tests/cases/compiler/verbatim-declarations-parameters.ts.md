__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Map",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 11,
            "end": 13
          },
          {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 20
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
            "readonly": null,
            "start": 16,
            "end": 38
          }
        ],
        "start": 11,
        "end": 38
      },
      "declare": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MapOrUndefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 58
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 64
            },
            "typeArguments": null,
            "start": 61,
            "end": 64
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 67,
            "end": 76
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "dummy",
              "raw": "\"dummy\"",
              "start": 79,
              "end": 86
            },
            "start": 79,
            "end": 86
          }
        ],
        "start": 61,
        "end": 86
      },
      "declare": false,
      "start": 39,
      "end": 86
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 100,
          "end": 103
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 108,
                "end": 119
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
                    "type": "TSParameterProperty",
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reuseTypeNode",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Map",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 187,
                                "end": 190
                              },
                              "typeArguments": null,
                              "start": 187,
                              "end": 190
                            },
                            {
                              "type": "TSUndefinedKeyword",
                              "start": 193,
                              "end": 202
                            }
                          ],
                          "start": 187,
                          "end": 202
                        },
                        "start": 185,
                        "end": 202
                      },
                      "start": 171,
                      "end": 202
                    },
                    "readonly": false,
                    "static": false,
                    "start": 164,
                    "end": 202
                  },
                  {
                    "type": "TSParameterProperty",
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reuseTypeNode2",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Exclude",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 232,
                            "end": 239
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "MapOrUndefined",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 240,
                                  "end": 254
                                },
                                "typeArguments": null,
                                "start": 240,
                                "end": 254
                              },
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "dummy",
                                  "raw": "\"dummy\"",
                                  "start": 256,
                                  "end": 263
                                },
                                "start": 256,
                                "end": 263
                              }
                            ],
                            "start": 239,
                            "end": 264
                          },
                          "start": 232,
                          "end": 264
                        },
                        "start": 230,
                        "end": 264
                      },
                      "start": 215,
                      "end": 264
                    },
                    "readonly": false,
                    "static": false,
                    "start": 208,
                    "end": 264
                  },
                  {
                    "type": "TSParameterProperty",
                    "accessibility": "public",
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolveType",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Map",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 345,
                            "end": 348
                          },
                          "typeArguments": null,
                          "start": 345,
                          "end": 348
                        },
                        "start": 343,
                        "end": 348
                      },
                      "start": 331,
                      "end": 348
                    },
                    "readonly": false,
                    "static": false,
                    "start": 324,
                    "end": 348
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 354,
                  "end": 357
                },
                "expression": false,
                "start": 119,
                "end": 357
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 108,
              "end": 357
            }
          ],
          "start": 104,
          "end": 359
        },
        "abstract": false,
        "declare": false,
        "start": 94,
        "end": 359
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 87,
      "end": 359
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 377,
          "end": 381
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "reuseTypeNode",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Map",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 441,
                        "end": 444
                      },
                      "typeArguments": null,
                      "start": 441,
                      "end": 444
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 447,
                      "end": 456
                    }
                  ],
                  "start": 441,
                  "end": 456
                },
                "start": 439,
                "end": 456
              },
              "start": 426,
              "end": 456
            },
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 459,
              "end": 461
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 426,
            "end": 461
          },
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "reuseTypeNode2",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Exclude",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 483,
                    "end": 490
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MapOrUndefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 491,
                          "end": 505
                        },
                        "typeArguments": null,
                        "start": 491,
                        "end": 505
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "dummy",
                          "raw": "\"dummy\"",
                          "start": 507,
                          "end": 514
                        },
                        "start": 507,
                        "end": 514
                      }
                    ],
                    "start": 490,
                    "end": 515
                  },
                  "start": 483,
                  "end": 515
                },
                "start": 481,
                "end": 515
              },
              "start": 467,
              "end": 515
            },
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 519,
              "end": 521
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 467,
            "end": 521
          },
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "resolveType",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 594,
                    "end": 597
                  },
                  "typeArguments": null,
                  "start": 594,
                  "end": 597
                },
                "start": 592,
                "end": 597
              },
              "start": 581,
              "end": 597
            },
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 600,
              "end": 602
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 581,
            "end": 602
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "requiredParam",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 624,
                "end": 630
              },
              "start": 622,
              "end": 630
            },
            "start": 609,
            "end": 630
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 632,
          "end": 636
        },
        "expression": false,
        "start": 368,
        "end": 636
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 361,
      "end": 636
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 636
}
```
