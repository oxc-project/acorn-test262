__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 10,
            "end": 11
          },
          "definite": false,
          "start": 6,
          "end": 11
        }
      ],
      "declare": false,
      "start": 0,
      "end": 12
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 20
          },
          "init": {
            "type": "Literal",
            "value": "s",
            "raw": "\"s\"",
            "start": 23,
            "end": 26
          },
          "definite": false,
          "start": 19,
          "end": 26
        }
      ],
      "declare": false,
      "start": 13,
      "end": 27
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 35
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
              "start": 38,
              "end": 39
            },
            "initializer": {
              "type": "Literal",
              "value": "ENUM_KEY",
              "raw": "\"ENUM_KEY\"",
              "start": 42,
              "end": 52
            },
            "computed": false,
            "start": 38,
            "end": 52
          }
        ],
        "start": 36,
        "end": 54
      },
      "const": false,
      "declare": false,
      "start": 28,
      "end": 54
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 62
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 66
            },
            "initializer": null,
            "computed": false,
            "start": 65,
            "end": 66
          }
        ],
        "start": 63,
        "end": 68
      },
      "const": false,
      "declare": false,
      "start": 55,
      "end": 68
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
            "name": "t1",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 78
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 89
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 92,
                  "end": 93
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 87,
                "end": 93
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 100,
                  "end": 101
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 104,
                  "end": 105
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 99,
                "end": 105
              }
            ],
            "start": 81,
            "end": 121
          },
          "definite": false,
          "start": 76,
          "end": 121
        }
      ],
      "declare": false,
      "start": 70,
      "end": 121
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
            "name": "t2",
            "optional": false,
            "typeAnnotation": null,
            "start": 129,
            "end": 131
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 141,
                  "end": 142
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 145,
                  "end": 146
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 140,
                "end": 146
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 153,
                  "end": 154
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 157,
                  "end": 158
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 152,
                "end": 158
              }
            ],
            "start": 134,
            "end": 174
          },
          "definite": false,
          "start": 129,
          "end": 174
        }
      ],
      "declare": false,
      "start": 123,
      "end": 174
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
            "name": "t3",
            "optional": false,
            "typeAnnotation": null,
            "start": 182,
            "end": 184
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 194,
                    "end": 196
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 197,
                    "end": 198
                  },
                  "optional": false,
                  "computed": false,
                  "start": 194,
                  "end": 198
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 201,
                  "end": 202
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 193,
                "end": 202
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 209,
                    "end": 211
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 212,
                    "end": 213
                  },
                  "optional": false,
                  "computed": false,
                  "start": 209,
                  "end": 213
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 216,
                  "end": 217
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 208,
                "end": 217
              }
            ],
            "start": 187,
            "end": 233
          },
          "definite": false,
          "start": 182,
          "end": 233
        }
      ],
      "declare": false,
      "start": 176,
      "end": 233
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
            "name": "t4",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 243
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 253,
                    "end": 255
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 256,
                    "end": 257
                  },
                  "optional": false,
                  "computed": false,
                  "start": 253,
                  "end": 257
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 260,
                  "end": 261
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 252,
                "end": 261
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 268,
                    "end": 270
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 271,
                    "end": 272
                  },
                  "optional": false,
                  "computed": false,
                  "start": 268,
                  "end": 272
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 275,
                  "end": 276
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 267,
                "end": 276
              }
            ],
            "start": 246,
            "end": 292
          },
          "definite": false,
          "start": 241,
          "end": 292
        }
      ],
      "declare": false,
      "start": 235,
      "end": 292
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 292
}
```
