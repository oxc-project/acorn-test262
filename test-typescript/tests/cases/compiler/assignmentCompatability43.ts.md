__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 451,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 206,
      "body": {
        "type": "TSModuleBlock",
        "start": 17,
        "end": 206,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 23,
            "end": 96,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 30,
              "end": 96,
              "body": {
                "type": "TSInterfaceBody",
                "start": 76,
                "end": 96,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 78,
                    "end": 85,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 78,
                      "end": 81,
                      "decorators": [],
                      "name": "one",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 81,
                      "end": 84,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 83,
                        "end": 84,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 83,
                          "end": 84,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 86,
                    "end": 94,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 86,
                      "end": 89,
                      "decorators": [],
                      "name": "two",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 90,
                      "end": 93,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 92,
                        "end": 93,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 92,
                          "end": 93,
                          "decorators": [],
                          "name": "U",
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
                "start": 40,
                "end": 70,
                "decorators": [],
                "name": "interfaceWithPublicAndOptional",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 70,
                "end": 75,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 71,
                    "end": 72,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 71,
                      "end": 72,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 73,
                    "end": 74,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 74,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "EmptyStatement",
            "start": 96,
            "end": 97
          },
          {
            "type": "VariableDeclaration",
            "start": 99,
            "end": 168,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 103,
                "end": 167,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 154,
                  "decorators": [],
                  "name": "obj4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 107,
                    "end": 154,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 109,
                      "end": 154,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 139,
                        "end": 154,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 140,
                            "end": 146
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 147,
                            "end": 153
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 139,
                        "decorators": [],
                        "name": "interfaceWithPublicAndOptional",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 157,
                  "end": 167,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 159,
                      "end": 165,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 159,
                        "end": 162,
                        "decorators": [],
                        "name": "one",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 164,
                        "end": 165,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "EmptyStatement",
            "start": 168,
            "end": 169
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 174,
            "end": 204,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 181,
              "end": 204,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 185,
                  "end": 203,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 185,
                    "end": 196,
                    "decorators": [],
                    "name": "__val__obj4",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 199,
                    "end": 203,
                    "decorators": [],
                    "name": "obj4",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 16,
        "decorators": [],
        "name": "__test1__",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 207,
      "end": 405,
      "body": {
        "type": "TSModuleBlock",
        "start": 224,
        "end": 405,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 230,
            "end": 302,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 255,
              "end": 302,
              "body": {
                "type": "TSInterfaceBody",
                "start": 283,
                "end": 302,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 285,
                    "end": 292,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 285,
                      "end": 288,
                      "decorators": [],
                      "name": "one",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 288,
                      "end": 291,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 290,
                        "end": 291,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 290,
                          "end": 291,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 293,
                    "end": 300,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 293,
                      "end": 296,
                      "decorators": [],
                      "name": "two",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 296,
                      "end": 299,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 298,
                        "end": 299,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 298,
                          "end": 299,
                          "decorators": [],
                          "name": "U",
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
                "start": 265,
                "end": 277,
                "decorators": [],
                "name": "interfaceTwo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 277,
                "end": 282,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 278,
                    "end": 279,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 278,
                      "end": 279,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 280,
                    "end": 281,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 280,
                      "end": 281,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "EmptyStatement",
            "start": 302,
            "end": 303
          },
          {
            "type": "VariableDeclaration",
            "start": 306,
            "end": 367,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 310,
                "end": 366,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 310,
                  "end": 343,
                  "decorators": [],
                  "name": "obj2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 314,
                    "end": 343,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 316,
                      "end": 343,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 328,
                        "end": 343,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 329,
                            "end": 335
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 336,
                            "end": 342
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 316,
                        "end": 328,
                        "decorators": [],
                        "name": "interfaceTwo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 346,
                  "end": 366,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 348,
                      "end": 354,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 348,
                        "end": 351,
                        "decorators": [],
                        "name": "one",
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
                        "end": 354,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    {
                      "type": "Property",
                      "start": 356,
                      "end": 364,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 356,
                        "end": 359,
                        "decorators": [],
                        "name": "two",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 361,
                        "end": 364,
                        "raw": "\"a\"",
                        "value": "a",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "EmptyStatement",
            "start": 367,
            "end": 368
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 373,
            "end": 403,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 380,
              "end": 403,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 384,
                  "end": 402,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 384,
                    "end": 395,
                    "decorators": [],
                    "name": "__val__obj2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 398,
                    "end": 402,
                    "decorators": [],
                    "name": "obj2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 214,
        "end": 223,
        "decorators": [],
        "name": "__test2__",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "ExpressionStatement",
      "start": 406,
      "end": 451,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 406,
        "end": 451,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 406,
          "end": 427,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 406,
            "end": 415,
            "decorators": [],
            "name": "__test2__",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 416,
            "end": 427,
            "decorators": [],
            "name": "__val__obj2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 430,
          "end": 451,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 430,
            "end": 439,
            "decorators": [],
            "name": "__test1__",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 440,
            "end": 451,
            "decorators": [],
            "name": "__val__obj4",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
