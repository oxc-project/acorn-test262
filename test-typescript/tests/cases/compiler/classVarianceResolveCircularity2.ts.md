__ESTREE_TEST__:PASS:
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
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 29,
      "end": 157,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 38,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 42,
        "end": 157,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 48,
            "end": 61,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 51,
              "name": "num",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 66,
            "end": 104,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 66,
              "end": 71,
              "name": "Value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 74,
              "end": 103,
              "object": {
                "type": "MemberExpression",
                "start": 74,
                "end": 99,
                "object": {
                  "type": "CallExpression",
                  "start": 74,
                  "end": 95,
                  "callee": {
                    "type": "Identifier",
                    "start": 74,
                    "end": 80,
                    "name": "callme",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "NewExpression",
                      "start": 81,
                      "end": 94,
                      "callee": {
                        "type": "Identifier",
                        "start": 85,
                        "end": 88,
                        "name": "Foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 89,
                          "end": 93
                        }
                      ],
                      "typeArguments": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 99,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 100,
                "end": 103,
                "name": "num",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 109,
            "end": 155,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 114,
              "name": "Field",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 125,
              "end": 154,
              "object": {
                "type": "MemberExpression",
                "start": 125,
                "end": 150,
                "object": {
                  "type": "CallExpression",
                  "start": 125,
                  "end": 146,
                  "callee": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 131,
                    "name": "callme",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "NewExpression",
                      "start": 132,
                      "end": 145,
                      "callee": {
                        "type": "Identifier",
                        "start": 136,
                        "end": 139,
                        "name": "Foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 140,
                          "end": 144
                        }
                      ],
                      "typeArguments": null
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 150,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 151,
                "end": 154,
                "name": "num",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 38,
        "end": 41,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 39,
            "end": 40,
            "name": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 158,
      "end": 205,
      "id": {
        "type": "Identifier",
        "start": 175,
        "end": 181,
        "name": "callme",
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
          "start": 182,
          "end": 193,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 183,
            "end": 193,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 185,
              "end": 193,
              "typeName": {
                "type": "Identifier",
                "start": 185,
                "end": 188,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 194,
        "end": 204,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 196,
          "end": 204,
          "typeName": {
            "type": "Identifier",
            "start": 196,
            "end": 199,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 206,
      "end": 249,
      "id": {
        "type": "Identifier",
        "start": 223,
        "end": 229,
        "name": "callme",
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
          "start": 230,
          "end": 239,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 231,
            "end": 239,
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 233,
              "end": 239
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
      "id": {
        "type": "Identifier",
        "start": 257,
        "end": 260,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 264,
        "end": 346,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 270,
            "end": 283,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 270,
              "end": 273,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 274,
              "end": 282,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 276,
                "end": 282,
                "typeName": {
                  "type": "Identifier",
                  "start": 276,
                  "end": 279,
                  "name": "Bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 288,
            "end": 344,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 288,
              "end": 299,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 299,
              "end": 344,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 300,
                  "end": 311,
                  "name": "bar",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 303,
                    "end": 311,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 305,
                      "end": 311,
                      "typeName": {
                        "type": "Identifier",
                        "start": 305,
                        "end": 308,
                        "name": "Bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                        "object": {
                          "type": "ThisExpression",
                          "start": 323,
                          "end": 327
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 328,
                          "end": 331,
                          "name": "bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 334,
                        "end": 337,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 260,
        "end": 263,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 261,
            "end": 262,
            "name": {
              "type": "Identifier",
              "start": 261,
              "end": 262,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
