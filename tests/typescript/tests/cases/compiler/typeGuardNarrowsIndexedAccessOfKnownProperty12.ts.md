__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 141,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 35,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 35,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 13,
            "end": 20,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 17,
              "end": 20,
              "value": "A",
              "raw": "\"A\""
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 26,
            "end": 33,
            "id": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 30,
              "end": 33,
              "value": "B",
              "raw": "\"B\""
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 82,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 51,
          "end": 81,
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
                "key": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 58,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
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
                },
                "optional": false,
                "readonly": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 84,
      "end": 141,
      "test": {
        "type": "BinaryExpression",
        "start": 88,
        "end": 103,
        "left": {
          "type": "MemberExpression",
          "start": 88,
          "end": 94,
          "object": {
            "type": "Identifier",
            "start": 88,
            "end": 89,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "MemberExpression",
            "start": 90,
            "end": 93,
            "object": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "optional": false,
          "computed": true
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 99,
          "end": 103,
          "value": null,
          "raw": "null"
        }
      },
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
              "callee": {
                "type": "MemberExpression",
                "start": 111,
                "end": 126,
                "object": {
                  "type": "MemberExpression",
                  "start": 111,
                  "end": 117,
                  "object": {
                    "type": "Identifier",
                    "start": 111,
                    "end": 112,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "MemberExpression",
                    "start": 113,
                    "end": 116,
                    "object": {
                      "type": "Identifier",
                      "start": 113,
                      "end": 114,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 115,
                      "end": 116,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "optional": false,
                  "computed": true
                },
                "property": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 126,
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
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
