__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 115,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 50,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 13,
            "decorators": [],
            "name": "matches",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 16,
            "end": 50,
            "arguments": [
              {
                "type": "Literal",
                "start": 39,
                "end": 49,
                "raw": "\"matchAll\"",
                "value": "matchAll"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 16,
              "end": 38,
              "computed": true,
              "object": {
                "type": "Literal",
                "start": 16,
                "end": 21,
                "raw": "/\\w/g",
                "regex": {
                  "flags": "g",
                  "pattern": "\\w"
                },
                "value": null
              },
              "optional": false,
              "property": {
                "type": "MemberExpression",
                "start": 22,
                "end": 37,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 28,
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 37,
                  "decorators": [],
                  "name": "matchAll",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
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
      "type": "VariableDeclaration",
      "start": 52,
      "end": 79,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 78,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 63,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 66,
            "end": 78,
            "elements": [
              {
                "type": "SpreadElement",
                "start": 67,
                "end": 77,
                "argument": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 77,
                  "decorators": [],
                  "name": "matches",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 80,
      "end": 114,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 86,
          "end": 113,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 86,
            "end": 102,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 88,
                "end": 93,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 93,
                  "decorators": [],
                  "name": "index",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 93,
                  "decorators": [],
                  "name": "index",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 95,
                "end": 100,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 100,
                  "decorators": [],
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 100,
                  "decorators": [],
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 105,
            "end": 113,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 105,
              "end": 110,
              "decorators": [],
              "name": "array",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 111,
              "end": 112,
              "raw": "0",
              "value": 0
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
