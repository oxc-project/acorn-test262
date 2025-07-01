__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "create",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 23
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 25
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 24,
            "end": 25
          }
        ],
        "start": 23,
        "end": 26
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "initialValues",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 43,
                  "end": 44
                },
                "typeArguments": null,
                "start": 43,
                "end": 44
              },
              "start": 43,
              "end": 46
            },
            "start": 41,
            "end": 46
          },
          "start": 27,
          "end": 46
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyArrayWrapper",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 63
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 64,
                  "end": 65
                },
                "typeArguments": null,
                "start": 64,
                "end": 65
              }
            ],
            "start": 63,
            "end": 66
          },
          "start": 49,
          "end": 66
        },
        "start": 47,
        "end": 66
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 67
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyArrayWrapper",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 92
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 94
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 93,
            "end": 94
          }
        ],
        "start": 92,
        "end": 95
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 110
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "initialItems",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 126,
                        "end": 127
                      },
                      "typeArguments": null,
                      "start": 126,
                      "end": 127
                    },
                    "start": 126,
                    "end": 129
                  },
                  "start": 124,
                  "end": 129
                },
                "start": 111,
                "end": 129
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 99,
            "end": 131
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "doSomething",
              "optional": false,
              "typeAnnotation": null,
              "start": 133,
              "end": 144
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "predicate",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 160,
                              "end": 161
                            },
                            "typeArguments": null,
                            "start": 160,
                            "end": 161
                          },
                          "start": 158,
                          "end": 161
                        },
                        "start": 157,
                        "end": 161
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 166,
                              "end": 167
                            },
                            "typeArguments": null,
                            "start": 166,
                            "end": 167
                          },
                          "start": 164,
                          "end": 167
                        },
                        "start": 163,
                        "end": 167
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 172,
                        "end": 179
                      },
                      "start": 169,
                      "end": 179
                    },
                    "start": 156,
                    "end": 179
                  },
                  "start": 154,
                  "end": 179
                },
                "start": 145,
                "end": 179
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 182,
                "end": 186
              },
              "start": 180,
              "end": 186
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 133,
            "end": 187
          }
        ],
        "start": 96,
        "end": 189
      },
      "declare": false,
      "start": 68,
      "end": 189
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 194,
            "end": 199
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "create",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 208
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 213,
                          "end": 217
                        },
                        "value": {
                          "type": "Literal",
                          "value": "bob",
                          "raw": "\"bob\"",
                          "start": 219,
                          "end": 224
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 213,
                        "end": 224
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "id",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 226,
                          "end": 228
                        },
                        "value": {
                          "type": "Literal",
                          "value": 24,
                          "raw": "24",
                          "start": 230,
                          "end": 232
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 226,
                        "end": 232
                      }
                    ],
                    "start": 211,
                    "end": 234
                  },
                  {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 238,
                          "end": 242
                        },
                        "value": {
                          "type": "Literal",
                          "value": "doug",
                          "raw": "\"doug\"",
                          "start": 244,
                          "end": 250
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 238,
                        "end": 250
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "id",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 252,
                          "end": 254
                        },
                        "value": {
                          "type": "Literal",
                          "value": 32,
                          "raw": "32",
                          "start": 256,
                          "end": 258
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 252,
                        "end": 258
                      }
                    ],
                    "start": 236,
                    "end": 260
                  }
                ],
                "start": 209,
                "end": 262
              }
            ],
            "optional": false,
            "start": 202,
            "end": 263
          },
          "definite": false,
          "start": 194,
          "end": 263
        }
      ],
      "declare": false,
      "start": 190,
      "end": 264
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 285,
            "end": 290
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "doSomething",
            "optional": false,
            "typeAnnotation": null,
            "start": 291,
            "end": 302
          },
          "optional": false,
          "computed": false,
          "start": 285,
          "end": 302
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 304,
                "end": 305
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 307,
                "end": 308
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 313,
                  "end": 314
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 315,
                  "end": 319
                },
                "optional": false,
                "computed": false,
                "start": 313,
                "end": 319
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "bob",
                "raw": "\"bob\"",
                "start": 324,
                "end": 329
              },
              "start": 313,
              "end": 329
            },
            "id": null,
            "generator": false,
            "start": 303,
            "end": 329
          }
        ],
        "optional": false,
        "start": 285,
        "end": 330
      },
      "directive": null,
      "start": 285,
      "end": 331
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 351
}
```
