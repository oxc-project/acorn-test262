__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 46,
  "end": 348,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 46,
      "end": 175,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 52,
          "end": 175,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 99,
            "end": 174,
            "properties": [
              {
                "type": "Property",
                "start": 105,
                "end": 109,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 106,
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
                  "start": 108,
                  "end": 109,
                  "raw": "0",
                  "value": 0
                }
              },
              {
                "type": "Property",
                "start": 115,
                "end": 125,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 116,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 118,
                  "end": 125,
                  "raw": "\"hello\"",
                  "value": "hello"
                }
              },
              {
                "type": "Property",
                "start": 131,
                "end": 135,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 132,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 134,
                  "end": 135,
                  "raw": "8",
                  "value": 8
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 241,
      "end": 263,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 245,
          "end": 262,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 245,
            "end": 246,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 249,
            "end": 262,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 249,
              "end": 260,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 249,
                "end": 252,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 249,
                  "end": 250,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 252,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 253,
                "end": 260,
                "decorators": [],
                "name": "toFixed",
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
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 264,
      "end": 289,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 288,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 269,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 272,
            "end": 288,
            "arguments": [
              {
                "type": "Literal",
                "start": 286,
                "end": 287,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 272,
              "end": 285,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 272,
                "end": 275,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 272,
                  "end": 273,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 274,
                  "end": 275,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 276,
                "end": 285,
                "decorators": [],
                "name": "substring",
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
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 336,
      "end": 348,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 340,
          "end": 347,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 340,
            "end": 341,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 344,
            "end": 347,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 344,
              "end": 345,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 346,
              "end": 347,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
