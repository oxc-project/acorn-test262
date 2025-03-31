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
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 74,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 22,
          "name": "Point",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 23,
          "end": 74,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 29,
              "end": 48,
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "start": 38,
                "end": 39,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 39,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 53,
              "end": 72,
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "start": 62,
                "end": 63,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 63,
                "end": 71,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 65,
                  "end": 71
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
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 76,
      "end": 156,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 83,
        "end": 156,
        "id": {
          "type": "Identifier",
          "start": 93,
          "end": 97,
          "name": "Rect",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 97,
          "end": 114,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 98,
              "end": 113,
              "name": {
                "type": "Identifier",
                "start": 98,
                "end": 99,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 108,
                "end": 113,
                "typeName": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 113,
                  "name": "Point",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "body": {
          "type": "TSInterfaceBody",
          "start": 115,
          "end": 156,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 121,
              "end": 135,
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "start": 130,
                "end": 131,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 131,
                "end": 134,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 133,
                  "end": 134,
                  "typeName": {
                    "type": "Identifier",
                    "start": 133,
                    "end": 134,
                    "name": "p",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 140,
              "end": 154,
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "start": 149,
                "end": 150,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 150,
                "end": 153,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 152,
                  "end": 153,
                  "typeName": {
                    "type": "Identifier",
                    "start": 152,
                    "end": 153,
                    "name": "p",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 158,
      "end": 223,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 165,
        "end": 223,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 171,
            "end": 222,
            "id": {
              "type": "Identifier",
              "start": 171,
              "end": 176,
              "name": "Point",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 179,
              "end": 222,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 180,
                  "end": 189,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 181,
                    "end": 189,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 183,
                      "end": 189
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 191,
                  "end": 200,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 192,
                    "end": 200,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 194,
                      "end": 200
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "ObjectExpression",
                "start": 213,
                "end": 221,
                "properties": [
                  {
                    "type": "Property",
                    "start": 215,
                    "end": 216,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 215,
                      "end": 216,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 215,
                      "end": 216,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 218,
                    "end": 219,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 218,
                      "end": 219,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 218,
                      "end": 219,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 201,
                "end": 208,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 203,
                  "end": 208,
                  "typeName": {
                    "type": "Identifier",
                    "start": 203,
                    "end": 208,
                    "name": "Point",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 224,
      "end": 297,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 231,
        "end": 297,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 237,
            "end": 296,
            "id": {
              "type": "Identifier",
              "start": 237,
              "end": 241,
              "name": "Rect",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 244,
              "end": 296,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 262,
                  "end": 266,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 263,
                    "end": 266,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 265,
                      "end": 266,
                      "typeName": {
                        "type": "Identifier",
                        "start": 265,
                        "end": 266,
                        "name": "p",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 268,
                  "end": 272,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 269,
                    "end": 272,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 271,
                      "end": 272,
                      "typeName": {
                        "type": "Identifier",
                        "start": 271,
                        "end": 272,
                        "name": "p",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "ObjectExpression",
                "start": 287,
                "end": 295,
                "properties": [
                  {
                    "type": "Property",
                    "start": 289,
                    "end": 290,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 289,
                      "end": 290,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 289,
                      "end": 290,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 292,
                    "end": 293,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 292,
                      "end": 293,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 292,
                      "end": 293,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
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
                    "name": {
                      "type": "Identifier",
                      "start": 245,
                      "end": 246,
                      "name": "p",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 255,
                      "end": 260,
                      "typeName": {
                        "type": "Identifier",
                        "start": 255,
                        "end": 260,
                        "name": "Point",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 273,
                "end": 282,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 275,
                  "end": 282,
                  "typeName": {
                    "type": "Identifier",
                    "start": 275,
                    "end": 279,
                    "name": "Rect",
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
                          "name": "p",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 299,
      "end": 337,
      "expression": {
        "type": "AssignmentExpression",
        "start": 299,
        "end": 336,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 299,
          "end": 309,
          "object": {
            "type": "Identifier",
            "start": 299,
            "end": 304,
            "name": "Point",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 305,
            "end": 309,
            "name": "zero",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 312,
          "end": 336,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [],
          "body": {
            "type": "CallExpression",
            "start": 325,
            "end": 336,
            "callee": {
              "type": "Identifier",
              "start": 325,
              "end": 330,
              "name": "Point",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 331,
                "end": 332,
                "value": 0,
                "raw": "0"
              },
              {
                "type": "Literal",
                "start": 334,
                "end": 335,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "typeParameters": null,
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 314,
            "end": 321,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 316,
              "end": 321,
              "typeName": {
                "type": "Identifier",
                "start": 316,
                "end": 321,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
