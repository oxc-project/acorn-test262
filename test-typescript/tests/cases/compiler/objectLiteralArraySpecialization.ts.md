__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 352,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 67,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 23,
        "name": "create",
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
          "start": 27,
          "end": 46,
          "name": "initialValues",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 41,
            "end": 46,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 43,
              "end": 46,
              "elementType": {
                "type": "TSTypeReference",
                "start": 43,
                "end": 44,
                "typeName": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 44,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 23,
        "end": 26,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 24,
            "end": 25,
            "name": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 47,
        "end": 66,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 49,
          "end": 66,
          "typeName": {
            "type": "Identifier",
            "start": 49,
            "end": 63,
            "name": "MyArrayWrapper",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 63,
            "end": 66,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 64,
                "end": 65,
                "typeName": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 65,
                  "name": "T",
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
      "type": "TSInterfaceDeclaration",
      "start": 68,
      "end": 189,
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 92,
        "name": "MyArrayWrapper",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 92,
        "end": 95,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 93,
            "end": 94,
            "name": {
              "type": "Identifier",
              "start": 93,
              "end": 94,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 96,
        "end": 189,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 99,
            "end": 131,
            "key": {
              "type": "Identifier",
              "start": 99,
              "end": 110,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 111,
                "end": 129,
                "name": "initialItems",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 124,
                  "end": 129,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 126,
                    "end": 129,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 126,
                      "end": 127,
                      "typeName": {
                        "type": "Identifier",
                        "start": 126,
                        "end": 127,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 133,
            "end": 187,
            "key": {
              "type": "Identifier",
              "start": 133,
              "end": 144,
              "name": "doSomething",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 145,
                "end": 179,
                "name": "predicate",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 154,
                  "end": 179,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 156,
                    "end": 179,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 157,
                        "end": 161,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 158,
                          "end": 161,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 160,
                            "end": 161,
                            "typeName": {
                              "type": "Identifier",
                              "start": 160,
                              "end": 161,
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
                        "start": 163,
                        "end": 167,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 164,
                          "end": 167,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 166,
                            "end": 167,
                            "typeName": {
                              "type": "Identifier",
                              "start": 166,
                              "end": 167,
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
                      "start": 169,
                      "end": 179,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 172,
                        "end": 179
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 180,
              "end": 186,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 182,
                "end": 186
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 190,
      "end": 264,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 194,
          "end": 263,
          "id": {
            "type": "Identifier",
            "start": 194,
            "end": 199,
            "name": "thing",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 202,
            "end": 263,
            "callee": {
              "type": "Identifier",
              "start": 202,
              "end": 208,
              "name": "create",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 209,
                "end": 262,
                "elements": [
                  {
                    "type": "ObjectExpression",
                    "start": 211,
                    "end": 234,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 213,
                        "end": 224,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 213,
                          "end": 217,
                          "name": "name",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 219,
                          "end": 224,
                          "value": "bob",
                          "raw": "\"bob\""
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 226,
                        "end": 232,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 226,
                          "end": 228,
                          "name": "id",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 230,
                          "end": 232,
                          "value": 24,
                          "raw": "24"
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  },
                  {
                    "type": "ObjectExpression",
                    "start": 236,
                    "end": 260,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 238,
                        "end": 250,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 238,
                          "end": 242,
                          "name": "name",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 244,
                          "end": 250,
                          "value": "doug",
                          "raw": "\"doug\""
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 252,
                        "end": 258,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 252,
                          "end": 254,
                          "name": "id",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 256,
                          "end": 258,
                          "value": 32,
                          "raw": "32"
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 285,
      "end": 331,
      "expression": {
        "type": "CallExpression",
        "start": 285,
        "end": 330,
        "callee": {
          "type": "MemberExpression",
          "start": 285,
          "end": 302,
          "object": {
            "type": "Identifier",
            "start": 285,
            "end": 290,
            "name": "thing",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 291,
            "end": 302,
            "name": "doSomething",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 303,
            "end": 329,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 304,
                "end": 305,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 307,
                "end": 308,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BinaryExpression",
              "start": 313,
              "end": 329,
              "left": {
                "type": "MemberExpression",
                "start": 313,
                "end": 319,
                "object": {
                  "type": "Identifier",
                  "start": 313,
                  "end": 314,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 315,
                  "end": 319,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 324,
                "end": 329,
                "value": "bob",
                "raw": "\"bob\""
              }
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
