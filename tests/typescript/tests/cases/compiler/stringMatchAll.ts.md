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
            "name": "matches",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 13
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "matchAll",
                "raw": "\"matchAll\"",
                "start": 16,
                "end": 26
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "matchAll",
                "optional": false,
                "typeAnnotation": null,
                "start": 27,
                "end": 35
              },
              "optional": false,
              "computed": false,
              "start": 16,
              "end": 35
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "/\\w/g",
                "regex": {
                  "pattern": "\\w",
                  "flags": "g"
                },
                "start": 36,
                "end": 41
              }
            ],
            "optional": false,
            "start": 16,
            "end": 42
          },
          "definite": false,
          "start": 6,
          "end": 42
        }
      ],
      "declare": false,
      "start": 0,
      "end": 43
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
            "name": "array",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 55
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "matches",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 62,
                  "end": 69
                },
                "start": 59,
                "end": 69
              }
            ],
            "start": 58,
            "end": 70
          },
          "definite": false,
          "start": 50,
          "end": 70
        }
      ],
      "declare": false,
      "start": 44,
      "end": 71
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "index",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 80,
                  "end": 85
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "index",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 80,
                  "end": 85
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 80,
                "end": 85
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 92
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 92
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 87,
                "end": 92
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 94
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "array",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 102
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 103,
              "end": 104
            },
            "optional": false,
            "computed": true,
            "start": 97,
            "end": 105
          },
          "definite": false,
          "start": 78,
          "end": 105
        }
      ],
      "declare": false,
      "start": 72,
      "end": 106
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 106
}
```
