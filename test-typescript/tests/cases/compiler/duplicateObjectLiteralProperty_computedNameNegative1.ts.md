__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 68,
  "end": 302,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 68,
      "end": 195,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 116,
        "end": 195,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 120,
            "end": 153,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 126,
                "end": 152,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 126,
                  "end": 144,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 128,
                      "end": 134,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 128,
                        "end": 129,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 128,
                        "end": 134,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 128,
                          "end": 129,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "start": 132,
                          "end": 134,
                          "raw": "\"\"",
                          "value": ""
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "start": 136,
                      "end": 142,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 136,
                        "end": 137,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 136,
                        "end": 142,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 136,
                          "end": 137,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "start": 140,
                          "end": 142,
                          "raw": "\"\"",
                          "value": ""
                        }
                      }
                    }
                  ]
                },
                "init": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 152,
                  "decorators": [],
                  "name": "props",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ReturnStatement",
            "start": 156,
            "end": 193,
            "argument": {
              "type": "ObjectExpression",
              "start": 163,
              "end": 192,
              "properties": [
                {
                  "type": "Property",
                  "start": 169,
                  "end": 175,
                  "computed": true,
                  "key": {
                    "type": "Identifier",
                    "start": 170,
                    "end": 171,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 174,
                    "end": 175,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "Property",
                  "start": 181,
                  "end": 187,
                  "computed": true,
                  "key": {
                    "type": "Identifier",
                    "start": 182,
                    "end": 183,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 186,
                    "end": 187,
                    "raw": "2",
                    "value": 2
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 80,
        "decorators": [],
        "name": "bar",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 81,
          "end": 114,
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 86,
            "end": 114,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 88,
              "end": 114,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 90,
                  "end": 101,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 91,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 92,
                    "end": 100,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 94,
                      "end": 100
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 102,
                  "end": 112,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 102,
                    "end": 103,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 104,
                    "end": 112,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 106,
                      "end": 112
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 197,
      "end": 301,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 258,
        "end": 301,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 262,
            "end": 299,
            "argument": {
              "type": "ObjectExpression",
              "start": 269,
              "end": 298,
              "properties": [
                {
                  "type": "Property",
                  "start": 275,
                  "end": 281,
                  "computed": true,
                  "key": {
                    "type": "Identifier",
                    "start": 276,
                    "end": 277,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 280,
                    "end": 281,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "Property",
                  "start": 287,
                  "end": 293,
                  "computed": true,
                  "key": {
                    "type": "Identifier",
                    "start": 288,
                    "end": 289,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 292,
                    "end": 293,
                    "raw": "2",
                    "value": 2
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 206,
        "end": 209,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 210,
          "end": 256,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 212,
              "end": 218,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 212,
                "end": 213,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "AssignmentPattern",
                "start": 212,
                "end": 218,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 212,
                  "end": 213,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 216,
                  "end": 218,
                  "raw": "\"\"",
                  "value": ""
                }
              }
            },
            {
              "type": "Property",
              "start": 220,
              "end": 226,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 220,
                "end": 221,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "AssignmentPattern",
                "start": 220,
                "end": 226,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 220,
                  "end": 221,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 224,
                  "end": 226,
                  "raw": "\"\"",
                  "value": ""
                }
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 228,
            "end": 256,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 230,
              "end": 256,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 232,
                  "end": 243,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 232,
                    "end": 233,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 234,
                    "end": 242,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 236,
                      "end": 242
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 244,
                  "end": 254,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 244,
                    "end": 245,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 246,
                    "end": 254,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 248,
                      "end": 254
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
