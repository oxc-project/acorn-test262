__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
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
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 6
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 14
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 14
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 19,
                "end": 20
              },
              "value": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 22,
                "end": 23
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 19,
              "end": 23
            }
          ],
          "start": 17,
          "end": 25
        },
        "start": 0,
        "end": 25
      },
      "directive": null,
      "start": 0,
      "end": 26
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 27
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "json0",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 11
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 21
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./json.json",
                "raw": "\"./json.json\"",
                "start": 22,
                "end": 35
              }
            ],
            "optional": false,
            "start": 14,
            "end": 36
          },
          "definite": false,
          "start": 6,
          "end": 36
        }
      ],
      "declare": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "json0",
          "optional": false,
          "typeAnnotation": null,
          "start": 38,
          "end": 43
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 44,
          "end": 45
        },
        "optional": false,
        "computed": false,
        "start": 38,
        "end": 45
      },
      "directive": null,
      "start": 38,
      "end": 46
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
            "name": "json1",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 104
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 114
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./json.json",
                "raw": "\"./json.json\"",
                "start": 115,
                "end": 128
              }
            ],
            "optional": false,
            "start": 107,
            "end": 129
          },
          "definite": false,
          "start": 99,
          "end": 129
        }
      ],
      "declare": false,
      "start": 93,
      "end": 130
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "json1",
          "optional": false,
          "typeAnnotation": null,
          "start": 149,
          "end": 154
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 155,
          "end": 156
        },
        "optional": false,
        "computed": false,
        "start": 149,
        "end": 156
      },
      "directive": null,
      "start": 149,
      "end": 157
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
            "name": "js0",
            "optional": false,
            "typeAnnotation": null,
            "start": 215,
            "end": 218
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 221,
              "end": 228
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./js.js",
                "raw": "\"./js.js\"",
                "start": 229,
                "end": 238
              }
            ],
            "optional": false,
            "start": 221,
            "end": 239
          },
          "definite": false,
          "start": 215,
          "end": 239
        }
      ],
      "declare": false,
      "start": 209,
      "end": 240
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "json0",
          "optional": false,
          "typeAnnotation": null,
          "start": 241,
          "end": 246
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 247,
          "end": 248
        },
        "optional": false,
        "computed": false,
        "start": 241,
        "end": 248
      },
      "directive": null,
      "start": 241,
      "end": 249
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
            "name": "js1",
            "optional": false,
            "typeAnnotation": null,
            "start": 302,
            "end": 305
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 308,
              "end": 315
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./js.js",
                "raw": "\"./js.js\"",
                "start": 316,
                "end": 325
              }
            ],
            "optional": false,
            "start": 308,
            "end": 326
          },
          "definite": false,
          "start": 302,
          "end": 326
        }
      ],
      "declare": false,
      "start": 296,
      "end": 327
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "js1",
          "optional": false,
          "typeAnnotation": null,
          "start": 344,
          "end": 347
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 348,
          "end": 349
        },
        "optional": false,
        "computed": false,
        "start": 344,
        "end": 349
      },
      "directive": null,
      "start": 344,
      "end": 350
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 350
}
```
