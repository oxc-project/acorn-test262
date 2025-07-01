__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Multimap4",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 18
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 25,
                  "end": 29
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 30,
                  "end": 34
                },
                "optional": false,
                "computed": false,
                "start": 25,
                "end": 34
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 37,
                "end": 39
              },
              "start": 25,
              "end": 39
            },
            "directive": null,
            "start": 25,
            "end": 40
          }
        ],
        "start": 21,
        "end": 42
      },
      "expression": false,
      "start": 0,
      "end": 42
    },
    {
      "type": "EmptyStatement",
      "start": 42,
      "end": 43
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Multimap4",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 54
          },
          "property": {
            "type": "Literal",
            "value": "prototype",
            "raw": "\"prototype\"",
            "start": 55,
            "end": 66
          },
          "optional": false,
          "computed": true,
          "start": 45,
          "end": 67
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null,
                "start": 147,
                "end": 150
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 151,
                    "end": 154
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 169,
                            "end": 173
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_map",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 174,
                            "end": 178
                          },
                          "optional": false,
                          "computed": false,
                          "start": 169,
                          "end": 178
                        },
                        "property": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 179,
                            "end": 182
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "value": "",
                            "raw": "''",
                            "start": 185,
                            "end": 187
                          },
                          "start": 179,
                          "end": 187
                        },
                        "optional": false,
                        "computed": true,
                        "start": 169,
                        "end": 188
                      },
                      "start": 162,
                      "end": 189
                    }
                  ],
                  "start": 156,
                  "end": 193
                },
                "expression": false,
                "start": 150,
                "end": 193
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 147,
              "end": 193
            }
          ],
          "start": 70,
          "end": 195
        },
        "start": 45,
        "end": 195
      },
      "directive": null,
      "start": 45,
      "end": 196
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Multimap4",
              "optional": false,
              "typeAnnotation": null,
              "start": 198,
              "end": 207
            },
            "property": {
              "type": "Literal",
              "value": "prototype",
              "raw": "\"prototype\"",
              "start": 208,
              "end": 219
            },
            "optional": false,
            "computed": true,
            "start": 198,
            "end": 220
          },
          "property": {
            "type": "Literal",
            "value": "add-on",
            "raw": "\"add-on\"",
            "start": 221,
            "end": 229
          },
          "optional": false,
          "computed": true,
          "start": 198,
          "end": 230
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 244,
            "end": 246
          },
          "expression": false,
          "start": 233,
          "end": 246
        },
        "start": 198,
        "end": 246
      },
      "directive": null,
      "start": 198,
      "end": 247
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Multimap4",
              "optional": false,
              "typeAnnotation": null,
              "start": 248,
              "end": 257
            },
            "property": {
              "type": "Literal",
              "value": "prototype",
              "raw": "\"prototype\"",
              "start": 258,
              "end": 269
            },
            "optional": false,
            "computed": true,
            "start": 248,
            "end": 270
          },
          "property": {
            "type": "Literal",
            "value": "addon",
            "raw": "\"addon\"",
            "start": 271,
            "end": 278
          },
          "optional": false,
          "computed": true,
          "start": 248,
          "end": 279
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 293,
            "end": 295
          },
          "expression": false,
          "start": 282,
          "end": 295
        },
        "start": 248,
        "end": 295
      },
      "directive": null,
      "start": 248,
      "end": 296
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Multimap4",
              "optional": false,
              "typeAnnotation": null,
              "start": 297,
              "end": 306
            },
            "property": {
              "type": "Literal",
              "value": "prototype",
              "raw": "\"prototype\"",
              "start": 307,
              "end": 318
            },
            "optional": false,
            "computed": true,
            "start": 297,
            "end": 319
          },
          "property": {
            "type": "Literal",
            "value": "__underscores__",
            "raw": "\"__underscores__\"",
            "start": 320,
            "end": 337
          },
          "optional": false,
          "computed": true,
          "start": 297,
          "end": 338
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 352,
            "end": 354
          },
          "expression": false,
          "start": 341,
          "end": 354
        },
        "start": 297,
        "end": 354
      },
      "directive": null,
      "start": 297,
      "end": 355
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
            "name": "map4",
            "optional": false,
            "typeAnnotation": null,
            "start": 363,
            "end": 367
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Multimap4",
              "optional": false,
              "typeAnnotation": null,
              "start": 374,
              "end": 383
            },
            "typeArguments": null,
            "arguments": [],
            "start": 370,
            "end": 385
          },
          "definite": false,
          "start": 363,
          "end": 385
        }
      ],
      "declare": false,
      "start": 357,
      "end": 386
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "map4",
            "optional": false,
            "typeAnnotation": null,
            "start": 387,
            "end": 391
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "get",
            "optional": false,
            "typeAnnotation": null,
            "start": 392,
            "end": 395
          },
          "optional": false,
          "computed": false,
          "start": 387,
          "end": 395
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 396,
            "end": 398
          }
        ],
        "optional": false,
        "start": 387,
        "end": 399
      },
      "directive": null,
      "start": 387,
      "end": 400
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "map4",
            "optional": false,
            "typeAnnotation": null,
            "start": 401,
            "end": 405
          },
          "property": {
            "type": "Literal",
            "value": "add-on",
            "raw": "\"add-on\"",
            "start": 406,
            "end": 414
          },
          "optional": false,
          "computed": true,
          "start": 401,
          "end": 415
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 401,
        "end": 417
      },
      "directive": null,
      "start": 401,
      "end": 418
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "map4",
            "optional": false,
            "typeAnnotation": null,
            "start": 419,
            "end": 423
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "addon",
            "optional": false,
            "typeAnnotation": null,
            "start": 424,
            "end": 429
          },
          "optional": false,
          "computed": false,
          "start": 419,
          "end": 429
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 419,
        "end": 431
      },
      "directive": null,
      "start": 419,
      "end": 432
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "map4",
            "optional": false,
            "typeAnnotation": null,
            "start": 433,
            "end": 437
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "__underscores__",
            "optional": false,
            "typeAnnotation": null,
            "start": 438,
            "end": 453
          },
          "optional": false,
          "computed": false,
          "start": 433,
          "end": 453
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 433,
        "end": 455
      },
      "directive": null,
      "start": 433,
      "end": 456
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 456
}
```
