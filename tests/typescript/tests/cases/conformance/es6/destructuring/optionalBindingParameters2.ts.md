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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 15,
                "end": 16
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 15,
                "end": 16
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 15,
              "end": 16
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 18,
                "end": 19
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 18,
                "end": 19
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 18,
              "end": 19
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 21,
                "end": 22
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 21,
                "end": 22
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 21,
              "end": 22
            }
          ],
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 29,
                    "end": 30
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 32,
                      "end": 38
                    },
                    "start": 30,
                    "end": 38
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 29,
                  "end": 39
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 40,
                    "end": 41
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 43,
                      "end": 49
                    },
                    "start": 41,
                    "end": 49
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 40,
                  "end": 50
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 51,
                    "end": 52
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 54,
                      "end": 61
                    },
                    "start": 52,
                    "end": 61
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 51,
                  "end": 61
                }
              ],
              "start": 27,
              "end": 63
            },
            "start": 25,
            "end": 63
          },
          "start": 13,
          "end": 63
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 65,
        "end": 69
      },
      "expression": false,
      "start": 0,
      "end": 69
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 71,
          "end": 74
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 77,
                  "end": 78
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 80,
                  "end": 82
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 77,
                "end": 82
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 84,
                  "end": 85
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 87,
                  "end": 88
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 84,
                "end": 88
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 90,
                  "end": 91
                },
                "value": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 93,
                  "end": 98
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 90,
                "end": 98
              }
            ],
            "start": 75,
            "end": 100
          }
        ],
        "optional": false,
        "start": 71,
        "end": 101
      },
      "directive": null,
      "start": 71,
      "end": 102
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 104,
          "end": 107
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 110,
                  "end": 111
                },
                "value": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 113,
                  "end": 118
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 110,
                "end": 118
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 120,
                  "end": 121
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 123,
                  "end": 124
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 120,
                "end": 124
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 126,
                  "end": 127
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 129,
                  "end": 131
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 126,
                "end": 131
              }
            ],
            "start": 108,
            "end": 133
          }
        ],
        "optional": false,
        "start": 104,
        "end": 134
      },
      "directive": null,
      "start": 104,
      "end": 135
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 135
}
```
