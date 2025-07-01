__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "items",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 65
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 71,
                      "end": 75
                    },
                    "value": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "\"A\"",
                      "start": 77,
                      "end": 80
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 71,
                    "end": 80
                  }
                ],
                "start": 69,
                "end": 82
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 86,
                      "end": 90
                    },
                    "value": {
                      "type": "Literal",
                      "value": "C",
                      "raw": "\"C\"",
                      "start": 92,
                      "end": 95
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 86,
                    "end": 95
                  }
                ],
                "start": 84,
                "end": 97
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 101,
                      "end": 105
                    },
                    "value": {
                      "type": "Literal",
                      "value": "B",
                      "raw": "\"B\"",
                      "start": 107,
                      "end": 110
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 101,
                    "end": 110
                  }
                ],
                "start": 99,
                "end": 112
              }
            ],
            "start": 68,
            "end": 113
          },
          "definite": false,
          "start": 60,
          "end": 113
        }
      ],
      "declare": false,
      "start": 56,
      "end": 114
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 128
            },
            "init": null,
            "definite": false,
            "start": 124,
            "end": 128
          }
        ],
        "declare": false,
        "start": 120,
        "end": 128
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "items",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 137
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "sort",
            "optional": false,
            "typeAnnotation": null,
            "start": 138,
            "end": 142
          },
          "optional": false,
          "computed": false,
          "start": 132,
          "end": 142
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 144,
                "end": 145
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 147,
                "end": 148
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 153,
                    "end": 154
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 155,
                    "end": 159
                  },
                  "optional": false,
                  "computed": false,
                  "start": 153,
                  "end": 159
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "localeCompare",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 160,
                  "end": 173
                },
                "optional": false,
                "computed": false,
                "start": 153,
                "end": 173
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 174,
                    "end": 175
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 176,
                    "end": 180
                  },
                  "optional": false,
                  "computed": false,
                  "start": 174,
                  "end": 180
                }
              ],
              "optional": false,
              "start": 153,
              "end": 181
            },
            "id": null,
            "generator": false,
            "start": 143,
            "end": 181
          }
        ],
        "optional": false,
        "start": 132,
        "end": 182
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 184,
        "end": 188
      },
      "start": 115,
      "end": 188
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 188
}
```
