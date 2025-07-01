__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 13
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 29,
                "end": 30
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 32
              },
              "optional": false,
              "computed": false,
              "start": 29,
              "end": 32
            },
            "start": 22,
            "end": 32
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 43
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
                    "start": 46,
                    "end": 47
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 46,
                  "end": 47
                }
              ],
              "start": 44,
              "end": 49
            },
            "const": false,
            "declare": false,
            "start": 37,
            "end": 49
          }
        ],
        "start": 16,
        "end": 51
      },
      "expression": false,
      "start": 0,
      "end": 51
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 66
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 82,
                "end": 83
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 85
              },
              "optional": false,
              "computed": false,
              "start": 82,
              "end": 85
            },
            "start": 75,
            "end": 85
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 102
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
                    "start": 105,
                    "end": 106
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 105,
                  "end": 106
                }
              ],
              "start": 103,
              "end": 108
            },
            "const": true,
            "declare": false,
            "start": 90,
            "end": 108
          }
        ],
        "start": 69,
        "end": 110
      },
      "expression": false,
      "start": 53,
      "end": 110
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
            "name": "config",
            "optional": false,
            "typeAnnotation": null,
            "start": 118,
            "end": 124
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 133,
                  "end": 134
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AfterObject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 136,
                    "end": 147
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 148,
                    "end": 149
                  },
                  "optional": false,
                  "computed": false,
                  "start": 136,
                  "end": 149
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 133,
                "end": 149
              }
            ],
            "start": 127,
            "end": 152
          },
          "definite": false,
          "start": 118,
          "end": 152
        }
      ],
      "declare": false,
      "start": 112,
      "end": 153
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AfterObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 166,
        "end": 177
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
              "start": 184,
              "end": 185
            },
            "initializer": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 188,
              "end": 189
            },
            "computed": false,
            "start": 184,
            "end": 189
          }
        ],
        "start": 178,
        "end": 192
      },
      "const": true,
      "declare": false,
      "start": 155,
      "end": 192
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 192
}
```
