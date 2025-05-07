__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 26,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 25,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 14,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 6,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 7,
            "end": 14,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 17,
          "end": 25,
          "properties": [
            {
              "type": "Property",
              "start": 19,
              "end": 23,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 19,
                "end": 20,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 22,
                "end": 23,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 350,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 37,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 36,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 11,
            "decorators": [],
            "name": "json0",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 14,
            "end": 36,
            "arguments": [
              {
                "type": "Literal",
                "start": 22,
                "end": 35,
                "raw": "\"./json.json\"",
                "value": "./json.json",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 14,
              "end": 21,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 38,
      "end": 46,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 38,
        "end": 45,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 38,
          "end": 43,
          "decorators": [],
          "name": "json0",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 44,
          "end": 45,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 93,
      "end": 130,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 99,
          "end": 129,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 99,
            "end": 104,
            "decorators": [],
            "name": "json1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 107,
            "end": 129,
            "arguments": [
              {
                "type": "Literal",
                "start": 115,
                "end": 128,
                "raw": "\"./json.json\"",
                "value": "./json.json",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 107,
              "end": 114,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 149,
      "end": 157,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 149,
        "end": 156,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 149,
          "end": 154,
          "decorators": [],
          "name": "json1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 155,
          "end": 156,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 209,
      "end": 240,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 215,
          "end": 239,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 215,
            "end": 218,
            "decorators": [],
            "name": "js0",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 221,
            "end": 239,
            "arguments": [
              {
                "type": "Literal",
                "start": 229,
                "end": 238,
                "raw": "\"./js.js\"",
                "value": "./js.js",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 221,
              "end": 228,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 241,
      "end": 249,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 241,
        "end": 248,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 241,
          "end": 246,
          "decorators": [],
          "name": "json0",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 247,
          "end": 248,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 296,
      "end": 327,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 302,
          "end": 326,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 302,
            "end": 305,
            "decorators": [],
            "name": "js1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 308,
            "end": 326,
            "arguments": [
              {
                "type": "Literal",
                "start": 316,
                "end": 325,
                "raw": "\"./js.js\"",
                "value": "./js.js",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 308,
              "end": 315,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 344,
      "end": 350,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 344,
        "end": 349,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 344,
          "end": 347,
          "decorators": [],
          "name": "js1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 348,
          "end": 349,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
