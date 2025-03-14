classVarianceResolveCircularity2.ts
```json
{
  "type": "Program",
  "start": 17,
  "end": 346,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 17,
      "end": 27,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 29,
      "end": 157,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 42,
        "end": 157,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 48,
            "end": 61,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 51,
              "decorators": [],
              "name": "num",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 52,
              "end": 60,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 54,
                "end": 60
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 66,
            "end": 104,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 66,
              "end": 71,
              "decorators": [],
              "name": "Value",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 74,
              "end": 103,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 74,
                "end": 99,
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "start": 74,
                  "end": 95,
                  "arguments": [
                    {
                      "type": "NewExpression",
                      "start": 81,
                      "end": 94,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 89,
                          "end": 93
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 85,
                        "end": 88,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 74,
                    "end": 80,
                    "decorators": [],
                    "name": "callme",
                    "optional": false
                  },
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 99,
                  "decorators": [],
                  "name": "bar",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 100,
                "end": 103,
                "decorators": [],
                "name": "num",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 109,
            "end": 155,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 114,
              "decorators": [],
              "name": "Field",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 122,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 116,
                "end": 122
              }
            },
            "value": {
              "type": "MemberExpression",
              "start": 125,
              "end": 154,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 125,
                "end": 150,
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "start": 125,
                  "end": 146,
                  "arguments": [
                    {
                      "type": "NewExpression",
                      "start": 132,
                      "end": 145,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 140,
                          "end": 144
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 136,
                        "end": 139,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 131,
                    "decorators": [],
                    "name": "callme",
                    "optional": false
                  },
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 150,
                  "decorators": [],
                  "name": "bar",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 151,
                "end": 154,
                "decorators": [],
                "name": "num",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 38,
        "decorators": [],
        "name": "Bar",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 38,
        "end": 41,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 39,
            "end": 40,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 158,
      "end": 205,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 175,
        "end": 181,
        "decorators": [],
        "name": "callme",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 182,
          "end": 193,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 183,
            "end": 193,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 185,
              "end": 193,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 188,
                "end": 193,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 189,
                    "end": 192
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 185,
                "end": 188,
                "decorators": [],
                "name": "Foo",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 194,
        "end": 204,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 196,
          "end": 204,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 199,
            "end": 204,
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 200,
                "end": 203
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 196,
            "end": 199,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 206,
      "end": 249,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 223,
        "end": 229,
        "decorators": [],
        "name": "callme",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 230,
          "end": 239,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 231,
            "end": 239,
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 233,
              "end": 239
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 240,
        "end": 248,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 242,
          "end": 248
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 251,
      "end": 346,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 264,
        "end": 346,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 270,
            "end": 283,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "start": 270,
              "end": 273,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 274,
              "end": 282,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 276,
                "end": 282,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 279,
                  "end": 282,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 280,
                      "end": 281,
                      "typeName": {
                        "type": "Identifier",
                        "start": 280,
                        "end": 281,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 276,
                  "end": 279,
                  "decorators": [],
                  "name": "Bar",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 288,
            "end": 344,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 288,
              "end": 299,
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
              "start": 299,
              "end": 344,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 313,
                "end": 344,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 323,
                    "end": 338,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 323,
                      "end": 337,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 323,
                        "end": 331,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 323,
                          "end": 327
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 328,
                          "end": 331,
                          "decorators": [],
                          "name": "bar",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 334,
                        "end": 337,
                        "decorators": [],
                        "name": "bar",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 300,
                  "end": 311,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 303,
                    "end": 311,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 305,
                      "end": 311,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 308,
                        "end": 311,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 309,
                            "end": 310,
                            "typeName": {
                              "type": "Identifier",
                              "start": 309,
                              "end": 310,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 305,
                        "end": 308,
                        "decorators": [],
                        "name": "Bar",
                        "optional": false
                      }
                    }
                  }
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
        "start": 257,
        "end": 260,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 260,
        "end": 263,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 261,
            "end": 262,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 261,
              "end": 262,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
