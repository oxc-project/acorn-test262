__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 34,
  "end": 325,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 34,
      "end": 183,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 47,
        "decorators": [],
        "name": "Arg",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 47,
        "end": 114,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 48,
            "end": 55,
            "name": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 52,
              "end": 55
            },
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 57,
            "end": 113,
            "name": {
              "type": "Identifier",
              "start": 57,
              "end": 63,
              "decorators": [],
              "name": "Params",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 72,
              "end": 91,
              "typeName": {
                "type": "Identifier",
                "start": 72,
                "end": 78,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 78,
                "end": 91,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 79,
                    "end": 85
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 87,
                    "end": 90
                  }
                ]
              }
            },
            "default": {
              "type": "TSTypeReference",
              "start": 94,
              "end": 113,
              "typeName": {
                "type": "Identifier",
                "start": 94,
                "end": 100,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 100,
                "end": 113,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 101,
                    "end": 107
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 109,
                    "end": 112
                  }
                ]
              }
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 115,
        "end": 183,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 121,
            "end": 146,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 121,
              "end": 138,
              "value": "__is_argument__",
              "raw": "\"__is_argument__\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 145,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 141,
                "end": 145,
                "literal": {
                  "type": "Literal",
                  "start": 141,
                  "end": 145,
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 151,
            "end": 160,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 151,
              "end": 155,
              "decorators": [],
              "name": "meta",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 156,
              "end": 159,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 158,
                "end": 159,
                "typeName": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 159,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 165,
            "end": 181,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 165,
              "end": 171,
              "decorators": [],
              "name": "params",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 180,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 174,
                "end": 180,
                "typeName": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 180,
                  "decorators": [],
                  "name": "Params",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 185,
      "end": 324,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 192,
        "end": 324,
        "id": {
          "type": "Identifier",
          "start": 201,
          "end": 211,
          "decorators": [],
          "name": "myFunction",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 211,
          "end": 273,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 212,
              "end": 219,
              "name": {
                "type": "Identifier",
                "start": 212,
                "end": 213,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": {
                "type": "TSAnyKeyword",
                "start": 216,
                "end": 219
              },
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 221,
              "end": 272,
              "name": {
                "type": "Identifier",
                "start": 221,
                "end": 222,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 231,
                "end": 250,
                "typeName": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 237,
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 237,
                  "end": 250,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 238,
                      "end": 244
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 246,
                      "end": 249
                    }
                  ]
                }
              },
              "default": {
                "type": "TSTypeReference",
                "start": 253,
                "end": 272,
                "typeName": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 259,
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 259,
                  "end": 272,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 260,
                      "end": 266
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 268,
                      "end": 271
                    }
                  ]
                }
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "params": [
          {
            "type": "Identifier",
            "start": 274,
            "end": 288,
            "decorators": [],
            "name": "arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 277,
              "end": 288,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 279,
                "end": 288,
                "typeName": {
                  "type": "Identifier",
                  "start": 279,
                  "end": 282,
                  "decorators": [],
                  "name": "Arg",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 282,
                  "end": 288,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 283,
                      "end": 284,
                      "typeName": {
                        "type": "Identifier",
                        "start": 283,
                        "end": 284,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 286,
                      "end": 287,
                      "typeName": {
                        "type": "Identifier",
                        "start": 286,
                        "end": 287,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 290,
          "end": 324,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 292,
              "end": 322,
              "argument": {
                "type": "TSAsExpression",
                "start": 299,
                "end": 322,
                "expression": {
                  "type": "LogicalExpression",
                  "start": 300,
                  "end": 316,
                  "left": {
                    "type": "MemberExpression",
                    "start": 300,
                    "end": 310,
                    "object": {
                      "type": "Identifier",
                      "start": 300,
                      "end": 303,
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 304,
                      "end": 310,
                      "decorators": [],
                      "name": "params",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "operator": "||",
                  "right": {
                    "type": "ObjectExpression",
                    "start": 314,
                    "end": 316,
                    "properties": []
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 321,
                  "end": 322,
                  "typeName": {
                    "type": "Identifier",
                    "start": 321,
                    "end": 322,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          ]
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 123,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 49,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 7,
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 10,
        "end": 48,
        "exprName": {
          "type": "TSImportType",
          "start": 17,
          "end": 48,
          "argument": {
            "type": "TSLiteralType",
            "start": 24,
            "end": 36,
            "literal": {
              "type": "Literal",
              "start": 24,
              "end": 36,
              "value": "./input.js",
              "raw": "'./input.js'"
            }
          },
          "options": null,
          "qualifier": {
            "type": "Identifier",
            "start": 38,
            "end": 48,
            "decorators": [],
            "name": "myFunction",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 50,
      "end": 123,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 57,
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 60,
        "end": 122,
        "exprName": {
          "type": "TSImportType",
          "start": 67,
          "end": 122,
          "argument": {
            "type": "TSLiteralType",
            "start": 74,
            "end": 86,
            "literal": {
              "type": "Literal",
              "start": 74,
              "end": 86,
              "value": "./input.js",
              "raw": "'./input.js'"
            }
          },
          "options": null,
          "qualifier": {
            "type": "Identifier",
            "start": 88,
            "end": 98,
            "decorators": [],
            "name": "myFunction",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 98,
            "end": 122,
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 99,
                "end": 102
              },
              {
                "type": "TSTypeLiteral",
                "start": 104,
                "end": 121,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 106,
                    "end": 119,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 106,
                      "end": 110,
                      "decorators": [],
                      "name": "slug",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 110,
                      "end": 119,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 112,
                        "end": 119,
                        "literal": {
                          "type": "Literal",
                          "start": 112,
                          "end": 119,
                          "value": "hello",
                          "raw": "'hello'"
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
        },
        "typeArguments": null
      },
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
