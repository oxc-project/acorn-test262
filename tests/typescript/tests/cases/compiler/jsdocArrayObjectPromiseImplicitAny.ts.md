__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "anyArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 33
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 37,
                "end": 38
              }
            ],
            "start": 36,
            "end": 39
          },
          "definite": false,
          "start": 25,
          "end": 39
        }
      ],
      "declare": false,
      "start": 21,
      "end": 40
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "numberArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 86
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 90,
                "end": 91
              }
            ],
            "start": 89,
            "end": 92
          },
          "definite": false,
          "start": 75,
          "end": 92
        }
      ],
      "declare": false,
      "start": 71,
      "end": 93
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "returnAnyArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 153,
        "end": 167
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": null,
          "start": 168,
          "end": 171
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null,
              "start": 184,
              "end": 187
            },
            "start": 177,
            "end": 188
          }
        ],
        "start": 173,
        "end": 190
      },
      "expression": false,
      "start": 144,
      "end": 190
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "anyPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 219,
            "end": 229
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 232,
                "end": 239
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 240,
                "end": 247
              },
              "optional": false,
              "computed": false,
              "start": 232,
              "end": 247
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 248,
                "end": 249
              }
            ],
            "optional": false,
            "start": 232,
            "end": 250
          },
          "definite": false,
          "start": 219,
          "end": 250
        }
      ],
      "declare": false,
      "start": 215,
      "end": 251
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "numberPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 288,
            "end": 301
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 304,
                "end": 311
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 312,
                "end": 319
              },
              "optional": false,
              "computed": false,
              "start": 304,
              "end": 319
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 320,
                "end": 321
              }
            ],
            "optional": false,
            "start": 304,
            "end": 322
          },
          "definite": false,
          "start": 288,
          "end": 322
        }
      ],
      "declare": false,
      "start": 284,
      "end": 323
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "returnAnyPromise",
        "optional": false,
        "typeAnnotation": null,
        "start": 386,
        "end": 402
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "pr",
          "optional": false,
          "typeAnnotation": null,
          "start": 403,
          "end": 405
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "pr",
              "optional": false,
              "typeAnnotation": null,
              "start": 418,
              "end": 420
            },
            "start": 411,
            "end": 421
          }
        ],
        "start": 407,
        "end": 423
      },
      "expression": false,
      "start": 377,
      "end": 423
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "anyObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 451,
            "end": 460
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "valueOf",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 464,
                  "end": 471
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 473,
                  "end": 474
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 464,
                "end": 474
              }
            ],
            "start": 463,
            "end": 475
          },
          "definite": false,
          "start": 451,
          "end": 475
        }
      ],
      "declare": false,
      "start": 447,
      "end": 476
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "paramedObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 560,
            "end": 573
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "valueOf",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 577,
                  "end": 584
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 586,
                  "end": 587
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 577,
                "end": 587
              }
            ],
            "start": 576,
            "end": 588
          },
          "definite": false,
          "start": 560,
          "end": 588
        }
      ],
      "declare": false,
      "start": 556,
      "end": 589
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "returnAnyObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 651,
        "end": 666
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null,
          "start": 667,
          "end": 670
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 683,
              "end": 686
            },
            "start": 676,
            "end": 687
          }
        ],
        "start": 672,
        "end": 689
      },
      "expression": false,
      "start": 642,
      "end": 689
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 21,
  "end": 689
}
```
