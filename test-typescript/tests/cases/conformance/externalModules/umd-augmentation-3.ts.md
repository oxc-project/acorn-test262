node_modules/math2d/index.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 307,
  "body": [
    {
      "type": "TSNamespaceExportDeclaration",
      "start": 0,
      "end": 27,
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 26,
        "decorators": [],
        "name": "Math2d",
        "optional": false
      }
    },
    {
      "type": "TSExportAssignment",
      "start": 29,
      "end": 42,
      "expression": {
        "type": "Identifier",
        "start": 38,
        "end": 41,
        "decorators": [],
        "name": "M2D",
        "optional": false
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 44,
      "end": 305,
      "body": {
        "type": "TSModuleBlock",
        "start": 66,
        "end": 305,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 69,
            "end": 115,
            "body": {
              "type": "TSInterfaceBody",
              "start": 85,
              "end": 115,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 89,
                  "end": 99,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 89,
                    "end": 90,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 90,
                    "end": 98,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 92,
                      "end": 98
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 102,
                  "end": 112,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 102,
                    "end": 103,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 103,
                    "end": 111,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 105,
                      "end": 111
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 79,
              "end": 84,
              "decorators": [],
              "name": "Point",
              "optional": false
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 118,
            "end": 261,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 148,
              "end": 261,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 152,
                  "end": 162,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 152,
                    "end": 153,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 153,
                    "end": 161,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 155,
                      "end": 161
                    }
                  },
                  "value": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 165,
                  "end": 175,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 166,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 166,
                    "end": 174,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 168,
                      "end": 174
                    }
                  },
                  "value": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 178,
                  "end": 212,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 178,
                    "end": 189,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false
                  },
                  "kind": "constructor",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 189,
                    "end": 212,
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 190,
                        "end": 199,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 191,
                          "end": 199,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 193,
                            "end": 199
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 201,
                        "end": 210,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 202,
                          "end": 210,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 204,
                            "end": 210
                          }
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 216,
                  "end": 258,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 216,
                    "end": 225,
                    "decorators": [],
                    "name": "translate",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 225,
                    "end": 258,
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 226,
                        "end": 236,
                        "decorators": [],
                        "name": "dx",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 228,
                          "end": 236,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 230,
                            "end": 236
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 238,
                        "end": 248,
                        "decorators": [],
                        "name": "dy",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 240,
                          "end": 248,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 242,
                            "end": 248
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 249,
                      "end": 257,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 251,
                        "end": 257,
                        "typeName": {
                          "type": "Identifier",
                          "start": 251,
                          "end": 257,
                          "decorators": [],
                          "name": "Vector",
                          "optional": false
                        }
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
              "start": 124,
              "end": 130,
              "decorators": [],
              "name": "Vector",
              "optional": false
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 142,
                "end": 147,
                "expression": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 147,
                  "decorators": [],
                  "name": "Point",
                  "optional": false
                }
              }
            ],
            "superClass": null
          },
          {
            "type": "TSDeclareFunction",
            "start": 264,
            "end": 302,
            "async": false,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 273,
              "end": 282,
              "decorators": [],
              "name": "getLength",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 283,
                "end": 292,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 284,
                  "end": 292,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 286,
                    "end": 292,
                    "typeName": {
                      "type": "Identifier",
                      "start": 286,
                      "end": 292,
                      "decorators": [],
                      "name": "Vector",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 293,
              "end": 301,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 295,
                "end": 301
              }
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 65,
        "decorators": [],
        "name": "M2D",
        "optional": false
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "module"
}
```
math2d-augment.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 164,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 33,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 24,
        "end": 32,
        "raw": "'math2d'",
        "value": "math2d"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 18,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 18,
            "decorators": [],
            "name": "Math2d",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "TSModuleDeclaration",
      "start": 56,
      "end": 163,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 80,
        "end": 163,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 113,
            "end": 161,
            "body": {
              "type": "TSInterfaceBody",
              "start": 130,
              "end": 161,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 134,
                  "end": 158,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 134,
                    "end": 141,
                    "decorators": [],
                    "name": "reverse",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 143,
                    "end": 157,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 145,
                      "end": 157,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 145,
                        "end": 157,
                        "left": {
                          "type": "Identifier",
                          "start": 145,
                          "end": 151,
                          "decorators": [],
                          "name": "Math2d",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 152,
                          "end": 157,
                          "decorators": [],
                          "name": "Point",
                          "optional": false
                        }
                      }
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
              "start": 123,
              "end": 129,
              "decorators": [],
              "name": "Vector",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 71,
        "end": 79,
        "raw": "'math2d'",
        "value": "math2d"
      }
    }
  ],
  "sourceType": "module"
}
```
b.ts
```json
{
  "type": "Program",
  "start": 45,
  "end": 200,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 45,
      "end": 73,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 64,
        "end": 72,
        "raw": "'math2d'",
        "value": "math2d"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 52,
          "end": 58,
          "local": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
            "decorators": [],
            "name": "m",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 74,
      "end": 101,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 78,
          "end": 100,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 78,
            "end": 79,
            "decorators": [],
            "name": "v",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 82,
            "end": 100,
            "arguments": [
              {
                "type": "Literal",
                "start": 95,
                "end": 96,
                "raw": "3",
                "value": 3
              },
              {
                "type": "Literal",
                "start": 98,
                "end": 99,
                "raw": "2",
                "value": 2
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 86,
              "end": 94,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 86,
                "end": 87,
                "decorators": [],
                "name": "m",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 88,
                "end": 94,
                "decorators": [],
                "name": "Vector",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 102,
      "end": 133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 106,
          "end": 132,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 106,
            "end": 115,
            "decorators": [],
            "name": "magnitude",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 118,
            "end": 132,
            "arguments": [
              {
                "type": "Identifier",
                "start": 130,
                "end": 131,
                "decorators": [],
                "name": "v",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 118,
              "end": 129,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 118,
                "end": 119,
                "decorators": [],
                "name": "m",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 120,
                "end": 129,
                "decorators": [],
                "name": "getLength",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 134,
      "end": 169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 138,
          "end": 168,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 148,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 148,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 141,
                "end": 148,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 141,
                  "end": 148,
                  "left": {
                    "type": "Identifier",
                    "start": 141,
                    "end": 142,
                    "decorators": [],
                    "name": "m",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 148,
                    "decorators": [],
                    "name": "Point",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 151,
            "end": 168,
            "arguments": [
              {
                "type": "Literal",
                "start": 163,
                "end": 164,
                "raw": "5",
                "value": 5
              },
              {
                "type": "Literal",
                "start": 166,
                "end": 167,
                "raw": "5",
                "value": 5
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 151,
              "end": 162,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 151,
                "end": 152,
                "decorators": [],
                "name": "v",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 153,
                "end": 162,
                "decorators": [],
                "name": "translate",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 170,
      "end": 186,
      "expression": {
        "type": "AssignmentExpression",
        "start": 170,
        "end": 185,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 170,
          "end": 171,
          "decorators": [],
          "name": "p",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 174,
          "end": 185,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 174,
            "end": 183,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 174,
              "end": 175,
              "decorators": [],
              "name": "v",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 176,
              "end": 183,
              "decorators": [],
              "name": "reverse",
              "optional": false
            }
          },
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 187,
      "end": 199,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 191,
          "end": 198,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 191,
            "end": 192,
            "decorators": [],
            "name": "t",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 195,
            "end": 198,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 195,
              "end": 196,
              "decorators": [],
              "name": "p",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 197,
              "end": 198,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module"
}
```
