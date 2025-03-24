__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 113,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 113,
      "body": {
        "type": "TSEnumBody",
        "start": 10,
        "end": 113,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 16,
            "end": 17,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 23,
            "end": 24,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 30,
            "end": 66,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "CallExpression",
              "start": 34,
              "end": 66,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "start": 45,
                  "end": 65,
                  "operator": "*",
                  "left": {
                    "type": "CallExpression",
                    "start": 45,
                    "end": 58,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 45,
                      "end": 56,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 45,
                        "end": 49,
                        "decorators": [],
                        "name": "Math",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 50,
                        "end": 56,
                        "decorators": [],
                        "name": "random",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 61,
                    "end": 65,
                    "raw": "1000",
                    "value": 1000
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 34,
                "end": 44,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 38,
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 44,
                  "decorators": [],
                  "name": "floor",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "TSEnumMember",
            "start": 72,
            "end": 78,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 76,
              "end": 78,
              "raw": "10",
              "value": 10
            }
          },
          {
            "type": "TSEnumMember",
            "start": 84,
            "end": 85,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
