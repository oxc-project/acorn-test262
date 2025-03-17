__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 193,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 51,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "name": "foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 16,
        "end": 51,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 22,
            "end": 32,
            "argument": {
              "type": "MemberExpression",
              "start": 29,
              "end": 32,
              "object": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 31,
                "end": 32,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          },
          {
            "type": "TSEnumDeclaration",
            "start": 37,
            "end": 49,
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "members": [
              {
                "type": "TSEnumMember",
                "start": 46,
                "end": 47,
                "id": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 47,
                  "name": "A",
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
              "start": 44,
              "end": 49,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 46,
                  "end": 47,
                  "id": {
                    "type": "Identifier",
                    "start": 46,
                    "end": 47,
                    "name": "A",
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
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 53,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 66,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 69,
        "end": 110,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 75,
            "end": 85,
            "argument": {
              "type": "MemberExpression",
              "start": 82,
              "end": 85,
              "object": {
                "type": "Identifier",
                "start": 82,
                "end": 83,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          },
          {
            "type": "TSEnumDeclaration",
            "start": 90,
            "end": 108,
            "id": {
              "type": "Identifier",
              "start": 101,
              "end": 102,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "members": [
              {
                "type": "TSEnumMember",
                "start": 105,
                "end": 106,
                "id": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 106,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "initializer": null,
                "computed": false
              }
            ],
            "const": true,
            "declare": false,
            "body": {
              "type": "TSEnumBody",
              "start": 103,
              "end": 108,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 105,
                  "end": 106,
                  "id": {
                    "type": "Identifier",
                    "start": 105,
                    "end": 106,
                    "name": "A",
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
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 112,
      "end": 153,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 118,
          "end": 152,
          "id": {
            "type": "Identifier",
            "start": 118,
            "end": 124,
            "name": "config",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 127,
            "end": 152,
            "properties": [
              {
                "type": "Property",
                "start": 133,
                "end": 149,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 133,
                  "end": 134,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 136,
                  "end": 149,
                  "object": {
                    "type": "Identifier",
                    "start": 136,
                    "end": 147,
                    "name": "AfterObject",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 148,
                    "end": 149,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 155,
      "end": 192,
      "id": {
        "type": "Identifier",
        "start": 166,
        "end": 177,
        "name": "AfterObject",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 184,
          "end": 189,
          "id": {
            "type": "Identifier",
            "start": 184,
            "end": 185,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 188,
            "end": 189,
            "value": 2,
            "raw": "2"
          },
          "computed": false
        }
      ],
      "const": true,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 178,
        "end": 192,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 184,
            "end": 189,
            "id": {
              "type": "Identifier",
              "start": 184,
              "end": 185,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 188,
              "end": 189,
              "value": 2,
              "raw": "2"
            },
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
