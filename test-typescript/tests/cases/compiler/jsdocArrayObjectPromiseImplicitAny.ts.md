__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 21,
  "end": 689,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 21,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 39,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 33,
            "decorators": [],
            "name": "anyArray",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 36,
            "end": 39,
            "elements": [
              {
                "type": "Literal",
                "start": 37,
                "end": 38,
                "raw": "5",
                "value": 5,
                "regex": null,
                "bigint": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 71,
      "end": 93,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 92,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 86,
            "decorators": [],
            "name": "numberArray",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 89,
            "end": 92,
            "elements": [
              {
                "type": "Literal",
                "start": 90,
                "end": 91,
                "raw": "5",
                "value": 5,
                "regex": null,
                "bigint": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 144,
      "end": 190,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 173,
        "end": 190,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 177,
            "end": 188,
            "argument": {
              "type": "Identifier",
              "start": 184,
              "end": 187,
              "decorators": [],
              "name": "arr",
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
        "start": 153,
        "end": 167,
        "decorators": [],
        "name": "returnAnyArray",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 168,
          "end": 171,
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 215,
      "end": 251,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 219,
          "end": 250,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 219,
            "end": 229,
            "decorators": [],
            "name": "anyPromise",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 232,
            "end": 250,
            "arguments": [
              {
                "type": "Literal",
                "start": 248,
                "end": 249,
                "raw": "5",
                "value": 5,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 232,
              "end": 247,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 232,
                "end": 239,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 240,
                "end": 247,
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null
              }
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
      "start": 284,
      "end": 323,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 288,
          "end": 322,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 288,
            "end": 301,
            "decorators": [],
            "name": "numberPromise",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 304,
            "end": 322,
            "arguments": [
              {
                "type": "Literal",
                "start": 320,
                "end": 321,
                "raw": "5",
                "value": 5,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 304,
              "end": 319,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 304,
                "end": 311,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 312,
                "end": 319,
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null
              }
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
      "type": "FunctionDeclaration",
      "start": 377,
      "end": 423,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 407,
        "end": 423,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 411,
            "end": 421,
            "argument": {
              "type": "Identifier",
              "start": 418,
              "end": 420,
              "decorators": [],
              "name": "pr",
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
        "start": 386,
        "end": 402,
        "decorators": [],
        "name": "returnAnyPromise",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 403,
          "end": 405,
          "decorators": [],
          "name": "pr",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 447,
      "end": 476,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 451,
          "end": 475,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 451,
            "end": 460,
            "decorators": [],
            "name": "anyObject",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 463,
            "end": 475,
            "properties": [
              {
                "type": "Property",
                "start": 464,
                "end": 474,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 464,
                  "end": 471,
                  "decorators": [],
                  "name": "valueOf",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 473,
                  "end": 474,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 556,
      "end": 589,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 560,
          "end": 588,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 560,
            "end": 573,
            "decorators": [],
            "name": "paramedObject",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 576,
            "end": 588,
            "properties": [
              {
                "type": "Property",
                "start": 577,
                "end": 587,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 577,
                  "end": 584,
                  "decorators": [],
                  "name": "valueOf",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 586,
                  "end": 587,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 642,
      "end": 689,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 672,
        "end": 689,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 676,
            "end": 687,
            "argument": {
              "type": "Identifier",
              "start": 683,
              "end": 686,
              "decorators": [],
              "name": "obj",
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
        "start": 651,
        "end": 666,
        "decorators": [],
        "name": "returnAnyObject",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 667,
          "end": 670,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
