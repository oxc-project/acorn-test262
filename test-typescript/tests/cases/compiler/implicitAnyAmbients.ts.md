__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 426,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 426,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "name": "m",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 17,
        "end": 426,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 23,
            "end": 29,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 27,
                "end": 28,
                "id": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 28,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 43,
            "end": 54,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 47,
                "end": 53,
                "id": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 53,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 48,
                    "end": 53,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 50,
                      "end": 53
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 60,
            "end": 74,
            "id": {
              "type": "Identifier",
              "start": 69,
              "end": 70,
              "name": "f",
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
                "start": 71,
                "end": 72,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": null,
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "TSDeclareFunction",
            "start": 89,
            "end": 109,
            "id": {
              "type": "Identifier",
              "start": 98,
              "end": 100,
              "name": "f2",
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
                "start": 101,
                "end": 107,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 102,
                  "end": 107,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 104,
                    "end": 107
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
          {
            "type": "TSDeclareFunction",
            "start": 123,
            "end": 148,
            "id": {
              "type": "Identifier",
              "start": 132,
              "end": 134,
              "name": "f3",
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
                "start": 135,
                "end": 141,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 136,
                  "end": 141,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 138,
                    "end": 141
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": null,
            "declare": false,
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 142,
              "end": 147,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 144,
                "end": 147
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 154,
            "end": 255,
            "id": {
              "type": "Identifier",
              "start": 164,
              "end": 165,
              "name": "I",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 166,
              "end": 255,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 176,
                  "end": 182,
                  "key": {
                    "type": "Identifier",
                    "start": 176,
                    "end": 179,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 200,
                  "end": 213,
                  "key": {
                    "type": "Identifier",
                    "start": 200,
                    "end": 204,
                    "name": "foo2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 205,
                      "end": 211,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 206,
                        "end": 211,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 208,
                          "end": 211
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": null,
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 231,
                  "end": 249,
                  "key": {
                    "type": "Identifier",
                    "start": 231,
                    "end": 235,
                    "name": "foo3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 236,
                      "end": 242,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 237,
                        "end": 242,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 239,
                          "end": 242
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 243,
                    "end": 248,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 245,
                      "end": 248
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 261,
            "end": 358,
            "id": {
              "type": "Identifier",
              "start": 267,
              "end": 268,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 269,
              "end": 358,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 279,
                  "end": 285,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 279,
                    "end": 282,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 282,
                    "end": 285,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 303,
                  "end": 316,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 303,
                    "end": 307,
                    "name": "foo2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 307,
                    "end": 316,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 308,
                        "end": 314,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 309,
                          "end": 314,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 311,
                            "end": 314
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
                },
                {
                  "type": "MethodDefinition",
                  "start": 334,
                  "end": 352,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 334,
                    "end": 338,
                    "name": "foo3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 338,
                    "end": 352,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 339,
                        "end": 345,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 340,
                          "end": 345,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 342,
                            "end": 345
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": null,
                    "declare": false,
                    "typeParameters": null,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 346,
                      "end": 351,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 348,
                        "end": 351
                      }
                    }
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
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
            "type": "TSModuleDeclaration",
            "start": 364,
            "end": 404,
            "id": {
              "type": "Identifier",
              "start": 371,
              "end": 372,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 373,
              "end": 404,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 383,
                  "end": 389,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 387,
                      "end": 388,
                      "id": {
                        "type": "Identifier",
                        "start": 387,
                        "end": 388,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 410,
            "end": 424,
            "id": {
              "type": "Identifier",
              "start": 417,
              "end": 419,
              "name": "m2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 422,
              "end": 423,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "importKind": "value"
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
