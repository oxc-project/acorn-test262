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
        "name": "Validate",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": "text",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 83,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 77,
                "end": 83
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 85,
            "end": 96,
            "name": "pos",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 96,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 90,
                "end": 96
              }
            },
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 98,
            "end": 108,
            "name": "self",
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
                  "name": "Rule",
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
        "name": "FullRule",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "validate",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                      "name": "RegExp",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "Validate",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
              "name": "normalize",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "match",
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
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                    },
                    "decorators": [],
                    "optional": false
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
        "name": "Rule",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "FullRule",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 281,
          "end": 402,
          "id": {
            "type": "Identifier",
            "start": 281,
            "end": 299,
            "name": "obj",
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
                      "name": "field",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                          "name": "Rule",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
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
            "type": "ObjectExpression",
            "start": 302,
            "end": 402,
            "properties": [
              {
                "type": "Property",
                "start": 308,
                "end": 400,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 308,
                  "end": 313,
                  "name": "field",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 325,
                        "end": 333,
                        "name": "validate",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 335,
                        "end": 356,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 336,
                            "end": 338,
                            "name": "_t",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          {
                            "type": "Identifier",
                            "start": 340,
                            "end": 342,
                            "name": "_p",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          {
                            "type": "Identifier",
                            "start": 344,
                            "end": 346,
                            "name": "_s",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "Literal",
                          "start": 351,
                          "end": 356,
                          "value": false,
                          "raw": "false"
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 366,
                      "end": 393,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 366,
                        "end": 375,
                        "name": "normalize",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 377,
                        "end": 393,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 377,
                            "end": 382,
                            "name": "match",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "MemberExpression",
                          "start": 386,
                          "end": 393,
                          "object": {
                            "type": "Identifier",
                            "start": 386,
                            "end": 391,
                            "name": "match",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 392,
                            "end": 393,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
