__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 209,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 33,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "name": "getFunc",
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
        "start": 22,
        "end": 33,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 23,
            "end": 32,
            "argument": {
              "type": "Literal",
              "start": 30,
              "end": 31,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 18,
        "end": 22,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 19,
          "end": 22
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 34,
      "end": 55,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 50,
        "name": "setFunc",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 51,
          "end": 52,
          "name": "v",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 53,
        "end": 55,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 67,
      "end": 208,
      "expression": {
        "type": "CallExpression",
        "start": 67,
        "end": 207,
        "callee": {
          "type": "MemberExpression",
          "start": 67,
          "end": 88,
          "object": {
            "type": "Identifier",
            "start": 67,
            "end": 73,
            "name": "Object",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 74,
            "end": 88,
            "name": "defineProperty",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 89,
            "end": 91,
            "properties": []
          },
          {
            "type": "Literal",
            "start": 93,
            "end": 96,
            "value": "0",
            "raw": "\"0\""
          },
          {
            "type": "TSTypeAssertion",
            "start": 98,
            "end": 206,
            "expression": {
              "type": "ObjectExpression",
              "start": 119,
              "end": 205,
              "properties": [
                {
                  "type": "Property",
                  "start": 131,
                  "end": 143,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 131,
                    "end": 134,
                    "name": "get",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 136,
                    "end": 143,
                    "name": "getFunc",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 155,
                  "end": 167,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 155,
                    "end": 158,
                    "name": "set",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 167,
                    "name": "setFunc",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 179,
                  "end": 197,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 179,
                    "end": 191,
                    "name": "configurable",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 193,
                    "end": 197,
                    "value": true,
                    "raw": "true"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 99,
              "end": 117,
              "typeName": {
                "type": "Identifier",
                "start": 99,
                "end": 117,
                "name": "PropertyDescriptor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
