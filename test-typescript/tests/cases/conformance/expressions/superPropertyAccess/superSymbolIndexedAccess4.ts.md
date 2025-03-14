__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 105,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 35,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 34,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "symbol",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 13,
            "end": 34,
            "arguments": [
              {
                "type": "Literal",
                "start": 24,
                "end": 33,
                "raw": "'myThing'",
                "value": "myThing"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 13,
              "end": 23,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 13,
                "end": 19,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 20,
                "end": 23,
                "decorators": [],
                "name": "for",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 37,
      "end": 105,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 47,
        "end": 105,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 53,
            "end": 103,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 60,
              "decorators": [],
              "name": "symbol",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 61,
              "end": 103,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 64,
                "end": 103,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 74,
                    "end": 97,
                    "argument": {
                      "type": "CallExpression",
                      "start": 81,
                      "end": 96,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 81,
                        "end": 94,
                        "computed": true,
                        "object": {
                          "type": "Super",
                          "start": 81,
                          "end": 86
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 87,
                          "end": 93,
                          "decorators": [],
                          "name": "symbol",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 46,
        "decorators": [],
        "name": "Bar",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
