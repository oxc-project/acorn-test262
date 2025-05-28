__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 121,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 15,
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
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 17,
      "end": 62,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 61,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 61,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 61,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 34,
                "end": 61,
                "key": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 38,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 42,
                  "end": 43,
                  "typeName": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 43,
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
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "MemberExpression",
            "start": 70,
            "end": 73,
            "object": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
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
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "MemberExpression",
                    "start": 93,
                    "end": 96,
                    "object": {
                      "type": "Identifier",
                      "start": 93,
                      "end": 94,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 96,
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
                  "start": 98,
                  "end": 106,
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
