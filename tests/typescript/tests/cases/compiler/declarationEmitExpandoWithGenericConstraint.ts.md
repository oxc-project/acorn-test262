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
          "decorators": [],
          "name": "Point",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
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
      "exportKind": "type",
      "attributes": []
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
              "name": {
                "type": "Identifier",
                "start": 98,
                "end": 99,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 108,
                "end": 113,
                "typeName": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 113,
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "typeAnnotation": null
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
        "extends": [],
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
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
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
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null
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
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
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
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null
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
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 158,
      "end": 223,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 165,
        "end": 223,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 171,
            "end": 222,
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
              "expression": true,
              "async": false,
              "typeParameters": null,
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 203,
                    "end": 208,
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "body": {
                "type": "ObjectExpression",
                "start": 213,
                "end": 221,
                "properties": [
                  {
                    "type": "Property",
                    "start": 215,
                    "end": 216,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 215,
                      "end": 216,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 215,
                      "end": 216,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 218,
                    "end": 219,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 218,
                      "end": 219,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 218,
                      "end": 219,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  }
                ]
              },
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 224,
      "end": 297,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 231,
        "end": 297,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 237,
            "end": 296,
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
              "expression": true,
              "async": false,
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
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 255,
                      "end": 260,
                      "typeName": {
                        "type": "Identifier",
                        "start": 255,
                        "end": 260,
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 265,
                        "end": 266,
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 271,
                        "end": 272,
                        "decorators": [],
                        "name": "p",
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
                    "decorators": [],
                    "name": "Rect",
                    "optional": false,
                    "typeAnnotation": null
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
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "body": {
                "type": "ObjectExpression",
                "start": 287,
                "end": 295,
                "properties": [
                  {
                    "type": "Property",
                    "start": 289,
                    "end": 290,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 289,
                      "end": 290,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 289,
                      "end": 290,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 292,
                    "end": 293,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 292,
                      "end": 293,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 292,
                      "end": 293,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  }
                ]
              },
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
            "decorators": [],
            "name": "Point",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 305,
            "end": 309,
            "decorators": [],
            "name": "zero",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 312,
          "end": 336,
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
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
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "body": {
            "type": "CallExpression",
            "start": 325,
            "end": 336,
            "callee": {
              "type": "Identifier",
              "start": 325,
              "end": 330,
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
            "optional": false
          },
          "id": null,
          "generator": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
