__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 106,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 106,
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
        "end": 106,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 28,
            "end": 104,
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "start": 39,
              "end": 47,
              "kind": "using",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 45,
                  "end": 47,
                  "id": {
                    "type": "Identifier",
                    "start": 45,
                    "end": 47,
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
              "start": 51,
              "end": 95,
              "elements": [
                {
                  "type": "ObjectExpression",
                  "start": 52,
                  "end": 77,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 54,
                      "end": 75,
                      "kind": "init",
                      "key": {
                        "type": "MemberExpression",
                        "start": 55,
                        "end": 69,
                        "object": {
                          "type": "Identifier",
                          "start": 55,
                          "end": 61,
                          "decorators": [],
                          "name": "Symbol",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 62,
                          "end": 69,
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
                        "start": 70,
                        "end": 75,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 73,
                          "end": 75,
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
                  "start": 79,
                  "end": 83,
                  "value": null,
                  "raw": "null"
                },
                {
                  "type": "Identifier",
                  "start": 85,
                  "end": 94,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            },
            "body": {
              "type": "BlockStatement",
              "start": 97,
              "end": 104,
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
