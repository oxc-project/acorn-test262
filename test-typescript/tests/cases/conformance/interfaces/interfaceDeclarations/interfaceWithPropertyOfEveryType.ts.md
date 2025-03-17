__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 568,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 24,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 24,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 10,
            "end": 22,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 10,
              "end": 13,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 21,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 15,
                "end": 21
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 25,
      "end": 42,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 36,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 39,
        "end": 42,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 43,
      "end": 77,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 51,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 52,
        "end": 77,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 58,
            "end": 75,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 65,
              "end": 75,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 69,
                  "end": 74,
                  "id": {
                    "type": "Identifier",
                    "start": 69,
                    "end": 70,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 73,
                    "end": 74,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 78,
      "end": 90,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 84,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 87,
          "end": 88,
          "id": {
            "type": "Identifier",
            "start": 87,
            "end": 88,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 85,
        "end": 90,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 87,
            "end": 88,
            "id": {
              "type": "Identifier",
              "start": 87,
              "end": 88,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 92,
      "end": 343,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 105,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 106,
        "end": 343,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 112,
            "end": 122,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 112,
              "end": 113,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 121,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 115,
                "end": 121
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 127,
            "end": 137,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 128,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 128,
              "end": 136,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 130,
                "end": 136
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 142,
            "end": 153,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 143,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 143,
              "end": 152,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 145,
                "end": 152
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 158,
            "end": 165,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 158,
              "end": 159,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 159,
              "end": 164,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 161,
                "end": 164
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 170,
            "end": 178,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 170,
              "end": 171,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 171,
              "end": 177,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 173,
                "end": 177
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 183,
            "end": 195,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 183,
              "end": 184,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 184,
              "end": 194,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 186,
                "end": 194,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 186,
                  "end": 192
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 200,
            "end": 210,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 200,
              "end": 201,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 201,
              "end": 209,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 203,
                "end": 209,
                "typeName": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 209,
                  "name": "Object",
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
            "start": 215,
            "end": 240,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 215,
              "end": 216,
              "name": "h",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 216,
              "end": 239,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 218,
                "end": 239,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 219,
                    "end": 228,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 220,
                      "end": 228,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 222,
                        "end": 228
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 230,
                  "end": 239,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 233,
                    "end": 239
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 245,
            "end": 263,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 245,
              "end": 246,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 246,
              "end": 262,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 248,
                "end": 262,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 248,
                  "end": 251,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 249,
                      "end": 250,
                      "name": {
                        "type": "Identifier",
                        "start": 249,
                        "end": 250,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 252,
                    "end": 256,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 253,
                      "end": 256,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 255,
                        "end": 256,
                        "typeName": {
                          "type": "Identifier",
                          "start": 255,
                          "end": 256,
                          "name": "T",
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 258,
                  "end": 262,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 261,
                    "end": 262,
                    "typeName": {
                      "type": "Identifier",
                      "start": 261,
                      "end": 262,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 268,
            "end": 275,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 268,
              "end": 269,
              "name": "j",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 269,
              "end": 274,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 271,
                "end": 274,
                "typeName": {
                  "type": "Identifier",
                  "start": 271,
                  "end": 274,
                  "name": "Foo",
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
            "start": 280,
            "end": 285,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 280,
              "end": 281,
              "name": "k",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 281,
              "end": 284,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 283,
                "end": 284,
                "typeName": {
                  "type": "Identifier",
                  "start": 283,
                  "end": 284,
                  "name": "C",
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
            "start": 290,
            "end": 303,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 290,
              "end": 291,
              "name": "l",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 291,
              "end": 302,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 293,
                "end": 302,
                "exprName": {
                  "type": "Identifier",
                  "start": 300,
                  "end": 302,
                  "name": "f1",
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
            "start": 308,
            "end": 320,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 308,
              "end": 309,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 309,
              "end": 319,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 311,
                "end": 319,
                "exprName": {
                  "type": "Identifier",
                  "start": 318,
                  "end": 319,
                  "name": "M",
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
            "start": 325,
            "end": 331,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 325,
              "end": 326,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 326,
              "end": 330,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 328,
                "end": 330,
                "members": []
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 336,
            "end": 341,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 336,
              "end": 337,
              "name": "o",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 337,
              "end": 340,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 339,
                "end": 340,
                "typeName": {
                  "type": "Identifier",
                  "start": 339,
                  "end": 340,
                  "name": "E",
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
    {
      "type": "VariableDeclaration",
      "start": 345,
      "end": 568,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 349,
          "end": 568,
          "id": {
            "type": "Identifier",
            "start": 349,
            "end": 355,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 350,
              "end": 355,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 352,
                "end": 355,
                "typeName": {
                  "type": "Identifier",
                  "start": 352,
                  "end": 355,
                  "name": "Foo",
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
          "init": {
            "type": "ObjectExpression",
            "start": 358,
            "end": 568,
            "properties": [
              {
                "type": "Property",
                "start": 364,
                "end": 368,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 364,
                  "end": 365,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 367,
                  "end": 368,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 374,
                "end": 379,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 374,
                  "end": 375,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 377,
                  "end": 379,
                  "value": "",
                  "raw": "''"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 385,
                "end": 392,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 385,
                  "end": 386,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 388,
                  "end": 392,
                  "value": true,
                  "raw": "true"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 398,
                "end": 403,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 398,
                  "end": 399,
                  "name": "d",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 401,
                  "end": 403,
                  "properties": []
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 409,
                "end": 416,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 409,
                  "end": 410,
                  "name": "e",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 412,
                  "end": 416,
                  "value": null,
                  "raw": "null"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 423,
                "end": 429,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 423,
                  "end": 424,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrayExpression",
                  "start": 426,
                  "end": 429,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 427,
                      "end": 428,
                      "value": 1,
                      "raw": "1"
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 435,
                "end": 440,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 435,
                  "end": 436,
                  "name": "g",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 438,
                  "end": 440,
                  "properties": []
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 446,
                "end": 465,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 446,
                  "end": 447,
                  "name": "h",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 449,
                  "end": 465,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 450,
                      "end": 459,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 451,
                        "end": 459,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 453,
                          "end": 459
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Literal",
                    "start": 464,
                    "end": 465,
                    "value": 1,
                    "raw": "1"
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 471,
                "end": 488,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 471,
                  "end": 472,
                  "name": "i",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 474,
                  "end": 488,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 478,
                      "end": 482,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 479,
                        "end": 482,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 481,
                          "end": 482,
                          "typeName": {
                            "type": "Identifier",
                            "start": 481,
                            "end": 482,
                            "name": "T",
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
                    "type": "Identifier",
                    "start": 487,
                    "end": 488,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 474,
                    "end": 477,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 475,
                        "end": 476,
                        "name": {
                          "type": "Identifier",
                          "start": 475,
                          "end": 476,
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
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 494,
                "end": 506,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 494,
                  "end": 495,
                  "name": "j",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "TSTypeAssertion",
                  "start": 497,
                  "end": 506,
                  "expression": {
                    "type": "Literal",
                    "start": 502,
                    "end": 506,
                    "value": null,
                    "raw": "null"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 498,
                    "end": 501,
                    "typeName": {
                      "type": "Identifier",
                      "start": 498,
                      "end": 501,
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 512,
                "end": 522,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 512,
                  "end": 513,
                  "name": "k",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "NewExpression",
                  "start": 515,
                  "end": 522,
                  "callee": {
                    "type": "Identifier",
                    "start": 519,
                    "end": 520,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 528,
                "end": 533,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 528,
                  "end": 529,
                  "name": "l",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 531,
                  "end": 533,
                  "name": "f1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 539,
                "end": 543,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 539,
                  "end": 540,
                  "name": "m",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 542,
                  "end": 543,
                  "name": "M",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 549,
                "end": 554,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 549,
                  "end": 550,
                  "name": "n",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 552,
                  "end": 554,
                  "properties": []
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 560,
                "end": 566,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 560,
                  "end": 561,
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 563,
                  "end": 566,
                  "object": {
                    "type": "Identifier",
                    "start": 563,
                    "end": 564,
                    "name": "E",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 565,
                    "end": 566,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
