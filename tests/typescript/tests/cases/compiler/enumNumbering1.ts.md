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
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
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
              "start": 16,
              "end": 17
            },
            "initializer": null,
            "computed": false,
            "start": 16,
            "end": 17
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 24
            },
            "initializer": null,
            "computed": false,
            "start": 23,
            "end": 24
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 31
            },
            "initializer": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 34,
                  "end": 38
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "floor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 39,
                  "end": 44
                },
                "optional": false,
                "computed": false,
                "start": 34,
                "end": 44
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Math",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 45,
                        "end": 49
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "random",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 50,
                        "end": 56
                      },
                      "optional": false,
                      "computed": false,
                      "start": 45,
                      "end": 56
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 45,
                    "end": 58
                  },
                  "operator": "*",
                  "right": {
                    "type": "Literal",
                    "value": 1000,
                    "raw": "1000",
                    "start": 61,
                    "end": 65
                  },
                  "start": 45,
                  "end": 65
                }
              ],
              "optional": false,
              "start": 34,
              "end": 66
            },
            "computed": false,
            "start": 30,
            "end": 66
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 73
            },
            "initializer": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 76,
              "end": 78
            },
            "computed": false,
            "start": 72,
            "end": 78
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 85
            },
            "initializer": null,
            "computed": false,
            "start": 84,
            "end": 85
          }
        ],
        "start": 10,
        "end": 113
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 113
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 113
}
```
