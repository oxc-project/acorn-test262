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
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 36,
        "end": 79,
        "body": {
          "type": "TSInterfaceBody",
          "start": 52,
          "end": 79,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 55,
              "end": 65,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 55,
                "end": 56,
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
                "start": 56,
                "end": 64,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 58,
                  "end": 64
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 67,
              "end": 77,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 67,
                "end": 68,
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
                "start": 68,
                "end": 76,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 70,
                  "end": 76
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 46,
          "end": 51,
          "decorators": [],
          "name": "Point",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 81,
      "end": 226,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 88,
        "end": 226,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 118,
          "end": 226,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 121,
              "end": 131,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 121,
                "end": 122,
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
                "start": 122,
                "end": 130,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 124,
                  "end": 130
                }
              },
              "value": null
            },
            {
              "type": "PropertyDefinition",
              "start": 133,
              "end": 143,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 133,
                "end": 134,
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
                "start": 134,
                "end": 142,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 136,
                  "end": 142
                }
              },
              "value": null
            },
            {
              "type": "MethodDefinition",
              "start": 145,
              "end": 179,
              "accessibility": null,
              "computed": false,
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
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 156,
                "end": 179,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
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
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 182,
              "end": 224,
              "accessibility": null,
              "computed": false,
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
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 191,
                "end": 224,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 217,
                      "end": 223,
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
          "start": 94,
          "end": 100,
          "decorators": [],
          "name": "Vector",
          "optional": false,
          "typeAnnotation": null
        },
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
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 228,
      "end": 273,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 235,
        "end": 273,
        "async": false,
        "body": null,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 244,
          "end": 253,
          "decorators": [],
          "name": "getLength",
          "optional": false,
          "typeAnnotation": null
        },
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
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 263,
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
          "start": 264,
          "end": 272,
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 266,
            "end": 272
          }
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
        "value": "math2d"
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
            "optional": false,
            "typeAnnotation": null
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
            "optional": false,
            "typeAnnotation": null
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
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 88,
                "end": 94,
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
            "optional": false,
            "typeAnnotation": null
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
                "optional": false,
                "typeAnnotation": null
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
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 120,
                "end": 129,
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
                "typeArguments": null,
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 148,
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
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 153,
                "end": 162,
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
      "start": 170,
      "end": 186,
      "directive": null,
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
          "optional": false,
          "typeAnnotation": null
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
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 176,
              "end": 183,
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
            "optional": false,
            "typeAnnotation": null
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
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 197,
              "end": 198,
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
