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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 11,
            "name": "match",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "match",
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
                "start": 23,
                "end": 26,
                "value": null,
                "raw": "/ /",
                "regex": {
                  "flags": "",
                  "pattern": " "
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
          "name": "match",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 61,
                "end": 83,
                "id": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 72,
                  "name": "foo",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 64,
                    "end": 72,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 66,
                      "end": 72
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 75,
                  "end": 83,
                  "object": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 80,
                    "name": "match",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 81,
                    "end": 82,
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
                "id": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 105,
                  "name": "bar",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 97,
                    "end": 105,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 99,
                      "end": 105
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 108,
                  "end": 116,
                  "object": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 113,
                    "name": "match",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 114,
                    "end": 115,
                    "value": 1,
                    "raw": "1"
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
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
