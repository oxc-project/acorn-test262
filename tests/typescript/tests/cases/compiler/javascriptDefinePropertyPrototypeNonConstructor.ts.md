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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "decorators": [],
        "name": "Graphic",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 19,
        "end": 22,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 24,
      "end": 123,
      "expression": {
        "type": "CallExpression",
        "start": 24,
        "end": 122,
        "callee": {
          "type": "MemberExpression",
          "start": 24,
          "end": 45,
          "object": {
            "type": "Identifier",
            "start": 24,
            "end": 30,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 31,
            "end": 45,
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
            "type": "MemberExpression",
            "start": 46,
            "end": 63,
            "object": {
              "type": "Identifier",
              "start": 46,
              "end": 53,
              "decorators": [],
              "name": "Graphic",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 54,
              "end": 63,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          {
            "type": "Literal",
            "start": 65,
            "end": 75,
            "value": "instance",
            "raw": "\"instance\""
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 84,
                  "decorators": [],
                  "name": "get",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 86,
                  "end": 119,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
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
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
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
