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
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 73,
        "name": "Config",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 73,
        "end": 102,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 74,
            "end": 101,
            "name": {
              "type": "Identifier",
              "start": 74,
              "end": 76,
              "name": "T1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 85,
              "end": 101,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 87,
                  "end": 99,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 87,
                    "end": 91,
                    "name": "type",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 91,
                    "end": 99,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 93,
                      "end": 99
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 103,
        "end": 119,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 107,
            "end": 117,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 107,
              "end": 112,
              "name": "useIt",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 112,
              "end": 116,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 114,
                "end": 116,
                "typeName": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 116,
                  "name": "T1",
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
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 121,
      "end": 262,
      "id": {
        "type": "Identifier",
        "start": 138,
        "end": 142,
        "name": "test",
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
          "start": 213,
          "end": 251,
          "name": "config",
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
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 223,
                        "end": 235,
                        "name": "produceThing",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 235,
                        "end": 239,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 237,
                          "end": 239,
                          "typeName": {
                            "type": "Identifier",
                            "start": 237,
                            "end": 239,
                            "name": "T1",
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
                },
                {
                  "type": "TSTypeReference",
                  "start": 244,
                  "end": 251,
                  "typeName": {
                    "type": "Identifier",
                    "start": 244,
                    "end": 251,
                    "name": "TConfig",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
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
        "start": 142,
        "end": 212,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 146,
            "end": 173,
            "name": {
              "type": "Identifier",
              "start": 146,
              "end": 148,
              "name": "T1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 157,
              "end": 173,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 159,
                  "end": 171,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 159,
                    "end": 163,
                    "name": "type",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 163,
                    "end": 171,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 165,
                      "end": 171
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 177,
            "end": 209,
            "name": {
              "type": "Identifier",
              "start": 183,
              "end": 190,
              "name": "TConfig",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 199,
              "end": 209,
              "typeName": {
                "type": "Identifier",
                "start": 199,
                "end": 205,
                "name": "Config",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 205,
                "end": 209,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 206,
                    "end": 208,
                    "typeName": {
                      "type": "Identifier",
                      "start": 206,
                      "end": 208,
                      "name": "T1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 252,
        "end": 261,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 254,
          "end": 261,
          "typeName": {
            "type": "Identifier",
            "start": 254,
            "end": 261,
            "name": "TConfig",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
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
          "id": {
            "type": "Identifier",
            "start": 270,
            "end": 276,
            "name": "result",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 279,
            "end": 380,
            "callee": {
              "type": "Identifier",
              "start": 279,
              "end": 283,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 288,
                      "end": 300,
                      "name": "produceThing",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 314,
                              "end": 318,
                              "name": "type",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
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
                                  "value": "foo",
                                  "raw": "\"foo\""
                                }
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 334,
                    "end": 363,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 334,
                      "end": 339,
                      "name": "useIt",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 341,
                      "end": 363,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 347,
                          "end": 358,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 347,
                            "end": 351,
                            "name": "type",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 353,
                            "end": 358,
                            "value": "foo",
                            "raw": "\"foo\""
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 367,
                    "end": 376,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 367,
                      "end": 372,
                      "name": "extra",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 374,
                      "end": 376,
                      "value": 10,
                      "raw": "10"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
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
