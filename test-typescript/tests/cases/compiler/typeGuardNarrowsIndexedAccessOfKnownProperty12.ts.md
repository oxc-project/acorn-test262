__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 142,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 35,
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 35,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 13,
            "end": 20,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 17,
              "end": 20,
              "raw": "\"A\"",
              "value": "A"
            }
          },
          {
            "type": "TSEnumMember",
            "start": 26,
            "end": 33,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 30,
              "end": 33,
              "raw": "\"B\"",
              "value": "B"
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 82,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 51,
          "end": 81,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 51,
            "end": 81,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 52,
              "end": 81,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 54,
                "end": 81,
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 62,
                  "end": 63,
                  "typeName": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 63,
                    "decorators": [],
                    "name": "E",
                    "optional": false
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 58,
                  "decorators": [],
                  "name": "K",
                  "optional": false
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 66,
                  "end": 79,
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 66,
                      "end": 72
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 75,
                      "end": 79
                    }
                  ]
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 84,
      "end": 141,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 105,
        "end": 141,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 111,
            "end": 129,
            "expression": {
              "type": "CallExpression",
              "start": 111,
              "end": 128,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 111,
                "end": 126,
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "start": 111,
                  "end": 117,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 111,
                    "end": 112,
                    "decorators": [],
                    "name": "m",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "MemberExpression",
                    "start": 113,
                    "end": 116,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 113,
                      "end": 114,
                      "decorators": [],
                      "name": "E",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 115,
                      "end": 116,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 126,
                  "decorators": [],
                  "name": "toString",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 88,
        "end": 103,
        "operator": "!==",
        "left": {
          "type": "MemberExpression",
          "start": 88,
          "end": 94,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 88,
            "end": 89,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "MemberExpression",
            "start": 90,
            "end": 93,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "decorators": [],
              "name": "E",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          }
        },
        "right": {
          "type": "Literal",
          "start": 99,
          "end": 103,
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
