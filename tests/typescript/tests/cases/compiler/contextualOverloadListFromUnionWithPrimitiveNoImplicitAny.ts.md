__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 54,
  "end": 403,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 54,
      "end": 130,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 67,
        "decorators": [],
        "name": "Validate",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 70,
        "end": 129,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 71,
            "end": 83,
            "decorators": [],
            "name": "text",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 83,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 77,
                "end": 83
              }
            }
          },
          {
            "type": "Identifier",
            "start": 85,
            "end": 96,
            "decorators": [],
            "name": "pos",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 96,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 90,
                "end": 96
              }
            }
          },
          {
            "type": "Identifier",
            "start": 98,
            "end": 108,
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 102,
              "end": 108,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 104,
                "end": 108,
                "typeName": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 108,
                  "decorators": [],
                  "name": "Rule",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 110,
          "end": 129,
          "typeAnnotation": {
            "type": "TSUnionType",
            "start": 113,
            "end": 129,
            "types": [
              {
                "type": "TSNumberKeyword",
                "start": 113,
                "end": 119
              },
              {
                "type": "TSBooleanKeyword",
                "start": 122,
                "end": 129
              }
            ]
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 131,
      "end": 241,
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 149,
        "decorators": [],
        "name": "FullRule",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 150,
        "end": 241,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 156,
            "end": 193,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 156,
              "end": 164,
              "decorators": [],
              "name": "validate",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 164,
              "end": 192,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 166,
                "end": 192,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 166,
                    "end": 172
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 175,
                    "end": 181,
                    "typeName": {
                      "type": "Identifier",
                      "start": 175,
                      "end": 181,
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 184,
                    "end": 192,
                    "typeName": {
                      "type": "Identifier",
                      "start": 184,
                      "end": 192,
                      "decorators": [],
                      "name": "Validate",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 198,
            "end": 239,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 198,
              "end": 207,
              "decorators": [],
              "name": "normalize",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 208,
              "end": 238,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 210,
                "end": 238,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 211,
                    "end": 229,
                    "decorators": [],
                    "name": "match",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 216,
                      "end": 229,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 218,
                        "end": 229,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 219,
                            "end": 228,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 219,
                              "end": 220,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 220,
                              "end": 228,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 222,
                                "end": 228
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 231,
                  "end": 238,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 234,
                    "end": 238
                  }
                }
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
      "type": "TSTypeAliasDeclaration",
      "start": 243,
      "end": 273,
      "id": {
        "type": "Identifier",
        "start": 248,
        "end": 252,
        "decorators": [],
        "name": "Rule",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 255,
        "end": 272,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 255,
            "end": 261
          },
          {
            "type": "TSTypeReference",
            "start": 264,
            "end": 272,
            "typeName": {
              "type": "Identifier",
              "start": 264,
              "end": 272,
              "decorators": [],
              "name": "FullRule",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 275,
      "end": 403,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 281,
          "end": 402,
          "id": {
            "type": "Identifier",
            "start": 281,
            "end": 299,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 284,
              "end": 299,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 286,
                "end": 299,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 287,
                    "end": 298,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 287,
                      "end": 292,
                      "decorators": [],
                      "name": "field",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 292,
                      "end": 298,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 294,
                        "end": 298,
                        "typeName": {
                          "type": "Identifier",
                          "start": 294,
                          "end": 298,
                          "decorators": [],
                          "name": "Rule",
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
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 302,
            "end": 402,
            "properties": [
              {
                "type": "Property",
                "start": 308,
                "end": 400,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 308,
                  "end": 313,
                  "decorators": [],
                  "name": "field",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 315,
                  "end": 400,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 325,
                      "end": 356,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 325,
                        "end": 333,
                        "decorators": [],
                        "name": "validate",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 335,
                        "end": 356,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 336,
                            "end": 338,
                            "decorators": [],
                            "name": "_t",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          {
                            "type": "Identifier",
                            "start": 340,
                            "end": 342,
                            "decorators": [],
                            "name": "_p",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          {
                            "type": "Identifier",
                            "start": 344,
                            "end": 346,
                            "decorators": [],
                            "name": "_s",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "Literal",
                          "start": 351,
                          "end": 356,
                          "value": false,
                          "raw": "false"
                        },
                        "id": null,
                        "generator": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 366,
                      "end": 393,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 366,
                        "end": 375,
                        "decorators": [],
                        "name": "normalize",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 377,
                        "end": 393,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 377,
                            "end": 382,
                            "decorators": [],
                            "name": "match",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "MemberExpression",
                          "start": 386,
                          "end": 393,
                          "object": {
                            "type": "Identifier",
                            "start": 386,
                            "end": 391,
                            "decorators": [],
                            "name": "match",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 392,
                            "end": 393,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "id": null,
                        "generator": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
