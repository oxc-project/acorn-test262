__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 114,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 113,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "name": "Test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 16,
          "end": 17,
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
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
          "start": 23,
          "end": 24,
          "id": {
            "type": "Identifier",
            "start": 23,
            "end": 24,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 30,
          "end": 66,
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "CallExpression",
            "start": 34,
            "end": 66,
            "callee": {
              "type": "MemberExpression",
              "start": 34,
              "end": 44,
              "object": {
                "type": "Identifier",
                "start": 34,
                "end": 38,
                "name": "Math",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 39,
                "end": 44,
                "name": "floor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "BinaryExpression",
                "start": 45,
                "end": 65,
                "left": {
                  "type": "CallExpression",
                  "start": 45,
                  "end": 58,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 45,
                    "end": 56,
                    "object": {
                      "type": "Identifier",
                      "start": 45,
                      "end": 49,
                      "name": "Math",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 50,
                      "end": 56,
                      "name": "random",
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
                "operator": "*",
                "right": {
                  "type": "Literal",
                  "start": 61,
                  "end": 65,
                  "value": 1000,
                  "raw": "1000"
                }
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 72,
          "end": 78,
          "id": {
            "type": "Identifier",
            "start": 72,
            "end": 73,
            "name": "D",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 76,
            "end": 78,
            "value": 10,
            "raw": "10"
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 84,
          "end": 85,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 85,
            "name": "E",
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
        "start": 10,
        "end": 113,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 16,
            "end": 17,
            "id": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
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
            "start": 23,
            "end": 24,
            "id": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 30,
            "end": 66,
            "id": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "CallExpression",
              "start": 34,
              "end": 66,
              "callee": {
                "type": "MemberExpression",
                "start": 34,
                "end": 44,
                "object": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 38,
                  "name": "Math",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 44,
                  "name": "floor",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "start": 45,
                  "end": 65,
                  "left": {
                    "type": "CallExpression",
                    "start": 45,
                    "end": 58,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 45,
                      "end": 56,
                      "object": {
                        "type": "Identifier",
                        "start": 45,
                        "end": 49,
                        "name": "Math",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 50,
                        "end": 56,
                        "name": "random",
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
                  "operator": "*",
                  "right": {
                    "type": "Literal",
                    "start": 61,
                    "end": 65,
                    "value": 1000,
                    "raw": "1000"
                  }
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 72,
            "end": 78,
            "id": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 76,
              "end": 78,
              "value": 10,
              "raw": "10"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 84,
            "end": 85,
            "id": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
