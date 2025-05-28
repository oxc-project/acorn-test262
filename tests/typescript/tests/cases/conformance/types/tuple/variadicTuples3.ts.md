__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 405,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 57,
      "end": 158,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 71,
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 71,
        "end": 105,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 72,
            "end": 87,
            "name": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 82,
              "end": 87,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 82,
                "end": 85
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 89,
            "end": 104,
            "name": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 99,
              "end": 104,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 99,
                "end": 102
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 107,
        "end": 121,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 109,
          "end": 121,
          "elementTypes": [
            {
              "type": "TSRestType",
              "start": 110,
              "end": 114,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 113,
                "end": 114,
                "typeName": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 114,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            {
              "type": "TSRestType",
              "start": 116,
              "end": 120,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 119,
                "end": 120,
                "typeName": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 120,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          ]
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 122,
        "end": 158,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 126,
            "end": 144,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 130,
                "end": 143,
                "id": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 138,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 131,
                    "end": 138,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 133,
                      "end": 138,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 133,
                        "end": 136
                      }
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 141,
                  "end": 143,
                  "elements": []
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 147,
            "end": 156,
            "argument": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 160,
      "end": 276,
      "id": {
        "type": "Identifier",
        "start": 169,
        "end": 174,
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 174,
        "end": 208,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 175,
            "end": 190,
            "name": {
              "type": "Identifier",
              "start": 175,
              "end": 176,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 185,
              "end": 190,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 185,
                "end": 188
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 192,
            "end": 207,
            "name": {
              "type": "Identifier",
              "start": 192,
              "end": 193,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 202,
              "end": 207,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 202,
                "end": 205
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 210,
        "end": 224,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 212,
          "end": 224,
          "elementTypes": [
            {
              "type": "TSRestType",
              "start": 213,
              "end": 217,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 216,
                "end": 217,
                "typeName": {
                  "type": "Identifier",
                  "start": 216,
                  "end": 217,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            {
              "type": "TSRestType",
              "start": 219,
              "end": 223,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 222,
                "end": 223,
                "typeName": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 223,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          ]
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 225,
        "end": 276,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 229,
            "end": 262,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 233,
                "end": 261,
                "id": {
                  "type": "Identifier",
                  "start": 233,
                  "end": 246,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 234,
                    "end": 246,
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "start": 236,
                      "end": 246,
                      "elementTypes": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 237,
                          "end": 240
                        },
                        {
                          "type": "TSAnyKeyword",
                          "start": 242,
                          "end": 245
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 249,
                  "end": 261,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 250,
                      "end": 254,
                      "value": null,
                      "raw": "null"
                    },
                    {
                      "type": "Literal",
                      "start": 256,
                      "end": 260,
                      "value": null,
                      "raw": "null"
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 265,
            "end": 274,
            "argument": {
              "type": "Identifier",
              "start": 272,
              "end": 273,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 278,
      "end": 405,
      "id": {
        "type": "Identifier",
        "start": 287,
        "end": 292,
        "decorators": [],
        "name": "test3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 292,
        "end": 326,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 293,
            "end": 308,
            "name": {
              "type": "Identifier",
              "start": 293,
              "end": 294,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 303,
              "end": 308,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 303,
                "end": 306
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 310,
            "end": 325,
            "name": {
              "type": "Identifier",
              "start": 310,
              "end": 311,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 320,
              "end": 325,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 320,
                "end": 323
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 328,
        "end": 342,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 330,
          "end": 342,
          "elementTypes": [
            {
              "type": "TSRestType",
              "start": 331,
              "end": 335,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 334,
                "end": 335,
                "typeName": {
                  "type": "Identifier",
                  "start": 334,
                  "end": 335,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            {
              "type": "TSRestType",
              "start": 337,
              "end": 341,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 340,
                "end": 341,
                "typeName": {
                  "type": "Identifier",
                  "start": 340,
                  "end": 341,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          ]
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 343,
        "end": 405,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 347,
            "end": 391,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 351,
                "end": 390,
                "id": {
                  "type": "Identifier",
                  "start": 351,
                  "end": 369,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 352,
                    "end": 369,
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "start": 354,
                      "end": 369,
                      "elementTypes": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 355,
                          "end": 358
                        },
                        {
                          "type": "TSAnyKeyword",
                          "start": 360,
                          "end": 363
                        },
                        {
                          "type": "TSAnyKeyword",
                          "start": 365,
                          "end": 368
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 372,
                  "end": 390,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 373,
                      "end": 377,
                      "value": null,
                      "raw": "null"
                    },
                    {
                      "type": "Literal",
                      "start": 379,
                      "end": 383,
                      "value": null,
                      "raw": "null"
                    },
                    {
                      "type": "Literal",
                      "start": 385,
                      "end": 389,
                      "value": null,
                      "raw": "null"
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 394,
            "end": 403,
            "argument": {
              "type": "Identifier",
              "start": 401,
              "end": 402,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
