__ESTREE_TEST__:PASS:
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
        "optional": false,
        "typeAnnotation": null
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
        "optional": false,
        "typeAnnotation": null
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
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 89,
                    "end": 90,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
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
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 102,
                    "end": 103,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
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
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
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
                  "accessibility": null,
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
                    "optional": false,
                    "typeAnnotation": null
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
                  "accessibility": null,
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
                    "optional": false,
                    "typeAnnotation": null
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
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 178,
                    "end": 189,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null
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
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 216,
                  "end": 258,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 216,
                    "end": 225,
                    "decorators": [],
                    "name": "translate",
                    "optional": false,
                    "typeAnnotation": null
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
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 251,
                          "end": 257,
                          "decorators": [],
                          "name": "Vector",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": null
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
              "optional": false,
              "typeAnnotation": null
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "TSDeclareFunction",
            "start": 264,
            "end": 302,
            "async": false,
            "body": null,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 273,
              "end": 282,
              "decorators": [],
              "name": "getLength",
              "optional": false,
              "typeAnnotation": null
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 286,
                      "end": 292,
                      "decorators": [],
                      "name": "Vector",
                      "optional": false,
                      "typeAnnotation": null
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
            },
            "typeParameters": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
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
        "value": "math2d",
        "regex": null,
        "bigint": null
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
            "optional": false,
            "typeAnnotation": null
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
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 134,
                    "end": 141,
                    "decorators": [],
                    "name": "reverse",
                    "optional": false,
                    "typeAnnotation": null
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
                      "typeArguments": null,
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 152,
                          "end": 157,
                          "decorators": [],
                          "name": "Point",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
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
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
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
        "value": "math2d",
        "regex": null,
        "bigint": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 101,
  "end": 241,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 101,
      "end": 133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 132,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 106,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 109,
            "end": 132,
            "arguments": [
              {
                "type": "Literal",
                "start": 127,
                "end": 128,
                "raw": "3",
                "value": 3,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 130,
                "end": 131,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 113,
              "end": 126,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 113,
                "end": 119,
                "decorators": [],
                "name": "Math2d",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 120,
                "end": 126,
                "decorators": [],
                "name": "Vector",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 134,
      "end": 170,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 138,
          "end": 169,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 138,
            "end": 147,
            "decorators": [],
            "name": "magnitude",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 150,
            "end": 169,
            "arguments": [
              {
                "type": "Identifier",
                "start": 167,
                "end": 168,
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 150,
              "end": 166,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 150,
                "end": 156,
                "decorators": [],
                "name": "Math2d",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 157,
                "end": 166,
                "decorators": [],
                "name": "getLength",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 171,
      "end": 211,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 210,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 190,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 176,
              "end": 190,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 178,
                "end": 190,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 178,
                  "end": 190,
                  "left": {
                    "type": "Identifier",
                    "start": 178,
                    "end": 184,
                    "decorators": [],
                    "name": "Math2d",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 185,
                    "end": 190,
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 193,
            "end": 210,
            "arguments": [
              {
                "type": "Literal",
                "start": 205,
                "end": 206,
                "raw": "5",
                "value": 5,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 208,
                "end": 209,
                "raw": "5",
                "value": 5,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 193,
              "end": 204,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 193,
                "end": 194,
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 195,
                "end": 204,
                "decorators": [],
                "name": "translate",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 212,
      "end": 228,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 212,
        "end": 227,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 212,
          "end": 213,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 216,
          "end": 227,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 216,
            "end": 225,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 218,
              "end": 225,
              "decorators": [],
              "name": "reverse",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 229,
      "end": 241,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 233,
          "end": 240,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 233,
            "end": 234,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 237,
            "end": 240,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 237,
              "end": 238,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 239,
              "end": 240,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
