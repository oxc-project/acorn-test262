__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 406,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 20,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 19,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 19,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 14,
              "end": 19,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 16,
                "end": 19
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 21,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 39,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 29,
            "decorators": [],
            "name": "y1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 32,
            "end": 39,
            "operator": "&&",
            "left": {
              "type": "Identifier",
              "start": 32,
              "end": 34,
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 38,
              "end": 39,
              "raw": "3",
              "value": 3,
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 52,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 82,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 82,
            "decorators": [],
            "name": "isTreeHeader1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 82,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 79,
                "end": 82
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "FunctionDeclaration",
      "start": 84,
      "end": 198,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 100,
        "end": 198,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 104,
            "end": 196,
            "argument": {
              "type": "ObjectExpression",
              "start": 111,
              "end": 195,
              "properties": [
                {
                  "type": "Property",
                  "start": 117,
                  "end": 133,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 117,
                    "end": 124,
                    "decorators": [],
                    "name": "display",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 126,
                    "end": 133,
                    "raw": "\"block\"",
                    "value": "block",
                    "regex": null,
                    "bigint": null
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 139,
                  "end": 191,
                  "argument": {
                    "type": "LogicalExpression",
                    "start": 143,
                    "end": 190,
                    "operator": "&&",
                    "left": {
                      "type": "Identifier",
                      "start": 143,
                      "end": 156,
                      "decorators": [],
                      "name": "isTreeHeader1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 160,
                      "end": 190,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 168,
                          "end": 183,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 168,
                            "end": 175,
                            "decorators": [],
                            "name": "display",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 177,
                            "end": 183,
                            "raw": "\"flex\"",
                            "value": "flex",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    }
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
        "start": 93,
        "end": 97,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 200,
      "end": 224,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 212,
          "end": 223,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 212,
            "end": 223,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 214,
              "end": 223,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 216,
                "end": 223
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 225,
      "end": 244,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 231,
          "end": 243,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 231,
            "end": 233,
            "decorators": [],
            "name": "y2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 236,
            "end": 243,
            "operator": "&&",
            "left": {
              "type": "Identifier",
              "start": 236,
              "end": 238,
              "decorators": [],
              "name": "x2",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 242,
              "end": 243,
              "raw": "3",
              "value": 3,
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 256,
      "end": 291,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 290,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 290,
            "decorators": [],
            "name": "isTreeHeader2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 281,
              "end": 290,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 283,
                "end": 290
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "FunctionDeclaration",
      "start": 292,
      "end": 406,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 308,
        "end": 406,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 312,
            "end": 404,
            "argument": {
              "type": "ObjectExpression",
              "start": 319,
              "end": 403,
              "properties": [
                {
                  "type": "Property",
                  "start": 325,
                  "end": 341,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 325,
                    "end": 332,
                    "decorators": [],
                    "name": "display",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 334,
                    "end": 341,
                    "raw": "\"block\"",
                    "value": "block",
                    "regex": null,
                    "bigint": null
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 347,
                  "end": 399,
                  "argument": {
                    "type": "LogicalExpression",
                    "start": 351,
                    "end": 398,
                    "operator": "&&",
                    "left": {
                      "type": "Identifier",
                      "start": 351,
                      "end": 364,
                      "decorators": [],
                      "name": "isTreeHeader1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 368,
                      "end": 398,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 376,
                          "end": 391,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 376,
                            "end": 383,
                            "decorators": [],
                            "name": "display",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 385,
                            "end": 391,
                            "raw": "\"flex\"",
                            "value": "flex",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ]
                    }
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
        "start": 301,
        "end": 305,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
