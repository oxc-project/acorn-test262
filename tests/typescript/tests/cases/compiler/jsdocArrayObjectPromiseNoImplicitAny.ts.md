__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 21,
  "end": 712,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 21,
      "end": 43,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 42,
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 36,
            "decorators": [],
            "name": "notAnyArray",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 39,
            "end": 42,
            "elements": [
              {
                "type": "Literal",
                "start": 40,
                "end": 41,
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
      "start": 74,
      "end": 96,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 78,
          "end": 95,
          "id": {
            "type": "Identifier",
            "start": 78,
            "end": 89,
            "decorators": [],
            "name": "numberArray",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 92,
            "end": 95,
            "elements": [
              {
                "type": "Literal",
                "start": 93,
                "end": 94,
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
      "start": 147,
      "end": 196,
      "id": {
        "type": "Identifier",
        "start": 156,
        "end": 173,
        "decorators": [],
        "name": "returnNotAnyArray",
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
          "start": 174,
          "end": 177,
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 179,
        "end": 196,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 183,
            "end": 194,
            "argument": {
              "type": "Identifier",
              "start": 190,
              "end": 193,
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
      "start": 221,
      "end": 260,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 225,
          "end": 259,
          "id": {
            "type": "Identifier",
            "start": 225,
            "end": 238,
            "decorators": [],
            "name": "notAnyPromise",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 241,
            "end": 259,
            "callee": {
              "type": "MemberExpression",
              "start": 241,
              "end": 256,
              "object": {
                "type": "Identifier",
                "start": 241,
                "end": 248,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 249,
                "end": 256,
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
                "start": 257,
                "end": 258,
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
      "start": 293,
      "end": 332,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 297,
          "end": 331,
          "id": {
            "type": "Identifier",
            "start": 297,
            "end": 310,
            "decorators": [],
            "name": "numberPromise",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 313,
            "end": 331,
            "callee": {
              "type": "MemberExpression",
              "start": 313,
              "end": 328,
              "object": {
                "type": "Identifier",
                "start": 313,
                "end": 320,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 321,
                "end": 328,
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
                "start": 329,
                "end": 330,
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
      "start": 386,
      "end": 435,
      "id": {
        "type": "Identifier",
        "start": 395,
        "end": 414,
        "decorators": [],
        "name": "returnNotAnyPromise",
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
          "start": 415,
          "end": 417,
          "decorators": [],
          "name": "pr",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 419,
        "end": 435,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 423,
            "end": 433,
            "argument": {
              "type": "Identifier",
              "start": 430,
              "end": 432,
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
      "start": 459,
      "end": 491,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 463,
          "end": 490,
          "id": {
            "type": "Identifier",
            "start": 463,
            "end": 475,
            "decorators": [],
            "name": "notAnyObject",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 478,
            "end": 490,
            "properties": [
              {
                "type": "Property",
                "start": 479,
                "end": 489,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 479,
                  "end": 486,
                  "decorators": [],
                  "name": "valueOf",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 488,
                  "end": 489,
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
      "start": 576,
      "end": 609,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 580,
          "end": 608,
          "id": {
            "type": "Identifier",
            "start": 580,
            "end": 593,
            "decorators": [],
            "name": "paramedObject",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 596,
            "end": 608,
            "properties": [
              {
                "type": "Property",
                "start": 597,
                "end": 607,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 597,
                  "end": 604,
                  "decorators": [],
                  "name": "valueOf",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 606,
                  "end": 607,
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
      "start": 662,
      "end": 712,
      "id": {
        "type": "Identifier",
        "start": 671,
        "end": 689,
        "decorators": [],
        "name": "returnNotAnyObject",
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
          "start": 690,
          "end": 693,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 695,
        "end": 712,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 699,
            "end": 710,
            "argument": {
              "type": "Identifier",
              "start": 706,
              "end": 709,
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
