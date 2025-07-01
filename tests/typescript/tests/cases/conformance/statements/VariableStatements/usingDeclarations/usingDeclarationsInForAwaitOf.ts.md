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
        "name": "main",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 19
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "kind": "using",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 45,
                    "end": 47
                  },
                  "init": null,
                  "definite": false,
                  "start": 45,
                  "end": 47
                }
              ],
              "declare": false,
              "start": 39,
              "end": 47
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Symbol",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 55,
                          "end": 61
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "dispose",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 62,
                          "end": 69
                        },
                        "optional": false,
                        "computed": false,
                        "start": 55,
                        "end": 69
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 73,
                          "end": 75
                        },
                        "expression": false,
                        "start": 70,
                        "end": 75
                      },
                      "method": true,
                      "shorthand": false,
                      "computed": true,
                      "optional": false,
                      "start": 54,
                      "end": 75
                    }
                  ],
                  "start": 52,
                  "end": 77
                },
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 79,
                  "end": 83
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 85,
                  "end": 94
                }
              ],
              "start": 51,
              "end": 95
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 97,
              "end": 104
            },
            "start": 28,
            "end": 104
          }
        ],
        "start": 22,
        "end": 106
      },
      "expression": false,
      "start": 0,
      "end": 106
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 106
}
```
