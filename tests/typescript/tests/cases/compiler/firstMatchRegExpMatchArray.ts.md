__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 118,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 27,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 27,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 11,
            "decorators": [],
            "name": "match",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 14,
            "end": 27,
            "callee": {
              "type": "MemberExpression",
              "start": 14,
              "end": 22,
              "object": {
                "type": "Literal",
                "start": 14,
                "end": 16,
                "value": "",
                "raw": "''"
              },
              "property": {
                "type": "Identifier",
                "start": 17,
                "end": 22,
                "decorators": [],
                "name": "match",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 23,
                "end": 26,
                "value": null,
                "raw": "/ /",
                "regex": {
                  "pattern": " ",
                  "flags": ""
                }
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
      "type": "IfStatement",
      "start": 29,
      "end": 118,
      "test": {
        "type": "BinaryExpression",
        "start": 33,
        "end": 47,
        "left": {
          "type": "Identifier",
          "start": 33,
          "end": 38,
          "decorators": [],
          "name": "match",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 43,
          "end": 47,
          "value": null,
          "raw": "null"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 49,
        "end": 118,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 55,
            "end": 83,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 61,
                "end": 83,
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
                  "object": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 80,
                    "decorators": [],
                    "name": "match",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Literal",
                    "start": 81,
                    "end": 82,
                    "value": 0,
                    "raw": "0"
                  },
                  "optional": false,
                  "computed": true
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 88,
            "end": 116,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 94,
                "end": 116,
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
                  "object": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 113,
                    "decorators": [],
                    "name": "match",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Literal",
                    "start": 114,
                    "end": 115,
                    "value": 1,
                    "raw": "1"
                  },
                  "optional": false,
                  "computed": true
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
