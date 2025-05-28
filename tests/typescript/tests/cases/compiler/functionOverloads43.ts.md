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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 20,
                      "end": 21,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 21,
                      "end": 28,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 22,
                        "end": 28
                      }
                    },
                    "accessibility": null,
                    "static": false
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
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 43,
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 55,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 64,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 64,
                      "end": 71,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 65,
                        "end": 71
                      }
                    },
                    "accessibility": null,
                    "static": false
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
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 86,
      "end": 215,
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 98,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 106,
                      "end": 107,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                    },
                    "accessibility": null,
                    "static": false
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
      "body": {
        "type": "BlockStatement",
        "start": 146,
        "end": 215,
        "body": [
          {
            "type": "IfStatement",
            "start": 152,
            "end": 186,
            "test": {
              "type": "Identifier",
              "start": 156,
              "end": 157,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "object": {
                      "type": "Identifier",
                      "start": 176,
                      "end": 177,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 179,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                }
              ]
            },
            "alternate": null
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
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 217,
      "end": 243,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 221,
          "end": 242,
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
            "callee": {
              "type": "Identifier",
              "start": 225,
              "end": 228,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 231,
                          "end": 232,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 234,
                          "end": 239,
                          "value": "str",
                          "raw": "\"str\""
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 244,
      "end": 268,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 248,
          "end": 267,
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
            "callee": {
              "type": "Identifier",
              "start": 252,
              "end": 255,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 258,
                          "end": 259,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 261,
                          "end": 264,
                          "value": 100,
                          "raw": "100"
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
