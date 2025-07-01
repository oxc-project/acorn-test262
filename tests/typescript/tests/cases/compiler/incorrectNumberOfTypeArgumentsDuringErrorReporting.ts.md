__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ObjA",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 20
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 22,
                "end": 28
              },
              "start": 21,
              "end": 28
            },
            "accessibility": null,
            "static": false,
            "start": 19,
            "end": 29
          }
        ],
        "start": 15,
        "end": 31
      },
      "declare": false,
      "start": 0,
      "end": 31
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ObjB",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 47
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 54,
                    "end": 60
                  },
                  "start": 53,
                  "end": 60
                },
                "start": 50,
                "end": 60
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 62,
                "end": 65
              },
              "start": 61,
              "end": 65
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 49,
            "end": 65
          }
        ],
        "start": 48,
        "end": 66
      },
      "declare": false,
      "start": 33,
      "end": 66
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Opts",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 82
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 84
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 83,
            "end": 84
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 87
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 86,
            "end": 87
          }
        ],
        "start": 82,
        "end": 88
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 91
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 92,
                  "end": 93
                },
                "typeArguments": null,
                "start": 92,
                "end": 93
              },
              "start": 91,
              "end": 93
            },
            "accessibility": null,
            "static": false,
            "start": 90,
            "end": 94
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 96
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 97,
                  "end": 98
                },
                "typeArguments": null,
                "start": 97,
                "end": 98
              },
              "start": 96,
              "end": 98
            },
            "accessibility": null,
            "static": false,
            "start": 95,
            "end": 98
          }
        ],
        "start": 89,
        "end": 99
      },
      "declare": false,
      "start": 68,
      "end": 99
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null,
            "start": 107,
            "end": 109
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 116,
                    "end": 117
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ObjA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 126,
                      "end": 130
                    },
                    "typeArguments": null,
                    "start": 126,
                    "end": 130
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 116,
                  "end": 130
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 134,
                    "end": 135
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ObjB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 144,
                      "end": 148
                    },
                    "typeArguments": null,
                    "start": 144,
                    "end": 148
                  },
                  "default": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ObjB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 151,
                      "end": 155
                    },
                    "typeArguments": null,
                    "start": 151,
                    "end": 155
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 134,
                  "end": 155
                }
              ],
              "start": 112,
              "end": 157
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "opts",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Opts",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 163,
                      "end": 167
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 168,
                            "end": 169
                          },
                          "typeArguments": null,
                          "start": 168,
                          "end": 169
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 171,
                            "end": 172
                          },
                          "typeArguments": null,
                          "start": 171,
                          "end": 172
                        }
                      ],
                      "start": 167,
                      "end": 173
                    },
                    "start": 163,
                    "end": 173
                  },
                  "start": 162,
                  "end": 173
                },
                "start": 158,
                "end": 173
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 175,
                "end": 181
              },
              "start": 174,
              "end": 181
            },
            "body": {
              "type": "Literal",
              "value": "Z",
              "raw": "'Z'",
              "start": 185,
              "end": 188
            },
            "id": null,
            "generator": false,
            "start": 112,
            "end": 188
          },
          "definite": false,
          "start": 107,
          "end": 188
        }
      ],
      "declare": false,
      "start": 101,
      "end": 188
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyObjA",
        "optional": false,
        "typeAnnotation": null,
        "start": 200,
        "end": 206
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 212
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 213,
                "end": 219
              },
              "start": 212,
              "end": 219
            },
            "accessibility": null,
            "static": false,
            "start": 211,
            "end": 220
          }
        ],
        "start": 207,
        "end": 222
      },
      "declare": false,
      "start": 190,
      "end": 222
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 224,
          "end": 226
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyObjA",
                "optional": false,
                "typeAnnotation": null,
                "start": 227,
                "end": 233
              },
              "typeArguments": null,
              "start": 227,
              "end": 233
            }
          ],
          "start": 226,
          "end": 234
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 239,
                  "end": 240
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 243,
                        "end": 244
                      },
                      "value": {
                        "type": "Literal",
                        "value": "X",
                        "raw": "'X'",
                        "start": 246,
                        "end": 249
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 243,
                      "end": 249
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 251,
                        "end": 252
                      },
                      "value": {
                        "type": "Literal",
                        "value": "Y",
                        "raw": "'Y'",
                        "start": 254,
                        "end": 257
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 251,
                      "end": 257
                    }
                  ],
                  "start": 242,
                  "end": 258
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 239,
                "end": 258
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 262,
                  "end": 263
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 265,
                  "end": 267
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 262,
                "end": 267
              }
            ],
            "start": 235,
            "end": 270
          }
        ],
        "optional": false,
        "start": 224,
        "end": 271
      },
      "directive": null,
      "start": 224,
      "end": 271
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 271
}
```
