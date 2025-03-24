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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 101,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 66,
            "end": 101,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "Identifier",
              "start": 92,
              "end": 101,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
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
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
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
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "ObjectPattern",
              "start": 105,
              "end": 129,
              "properties": [
                {
                  "type": "Property",
                  "start": 107,
                  "end": 127,
                  "method": false,
                  "shorthand": false,
                  "computed": true,
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
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
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
                    "left": {
                      "type": "Identifier",
                      "start": 121,
                      "end": 122,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 125,
                      "end": 127,
                      "value": "",
                      "raw": "\"\""
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "body": {
            "type": "BlockStatement",
            "start": 134,
            "end": 136,
            "body": []
          },
          "typeParameters": null,
          "returnType": null
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
