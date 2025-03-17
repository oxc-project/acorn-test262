__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 337,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 74,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 74,
        "body": {
          "type": "TSInterfaceBody",
          "start": 23,
          "end": 74,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 29,
              "end": 48,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 38,
                "end": 39,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": true,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 53,
              "end": 72,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 62,
                "end": 63,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": true,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 63,
                "end": 71,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 65,
                  "end": 71
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 22,
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
      "start": 76,
      "end": 156,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 83,
        "end": 156,
        "body": {
          "type": "TSInterfaceBody",
          "start": 115,
          "end": 156,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 121,
              "end": 135,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 130,
                "end": 131,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": true,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 131,
                "end": 134,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 133,
                  "end": 134,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 133,
                    "end": 134,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 140,
              "end": 154,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 149,
                "end": 150,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": true,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 150,
                "end": 153,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 152,
                  "end": 153,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 152,
                    "end": 153,
                    "decorators": [],
                    "name": "p",
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
          "start": 93,
          "end": 97,
          "decorators": [],
          "name": "Rect",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 97,
          "end": 114,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 98,
              "end": 113,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 108,
                "end": 113,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 113,
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 98,
                "end": 99,
                "decorators": [],
                "name": "p",
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
      "type": "ExportNamedDeclaration",
      "start": 158,
      "end": 223,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 165,
        "end": 223,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 171,
            "end": 222,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 171,
              "end": 176,
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 179,
              "end": 222,
              "async": false,
              "body": {
                "type": "ObjectExpression",
                "start": 213,
                "end": 221,
                "properties": [
                  {
                    "type": "Property",
                    "start": 215,
                    "end": 216,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 215,
                      "end": 216,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 215,
                      "end": 216,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 218,
                    "end": 219,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 218,
                      "end": 219,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 218,
                      "end": 219,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 180,
                  "end": 189,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 181,
                    "end": 189,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 183,
                      "end": 189
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 191,
                  "end": 200,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 192,
                    "end": 200,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 194,
                      "end": 200
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 201,
                "end": 208,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 203,
                  "end": 208,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 203,
                    "end": 208,
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 224,
      "end": 297,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 231,
        "end": 297,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 237,
            "end": 296,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 237,
              "end": 241,
              "decorators": [],
              "name": "Rect",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 244,
              "end": 296,
              "async": false,
              "body": {
                "type": "ObjectExpression",
                "start": 287,
                "end": 295,
                "properties": [
                  {
                    "type": "Property",
                    "start": 289,
                    "end": 290,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 289,
                      "end": 290,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 289,
                      "end": 290,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 292,
                    "end": 293,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 292,
                      "end": 293,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 292,
                      "end": 293,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 262,
                  "end": 266,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 263,
                    "end": 266,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 265,
                      "end": 266,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 265,
                        "end": 266,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 268,
                  "end": 272,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 269,
                    "end": 272,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 271,
                      "end": 272,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 271,
                        "end": 272,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 273,
                "end": 282,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 275,
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
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 280,
                          "end": 281,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 275,
                    "end": 279,
                    "decorators": [],
                    "name": "Rect",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 244,
                "end": 261,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 245,
                    "end": 260,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 255,
                      "end": 260,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 255,
                        "end": 260,
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 245,
                      "end": 246,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 299,
      "end": 337,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 299,
        "end": 336,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 299,
          "end": 309,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 299,
            "end": 304,
            "decorators": [],
            "name": "Point",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 305,
            "end": 309,
            "decorators": [],
            "name": "zero",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 312,
          "end": 336,
          "async": false,
          "body": {
            "type": "CallExpression",
            "start": 325,
            "end": 336,
            "arguments": [
              {
                "type": "Literal",
                "start": 331,
                "end": 332,
                "raw": "0",
                "value": 0
              },
              {
                "type": "Literal",
                "start": 334,
                "end": 335,
                "raw": "0",
                "value": 0
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 325,
              "end": 330,
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 314,
            "end": 321,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 316,
              "end": 321,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 316,
                "end": 321,
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "typeParameters": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
