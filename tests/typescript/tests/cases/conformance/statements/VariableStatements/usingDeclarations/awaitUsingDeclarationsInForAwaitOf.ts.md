__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 150,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 150,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 19,
        "decorators": [],
        "name": "main",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 150,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 28,
            "end": 148,
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "start": 39,
              "end": 53,
              "kind": "await using",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 51,
                  "end": 53,
                  "id": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 53,
                    "decorators": [],
                    "name": "d1",
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
              "type": "ArrayExpression",
              "start": 57,
              "end": 139,
              "elements": [
                {
                  "type": "ObjectExpression",
                  "start": 58,
                  "end": 94,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 60,
                      "end": 92,
                      "kind": "init",
                      "key": {
                        "type": "MemberExpression",
                        "start": 67,
                        "end": 86,
                        "object": {
                          "type": "Identifier",
                          "start": 67,
                          "end": 73,
                          "decorators": [],
                          "name": "Symbol",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 74,
                          "end": 86,
                          "decorators": [],
                          "name": "asyncDispose",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 87,
                        "end": 92,
                        "id": null,
                        "generator": false,
                        "async": true,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 90,
                          "end": 92,
                          "body": []
                        },
                        "expression": false
                      },
                      "method": true,
                      "shorthand": false,
                      "computed": true,
                      "optional": false
                    }
                  ]
                },
                {
                  "type": "ObjectExpression",
                  "start": 96,
                  "end": 121,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 98,
                      "end": 119,
                      "kind": "init",
                      "key": {
                        "type": "MemberExpression",
                        "start": 99,
                        "end": 113,
                        "object": {
                          "type": "Identifier",
                          "start": 99,
                          "end": 105,
                          "decorators": [],
                          "name": "Symbol",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 106,
                          "end": 113,
                          "decorators": [],
                          "name": "dispose",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 114,
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
                          "start": 117,
                          "end": 119,
                          "body": []
                        },
                        "expression": false
                      },
                      "method": true,
                      "shorthand": false,
                      "computed": true,
                      "optional": false
                    }
                  ]
                },
                {
                  "type": "Literal",
                  "start": 123,
                  "end": 127,
                  "value": null,
                  "raw": "null"
                },
                {
                  "type": "Identifier",
                  "start": 129,
                  "end": 138,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            },
            "body": {
              "type": "BlockStatement",
              "start": 141,
              "end": 148,
              "body": []
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
