implicitAnyAmbients.ts
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 28,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 53,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 48,
                    "end": 53,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 50,
                      "end": 53
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "TSDeclareFunction",
            "start": 60,
            "end": 74,
            "async": false,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 69,
              "end": 70,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 71,
                "end": 72,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            ]
          },
          {
            "type": "TSDeclareFunction",
            "start": 89,
            "end": 109,
            "async": false,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 98,
              "end": 100,
              "decorators": [],
              "name": "f2",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 101,
                "end": 107,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 102,
                  "end": 107,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 104,
                    "end": 107
                  }
                }
              }
            ]
          },
          {
            "type": "TSDeclareFunction",
            "start": 123,
            "end": 148,
            "async": false,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 132,
              "end": 134,
              "decorators": [],
              "name": "f3",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 135,
                "end": 141,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 136,
                  "end": 141,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 138,
                    "end": 141
                  }
                }
              }
            ],
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
            "body": {
              "type": "TSInterfaceBody",
              "start": 166,
              "end": 255,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 176,
                  "end": 182,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 176,
                    "end": 179,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 200,
                  "end": 213,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 200,
                    "end": 204,
                    "decorators": [],
                    "name": "foo2",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 205,
                      "end": 211,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 206,
                        "end": 211,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 208,
                          "end": 211
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 231,
                  "end": 249,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 231,
                    "end": 235,
                    "decorators": [],
                    "name": "foo3",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 236,
                      "end": 242,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 237,
                        "end": 242,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 239,
                          "end": 242
                        }
                      }
                    }
                  ],
                  "readonly": false,
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
                  "static": false
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 164,
              "end": 165,
              "decorators": [],
              "name": "I",
              "optional": false
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 261,
            "end": 358,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 269,
              "end": 358,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 279,
                  "end": 285,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 279,
                    "end": 282,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 282,
                    "end": 285,
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 303,
                  "end": 316,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 303,
                    "end": 307,
                    "decorators": [],
                    "name": "foo2",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 307,
                    "end": 316,
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 308,
                        "end": 314,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 309,
                          "end": 314,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 311,
                            "end": 314
                          }
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 334,
                  "end": 352,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 334,
                    "end": 338,
                    "decorators": [],
                    "name": "foo3",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 338,
                    "end": 352,
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 339,
                        "end": 345,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 340,
                          "end": 345,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 342,
                            "end": 345
                          }
                        }
                      }
                    ],
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
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 267,
              "end": 268,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "TSModuleDeclaration",
            "start": 364,
            "end": 404,
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
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 387,
                        "end": 388,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      },
                      "init": null
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 371,
              "end": 372,
              "decorators": [],
              "name": "n",
              "optional": false
            },
            "kind": "module"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 410,
            "end": 424,
            "id": {
              "type": "Identifier",
              "start": 417,
              "end": 419,
              "decorators": [],
              "name": "m2",
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "Identifier",
              "start": 422,
              "end": 423,
              "decorators": [],
              "name": "n",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "decorators": [],
        "name": "m",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
