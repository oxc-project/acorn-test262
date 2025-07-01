__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
            },
            "initializer": {
              "type": "Literal",
              "value": "A",
              "raw": "\"A\"",
              "start": 17,
              "end": 20
            },
            "computed": false,
            "start": 13,
            "end": 20
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 27
            },
            "initializer": {
              "type": "Literal",
              "value": "B",
              "raw": "\"B\"",
              "start": 30,
              "end": 33
            },
            "computed": false,
            "start": 26,
            "end": 33
          }
        ],
        "start": 7,
        "end": 35
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 35
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 58
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 62,
                    "end": 63
                  },
                  "typeArguments": null,
                  "start": 62,
                  "end": 63
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSUnionType",
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
                  ],
                  "start": 66,
                  "end": 79
                },
                "optional": false,
                "readonly": null,
                "start": 54,
                "end": 81
              },
              "start": 52,
              "end": 81
            },
            "start": 51,
            "end": 81
          },
          "init": null,
          "definite": false,
          "start": 51,
          "end": 81
        }
      ],
      "declare": true,
      "start": 37,
      "end": 82
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 89
          },
          "property": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 91
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 93
            },
            "optional": false,
            "computed": false,
            "start": 90,
            "end": 93
          },
          "optional": false,
          "computed": true,
          "start": 88,
          "end": 94
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 99,
          "end": 103
        },
        "start": 88,
        "end": 103
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 111,
                    "end": 112
                  },
                  "property": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 113,
                      "end": 114
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 115,
                      "end": 116
                    },
                    "optional": false,
                    "computed": false,
                    "start": 113,
                    "end": 116
                  },
                  "optional": false,
                  "computed": true,
                  "start": 111,
                  "end": 117
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 118,
                  "end": 126
                },
                "optional": false,
                "computed": false,
                "start": 111,
                "end": 126
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 111,
              "end": 128
            },
            "directive": null,
            "start": 111,
            "end": 129
          }
        ],
        "start": 105,
        "end": 141
      },
      "alternate": null,
      "start": 84,
      "end": 141
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 141
}
```
