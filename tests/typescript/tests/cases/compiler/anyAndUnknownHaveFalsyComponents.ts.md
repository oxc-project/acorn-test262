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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 19,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 21,
      "end": 40,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 39,
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
            "left": {
              "type": "Identifier",
              "start": 32,
              "end": 34,
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Literal",
              "start": 38,
              "end": 39,
              "value": 3,
              "raw": "3"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 52,
      "end": 83,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 82,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 84,
      "end": 198,
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 97,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 117,
                    "end": 124,
                    "decorators": [],
                    "name": "display",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 126,
                    "end": 133,
                    "value": "block",
                    "raw": "\"block\""
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "SpreadElement",
                  "start": 139,
                  "end": 191,
                  "argument": {
                    "type": "LogicalExpression",
                    "start": 143,
                    "end": 190,
                    "left": {
                      "type": "Identifier",
                      "start": 143,
                      "end": 156,
                      "decorators": [],
                      "name": "isTreeHeader1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "start": 160,
                      "end": 190,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 168,
                          "end": 183,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 168,
                            "end": 175,
                            "decorators": [],
                            "name": "display",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 177,
                            "end": 183,
                            "value": "flex",
                            "raw": "\"flex\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
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
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 200,
      "end": 224,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 212,
          "end": 223,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 225,
      "end": 244,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 231,
          "end": 243,
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
            "left": {
              "type": "Identifier",
              "start": 236,
              "end": 238,
              "decorators": [],
              "name": "x2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "&&",
            "right": {
              "type": "Literal",
              "start": 242,
              "end": 243,
              "value": 3,
              "raw": "3"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 256,
      "end": 291,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 290,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 292,
      "end": 406,
      "id": {
        "type": "Identifier",
        "start": 301,
        "end": 305,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 325,
                    "end": 332,
                    "decorators": [],
                    "name": "display",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 334,
                    "end": 341,
                    "value": "block",
                    "raw": "\"block\""
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "SpreadElement",
                  "start": 347,
                  "end": 399,
                  "argument": {
                    "type": "LogicalExpression",
                    "start": 351,
                    "end": 398,
                    "left": {
                      "type": "Identifier",
                      "start": 351,
                      "end": 364,
                      "decorators": [],
                      "name": "isTreeHeader1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "start": 368,
                      "end": 398,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 376,
                          "end": 391,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 376,
                            "end": 383,
                            "decorators": [],
                            "name": "display",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 385,
                            "end": 391,
                            "value": "flex",
                            "raw": "\"flex\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
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
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
