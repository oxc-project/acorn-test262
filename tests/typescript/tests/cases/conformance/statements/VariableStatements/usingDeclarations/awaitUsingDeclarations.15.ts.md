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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 16
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
            "type": "VariableDeclaration",
            "kind": "await using",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 37,
                  "end": 38
                },
                "init": {
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
                          "start": 50,
                          "end": 56
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "asyncDispose",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 57,
                          "end": 69
                        },
                        "optional": false,
                        "computed": false,
                        "start": 50,
                        "end": 69
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": true,
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
                      "start": 43,
                      "end": 75
                    }
                  ],
                  "start": 41,
                  "end": 77
                },
                "definite": false,
                "start": 37,
                "end": 77
              }
            ],
            "declare": false,
            "start": 25,
            "end": 78
          }
        ],
        "start": 19,
        "end": 80
      },
      "expression": false,
      "start": 0,
      "end": 80
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 80
}
```
