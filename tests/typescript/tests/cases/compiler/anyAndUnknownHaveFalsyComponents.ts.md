__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 16,
                "end": 19
              },
              "start": 14,
              "end": 19
            },
            "start": 12,
            "end": 19
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 19
        }
      ],
      "declare": true,
      "start": 0,
      "end": 20
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
            "name": "y1",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 29
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 34
            },
            "operator": "&&",
            "right": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 38,
              "end": 39
            },
            "start": 32,
            "end": 39
          },
          "definite": false,
          "start": 27,
          "end": 39
        }
      ],
      "declare": false,
      "start": 21,
      "end": 40
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "isTreeHeader1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 79,
                "end": 82
              },
              "start": 77,
              "end": 82
            },
            "start": 64,
            "end": 82
          },
          "init": null,
          "definite": false,
          "start": 64,
          "end": 82
        }
      ],
      "declare": true,
      "start": 52,
      "end": 83
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 97
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
                    "name": "display",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 117,
                    "end": 124
                  },
                  "value": {
                    "type": "Literal",
                    "value": "block",
                    "raw": "\"block\"",
                    "start": 126,
                    "end": 133
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 117,
                  "end": 133
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isTreeHeader1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 143,
                      "end": 156
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "display",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 168,
                            "end": 175
                          },
                          "value": {
                            "type": "Literal",
                            "value": "flex",
                            "raw": "\"flex\"",
                            "start": 177,
                            "end": 183
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 168,
                          "end": 183
                        }
                      ],
                      "start": 160,
                      "end": 190
                    },
                    "start": 143,
                    "end": 190
                  },
                  "start": 139,
                  "end": 191
                }
              ],
              "start": 111,
              "end": 195
            },
            "start": 104,
            "end": 196
          }
        ],
        "start": 100,
        "end": 198
      },
      "expression": false,
      "start": 84,
      "end": 198
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 216,
                "end": 223
              },
              "start": 214,
              "end": 223
            },
            "start": 212,
            "end": 223
          },
          "init": null,
          "definite": false,
          "start": 212,
          "end": 223
        }
      ],
      "declare": true,
      "start": 200,
      "end": 224
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
            "name": "y2",
            "optional": false,
            "typeAnnotation": null,
            "start": 231,
            "end": 233
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x2",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 238
            },
            "operator": "&&",
            "right": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 242,
              "end": 243
            },
            "start": 236,
            "end": 243
          },
          "definite": false,
          "start": 231,
          "end": 243
        }
      ],
      "declare": false,
      "start": 225,
      "end": 244
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "isTreeHeader2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 283,
                "end": 290
              },
              "start": 281,
              "end": 290
            },
            "start": 268,
            "end": 290
          },
          "init": null,
          "definite": false,
          "start": 268,
          "end": 290
        }
      ],
      "declare": true,
      "start": 256,
      "end": 291
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 301,
        "end": 305
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
                    "name": "display",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 325,
                    "end": 332
                  },
                  "value": {
                    "type": "Literal",
                    "value": "block",
                    "raw": "\"block\"",
                    "start": 334,
                    "end": 341
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 325,
                  "end": 341
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isTreeHeader1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 351,
                      "end": 364
                    },
                    "operator": "&&",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "display",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 376,
                            "end": 383
                          },
                          "value": {
                            "type": "Literal",
                            "value": "flex",
                            "raw": "\"flex\"",
                            "start": 385,
                            "end": 391
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 376,
                          "end": 391
                        }
                      ],
                      "start": 368,
                      "end": 398
                    },
                    "start": 351,
                    "end": 398
                  },
                  "start": 347,
                  "end": 399
                }
              ],
              "start": 319,
              "end": 403
            },
            "start": 312,
            "end": 404
          }
        ],
        "start": 308,
        "end": 406
      },
      "expression": false,
      "start": 292,
      "end": 406
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 406
}
```
