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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 113,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 65,
            "name": "items",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 71,
                      "end": 75,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 77,
                      "end": 80,
                      "value": "A",
                      "raw": "\"A\""
                    },
                    "kind": "init",
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 86,
                      "end": 90,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 92,
                      "end": 95,
                      "value": "C",
                      "raw": "\"C\""
                    },
                    "kind": "init",
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 101,
                      "end": 105,
                      "name": "name",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 107,
                      "end": 110,
                      "value": "B",
                      "raw": "\"B\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 124,
            "end": 128,
            "id": {
              "type": "Identifier",
              "start": 124,
              "end": 128,
              "name": "item",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "var",
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
            "name": "items",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 138,
            "end": 142,
            "name": "sort",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 143,
            "end": 181,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 144,
                "end": 145,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 147,
                "end": 148,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 155,
                    "end": 159,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 173,
                  "name": "localeCompare",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 174,
                  "end": 180,
                  "object": {
                    "type": "Identifier",
                    "start": 174,
                    "end": 175,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 176,
                    "end": 180,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
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
