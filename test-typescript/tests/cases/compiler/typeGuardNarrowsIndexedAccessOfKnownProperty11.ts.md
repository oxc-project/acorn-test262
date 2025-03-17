__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 122,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 15,
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
          "start": 9,
          "end": 10,
          "id": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 12,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 15,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 9,
            "end": 10,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 12,
            "end": 13,
            "id": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 62,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 61,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 61,
            "name": "m",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 61,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 34,
                "end": 61,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 37,
                  "end": 43,
                  "name": {
                    "type": "Identifier",
                    "start": 37,
                    "end": 38,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 42,
                    "end": 43,
                    "typeName": {
                      "type": "Identifier",
                      "start": 42,
                      "end": 43,
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
                  "start": 46,
                  "end": 59,
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 46,
                      "end": 52
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 55,
                      "end": 59
                    }
                  ]
                },
                "optional": null,
                "readonly": null,
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 42,
                  "end": 43,
                  "typeName": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 43,
                    "name": "E",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "key": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 38,
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
      "start": 64,
      "end": 121,
      "test": {
        "type": "BinaryExpression",
        "start": 68,
        "end": 83,
        "left": {
          "type": "MemberExpression",
          "start": 68,
          "end": 74,
          "object": {
            "type": "Identifier",
            "start": 68,
            "end": 69,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "MemberExpression",
            "start": 70,
            "end": 73,
            "object": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
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
          "start": 79,
          "end": 83,
          "value": null,
          "raw": "null"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 85,
        "end": 121,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 91,
            "end": 109,
            "expression": {
              "type": "CallExpression",
              "start": 91,
              "end": 108,
              "callee": {
                "type": "MemberExpression",
                "start": 91,
                "end": 106,
                "object": {
                  "type": "MemberExpression",
                  "start": 91,
                  "end": 97,
                  "object": {
                    "type": "Identifier",
                    "start": 91,
                    "end": 92,
                    "name": "m",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "MemberExpression",
                    "start": 93,
                    "end": 96,
                    "object": {
                      "type": "Identifier",
                      "start": 93,
                      "end": 94,
                      "name": "E",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 96,
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
                  "start": 98,
                  "end": 106,
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
