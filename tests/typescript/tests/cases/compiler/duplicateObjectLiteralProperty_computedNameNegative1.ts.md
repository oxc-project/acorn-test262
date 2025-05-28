__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 68,
  "end": 301,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 68,
      "end": 195,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 80,
        "decorators": [],
        "name": "bar",
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
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 91,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 92,
                    "end": 100,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 94,
                      "end": 100
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 102,
                  "end": 112,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 102,
                    "end": 103,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 104,
                    "end": 112,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 106,
                      "end": 112
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 116,
        "end": 195,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 120,
            "end": 153,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 126,
                "end": 152,
                "id": {
                  "type": "ObjectPattern",
                  "start": 126,
                  "end": 144,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 128,
                      "end": 134,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 128,
                        "end": 129,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 132,
                          "end": 134,
                          "value": "",
                          "raw": "\"\""
                        },
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 136,
                      "end": 142,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 136,
                        "end": 137,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 140,
                          "end": 142,
                          "value": "",
                          "raw": "\"\""
                        },
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 152,
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 170,
                    "end": 171,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 174,
                    "end": 175,
                    "value": 1,
                    "raw": "1"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 181,
                  "end": 187,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 182,
                    "end": 183,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 186,
                    "end": 187,
                    "value": 2,
                    "raw": "2"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 197,
      "end": 301,
      "id": {
        "type": "Identifier",
        "start": 206,
        "end": 209,
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
          "type": "ObjectPattern",
          "start": 210,
          "end": 256,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 212,
              "end": 218,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 212,
                "end": 213,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 216,
                  "end": 218,
                  "value": "",
                  "raw": "\"\""
                },
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 220,
              "end": 226,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 220,
                "end": 221,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Literal",
                  "start": 224,
                  "end": 226,
                  "value": "",
                  "raw": "\"\""
                },
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
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
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 232,
                    "end": 233,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 234,
                    "end": 242,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 236,
                      "end": 242
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 244,
                  "end": 254,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 244,
                    "end": 245,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 246,
                    "end": 254,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 248,
                      "end": 254
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 276,
                    "end": 277,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 280,
                    "end": 281,
                    "value": 1,
                    "raw": "1"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 287,
                  "end": 293,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 288,
                    "end": 289,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 292,
                    "end": 293,
                    "value": 2,
                    "raw": "2"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
