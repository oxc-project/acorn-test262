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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 39,
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
                "value": 5,
                "raw": "5"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 71,
      "end": 93,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 92,
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
                "value": 5,
                "raw": "5"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 144,
      "end": 190,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 167,
        "decorators": [],
        "name": "returnAnyArray",
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
          "start": 168,
          "end": 171,
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
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
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 215,
      "end": 251,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 219,
          "end": 250,
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
            "callee": {
              "type": "MemberExpression",
              "start": 232,
              "end": 247,
              "object": {
                "type": "Identifier",
                "start": 232,
                "end": 239,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 240,
                "end": 247,
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 248,
                "end": 249,
                "value": 5,
                "raw": "5"
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
      "start": 284,
      "end": 323,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 288,
          "end": 322,
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
            "callee": {
              "type": "MemberExpression",
              "start": 304,
              "end": 319,
              "object": {
                "type": "Identifier",
                "start": 304,
                "end": 311,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 312,
                "end": 319,
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 320,
                "end": 321,
                "value": 5,
                "raw": "5"
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
      "type": "FunctionDeclaration",
      "start": 377,
      "end": 423,
      "id": {
        "type": "Identifier",
        "start": 386,
        "end": 402,
        "decorators": [],
        "name": "returnAnyPromise",
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
          "start": 403,
          "end": 405,
          "decorators": [],
          "name": "pr",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
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
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 447,
      "end": 476,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 451,
          "end": 475,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 464,
                  "end": 471,
                  "decorators": [],
                  "name": "valueOf",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 473,
                  "end": 474,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 556,
      "end": 589,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 560,
          "end": 588,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 577,
                  "end": 584,
                  "decorators": [],
                  "name": "valueOf",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 586,
                  "end": 587,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 642,
      "end": 689,
      "id": {
        "type": "Identifier",
        "start": 651,
        "end": 666,
        "decorators": [],
        "name": "returnAnyObject",
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
          "start": 667,
          "end": 670,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
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
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
