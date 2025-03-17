__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 107,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 43,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 42,
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
            "end": 42,
            "callee": {
              "type": "MemberExpression",
              "start": 16,
              "end": 35,
              "object": {
                "type": "Literal",
                "start": 16,
                "end": 26,
                "value": "matchAll",
                "raw": "\"matchAll\""
              },
              "property": {
                "type": "Identifier",
                "start": 27,
                "end": 35,
                "name": "matchAll",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 36,
                "end": 41,
                "value": null,
                "raw": "/\\w/g",
                "regex": {
                  "flags": "g",
                  "pattern": "\\w"
                }
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
      "start": 44,
      "end": 71,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 50,
          "end": 70,
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 55,
            "name": "array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 58,
            "end": 70,
            "elements": [
              {
                "type": "SpreadElement",
                "start": 59,
                "end": 69,
                "argument": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 69,
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
      "start": 72,
      "end": 106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 78,
          "end": 105,
          "id": {
            "type": "ObjectPattern",
            "start": 78,
            "end": 94,
            "properties": [
              {
                "type": "Property",
                "start": 80,
                "end": 85,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 85,
                  "name": "index",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 85,
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
                "start": 87,
                "end": 92,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 92,
                  "name": "input",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 92,
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
            "start": 97,
            "end": 105,
            "object": {
              "type": "Identifier",
              "start": 97,
              "end": 102,
              "name": "array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 103,
              "end": 104,
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
