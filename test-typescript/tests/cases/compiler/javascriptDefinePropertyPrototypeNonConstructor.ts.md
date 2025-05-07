__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 124,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 22,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 19,
        "end": 22,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "decorators": [],
        "name": "Graphic",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 24,
      "end": 123,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 24,
        "end": 122,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 46,
            "end": 63,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 46,
              "end": 53,
              "decorators": [],
              "name": "Graphic",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 54,
              "end": 63,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "Literal",
            "start": 65,
            "end": 75,
            "raw": "\"instance\"",
            "value": "instance",
            "regex": null,
            "bigint": null
          },
          {
            "type": "ObjectExpression",
            "start": 77,
            "end": 121,
            "properties": [
              {
                "type": "Property",
                "start": 81,
                "end": 119,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 84,
                  "decorators": [],
                  "name": "get",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 86,
                  "end": 119,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 97,
                    "end": 119,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 103,
                        "end": 115,
                        "argument": {
                          "type": "ThisExpression",
                          "start": 110,
                          "end": 114
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 24,
          "end": 45,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 24,
            "end": 30,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 31,
            "end": 45,
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
