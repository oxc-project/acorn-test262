__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 381,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 57,
      "end": 119,
      "body": {
        "type": "TSInterfaceBody",
        "start": 103,
        "end": 119,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 107,
            "end": 117,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 107,
              "end": 112,
              "decorators": [],
              "name": "useIt",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 112,
              "end": 116,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 114,
                "end": 116,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 116,
                  "decorators": [],
                  "name": "T1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 73,
        "decorators": [],
        "name": "Config",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 73,
        "end": 102,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 74,
            "end": 101,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 85,
              "end": 101,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 87,
                  "end": 99,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 87,
                    "end": 91,
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 91,
                    "end": 99,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 93,
                      "end": 99
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 74,
              "end": 76,
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 121,
      "end": 262,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 138,
        "end": 142,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 213,
          "end": 251,
          "decorators": [],
          "name": "config",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 219,
            "end": 251,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 221,
              "end": 251,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 221,
                  "end": 241,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 223,
                      "end": 239,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 223,
                        "end": 235,
                        "decorators": [],
                        "name": "produceThing",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 235,
                        "end": 239,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 237,
                          "end": 239,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 237,
                            "end": 239,
                            "decorators": [],
                            "name": "T1",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "TSTypeReference",
                  "start": 244,
                  "end": 251,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 244,
                    "end": 251,
                    "decorators": [],
                    "name": "TConfig",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 252,
        "end": 261,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 254,
          "end": 261,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 254,
            "end": 261,
            "decorators": [],
            "name": "TConfig",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 142,
        "end": 212,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 146,
            "end": 173,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 157,
              "end": 173,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 159,
                  "end": 171,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 159,
                    "end": 163,
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 163,
                    "end": 171,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 165,
                      "end": 171
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 146,
              "end": 148,
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 177,
            "end": 209,
            "const": true,
            "constraint": {
              "type": "TSTypeReference",
              "start": 199,
              "end": 209,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 205,
                "end": 209,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 206,
                    "end": 208,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 206,
                      "end": 208,
                      "decorators": [],
                      "name": "T1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 199,
                "end": 205,
                "decorators": [],
                "name": "Config",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 183,
              "end": 190,
              "decorators": [],
              "name": "TConfig",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 264,
      "end": 381,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 270,
          "end": 380,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 270,
            "end": 276,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 279,
            "end": 380,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 284,
                "end": 379,
                "properties": [
                  {
                    "type": "Property",
                    "start": 288,
                    "end": 330,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 288,
                      "end": 300,
                      "decorators": [],
                      "name": "produceThing",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "TSAsExpression",
                      "start": 302,
                      "end": 330,
                      "expression": {
                        "type": "ObjectExpression",
                        "start": 302,
                        "end": 304,
                        "properties": []
                      },
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 308,
                        "end": 330,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 314,
                            "end": 326,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 314,
                              "end": 318,
                              "decorators": [],
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 318,
                              "end": 325,
                              "typeAnnotation": {
                                "type": "TSLiteralType",
                                "start": 320,
                                "end": 325,
                                "literal": {
                                  "type": "Literal",
                                  "start": 320,
                                  "end": 325,
                                  "raw": "\"foo\"",
                                  "value": "foo"
                                }
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "start": 334,
                    "end": 363,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 334,
                      "end": 339,
                      "decorators": [],
                      "name": "useIt",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 341,
                      "end": 363,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 347,
                          "end": 358,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 347,
                            "end": 351,
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 353,
                            "end": 358,
                            "raw": "\"foo\"",
                            "value": "foo"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 367,
                    "end": 376,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 367,
                      "end": 372,
                      "decorators": [],
                      "name": "extra",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 374,
                      "end": 376,
                      "raw": "10",
                      "value": 10
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 279,
              "end": 283,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
