__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 208,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 33,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "decorators": [],
        "name": "getFunc",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 18,
        "end": 22,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 19,
          "end": 22
        }
      },
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 34,
      "end": 55,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 50,
        "decorators": [],
        "name": "setFunc",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 51,
          "end": 52,
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 53,
        "end": 55,
        "body": []
      },
      "expression": false
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
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 74,
            "end": 88,
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 99,
              "end": 117,
              "typeName": {
                "type": "Identifier",
                "start": 99,
                "end": 117,
                "decorators": [],
                "name": "PropertyDescriptor",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "expression": {
              "type": "ObjectExpression",
              "start": 119,
              "end": 205,
              "properties": [
                {
                  "type": "Property",
                  "start": 131,
                  "end": 143,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 131,
                    "end": 134,
                    "decorators": [],
                    "name": "get",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 136,
                    "end": 143,
                    "decorators": [],
                    "name": "getFunc",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 155,
                  "end": 167,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 155,
                    "end": 158,
                    "decorators": [],
                    "name": "set",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 167,
                    "decorators": [],
                    "name": "setFunc",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 179,
                  "end": 197,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 179,
                    "end": 191,
                    "decorators": [],
                    "name": "configurable",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 193,
                    "end": 197,
                    "value": true,
                    "raw": "true"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
