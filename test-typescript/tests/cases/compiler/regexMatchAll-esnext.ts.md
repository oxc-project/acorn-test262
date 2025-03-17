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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 13,
            "name": "matches",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 16,
            "end": 50,
            "callee": {
              "type": "MemberExpression",
              "start": 16,
              "end": 38,
              "object": {
                "type": "Literal",
                "start": 16,
                "end": 21,
                "value": null,
                "raw": "/\\w/g",
                "regex": {
                  "flags": "g",
                  "pattern": "\\w"
                }
              },
              "property": {
                "type": "MemberExpression",
                "start": 22,
                "end": 37,
                "object": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 28,
                  "name": "Symbol",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 37,
                  "name": "matchAll",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "computed": true,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 39,
                "end": 49,
                "value": "matchAll",
                "raw": "\"matchAll\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 63,
            "name": "array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "matches",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "ObjectPattern",
            "start": 86,
            "end": 102,
            "properties": [
              {
                "type": "Property",
                "start": 88,
                "end": 93,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 93,
                  "name": "index",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 93,
                  "name": "index",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 95,
                "end": 100,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 100,
                  "name": "input",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 100,
                  "name": "input",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 105,
            "end": 113,
            "object": {
              "type": "Identifier",
              "start": 105,
              "end": 110,
              "name": "array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 111,
              "end": 112,
              "value": 0,
              "raw": "0"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
