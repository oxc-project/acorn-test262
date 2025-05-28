__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 188,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 114,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 113,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 65,
            "decorators": [],
            "name": "items",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 68,
            "end": 113,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 69,
                "end": 82,
                "properties": [
                  {
                    "type": "Property",
                    "start": 71,
                    "end": 80,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 71,
                      "end": 75,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 77,
                      "end": 80,
                      "value": "A",
                      "raw": "\"A\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 84,
                "end": 97,
                "properties": [
                  {
                    "type": "Property",
                    "start": 86,
                    "end": 95,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 86,
                      "end": 90,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 92,
                      "end": 95,
                      "value": "C",
                      "raw": "\"C\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 99,
                "end": 112,
                "properties": [
                  {
                    "type": "Property",
                    "start": 101,
                    "end": 110,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 101,
                      "end": 105,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 107,
                      "end": 110,
                      "value": "B",
                      "raw": "\"B\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 115,
      "end": 188,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 120,
        "end": 128,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 124,
            "end": 128,
            "id": {
              "type": "Identifier",
              "start": 124,
              "end": 128,
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "CallExpression",
        "start": 132,
        "end": 182,
        "callee": {
          "type": "MemberExpression",
          "start": 132,
          "end": 142,
          "object": {
            "type": "Identifier",
            "start": 132,
            "end": 137,
            "decorators": [],
            "name": "items",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 138,
            "end": 142,
            "decorators": [],
            "name": "sort",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 143,
            "end": 181,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 144,
                "end": 145,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 147,
                "end": 148,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "start": 153,
              "end": 181,
              "callee": {
                "type": "MemberExpression",
                "start": 153,
                "end": 173,
                "object": {
                  "type": "MemberExpression",
                  "start": 153,
                  "end": 159,
                  "object": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 154,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 155,
                    "end": 159,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 173,
                  "decorators": [],
                  "name": "localeCompare",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 174,
                  "end": 180,
                  "object": {
                    "type": "Identifier",
                    "start": 174,
                    "end": 175,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 176,
                    "end": 180,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                }
              ],
              "optional": false
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 184,
        "end": 188,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
