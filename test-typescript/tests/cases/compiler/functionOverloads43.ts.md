__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 268,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 42,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 32,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 16,
            "end": 32,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 18,
              "end": 32,
              "elementType": {
                "type": "TSTypeLiteral",
                "start": 18,
                "end": 30,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 20,
                    "end": 28,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 20,
                      "end": 21,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 21,
                      "end": 28,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 22,
                        "end": 28
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 33,
        "end": 41,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 35,
          "end": 41
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 43,
      "end": 85,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 55,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 56,
          "end": 75,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 59,
            "end": 75,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 61,
              "end": 75,
              "elementType": {
                "type": "TSTypeLiteral",
                "start": 61,
                "end": 73,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 63,
                    "end": 71,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 64,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 64,
                      "end": 71,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 65,
                        "end": 71
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 76,
        "end": 84,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 78,
          "end": 84
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 86,
      "end": 215,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 146,
        "end": 215,
        "body": [
          {
            "type": "IfStatement",
            "start": 152,
            "end": 186,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 159,
              "end": 186,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 169,
                  "end": 180,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 176,
                    "end": 179,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 176,
                      "end": 177,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 179,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 156,
              "end": 157,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ReturnStatement",
            "start": 196,
            "end": 213,
            "argument": {
              "type": "Identifier",
              "start": 203,
              "end": 212,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 98,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 99,
          "end": 127,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 102,
            "end": 127,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 104,
              "end": 127,
              "elementType": {
                "type": "TSTypeLiteral",
                "start": 104,
                "end": 125,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 106,
                    "end": 123,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 106,
                      "end": 107,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 107,
                      "end": 123,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 108,
                        "end": 123,
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 108,
                            "end": 114
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 117,
                            "end": 123
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 128,
        "end": 145,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 130,
          "end": 145,
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 130,
              "end": 136
            },
            {
              "type": "TSNumberKeyword",
              "start": 139,
              "end": 145
            }
          ]
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 217,
      "end": 243,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 221,
          "end": 242,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 221,
            "end": 222,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 225,
            "end": 242,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 229,
                "end": 241,
                "elements": [
                  {
                    "type": "ObjectExpression",
                    "start": 230,
                    "end": 240,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 231,
                        "end": 239,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 231,
                          "end": 232,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 234,
                          "end": 239,
                          "raw": "\"str\"",
                          "value": "str",
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 225,
              "end": 228,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 244,
      "end": 268,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 248,
          "end": 267,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 248,
            "end": 249,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 252,
            "end": 267,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 256,
                "end": 266,
                "elements": [
                  {
                    "type": "ObjectExpression",
                    "start": 257,
                    "end": 265,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 258,
                        "end": 264,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 258,
                          "end": 259,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 261,
                          "end": 264,
                          "raw": "100",
                          "value": 100,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 252,
              "end": 255,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
