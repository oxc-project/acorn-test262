__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 140,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 102,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 101,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 66,
            "end": 101,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 88,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 70,
                "end": 88,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 70,
                    "end": 76
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 79,
                    "end": 88
                  }
                ]
              }
            },
            "body": {
              "type": "Identifier",
              "start": 92,
              "end": 101,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 103,
      "end": 140,
      "expression": {
        "type": "CallExpression",
        "start": 103,
        "end": 139,
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 104,
          "end": 136,
          "expression": false,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "ObjectPattern",
              "start": 105,
              "end": 129,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 107,
                  "end": 127,
                  "kind": "init",
                  "key": {
                    "type": "LogicalExpression",
                    "start": 108,
                    "end": 118,
                    "left": {
                      "type": "CallExpression",
                      "start": 108,
                      "end": 111,
                      "callee": {
                        "type": "Identifier",
                        "start": 108,
                        "end": 109,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "operator": "??",
                    "right": {
                      "type": "Literal",
                      "start": 115,
                      "end": 118,
                      "value": "d",
                      "raw": "\"d\""
                    }
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 121,
                    "end": 127,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 121,
                      "end": 122,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 125,
                      "end": 127,
                      "value": "",
                      "raw": "\"\""
                    },
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false
                }
              ],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 134,
            "end": 136,
            "body": []
          },
          "id": null,
          "generator": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
