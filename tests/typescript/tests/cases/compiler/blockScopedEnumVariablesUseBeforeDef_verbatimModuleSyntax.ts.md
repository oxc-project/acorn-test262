__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 192,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 51,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 31,
                "end": 32,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "decorators": [],
                    "name": "A",
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
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 53,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 66,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
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
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "initializer": null,
                  "computed": false
                }
              ]
            },
            "const": true,
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 112,
      "end": 153,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 118,
          "end": 152,
          "id": {
            "type": "Identifier",
            "start": 118,
            "end": 124,
            "decorators": [],
            "name": "config",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 133,
                  "end": 134,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "MemberExpression",
                  "start": 136,
                  "end": 149,
                  "object": {
                    "type": "Identifier",
                    "start": 136,
                    "end": 147,
                    "decorators": [],
                    "name": "AfterObject",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 148,
                    "end": 149,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "AfterObject",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
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
      },
      "const": true,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
