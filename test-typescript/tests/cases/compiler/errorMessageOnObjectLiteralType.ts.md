__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 102,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 40,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 40,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 40,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 7,
                "end": 40,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 13,
                    "end": 23,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 13,
                      "end": 14,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 14,
                      "end": 22,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 16,
                        "end": 22
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 28,
                    "end": 38,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 28,
                      "end": 29,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 29,
                      "end": 37,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 31,
                        "end": 37
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 42,
      "end": 67,
      "expression": {
        "type": "CallExpression",
        "start": 42,
        "end": 66,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 42,
          "end": 64,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 42,
            "end": 43,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 44,
            "end": 64,
            "decorators": [],
            "name": "getOwnPropertyNamess",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 68,
      "end": 102,
      "expression": {
        "type": "CallExpression",
        "start": 68,
        "end": 101,
        "arguments": [
          {
            "type": "Literal",
            "start": 96,
            "end": 100,
            "raw": "null",
            "value": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 68,
          "end": 95,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 68,
            "end": 74,
            "decorators": [],
            "name": "Object",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 75,
            "end": 95,
            "decorators": [],
            "name": "getOwnPropertyNamess",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
