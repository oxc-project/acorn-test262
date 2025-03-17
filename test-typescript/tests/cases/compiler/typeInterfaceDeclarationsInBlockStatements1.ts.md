__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 418,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 57,
      "end": 127,
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 68,
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
        "start": 71,
        "end": 127,
        "body": [
          {
            "type": "IfStatement",
            "start": 75,
            "end": 101,
            "test": {
              "type": "Literal",
              "start": 79,
              "end": 83,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "TSTypeAliasDeclaration",
              "start": 85,
              "end": 101,
              "id": {
                "type": "Identifier",
                "start": 90,
                "end": 91,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 94,
                "end": 100
              },
              "declare": false
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 104,
            "end": 125,
            "expression": {
              "type": "CallExpression",
              "start": 104,
              "end": 124,
              "callee": {
                "type": "MemberExpression",
                "start": 104,
                "end": 115,
                "object": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 111,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 112,
                  "end": 115,
                  "name": "log",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "TSAsExpression",
                  "start": 116,
                  "end": 123,
                  "expression": {
                    "type": "Literal",
                    "start": 116,
                    "end": 118,
                    "value": "",
                    "raw": "\"\""
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 122,
                    "end": 123,
                    "typeName": {
                      "type": "Identifier",
                      "start": 122,
                      "end": 123,
                      "name": "s",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 129,
      "end": 209,
      "id": {
        "type": "Identifier",
        "start": 138,
        "end": 140,
        "name": "f2",
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
        "start": 143,
        "end": 209,
        "body": [
          {
            "type": "IfStatement",
            "start": 147,
            "end": 183,
            "test": {
              "type": "Literal",
              "start": 151,
              "end": 155,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 157,
              "end": 183,
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "start": 163,
                  "end": 179,
                  "id": {
                    "type": "Identifier",
                    "start": 168,
                    "end": 169,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 172,
                    "end": 178
                  },
                  "declare": false
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 186,
            "end": 207,
            "expression": {
              "type": "CallExpression",
              "start": 186,
              "end": 206,
              "callee": {
                "type": "MemberExpression",
                "start": 186,
                "end": 197,
                "object": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 193,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 194,
                  "end": 197,
                  "name": "log",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "TSAsExpression",
                  "start": 198,
                  "end": 205,
                  "expression": {
                    "type": "Literal",
                    "start": 198,
                    "end": 200,
                    "value": "",
                    "raw": "\"\""
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 204,
                    "end": 205,
                    "typeName": {
                      "type": "Identifier",
                      "start": 204,
                      "end": 205,
                      "name": "s",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 211,
      "end": 310,
      "id": {
        "type": "Identifier",
        "start": 220,
        "end": 222,
        "name": "f3",
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
        "start": 225,
        "end": 310,
        "body": [
          {
            "type": "IfStatement",
            "start": 229,
            "end": 284,
            "test": {
              "type": "Literal",
              "start": 233,
              "end": 237,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "TSInterfaceDeclaration",
              "start": 243,
              "end": 284,
              "id": {
                "type": "Identifier",
                "start": 253,
                "end": 254,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 255,
                "end": 284,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 263,
                    "end": 278,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 263,
                      "end": 269,
                      "name": "length",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 269,
                      "end": 277,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 271,
                        "end": 277
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 287,
            "end": 308,
            "expression": {
              "type": "CallExpression",
              "start": 287,
              "end": 307,
              "callee": {
                "type": "MemberExpression",
                "start": 287,
                "end": 298,
                "object": {
                  "type": "Identifier",
                  "start": 287,
                  "end": 294,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 295,
                  "end": 298,
                  "name": "log",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "TSAsExpression",
                  "start": 299,
                  "end": 306,
                  "expression": {
                    "type": "Literal",
                    "start": 299,
                    "end": 301,
                    "value": "",
                    "raw": "\"\""
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 305,
                    "end": 306,
                    "typeName": {
                      "type": "Identifier",
                      "start": 305,
                      "end": 306,
                      "name": "s",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 312,
      "end": 417,
      "id": {
        "type": "Identifier",
        "start": 321,
        "end": 323,
        "name": "f4",
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
        "start": 326,
        "end": 417,
        "body": [
          {
            "type": "IfStatement",
            "start": 330,
            "end": 391,
            "test": {
              "type": "Literal",
              "start": 334,
              "end": 338,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 340,
              "end": 391,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 346,
                  "end": 387,
                  "id": {
                    "type": "Identifier",
                    "start": 356,
                    "end": 357,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "extends": [],
                  "typeParameters": null,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 358,
                    "end": 387,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 366,
                        "end": 381,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 366,
                          "end": 372,
                          "name": "length",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 372,
                          "end": 380,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 374,
                            "end": 380
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  "declare": false
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 394,
            "end": 415,
            "expression": {
              "type": "CallExpression",
              "start": 394,
              "end": 414,
              "callee": {
                "type": "MemberExpression",
                "start": 394,
                "end": 405,
                "object": {
                  "type": "Identifier",
                  "start": 394,
                  "end": 401,
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 402,
                  "end": 405,
                  "name": "log",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "TSAsExpression",
                  "start": 406,
                  "end": 413,
                  "expression": {
                    "type": "Literal",
                    "start": 406,
                    "end": 408,
                    "value": "",
                    "raw": "\"\""
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 412,
                    "end": 413,
                    "typeName": {
                      "type": "Identifier",
                      "start": 412,
                      "end": 413,
                      "name": "s",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
