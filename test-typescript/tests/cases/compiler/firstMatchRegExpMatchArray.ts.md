__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 119,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 27,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 27,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 11,
            "decorators": [],
            "name": "match",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 14,
            "end": 27,
            "arguments": [
              {
                "type": "Literal",
                "start": 23,
                "end": 26,
                "raw": "/ /",
                "regex": {
                  "flags": "",
                  "pattern": " "
                },
                "value": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 14,
              "end": 22,
              "computed": false,
              "object": {
                "type": "Literal",
                "start": 14,
                "end": 16,
                "raw": "''",
                "value": ""
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 17,
                "end": 22,
                "decorators": [],
                "name": "match",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 29,
      "end": 118,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 49,
        "end": 118,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 55,
            "end": 83,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 61,
                "end": 83,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 72,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 64,
                    "end": 72,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 66,
                      "end": 72
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 75,
                  "end": 83,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 80,
                    "decorators": [],
                    "name": "match",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 81,
                    "end": 82,
                    "raw": "0",
                    "value": 0
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 88,
            "end": 116,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 94,
                "end": 116,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 105,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 97,
                    "end": 105,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 99,
                      "end": 105
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 108,
                  "end": 116,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 113,
                    "decorators": [],
                    "name": "match",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 114,
                    "end": 115,
                    "raw": "1",
                    "value": 1
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 33,
        "end": 47,
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "start": 33,
          "end": 38,
          "decorators": [],
          "name": "match",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 43,
          "end": 47,
          "raw": "null",
          "value": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
