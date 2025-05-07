__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 459,
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
      "end": 413,
      "body": {
        "type": "TSModuleBlock",
        "start": 224,
        "end": 413,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 230,
            "end": 303,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 237,
              "end": 303,
              "body": {
                "type": "TSInterfaceBody",
                "start": 283,
                "end": 303,
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
                    "end": 301,
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
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 297,
                      "end": 300,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 299,
                        "end": 300,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 299,
                          "end": 300,
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
                "start": 247,
                "end": 277,
                "decorators": [],
                "name": "interfaceWithPublicAndOptional",
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
            "start": 303,
            "end": 304
          },
          {
            "type": "VariableDeclaration",
            "start": 306,
            "end": 375,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 310,
                "end": 374,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 310,
                  "end": 361,
                  "decorators": [],
                  "name": "obj4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 314,
                    "end": 361,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 316,
                      "end": 361,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 346,
                        "end": 361,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 347,
                            "end": 353
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 354,
                            "end": 360
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 316,
                        "end": 346,
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
                  "start": 364,
                  "end": 374,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 366,
                      "end": 372,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 366,
                        "end": 369,
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
                        "start": 371,
                        "end": 372,
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
            "start": 375,
            "end": 376
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 381,
            "end": 411,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 388,
              "end": 411,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 392,
                  "end": 410,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 392,
                    "end": 403,
                    "decorators": [],
                    "name": "__val__obj4",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 406,
                    "end": 410,
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
      "start": 414,
      "end": 459,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 414,
        "end": 459,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 414,
          "end": 435,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 414,
            "end": 423,
            "decorators": [],
            "name": "__test2__",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 424,
            "end": 435,
            "decorators": [],
            "name": "__val__obj4",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 438,
          "end": 459,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 438,
            "end": 447,
            "decorators": [],
            "name": "__test1__",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 448,
            "end": 459,
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
