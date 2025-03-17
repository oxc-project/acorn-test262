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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 13,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 13,
            "end": 14,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      ],
      "const": false,
      "declare": false,
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
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
          "id": {
            "type": "Identifier",
            "start": 51,
            "end": 81,
            "name": "m",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 52,
              "end": 81,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 54,
                "end": 81,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 57,
                  "end": 63,
                  "name": {
                    "type": "Identifier",
                    "start": 57,
                    "end": 58,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 62,
                    "end": 63,
                    "typeName": {
                      "type": "Identifier",
                      "start": 62,
                      "end": 63,
                      "name": "E",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
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
                "optional": null,
                "readonly": null,
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 62,
                  "end": 63,
                  "typeName": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 63,
                    "name": "E",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "key": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 58,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
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
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "MemberExpression",
            "start": 90,
            "end": 93,
            "object": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "computed": true,
          "optional": false
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
                    "name": "m",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "MemberExpression",
                    "start": 113,
                    "end": 116,
                    "object": {
                      "type": "Identifier",
                      "start": 113,
                      "end": 114,
                      "name": "E",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 115,
                      "end": 116,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "computed": true,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 126,
                  "name": "toString",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
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
