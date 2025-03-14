intlNumberFormatES5UseGrouping.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 278,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 54,
      "expression": {
        "type": "NewExpression",
        "start": 0,
        "end": 53,
        "arguments": [
          {
            "type": "Literal",
            "start": 22,
            "end": 29,
            "raw": "'en-GB'",
            "value": "en-GB"
          },
          {
            "type": "ObjectExpression",
            "start": 31,
            "end": 52,
            "properties": [
              {
                "type": "Property",
                "start": 33,
                "end": 50,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 44,
                  "decorators": [],
                  "name": "useGrouping",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 46,
                  "end": 50,
                  "raw": "true",
                  "value": true
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 4,
          "end": 21,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 4,
            "end": 8,
            "decorators": [],
            "name": "Intl",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 9,
            "end": 21,
            "decorators": [],
            "name": "NumberFormat",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 55,
      "end": 111,
      "expression": {
        "type": "NewExpression",
        "start": 55,
        "end": 110,
        "arguments": [
          {
            "type": "Literal",
            "start": 77,
            "end": 84,
            "raw": "'en-GB'",
            "value": "en-GB"
          },
          {
            "type": "ObjectExpression",
            "start": 86,
            "end": 109,
            "properties": [
              {
                "type": "Property",
                "start": 88,
                "end": 107,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 88,
                  "end": 99,
                  "decorators": [],
                  "name": "useGrouping",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 101,
                  "end": 107,
                  "raw": "'true'",
                  "value": "true"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 59,
          "end": 76,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 59,
            "end": 63,
            "decorators": [],
            "name": "Intl",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 64,
            "end": 76,
            "decorators": [],
            "name": "NumberFormat",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 128,
      "end": 186,
      "expression": {
        "type": "NewExpression",
        "start": 128,
        "end": 185,
        "arguments": [
          {
            "type": "Literal",
            "start": 150,
            "end": 157,
            "raw": "'en-GB'",
            "value": "en-GB"
          },
          {
            "type": "ObjectExpression",
            "start": 159,
            "end": 184,
            "properties": [
              {
                "type": "Property",
                "start": 161,
                "end": 182,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 172,
                  "decorators": [],
                  "name": "useGrouping",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 174,
                  "end": 182,
                  "raw": "'always'",
                  "value": "always"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 132,
          "end": 149,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 132,
            "end": 136,
            "decorators": [],
            "name": "Intl",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 137,
            "end": 149,
            "decorators": [],
            "name": "NumberFormat",
            "optional": false
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 204,
      "end": 277,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 210,
          "end": 276,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 210,
            "end": 225,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 212,
                "end": 223,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 212,
                  "end": 223,
                  "decorators": [],
                  "name": "useGrouping",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 212,
                  "end": 223,
                  "decorators": [],
                  "name": "useGrouping",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "CallExpression",
            "start": 228,
            "end": 276,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 228,
              "end": 274,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 228,
                "end": 258,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 250,
                    "end": 257,
                    "raw": "'en-GB'",
                    "value": "en-GB"
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 232,
                  "end": 249,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 232,
                    "end": 236,
                    "decorators": [],
                    "name": "Intl",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 237,
                    "end": 249,
                    "decorators": [],
                    "name": "NumberFormat",
                    "optional": false
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 259,
                "end": 274,
                "decorators": [],
                "name": "resolvedOptions",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
