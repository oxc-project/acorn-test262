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
        "name": "getFunc",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 16
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 19,
          "end": 22
        },
        "start": 18,
        "end": 22
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 30,
              "end": 31
            },
            "start": 23,
            "end": 32
          }
        ],
        "start": 22,
        "end": 33
      },
      "expression": false,
      "start": 0,
      "end": 33
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "setFunc",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 50
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": null,
          "start": 51,
          "end": 52
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 53,
        "end": 55
      },
      "expression": false,
      "start": 34,
      "end": 55
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 73
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 88
          },
          "optional": false,
          "computed": false,
          "start": 67,
          "end": 88
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 89,
            "end": 91
          },
          {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 93,
            "end": 96
          },
          {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PropertyDescriptor",
                "optional": false,
                "typeAnnotation": null,
                "start": 99,
                "end": 117
              },
              "typeArguments": null,
              "start": 99,
              "end": 117
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "get",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 131,
                    "end": 134
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getFunc",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 136,
                    "end": 143
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 131,
                  "end": 143
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "set",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 155,
                    "end": 158
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "setFunc",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 160,
                    "end": 167
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 155,
                  "end": 167
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "configurable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 179,
                    "end": 191
                  },
                  "value": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 193,
                    "end": 197
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 179,
                  "end": 197
                }
              ],
              "start": 119,
              "end": 205
            },
            "start": 98,
            "end": 206
          }
        ],
        "optional": false,
        "start": 67,
        "end": 207
      },
      "directive": null,
      "start": 67,
      "end": 208
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 208
}
```
