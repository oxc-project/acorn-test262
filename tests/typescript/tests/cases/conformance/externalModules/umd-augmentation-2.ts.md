__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 274,
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
      "type": "ExportNamedDeclaration",
      "start": 29,
      "end": 79,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 36,
        "end": 79,
        "id": {
          "type": "Identifier",
          "start": 46,
          "end": 51,
          "decorators": [],
          "name": "Point",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 52,
          "end": 79,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 55,
              "end": 65,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 55,
                "end": 56,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 56,
                "end": 64,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 58,
                  "end": 64
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 67,
              "end": 77,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 67,
                "end": 68,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 68,
                "end": 76,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 70,
                  "end": 76
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 81,
      "end": 226,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 88,
        "end": 226,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 94,
          "end": 100,
          "decorators": [],
          "name": "Vector",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 112,
            "end": 117,
            "expression": {
              "type": "Identifier",
              "start": 112,
              "end": 117,
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "body": {
          "type": "ClassBody",
          "start": 118,
          "end": 226,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 121,
              "end": 131,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 121,
                "end": 122,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 122,
                "end": 130,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 124,
                  "end": 130
                }
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 133,
              "end": 143,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 133,
                "end": 134,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 134,
                "end": 142,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 136,
                  "end": 142
                }
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 145,
              "end": 179,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 145,
                "end": 156,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 156,
                "end": 179,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 157,
                    "end": 166,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 158,
                      "end": 166,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 160,
                        "end": 166
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 168,
                    "end": 177,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 169,
                      "end": 177,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 171,
                        "end": 177
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": null,
                "expression": false
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 182,
              "end": 224,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 182,
                "end": 191,
                "decorators": [],
                "name": "translate",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 191,
                "end": 224,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 192,
                    "end": 202,
                    "decorators": [],
                    "name": "dx",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 194,
                      "end": 202,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 196,
                        "end": 202
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 204,
                    "end": 214,
                    "decorators": [],
                    "name": "dy",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 206,
                      "end": 214,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 208,
                        "end": 214
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 215,
                  "end": 223,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 217,
                    "end": 223,
                    "typeName": {
                      "type": "Identifier",
                      "start": 217,
                      "end": 223,
                      "decorators": [],
                      "name": "Vector",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "body": null,
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 228,
      "end": 273,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 235,
        "end": 273,
        "id": {
          "type": "Identifier",
          "start": 244,
          "end": 253,
          "decorators": [],
          "name": "getLength",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 254,
            "end": 263,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 255,
              "end": 263,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 257,
                "end": 263,
                "typeName": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 263,
                  "decorators": [],
                  "name": "Vector",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 264,
          "end": 272,
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 266,
            "end": 272
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
      ],
      "source": {
        "type": "Literal",
        "start": 24,
        "end": 32,
        "value": "math2d",
        "raw": "'math2d'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 56,
      "end": 163,
      "id": {
        "type": "Literal",
        "start": 71,
        "end": 79,
        "value": "math2d",
        "raw": "'math2d'"
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 80,
        "end": 163,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 113,
            "end": 161,
            "id": {
              "type": "Identifier",
              "start": 123,
              "end": 129,
              "decorators": [],
              "name": "Vector",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 130,
              "end": 161,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 134,
                  "end": 158,
                  "key": {
                    "type": "Identifier",
                    "start": 134,
                    "end": 141,
                    "decorators": [],
                    "name": "reverse",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
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
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 132,
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
            "callee": {
              "type": "MemberExpression",
              "start": 113,
              "end": 126,
              "object": {
                "type": "Identifier",
                "start": 113,
                "end": 119,
                "decorators": [],
                "name": "Math2d",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 120,
                "end": 126,
                "decorators": [],
                "name": "Vector",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 127,
                "end": 128,
                "value": 3,
                "raw": "3"
              },
              {
                "type": "Literal",
                "start": 130,
                "end": 131,
                "value": 2,
                "raw": "2"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 134,
      "end": 170,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 138,
          "end": 169,
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
            "callee": {
              "type": "MemberExpression",
              "start": 150,
              "end": 166,
              "object": {
                "type": "Identifier",
                "start": 150,
                "end": 156,
                "decorators": [],
                "name": "Math2d",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 157,
                "end": 166,
                "decorators": [],
                "name": "getLength",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
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
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 171,
      "end": 211,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 210,
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
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 193,
            "end": 210,
            "callee": {
              "type": "MemberExpression",
              "start": 193,
              "end": 204,
              "object": {
                "type": "Identifier",
                "start": 193,
                "end": 194,
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 195,
                "end": 204,
                "decorators": [],
                "name": "translate",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 205,
                "end": 206,
                "value": 5,
                "raw": "5"
              },
              {
                "type": "Literal",
                "start": 208,
                "end": 209,
                "value": 5,
                "raw": "5"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 212,
      "end": 228,
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
          "callee": {
            "type": "MemberExpression",
            "start": 216,
            "end": 225,
            "object": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 218,
              "end": 225,
              "decorators": [],
              "name": "reverse",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 229,
      "end": 241,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 233,
          "end": 240,
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
            "object": {
              "type": "Identifier",
              "start": 237,
              "end": 238,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 239,
              "end": 240,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
