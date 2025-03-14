assignmentCompatability41.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 446,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 78,
                      "end": 81,
                      "decorators": [],
                      "name": "one",
                      "optional": false
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 83,
                          "end": 84,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 86,
                    "end": 94,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 86,
                      "end": 89,
                      "decorators": [],
                      "name": "two",
                      "optional": false
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 92,
                          "end": 93,
                          "decorators": [],
                          "name": "U",
                          "optional": false
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
                "optional": false
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
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 71,
                      "end": 72,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 73,
                    "end": 74,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 74,
                      "decorators": [],
                      "name": "U",
                      "optional": false
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
                        "optional": false
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
                        "optional": false
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
                        "value": 1
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
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 199,
                    "end": 203,
                    "decorators": [],
                    "name": "obj4",
                    "optional": false
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
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 207,
      "end": 402,
      "body": {
        "type": "TSModuleBlock",
        "start": 224,
        "end": 402,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 230,
            "end": 325,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 244,
              "end": 325,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 275,
                "end": 325,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 277,
                    "end": 323,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 277,
                      "end": 288,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 288,
                      "end": 323,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 321,
                        "end": 323,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 289,
                          "end": 303,
                          "accessibility": "private",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 297,
                            "end": 303,
                            "decorators": [],
                            "name": "one",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 300,
                              "end": 303,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 302,
                                "end": 303,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 302,
                                  "end": 303,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 305,
                          "end": 319,
                          "accessibility": "private",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 313,
                            "end": 319,
                            "decorators": [],
                            "name": "two",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 316,
                              "end": 319,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 318,
                                "end": 319,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 318,
                                  "end": 319,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false
                                }
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 250,
                "end": 269,
                "decorators": [],
                "name": "classWithTwoPrivate",
                "optional": false
              },
              "implements": [],
              "superClass": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 269,
                "end": 274,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 270,
                    "end": 271,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 270,
                      "end": 271,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 272,
                    "end": 273,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 272,
                      "end": 273,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "VariableDeclaration",
            "start": 327,
            "end": 368,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 331,
                "end": 367,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 331,
                  "end": 333,
                  "decorators": [],
                  "name": "x6",
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 336,
                  "end": 367,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 360,
                      "end": 361,
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "Literal",
                      "start": 363,
                      "end": 366,
                      "raw": "\"a\"",
                      "value": "a"
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 340,
                    "end": 359,
                    "decorators": [],
                    "name": "classWithTwoPrivate",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "EmptyStatement",
            "start": 368,
            "end": 369
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 374,
            "end": 400,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 381,
              "end": 400,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 385,
                  "end": 399,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 385,
                    "end": 394,
                    "decorators": [],
                    "name": "__val__x6",
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 397,
                    "end": 399,
                    "decorators": [],
                    "name": "x6",
                    "optional": false
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
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ExpressionStatement",
      "start": 403,
      "end": 446,
      "expression": {
        "type": "AssignmentExpression",
        "start": 403,
        "end": 446,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 403,
          "end": 422,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 403,
            "end": 412,
            "decorators": [],
            "name": "__test2__",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 413,
            "end": 422,
            "decorators": [],
            "name": "__val__x6",
            "optional": false
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 425,
          "end": 446,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 425,
            "end": 434,
            "decorators": [],
            "name": "__test1__",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 435,
            "end": 446,
            "decorators": [],
            "name": "__val__obj4",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script"
}
```
