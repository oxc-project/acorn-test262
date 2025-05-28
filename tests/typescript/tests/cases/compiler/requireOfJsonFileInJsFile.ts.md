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
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 25,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 14,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 6,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 7,
            "end": 14,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 19,
                "end": 20,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 22,
                "end": 23,
                "value": 0,
                "raw": "0"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 36,
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
            "callee": {
              "type": "Identifier",
              "start": 14,
              "end": 21,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 22,
                "end": 35,
                "value": "./json.json",
                "raw": "\"./json.json\""
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
      "type": "ExpressionStatement",
      "start": 38,
      "end": 46,
      "expression": {
        "type": "MemberExpression",
        "start": 38,
        "end": 45,
        "object": {
          "type": "Identifier",
          "start": 38,
          "end": 43,
          "decorators": [],
          "name": "json0",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 44,
          "end": 45,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 93,
      "end": 130,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 99,
          "end": 129,
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
            "callee": {
              "type": "Identifier",
              "start": 107,
              "end": 114,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 115,
                "end": 128,
                "value": "./json.json",
                "raw": "\"./json.json\""
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
      "type": "ExpressionStatement",
      "start": 149,
      "end": 157,
      "expression": {
        "type": "MemberExpression",
        "start": 149,
        "end": 156,
        "object": {
          "type": "Identifier",
          "start": 149,
          "end": 154,
          "decorators": [],
          "name": "json1",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 155,
          "end": 156,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 209,
      "end": 240,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 215,
          "end": 239,
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
            "callee": {
              "type": "Identifier",
              "start": 221,
              "end": 228,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 229,
                "end": 238,
                "value": "./js.js",
                "raw": "\"./js.js\""
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
      "type": "ExpressionStatement",
      "start": 241,
      "end": 249,
      "expression": {
        "type": "MemberExpression",
        "start": 241,
        "end": 248,
        "object": {
          "type": "Identifier",
          "start": 241,
          "end": 246,
          "decorators": [],
          "name": "json0",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 247,
          "end": 248,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 296,
      "end": 327,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 302,
          "end": 326,
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
            "callee": {
              "type": "Identifier",
              "start": 308,
              "end": 315,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 316,
                "end": 325,
                "value": "./js.js",
                "raw": "\"./js.js\""
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
      "type": "ExpressionStatement",
      "start": 344,
      "end": 350,
      "expression": {
        "type": "MemberExpression",
        "start": 344,
        "end": 349,
        "object": {
          "type": "Identifier",
          "start": 344,
          "end": 347,
          "decorators": [],
          "name": "js1",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 348,
          "end": 349,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
