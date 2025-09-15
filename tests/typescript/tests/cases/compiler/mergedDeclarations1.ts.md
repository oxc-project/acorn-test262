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
        "name": "Point",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
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
              "start": 22,
              "end": 23
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 25,
                "end": 31
              },
              "start": 23,
              "end": 31
            },
            "accessibility": null,
            "static": false,
            "start": 22,
            "end": 32
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 38
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 40,
                "end": 46
              },
              "start": 38,
              "end": 46
            },
            "accessibility": null,
            "static": false,
            "start": 37,
            "end": 47
          }
        ],
        "start": 16,
        "end": 49
      },
      "declare": false,
      "start": 0,
      "end": 49
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "point",
        "optional": false,
        "typeAnnotation": null,
        "start": 59,
        "end": 64
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSNumberKeyword",
              "start": 68,
              "end": 74
            },
            "start": 66,
            "end": 74
          },
          "start": 65,
          "end": 74
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 79,
              "end": 85
            },
            "start": 77,
            "end": 85
          },
          "start": 76,
          "end": 85
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Point",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 93
          },
          "typeArguments": null,
          "start": 88,
          "end": 93
        },
        "start": 86,
        "end": 93
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
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
                    "start": 109,
                    "end": 110
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 112,
                    "end": 113
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 109,
                  "end": 113
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
                    "start": 115,
                    "end": 116
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 118,
                    "end": 119
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 115,
                  "end": 119
                }
              ],
              "start": 107,
              "end": 121
            },
            "start": 100,
            "end": 122
          }
        ],
        "start": 94,
        "end": 124
      },
      "expression": false,
      "start": 50,
      "end": 124
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "point",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
        "end": 140
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "origin",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 158,
                    "end": 164
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "point",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 167,
                      "end": 172
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 173,
                        "end": 174
                      },
                      {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 176,
                        "end": 177
                      }
                    ],
                    "optional": false,
                    "start": 167,
                    "end": 178
                  },
                  "definite": false,
                  "start": 158,
                  "end": 178
                }
              ],
              "declare": false,
              "start": 154,
              "end": 179
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 147,
            "end": 179
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "equals",
                "optional": false,
                "typeAnnotation": null,
                "start": 200,
                "end": 206
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 211,
                        "end": 216
                      },
                      "typeArguments": null,
                      "start": 211,
                      "end": 216
                    },
                    "start": 209,
                    "end": 216
                  },
                  "start": 207,
                  "end": 216
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 222,
                        "end": 227
                      },
                      "typeArguments": null,
                      "start": 222,
                      "end": 227
                    },
                    "start": 220,
                    "end": 227
                  },
                  "start": 218,
                  "end": 227
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "p1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 246,
                            "end": 248
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 249,
                            "end": 250
                          },
                          "optional": false,
                          "computed": false,
                          "start": 246,
                          "end": 250
                        },
                        "operator": "==",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "p2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 254,
                            "end": 256
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 257,
                            "end": 258
                          },
                          "optional": false,
                          "computed": false,
                          "start": 254,
                          "end": 258
                        },
                        "start": 246,
                        "end": 258
                      },
                      "operator": "&&",
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "p1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 262,
                            "end": 264
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 265,
                            "end": 266
                          },
                          "optional": false,
                          "computed": false,
                          "start": 262,
                          "end": 266
                        },
                        "operator": "==",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "p2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 270,
                            "end": 272
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 273,
                            "end": 274
                          },
                          "optional": false,
                          "computed": false,
                          "start": 270,
                          "end": 274
                        },
                        "start": 262,
                        "end": 274
                      },
                      "start": 246,
                      "end": 274
                    },
                    "start": 239,
                    "end": 275
                  }
                ],
                "start": 229,
                "end": 281
              },
              "expression": false,
              "start": 191,
              "end": 281
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 184,
            "end": 281
          }
        ],
        "start": 141,
        "end": 283
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 125,
      "end": 283
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
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 288,
            "end": 290
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "point",
              "optional": false,
              "typeAnnotation": null,
              "start": 293,
              "end": 298
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 299,
                "end": 300
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 302,
                "end": 303
              }
            ],
            "optional": false,
            "start": 293,
            "end": 304
          },
          "definite": false,
          "start": 288,
          "end": 304
        }
      ],
      "declare": false,
      "start": 284,
      "end": 305
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
            "name": "p2",
            "optional": false,
            "typeAnnotation": null,
            "start": 310,
            "end": 312
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "point",
              "optional": false,
              "typeAnnotation": null,
              "start": 315,
              "end": 320
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "origin",
              "optional": false,
              "typeAnnotation": null,
              "start": 321,
              "end": 327
            },
            "optional": false,
            "computed": false,
            "start": 315,
            "end": 327
          },
          "definite": false,
          "start": 310,
          "end": 327
        }
      ],
      "declare": false,
      "start": 306,
      "end": 328
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 333,
            "end": 334
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "point",
                "optional": false,
                "typeAnnotation": null,
                "start": 337,
                "end": 342
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "equals",
                "optional": false,
                "typeAnnotation": null,
                "start": 343,
                "end": 349
              },
              "optional": false,
              "computed": false,
              "start": 337,
              "end": 349
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": null,
                "start": 350,
                "end": 352
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p2",
                "optional": false,
                "typeAnnotation": null,
                "start": 354,
                "end": 356
              }
            ],
            "optional": false,
            "start": 337,
            "end": 357
          },
          "definite": false,
          "start": 333,
          "end": 357
        }
      ],
      "declare": false,
      "start": 329,
      "end": 358
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 358
}
```
