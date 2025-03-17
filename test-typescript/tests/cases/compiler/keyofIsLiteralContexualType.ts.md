__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 41,
  "end": 353,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 41,
      "end": 174,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 53,
        "name": "foo",
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
        "start": 92,
        "end": 174,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 98,
            "end": 130,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 102,
                "end": 129,
                "id": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 116,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 103,
                    "end": 116,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 105,
                      "end": 116,
                      "elementType": {
                        "type": "TSTypeOperator",
                        "start": 106,
                        "end": 113,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 112,
                          "end": 113,
                          "typeName": {
                            "type": "Identifier",
                            "start": 112,
                            "end": 113,
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
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 119,
                  "end": 129,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 120,
                      "end": 123,
                      "value": "a",
                      "raw": "\"a\""
                    },
                    {
                      "type": "Literal",
                      "start": 125,
                      "end": 128,
                      "value": "b",
                      "raw": "\"b\""
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 135,
            "end": 172,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 139,
                "end": 171,
                "id": {
                  "type": "Identifier",
                  "start": 139,
                  "end": 153,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 140,
                    "end": 153,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 142,
                      "end": 153,
                      "elementType": {
                        "type": "TSTypeOperator",
                        "start": 143,
                        "end": 150,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 149,
                          "end": 150,
                          "typeName": {
                            "type": "Identifier",
                            "start": 149,
                            "end": 150,
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
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 156,
                  "end": 171,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 157,
                      "end": 160,
                      "value": "a",
                      "raw": "\"a\""
                    },
                    {
                      "type": "Literal",
                      "start": 162,
                      "end": 165,
                      "value": "b",
                      "raw": "\"b\""
                    },
                    {
                      "type": "Literal",
                      "start": 167,
                      "end": 170,
                      "value": "c",
                      "raw": "\"c\""
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 53,
        "end": 89,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 54,
            "end": 88,
            "name": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 64,
              "end": 88,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 66,
                  "end": 76,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 67,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 67,
                    "end": 75,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 69,
                      "end": 75
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 77,
                  "end": 86,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 78,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 78,
                    "end": 86,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 80,
                      "end": 86
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 198,
      "end": 278,
      "id": {
        "type": "Identifier",
        "start": 215,
        "end": 219,
        "name": "pick",
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
          "start": 242,
          "end": 248,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 245,
            "end": 248,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 247,
              "end": 248,
              "typeName": {
                "type": "Identifier",
                "start": 247,
                "end": 248,
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
        },
        {
          "type": "Identifier",
          "start": 250,
          "end": 264,
          "name": "propNames",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 259,
            "end": 264,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 261,
              "end": 264,
              "elementType": {
                "type": "TSTypeReference",
                "start": 261,
                "end": 262,
                "typeName": {
                  "type": "Identifier",
                  "start": 261,
                  "end": 262,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 219,
        "end": 241,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 220,
            "end": 221,
            "name": {
              "type": "Identifier",
              "start": 220,
              "end": 221,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 223,
            "end": 240,
            "name": {
              "type": "Identifier",
              "start": 223,
              "end": 224,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 233,
              "end": 240,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 239,
                "end": 240,
                "typeName": {
                  "type": "Identifier",
                  "start": 239,
                  "end": 240,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
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
        "start": 265,
        "end": 277,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 267,
          "end": 277,
          "typeName": {
            "type": "Identifier",
            "start": 267,
            "end": 271,
            "name": "Pick",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 271,
            "end": 277,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 272,
                "end": 273,
                "typeName": {
                  "type": "Identifier",
                  "start": 272,
                  "end": 273,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 275,
                "end": 276,
                "typeName": {
                  "type": "Identifier",
                  "start": 275,
                  "end": 276,
                  "name": "K",
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
    {
      "type": "VariableDeclaration",
      "start": 280,
      "end": 330,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 284,
          "end": 329,
          "id": {
            "type": "Identifier",
            "start": 284,
            "end": 285,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 288,
            "end": 329,
            "callee": {
              "type": "Identifier",
              "start": 288,
              "end": 292,
              "name": "pick",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 293,
                "end": 316,
                "properties": [
                  {
                    "type": "Property",
                    "start": 295,
                    "end": 300,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 295,
                      "end": 296,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 298,
                      "end": 300,
                      "value": 10,
                      "raw": "10"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 302,
                    "end": 307,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 302,
                      "end": 303,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 305,
                      "end": 307,
                      "value": 20,
                      "raw": "20"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 309,
                    "end": 314,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 309,
                      "end": 310,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 312,
                      "end": 314,
                      "value": 30,
                      "raw": "30"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              {
                "type": "ArrayExpression",
                "start": 318,
                "end": 328,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 319,
                    "end": 322,
                    "value": "a",
                    "raw": "\"a\""
                  },
                  {
                    "type": "Literal",
                    "start": 324,
                    "end": 327,
                    "value": "c",
                    "raw": "\"c\""
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 331,
      "end": 343,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 335,
          "end": 342,
          "id": {
            "type": "Identifier",
            "start": 335,
            "end": 336,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 339,
            "end": 342,
            "object": {
              "type": "Identifier",
              "start": 339,
              "end": 340,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 341,
              "end": 342,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
